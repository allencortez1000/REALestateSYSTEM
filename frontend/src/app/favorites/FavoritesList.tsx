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

  useEffect(() => {
    const sync = () => {
      const saved = readFavorites();
      setFavoriteSlugs(hasStoredFavorites() ? saved : defaultFavoriteSlugs);
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
