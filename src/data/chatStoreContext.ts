import { createContext, useContext } from 'react'
import type { ChatItem } from './chats'

export interface ChatStore {
  getThread: (friendId: string) => ChatItem[]
  /** Marks an incoming video as Watched (only if you haven't watched or replied yet) */
  markWatched: (friendId: string, itemId: string) => void
}

export const ChatStoreContext = createContext<ChatStore | null>(null)

export function useChatStore(): ChatStore {
  const store = useContext(ChatStoreContext)
  if (!store) throw new Error('useChatStore must be used inside ChatStoreProvider')
  return store
}
