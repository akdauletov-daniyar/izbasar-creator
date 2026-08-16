import Image from 'next/image'
import { site } from '@/content/site'
import { Button } from './ui/Button'

/** Раздел «Обо мне» + «Мой подход» */
export function About() {
  const { about } = site

  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-10 lg:gap-16">
          {/* Портрет — 5/12 */}
          <div className="md:col-span-5">
            <div className="media media-xl relative aspect-4/5 w-full">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                fill

                quality={90}
                sizes="(max-width: 767px) 92vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Копия — 7/12 */}
          <div className="md:col-span-7">
            <span className="eyebrow">{about.eyebrow}</span>

            <h2 className="mt-4 max-w-[16ch] text-h2">
              {about.titleLead} <span className="accent">{about.titleAccent}</span>
            </h2>

            <div className="mt-5 flex max-w-[36rem] flex-col gap-4 text-body-lg text-ink-secondary">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <Button href={about.cta.href} variant="primary">
                {about.cta.label}
              </Button>
            </div>

            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-8 border-t border-line-subtle pt-8 lg:gap-x-16">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-stat text-ink">{stat.value}</span>
                    <span className="mt-1 block max-w-[12rem] text-body-sm text-ink-muted">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Мой подход */}
        <div className="mt-14 lg:mt-16">
          <div className="card overflow-hidden p-7 sm:p-9 lg:p-14">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10 lg:gap-16">
              <div className="md:col-span-5">
                <span className="eyebrow">{about.approach.eyebrow}</span>
                <h3 className="mt-4 max-w-[18ch] text-h3">{about.approach.quote}</h3>
              </div>

              <div className="md:col-span-7">
                <p className="max-w-[36rem] text-body-lg text-ink-secondary">{about.approach.body}</p>

                <p className="mt-8 max-w-[36rem] border-l-2 border-accent-600 pl-6 font-display text-h4 text-ink">
                  {about.approach.highlight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
