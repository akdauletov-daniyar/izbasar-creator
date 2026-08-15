import Image from 'next/image'
import { site } from '@/content/site'
import { Button } from './ui/Button'

/**
 * Геройский блок — design-system.md §7.4.
 * Во всю ширину, без отступа от края и скруглений: шапка лежит поверх него,
 * и скруглённый угол панели резал бы кнопку навигации.
 */
export function Hero() {
  const { hero } = site

  return (
    <section id="top" className="panel-hero min-h-[600px] lg:min-h-[680px]">
      <div className="container-page relative z-10 grid grid-cols-1 items-end gap-10 pb-14 pt-28 md:gap-12 md:pb-16 lg:grid-cols-12 lg:gap-8 lg:pt-32">
        {/* Текстовая колонка — 6/12 */}
        <div className="lg:col-span-6 lg:pb-4">
          <span className="eyebrow text-accent-200">{hero.eyebrow}</span>

          <h1 className="mt-6 max-w-[15ch] text-display text-ink">
            {hero.titleLead} <span className="text-accent-200">{hero.titleAccent}</span>
          </h1>

          <p className="mt-5 max-w-[32rem] text-body-lg text-white/70">{hero.subtitle}</p>

          {/* В строку с 768px; flex-wrap обязателен — на 1024px текстовая колонка
              уже двух подписей, и без переноса вторая кнопка залезала на портрет */}
          <div className="mt-10 flex flex-col gap-3 md:mt-12 md:flex-row md:flex-wrap md:items-center md:gap-4">
            <Button href={hero.primaryCta.href} variant="inverted">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghost" trailing="play">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <dl className="mt-12 flex flex-wrap items-start gap-x-12 gap-y-6 border-t border-white/10 pt-8 md:mt-14 md:gap-x-16">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-stat text-ink">{stat.value}</span>
                  <span className="mt-1 block text-body-sm text-white/60">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Портрет: портретный кадр на телефоне, широкая полоса на планшете,
            правая половина блока на десктопе */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-3/4 w-full max-w-[420px] overflow-hidden rounded-xl md:aspect-16/9 md:max-w-none lg:absolute lg:bottom-0 lg:right-0 lg:aspect-auto lg:h-[600px] lg:w-[92%] lg:rounded-b-none">
            <Image
              src={hero.portrait.src}
              alt={hero.portrait.alt}
              fill
              priority
              sizes="(max-width: 767px) 92vw, (max-width: 1023px) 88vw, 44vw"
              className="object-cover object-top md:object-[center_28%] lg:object-top [mask-image:linear-gradient(to_bottom,#000_62%,transparent_98%)] md:[mask-image:none] lg:[mask-image:linear-gradient(to_bottom,#000_62%,transparent_98%)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
