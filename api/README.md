# KOMA LINK API仕様書

## 概要

KOMA LINK MVPのAPI仕様。Option A（静的公開）前提のため、モックJSONで動作する設計。
将来BaaS（Supabase / Firebase等）に切り替えやすいRESTful形式を採用。

## Base URL

```
/api/v1
```

---

## データモデル

### 1. Users

| フィールド | 型 | 説明 |
|---|---|---|
| id | string | ユーザーID（UUID） |
| username | string | ユーザー名（一意） |
| created_at | string | ISO 8601 |

### 2. Profiles

| フィールド | 型 | 説明 |
|---|---|---|
| id | string | プロフィールID |
| user_id | string | FK → Users.id |
| display_name | string | 表示名 |
| bio | string | 自己紹介 |
| avatar_url | string \| null | アバター画像URL |
| avatar_text | string | アバター代替テキスト（頭文字） |
| post_count | number | 投稿数 |
| like_count | number | 獲得いいね数 |
| list_count | number | リスト数 |
| follower_count | number | フォロワー数 |
| like_rate | number | いいジャン率（%） |

### 3. Works

| フィールド | 型 | 説明 |
|---|---|---|
| id | string | 作品ID |
| title | string | 作品名 |
| author | string | 作者名 |
| cover_url | string \| null | 表紙画像URL |
| total_episodes | number | 総話数 |

### 4. Episodes

| フィールド | 型 | 説明 |
|---|---|---|
| id | string | エピソードID |
| work_id | string | FK → Works.id |
| number | number | 話数 |
| title | string | サブタイトル |
| page_count | number | ページ数 |

### 5. Panels

| フィールド | 型 | 説明 |
|---|---|---|
| id | string | コマID |
| episode_id | string | FK → Episodes.id |
| page_number | number | ページ番号 |
| panel_index | number | コマ番号（ページ内） |
| image_url | string | コマ画像URL |
| comment_count | number | コメント数 |

### 6. Comments

| フィールド | 型 | 説明 |
|---|---|---|
| id | string | コメントID |
| user_id | string | FK → Users.id |
| text | string | コメント本文 |
| spoiler | boolean | ネタバレフラグ（必須） |
| created_at | string | ISO 8601 |
| like_count | number | いいね数 |
| reply_count | number | 返信数 |
| parent_id | string \| null | 返信先コメントID |

### 7. Attachments

| フィールド | 型 | 説明 |
|---|---|---|
| id | string | 添付ファイルID |
| comment_id | string | FK → Comments.id |
| type | string | "image" \| "video" |
| url | string | ファイルURL |
| thumbnail_url | string \| null | サムネイルURL |

### 8. Likes

| フィールド | 型 | 説明 |
|---|---|---|
| id | string | いいねID |
| user_id | string | FK → Users.id |
| comment_id | string | FK → Comments.id |
| created_at | string | ISO 8601 |

### 9. Tags

| フィールド | 型 | 説明 |
|---|---|---|
| id | string | タグID |
| name | string | タグ名 |

プリセットタグ: `考察`, `二次創作`, `小ネタ`, `ネタバレあり`

### 10. PanelLinks

コメントと複数コマの紐付け（多対多）。

| フィールド | 型 | 説明 |
|---|---|---|
| id | string | リンクID |
| comment_id | string | FK → Comments.id |
| panel_id | string | FK → Panels.id |

### 11. Lists

| フィールド | 型 | 説明 |
|---|---|---|
| id | string | リストID |
| user_id | string | FK → Users.id |
| title | string | リスト名 |
| description | string | 説明 |
| created_at | string | ISO 8601 |

### 12. ListItems

| フィールド | 型 | 説明 |
|---|---|---|
| id | string | アイテムID |
| list_id | string | FK → Lists.id |
| comment_id | string | FK → Comments.id |
| added_at | string | ISO 8601 |

---

## APIエンドポイント

### 1. コマIDでコメント取得

```
GET /panels/{panelId}/comments
```

