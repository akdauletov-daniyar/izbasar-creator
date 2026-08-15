/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /* Не сообщаем стек в заголовках */
  poweredByHeader: false,

  images: {
    /* AVIF первым: для тёмных фотографий выигрыш к WebP заметный */
    formats: ['image/avif', 'image/webp'],
    /*
     * Реальные точки отрисовки макета. Сокращаем список, чтобы Vercel
     * не генерировал десяток лишних вариантов каждой картинки —
     * оптимизация изображений там тарифицируется поштучно.
     */
    deviceSizes: [390, 640, 768, 1024, 1280, 1600, 1920],
    imageSizes: [256, 384],
    /* Оптимизированные варианты живут в кэше месяц, а не сутки */
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      {
        /* Исходные фотографии неизменяемы — имя файла меняется вместе с содержимым */
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
}

export default nextConfig
