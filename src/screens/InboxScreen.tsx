import { useNavigate } from 'react-router'
import { Avatar } from '../components/Avatar'
import { BottomNav } from '../components/BottomNav'
import { ChatRow } from '../components/ChatRow'
import { Glyph } from '../components/Glyph'
import { HomeIndicator } from '../components/HomeIndicator'
import { StatusBar } from '../components/StatusBar'
import { friends, getFriend, me, storyFriendIds } from '../data/people'

// A3 · Inbox (13:679)

function Header() {
  return (
    <div className="flex items-center justify-between px-lg py-md">
      <button type="button" aria-label="Add friends" className="flex text-glyph">
        <Glyph name="person_add" className="text-icon-md" />
      </button>
      <div className="flex items-center gap-sm">
        <h1 className="text-title text-primary">Inbox</h1>
        <span className="flex items-center rounded-xs bg-subtle px-xs py-2xs">
          <span className="size-8 rounded-full bg-glyph-disabled" />
          <Glyph name="arrow_drop_down" className="text-icon-xs text-glyph-muted" />
        </span>
      </div>
      <button type="button" aria-label="Search" className="flex text-glyph">
        <Glyph name="search" className="text-icon-md" />
      </button>
    </div>
  )
}

function Stories() {
  return (
    <div className="flex items-start gap-md overflow-x-auto px-16 pt-4 pb-12">
      <div className="flex shrink-0 flex-col items-center gap-xs">
        <span className="relative size-60">
          <Avatar initials={me.initials} tone={me.tone} size="story" />
          <span className="absolute top-40 left-40 flex size-22 items-center justify-center rounded-full border-2 border-stroke-media bg-accent text-glyph-on-accent">
            <Glyph name="add" className="text-icon-xs" />
          </span>
        </span>
        <span className="text-caption text-primary">Create</span>
      </div>
      {storyFriendIds.map((id) => {
        const friend = getFriend(id)
        if (!friend) return null
        return (
          <div key={id} className="flex shrink-0 flex-col items-center gap-xs">
            <span className="rounded-full bg-linear-135 from-story-start to-story-end p-3">
              <Avatar initials={friend.initials} tone={friend.tone} size="lg" ring />
            </span>
            <span className="text-caption text-primary">{friend.firstName}</span>
          </div>
        )
      })}
    </div>
  )
}

function SystemRow({ icon, circle, title, sub, strong, unread }: { icon: string; circle: string; title: string; sub: string; strong?: boolean; unread?: boolean }) {
  return (
    <div className="flex w-full items-center gap-md px-lg py-sm">
      <span className={`flex size-avatar-lg shrink-0 items-center justify-center rounded-full text-glyph-on-accent ${circle}`}>
        <Glyph name={icon} className="text-icon-md" />
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className={`${strong ? 'text-body-lg-strong' : 'text-body-lg'} text-primary`}>{title}</span>
        <span className={`truncate text-body-sm ${strong ? 'text-primary' : 'text-tertiary'}`}>{sub}</span>
      </span>
      {unread && <span className="size-8 shrink-0 rounded-full bg-accent" aria-label="Unread" />}
    </div>
  )
}

export function InboxScreen() {
  const navigate = useNavigate()
  return (
    <div className="flex h-full flex-col bg-canvas">
      <StatusBar />
      <main className="min-h-0 flex-1 overflow-y-auto">
        <Header />
        <Stories />
        <SystemRow icon="bolt" circle="bg-accent" title="Activity" sub="Jun liked your comment" />
        {friends.map((friend) => (
          <ChatRow key={friend.id} friend={friend} onClick={friend.id === 'maya' ? () => navigate(`/chat/${friend.id}`) : undefined} />
        ))}
        <SystemRow icon="inbox" circle="bg-inverse" title="System notifications" sub="Your weekly recap is ready · 3d" strong unread />
      </main>
      <BottomNav />
      <HomeIndicator />
    </div>
  )
}
