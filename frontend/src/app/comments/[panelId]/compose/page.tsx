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

    // Matching prototype available tags
    const availableTags = ["💡 考察", "🎨 二次創作", "😂 小ネタ", "⚠️ ネタバレあり"];

    const toggleTag = (tag: string) => {
        if (tags.includes(tag)) setTags(tags.filter(t => t !== tag));
        else setTags([...tags, tag]);
    };

    const handleSubmit = () => {
        // Navigate back to the comments sheet
        router.back();
    };

    return (
        <div className="flex flex-col min-h-screen relative z-10 bg-[var(--color-clean-white)] text-[var(--color-deep-black)]">

            {/* status-bar simulation from prototype */}
            <div className="flex justify-between items-center p-2 text-xs font-bold leading-none bg-[var(--color-clean-white)] text-[var(--color-deep-black)]">
                <span>9:41</span><span>LTE</span>
            </div>

            {/* Screen 3 Custom Header */}
            <div className="flex items-center justify-between p-4 bg-[var(--color-clean-white)] border-b-4 border-[var(--color-deep-black)]">
                <span
                    className="font-black text-2xl cursor-pointer select-none"
                    onClick={() => router.back()}
                >
                    ×
                </span>
                <span className="font-black text-xl italic tracking-tight">熱い想いをぶつけろ</span>
                <span className="text-[var(--color-brand-red)] text-sm font-bold">下書き</span>
            </div>

            <div className="flex-1 flex flex-col p-4 bg-[var(--color-clean-white)]">

                {/* Selected Panels from Prototype Design */}
                <div
                    className="flex gap-2 items-center mb-6 cursor-pointer"
                    onClick={() => router.push('/panels/select')}
                >
                    <img
                        src={`/assets/panels/panel-noodles.png`}
                        className="h-20 w-auto object-cover border-[3px] border-[var(--color-deep-black)]"
                        alt="Selected Panel 1"
                    />
                    <img
                        src={`/assets/panels/panel-shock.png`}
                        className="h-20 w-auto object-cover border-[3px] border-[var(--color-brand-red)] rotate-6"
                        alt="Selected Panel 2"
                    />
                    <div className="font-bold text-3xl italic text-[var(--color-deep-black)] ml-2">+</div>
                </div>

                {/* Text Input matches prototype placeholder & look */}
                <textarea
                    className="w-full flex-1 min-h-[150px] p-4 font-bold text-lg border-4 border-[var(--color-deep-black)] mb-6 bg-white outline-none resize-none placeholder:text-gray-400 focus:border-[var(--color-brand-red)] transition-colors"
                    placeholder="考察・感想・二次創作の意図などを書いてください..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                {/* Upload Area styled like Prototype (.upload-area) */}
                <div className="w-full border-2 border-dashed border-[var(--color-deep-black)] p-6 bg-[#f8f8f8] text-center font-bold text-[1.2rem] mb-6 shadow-[4px_4px_0_var(--color-impact-yellow)] cursor-pointer">
                    📷 画像 / 動画を追加<br /><br />
                    <span className="text-sm text-[#666] font-normal">(ファンアート・コラ画もOK！）</span>
                </div>

                {/* Tags Container styled like prototype */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {availableTags.map((tag) => {
                        const isDanger = tag.includes("ネタバレあり");
                        const isSelected = tags.includes(tag);

                        // Replicate `.tag-chip.active` and `.tag-chip.danger`
                        let chipClass = "px-3 py-1 font-bold text-sm border-2 border-[var(--color-deep-black)] transition-all cursor-pointer";

                        if (isSelected) {
                            if (isDanger) {
                                chipClass += " bg-[var(--color-brand-red)] text-[var(--color-clean-white)] font-black transform scale-[1.05]";
                            } else {
                                chipClass += " bg-[var(--color-impact-yellow)] text-[var(--color-deep-black)] font-black transform scale-[1.05] shadow-[2px_2px_0_var(--color-brand-red)]";
                            }
                        } else {
                            chipClass += " bg-[#f0f0f0] text-[#555]";
                        }

                        return (
                            <div
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={chipClass}
                            >
                                {tag}
                            </div>
                        );
                    })}
                </div>

                {/* Submit Button matched prototype `.s3-composer .cta-btn` */}
                <div
                    onClick={handleSubmit}
                    className="w-full py-4 text-center font-black text-xl border-2 border-[var(--color-deep-black)] bg-[var(--color-deep-black)] text-[var(--color-clean-white)] shadow-[4px_4px_0_var(--color-brand-red)] cursor-pointer active:translate-y-1 active:shadow-none transition-all mt-auto mb-10"
                >
                    🔥 投稿する
                </div>

            </div>
        </div>
    );
}
