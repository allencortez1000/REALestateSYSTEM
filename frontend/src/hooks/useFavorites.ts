'use client';

import { useCallback, useEffect } from 'react';
import { useLocalStorageState } from './useLocalStorageState';

export const FAVORITES_KEY = 'amicaFavoriteModelHouses';
export const FAVORITES_UPDATED_EVENT = 'amica:favorites-updated';

function parseFavorites(raw: string | null) {
  try {
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

export function readFavorites() {
  if (typeof window === 'undefined') return [] as string[];
  return parseFavorites(window.localStorage.getItem(FAVORITES_KEY));
}

export function hasStoredFavorites() {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(FAVORITES_KEY) !== null;
}

export function writeFavorites(slugs: string[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(new Set(slugs))));
  window.dispatchEvent(new Event(FAVORITES_UPDATED_EVENT));
}

export function useFavorites() {
  const { value: favorites, setValue: setFavorites, hydrated } = useLocalStorageState<string[]>({
    storageKey: FAVORITES_KEY,
    initialValue: [],
    read: parseFavorites,
    write: (value) => JSON.stringify(Array.from(new Set(value)))
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sync = () => setFavorites(readFavorites());
    window.addEventListener('storage', sync);
    window.addEventListener(FAVORITES_UPDATED_EVENT, sync);

    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener(FAVORITES_UPDATED_EVENT, sync);
    };
  }, [setFavorites]);

  const toggleFavorite = useCallback((slug: string) => {
    const current = readFavorites();
    const next = current.includes(slug)
      ? current.filter((item) => item !== slug)
      : [...current, slug];

    writeFavorites(next);
    setFavorites(next);
  }, [setFavorites]);

  return { favorites, hydrated, toggleFavorite };
}
