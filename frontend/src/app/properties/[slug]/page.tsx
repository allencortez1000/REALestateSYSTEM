import type { Metadata } from 'next';
import Link from 'next/link';
import { brand } from '@/data/brand';
import { modelHousesBySlug } from '@/data/modelHouses';
import PropertyFloatingBar from './_components/PropertyFloatingBar';
import PropertyHeroPanel from './_components/PropertyHeroPanel';
import PropertyMainContent from './_components/PropertyMainContent';
import PropertySidebar from './_components/PropertySidebar';

type PropertyDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PropertyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = modelHousesBySlug[slug];

  if (!listing) {
    return {
      title: 'Property not found',
      description: `The requested ${brand.name} model-house listing could not be found.`
    };
  }

  return {
    title: listing.title,
    description: listing.description,
    openGraph: {
      title: listing.title,
      description: listing.summary,
      images: [{ url: listing.image }]
    }
  };
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { slug } = await params;
  const listing = modelHousesBySlug[slug];

  if (!listing) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="card max-w-xl p-14 text-center">
          <div className="section-label text-[#b98a3d]">Listing unavailable</div>
          <h1 className="section-title mt-4">Property not found</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Please return to the portfolio to view the featured Amica Residences.
          </p>
          <Link href="/properties" className="btn-primary mt-6 inline-flex">
            ← Back to listings
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative px-4 pb-40 pt-6 sm:px-6 sm:pb-36 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(420px,1fr)] xl:items-start">
          <div className="space-y-6">
            <PropertyHeroPanel listing={listing} />
            <PropertyMainContent listing={listing} />
          </div>

          <div className="min-w-0 space-y-6">
            <PropertySidebar listing={listing} />
          </div>
        </div>
      </section>

      <PropertyFloatingBar title={listing.title} />
    </main>
  );
}
