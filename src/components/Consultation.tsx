import Image from 'next/image'
import { site } from '@/content/site'
import { Button } from './ui/Button'
import { Check } from './ui/Icons'

/** Раздел «Консультация» — 6 шагов, результаты, формат */
export function Consultation() {
  const { consultation } = site

  return (
    <section id="consultation" className="section">
      <div className="container-page">
        <div>
          <span className="eyebrow">{consultation.eyebrow}</span>
          <h2 className="mt-4 max-w-[20ch] text-h2">
            {consultation.titleLead} <span className="accent">{consultation.titleAccent}</span>
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
            <p className="text-body-lg text-ink-secondary md:col-span-6">{consultation.lead}</p>
            <p className="text-body-lg text-ink md:col-span-6 lg:col-span-5 lg:col-start-8">
              {consultation.subLead}
            </p>
          </div>
        </div>

        {/* Шаги */}
        <div className="mt-12 lg:mt-16">
          <h3 className="text-h3">{consultation.stepsTitle}</h3>
        </div>

        <ol className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {consultation.steps.map((step, index) => (
            <li key={step.title} className="card card-hover flex h-full flex-col p-7">
              <span
                className="font-display text-h4 font-semibold text-accent-ink"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h4 className="mt-4 text-h4">{step.title}</h4>
              <p className="mt-2 text-body-sm text-ink-secondary">{step.text}</p>
            </li>
          ))}
        </ol>

        {/* Результаты + формат */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h3 className="text-h3">{consultation.outcomesTitle}</h3>

            {/* Два столбца только с 768px: на 480px строки становятся по 3–4 слова */}
            <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              {consultation.outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="check-bullet">
                    <Check />
                  </span>
                  <span className="text-body-sm text-ink-secondary">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 max-w-[36rem] border-l-2 border-accent-600 pl-6 text-body text-ink-secondary">
              {consultation.closing}
            </p>
          </div>

          {/* Планшет: карточка становится горизонтальной — фото слева, детали справа */}
          <div className="lg:col-span-5">
            <div className="card grid grid-cols-1 overflow-hidden md:grid-cols-2 lg:grid-cols-1">
              <div className="media relative aspect-16/10 w-full rounded-b-none md:aspect-auto md:min-h-[300px] md:rounded-r-none lg:aspect-16/10 lg:min-h-0 lg:rounded-r-[inherit]">
                <Image
                  src={consultation.image.src}
                  alt={consultation.image.alt}
                  fill
                  sizes="(max-width: 767px) 92vw, (max-width: 1023px) 46vw, 40vw"
                  className="object-cover object-[center_35%]"
                />
              </div>

              <div className="p-7 lg:p-8">
                <h3 className="text-h4">{consultation.formatTitle}</h3>

                <dl className="mt-6 flex flex-col">
                  {consultation.format.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-4 border-b border-line-subtle py-3.5 last:border-b-0"
                    >
                      <dt className="text-body-sm text-ink-muted">{row.label}</dt>
                      <dd className="font-display text-body-sm font-medium text-ink">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7">
                  <Button href="#contact" variant="primary" className="w-full">
                    {consultation.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
