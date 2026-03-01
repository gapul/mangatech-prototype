"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface MangaPanelProps {
    id: string;
    src: string;
    alt: string;
    className?: string;
}

export default function MangaPanel({ id, src, alt, className = "" }: MangaPanelProps) {
    const [isPressing, setIsPressing] = useState(false);
    const pressTimer = useRef<NodeJS.Timeout | null>(null);
    const router = useRouter();

    // Handle long press to open comments
    const handlePressStart = () => {
        setIsPressing(true);
        pressTimer.current = setTimeout(() => {
            // Navigate to comment sheet
            router.push(`/comments/${id}`);
        }, 600); // 600ms long press
    };

    const handlePressEnd = () => {
        setIsPressing(false);
        if (pressTimer.current) {
            clearTimeout(pressTimer.current);
            pressTimer.current = null;
        }
    };

    useEffect(() => {
        return () => {
            if (pressTimer.current) clearTimeout(pressTimer.current);
        };
    }, []);

    return (
        <div
            className={`relative cursor-pointer select-none origin-center overflow-hidden ${className}`}
            onPointerDown={handlePressStart}
            onPointerUp={handlePressEnd}
            onPointerLeave={handlePressEnd}
            onContextMenu={(e) => e.preventDefault()}
        >
            <motion.div
                animate={isPressing ? { scale: 0.95 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
                className="w-full relative"
            >
                <img
                    src={src}
                    alt={alt}
                    className={`w-full h-full object-cover transition-all duration-300 ${isPressing ? "grayscale contrast-125 scale-105" : ""
                        }`}
                    draggable={false}
                />

                {/* Visual feedback for pressing */}
                <AnimatePresence>
                    {isPressing && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        >
                            <div className="bg-[var(--color-brand-red)] text-white font-black text-2xl border-4 border-black px-6 py-2 -rotate-6 shadow-[4px_4px_0_var(--color-impact-yellow)]">
                                コメントを開く...
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
