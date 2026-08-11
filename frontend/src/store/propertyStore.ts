import type { Property, PropertyFilters } from '@/types';

export type PropertyStore = {
  filters: PropertyFilters;
  searchResults: Property[];
  favorites: Property[];
  recentlyViewed: Property[];
  compareList: Property[];
};

export const propertyStore: PropertyStore = {
  filters: {},
  searchResults: [],
  favorites: [],
  recentlyViewed: [],
  compareList: []
};

export const usePropertyStore = () => propertyStore;
