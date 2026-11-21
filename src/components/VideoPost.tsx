import type { ReactNode } from 'react'
import discUrl from '../assets/music-disc.png'
import pictureUrl from '../assets/music-picture.png'
import type { Video } from '../data/videos'
import { Avatar } from './Avatar'
import { Glyph } from './Glyph'
import { IconComment, IconFollowBadge, IconLike, IconMusicNote, IconShare, IconTone } from './icons'
import { stripes } from './media'

// A full-screen video post (Home feed A1, and the player you get when you tap a shared video).
// `overlay` is the screen-specific top chrome (feed tabs on Home, back button in the player).

interface VideoPostProps {
  video: Video
  overlay?: ReactNode
  onShare?: () => void
}

function RailItem({ icon, label }: { icon: ReactNode; label?: string }) {
  return (
    <span className="flex flex-col items-center gap-2xs text-on-media">
      {icon}
      {label && <span className="text-caption-medium">{label}</span>}
    </span>
  )
}

export function VideoPost({ video, overlay, onShare }: VideoPostProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-media">
      {/* Video placeholder */}
      <div className="absolute inset-0" style={stripes('night', 16, 116.6)} />
      <div className="absolute inset-x-0 bottom-0 h-320 bg-linear-to-b from-transparent to-media-scrim" />
      <p className="absolute inset-x-0 top-[41.7%] text-center text-micro text-on-media opacity-50">
        video placeholder · {video.title}
      </p>

      {overlay}

      {/* Action rail */}
      <div className="absolute right-16 bottom-96 flex flex-col items-center gap-lg">
        <span className="relative h-58 w-48">
          <Avatar initials={video.creator.initials} tone={video.creator.tone} size="md" ring className="absolute top-0 left-2" />
          <IconFollowBadge className="absolute top-34 left-13 size-22" />
        </span>
        <RailItem icon={<IconLike className="size-icon-xl" />} label={video.stats?.likes} />
        <RailItem icon={<IconComment className="size-icon-xl" />} label={video.stats?.comments} />
        <RailItem icon={<Glyph name="bookmark" className="text-icon-xl" />} label={video.stats?.saves} />
        <button type="button" onClick={onShare} className="flex">
          <RailItem icon={<IconShare className="size-icon-xl" />} label="Share" />
        </button>
      </div>

      {/* Caption */}
      <div className="absolute bottom-12 left-16 flex w-260 flex-col gap-xs text-on-media">
        <p className="text-body-strong">{video.handle}</p>
        <p className="text-body-sm">{video.caption}</p>
        <p className="flex items-center gap-xs text-caption">
          <IconMusicNote className="size-14 shrink-0" />
          <span className="truncate">{video.sound}</span>
        </p>
      </div>

      {/* Music disc */}
      <div className="absolute right-12 bottom-12 size-49 text-on-media" aria-hidden="true">
        <img src={discUrl} alt="" className="absolute inset-0 size-49" />
        <img src={pictureUrl} alt="" className="absolute top-10 left-10 size-29 rounded-full" />
        <IconTone double className="absolute top-3 -left-19 w-12 rotate-[37deg]" />
        <IconTone className="absolute top-37 -left-8 w-5 rotate-[17deg]" />
      </div>
    </div>
  )
}
