import type { Friend } from '../data/people'
import { Avatar } from './Avatar'
import { Glyph } from './Glyph'
import { StreakLabel } from './StreakLabel'

// Figma "Chat header": back, avatar + name with the streak label inline to the right of the name, call, more.
// Tap the streak label for the streak info sheet. The pet is reached from the Floating pet, not the header.

interface ChatHeaderProps {
  friend: Friend
  showStreak?: boolean
  onBack: () => void
  onStreakClick?: () => void
}

export function ChatHeader({ friend, showStreak = true, onBack, onStreakClick }: ChatHeaderProps) {
  return (
    <div className="flex h-header shrink-0 items-center gap-xs bg-canvas pr-8 pl-4">
      <button type="button" onClick={onBack} aria-label="Back" className="flex size-tap items-center justify-center text-glyph">
        <Glyph name="arrow_back_ios_new" className="text-icon-sm" />
      </button>
      <div className="flex min-w-0 flex-1 items-center gap-sm">
        <Avatar initials={friend.initials} tone={friend.tone} size="sm" />
        <div className="flex min-w-0 items-center gap-sm">
          <span className="truncate text-body-lg-strong text-primary">{friend.name}</span>
          {showStreak && friend.streak !== undefined && <StreakLabel count={friend.streak} onClick={onStreakClick} />}
        </div>
      </div>
      <button type="button" aria-label="Call" className="flex h-44 w-36 items-center justify-center text-glyph">
        <Glyph name="call" className="text-icon-md" />
      </button>
      <button type="button" aria-label="More" className="flex h-44 w-36 items-center justify-center text-glyph">
        <Glyph name="more_horiz" className="text-icon-md" />
      </button>
    </div>
  )
}
