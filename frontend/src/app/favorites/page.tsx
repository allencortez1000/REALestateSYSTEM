import type { Metadata } from 'next';
import MarketingHeroSplit from '@/components/marketing/MarketingHeroSplit';
import { brand } from '@/data/brand';
import { favoritesPageContent } from '@/data/content/secondaryPages';
import FavoritesList from './FavoritesList';

export const metadata: Metadata = {
  title: 'Favorites',
  description: `Review saved ${brand.name} model houses and return to shortlisted listings for comparison.`
};

export default function FavoritesPage() {
  return (
    <main className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1560px]">
        <MarketingHeroSplit
          badge={favoritesPageContent.badge}
          title={favoritesPageContent.title}
          description={favoritesPageContent.description}
          asideEyebrow={favoritesPageContent.asideEyebrow}
          asideTitle={favoritesPageContent.asideTitle}
          asideDescription={favoritesPageContent.asideDescription}
          asideClassName={favoritesPageContent.asideClassName}
          className="border-[#dbe5f2] bg-white/88"
        />

        <FavoritesList />
      </section>
    </main>
  );
}