**クエリパラメータ:**

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| sort | string | No | `popular`（デフォルト） \| `recent` |
| read_up_to | string | No | 既読コマID。指定時、未読コマのネタバレコメントを除外 |
| limit | number | No | 取得件数（デフォルト: 20） |
| offset | number | No | オフセット（デフォルト: 0） |

**レスポンス: `200 OK`**

```json
{
  "panel_id": "panel-001",
  "total": 32,
  "sort": "popular",
  "comments": [
    {
      "id": "comment-001",
      "user": {
        "id": "user-001",
        "display_name": "みゃーご",
        "avatar_text": "み"
      },
      "text": "このタイミングでマイナス出てくるのすごい…",
      "spoiler": false,
      "tags": ["考察"],
      "panels": ["panel-001"],
      "attachments": [],
      "like_count": 1506,
      "reply_count": 23,
      "created_at": "2026-03-01T00:01:00+09:00"
    }
  ]
}
```

---

### 2. コメント投稿

```
POST /panels/{panelId}/comments
```

**リクエストボディ:**

```json
{
  "text": "ここは伏線！次のページとの対比が最高。",
  "spoiler": false,
  "tag_ids": ["tag-001"],
  "panel_ids": ["panel-002", "panel-004"],
  "attachments": [
    {
      "type": "image",
      "url": "https://example.com/fanart.png"
    }
  ],
  "parent_id": null
}
```

**バリデーション:**
- `spoiler` フィールドは必須（ネタバレ制御仕様）
- `text` は1文字以上、1000文字以下
- `panel_ids` は1つ以上必須（投稿先コマ）
- `attachments` は最大4件

**レスポンス: `201 Created`**

```json
{
  "id": "comment-new",
  "user_id": "user-current",
  "text": "ここは伏線！次のページとの対比が最高。",
  "spoiler": false,
  "tags": ["考察"],
  "panels": ["panel-002", "panel-004"],
  "attachments": [],
  "like_count": 0,
  "reply_count": 0,
  "created_at": "2026-03-01T15:30:00+09:00"
}
```

---

### 3. コメントへのいいね

```
POST /comments/{commentId}/likes
```

**レスポンス: `201 Created`**

```json
{
  "id": "like-new",
  "comment_id": "comment-001",
  "user_id": "user-current",
  "new_like_count": 1507,
  "created_at": "2026-03-01T15:31:00+09:00"
}
```

**いいね解除: `DELETE /comments/{commentId}/likes`**

```json
{
  "comment_id": "comment-001",
  "new_like_count": 1506
}
```

---

### 4. コメント返信一覧取得

```
GET /comments/{commentId}/replies
```

**クエリパラメータ:**

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| limit | number | No | 取得件数（デフォルト: 20） |
| offset | number | No | オフセット（デフォルト: 0） |

**レスポンス: `200 OK`**

```json
{
  "comment_id": "comment-001",
  "total": 23,
  "replies": [
    {
      "id": "comment-010",
      "user": {
        "id": "user-003",
        "display_name": "孤爪",
        "avatar_text": "孤"
      },
      "text": "まさにそれ！伏線だと思います",
      "spoiler": false,
      "tags": [],
      "like_count": 45,
      "created_at": "2026-03-01T00:05:00+09:00"
    }
  ]
}
```

---

### 5. 複数コマの関連取得

```
GET /panels/{panelId}/related
```

**クエリパラメータ:**

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| scope | string | No | `nearby`（同エピソード内）\| `cross`（別巻・別作品）\| `all`（デフォルト） |

**レスポンス: `200 OK`**

```json
{
  "panel_id": "panel-002",
  "related": [
    {
      "panel": {
        "id": "panel-004",
        "image_url": "assets/panels/panel-shock.png",
        "episode_title": "第1話",
        "work_title": "ブラックジャックによろしく",
        "page_number": 15,
        "panel_index": 2
      },
      "link_count": 5,
      "relation_type": "nearby"
    },
    {
      "panel": {
        "id": "panel-003",
        "image_url": "assets/panels/panel-food.png",
        "episode_title": "第1話",
        "work_title": "ブラックジャックによろしく",
        "page_number": 10,
        "panel_index": 1
      },
      "link_count": 3,
      "relation_type": "nearby"
    }
  ]
}
```

