import { Glyph } from './Glyph'

// Figma "Activity marker": shown under shared videos in the redesign.
// Watched (eye) or Replied (speech bubble). The label is overridable ("Maya replied").

interface ActivityMarkerProps {
  type: 'watched' | 'replied'
  label?: string
}

export function ActivityMarker({ type, label }: ActivityMarkerProps) {
  const text = label ?? (type === 'watched' ? 'Watched' : 'Replied')
  return (
    <span className="inline-flex items-center gap-xs whitespace-nowrap text-tertiary">
      <Glyph name={type === 'watched' ? 'visibility' : 'chat_bubble'} className="text-icon-xs" />
      <span className="text-caption">{text}</span>
    </span>
  )
}
