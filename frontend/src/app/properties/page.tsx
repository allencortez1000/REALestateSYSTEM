import type { Metadata } from 'next';
import Link from 'next/link';
import PropertyCard from '@/components/properties/PropertyCard';
import PageHero from '@/components/ui/PageHero';
import ResponsiveGrid from '@/components/ui/ResponsiveGrid';
import { featuredModelHouses } from '@/data/modelHouses';

export const metadata: Metadata = {
  title: 'Model Houses',
  description: 'Browse Amica Residences by Rabino Home Builders Corporation model houses with prices, lot areas, floor areas, and buyer guidance.'
};

const buyingGuide = [
  { title: 'Check the package type', text: 'Confirm whether the option is House Only, House & Lot, Model House, or Low-Cost Housing.' },
  { title: 'Review size details', text: 'Compare lot area and floor area when available. If marked Not shown, the reference did not include that detail.' },
  { title: 'Compare computations', text: 'Open the detail page to review reservation, down payment, balance, and monthly terms.' },
  { title: 'Schedule a viewing', text: 'Use the inquiry section once you have shortlisted the model that fits your needs.' }
];


export default function PropertiesPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <PageHero
          eyebrow="Portfolio"
          title="Curated residences with an Amica Residences signature."
          description="Browse a premium collection of model houses presented with stronger hierarchy, quieter spacing, and a more luxurious cadence."
          aside={
            <div className="flex min-h-[220px] items-end">
              <div className="max-w-sm">
                <div className="section-label text-[#d7be8a]">Featured portfolio</div>
                <div className="mt-4 text-3xl font-semibold leading-tight">Designed to present residences with editorial confidence.</div>
                <p className="mt-4 text-sm leading-7 text-white/72">A gallery-like layout that makes each listing feel considered, aspirational, and easy to compare.</p>
              </div>
            </div>
          }
        >
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-4 py-2 text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-slate-500">Model houses</span>
            <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-4 py-2 text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-slate-500">Luxury homes</span>
            <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-4 py-2 text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-slate-500">Investment ready</span>
          </div>
        </PageHero>

        <section className="mt-10 rounded-[2.25rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f0_100%)] p-6 shadow-[0_18px_50px_rgba(9,21,64,0.07)] sm:p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="section-label text-[#b98a3d]">Buying guide</div>
              <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-semibold tracking-[-0.05em] text-[#071426]">How to choose the right model</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">Use these quick reminders before opening a model-house detail page or comparing options.</p>
            </div>
            <Link href="/compare" className="rounded-full border border-[#e7dcc8] bg-white px-5 py-3 text-sm font-semibold text-[#071426] transition hover:border-[#b98a3d] hover:bg-[#fbf8f0]">Open comparison</Link>
          </div>

          <ResponsiveGrid columns="four" className="mt-6">
            {buyingGuide.map((item, index) => (
              <article key={item.title} className="rounded-[1.5rem] border border-[#e7dcc8] bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071426] text-xs font-bold text-white">0{index + 1}</div>
                <h3 className="mt-4 text-base font-semibold text-[#071426]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p>
              </article>
            ))}
          </ResponsiveGrid>
        </section>

        <ResponsiveGrid as="section" className="mt-10 gap-6">
          {featuredModelHouses.map((listing) => (
            <PropertyCard key={listing.slug} listing={listing} />
          ))}
        </ResponsiveGrid>
      </section>
    </main>
  );
}
