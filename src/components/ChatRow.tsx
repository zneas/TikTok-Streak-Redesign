import type { Friend } from '../data/people'
import { Avatar } from './Avatar'
import { Glyph } from './Glyph'
import { StreakLabel } from './StreakLabel'

// Figma "Chat row": Inbox row. showStreak off = no streak, or hidden by the user.

interface ChatRowProps {
  friend: Friend
  showStreak?: boolean
  onClick?: () => void
}

export function ChatRow({ friend, showStreak = true, onClick }: ChatRowProps) {
  return (
    <div className="flex w-full items-center gap-md bg-canvas px-lg py-sm active:bg-pressed">
      <button type="button" onClick={onClick} className="flex min-w-0 flex-1 items-center gap-md text-left">
        <Avatar initials={friend.initials} tone={friend.tone} size="lg" />
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="flex items-center gap-sm">
            <span className="text-body-lg whitespace-nowrap text-primary">{friend.name}</span>
            {showStreak && friend.streak !== undefined && <StreakLabel count={friend.streak} />}
          </span>
          <span className="truncate text-body-sm text-tertiary">{friend.preview}</span>
        </span>
      </button>
      <button type="button" aria-label={`Camera, send to ${friend.firstName}`} className="flex text-glyph-subtle">
        <Glyph name="photo_camera" className="text-icon-md" />
      </button>
    </div>
  )
}
