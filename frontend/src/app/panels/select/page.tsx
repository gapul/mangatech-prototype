"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { Check } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

// Helper component to render a selectable grid panel
function SelectablePanel({ id, src, className, selected, toggleSelect }: { id: string, src: string, className: string, selected: string[], toggleSelect: (id: string) => void }) {
    const isSelected = selected.includes(id);
    return (
        <div
            onClick={() => toggleSelect(id)}
            className={`relative cursor-pointer border-4 transition-all overflow-hidden ${isSelected
                ? "border-[var(--color-impact-yellow)] shadow-[0_0_0_4px_var(--color-brand-red)] z-10"
                : "border-black"
                } ${className}`}
        >
            <img
                src={src}
                className={`absolute inset-0 w-full h-full object-cover transition-all ${!isSelected ? "grayscale contrast-125 opacity-90" : "scale-105"}`}
                alt="Panel Option"
            />
            {isSelected && (
                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 border-4 border-black bg-[var(--color-impact-yellow)] text-black flex items-center justify-center rounded-full mb-2">
                        <Check strokeWidth={4} />
                    </div>
                </div>
            )}
            {!isSelected && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/80 text-[var(--color-impact-yellow)] px-3 py-1 text-sm font-black rounded-full border-2 border-[var(--color-impact-yellow)] opacity-0 hover:opacity-100 transition-opacity">
                    タップで選択
                </div>
            )}
        </div>
    );
}

export default function SelectPanelPage() {
    const router = useRouter();
    const [selected, setSelected] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState<"nearby" | "another">("nearby");

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
                <button
                    onClick={() => setActiveTab("nearby")}
                    className={`flex-1 py-3 font-bold text-center border-b-4 transition-all ${activeTab === "nearby"
                        ? "border-[var(--color-brand-red)] bg-black text-[var(--color-impact-yellow)]"
                        : "border-transparent bg-[#222] text-gray-500"
                        }`}
                >
                    近くのコマ
                </button>
                <button
                    onClick={() => setActiveTab("another")}
                    className={`flex-1 py-3 font-bold text-center border-b-4 transition-all ${activeTab === "another"
                        ? "border-[var(--color-brand-red)] bg-black text-[var(--color-impact-yellow)]"
                        : "border-transparent bg-[#222] text-gray-500"
                        }`}
                >
                    別の巻から
                </button>
            </div>

            {/* Grid Area based on Tab */}
            <div className="flex-1 w-full flex justify-center py-6 px-4 bg-[#f0f0f0] pb-40">
                {/* The "Page" Layout (Matching /read view) */}
                <div className="w-full max-w-lg bg-white shadow-[8px_8px_0_var(--color-brand-red)] border-4 border-black p-2 flex flex-col gap-2 relative">

                    {/* Top Panel (Wide) */}
                    <SelectablePanel
                        id={activeTab === "nearby" ? "p1" : "a3"}
                        src={activeTab === "nearby" ? assetPath("/assets/panels/panel-city.png") : assetPath("/assets/panels/panel-city.png")}
                        className="w-full h-32 md:h-48"
                        selected={selected}
                        toggleSelect={toggleSelect}
                    />

                    {/* Middle Row (Split) */}
                    <div className="flex gap-2 h-28 md:h-40">
                        {/* Left split */}
                        <SelectablePanel
                            id={activeTab === "nearby" ? "p4" : "a1"}
                            src={activeTab === "nearby" ? assetPath("/assets/panels/panel-shock.png") : assetPath("/assets/panels/panel-shock.png")}
                            className="w-2/5 h-full"
                            selected={selected}
                            toggleSelect={toggleSelect}
                        />
                        {/* Right split */}
                        <SelectablePanel
                            id={activeTab === "nearby" ? "p2" : "a2"}
                            src={activeTab === "nearby" ? assetPath("/assets/panels/panel-noodles.png") : assetPath("/assets/panels/panel-noodles.png")}
                            className="w-3/5 h-full"
                            selected={selected}
                            toggleSelect={toggleSelect}
                        />
                    </div>

                    {/* Bottom Panel (Action) */}
                    <SelectablePanel
                        id={activeTab === "nearby" ? "p3" : "a4"}
                        src={activeTab === "nearby" ? assetPath("/assets/panels/panel-food.png") : assetPath("/assets/panels/panel-food.png")}
                        className="w-full h-40 md:h-56"
                        selected={selected}
                        toggleSelect={toggleSelect}
                    />

                    {activeTab === "another" && (
                        <div className="flex gap-2 h-32 md:h-48 mt-2">
                            <SelectablePanel
                                id="a5"
                                src={assetPath("/assets/panels/panel-shock.png")}
                                className="w-1/2 h-full"
                                selected={selected}
                                toggleSelect={toggleSelect}
                            />
                            <SelectablePanel
                                id="a6"
                                src={assetPath("/assets/panels/panel-city.png")}
                                className="w-1/2 h-full"
                                selected={selected}
                                toggleSelect={toggleSelect}
                            />
                        </div>
                    )}
                </div>
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
