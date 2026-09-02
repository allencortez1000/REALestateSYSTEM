'use client';

import { useMemo } from 'react';
import { comparisonModelHouses } from '@/data/modelHouses';
import { useLocalStorageState } from './useLocalStorageState';

export const COMPARE_SELECTION_KEY = 'amicaCompareSelections';
export const defaultCompareSelections = comparisonModelHouses.slice(0, 4).map((property) => property.title);

function parseCompareSelections(raw: string | null) {
  try {
    const parsed = raw ? JSON.parse(raw) : null;
    const validTitles = comparisonModelHouses.map((property) => property.title);
    const selected = Array.isArray(parsed)
      ? parsed.filter((title): title is string => typeof title === 'string' && validTitles.includes(title))
      : [];

    return selected.length > 0 ? selected : defaultCompareSelections;
  } catch {
    return defaultCompareSelections;
  }
}

export function useCompareSelections() {
  const { value: selectedTitles, setValue: setSelectedTitles, hydrated } = useLocalStorageState<string[]>({
    storageKey: COMPARE_SELECTION_KEY,
    initialValue: defaultCompareSelections,
    read: parseCompareSelections
  });

  const selectedListings = useMemo(
    () => comparisonModelHouses.filter((property) => selectedTitles.includes(property.title)),
    [selectedTitles]
  );

  function toggleModel(title: string) {
    setSelectedTitles((current) => {
      if (current.includes(title)) {
        return current.length === 1 ? current : current.filter((item) => item !== title);
      }

      return [...current, title];
    });
  }

  function selectAll() {
    setSelectedTitles(comparisonModelHouses.map((property) => property.title));
  }

  return {
    selectedTitles,
    selectedListings,
    hydrated,
    toggleModel,
    selectAll,
    setSelectedTitles
  };
}
