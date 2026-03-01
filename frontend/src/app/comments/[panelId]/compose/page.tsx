"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { Camera, Tag, Send } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function ComposeCommentPage() {
    const router = useRouter();
    const params = useParams();
    const panelId = params.panelId as string;
    const [text, setText] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [spoiler, setSpoiler] = useState(false);

    const availableTags = ["神回", "伏線", "爆笑", "泣ける", "ファンアート"];

    const toggleTag = (tag: string) => {
        if (tags.includes(tag)) setTags(tags.filter(t => t !== tag));
        else setTags([...tags, tag]);
    };

    const handleSubmit = () => {
        if (!text) return;
        // In real app, make API call here.
        router.back();
    };

    return (
        <div className="flex flex-col min-h-screen relative z-10 bg-[var(--color-clean-white)] text-[var(--color-deep-black)]">

            <Header title="想いを投下" showBack={true} />

            <div className="flex-1 flex flex-col p-4 bg-[var(--color-clean-white)]">

                {/* Attachment preview / panel */}
                <div className="flex gap-2 items-center mb-6 overflow-x-auto pb-2">
                    <img
                        src={`/assets/panels/${panelId === 'p2' ? 'panel-noodles.png' : panelId === 'p4' ? 'panel-shock.png' : 'panel-city.png'}`}
                        className="h-24 w-auto object-cover border-4 border-black -rotate-2"
                    />
                </div>

                {/* Text Area */}
                <textarea
                    className="w-full flex-1 min-h-[150px] p-4 font-bold text-lg border-4 border-black mb-6 bg-white outline-none resize-none placeholder:text-gray-400 focus:border-[var(--color-brand-red)] transition-colors shadow-[6px_6px_0_var(--color-brand-red)]"
                    placeholder="ここから熱狂を投下..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                {/* Tag Selection */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2 font-black">
                        <Tag className="w-5 h-5" /> タグをつける
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {availableTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`px-3 py-1 font-black text-sm border-2 border-black transition-all ${tags.includes(tag)
                                        ? "bg-[var(--color-impact-yellow)] shadow-[2px_2px_0_var(--color-brand-red)] -translate-y-[2px]"
                                        : "bg-white text-gray-400"
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Spoiler Toggle */}
                <label className="flex items-center gap-3 p-4 border-4 border-black mb-10 bg-gray-100 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        checked={spoiler}
                        onChange={(e) => setSpoiler(e.target.checked)}
                        className="w-6 h-6 accent-black"
                    />
                    <span className="font-bold">⚠️ ネタバレを含む</span>
                </label>

                {/* Sub-actions */}
                <div className="flex justify-between items-center mb-6">
                    <button className="flex items-center gap-2 font-bold px-4 py-2 border-4 border-black bg-white shadow-[2px_2px_0_var(--color-brand-red)] active:translate-y-1 active:shadow-none">
                        <Camera className="w-5 h-5" /> 画像追加
                    </button>
                </div>

            </div>

            {/* Sticky Submit Button */}
            <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t-4 border-black flex justify-center pb-[80px]">
                <div className="w-full max-w-[480px]">
                    <button
                        onClick={handleSubmit}
                        disabled={!text}
                        className={`w-full py-4 flex items-center justify-center gap-2 font-black text-xl border-4 shadow-[6px_6px_0_var(--color-deep-black)] transition-all ${text
                                ? "bg-[var(--color-brand-red)] text-white border-black active:translate-y-2 active:shadow-none"
                                : "bg-gray-300 text-gray-500 border-gray-400 shadow-none"
                            }`}
                    >
                        <Send className="w-6 h-6" />
                        投下する !!
                    </button>
                </div>
            </div>

        </div>
    );
}
