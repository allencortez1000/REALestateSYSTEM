import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Manrope, Playfair_Display } from 'next/font/google';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], variable: '--font-playfair', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'RHBC Real Estate | AMICA Model Houses',
    template: '%s | RHBC Real Estate'
  },
  description: 'Explore RHBC and AMICA model houses, sample computations, viewing inquiries, comparison tools, and customer portal previews.',
  keywords: ['RHBC real estate', 'AMICA model houses', 'Philippine homes', 'house and lot', 'low cost housing'],
  openGraph: {
    title: 'RHBC Real Estate | AMICA Model Houses',
    description: 'Premium model-house browsing, comparison, and inquiry experience for Philippine buyers.',
    type: 'website',
    locale: 'en_PH'
  }
};

type LayoutProps = { children: ReactNode };

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(13,35,66,0.055),_transparent_36%),linear-gradient(180deg,_#f8f3ea_0%,_#ffffff_22%,_#efe7d8_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top,_rgba(215,190,138,0.12),_transparent_30%),linear-gradient(180deg,#071426_0%,#0D2342_34%,#13273f_100%)] dark:text-[#f5f7fb]">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(13,35,66,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(13,35,66,0.024)_1px,transparent_1px)] bg-[size:38px_38px] opacity-[0.18] dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]" />
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
