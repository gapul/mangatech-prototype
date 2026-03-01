"use client";

import Header from "@/components/Header";
import { Settings, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
    const history = [
        {
            id: "h1",
            panel: "/assets/panels/panel-shock.png",
            text: "この引きはズルい。来週まで待てない！！",
            date: "2026.03.01",
            likes: 85
        },
        {
            id: "h2",
            panel: "/assets/panels/panel-noodles.png",
            text: "こういう日常回があるからこそ、バトルの重みが増すんだよな。",
            date: "2026.02.26",
            likes: 412
        }
    ];

    return (
        <div className="flex flex-col min-h-screen relative z-10 bg-[#e0e0e0] text-[var(--color-deep-black)]">

            <Header title="マイページ" showBack={false} />

            {/* Profile Header Card */}
            <div className="bg-[var(--color-deep-black)] text-white p-6 border-b-4 border-black relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                    <Settings className="w-6 h-6 text-gray-400" />
                </div>

                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-20 h-20 bg-[var(--color-impact-yellow)] border-4 border-white flex items-center justify-center text-4xl shadow-[4px_4px_0_var(--color-brand-red)]">
                        😎
                    </div>
                    <div>
                        <h2 className="text-3xl font-black italic">考察班リーダー</h2>
                        <p className="text-sm font-bold text-gray-300">@kousatsu_master</p>
                    </div>
                </div>

                <div className="flex gap-6 mt-6 relative z-10">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-400 font-bold">総いいジャン</span>
                        <span className="text-xl font-black text-[var(--color-impact-yellow)]">12,450</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-400 font-bold">読了エピソード</span>
                        <span className="text-xl font-black text-[var(--color-clean-white)]">842</span>
                    </div>
                </div>
            </div>

            {/* Profile Tabs */}
            <div className="flex w-full border-b-4 border-black bg-white sticky top-[72px] z-40">
                <button className="flex-1 py-3 font-bold text-center border-b-4 border-[var(--color-brand-red)] bg-[var(--color-deep-black)] text-[var(--color-impact-yellow)]">
                    My History
                </button>
                <button className="flex-1 py-3 font-bold text-center bg-[#f0f0f0] text-gray-500">
                    保存したリスト
                </button>
            </div>

            {/* History Grid */}
            <div className="flex-1 p-4 flex flex-col gap-6 pb-32">
                {history.map((item, idx) => (
                    <div key={item.id} className={`bg-white border-4 border-black shadow-[6px_6px_0_var(--color-brand-red)] p-4 flex flex-col gap-3 ${idx % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
                        <div className="flex justify-between items-center border-b-2 border-black border-dashed pb-2">
                            <span className="font-bold text-sm bg-black text-white px-2 py-1">チェンソーマン 第154話</span>
                            <span className="text-xs font-bold text-gray-500">{item.date}</span>
                        </div>

                        <div className="flex gap-4 items-start">
                            <img src={item.panel} className="w-24 h-24 object-cover border-4 border-black shadow-[2px_2px_0_var(--color-impact-yellow)]" />
                            <div className="flex-1 flex flex-col justify-between h-24">
                                <p className="font-bold text-sm line-clamp-3">{item.text}</p>
                                <div className="flex items-center gap-1 font-bold text-[var(--color-brand-red)]">
                                    <span className="text-xl">♥</span> {item.likes}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
