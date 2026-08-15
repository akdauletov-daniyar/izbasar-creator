import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site-url'

/** Сайт одностраничный — в карте одна запись. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
