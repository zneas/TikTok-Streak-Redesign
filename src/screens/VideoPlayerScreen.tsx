import { Navigate, useNavigate, useParams } from 'react-router'
import { Glyph } from '../components/Glyph'
import { HomeIndicator } from '../components/HomeIndicator'
import { StatusBar } from '../components/StatusBar'
import { VideoPost } from '../components/VideoPost'
import { useChatStore } from '../data/chatStoreContext'
import { videos } from '../data/videos'

// Full-screen player for a video shared in a DM (like TikTok: tap the card, watch, go back to the chat).

export function VideoPlayerScreen() {
  const { friendId = '', itemId } = useParams()
  const navigate = useNavigate()
  const { getThread } = useChatStore()
  const item = getThread(friendId).find((i) => i.id === itemId)

  if (!item || item.kind !== 'video') return <Navigate to={`/chat/${friendId}`} replace />
  const video = videos[item.videoId]

  return (
    <div className="relative h-full">
      <VideoPost
        video={video}
        overlay={
          <div className="absolute inset-x-0 top-0">
            <StatusBar theme="dark" />
            <div className="flex h-header items-center pl-4">
              <button type="button" onClick={() => navigate(-1)} aria-label="Back to chat" className="flex size-tap items-center justify-center text-glyph-on-media">
                <Glyph name="arrow_back_ios_new" className="text-icon-md" />
              </button>
            </div>
          </div>
        }
      />
      <HomeIndicator theme="dark" />
    </div>
  )
}
