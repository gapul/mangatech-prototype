import Header from "@/components/Header";
import MangaPanel from "@/components/MangaPanel";

const MOCK_PANELS = [
    { id: "p1", src: "/assets/panels/panel-city.png", alt: "City view" },
    { id: "p2", src: "/assets/panels/panel-noodles.png", alt: "Eating noodles" },
    { id: "p3", src: "/assets/panels/panel-food.png", alt: "Food reaction" },
    { id: "p4", src: "/assets/panels/panel-shock.png", alt: "Shocked face" },
];

export default function ReadPage() {
    return (
        <div className="flex flex-col min-h-screen relative z-10 pb-20">
            <Header
                title="第1話「激突」"
                subtitle="JUMP+ ORIGINALS"
                showBack={true}
            />

            {/* Manga Page Container */}
            <div className="flex-1 w-full bg-[#f0f0f0] flex justify-center py-6 px-4">

                {/* The "Page" */}
                <div className="w-full max-w-lg bg-white shadow-[8px_8px_0_var(--color-brand-red)] border-4 border-black p-2 flex flex-col gap-2">

                    {/* Top Panel (Wide) */}
                    <MangaPanel
                        id="p1"
                        src="/assets/panels/panel-city.png"
                        alt="City view"
                        className="w-full h-48 border-4 border-black"
                    />

                    {/* Middle Row (Split panels) */}
                    <div className="flex gap-2 h-40">
                        {/* Left split */}
                        <MangaPanel
                            id="p4"
                            src="/assets/panels/panel-shock.png"
                            alt="Shocked face"
                            className="w-2/5 h-full border-4 border-black"
                        />
                        {/* Right split */}
                        <MangaPanel
                            id="p2"
                            src="/assets/panels/panel-noodles.png"
                            alt="Eating noodles"
                            className="w-3/5 h-full border-4 border-black"
                        />
                    </div>

                    {/* Bottom Panel (Action) */}
                    <MangaPanel
                        id="p3"
                        src="/assets/panels/panel-food.png"
                        alt="Food reaction"
                        className="w-full h-56 border-4 border-black"
                    />

                </div>
            </div>

            {/* End of chapter marker */}
            <div className="py-12 flex flex-col items-center justify-center">
                <div className="w-16 h-1 bg-[var(--color-clean-white)] mb-4" />
                <span className="font-bold text-[var(--color-impact-yellow)]">
                    TO BE CONTINUED...
                </span>
            </div>
        </div>
    );
}
