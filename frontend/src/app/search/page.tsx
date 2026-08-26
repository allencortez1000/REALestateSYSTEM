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
          description={`Browse only the current ${brand.shortName} model-house listings featured in the portfolio.`}
          asideClassName="p-4 sm:p-6 lg:p-8"
          aside={
            <div className="rounded-[1.85rem] border border-white/12 bg-[rgba(255,255,255,0.08)] p-5 text-white backdrop-blur-xl sm:p-6">
              <div>
                <div className="section-label text-[#d7be8a]">Interactive search</div>
                <p className="mt-3 text-sm leading-7 text-white/72">Search by model name, package type, budget range, and buyer fit. Results update instantly.</p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 min-[1400px]:grid-cols-3">
                {featuredModelHouses.slice(0, 3).map((listing) => (
                  <article key={listing.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md">
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
          <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-600">Use the filters below to narrow the current portfolio quickly and clearly.</p>
        </PageHero>

        <SearchExperience />
      </section>
    </main>
  );
}
