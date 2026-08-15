import type { Metadata, Viewport } from 'next'
import { Inter, Unbounded } from 'next/font/google'
import { site } from '@/content/site'
import './globals.css'

/* Основной шрифт — заголовки, кнопки, цифры (design-system.md §3.1) */
const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-unbounded',
  display: 'swap',
})

/* Вторичный шрифт — весь текст */
const inter = Inter({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.meta.title,
    template: `%s — ${site.name}`,
  },
  description: site.meta.description,
  keywords: [
    'психолог',
    'когнитивно-поведенческая терапия',
    'КПТ',
    'ICF-коуч',
    'консультация психолога онлайн',
    'Избасар Мамыров',
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    title: site.meta.title,
    description: site.meta.description,
    siteName: site.name,
    images: [{ url: '/images/izbasar_suit.jpg', width: 768, height: 1024, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.meta.title,
    description: site.meta.description,
    images: ['/images/izbasar_suit.jpg'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#131516',
  colorScheme: 'dark',
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: 'Психолог, КПТ-терапевт, ICF-коуч',
  description: site.meta.description,
  url: site.url,
  image: `${site.url}/images/izbasar_suit.jpg`,
  knowsAbout: [
    'Когнитивно-поведенческая терапия',
    'Коучинг',
    'Работа с тревогой',
    'Ограничивающие убеждения',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-200 focus:rounded-full focus:bg-surface-inverse focus:px-6 focus:py-3 focus:text-ink-inverse"
        >
          Перейти к содержимому
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  )
}
