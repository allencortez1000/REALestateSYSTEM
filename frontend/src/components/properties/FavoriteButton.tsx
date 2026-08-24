'use client';

import { useEffect, useState } from 'react';

const FAVORITES_KEY = 'amicaFavoriteModelHouses';

function readFavorites() {
  if (typeof window === 'undefined') return [] as string[];

  try {
    const raw = window.localStorage.getItem(FAVORITES_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

function hasStoredFavorites() {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(FAVORITES_KEY) !== null;
}

function writeFavorites(slugs: string[]) {
  window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(new Set(slugs))));
  window.dispatchEvent(new Event('amica:favorites-updated'));
}

type FavoriteButtonProps = {
  slug: string;
  variant?: 'primary' | 'outline' | 'pill';
  className?: string;
};

export default function FavoriteButton({ slug, variant = 'outline', className = '' }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const sync = () => setIsFavorite(readFavorites().includes(slug));

    sync();
    window.addEventListener('storage', sync);
    window.addEventListener('amica:favorites-updated', sync);

    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('amica:favorites-updated', sync);
    };
  }, [slug]);

  function toggleFavorite() {
    const current = readFavorites();
    const next = current.includes(slug)
      ? current.filter((item) => item !== slug)
      : [...current, slug];

    writeFavorites(next);
    setIsFavorite(next.includes(slug));
  }

  const baseClass = variant === 'primary'
    ? 'btn-primary'
    : variant === 'pill'
      ? 'rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md transition hover:bg-white/16'
      : 'btn-outline';

  return (
    <button type="button" onClick={toggleFavorite} className={`${baseClass} ${className}`} aria-pressed={isFavorite}>
      {isFavorite ? '♥ Saved' : '♡ Save'}
    </button>
  );
}

export { FAVORITES_KEY, hasStoredFavorites, readFavorites, writeFavorites };
