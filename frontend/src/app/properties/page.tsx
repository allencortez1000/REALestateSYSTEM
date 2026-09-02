import type { Metadata } from 'next';
import Link from 'next/link';
import HeroAsideIntro from '@/components/marketing/HeroAsideIntro';
import PropertyCard from '@/components/properties/PropertyCard';
import SectionHeader from '@/components/marketing/SectionHeader';
import PageHero from '@/components/ui/PageHero';
import ResponsiveGrid from '@/components/ui/ResponsiveGrid';
import { brand } from '@/data/brand';
import { propertiesPageContent } from '@/data/content/publicPages';
import { featuredModelHouses } from '@/data/modelHouses';

export const metadata: Metadata = {
  title: 'Model Houses',
  description: `Browse ${brand.name} model houses with prices, lot areas, floor areas, and buyer guidance.`
};

export default function PropertiesPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <PageHero
          eyebrow="Portfolio"
          title="Curated residences with an Amica Residences signature."
          description={propertiesPageContent.heroDescription}
          aside={
            <HeroAsideIntro
              eyebrow={propertiesPageContent.heroAsideLabel}
              title={propertiesPageContent.heroAsideTitle}
              description={propertiesPageContent.heroAsideText}
            />
          }
        >
          <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-600">{propertiesPageContent.heroSupport}</p>
        </PageHero>

        <section className="mt-6 rounded-[2.15rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f0_100%)] p-6 shadow-[0_14px_34px_rgba(9,21,64,0.05)] sm:p-8">
          <SectionHeader
            eyebrow="Buying guide"
            title="How to choose the right model"
            description="Use these quick reminders before opening a model-house detail page or comparing options."
            action={<Link href="/compare" className="btn-outline">Open comparison</Link>}
          />

          <ResponsiveGrid columns="four" className="mt-6 gap-4">
            {propertiesPageContent.buyingGuide.map((item, index) => (
              <article key={item.title} className="rounded-[1.5rem] border border-[#e7dcc8] bg-white p-5 shadow-[0_8px_22px_rgba(9,21,64,0.04)]">
                <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b98a3d]">0{index + 1}</div>
                <h3 className="mt-3 text-lg font-semibold text-[#071426]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p>
              </article>
            ))}
          </ResponsiveGrid>
        </section>

        <ResponsiveGrid as="section" className="mt-6 gap-6">
          {featuredModelHouses.map((listing) => (
            <PropertyCard key={listing.slug} listing={listing} />
          ))}
        </ResponsiveGrid>
      </section>
    </main>
  );
}
