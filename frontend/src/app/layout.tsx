import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Manrope, Playfair_Display } from 'next/font/google';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { brand } from '../data/brand';
import { siteUrl } from '../data/site';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], variable: '--font-playfair', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: brand.name,
  title: {
    default: brand.name,
    template: `%s | ${brand.name}`
  },
  description: `Explore ${brand.shortName} model houses by ${brand.companyName}, including sample computations, viewing inquiries, comparison tools, and customer portal previews.`,
  keywords: [brand.shortName, brand.companyName, 'model houses', 'Philippine homes', 'house and lot', 'low cost housing'],
  icons: {
    icon: [
      { url: brand.logo, type: 'image/png' }
    ],
    shortcut: brand.logo,
    apple: brand.logo
  },
  openGraph: {
    title: brand.name,
    description: 'Premium model-house browsing, comparison, and inquiry experience for Philippine buyers.',
    type: 'website',
    locale: 'en_PH',
    siteName: brand.name,
    images: [{ url: brand.logo, width: 1200, height: 630, alt: brand.name }]
  },
  twitter: {
    card: 'summary_large_image',
    title: brand.name,
    description: 'Premium model-house browsing, comparison, and inquiry experience for Philippine buyers.',
    images: [brand.logo]
  }
};

type LayoutProps = { children: ReactNode };

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(13,35,66,0.055),_transparent_36%),linear-gradient(180deg,_#f8f3ea_0%,_#ffffff_22%,_#efe7d8_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top,_rgba(215,190,138,0.12),_transparent_30%),linear-gradient(180deg,#071426_0%,#0D2342_34%,#13273f_100%)] dark:text-[#f5f7fb]">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(13,35,66,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(13,35,66,0.024)_1px,transparent_1px)] bg-[size:38px_38px] opacity-[0.18] dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]" />
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <Header />
          <div id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
