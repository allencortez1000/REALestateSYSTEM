import Image from 'next/image';
import Link from 'next/link';
import type { ModelHouse } from '@/data/modelHouses';
import { getModelHouseHref } from '@/data/modelHouses';
import FavoriteButton from './FavoriteButton';

type PropertyCardProps = {
  listing: ModelHouse;
  label?: string;
  showFavorite?: boolean;
  showCompare?: boolean;
  variant?: 'standard' | 'compact';
  className?: string;
};

export default function PropertyCard({ listing, label = 'Featured', showFavorite = true, showCompare = false, variant = 'standard', className = '' }: PropertyCardProps) {
  const isCompact = variant === 'compact';

  return (
    <article className={`card card-hover group overflow-hidden ${className}`}>
      <div className={`relative overflow-hidden bg-[#071426] ${isCompact ? 'h-44' : 'h-52 sm:h-56'}`}>
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.06),rgba(7,20,38,0.48))]" />
        <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-[#071426]/70 px-3 py-1 text-[10px] font-semibold uppercase leading-4 tracking-[0.16em] text-white backdrop-blur-md">
          {label}
        </div>
      </div>

      <div className={isCompact ? 'p-5' : 'p-5 sm:p-6'}>
        <div className="flex flex-wrap items-center gap-2">
          <div className="section-label text-[#b98a3d]">{listing.type}</div>
          <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-3 py-1 text-[10px] font-semibold uppercase leading-4 tracking-[0.14em] text-[#8a6428]">
            {listing.bestFor}
          </span>
        </div>

        <h2 className={`${isCompact ? 'text-xl' : 'text-[clamp(1.85rem,6vw,2.75rem)]'} mt-3 font-semibold leading-tight tracking-[-0.05em] text-[#071426]`}>
          {listing.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">{listing.lotArea} • {listing.floorArea}</p>
        <div className={`${isCompact ? 'text-lg' : 'text-xl sm:text-2xl'} mt-5 break-words font-semibold text-[#b98a3d]`}>
          {listing.price}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={getModelHouseHref(listing.slug)} className="btn-primary inline-flex">
            View details
          </Link>
          {showFavorite ? <FavoriteButton slug={listing.slug} /> : null}
          {showCompare ? (
            <Link href="/compare" className="btn-outline inline-flex">
              Compare
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
