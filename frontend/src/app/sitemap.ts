import type { MetadataRoute } from 'next';
import { modelHouses } from '@/data/modelHouses';
import { siteUrl } from '@/data/site';

const staticRoutes = [
  '',
  '/properties',
  '/search',
  '/compare',
  '/contact',
  '/blog',
  '/favorites',
  '/bookings',
  '/privacy',
  '/terms',
  '/cookies',
  '/accessibility'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
      priority: route === '' ? 1 : 0.7
    })),
    ...modelHouses.map((listing) => ({
      url: `${siteUrl}/properties/${listing.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }))
  ];
}
