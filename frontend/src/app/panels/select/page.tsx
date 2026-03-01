"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { Check } from "lucide-react";

const ALL_PANELS = [
    { id: "p1", src: "/assets/panels/panel-city.png" },
    { id: "p2", src: "/assets/panels/panel-noodles.png" },
    { id: "p3", src: "/assets/panels/panel-food.png" },
    { id: "p4", src: "/assets/panels/panel-shock.png" },
];

export default function SelectPanelPage() {
    const router = useRouter();
    const [selected, setSelected] = useState<string[]>([]);

    const toggleSelect = (id: string) => {
        if (selected.includes(id)) setSelected(selected.filter(p => p !== id));
        else setSelected([...selected, id]);
    };

    const handleConfirm = () => {
        if (selected.length === 0) return;
        // In a real app, pass selected IDs via state management or query params
        router.push(`/comments/${selected[0]}/compose`);
    };

    return (
        <div className="flex flex-col min-h-screen relative z-10 bg-[var(--color-deep-black)] text-[var(--color-clean-white)] pb-32">

            <Header title="コマを選択" showBack={true} />

            <div className="flex w-full border-b-4 border-black bg-[var(--color-deep-black)] sticky top-[72px] z-40">
                <button className="flex-1 py-3 font-bold text-center border-b-4 border-[var(--color-brand-red)] bg-black text-[var(--color-impact-yellow)]">
                    近くのコマ
                </button>
                <button className="flex-1 py-3 font-bold text-center bg-[#222] text-white">
                    別の巻から
                </button>
            </div>

            <div className="flex-1 flex flex-col gap-4 p-4">
                {ALL_PANELS.map(panel => {
                    const isSelected = selected.includes(panel.id);
                    return (
                        <div
                            key={panel.id}
                            onClick={() => toggleSelect(panel.id)}
                            className={`relative cursor-pointer transition-all ${isSelected
                                    ? "ring-4 ring-[var(--color-impact-yellow)] shadow-[0_0_0_8px_var(--color-brand-red)] z-10"
                                    : "border-4 border-[var(--color-deep-black)]"
                                }`}
                        >
                            <img
                                src={panel.src}
                                className={`w-full h-auto object-cover transition-all ${!isSelected ? "grayscale opacity-80" : ""}`}
                                alt="Panel"
                            />

                            <div className={`absolute top-4 right-4 w-10 h-10 border-4 flex items-center justify-center transition-all ${isSelected ? "border-[var(--color-deep-black)] bg-[var(--color-impact-yellow)] text-black" : "border-white bg-black/50 text-transparent"
                                }`}>
                                <Check strokeWidth={4} />
                            </div>

                            {!isSelected && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-[var(--color-impact-yellow)] px-4 py-2 font-black rounded-full border-2 border-[var(--color-impact-yellow)]">
                                    タップして選択
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Fixed bottom action */}
            <div className="fixed bottom-[80px] left-0 w-full p-4 bg-white border-t-4 border-black flex justify-center z-50">
                <div className="w-full max-w-[480px] flex justify-between items-center px-2">
                    <div className="font-black text-2xl text-[var(--color-deep-black)]">
                        選択中: <span className="text-[var(--color-brand-red)] text-4xl">{selected.length}</span>
                    </div>
                    <button
                        onClick={handleConfirm}
                        disabled={selected.length === 0}
                        className={`px-8 py-3 font-black text-xl border-4 shadow-[4px_4px_0_var(--color-deep-black)] transition-all ${selected.length > 0
                                ? "bg-[var(--color-impact-yellow)] text-black border-black active:translate-y-1 active:shadow-none"
                                : "bg-gray-300 text-gray-500 border-gray-400 shadow-none"
                            }`}
                    >
                        決定
                    </button>
                </div>
            </div>

        </div>
    );
}
