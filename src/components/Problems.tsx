import { site } from '@/content/site'
import { Button } from './ui/Button'
import { Check, featureIcons } from './ui/Icons'

/**
 * Раздел «С чем я работаю» — без фотографии.
 * Освободившуюся ширину отдаём тексту: питч и чеклист встают в строку,
 * три пункта разворачиваются на всю ширину под ними.
 */
export function Problems() {
  const { problems } = site

  return (
    <section className="section">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-x-10 md:gap-y-14">
          {/* Питч */}
          <div className="md:col-span-12 lg:col-span-6">
            <span className="eyebrow">{problems.eyebrow}</span>

            <h2 className="mt-4 max-w-[15ch] text-h2">
              {problems.titleLead} <span className="accent">{problems.titleAccent}</span>
            </h2>

            <p className="mt-5 max-w-[34rem] text-body-lg text-ink-secondary">{problems.body}</p>

            <div className="mt-8">
              <Button href={problems.cta.href} variant="primary">
                {problems.cta.label}
              </Button>
            </div>
          </div>

          {/* Чеклист — рядом с питчем на десктопе, прижат к нижней кромке строки */}
          <div className="md:col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end lg:pb-1">
            <ul className="flex flex-col gap-5">
              {problems.checklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="check-bullet">
                    <Check />
                  </span>
                  <span className="max-w-[32rem] text-body-sm text-ink-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Три пункта во всю ширину */}
          <div className="md:col-span-12 lg:border-t lg:border-line-subtle lg:pt-14">
            <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
              {problems.items.map((item) => {
                const Icon = featureIcons[item.icon]
                return (
                  <li key={item.title}>
                    <span className="icon-badge">
                      <Icon />
                    </span>
                    <h3 className="mt-4 max-w-[20ch] text-h4">{item.title}</h3>
                    <p className="mt-2 max-w-[34rem] text-body-sm text-ink-secondary">{item.text}</p>
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
