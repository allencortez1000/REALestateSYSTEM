import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from '@/components/properties/FavoriteButton';
import { featuredModelHouses, getModelHouseHref } from '@/data/modelHouses';

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
        <div className="overflow-hidden rounded-[2rem] sm:rounded-[2.75rem] border border-[#e7dcc8] bg-white/84 shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 xl:grid-cols-[minmax(0,1fr)_minmax(340px,0.92fr)]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="section-label text-[#b98a3d]">Portfolio</div>
              <h1 className="mt-4 max-w-xl text-[clamp(2.35rem,10vw,5.2rem)] leading-[0.94] tracking-[-0.075em] text-[#071426] sm:leading-[0.9] sm:tracking-[-0.085em]">
                Curated residences with an Amica Residences signature.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Browse a premium collection of model houses presented with stronger hierarchy, quieter spacing, and a more luxurious cadence.
              </p>
              <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
                <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-4 py-2 text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-slate-500">Model houses</span>
                <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-4 py-2 text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-slate-500">Luxury homes</span>
                <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-4 py-2 text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-slate-500">Investment ready</span>
              </div>
            </div>

            <div className="relative min-h-[260px] sm:min-h-[320px] bg-[linear-gradient(135deg,#071426_0%,#0d2342_55%,#b98a3d_180%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] backdrop-blur-md">Amica Residences</div>
              <div className="flex h-full items-end">
                <div className="max-w-sm">
                  <div className="text-xs uppercase tracking-[0.35em] text-[#d7be8a]">Featured portfolio</div>
                  <div className="mt-4 text-3xl font-semibold leading-tight">Designed to present residences with editorial confidence.</div>
                  <p className="mt-4 text-sm leading-7 text-white/72">A gallery-like layout that makes each listing feel considered, aspirational, and easy to compare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-10 rounded-[2.25rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f0_100%)] p-6 shadow-[0_18px_50px_rgba(9,21,64,0.07)] sm:p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="section-label text-[#b98a3d]">Buying guide</div>
              <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-semibold tracking-[-0.05em] text-[#071426]">How to choose the right model</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">Use these quick reminders before opening a model-house detail page or comparing options.</p>
            </div>
            <Link href="/compare" className="rounded-full border border-[#e7dcc8] bg-white px-5 py-3 text-sm font-semibold text-[#071426] transition hover:border-[#b98a3d] hover:bg-[#fbf8f0]">Open comparison</Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {buyingGuide.map((item, index) => (
              <article key={item.title} className="rounded-[1.5rem] border border-[#e7dcc8] bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071426] text-xs font-bold text-white">0{index + 1}</div>
                <h3 className="mt-4 text-base font-semibold text-[#071426]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredModelHouses.map((listing) => (
            <article key={listing.title} className="card card-hover group overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-[#071426]">
                <Image src={listing.image} alt={listing.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.08),rgba(7,20,38,0.42))]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">Featured</div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="section-label text-[#b98a3d]">Luxury residence</div>
                  <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a6428]">{listing.bestFor}</span>
                </div>
                <h2 className="mt-3 text-[clamp(1.8rem,7vw,2.75rem)] leading-tight tracking-[-0.05em] text-[#071426]">{listing.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">{listing.lotArea} • {listing.floorArea}</p>
                <div className="mt-5 break-words text-xl font-semibold text-[#b98a3d] sm:text-2xl">{listing.price}</div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={getModelHouseHref(listing.slug)} className="btn-primary inline-flex">View details</Link>
                  <FavoriteButton slug={listing.slug} />
                </div>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
