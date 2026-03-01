export function generateStaticParams() {
    return [
        { panelId: 'p1' }, { panelId: 'p2' }, { panelId: 'p3' }, { panelId: 'p4' },
        { panelId: 'a1' }, { panelId: 'a2' }, { panelId: 'a3' }, { panelId: 'a4' }, { panelId: 'a5' }, { panelId: 'a6' },
    ];
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
