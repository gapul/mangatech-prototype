"use client";

import { ChevronLeft, MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeaderProps {
    title: string;
    subtitle?: string;
    showBack?: boolean;
    onBack?: () => void;
}

export default function Header({ title, subtitle, showBack = false, onBack }: HeaderProps) {
    const router = useRouter();

    const handleBack = () => {
        if (onBack) onBack();
        else router.back();
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-[var(--color-deep-black)] border-b-4 border-[var(--color-deep-black)] shadow-[0_4px_0_var(--color-brand-red)] flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
                {showBack && (
                    <button
                        onClick={handleBack}
                        className="w-10 h-10 flex items-center justify-center bg-[var(--color-clean-white)] border-2 border-[var(--color-deep-black)] shadow-[2px_2px_0_var(--color-brand-red)] active:translate-y-px active:shadow-none transition-all"
                    >
                        <ChevronLeft className="w-6 h-6 text-black" strokeWidth={3} />
                    </button>
                )}
                <div className="flex flex-col">
                    <h1 className="font-black text-xl italic text-[var(--color-clean-white)] tracking-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <span className="text-[var(--color-impact-yellow)] text-xs font-bold font-mono">
                            {subtitle}
                        </span>
                    )}
                </div>
            </div>
            <button className="text-[var(--color-clean-white)] p-2">
                <MoreHorizontal className="w-6 h-6" />
            </button>
        </header>
    );
}
