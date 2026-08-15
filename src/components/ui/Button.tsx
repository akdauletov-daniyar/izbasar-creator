import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowRight, Play } from './Icons'

/** Варианты кнопок — design-system.md §7.2 */
export type ButtonVariant = 'primary' | 'inverted' | 'secondary' | 'ghost'

const variantClass: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  inverted: 'btn-inverted',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

type CommonProps = {
  variant?: ButtonVariant
  /** Хвостовая иконка в круге 32px, врезанная в кнопку */
  trailing?: 'arrow' | 'play' | 'none'
  className?: string
  children: ReactNode
}

type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type ActionProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

function Trailing({ kind }: { kind: 'arrow' | 'play' }) {
  return (
    <span className="btn-circle">{kind === 'play' ? <Play width={14} height={14} /> : <ArrowRight width={16} height={16} />}</span>
  )
}

export function Button(props: LinkProps | ActionProps) {
  const { variant = 'primary', trailing = 'arrow', className = '', children, ...rest } = props
  const cls = `btn ${variantClass[variant]} ${className}`.trim()

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
    return (
      <a href={href} className={cls} {...anchorRest}>
        <span>{children}</span>
        {trailing !== 'none' && <Trailing kind={trailing} />}
      </a>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type="button" className={cls} {...buttonRest}>
      <span>{children}</span>
      {trailing !== 'none' && <Trailing kind={trailing} />}
    </button>
  )
}
