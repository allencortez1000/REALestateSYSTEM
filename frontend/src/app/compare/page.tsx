import type { Metadata } from 'next';
import HeroAsideIntro from '@/components/marketing/HeroAsideIntro';
import PageHero from '@/components/ui/PageHero';
import { brand } from '@/data/brand';
import { comparePageContent } from '@/data/content/publicPages';
import CompareExperience from './CompareExperience';

export const metadata: Metadata = {
  title: 'Compare Model Houses',
  description: `Compare ${brand.name} model houses side by side by price, size, package type, features, and buyer fit.`
};

export default function ComparePage() {
  return (
    <main className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1560px]">
        <PageHero
          eyebrow="Side by side"
          title="Compare model houses."
          description={comparePageContent.heroDescription}
          aside={
            <HeroAsideIntro
              eyebrow={comparePageContent.asideLabel}
              title={comparePageContent.asideTitle}
              description={comparePageContent.asideText}
              eyebrowClassName="text-[#f2cf5b]"
            />
          }
        />

        <CompareExperience />
      </section>
    </main>
  );
}
