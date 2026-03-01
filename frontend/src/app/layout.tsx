import './globals.css';
import type { Metadata } from 'next';
import TabBar from '@/components/TabBar';

export const metadata: Metadata = {
  title: 'ジャンがり - Prototype',
  description: 'MangaTech 2026 Next.js MVP',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="halftone-overlay" />
        <div className="speedlines-bg" />
        <main className="mobile-container pb-24">
          {children}
          <TabBar />
        </main>
      </body>
    </html>
  );
}
