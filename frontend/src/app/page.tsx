import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center z-10">

      <div className="bg-[var(--color-deep-black)] text-[var(--color-impact-yellow)] border-4 border-[var(--color-clean-white)] px-4 py-1 -rotate-2 font-black text-xl mb-4 shadow-[4px_4px_0_var(--color-brand-red)]">
        MangaTech 2026
      </div>

      <h1 className="text-6xl font-black italic mb-2 tracking-tighter text-[var(--color-clean-white)] drop-shadow-[4px_4px_0_var(--color-brand-red)]">
        ジャンがり
      </h1>
      <h2 className="text-xl font-bold text-[var(--color-impact-yellow)] mb-12">
        MVP Prototype App
      </h2>

      <div className="w-full flex flex-col gap-6">
        <Link
          href="/read"
          className="bg-[var(--color-clean-white)] text-[var(--color-deep-black)] border-4 border-[var(--color-deep-black)] p-6 block font-black text-2xl relative transition-transform active:translate-y-1 shadow-[8px_8px_0_var(--color-brand-red)]"
        >
          <div className="absolute -top-4 -right-4 bg-[var(--color-impact-yellow)] px-3 py-1 rotate-6 border-[3px] border-[var(--color-deep-black)] shadow-[2px_2px_0_var(--color-brand-red)] text-sm">
            TAP!
          </div>
          📱 読書画面へ
        </Link>
      </div>

    </div>
  );
}
