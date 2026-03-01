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

            {/* Scrollable manga track */}
            <div className="flex-1 w-full bg-[var(--color-deep-black)] pt-4 px-2">
                {MOCK_PANELS.map((panel) => (
                    <MangaPanel
                        key={panel.id}
                        id={panel.id}
                        src={panel.src}
                        alt={panel.alt}
                    />
                ))}

                {/* End of chapter marker */}
                <div className="py-12 flex flex-col items-center justify-center">
                    <div className="w-16 h-1 bg-[var(--color-clean-white)] mb-4" />
                    <span className="font-bold text-[var(--color-impact-yellow)]">
                        TO BE CONTINUED...
                    </span>
                </div>
            </div>

        </div>
    );
}
