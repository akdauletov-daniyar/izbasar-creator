import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site-url'

/**
 * Preview-деплои закрываем от индексации, чтобы они не конкурировали
 * с продакшном в выдаче.
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === 'production' || !process.env.VERCEL_ENV

  if (!isProduction) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
