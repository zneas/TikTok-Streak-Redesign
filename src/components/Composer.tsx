import { Glyph } from './Glyph'
import { IconEmoji } from './icons'

// Figma "Composer": camera on the left; inside the field: attach image, emoji, then the mic.
// Sending isn't part of the MVP, so the field is display-only for now.

export function Composer() {
  return (
    <div className="flex shrink-0 items-center gap-md bg-canvas px-12 pt-8 pb-24">
      <button type="button" aria-label="Camera" className="flex text-glyph">
        <Glyph name="photo_camera" className="text-icon-lg" />
      </button>
      <div className="flex h-input min-w-0 flex-1 items-center gap-sm rounded-full bg-subtle px-md text-glyph">
        <input
          type="text"
          placeholder="Message..."
          aria-label="Message"
          className="min-w-0 flex-1 bg-transparent text-body text-primary outline-none placeholder:text-tertiary"
        />
        <button type="button" aria-label="Attach image" className="flex">
          <Glyph name="image" className="text-icon-md" />
        </button>
        <button type="button" aria-label="Emoji" className="flex">
          <IconEmoji className="size-icon-md" />
        </button>
        <button type="button" aria-label="Voice message" className="flex">
          <Glyph name="mic" className="text-icon-md" />
        </button>
      </div>
    </div>
  )
}
