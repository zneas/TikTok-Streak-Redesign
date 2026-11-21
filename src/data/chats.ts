// The DM thread with Maya (A4), oldest first.

/** What you did with a video Maya sent, or what Maya did with one you sent */
export type Marker = 'none' | 'watched' | 'replied'

export type ChatItem =
  | { id: string; kind: 'video'; from: 'me' | 'friend'; videoId: string; marker: Marker }
  | { id: string; kind: 'text'; from: 'me' | 'friend'; text: string }
  | { id: string; kind: 'time'; label: string }

export const initialChats: Record<string, ChatItem[]> = {
  maya: [
    { id: 'm1', kind: 'video', from: 'friend', videoId: 'pasta', marker: 'replied' },
    { id: 'm2', kind: 'text', from: 'me', text: 'ok I need this recipe immediately' },
    { id: 'm3', kind: 'time', label: 'Yesterday 9:14 PM' },
    { id: 'm4', kind: 'video', from: 'me', videoId: 'trail', marker: 'replied' },
    { id: 'm5', kind: 'text', from: 'friend', text: 'the fog at 0:12!! where is this' },
    { id: 'm6', kind: 'time', label: 'Today 8:02 AM' },
    { id: 'm7', kind: 'video', from: 'friend', videoId: 'dog', marker: 'none' },
  ],
}
