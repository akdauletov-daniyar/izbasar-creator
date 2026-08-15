'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { site } from '@/content/site'
import { Button } from './ui/Button'
import { Check, Close, Play } from './ui/Icons'
import { SectionHeader } from './ui/SectionHeader'

/** Раздел «Бесплатное видео» с модальным плеером */
export function VideoSection() {
  const { video } = site
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <section id="video" className="section">
      <div className="container-page">
        <div>
          <SectionHeader
            eyebrow={video.eyebrow}
            titleLead={video.titleLead}
            titleAccent={video.titleAccent}
            lead={video.lead}
            action={
              <Button variant="secondary" trailing="play" onClick={() => setOpen(true)}>
                {video.cta.label}
              </Button>
            }
          />
        </div>

        {/* Планшет: постер во всю ширину, ниже два столбца — текст и чеклист.
            Десктоп: постер 7/12 с текстом под ним, чеклист 5/12 на обе строки. */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-x-10 md:gap-y-12 lg:mt-16 lg:gap-8">
          {/* Постер */}
          <div className="md:col-span-12 lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="media media-xl group relative block aspect-4/3 w-full cursor-pointer md:aspect-16/9 lg:aspect-4/3"
              aria-label={`Смотреть видео: ${video.titleLead} ${video.titleAccent}`}
            >
              <Image
                src={video.poster.src}
                alt={video.poster.alt}
                fill
                sizes="(max-width: 767px) 92vw, (max-width: 1023px) 92vw, 58vw"
                className="object-cover object-[center_72%] transition-transform duration-[420ms] ease-[var(--ease-soft)] group-hover:scale-[1.02]"
              />
              <span className="absolute inset-0 z-1 bg-black/25" aria-hidden="true" />

              <span
                className="btn-play absolute left-1/2 top-1/2 z-2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-[220ms] ease-[var(--ease-soft)] group-hover:scale-[1.06]"
                aria-hidden="true"
              >
                <Play width={20} height={20} />
              </span>

              <span className="absolute bottom-5 left-5 z-2 inline-flex h-9 items-center rounded-full bg-black/55 px-4 font-display text-caption text-ink backdrop-blur-sm">
                {video.duration}
              </span>
            </button>
          </div>

          {/* Пояснение */}
          <div
            className="md:col-span-6 lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:pt-8">
            <div className="flex max-w-[36rem] flex-col gap-4 text-body text-ink-secondary">
              {video.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Чеклист */}
          <div
            className="md:col-span-6 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
            <div className="card h-full p-7 lg:p-9">
              <h3 className="text-h4">{video.listTitle}</h3>

              <ul className="mt-6 flex flex-col gap-4">
                {video.list.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="check-bullet">
                      <Check />
                    </span>
                    <span className="text-body-sm text-ink-secondary">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-body-sm text-ink-muted">{video.outro}</p>

              <div className="mt-6">
                <Button variant="primary" trailing="play" onClick={() => setOpen(true)}>
                  {video.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальный плеер */}
      {open && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-5"
          role="dialog"
          aria-modal="true"
          aria-label={video.cta.label}
        >
          <div
            className="absolute inset-0 bg-[var(--overlay-scrim)] backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="relative z-1 w-full max-w-4xl">
            <div className="mb-4 flex justify-end">
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-surface-1 text-ink transition-colors hover:bg-surface-2"
                aria-label="Закрыть"
              >
                <Close />
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-line bg-surface-1 shadow-lg">
              {video.embedUrl ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={video.embedUrl}
                    title={`${video.titleLead} ${video.titleAccent}`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                /* TODO: заполнить video.embedUrl в src/content/site.ts */
                <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 px-8 text-center">
                  <span className="btn-play" aria-hidden="true">
                    <Play width={20} height={20} />
                  </span>
                  <p className="mt-2 font-display text-h4 text-ink">Видео скоро будет доступно</p>
                  <p className="max-w-[28rem] text-body-sm text-ink-muted">
                    Ссылка на плеер ещё не подключена — добавьте её в{' '}
                    <code className="text-accent-ink">site.video.embedUrl</code>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
