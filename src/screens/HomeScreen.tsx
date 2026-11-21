import { BottomNav } from '../components/BottomNav'
import { Glyph } from '../components/Glyph'
import { HomeIndicator } from '../components/HomeIndicator'
import { IconLive } from '../components/icons'
import { StatusBar } from '../components/StatusBar'
import { VideoPost } from '../components/VideoPost'
import { homeVideoId, videos } from '../data/videos'

// A1 · Home (For You) (13:511). Feed shell: one video, the share sheet comes in a later slice.

function FeedTop() {
  return (
    <div className="absolute inset-x-0 top-0">
      <StatusBar theme="dark" />
      <div className="relative h-40">
        <button type="button" aria-label="LIVE" className="absolute top-12 left-16 flex text-glyph-on-media">
          <IconLive className="size-icon-md" />
        </button>
        <div className="absolute top-8 left-1/2 flex -translate-x-1/2 items-start gap-xl">
          <span className="flex items-start gap-2 pt-3">
            <span className="text-body-lg text-on-media opacity-70">Following</span>
            <span className="size-6 rounded-full bg-accent" aria-label="New" />
          </span>
          <span className="flex flex-col items-center gap-xs">
            <span className="text-body-lg-strong text-on-media">For You</span>
            <span className="h-2 w-24 rounded-[1px] bg-on-media" />
          </span>
        </div>
        <button type="button" aria-label="Search" className="absolute top-12 right-16 flex text-glyph-on-media">
          <Glyph name="search" className="text-icon-md" />
        </button>
      </div>
    </div>
  )
}

export function HomeScreen() {
  return (
    <div className="relative flex h-full flex-col bg-media">
      <div className="relative min-h-0 flex-1">
        <VideoPost video={videos[homeVideoId]} overlay={<FeedTop />} />
      </div>
      <BottomNav theme="dark" />
      <HomeIndicator theme="dark" />
    </div>
  )
}
