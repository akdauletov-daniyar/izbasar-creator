import { site } from '@/content/site'
import { Button } from './ui/Button'
import { Check } from './ui/Icons'

/**
 * Раздел «Бесплатная книга».
 * Книга скачивается напрямую одним нажатием (PDF из public/files) —
 * без форм и мессенджеров, раздел статический и не тянет клиентский JS.
 */
export function Book() {
  const { book } = site

  return (
    <section id="book" className="section pt-0 lg:pt-0">
      <div className="container-panel">
        <div className="panel-cta py-14 lg:py-20">
          <div className="panel-inner grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
            {/* Копия */}
            <div className="md:col-span-12 lg:col-span-7">
              <span className="eyebrow">{book.eyebrow}</span>

              <h2 className="mt-4 max-w-[16ch] text-h2">
                {book.titleLead} <span className="accent">{book.titleAccent}</span>
              </h2>

              <p className="mt-5 max-w-[34rem] text-body-lg text-ink-secondary">{book.lead}</p>

              <h3 className="mt-10 text-h4">{book.listTitle}</h3>

              <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {book.list.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="check-bullet">
                      <Check />
                    </span>
                    <span className="text-body-sm text-ink-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Получение книги — прямое скачивание PDF */}
            <div className="w-full lg:col-span-5 lg:ml-auto lg:max-w-[380px] lg:self-start">
              <h3 className="text-h4">{book.cta.label}</h3>
              <p className="mt-2 text-body-sm text-ink-secondary">{book.ctaLead}</p>

              <div className="mt-6">
                {/* download с кириллическим именем — файл сохранится как
                    «Книга изменений.pdf», а не как kniga-izmeneniy.pdf */}
                <Button href={book.file.href} variant="primary" download={book.file.downloadName}>
                  {book.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
