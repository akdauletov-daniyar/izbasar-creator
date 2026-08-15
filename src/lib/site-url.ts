/**
 * Базовый URL сайта.
 *
 * Захардкоженный домен ломает preview-деплои на Vercel: canonical, og:image
 * и sitemap начинают указывать на продакшн, которого для новой ветки ещё нет.
 * Поэтому адрес берём из окружения:
 *
 *   1. NEXT_PUBLIC_SITE_URL            — свой домен, когда он подключён;
 *   2. VERCEL_PROJECT_PRODUCTION_URL   — продовый домен проекта (на проде);
 *   3. VERCEL_URL                      — адрес конкретного деплоя (preview);
 *   4. localhost                       — локальная разработка.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/+$/, '')

  const isProduction = process.env.VERCEL_ENV === 'production'
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL
  const deploymentHost = process.env.VERCEL_URL

  const host = isProduction ? (productionHost ?? deploymentHost) : (deploymentHost ?? productionHost)
  if (host) return `https://${host}`

  return 'http://localhost:3000'
}

export const siteUrl = getSiteUrl()
