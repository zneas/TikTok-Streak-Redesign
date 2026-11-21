// Figma "Streak label": flame + day count.
// Redesign mode (default): 8px muted flame, 12/500, same look for Done and Pending (no "at risk" state).
// Current mode (data-streak="current"): sizes and colors switch through the streak tokens.

interface StreakLabelProps {
  count: number
  /** Today's streak is complete. Only changes the look in Current mode. */
  done?: boolean
  onClick?: () => void
  className?: string
}

function Flame({ done }: { done: boolean }) {
  return (
    <svg
      viewBox="0 0 8 9.20711"
      aria-hidden="true"
      className={`h-auto w-flame shrink-0 overflow-visible stroke-glyph ${done ? 'fill-flame-done' : 'fill-flame-pending'}`}
    >
      <path d="M4 0.707107L6.34347 3.05057C7.63715 4.34425 7.63715 6.44251 6.34347 7.73685C5.04913 9.03053 2.95087 9.03053 1.65653 7.73685C0.362853 6.44251 0.362853 4.34425 1.65653 3.05057L4 0.707107Z" />
    </svg>
  )
}

export function StreakLabel({ count, done = true, onClick, className = '' }: StreakLabelProps) {
  const content = (
    <>
      <Flame done={done} />
      <span className={`text-streak leading-[1.3] font-streak ${done ? 'text-count-done' : 'text-count-pending'}`}>{count}</span>
    </>
  )
  const base = `inline-flex shrink-0 items-center gap-streak-gap ${className}`

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={base} aria-label={`${count} day streak. Show streak info`}>
        {content}
      </button>
    )
  }
  return (
    <span className={base} aria-label={`${count} day streak`}>
      {content}
    </span>
  )
}
