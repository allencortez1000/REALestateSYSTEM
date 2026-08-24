'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import FavoriteButton, { hasStoredFavorites, readFavorites } from '@/components/properties/FavoriteButton';
import { getModelHouseHref, modelHouses } from '@/data/modelHouses';

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
    <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
      {favoriteListings.map((property) => (
        <article key={property.title} className="card card-hover group overflow-hidden">
          <div className="relative h-52 overflow-hidden bg-[linear-gradient(150deg,_#08122c,_#0b2d66_60%,_#7fd34e_180%)]">
            <Image src={property.image} alt={property.title} fill className="object-cover opacity-80 transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_45%),linear-gradient(180deg,rgba(8,18,44,0.08),rgba(8,18,44,0.55))]" />
            <FavoriteButton slug={property.slug} variant="pill" className="absolute right-4 top-4" />
          </div>
          <div className="p-6">
            <div className="section-label text-[#b98a3d]">{property.type}</div>
            <h2 className="mt-3 text-xl font-bold text-[#08122c]">{property.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">{property.lotArea} • {property.floorArea}</p>
            <div className="mt-3 text-2xl font-bold text-[#0b2d66]">{property.price}</div>
            <div className="mt-5 flex gap-3">
              <Link href={getModelHouseHref(property.slug)} className="btn-outline px-5 py-2 text-xs">View</Link>
              <Link href="/compare" className="btn-primary px-5 py-2 text-xs">Compare</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
