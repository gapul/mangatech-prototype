"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { MessageSquare, Heart, RefreshCw, PenSquare } from "lucide-react";
import Link from "next/link";
import { useParams } from 'next/navigation';

export default function CommentSheetPage() {
    const params = useParams();
    const panelId = params.panelId as string;
    const [activeTab, setActiveTab] = useState<"popular" | "recent">("popular");

    // Mock comments (Would come from API in real implementation)
    const comments = [
        {
            id: "c1",
            user: "考察班リーダー",
            avatar: "🧐",
            text: "この右下の影、明らかに1話のアレとリンクしてる。鳥肌立ったわ...",
            likes: 1240,
            isLiked: true,
            time: "2時間前",
            tags: ["神回", "伏線回収"]
        },
        {
            id: "c2",
            user: "マンガオタク",
            avatar: "🔥",
            text: "展開エグすぎる。心臓持たん。",
            likes: 853,
            isLiked: false,
            time: "5時間前",
            tags: []
        }
    ];

    return (
        <div className="flex flex-col min-h-screen relative z-10 bg-[var(--color-clean-white)] text-[var(--color-deep-black)]">

            {/* Header specific to comment sheet */}
            <Header title="みんなの熱狂" showBack={true} />

            {/* Target Panel Thumbnail */}
            <div className="p-4 bg-[var(--color-deep-black)] flex justify-center border-b-4 border-black shadow-[0_4px_0_var(--color-brand-red)]">
                <img
                    src={`/assets/panels/${panelId === 'p2' ? 'panel-noodles.png' : panelId === 'p4' ? 'panel-shock.png' : 'panel-city.png'}`}
                    className="h-32 object-contain border-4 border-[var(--color-clean-white)] -rotate-2"
                    alt="Target panel"
                />
            </div>

            {/* Tabs */}
            <div className="flex w-full border-b-4 border-black bg-white sticky top-[72px] z-40">
                <button
                    onClick={() => setActiveTab("popular")}
                    className={`flex-1 py-3 font-bold text-center border-r-4 border-black transition-all ${activeTab === "popular" ? 'bg-black text-[var(--color-impact-yellow)]' : 'bg-[#e0e0e0] text-gray-500'}`}
                >
                    いいジャン順
                </button>
                <button
                    onClick={() => setActiveTab("recent")}
                    className={`flex-1 py-3 font-bold text-center transition-all ${activeTab === "recent" ? 'bg-black text-[var(--color-impact-yellow)]' : 'bg-[#e0e0e0] text-gray-500'}`}
                >
                    新着順
                </button>
            </div>

            {/* Comments List */}
            <div className="flex-1 p-4 flex flex-col gap-4 pb-32">
                {comments.map((comment, idx) => (
                    <div key={comment.id} className={`p-4 border-4 border-black bg-white shadow-[4px_4px_0_var(--color-brand-red)] ${idx % 2 !== 0 ? 'translate-x-[2px]' : '-translate-x-[2px]'}`}>
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-lg">{comment.avatar}</div>
                                <span className="font-bold text-sm">{comment.user}</span>
                            </div>
                            <span className="text-xs font-bold text-gray-500">{comment.time}</span>
                        </div>

                        <p className="font-bold text-lg leading-tight mb-3">
                            {comment.text}
                        </p>

                        <div className="flex items-center gap-2 mb-3">
                            {comment.tags.map(tag => (
                                <span key={tag} className="text-xs font-black px-2 py-1 bg-[var(--color-impact-yellow)] border-2 border-black">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between border-t-2 border-dashed border-gray-300 pt-2">
                            <button className="flex items-center gap-1 font-bold">
                                <Heart className={`w-5 h-5 ${comment.isLiked ? 'fill-[var(--color-brand-red)] text-[var(--color-brand-red)]' : 'text-gray-400'}`} />
                                <span className={comment.isLiked ? 'text-[var(--color-brand-red)]' : 'text-gray-500'}>{comment.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 text-gray-500 font-bold text-sm">
                                <MessageSquare className="w-4 h-4" /> 返信
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Floating Action Button (Composer Trigger) */}
            <div className="fixed bottom-24 right-4 z-50">
                <Link
                    href={`/comments/${panelId}/compose`}
                    className="w-16 h-16 rounded-full bg-[var(--color-brand-red)] text-white border-4 border-black shadow-[4px_4px_0_var(--color-impact-yellow)] flex items-center justify-center active:translate-y-1 active:shadow-none transition-all"
                >
                    <PenSquare className="w-7 h-7" />
                </Link>
            </div>

        </div>
    );
}
