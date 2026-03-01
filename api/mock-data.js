/**
 * KOMA LINK モックデータ
 *
 * prototype.html に <script src="api/mock-data.js"></script> で埋め込み可能。
 * 将来BaaS切り替え時はfetch()に差し替えるだけで済む設計。
 */

const MOCK = (() => {

  // ─── Tags ───
  const tags = [
    { id: "tag-001", name: "考察" },
    { id: "tag-002", name: "二次創作" },
    { id: "tag-003", name: "小ネタ" },
    { id: "tag-004", name: "ネタバレあり" },
  ];

  // ─── Users ───
  const users = [
    { id: "user-001", username: "myago",    created_at: "2025-12-01T10:00:00+09:00" },
    { id: "user-002", username: "kozume",   created_at: "2025-12-15T08:00:00+09:00" },
    { id: "user-003", username: "misettei", created_at: "2026-01-10T12:00:00+09:00" },
    { id: "user-004", username: "gumi",     created_at: "2026-01-20T09:00:00+09:00" },
    { id: "user-005", username: "yuki",     created_at: "2025-11-01T10:00:00+09:00" },
    { id: "user-006", username: "takeshi",  created_at: "2026-02-01T14:00:00+09:00" },
    { id: "user-007", username: "haruka",   created_at: "2026-02-05T18:00:00+09:00" },
    { id: "user-008", username: "sora",     created_at: "2026-02-10T11:00:00+09:00" },
  ];

  // ─── Profiles ───
  const profiles = [
    {
      id: "profile-001", user_id: "user-001",
      display_name: "みゃーご / 考察好き",
      bio: "ジャンプ+の考察をメインに投稿しています",
      avatar_url: null, avatar_text: "み",
      post_count: 89, like_count: 15234, list_count: 5,
      follower_count: 2113, like_rate: 78,
    },
    {
      id: "profile-002", user_id: "user-002",
      display_name: "孤爪",
      bio: "毎週ジャンプ+読んでます！",
      avatar_url: null, avatar_text: "孤",
      post_count: 45, like_count: 3200, list_count: 2,
      follower_count: 560, like_rate: 65,
    },
    {
      id: "profile-003", user_id: "user-003",
      display_name: "未設定",
      bio: "",
      avatar_url: null, avatar_text: "未",
      post_count: 12, like_count: 2100, list_count: 0,
      follower_count: 180, like_rate: 55,
    },
    {
      id: "profile-004", user_id: "user-004",
      display_name: "グミ",
      bio: "二次創作イラスト描いてます",
      avatar_url: null, avatar_text: "グ",
      post_count: 67, like_count: 8900, list_count: 4,
      follower_count: 1340, like_rate: 72,
    },
    {
      id: "profile-005", user_id: "user-005",
      display_name: "ユキ / 編集者見習い",
      bio: "マンガの構成に注目して読むのが好き",
      avatar_url: null, avatar_text: "ユ",
      post_count: 12, like_count: 248, list_count: 3,
      follower_count: 35, like_rate: 60,
    },
    {
      id: "profile-006", user_id: "user-006",
      display_name: "タケシ / 伏線ハンター",
      bio: "伏線を見つけるのが生きがい",
      avatar_url: null, avatar_text: "タ",
      post_count: 34, like_count: 4500, list_count: 2,
      follower_count: 890, like_rate: 70,
    },
    {
      id: "profile-007", user_id: "user-007",
      display_name: "はるか",
      bio: "ファンアート描いてます！",
      avatar_url: null, avatar_text: "は",
      post_count: 28, like_count: 6700, list_count: 1,
      follower_count: 1200, like_rate: 82,
    },
    {
      id: "profile-008", user_id: "user-008",
      display_name: "ソラ",
      bio: "名シーンコレクター",
      avatar_url: null, avatar_text: "ソ",
      post_count: 56, like_count: 3400, list_count: 7,
      follower_count: 670, like_rate: 58,
    },
  ];

  // ─── Works ───
  const works = [
    {
      id: "work-001",
      title: "ブラックジャックによろしく",
      author: "佐藤秀峰",
      cover_url: null,
      total_episodes: 127,
    },
  ];

  // ─── Episodes ───
  const episodes = [
    {
      id: "episode-001",
      work_id: "work-001",
      number: 1,
      title: "第1話",
      page_count: 209,
    },
  ];

  // ─── Panels ───
  const panels = [
    {
      id: "panel-001",
      episode_id: "episode-001",
      page_number: 3,
      panel_index: 1,
      image_url: "assets/panels/panel-city.png",
      comment_count: 32,
    },
    {
      id: "panel-002",
      episode_id: "episode-001",
      page_number: 8,
      panel_index: 1,
      image_url: "assets/panels/panel-noodles.png",
      comment_count: 18,
    },
    {
      id: "panel-003",
      episode_id: "episode-001",
      page_number: 10,
      panel_index: 1,
      image_url: "assets/panels/panel-food.png",
      comment_count: 12,
    },
    {
      id: "panel-004",
      episode_id: "episode-001",
      page_number: 15,
      panel_index: 2,
      image_url: "assets/panels/panel-shock.png",
      comment_count: 25,
    },
  ];

  // ─── Comments ───
  const comments = [
    // panel-001 (city) のコメント
    {
      id: "comment-001", user_id: "user-001",
      text: "このタイミングでマイナス出てくるのすごい…",
      spoiler: false, tags: ["考察"],
      panel_ids: ["panel-001"],
      like_count: 1506, reply_count: 23,
      parent_id: null,
      created_at: "2026-03-01T00:01:00+09:00",
    },
    {
      id: "comment-002", user_id: "user-002",
      text: "100話おめでとうございます！( ´ ▽ ` )",
      spoiler: false, tags: [],
      panel_ids: ["panel-001"],
      like_count: 1236, reply_count: 8,
      parent_id: null,
      created_at: "2026-03-01T00:01:00+09:00",
    },
    {
      id: "comment-003", user_id: "user-003",
      text: "この10話でちゃんとしたはっとする目線が…",
      spoiler: false, tags: ["考察"],
      panel_ids: ["panel-001"],
      like_count: 1197, reply_count: 15,
      parent_id: null,
      created_at: "2026-03-01T00:02:00+09:00",
    },
    {
      id: "comment-004", user_id: "user-004",
      text: "理解者枠に収まる名言に笑う",
      spoiler: false, tags: ["小ネタ"],
      panel_ids: ["panel-001"],
      like_count: 978, reply_count: 5,
      parent_id: null,
      created_at: "2026-03-01T00:01:00+09:00",
    },
    {
      id: "comment-005", user_id: "user-006",
      text: "病院の外観で社会背景を説明してるのが熱い。構図の使い方が上手い",
      spoiler: false, tags: ["考察"],
      panel_ids: ["panel-001"],
      like_count: 456, reply_count: 3,
      parent_id: null,
      created_at: "2026-02-28T22:30:00+09:00",
    },
    {
      id: "comment-006", user_id: "user-007",
      text: "この場面の空気感を描きました！",
      spoiler: false, tags: ["二次創作"],
      panel_ids: ["panel-001"],
      like_count: 890, reply_count: 12,
      parent_id: null,
      created_at: "2026-02-28T20:00:00+09:00",
    },
    {
      id: "comment-007", user_id: "user-008",
      text: "この建物、3巻の最後にも出てくるんだよね",
      spoiler: true, tags: ["考察", "ネタバレあり"],
      panel_ids: ["panel-001"],
      like_count: 320, reply_count: 7,
      parent_id: null,
      created_at: "2026-02-28T18:00:00+09:00",
    },

    // panel-002 (noodles) のコメント
    {
      id: "comment-008", user_id: "user-005",
      text: "ここは伏線！次のページとの対比が最高。",
      spoiler: false, tags: ["考察"],
      panel_ids: ["panel-002"],
      like_count: 134, reply_count: 2,
      parent_id: null,
      created_at: "2026-02-28T14:00:00+09:00",
    },
    {
      id: "comment-009", user_id: "user-001",
      text: "日常シーンの描写が丁寧で好き",
      spoiler: false, tags: [],
      panel_ids: ["panel-002"],
      like_count: 267, reply_count: 4,
      parent_id: null,
      created_at: "2026-02-28T12:00:00+09:00",
    },
    {
      id: "comment-010", user_id: "user-006",
      text: "この食事シーンと後のシリアス展開の対比が鳥肌",
      spoiler: true, tags: ["考察", "ネタバレあり"],
      panel_ids: ["panel-002", "panel-004"],
      like_count: 523, reply_count: 9,
      parent_id: null,
      created_at: "2026-02-27T23:00:00+09:00",
    },
    {
      id: "comment-011", user_id: "user-004",
      text: "ラーメンの湯気の描き方が神",
      spoiler: false, tags: ["小ネタ"],
      panel_ids: ["panel-002"],
      like_count: 189, reply_count: 1,
      parent_id: null,
      created_at: "2026-02-27T21:00:00+09:00",
    },
    {
      id: "comment-012", user_id: "user-007",
      text: "この場面のファンアート描きました",
      spoiler: false, tags: ["二次創作"],
      panel_ids: ["panel-002"],
      like_count: 445, reply_count: 6,
      parent_id: null,
      created_at: "2026-02-27T19:00:00+09:00",
    },

    // panel-003 (food) のコメント
    {
      id: "comment-013", user_id: "user-001",
      text: "この食事シーンは、後の対比を仕込んでる。",
      spoiler: false, tags: ["考察"],
      panel_ids: ["panel-003"],
      like_count: 1506, reply_count: 18,
      parent_id: null,
      created_at: "2026-02-28T14:00:00+09:00",
    },
    {
      id: "comment-014", user_id: "user-008",
      text: "飯テロすぎる…",
      spoiler: false, tags: [],
      panel_ids: ["panel-003"],
      like_count: 345, reply_count: 3,
      parent_id: null,
      created_at: "2026-02-28T10:00:00+09:00",
    },
    {
      id: "comment-015", user_id: "user-003",
      text: "箸の持ち方でキャラの性格出してるの細かい",
      spoiler: false, tags: ["小ネタ"],
      panel_ids: ["panel-003"],
      like_count: 278, reply_count: 2,
      parent_id: null,
      created_at: "2026-02-27T16:00:00+09:00",
    },

    // panel-004 (shock) のコメント
    {
      id: "comment-016", user_id: "user-005",
      text: "表情の崩し方、作者の本気を感じる。",
      spoiler: false, tags: ["考察"],
      panel_ids: ["panel-004"],
      like_count: 87, reply_count: 1,
      parent_id: null,
      created_at: "2026-02-28T14:00:00+09:00",
    },
    {
      id: "comment-017", user_id: "user-001",
      text: "背景の密度で世界の重さを表現してる。",
      spoiler: false, tags: ["考察"],
      panel_ids: ["panel-004"],
      like_count: 1122, reply_count: 14,
      parent_id: null,
      created_at: "2026-02-27T22:00:00+09:00",
    },
    {
      id: "comment-018", user_id: "user-002",
      text: "ここで泣いた…",
      spoiler: false, tags: [],
      panel_ids: ["panel-004"],
      like_count: 654, reply_count: 5,
      parent_id: null,
      created_at: "2026-02-27T20:00:00+09:00",
    },
    {
      id: "comment-019", user_id: "user-006",
      text: "このコマと1巻の冒頭が繋がってるの気づいた人いる？",
      spoiler: true, tags: ["考察", "ネタバレあり"],
      panel_ids: ["panel-004", "panel-001"],
      like_count: 789, reply_count: 11,
      parent_id: null,
      created_at: "2026-02-27T18:00:00+09:00",
    },
    {
      id: "comment-020", user_id: "user-004",
      text: "作画カロリーえぐい",
      spoiler: false, tags: [],
      panel_ids: ["panel-004"],
      like_count: 432, reply_count: 2,
      parent_id: null,
      created_at: "2026-02-27T15:00:00+09:00",
    },
    {
      id: "comment-021", user_id: "user-007",
      text: "この表情を模写してみた！難しかった",
      spoiler: false, tags: ["二次創作"],
      panel_ids: ["panel-004"],
      like_count: 567, reply_count: 8,
      parent_id: null,
      created_at: "2026-02-26T20:00:00+09:00",
    },

    // 返信コメント（comment-001 への返信）
    {
      id: "comment-r01", user_id: "user-002",
      text: "まさにそれ！伏線だと思います",
      spoiler: false, tags: [],
      panel_ids: ["panel-001"],
      like_count: 45, reply_count: 0,
      parent_id: "comment-001",
      created_at: "2026-03-01T00:05:00+09:00",
    },
    {
      id: "comment-r02", user_id: "user-006",
      text: "3巻読むとこの意味がわかるよね",
      spoiler: true, tags: ["ネタバレあり"],
      panel_ids: ["panel-001"],
      like_count: 32, reply_count: 0,
      parent_id: "comment-001",
      created_at: "2026-03-01T00:10:00+09:00",
    },
    {
      id: "comment-r03", user_id: "user-005",
      text: "考察読むの楽しい！",
      spoiler: false, tags: [],
      panel_ids: ["panel-001"],
      like_count: 12, reply_count: 0,
      parent_id: "comment-001",
      created_at: "2026-03-01T00:15:00+09:00",
    },
  ];

  // ─── Attachments ───
  const attachments = [
    {
      id: "attach-001",
      comment_id: "comment-006",
      type: "image",
      url: "assets/panels/panel-city.png",
      thumbnail_url: "assets/panels/panel-city.png",
    },
    {
      id: "attach-002",
      comment_id: "comment-012",
      type: "image",
      url: "assets/panels/panel-noodles.png",
      thumbnail_url: "assets/panels/panel-noodles.png",
    },
    {
      id: "attach-003",
      comment_id: "comment-021",
      type: "image",
      url: "assets/panels/panel-shock.png",
      thumbnail_url: "assets/panels/panel-shock.png",
    },
  ];

  // ─── Likes ───
  const likes = [
    { id: "like-001", user_id: "user-005", comment_id: "comment-001", created_at: "2026-03-01T00:03:00+09:00" },
    { id: "like-002", user_id: "user-005", comment_id: "comment-002", created_at: "2026-03-01T00:04:00+09:00" },
    { id: "like-003", user_id: "user-005", comment_id: "comment-013", created_at: "2026-02-28T15:00:00+09:00" },
    { id: "like-004", user_id: "user-001", comment_id: "comment-008", created_at: "2026-02-28T16:00:00+09:00" },
    { id: "like-005", user_id: "user-002", comment_id: "comment-001", created_at: "2026-03-01T00:02:00+09:00" },
    { id: "like-006", user_id: "user-004", comment_id: "comment-017", created_at: "2026-02-28T00:00:00+09:00" },
    { id: "like-007", user_id: "user-006", comment_id: "comment-006", created_at: "2026-02-28T21:00:00+09:00" },
    { id: "like-008", user_id: "user-007", comment_id: "comment-001", created_at: "2026-03-01T01:00:00+09:00" },
  ];

  // ─── PanelLinks ───
  const panelLinks = [
    // comment-010: panel-002 + panel-004
    { id: "pl-001", comment_id: "comment-010", panel_id: "panel-002" },
    { id: "pl-002", comment_id: "comment-010", panel_id: "panel-004" },
    // comment-019: panel-004 + panel-001
    { id: "pl-003", comment_id: "comment-019", panel_id: "panel-004" },
    { id: "pl-004", comment_id: "comment-019", panel_id: "panel-001" },
  ];

  // ─── Lists ───
  const lists = [
    {
      id: "list-001", user_id: "user-005",
      title: "伏線まとめ",
      description: "ブラックジャックによろしくの伏線をまとめたリスト",
      created_at: "2026-02-20T10:00:00+09:00",
    },
    {
      id: "list-002", user_id: "user-005",
      title: "名シーン集",
      description: "個人的に好きなシーン",
      created_at: "2026-02-22T14:00:00+09:00",
    },
    {
      id: "list-003", user_id: "user-005",
      title: "ファンアートまとめ",
      description: "気になったファンアートを集めたリスト",
      created_at: "2026-02-25T18:00:00+09:00",
    },
    {
      id: "list-004", user_id: "user-001",
      title: "考察ベスト",
      description: "今週の考察ベスト",
      created_at: "2026-02-26T10:00:00+09:00",
    },
    {
      id: "list-005", user_id: "user-001",
      title: "伏線回収シーン",
      description: "伏線が回収されたシーン集",
      created_at: "2026-02-27T08:00:00+09:00",
    },
  ];

  // ─── ListItems ───
  const listItems = [
    { id: "li-001", list_id: "list-001", comment_id: "comment-008", added_at: "2026-02-20T10:05:00+09:00" },
    { id: "li-002", list_id: "list-001", comment_id: "comment-010", added_at: "2026-02-27T23:10:00+09:00" },
    { id: "li-003", list_id: "list-002", comment_id: "comment-017", added_at: "2026-02-27T22:30:00+09:00" },
    { id: "li-004", list_id: "list-002", comment_id: "comment-016", added_at: "2026-02-28T14:30:00+09:00" },
    { id: "li-005", list_id: "list-003", comment_id: "comment-006", added_at: "2026-02-28T20:30:00+09:00" },
    { id: "li-006", list_id: "list-003", comment_id: "comment-021", added_at: "2026-02-26T20:30:00+09:00" },
  ];

  // ─── ユーザー設定 ───
  const userSettings = {
    "user-005": {
      spoiler_setting: {
        hide_unread_spoilers: true,
        read_up_to: { "work-001": "panel-004" },
      },
    },
  };

  // ─── ヘルパー関数 ───

  function getProfile(userId) {
    return profiles.find(p => p.user_id === userId) || null;
  }

  function getUserSummary(userId) {
    const p = getProfile(userId);
    if (!p) return null;
    return {
      id: userId,
      display_name: p.display_name,
      avatar_text: p.avatar_text,
      avatar_url: p.avatar_url,
    };
  }

  function getCommentsByPanel(panelId, { sort = "popular", readUpTo = null, limit = 20, offset = 0 } = {}) {
    let result = comments.filter(c => c.panel_ids.includes(panelId) && c.parent_id === null);

    // ネタバレ制御: 未読コマのネタバレを除外
    if (readUpTo) {
      const readPanel = panels.find(p => p.id === readUpTo);
      if (readPanel) {
        result = result.filter(c => {
          if (!c.spoiler) return true;
          return c.panel_ids.every(pid => {
            const p = panels.find(pp => pp.id === pid);
            return p && p.page_number <= readPanel.page_number;
          });
        });
      }
    }

    // ソート
    if (sort === "popular") {
      result.sort((a, b) => b.like_count - a.like_count);
    } else {
      result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    const total = result.length;
    result = result.slice(offset, offset + limit);

    return {
      panel_id: panelId,
      total,
      sort,
      comments: result.map(c => ({
        ...c,
        user: getUserSummary(c.user_id),
        attachments: attachments.filter(a => a.comment_id === c.id),
        panels: c.panel_ids,
      })),
    };
  }

  function postComment({ panelId, text, spoiler, tagIds = [], panelIds = [], attachmentList = [], parentId = null }) {
    if (spoiler === undefined || spoiler === null) {
      return { error: { code: "SPOILER_REQUIRED", message: "spoilerフラグは必須です" } };
    }
    const allPanelIds = [panelId, ...panelIds.filter(id => id !== panelId)];
    const newComment = {
      id: "comment-" + Date.now(),
      user_id: "user-005",
      text,
      spoiler,
      tags: tagIds.map(tid => { const t = tags.find(tt => tt.id === tid); return t ? t.name : tid; }),
      panel_ids: allPanelIds,
      like_count: 0,
      reply_count: 0,
      parent_id: parentId,
      created_at: new Date().toISOString(),
    };
    comments.push(newComment);
    return { ...newComment, user: getUserSummary("user-005"), attachments: [], panels: allPanelIds };
  }

  function toggleLike(commentId) {
    const comment = comments.find(c => c.id === commentId);
    if (!comment) return { error: { code: "NOT_FOUND", message: "コメントが見つかりません" } };

    const existing = likes.find(l => l.user_id === "user-005" && l.comment_id === commentId);
    if (existing) {
      // いいね解除
      const idx = likes.indexOf(existing);
      likes.splice(idx, 1);
      comment.like_count = Math.max(0, comment.like_count - 1);
      return { comment_id: commentId, new_like_count: comment.like_count, action: "unliked" };
    } else {
      // いいね
      const newLike = {
        id: "like-" + Date.now(),
        user_id: "user-005",
        comment_id: commentId,
        created_at: new Date().toISOString(),
      };
      likes.push(newLike);
      comment.like_count += 1;
      return { ...newLike, new_like_count: comment.like_count, action: "liked" };
    }
  }

  function getReplies(commentId, { limit = 20, offset = 0 } = {}) {
    const replies = comments.filter(c => c.parent_id === commentId);
    replies.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    const total = replies.length;
    const sliced = replies.slice(offset, offset + limit);
    return {
      comment_id: commentId,
      total,
      replies: sliced.map(c => ({
        ...c,
        user: getUserSummary(c.user_id),
        attachments: attachments.filter(a => a.comment_id === c.id),
      })),
    };
  }

  function getRelatedPanels(panelId, { scope = "all" } = {}) {
    const currentPanel = panels.find(p => p.id === panelId);
    if (!currentPanel) return { panel_id: panelId, related: [] };

    // PanelLinksからコメントを通じて関連するコマを探す
    const linkedComments = panelLinks
      .filter(pl => pl.panel_id === panelId)
      .map(pl => pl.comment_id);

    const relatedPanelIds = new Set();
    linkedComments.forEach(cid => {
      panelLinks
        .filter(pl => pl.comment_id === cid && pl.panel_id !== panelId)
        .forEach(pl => relatedPanelIds.add(pl.panel_id));
    });

    // コメントのpanel_idsからも関連を取得
    comments
      .filter(c => c.panel_ids.includes(panelId) && c.panel_ids.length > 1)
      .forEach(c => {
        c.panel_ids.forEach(pid => {
          if (pid !== panelId) relatedPanelIds.add(pid);
        });
      });

    const related = [...relatedPanelIds].map(pid => {
      const p = panels.find(pp => pp.id === pid);
      if (!p) return null;
      const ep = episodes.find(e => e.id === p.episode_id);
      const w = works.find(wk => wk.id === (ep ? ep.work_id : null));
      const isSameEpisode = p.episode_id === currentPanel.episode_id;
      const relationType = isSameEpisode ? "nearby" : "cross";

      if (scope === "nearby" && relationType !== "nearby") return null;
      if (scope === "cross" && relationType !== "cross") return null;

      const linkCount = comments.filter(c =>
        c.panel_ids.includes(panelId) && c.panel_ids.includes(pid)
      ).length;

      return {
        panel: {
          id: p.id,
          image_url: p.image_url,
          episode_title: ep ? ep.title : "",
          work_title: w ? w.title : "",
          page_number: p.page_number,
          panel_index: p.panel_index,
        },
        link_count: linkCount,
        relation_type: relationType,
      };
    }).filter(Boolean);

    related.sort((a, b) => b.link_count - a.link_count);
    return { panel_id: panelId, related };
  }

  function getUserProfile(userId) {
    const p = getProfile(userId);
    if (!p) return { error: { code: "NOT_FOUND", message: "ユーザーが見つかりません" } };
    const settings = userSettings[userId] || { spoiler_setting: { hide_unread_spoilers: false, read_up_to: {} } };
    return { ...p, id: userId, ...settings };
  }

  function getUserComments(userId, { type = "posted", limit = 20, offset = 0 } = {}) {
    let result;
    if (type === "posted") {
      result = comments.filter(c => c.user_id === userId && c.parent_id === null);
    } else {
      // liked
      const likedIds = likes.filter(l => l.user_id === userId).map(l => l.comment_id);
      result = comments.filter(c => likedIds.includes(c.id));
    }
    result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const total = result.length;
    const sliced = result.slice(offset, offset + limit);

    return {
      user_id: userId,
      type,
      total,
      comments: sliced.map(c => ({
        id: c.id,
        text: c.text,
        spoiler: c.spoiler,
        tags: c.tags,
        like_count: c.like_count,
        reply_count: c.reply_count,
        panels: c.panel_ids.map(pid => {
          const p = panels.find(pp => pp.id === pid);
          if (!p) return null;
          const ep = episodes.find(e => e.id === p.episode_id);
          const w = works.find(wk => wk.id === (ep ? ep.work_id : null));
          return {
            id: p.id,
            image_url: p.image_url,
            work_title: w ? w.title : "",
            episode_title: ep ? ep.title : "",
          };
        }).filter(Boolean),
        created_at: c.created_at,
      })),
    };
  }

  function getPopularComments({ period = "week", limit = 10 } = {}) {
    const now = new Date();
    const periodMs = { day: 86400000, week: 604800000, month: 2592000000 };
    const cutoff = new Date(now - (periodMs[period] || periodMs.week));

    let result = comments
      .filter(c => c.parent_id === null && new Date(c.created_at) >= cutoff)
      .sort((a, b) => b.like_count - a.like_count)
      .slice(0, limit);

    return {
      period,
      total: result.length,
      comments: result.map(c => ({
        ...c,
        user: getUserSummary(c.user_id),
        attachments: attachments.filter(a => a.comment_id === c.id),
        panels: c.panel_ids.map(pid => {
          const p = panels.find(pp => pp.id === pid);
          if (!p) return null;
          const w = works.find(wk => {
            const ep = episodes.find(e => e.id === p.episode_id);
            return ep && wk.id === ep.work_id;
          });
          return { id: p.id, image_url: p.image_url, work_title: w ? w.title : "" };
        }).filter(Boolean),
      })),
    };
  }

  // ─── 公開API ───
  return {
    // 生データ参照
    data: { tags, users, profiles, works, episodes, panels, comments, attachments, likes, panelLinks, lists, listItems, userSettings },

    // APIエンドポイント模倣
    getCommentsByPanel,
    postComment,
    toggleLike,
    getReplies,
    getRelatedPanels,
    getUserProfile,
    getUserComments,
    getPopularComments,

    // ヘルパー
    getProfile,
    getUserSummary,
  };

})();
