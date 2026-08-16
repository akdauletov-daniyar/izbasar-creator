'use client'

import Image from 'next/image'
import { useState } from 'react'
import { site } from '@/content/site'
import { Button } from './ui/Button'

type Status = 'idle' | 'sent'

/** Панель записи — design-system.md §7.5 (портрет слева, копия и форма справа) */
export function ContactPanel() {
  const { ctaPanel, contacts } = site
  const [name, setName] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const ready = name.trim().length > 0

  /**
   * Форма спрашивает только имя: остальное быстрее выяснить в переписке.
   * Заявка уходит в WhatsApp — бэкенд не нужен, заявка не теряется.
   */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!ready) return

    const text = `Здравствуйте! Меня зовут ${name.trim()}. Хочу записаться на консультацию.`
    window.open(`${contacts.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    setStatus('sent')
  }

  return (
    <section id="contact" className="section pt-0 lg:pt-0">
      <div className="container-panel">
        <div>
          <div className="panel-cta">
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Портрет, врезанный в левую кромку */}
              <div className="relative min-h-[280px] md:col-span-4 md:min-h-[520px] lg:col-span-5 lg:min-h-[560px]">
                <Image
                  src={ctaPanel.image.src}
                  alt={ctaPanel.image.alt}
                  fill

                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[center_30%] [filter:saturate(0.9)] [mask-image:linear-gradient(to_bottom,#000_72%,transparent_100%)] md:[mask-image:linear-gradient(to_right,#000_70%,transparent_100%)]"
                />
                {/* Лёгкое затемнение из глубины панели, чтобы дневной кадр
                    не спорил с тёмной поверхностью. Прежний зелёный
                    mix-blend-color был подобран под тёмный кадр и превращал
                    дневную фотографию в бледный призрак. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-l from-accent-900/50 via-transparent to-transparent"
                />
              </div>

              {/* Копия и форма */}
              <div className="px-6 pb-14 pt-4 sm:px-10 md:col-span-8 md:py-14 md:pl-2 md:pr-10 lg:col-span-7 lg:py-20 lg:pl-4 lg:pr-16">
                <h2 className="max-w-[16ch] text-h2">
                  {ctaPanel.titleLead} <span className="accent">{ctaPanel.titleAccent}</span>
                </h2>

                <p className="mt-5 max-w-[32rem] text-body-lg text-ink-secondary">{ctaPanel.text}</p>

                <form onSubmit={handleSubmit} className="mt-8 flex max-w-[30rem] flex-col gap-4">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      Имя
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Как тебя зовут"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value)
                        if (status !== 'idle') setStatus('idle')
                      }}
                      className="field"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    {/* Кнопка неактивна, пока имя не введено */}
                    <Button variant="primary" type="submit" disabled={!ready}>
                      {ctaPanel.cta.label}
                    </Button>
                  </div>

                  <p role="status" className="text-body-sm text-ink-muted">
                    {status === 'sent'
                      ? 'Открыли WhatsApp. Если чат не появился — напиши напрямую.'
                      : ready
                        ? 'Заявка откроется в WhatsApp — отвечу лично в течение дня.'
                        : 'Введи имя, чтобы продолжить.'}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
