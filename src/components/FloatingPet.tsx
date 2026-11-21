import { StreakPet } from './StreakPet'

// Figma "Floating pet": the Streak Pet floating in the DM, upper right just below the call and more buttons.
// Tap it to open the Streak Pet page.

interface FloatingPetProps {
  petName: string
  onClick?: () => void
  className?: string
}

export function FloatingPet({ petName, onClick, className = '' }: FloatingPetProps) {
  return (
    <button type="button" onClick={onClick} aria-label={`Open ${petName}, your Streak Pet`} className={`h-72 w-64 ${className}`}>
      <StreakPet className="mx-auto h-auto w-61" />
    </button>
  )
}
