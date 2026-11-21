import type { Marker } from '../data/chats'
import type { Person } from '../data/people'
import type { Video } from '../data/videos'
import { ActivityMarker } from './ActivityMarker'
import { Avatar } from './Avatar'
import { Glyph } from './Glyph'
import { IconPlay } from './icons'
import { mediaInk, stripes } from './media'

// Figma "Video message": a shared video in a DM.
// Marker = Watched / Replied (redesign). Tapping a video opens it full screen;
// opening an incoming video with no marker marks it Watched.

interface VideoMessageProps {
  side: 'incoming' | 'outgoing'
  author: Person
  video: Video
  marker: Marker
  /** First name of the friend, for "Maya replied" on videos you sent */
  friendName: string
  onOpen: () => void
}

export function VideoMessage({ side, author, video, marker, friendName, onOpen }: VideoMessageProps) {
  const incoming = side === 'incoming'

  const card = (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Play shared video: ${video.title}`}
      className="relative h-200 w-152 shrink-0 overflow-hidden rounded-lg text-left"
      style={stripes(video.media, 10)}
    >
      <span className={`absolute top-10 left-10 flex flex-col text-micro ${mediaInk[video.media]}`}>
        <span>shared video</span>
        <span>{video.title}</span>
      </span>
      <IconPlay className="absolute top-88 left-44 h-24 w-20 text-on-media" />
      <span className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-linear-to-b from-transparent to-media-scrim px-10 pt-24 pb-10 text-on-media">
        <span className="text-caption-medium">{video.cardCaption}</span>
        <span className="text-micro">{video.handle}</span>
      </span>
    </button>
  )

  const share = (
    <button type="button" aria-label="Share video" className="flex size-36 shrink-0 items-center justify-center rounded-full bg-subtle text-glyph-muted">
      <Glyph name="shortcut" className="text-icon-sm" />
    </button>
  )

  const avatar = <Avatar initials={author.initials} tone={author.tone} size="xs" />

  let markerEl = null
  if (marker !== 'none') {
    const label = incoming ? undefined : marker === 'replied' ? `${friendName} replied` : `${friendName} watched`
    markerEl = <ActivityMarker type={marker} label={label} />
  }

  return (
    <div className={`flex w-full flex-col gap-xs ${incoming ? 'items-start' : 'items-end'}`}>
      <div className="flex items-start gap-sm">
        {incoming ? (
          <>
            {avatar}
            {card}
            {share}
          </>
        ) : (
          <>
            {share}
            {card}
            {avatar}
          </>
        )}
      </div>
      {markerEl && <div className={`flex ${incoming ? 'pl-40' : ''}`}>{markerEl}</div>}
    </div>
  )
}
