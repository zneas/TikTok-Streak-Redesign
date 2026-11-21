import { BottomNav } from '../components/BottomNav'
import { HomeIndicator } from '../components/HomeIndicator'
import { StatusBar } from '../components/StatusBar'

// Shop and Create aren't designed yet: an empty screen with the status bar and bottom nav.

export function PlaceholderScreen() {
  return (
    <div className="flex h-full flex-col bg-canvas">
      <StatusBar />
      <main className="min-h-0 flex-1" />
      <BottomNav />
      <HomeIndicator />
    </div>
  )
}
