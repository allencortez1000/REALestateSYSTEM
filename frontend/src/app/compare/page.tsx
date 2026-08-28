import type { Metadata } from 'next';
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
            <div className="flex min-h-[220px] items-end">
              <div className="max-w-sm">
                <div className="section-label text-[#f2cf5b]">{comparePageContent.asideLabel}</div>
                <div className="mt-4 text-3xl font-semibold leading-tight">{comparePageContent.asideTitle}</div>
                <p className="mt-4 text-sm leading-7 text-white/72">{comparePageContent.asideText}</p>
              </div>
            </div>
          }
        />

        <CompareExperience />
      </section>
    </main>
  );
}
