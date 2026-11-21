// A Material Symbols Rounded glyph (the icon font the Figma screens use).
// Size it with text-icon-* and color it with a token class, e.g. <Glyph name="search" className="text-icon-md text-glyph" />.

interface GlyphProps {
  name: string
  className?: string
  filled?: boolean
}

export function Glyph({ name, className = '', filled = false }: GlyphProps) {
  return (
    <span aria-hidden="true" className={`glyph ${filled ? 'glyph-filled' : ''} ${className}`}>
      {name}
    </span>
  )
}
