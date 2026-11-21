import type { Person } from '../data/people'
import { Avatar } from './Avatar'

// Figma "Message bubble": avatar beside every message.
// Yours: light grey on the right. Theirs: white with a hairline border on the left.

interface MessageBubbleProps {
  direction: 'outgoing' | 'incoming'
  author: Person
  message: string
}

export function MessageBubble({ direction, author, message }: MessageBubbleProps) {
  const outgoing = direction === 'outgoing'
  const avatar = <Avatar initials={author.initials} tone={author.tone} size="xs" />
  return (
    <div className={`flex w-full items-start gap-sm ${outgoing ? 'justify-end' : ''}`}>
      {!outgoing && avatar}
      <div
        className={`max-w-288 rounded-sm px-md py-sm text-body text-primary ${
          outgoing ? 'bg-bubble-out' : 'border border-stroke-bubble bg-bubble-in'
        }`}
      >
        {message}
      </div>
      {outgoing && avatar}
    </div>
  )
}
