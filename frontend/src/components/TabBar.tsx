"use client";

import { MessageSquare, Heart, RefreshCw, Layers } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TabBar() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center pb-4 pointer-events-none">
            <div className="bg-[var(--color-deep-black)] border-4 border-[var(--color-clean-white)] flex w-[90%] max-w-[400px] h-16 pointer-events-auto shadow-[4px_4px_0_var(--color-brand-red)]">

                <Link
                    href="/read"
                    className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors ${pathname === '/read' ? 'text-[var(--color-impact-yellow)]' : 'text-gray-400 hover:text-white'}`}
                >
                    <Layers className="w-6 h-6" strokeWidth={pathname === '/read' ? 3 : 2} />
                    <span className="text-[10px] font-bold">読む</span>
                </Link>

                <Link
                    href="/panels/select"
                    className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors ${pathname.includes('/panels') ? 'text-[var(--color-impact-yellow)]' : 'text-gray-400 hover:text-white'}`}
                >
                    <MessageSquare className="w-6 h-6" strokeWidth={pathname.includes('/panels') ? 3 : 2} />
                    <span className="text-[10px] font-bold">語る</span>
                </Link>

                <Link
                    href="/profile"
                    className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors ${pathname.includes('/profile') ? 'text-[var(--color-impact-yellow)]' : 'text-gray-400 hover:text-white'}`}
                >
                    <Heart className="w-6 h-6" strokeWidth={pathname.includes('/profile') ? 3 : 2} />
                    <span className="text-[10px] font-bold">マイページ</span>
                </Link>

            </div>
        </div>
    );
}
