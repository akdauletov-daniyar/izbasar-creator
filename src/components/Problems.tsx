import Image from 'next/image'
import { site } from '@/content/site'
import { Button } from './ui/Button'
import { Check, featureIcons } from './ui/Icons'

/** Раздел «С чем я работаю» — раскладка 5/3/4 (design-system.md §4.2) */
export function Problems() {
  const { problems } = site

  return (
    <section className="section">
      <div className="container-page">
        {/* Планшет: копия 7 / фото 5, пункты — строкой из трёх ниже.
            Десктоп: 5 / 3 / 4 в одну строку (§4.2). */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-x-10 md:gap-y-14 lg:gap-8">
          {/* Копия + чеклист */}
          <div className="md:col-span-7 lg:col-span-5">
            <span className="eyebrow">{problems.eyebrow}</span>

            <h2 className="mt-4 max-w-[14ch] text-h2">
              {problems.titleLead} <span className="accent">{problems.titleAccent}</span>
            </h2>

            <p className="mt-5 max-w-[34rem] text-body-lg text-ink-secondary">{problems.body}</p>

            <div className="mt-8">
              <Button href={problems.cta.href} variant="primary">
                {problems.cta.label}
              </Button>
            </div>

            <ul className="mt-10 flex flex-col gap-5">
              {problems.checklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="check-bullet">
                    <Check />
                  </span>
                  <span className="max-w-[30rem] text-body-sm text-ink-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Фотография */}
          <div className="md:col-span-5 lg:col-span-3">
            <div className="media media-xl relative aspect-3/4 w-full md:h-full md:aspect-auto md:min-h-[420px] lg:min-h-0">
              <Image
                src={problems.image.src}
                alt={problems.image.alt}
                fill
                sizes="(max-width: 767px) 92vw, (max-width: 1023px) 40vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Пункты с иконками */}
          <div className="md:col-span-12 lg:col-span-4">
            <ul className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-8 lg:flex lg:flex-col">
              {problems.items.map((item) => {
                const Icon = featureIcons[item.icon]
                return (
                  <li key={item.title}>
                    <span className="icon-badge">
                      <Icon />
                    </span>
                    <h3 className="mt-4 text-h4">{item.title}</h3>
                    <p className="mt-2 text-body-sm text-ink-secondary">{item.text}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
