import type { ReactNode } from 'react'

type SectionHeaderProps = {
  eyebrow: string
  titleLead: string
  titleAccent?: string
  lead?: string
  action?: ReactNode
  align?: 'start' | 'center'
  className?: string
  /** Уровень заголовка — h1 только в hero */
  as?: 'h2' | 'h3'
}

/** Шапка секции — design-system.md §7.8 */
export function SectionHeader({
  eyebrow,
  titleLead,
  titleAccent,
  lead,
  action,
  align = 'start',
  className = '',
  as: Heading = 'h2',
}: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <div
      className={`flex flex-col gap-5 ${centered ? 'items-center text-center' : ''} ${
        action ? 'lg:flex-row lg:items-end lg:justify-between lg:gap-16' : ''
      } ${className}`.trim()}
    >
      <div className={`flex flex-col ${centered ? 'items-center' : 'items-start'}`}>
        <span className={`eyebrow ${centered ? 'eyebrow-center' : ''}`}>{eyebrow}</span>

        <Heading className="mt-4 max-w-[16ch] text-h2">
          {titleLead}
          {titleAccent ? (
            <>
              {' '}
              <span className="accent">{titleAccent}</span>
            </>
          ) : null}
        </Heading>

        {lead ? (
          <p className={`mt-5 max-w-[36rem] text-body-lg text-ink-secondary ${centered ? 'mx-auto' : ''}`}>
            {lead}
          </p>
        ) : null}
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
