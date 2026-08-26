import type { Metadata } from 'next';
import { brand } from '@/data/brand';
import FavoritesList from './FavoritesList';

export const metadata: Metadata = {
  title: 'Favorites',
  description: `Review saved ${brand.name} model houses and return to shortlisted listings for comparison.`
};

export default function FavoritesPage() {
  return (
    <main className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1560px]">
        <div className="overflow-hidden rounded-[2.5rem] border border-[#dbe5f2] bg-white/88 shadow-[0_18px_48px_rgba(9,21,64,0.08)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="badge bg-white/80 shadow-soft">Saved</span>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.3rem)] leading-[0.9] tracking-[-0.085em] text-[#08122c]">Your favorites.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">A shortlist of the {brand.shortName} model houses you’ve saved for review and comparison.</p>
            </div>
            <div className="bg-[linear-gradient(135deg,#08122c_0%,#0b2d66_55%,#7fd34e_180%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.28em] text-[#f2cf5b]">{brand.shortName} favorites</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">Keep track of the listings that matter most.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">Save, compare, and return whenever you're ready to move forward.</p>
            </div>
          </div>
        </div>

        <FavoritesList />
      </section>
    </main>
  );
}
