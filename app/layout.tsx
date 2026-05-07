import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AosInit from '@/components/AosInit';
import ToastProvider from '@/components/ToastProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Qualtech — Macchinari per il Packaging',
  description:
    "Qualtech è l'intermediario commerciale B2B di riferimento per macchinari industriali nel settore del packaging. Rappresentiamo i migliori produttori mondiali.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <AosInit />
        <ToastProvider />
      </body>
    </html>
  );
}
