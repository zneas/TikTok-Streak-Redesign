import type { Tone } from '../data/people'

// Figma "Avatar": initials on a tone color. Size XS 32 · SM 36 · MD 44 · LG 52 · XL 64,
// plus the two one-off sizes used in the screens (story 60, profile 96).

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'story' | 'profile'

const toneClass: Record<Tone, string> = {
  coral: 'bg-coral text-coral-ink',
  sky: 'bg-sky text-sky-ink',
  mint: 'bg-mint text-mint-ink',
  lilac: 'bg-lilac text-lilac-ink',
  olive: 'bg-olive text-olive-ink',
  peach: 'bg-peach text-peach-ink',
}

const sizeClass: Record<AvatarSize, string> = {
  xs: 'size-avatar-xs text-micro',
  sm: 'size-avatar-sm text-footnote-medium',
  md: 'size-avatar-md text-body-strong',
  lg: 'size-avatar-lg text-body-lg-strong',
  xl: 'size-avatar-xl text-headline',
  story: 'size-60 text-headline',
  profile: 'size-96 text-headline',
}

interface AvatarProps {
  initials: string
  tone: Tone
  size?: AvatarSize
  /** White ring, used on stories and over video */
  ring?: boolean
  className?: string
}

export function Avatar({ initials, tone, size = 'md', ring = false, className = '' }: AvatarProps) {
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full whitespace-nowrap ${toneClass[tone]} ${sizeClass[size]} ${ring ? 'border-2 border-stroke-media' : ''} ${className}`}
    >
      {initials}
    </span>
  )
}
