import type { ComponentType, SVGProps } from 'react'
import { NavLink } from 'react-router'
import { Glyph } from './Glyph'
import { IconHome, IconHomeFilled, IconInbox, IconInboxFilled, IconProfile, IconProfileFilled } from './icons'

// Figma "Bottom nav": Home, Shop, Create, Inbox, Profile (Friends lives inside Inbox).
// Light on white screens, Dark under the Home video feed.

type Theme = 'light' | 'dark'
type Icon = ComponentType<SVGProps<SVGSVGElement>>

interface Tab {
  to: string
  label: string
  icon: Icon | string
  activeIcon?: Icon
  badge?: string
}

const tabs: Tab[] = [
  { to: '/', label: 'Home', icon: IconHome, activeIcon: IconHomeFilled },
  { to: '/shop', label: 'Shop', icon: 'shopping_bag' },
  { to: '/inbox', label: 'Inbox', icon: IconInbox, activeIcon: IconInboxFilled, badge: '3' },
  { to: '/profile', label: 'Profile', icon: IconProfile, activeIcon: IconProfileFilled },
]

function TabLink({ tab, theme }: { tab: Tab; theme: Theme }) {
  const dark = theme === 'dark'
  return (
    <NavLink to={tab.to} end className="relative flex h-44 w-56 shrink-0 flex-col items-center justify-center gap-2xs">
      {({ isActive }) => {
        const iconColor = isActive ? (dark ? 'text-glyph-on-media' : 'text-glyph') : dark ? 'text-glyph-disabled' : 'text-glyph-muted'
        const labelClass = isActive
          ? `text-caption-medium ${dark ? 'text-on-media' : 'text-primary'}`
          : `text-micro ${dark ? 'text-disabled' : 'text-tertiary'}`
        const IconComp = isActive && tab.activeIcon ? tab.activeIcon : tab.icon
        return (
          <>
            <span className={`relative flex ${iconColor}`}>
              {typeof IconComp === 'string' ? (
                <Glyph name={IconComp} filled={isActive} className="text-icon-md" />
              ) : (
                <IconComp className="size-icon-md" />
              )}
              {tab.badge && (
                <span className="absolute -top-4 left-16 rounded-full bg-accent px-5 text-micro text-on-accent">{tab.badge}</span>
              )}
            </span>
            <span className={labelClass}>{tab.label}</span>
          </>
        )
      }}
    </NavLink>
  )
}

/** The Create button: a plate over cyan and red offsets */
function CreateButton({ theme }: { theme: Theme }) {
  const dark = theme === 'dark'
  return (
    <NavLink to="/create" aria-label="Create" className="relative h-28 w-44 shrink-0">
      <span className="absolute top-0 left-0 h-28 w-38 rounded-sm bg-story-start" />
      <span className="absolute top-0 left-6 h-28 w-38 rounded-sm bg-story-end" />
      <span className={`absolute top-0 left-3 flex h-28 w-38 items-center justify-center rounded-sm ${dark ? 'bg-canvas text-glyph' : 'bg-inverse text-glyph-on-accent'}`}>
        <svg viewBox="26 18 16 16" className="size-icon-xs" aria-hidden="true">
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.1297 25.1297V18.4351C33.1297 18.1948 33.3246 18 33.5649 18L34.4352 18C34.6755 18 34.8703 18.1948 34.8703 18.4352L34.8703 25.1297H41.5649C41.8052 25.1297 42 25.3245 42 25.5649L42 26.4351C42 26.6755 41.8052 26.8703 41.5649 26.8703L34.8703 26.8703L34.8703 33.5649C34.8703 33.8052 34.6755 34 34.4351 34H33.5649C33.3246 34 33.1297 33.8052 33.1297 33.5649L33.1297 26.8703L26.4352 26.8703C26.1948 26.8703 26 26.6755 26 26.4352L26 25.5649C26 25.3246 26.1948 25.1297 26.4351 25.1297H33.1297Z"
          />
        </svg>
      </span>
    </NavLink>
  )
}

export function BottomNav({ theme = 'light' }: { theme?: Theme }) {
  const dark = theme === 'dark'
  return (
    <nav
      aria-label="Main"
      className={`flex h-bottom-nav shrink-0 items-center justify-between px-12 pt-4 pb-12 ${
        dark ? 'bg-media' : 'border-t border-stroke-subtle bg-canvas'
      }`}
    >
      <TabLink tab={tabs[0]} theme={theme} />
      <TabLink tab={tabs[1]} theme={theme} />
      <CreateButton theme={theme} />
      <TabLink tab={tabs[2]} theme={theme} />
      <TabLink tab={tabs[3]} theme={theme} />
    </nav>
  )
}
