import { Avatar } from '../components/Avatar'
import { BottomNav } from '../components/BottomNav'
import { Glyph } from '../components/Glyph'
import { HomeIndicator } from '../components/HomeIndicator'
import { IconBell, IconDropdown, IconGrid, IconLiked, IconViews } from '../components/icons'
import { stripes } from '../components/media'
import { StatusBar } from '../components/StatusBar'
import { me } from '../data/people'
import type { MediaPalette } from '../data/videos'

// A9 · Profile tab (13:1074). Shell only.

const stats = [
  { value: '128', label: 'Following' },
  { value: '240', label: 'Followers' },
  { value: '1.2K', label: 'Likes' },
]

const posts: { media: MediaPalette; views: string }[] = [
  { media: 'sand', views: '1.2K' },
  { media: 'mist', views: '860' },
  { media: 'rose', views: '3.4K' },
  { media: 'sand', views: '512' },
  { media: 'mist', views: '2.1K' },
  { media: 'rose', views: '98' },
]

export function ProfileScreen() {
  return (
    <div className="flex h-full flex-col bg-canvas">
      <StatusBar />
      <main className="min-h-0 flex-1 overflow-y-auto">
        <div className="relative h-52">
          <button type="button" aria-label="Add friends" className="absolute top-14 left-16 flex text-glyph">
            <Glyph name="person_add" className="text-icon-md" />
          </button>
          <h1 className="absolute inset-x-0 top-[15.5px] text-center text-body-lg-strong text-primary">You</h1>
          <div className="absolute top-14 right-16 flex items-center gap-16 text-glyph">
            <IconBell className="size-22" />
            <Glyph name="more_horiz" className="text-icon-md" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-md pt-12 pb-16">
          <Avatar initials={me.initials} tone={me.tone} size="profile" />
          <p className="text-body-lg text-primary">@you</p>
          <div className="flex items-center">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center">
                {i > 0 && <span className="h-18 w-px bg-stroke-divider" />}
                <span className="flex w-88 flex-col items-center">
                  <span className="text-body-lg-strong text-primary">{s.value}</span>
                  <span className="text-footnote text-tertiary">{s.label}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-6">
            <button type="button" className="flex h-44 w-164 items-center justify-center rounded-[2px] bg-btn-secondary text-body-strong text-btn-secondary-text">
              Edit profile
            </button>
            <button type="button" aria-label="Suggested accounts" className="flex size-44 items-center justify-center rounded-[2px] bg-btn-secondary text-glyph">
              <IconDropdown className="size-12" />
            </button>
          </div>
          <p className="text-body-sm text-primary">No bio yet</p>
        </div>

        <div className="relative h-44 border-y border-stroke-subtle">
          <IconGrid className="absolute top-9 left-79 size-22 text-glyph" />
          <span className="absolute bottom-0 left-66 h-2 w-48 bg-glyph" />
          <IconLiked className="absolute top-9 left-259 size-22 text-glyph-muted" />
        </div>

        <div className="grid grid-cols-3 gap-px">
          {posts.map((p, i) => (
            <div key={i} className="relative h-158" style={stripes(p.media, 12)}>
              <span className="absolute bottom-6 left-6 flex items-center gap-3 text-on-media">
                <IconViews className="size-14" />
                <span className="text-caption-medium">{p.views}</span>
              </span>
            </div>
          ))}
        </div>
      </main>
      <BottomNav />
      <HomeIndicator />
    </div>
  )
}
