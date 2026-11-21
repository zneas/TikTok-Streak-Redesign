import { useLayoutEffect, useRef } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import { ChatHeader } from '../components/ChatHeader'
import { Composer } from '../components/Composer'
import { FloatingPet } from '../components/FloatingPet'
import { HomeIndicator } from '../components/HomeIndicator'
import { MessageBubble } from '../components/MessageBubble'
import { StatusBar } from '../components/StatusBar'
import { VideoMessage } from '../components/VideoMessage'
import { useChatStore } from '../data/chatStoreContext'
import { getFriend, me } from '../data/people'
import { videos } from '../data/videos'

// A4 · Chat with Maya (14:834)

// Remember where each chat was scrolled and which video was opened last, so coming back from a video
// lands in the same place with that video (and its new Watched marker) fully in view.
const scrollPositions = new Map<string, number>()
const lastOpened = new Map<string, string>()

export function ChatScreen() {
  const { friendId } = useParams()
  const navigate = useNavigate()
  const { getThread, markWatched } = useChatStore()
  const scrollRef = useRef<HTMLDivElement>(null)
  const friend = getFriend(friendId)

  useLayoutEffect(() => {
    const el = scrollRef.current
    if (!el || !friendId) return
    el.scrollTop = scrollPositions.get(friendId) ?? 0
    const openedId = lastOpened.get(friendId)
    if (openedId) {
      el.querySelector(`[data-item-id="${openedId}"]`)?.scrollIntoView({ block: 'nearest' })
      lastOpened.delete(friendId)
    }
    return () => {
      scrollPositions.set(friendId, el.scrollTop)
    }
  }, [friendId])

  if (!friend) return <Navigate to="/inbox" replace />
  const thread = getThread(friend.id)

  return (
    <div className="relative flex h-full flex-col bg-canvas">
      <div className="z-10 shrink-0 bg-canvas">
        <StatusBar />
        <ChatHeader friend={friend} onBack={() => navigate('/inbox')} />
      </div>

      <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto">
        <div className="flex flex-col items-center gap-md px-lg py-md">
          {thread.map((item) => {
            if (item.kind === 'time') {
              return (
                <p key={item.id} className="w-full text-center text-caption text-disabled">
                  {item.label}
                </p>
              )
            }
            const author = item.from === 'me' ? me : friend
            if (item.kind === 'text') {
              return <MessageBubble key={item.id} direction={item.from === 'me' ? 'outgoing' : 'incoming'} author={author} message={item.text} />
            }
            const video = videos[item.videoId]
            return (
              <div key={item.id} data-item-id={item.id} className="w-full scroll-mb-md">
                <VideoMessage
                  side={item.from === 'me' ? 'outgoing' : 'incoming'}
                  author={author}
                  video={video}
                  marker={item.marker}
                  friendName={friend.firstName}
                  onOpen={() => {
                    if (item.from === 'friend') markWatched(friend.id, item.id)
                    lastOpened.set(friend.id, item.id)
                    navigate(`/chat/${friend.id}/video/${item.id}`)
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>

      <Composer />

      {/* Upper right, just below the call and more buttons */}
      <FloatingPet petName="Biscuit" className="absolute top-92 right-12 z-20" />
      <HomeIndicator />
    </div>
  )
}
