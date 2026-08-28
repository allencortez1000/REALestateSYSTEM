'use client';

import { useFavorites, FAVORITES_KEY, hasStoredFavorites, readFavorites, writeFavorites } from '@/hooks/useFavorites';

type FavoriteButtonProps = {
  slug: string;
  variant?: 'primary' | 'outline' | 'pill';
  className?: string;
};

export default function FavoriteButton({ slug, variant = 'outline', className = '' }: FavoriteButtonProps) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(slug);

  const baseClass = variant === 'primary'
    ? 'btn-primary'
    : variant === 'pill'
      ? 'rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md transition hover:bg-white/16'
      : 'btn-outline';

  return (
    <button type="button" onClick={() => toggleFavorite(slug)} className={`${baseClass} ${className}`} aria-pressed={isFavorite}>
      {isFavorite ? '♥ Saved' : '♡ Save'}
    </button>
  );
}

export { FAVORITES_KEY, hasStoredFavorites, readFavorites, writeFavorites };
