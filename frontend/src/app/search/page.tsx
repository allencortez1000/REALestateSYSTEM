import type { Metadata } from 'next';
import { featuredModelHouses } from '@/data/modelHouses';
import SearchExperience from './SearchExperience';

export const metadata: Metadata = {
  title: 'Search Model Houses',
  description: 'Search and filter Amica Residences by Rabino Home Builders Corporation model-house listings by home type, budget range, and buyer fit.'
};


export default function SearchPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[2rem] sm:rounded-[2.75rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.93),rgba(247,243,234,0.88))] shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 xl:grid-cols-[minmax(0,0.92fr)_minmax(360px,1.08fr)]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="section-label text-[#b98a3d]">Search</div>
              <h1 className="mt-4 max-w-xl text-[clamp(2.35rem,10vw,5.2rem)] leading-[0.94] tracking-[-0.075em] text-[#071426] sm:leading-[0.9] sm:tracking-[-0.085em]">
                Find the right home, faster.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                Browse only the current Amica Residences model-house listings featured in the portfolio.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-2 min-[1400px]:grid-cols-4">
                {['Buy', 'Rent', 'Model house', 'Condo', 'House', 'Lot', 'Bedrooms', 'Budget'].map((chip) => (
                  <button key={chip} className="rounded-full border border-[rgba(231,220,200,0.95)] bg-white px-4 py-3 text-xs font-semibold text-[#071426] transition hover:border-[#b98a3d] hover:bg-[#fbf8f0]">
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative min-h-[320px] sm:min-h-[420px] bg-[linear-gradient(135deg,#071426_0%,#0d2342_62%,#b98a3d_180%)] p-4 sm:p-6 lg:p-8">
              <div className="rounded-[2rem] border border-white/12 bg-[rgba(255,255,255,0.06)] p-5 text-white backdrop-blur-xl sm:p-6">
                <div className="rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d7be8a]">Interactive search</div>
                  <p className="mt-3 text-sm leading-7 text-white/72">Use the filters below to search by model name, package type, budget range, and buyer fit. Results update instantly without database access.</p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 min-[1400px]:grid-cols-3">
                  {featuredModelHouses.slice(0, 3).map((listing) => (
                    <article key={listing.title} className="rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-4 backdrop-blur-md">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[#d7be8a]">Featured in portfolio</div>
                      <div className="mt-2 text-lg font-semibold">{listing.title}</div>
                      <div className="mt-2 text-sm text-white/72">{listing.price}</div>
                      <div className="mt-3 inline-flex rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/78">{listing.bestFor}</div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <SearchExperience />
      </section>
    </main>
  );
}
