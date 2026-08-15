import { site } from '@/content/site'
import { Instagram, Mail, Telegram, WhatsApp } from './ui/Icons'

/** Подвал — design-system.md §7.7 */
export function Footer() {
  const { footer, contacts } = site
  const year = new Date().getFullYear()

  const socials = [
    { key: 'telegram', href: contacts.telegram, label: 'Telegram', Icon: Telegram },
    { key: 'whatsapp', href: contacts.whatsapp, label: 'WhatsApp', Icon: WhatsApp },
    { key: 'instagram', href: contacts.instagram, label: 'Instagram', Icon: Instagram },
    { key: 'email', href: contacts.email ? `mailto:${contacts.email}` : '', label: 'Почта', Icon: Mail },
  ].filter((item) => item.href)

  return (
    <footer className="border-t border-line-subtle pt-14 lg:pt-16">
      <div className="container-page">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[22rem]">
            <div className="flex items-center">
              <span className="font-display text-xl font-black tracking-[-0.03em] text-ink">
                {site.shortName}
              </span>
            </div>
            <p className="mt-4 text-body-sm text-ink-secondary">{footer.tagline}</p>
          </div>

          {socials.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              {socials.map(({ key, href, label, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target={key === 'email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink-secondary transition-colors hover:border-accent-400 hover:text-accent-400"
                >
                  <Icon />
                </a>
              ))}
            </div>
          )}
        </div>

        <nav
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-1 border-t border-line-subtle pt-4 md:mt-14 md:justify-between md:pt-6"
          aria-label="Навигация в подвале"
        >
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-body-sm">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-link text-body-sm">
            Записаться
          </a>
        </nav>

        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-line-subtle py-8 text-body-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.name}
          </span>
          <span>{footer.legal}</span>
        </div>
      </div>
    </footer>
  )
}
