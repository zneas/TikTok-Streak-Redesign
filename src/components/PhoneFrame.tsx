import type { ReactNode } from 'react'

// Desktop: the app sits in a 360 × 784 phone frame (the Figma frame size), centered.
// Phones (under 500px wide): full screen.

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-dvh w-full items-center justify-center bg-sunken phone:min-h-full phone:p-3xl">
      <div className="relative isolate h-dvh w-full overflow-hidden bg-canvas phone:h-784 phone:w-360 phone:shrink-0 phone:rounded-xl phone:shadow-device">
        {children}
      </div>
    </div>
  )
}
