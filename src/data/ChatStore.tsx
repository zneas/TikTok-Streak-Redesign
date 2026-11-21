import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { ChatStoreContext } from './chatStoreContext'
import { initialChats } from './chats'

// In-memory only: reloading the page resets the flow, so every tester starts fresh.

export function ChatStoreProvider({ children }: { children: ReactNode }) {
  const [chats, setChats] = useState(initialChats)

  const getThread = useCallback((friendId: string) => chats[friendId] ?? [], [chats])

  const markWatched = useCallback((friendId: string, itemId: string) => {
    setChats((prev) => {
      const thread = prev[friendId]
      if (!thread) return prev
      return {
        ...prev,
        [friendId]: thread.map((item) =>
          item.id === itemId && item.kind === 'video' && item.from === 'friend' && item.marker === 'none'
            ? { ...item, marker: 'watched' }
            : item,
        ),
      }
    })
  }, [])

  const value = useMemo(() => ({ getThread, markWatched }), [getThread, markWatched])
  return <ChatStoreContext.Provider value={value}>{children}</ChatStoreContext.Provider>
}
