import { Glyph } from './Glyph'

// Figma "Status bar". Light on white screens, Dark over video and the lock screen.

export function StatusBar({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const dark = theme === 'dark'
  return (
    <div className="flex h-status-bar shrink-0 items-center justify-between px-2xl">
      <span className={`text-body-sm-strong ${dark ? 'text-on-media' : 'text-primary'}`}>9:41</span>
      <span className={`flex items-center gap-xs text-icon-xs ${dark ? 'text-glyph-on-media' : 'text-glyph'}`}>
        <Glyph name="signal_cellular_alt" />
        <Glyph name="wifi" />
        <Glyph name="battery_full" />
      </span>
    </div>
  )
}
