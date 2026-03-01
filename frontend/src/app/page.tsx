import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--color-clean-white)] text-[var(--color-deep-black)] z-10 pb-20">

      {/* Hero Header Area (Magazine Style) */}
      <div className="relative w-full h-[45vh] bg-[var(--color-deep-black)] border-b-8 border-[var(--color-brand-red)] overflow-hidden flex flex-col items-center justify-end px-4 pb-8">
        <div className="absolute inset-0 bg-[url('/assets/panels/panel-city.png')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--color-deep-black)] to-transparent"></div>

        <div className="relative z-10 w-full text-center">
          <div className="bg-[var(--color-clean-white)] text-[var(--color-deep-black)] inline-block px-3 py-1 font-black text-xs tracking-widest mb-3 border-2 border-black rotate-1">
            JUMP+ ORIGINALS
          </div>
          <h1 className="text-5xl font-black italic tracking-tighter text-[var(--color-clean-white)] drop-shadow-[4px_4px_0_var(--color-brand-red)] mb-1">
            ジャンがり
          </h1>
          <h2 className="text-xl font-bold text-[var(--color-impact-yellow)]">
            第1話「激突」
          </h2>
        </div>
      </div>

      {/* Info & Synopsis */}
      <div className="p-5 flex flex-col gap-4">
        <div className="flex justify-between items-end border-b-4 border-black pb-2">
          <div>
            <p className="font-black text-sm text-[var(--color-brand-red)]">作者</p>
            <p className="font-bold text-lg">漫画 太郎</p>
          </div>
          <div className="flex gap-2 text-sm font-bold">
            <span className="bg-black text-[var(--color-impact-yellow)] px-2 py-1">❤ 124K</span>
            <span className="border-2 border-black px-2 py-1">💬 3,402</span>
          </div>
        </div>

        <p className="font-bold text-[0.9rem] leading-relaxed text-gray-800 border-l-4 border-[var(--color-impact-yellow)] pl-3">
          突如として世界を襲った未曾有の危機。立ち上がったのは、ラーメンをこよなく愛する一人の青年だった。彼が啜る麺が、世界の運命を切り開く...！？
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col gap-4 mt-4">
          <Link
            href="/read"
            className="w-full bg-[var(--color-deep-black)] text-[var(--color-clean-white)] border-4 border-black py-4 text-center font-black text-2xl shadow-[6px_6px_0_var(--color-brand-red)] active:translate-y-1 active:shadow-[2px_2px_0_var(--color-brand-red)] transition-all relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[var(--color-clean-white)]/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out"></div>
            📱 第1話を読む
          </Link>

          <Link
            href="/panels/select"
            className="w-full bg-[var(--color-impact-yellow)] text-[var(--color-deep-black)] border-4 border-[var(--color-deep-black)] py-4 text-center font-black text-xl shadow-[4px_4px_0_var(--color-deep-black)] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
          >
            <span className="text-2xl">💬</span> この作品について熱く語る
          </Link>
        </div>
      </div>

    </div>
  );
}
