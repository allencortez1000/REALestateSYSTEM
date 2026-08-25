import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CompareExperience from './CompareExperience';

export const metadata: Metadata = {
  title: 'Compare Model Houses',
  description: 'Compare Amica Residences by Rabino Home Builders Corporation model houses side by side by price, size, package type, features, and buyer fit.'
};

export default function ComparePage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1560px]">
        <PageHero
          eyebrow="Side by side"
          title="Compare model houses."
          description="A clearer comparison view for buyers who want to quickly understand price, fit, size, and package type."
          aside={
            <>
              <div className="section-label text-[#f2cf5b]">RHBC compare</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">Choose based on lifestyle, budget, and home type.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">Use the selector and comparison table below to find the model that best matches your needs.</p>
            </>
          }
        />

        <CompareExperience />
      </section>
    </main>
  );
}
