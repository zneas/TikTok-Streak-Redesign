import type { CSSProperties } from 'react'
import type { MediaPalette } from '../data/videos'

// Striped video placeholder, built from the media/* tokens (no raw colors).
// `band` is the stripe width in px, matched to the Figma frames.

export function stripes(palette: MediaPalette, band: number, angle = 127): CSSProperties {
  const a = `var(--color-media-${palette}-a)`
  const b = `var(--color-media-${palette}-b)`
  return {
    backgroundImage: `repeating-linear-gradient(${angle}deg, ${a} 0 ${band}px, ${b} ${band}px ${band * 2}px)`,
  }
}

/** Text color for labels printed on a light placeholder */
export const mediaInk: Record<MediaPalette, string> = {
  sand: 'text-sand-ink',
  mist: 'text-mist-ink',
  rose: 'text-rose-ink',
  night: 'text-on-media',
}
