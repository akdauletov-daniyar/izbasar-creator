'use client'

import { useEffect, useState } from 'react'
import { site } from '@/content/site'
import { Button } from './ui/Button'
import { Close, Menu } from './ui/Icons'

/** Навигация — design-system.md §7.1 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  // Состояние «прокручено»: surface-1 80% + blur + нижняя граница
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Подсветка активного раздела
  useEffect(() => {
    const ids = site.nav.map((item) => item.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Блокировка прокрутки и Escape при открытом меню
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
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
    /* Меню — сосед <header>, а не потомок: backdrop-filter создаёт containing block
       и position: fixed внутри шапки привязался бы к ней, а не к вьюпорту. */
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-200 ${
          scrolled
            ? 'border-b border-line-subtle bg-surface-1/80 shadow-sm backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-page">
          {/* Компактная шапка 48px: только ссылки справа (бургер на мобильном) */}
          <div className="flex h-12 items-center justify-end gap-6 lg:gap-8">
            <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link text-[0.9375rem]"
                  aria-current={active === item.href ? 'true' : undefined}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Кнопка меню чуть меньше высоты шапки; зону нажатия до 44px
                добирает прозрачный ::after у .nav-burger */}
            <button
              type="button"
              className="nav-burger relative inline-flex h-9 w-9 items-center justify-center rounded-sm border border-line text-ink lg:hidden"
              aria-label="Открыть меню"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu width={18} height={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Мобильное меню — лист surface-1 со скруглением сверху */}
      <div
        className={`fixed inset-0 z-60 lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-[var(--overlay-scrim)] transition-opacity duration-200 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Позиция листа — инлайн-стилем: утилита translate-y-0 в этой сборке
            не срабатывала (класс менялся, стиль — нет), и меню не открывалось */}
        <div
          style={{ transform: open ? 'translateY(0)' : 'translateY(100%)' }}
          className="absolute inset-x-0 bottom-0 top-12 flex flex-col overflow-y-auto overscroll-contain rounded-t-2xl border-t border-line bg-surface-1 px-6 pt-6 pb-[max(2rem,env(safe-area-inset-bottom))] transition-transform duration-[420ms] ease-[var(--ease-soft)]"
        >
          <div className="flex items-center justify-between">
            <span className="eyebrow eyebrow-center">Меню</span>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink"
              aria-label="Закрыть меню"
              onClick={() => setOpen(false)}
            >
              <Close />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-1" aria-label="Мобильная навигация">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[52px] items-center rounded-lg font-display text-h4 text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <Button
              href="#consultation"
              variant="primary"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
