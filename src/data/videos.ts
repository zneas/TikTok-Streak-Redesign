// Made-up videos. `media` picks the striped placeholder palette from the media tokens.

export type MediaPalette = 'sand' | 'mist' | 'rose' | 'night'

export interface Video {
  id: string
  /** Short label shown on the chat card and the full-screen placeholder */
  title: string
  /** Caption line on the chat card */
  cardCaption: string
  /** Full caption on the full-screen post */
  caption: string
  handle: string
  sound: string
  media: MediaPalette
  /** Creator avatar on the action rail */
  creator: { initials: string; tone: 'coral' | 'sky' | 'mint' | 'lilac' | 'olive' | 'peach' }
  stats?: { likes: string; comments: string; saves: string }
}

export const videos: Record<string, Video> = {
  pasta: {
    id: 'pasta',
    title: 'pasta clip',
    cardCaption: 'Tiny kitchen, big pasta',
    caption: 'Tiny kitchen, big pasta',
    handle: '@noodlehouse',
    sound: 'original sound · noodlehouse',
    media: 'sand',
    creator: { initials: 'NH', tone: 'olive' },
  },
  trail: {
    id: 'trail',
    title: 'sunrise trail run',
    cardCaption: 'Fog rolling in at 6am',
    caption: 'Fog rolling in at 6am',
    handle: '@kestrel.runs',
    sound: 'original sound · kestrel.runs',
    media: 'mist',
    creator: { initials: 'KR', tone: 'sky' },
  },
  dog: {
    id: 'dog',
    title: 'dog vs. sprinkler',
    cardCaption: 'He has no regrets',
    caption: 'He has no regrets. #dogsoftiktok #sprinkler #summer',
    handle: '@pawsandsplash',
    sound: 'original sound · pawsandsplash',
    media: 'rose',
    creator: { initials: 'PS', tone: 'lilac' },
    stats: { likes: '12.4K', comments: '318', saves: '1,024' },
  },
}

/** The video at the top of the Home feed (A1) */
export const homeVideoId = 'dog'
