import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import { brand } from '@/data/brand';
import { featuredModelHouses } from '@/data/modelHouses';
import SearchExperience from './SearchExperience';

export const metadata: Metadata = {
  title: 'Search Model Houses',
  description: `Search and filter ${brand.name} model-house listings by home type, budget range, and buyer fit.`
};


export default function SearchPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <PageHero
          eyebrow="Search"
          title="Find the right home, faster."
          description="Browse only the current {brand.shortName} model-house listings featured in the portfolio."
          asideClassName="p-4 sm:p-6 lg:p-8"
          aside={
            <div className="rounded-[2rem] border border-white/12 bg-[rgba(255,255,255,0.06)] p-5 text-white backdrop-blur-xl sm:p-6">
              <div className="rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-5">
                <div className="section-label text-[#d7be8a]">Interactive search</div>
                <p className="mt-3 text-sm leading-7 text-white/72">Use the filters below to search by model name, package type, budget range, and buyer fit. Results update instantly without database access.</p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 min-[1400px]:grid-cols-3">
                {featuredModelHouses.slice(0, 3).map((listing) => (
                  <article key={listing.title} className="rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-4 backdrop-blur-md">
                    <div className="text-[10px] uppercase leading-4 tracking-[0.16em] text-[#d7be8a]">Featured in portfolio</div>
                    <div className="mt-2 text-lg font-semibold">{listing.title}</div>
                    <div className="mt-2 text-sm text-white/72">{listing.price}</div>
                    <div className="mt-3 inline-flex rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase leading-4 tracking-[0.14em] text-white/78">{listing.bestFor}</div>
                  </article>
                ))}
              </div>
            </div>
          }
        >
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-2 min-[1400px]:grid-cols-4">
            {['Buy', 'Rent', 'Model house', 'Condo', 'House', 'Lot', 'Bedrooms', 'Budget'].map((chip) => (
              <button key={chip} className="rounded-full border border-[rgba(231,220,200,0.95)] bg-white px-4 py-3 text-xs font-semibold text-[#071426] transition hover:border-[#b98a3d] hover:bg-[#fbf8f0]">
                {chip}
              </button>
            ))}
          </div>
        </PageHero>

        <SearchExperience />
      </section>
    </main>
  );
}
