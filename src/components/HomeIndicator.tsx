// The phone's home indicator bar. Only drawn inside the desktop phone frame;
// on a real phone the OS draws its own.

export function HomeIndicator({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-6 left-1/2 z-30 hidden h-4 w-110 -translate-x-1/2 rounded-[2px] phone:block ${
        theme === 'dark' ? 'bg-on-media' : 'bg-primary'
      }`}
    />
  )
}
