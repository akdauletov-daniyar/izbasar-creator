import type { SVGProps } from 'react'

/**
 * Иконки — 24×24, обводка 1.75, скруглённые концы (design-system.md §6).
 */
type IconProps = SVGProps<SVGSVGElement>

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
}

export function ArrowRight({ width = 18, height = 18, ...props }: IconProps) {
  return (
    <svg {...base} width={width} height={height} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function Play({ width = 18, height = 18, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      width={width}
      height={height}
      {...props}
    >
      <path d="M8.6 5.4a1 1 0 0 1 1.53-.85l7.2 4.6a1 1 0 0 1 0 1.7l-7.2 4.6a1 1 0 0 1-1.53-.85V5.4Z" />
    </svg>
  )
}

export function Check({ width = 14, height = 14, ...props }: IconProps) {
  return (
    <svg {...base} strokeWidth={2.25} width={width} height={height} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  )
}

export function History({ width = 22, height = 22, ...props }: IconProps) {
  return (
    <svg {...base} width={width} height={height} {...props}>
      <path d="M3 12a9 9 0 1 0 2.6-6.35" />
      <path d="M3 4v4h4M12 7.5V12l3 2" />
    </svg>
  )
}

export function Split({ width = 22, height = 22, ...props }: IconProps) {
  return (
    <svg {...base} width={width} height={height} {...props}>
      <path d="M12 3v4M12 17v4" />
      <path d="M5.5 10.5 3 13l2.5 2.5M18.5 10.5 21 13l-2.5 2.5" />
      <path d="M3 13h7M14 13h7" />
    </svg>
  )
}

export function Shield({ width = 22, height = 22, ...props }: IconProps) {
  return (
    <svg {...base} width={width} height={height} {...props}>
      <path d="M12 3 5 6v5.5c0 4.2 2.9 7.6 7 9.5 4.1-1.9 7-5.3 7-9.5V6l-7-3Z" />
      <path d="M12 9v3.5" />
      <path d="M12 15.5h.01" />
    </svg>
  )
}

export function Menu({ width = 22, height = 22, ...props }: IconProps) {
  return (
    <svg {...base} width={width} height={height} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function Close({ width = 22, height = 22, ...props }: IconProps) {
  return (
    <svg {...base} width={width} height={height} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function Telegram({ width = 20, height = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" width={width} height={height} {...props}>
      <path d="M21.7 4.3 2.9 11.6c-.9.4-.9 1.6 0 1.9l4.6 1.5 1.8 5.4c.3.8 1.3 1 1.9.4l2.5-2.4 4.6 3.4c.7.5 1.7.1 1.9-.7l3.3-15.4c.2-.9-.7-1.7-1.8-1.4ZM9.5 14.7l-.3 3.6-1.3-4 9-6.3-7.4 6.7Z" />
    </svg>
  )
}

export function WhatsApp({ width = 20, height = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" width={width} height={height} {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.33A10 10 0 1 0 12 2Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.03.79.81-2.95-.2-.31A8.1 8.1 0 1 1 12 20.1Zm4.45-6.06c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12s-.63.79-.77.95c-.14.16-.28.18-.52.06a6.63 6.63 0 0 1-3.32-2.9c-.25-.43.25-.4.71-1.33.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.47-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3c-.22.24-.85.83-.85 2.02s.87 2.34 1 2.5c.12.16 1.71 2.61 4.15 3.66 1.54.67 2.15.72 2.92.61.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

export function Instagram({ width = 20, height = 20, ...props }: IconProps) {
  return (
    <svg {...base} width={width} height={height} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.75" />
      <path d="M17.2 6.8h.01" />
    </svg>
  )
}

export function Mail({ width = 20, height = 20, ...props }: IconProps) {
  return (
    <svg {...base} width={width} height={height} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7.5 7.1 5a1.6 1.6 0 0 0 1.8 0l7.1-5" />
    </svg>
  )
}

export const featureIcons = {
  history: History,
  split: Split,
  shield: Shield,
} as const
