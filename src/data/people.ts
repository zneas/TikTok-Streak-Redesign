// All people are made up. Avatar tones follow the Figma Avatar component:
// Maya=Coral, Jun=Sky, Theo=Mint, Priya=Lilac, Rosa=Olive, You=Peach.

export type Tone = 'coral' | 'sky' | 'mint' | 'lilac' | 'olive' | 'peach'

export interface Person {
  id: string
  name: string
  firstName: string
  initials: string
  tone: Tone
}

export interface Friend extends Person {
  /** Streak days with you. Undefined = no streak. */
  streak?: number
  /** Inbox preview line */
  preview: string
}

export const me: Person = {
  id: 'me',
  name: 'You',
  firstName: 'You',
  initials: 'You',
  tone: 'peach',
}

export const friends: Friend[] = [
  { id: 'maya', name: 'Maya Okafor', firstName: 'Maya', initials: 'MO', tone: 'coral', streak: 48, preview: 'Shared a video · 2h' },
  { id: 'jun', name: 'Jun Park', firstName: 'Jun', initials: 'JP', tone: 'sky', streak: 12, preview: 'haha exactly · 5h' },
  { id: 'theo', name: 'Theo Lin', firstName: 'Theo', initials: 'TL', tone: 'mint', preview: 'You shared a video · Mon' },
  { id: 'priya', name: 'Priya Shah', firstName: 'Priya', initials: 'PS', tone: 'lilac', streak: 3, preview: 'Sent · 1d' },
  { id: 'rosa', name: 'Rosa Mendes', firstName: 'Rosa', initials: 'RM', tone: 'olive', preview: 'Sent a sticker · 2d' },
]

/** Friends shown in the Inbox stories row, in order */
export const storyFriendIds = ['jun', 'maya', 'theo']

export function getFriend(id: string | undefined): Friend | undefined {
  return friends.find((f) => f.id === id)
}
