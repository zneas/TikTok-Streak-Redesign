import { useId } from 'react'

// Figma "Streak pet": Biscuit, the shared pet, drawn as one scalable SVG (60.8 × 68.4, the Floating pet size).
// Resting = redesign (calm, eyes closed, "z z"). Body colors follow the streak mode tokens.
//
// Not in the token set yet (closest existing token used, flagged to the team):
//   back leaf (Figma green/500), ground shadow, and the "z" color (Figma sage/700).

export function StreakPet({ className = '' }: { className?: string }) {
  const bodyId = useId()
  return (
    <svg viewBox="0 -2 60.8 70.4" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={bodyId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--pet-body-top)' }} />
          <stop offset="1" style={{ stopColor: 'var(--pet-body-bottom)' }} />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="28.5" cy="65.36" rx="20.9" ry="3.04" className="fill-pet-status" opacity="0.13" />

      {/* Leaves */}
      <ellipse cx="26.95" cy="3.95" rx="3.04" ry="4.56" transform="rotate(-30 26.95 3.95)" className="fill-pet-progress" />
      <ellipse cx="29.23" cy="4.71" rx="3.04" ry="4.56" transform="rotate(30 29.23 4.71)" className="fill-pet-progress" />

      {/* Body */}
      <rect x="5.7" y="8.36" width="45.6" height="53.2" rx="21.28" fill={`url(#${bodyId})`} />

      {/* Closed eyes */}
      <g className="stroke-pet-face" strokeWidth="1.14" strokeLinecap="round" fill="none">
        <path transform="translate(16.91 31.35)" d="M0.57 0.57C0.57 2.47 2.09 3.99 3.99 3.99C5.89 3.99 7.41 2.47 7.41 0.57" />
        <path transform="translate(32.11 31.35)" d="M0.57 0.57C0.57 2.47 2.09 3.99 3.99 3.99C5.89 3.99 7.41 2.47 7.41 0.57" />
      </g>

      {/* Cheeks */}
      <ellipse cx="15.2" cy="39.71" rx="3.04" ry="1.71" className="fill-pet-cheek" opacity="0.55" />
      <ellipse cx="41.8" cy="39.71" rx="3.04" ry="1.71" className="fill-pet-cheek" opacity="0.55" />

      {/* Mouth */}
      <path
        transform="translate(25.745 41.325)"
        d="M0.475 0.475C0.475 1.729 1.501 2.755 2.755 2.755C4.009 2.755 5.035 1.729 5.035 0.475"
        className="stroke-pet-face"
        strokeWidth="0.95"
        strokeLinecap="round"
        fill="none"
      />

      {/* Sleeping z z */}
      <g className="fill-pet-status" fontFamily="var(--font-family)" fontWeight="700">
        <text x="48.64" y="16.4" fontSize="5.7">
          z
        </text>
        <text x="53.2" y="10.5" fontSize="7.6" opacity="0.7">
          z
        </text>
      </g>
    </svg>
  )
}