---

### 6. プロフィール取得

```
GET /users/{userId}/profile
```

**レスポンス: `200 OK`**

```json
{
  "id": "user-001",
  "display_name": "みゃーご / 考察好き",
  "bio": "ジャンプ+の考察をメインに投稿しています",
  "avatar_text": "み",
  "avatar_url": null,
  "post_count": 89,
  "like_count": 15234,
  "list_count": 5,
  "follower_count": 2113,
  "like_rate": 78,
  "spoiler_setting": {
    "hide_unread_spoilers": true,
    "read_up_to": {
      "work-001": "panel-004"
    }
  }
}
```

---

### 7. ユーザーの投稿履歴取得

```
GET /users/{userId}/comments
```

**クエリパラメータ:**

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| type | string | No | `posted`（デフォルト） \| `liked` |
| limit | number | No | 取得件数（デフォルト: 20） |
| offset | number | No | オフセット（デフォルト: 0） |

**レスポンス: `200 OK`**

```json
{
  "user_id": "user-001",
  "type": "posted",
  "total": 89,
  "comments": [
    {
      "id": "comment-050",
      "text": "この食事シーンは、後の対比を仕込んでる。",
      "spoiler": false,
      "tags": ["考察"],
      "like_count": 1506,
      "panels": [
        {
          "id": "panel-003",
          "image_url": "assets/panels/panel-food.png",
          "work_title": "ブラックジャックによろしく",
          "episode_title": "第1話"
        }
      ],
      "created_at": "2026-02-28T14:00:00+09:00"
    }
  ]
}
```

---

### 8. 人気コメント取得

```
GET /comments/popular
```

**クエリパラメータ:**

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| period | string | No | `day` \| `week`（デフォルト） \| `month` |
| limit | number | No | 取得件数（デフォルト: 10） |

**レスポンス: `200 OK`**

```json
{
  "period": "week",
  "total": 100,
  "comments": [
    {
      "id": "comment-001",
      "user": {
        "id": "user-001",
        "display_name": "みゃーご",
        "avatar_text": "み"
      },
      "text": "このタイミングでマイナス出てくるのすごい…",
      "spoiler": false,
      "tags": ["考察"],
      "panels": [
        {
          "id": "panel-001",
          "image_url": "assets/panels/panel-city.png",
          "work_title": "ブラックジャックによろしく"
        }
      ],
      "like_count": 1506,
      "reply_count": 23,
      "created_at": "2026-03-01T00:01:00+09:00"
    }
  ]
}
```

---

## ネタバレ制御仕様

### 1. 投稿時のネタバレフラグ

- コメント投稿時に `spoiler` フィールドを**必須**とする
- `"ネタバレあり"` タグ選択時は `spoiler: true` を自動設定
- フロントエンド側で投稿前に確認UIを表示

### 2. 未読コマのコメント除外

- `GET /panels/:panelId/comments` に `read_up_to` パラメータを指定
- 指定コマIDより後のコマに紐づくネタバレコメント（`spoiler: true`）を除外
- `spoiler: false` のコメントは常に表示

### 3. ユーザー設定

```json
{
  "spoiler_setting": {
    "hide_unread_spoilers": true,
    "read_up_to": {
      "work-001": "panel-004"
    }
  }
}
```

- `hide_unread_spoilers`: ネタバレ非表示のON/OFF
- `read_up_to`: 作品ごとに既読の最終コマIDを記録

---

## エラーレスポンス

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "指定されたコマが見つかりません"
  }
}
```

| コード | HTTPステータス | 説明 |
|---|---|---|
| VALIDATION_ERROR | 400 | バリデーションエラー |
| NOT_FOUND | 404 | リソースが見つからない |
| SPOILER_REQUIRED | 400 | spoilerフラグ未指定 |
| RATE_LIMITED | 429 | レート制限 |
