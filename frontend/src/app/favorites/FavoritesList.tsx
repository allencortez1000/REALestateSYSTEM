'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import FavoriteButton, { hasStoredFavorites, readFavorites } from '@/components/properties/FavoriteButton';
import PropertyCard from '@/components/properties/PropertyCard';
import ResponsiveGrid from '@/components/ui/ResponsiveGrid';
import { modelHouses } from '@/data/modelHouses';

const defaultFavoriteSlugs = ['hera-model-house', 'kasandra-model-house', 'low-cost-housing'];

export default function FavoritesList() {
  const [favoriteSlugs, setFavoriteSlugs] = useState<string[]>(defaultFavoriteSlugs);
    const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const sync = () => {
      const saved = readFavorites();
      setFavoriteSlugs(hasStoredFavorites() ? saved : defaultFavoriteSlugs);
            setHydrated(true);
    };

    sync();
    window.addEventListener('storage', sync);
    window.addEventListener('amica:favorites-updated', sync);

    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('amica:favorites-updated', sync);
    };
  }, []);

  const favoriteListings = modelHouses.filter((listing) => favoriteSlugs.includes(listing.slug));

  if (!hydrated) {
    return (
      <div className="mt-10 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="min-h-[320px] animate-pulse rounded-[2rem] border border-[#e7dcc8] bg-white/70 p-5 shadow-[0_18px_50px_rgba(9,21,64,0.06)]">
            <div className="h-40 rounded-[1.5rem] bg-[#efe7d8]" />
            <div className="mt-5 h-4 w-24 rounded-full bg-[#e7dcc8]" />
            <div className="mt-4 h-7 w-3/4 rounded-full bg-[#e7dcc8]" />
            <div className="mt-3 h-4 w-full rounded-full bg-[#efe7d8]" />
            <div className="mt-2 h-4 w-2/3 rounded-full bg-[#efe7d8]" />
          </div>
        ))}
      </div>
    );
  }

  if (favoriteListings.length === 0) {
    return (
      <div className="mt-10 rounded-[2rem] border border-[#e7dcc8] bg-white p-8 text-center shadow-[0_18px_50px_rgba(9,21,64,0.07)]">
        <div className="section-label text-[#b98a3d]">No favorites yet</div>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">Start saving model houses</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">Open a property detail page and save the listings you want to revisit later.</p>
        <Link href="/properties" className="btn-primary mt-5">Browse model houses</Link>
      </div>
    );
  }

  return (
    <ResponsiveGrid className="mt-10 gap-7">
      {favoriteListings.map((property) => (
        <PropertyCard key={property.slug} listing={property} label="Saved" showCompare />
      ))}
    </ResponsiveGrid>
  );
}
