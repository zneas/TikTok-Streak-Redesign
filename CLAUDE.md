# TikTok Streak Redesign: MVP

Team Astrophage, ITE 14 (UX Concepts and Design), Saint Louis University.
We redesigned TikTok's DM Streak feature in Figma and are now building a coded MVP of the **redesigned (After) flow**. The MVP only needs the screens on the path to the streak features. Everything else (Home feed, Shop, Profile) is a thin shell so the flow feels real.

## Why we redesigned it (keep these in mind for every UI decision)
From our research and design thinking (see `docs/research-plan.pdf` and `docs/design-thinking.pdf`; `docs/tester-guide.md` and `docs/evaluation-template.pdf` are for usability testing):
- Users keep streaks by **sending videos without watching or replying**, so the streak stops meaning real connection.
- **Expiry pressure** (the countdown, the big orange number) makes streaks feel like a chore.
- The redesign shifts the focus from "don't lose the number" to "actually interact with your friend": it shows what you've watched/replied to, makes the number quieter and optional, and adds flexible streak rules.

## Stack
- Vite + React + TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite` (CSS-first config with `@theme`, no tailwind.config.js)
- React Router for screens; mock data in `src/data/`
- Run: `npm install`, `npm run dev`. Build: `npm run build`
- Deploy: Vercel or Netlify so testers get a link
- Target viewport: mobile, **360 × 784** (same as the Figma frames). On desktop, show the app centered in a phone frame; on mobile, full screen.

## Tailwind + tokens rules
- `tokens.css` stays the single source of truth. Import it before Tailwind's theme mapping in the main CSS file.
- Expose tokens to Tailwind with **`@theme inline`**, mapping short utility names to the token variables (e.g. `--color-canvas: var(--color-bg-canvas)` → `bg-canvas`; `--color-streak-flame: var(--streak-flame-done)`). The `inline` keyword is required: it makes utilities reference the token directly, so `data-streak="current"` overrides still work. Never map a name to itself (circular).
- Map spacing, radius, font sizes and shadows from the Dimension/typography/shadow tokens too.
- Turn off Tailwind's default color palette (`--color-*: initial;`) so only our tokens are available.
- No arbitrary values with hex codes (`bg-[#fe2c55]`) and no default palette colors (`bg-red-500`). If a needed token is missing, ask before adding one.

## Design tokens
- `design/tokens.json` is the source. `design/tokens.css` is generated from it with `node design/build-tokens.mjs`. Never edit the CSS by hand; edit the JSON and regenerate.
- The app imports `design/tokens.css` directly from the main CSS file (don't copy it into `src/`).
- They match the Figma variables 1:1, including the CSS names in Figma's code syntax.
- Always use semantic tokens (through the Tailwind utilities mapped to them, see "Tailwind + tokens rules"). Never use `--prim-*` or raw hex values in components.
- Streak mode: **Redesign is the default**. `data-streak="current"` switches to today's TikTok look (for comparisons only, not part of the MVP).
- Font: DM Sans (Google Fonts). Accent: TikTok red `#FE2C55`.

## Design decisions we already settled (don't change without asking)
- Bottom nav tabs: **Home, Shop, (Create), Inbox, Profile**. There is no Friends tab (friends live in Inbox).
- Chat header: back chevron, avatar + name with the **streak flame inline to the right of the name**, call, more (•••). No paw icon, no "5 replies" subtitle.
- **Streak pet**: a small floating avatar in the chat, **upper right just below the call and ••• buttons**. Tapping it opens the Pet screen.
- Composer order: camera, then the field with **attach image, emoji, voice message** (mic last).
- Message bubbles: avatar beside both sides. Outgoing = light grey (`--color-bubble-outgoing`), incoming = white with `--color-border-bubble` stroke.
- Redesign streak label is quieter than today's: smaller flame and number, muted colors (see the `--streak-label-*` tokens).
- Redesign pet is **Resting** (warm honey colors) instead of **Frozen** (blue/grey) when the streak isn't kept.

## MVP screens and flow (After / Redesign)
Figma page "Prototype <---" (page ID `7:254`). Frame IDs are in parentheses. All screens are 360 × 784.
1. **Lock screen (A0, 13:490)**: streak reminder notification, opens Chat with Maya.
2. **Home (A1, 13:511)**: video feed shell. Share opens the **share sheet (A2, 13:570)**: select Maya (A2s, 15:1069), then Send closes it and shows the sent state with a toast (A1b, 13:618).
3. **Inbox (A3, 13:679)**: chat rows with the redesigned streak label.
   - Tap Maya → Chat.
   - **Long-press Maya → chat actions sheet (A3h, 13:823)** with "Hide streak number" toggle. Turning it on hides the number on your side only and shows the toast "Streak hidden. Maya isn't notified." (A3x, 13:848). Maya is not notified.
4. **Chat with Maya (A4, 14:834)**: video messages show an **activity marker** (none / Watched / Replied) so you can tell which of Maya's videos you've responded to. Tapping an unwatched incoming video marks it Watched.
   - Tap the streak label → **Streak info sheet (A5, 14:921)**: explains what counts as a streak day. Buttons: Streak settings, Got it.
   - Tap the floating pet → **Pet screen (A6, 14:971)**.
   - With the streak hidden (A4x, 51:1559), the label is gone but the pet still works.
5. **Pet (A6, 14:971)**: scrolls (content is 946px tall in a 784px frame, so the Streak badges card and "Learn more" sit below the fold). Shared pet with Maya, growth progress, badge track (3d/10d/30d/100d/200d tiers), growth tasks (what helps it grow). ••• opens Settings.
6. **Streak settings (A7, 14:1082)**: streak mode (Daily / Weekly, with a Pending state between them; check frame A7 for what it says), day chips, and the hide-number option. This is the "exam on Saturday, less pressure" scenario.
7. **Profile (A9, 13:1074)**: shell only.

Get exact copy and layout from the Figma frames or `docs/screens/*.png`. Don't invent copy.

## Usability tasks the MVP must support (from our tester guide)
1. Find which of Maya's videos you've already responded to, then watch the newest one.
2. Find out what counts as a streak day with Maya.
3. Hide your streak count with Maya for you only, without telling Maya.
4. Check on your shared pet and find out what helps it grow.
5. You have an exam Saturday. Set up your streak with Maya so it puts less pressure on you.

## Figma
- File key: `gyDuzNbMEwWqNEXWa207Uk`, owned by a teammate on an Education plan.
- Pages (page IDs in parentheses):
  - **Guide (`97:1103`)**: the tester guide as a frame ("Tester guide", `98:2`). Same content as `docs/tester-guide.md`.
  - **Prototype <--- (`7:254`)**: the redesigned flow, in three sections: "1 · Entry: reminder, Home, share" (`13:488`), "2 · Inbox, hide streak, Profile" (`13:489`), "3 · Chat, streak info, Pet, Settings" (`14:833`). There is no separate "Before (Current)" prototype page.
  - **Design System (`0:1`)**: sections Components (`8:2`), Foundations (`10:1575`, tokens doc), Usage · Current vs Redesign (`10:2121`), Icons · TikTok UI kit (`43:1102`).
  - **Other Ref. (`34:3585`)**: reference material (old icon set, a TikTok profile page and chat bar breakdown). Not part of the MVP; use only if a detail is missing elsewhere.
- Figma MCP calls are limited on some of our accounts. Read from the PNGs in `docs/screens/` first, and use the Figma MCP only when a detail is missing. Fetch one frame at a time by node ID (whole-page metadata for Design System and Other Ref. is too large to read in one call).
- Main components (Design System page): Avatar, Streak label, Toggle, Button, Activity marker, Chat row, Segmented control, Day chip, Streak badge, Badge track, Growth task, Status bar, Bottom nav, Chat header, Message bubble, Video message, Composer, Toast, Notification, Settings row, Streak mode block, Streak pet, Streak info sheet, Chat actions sheet, Share sheet, Floating pet. Mirror these as code components with the same names.
- Icons (Icons · TikTok UI kit section, 24 × 24 components named `Icon/<Name>`): Home, Inbox, Profile (each with a Filled variant), Emoji, Bell, Dropdown, Link, Repost, Close, Add, Grid, Liked, Views, Message, Music note, Scan, Like, Share, Comment, Live, Discover, Music disc, Follow badge, Create. Use these instead of an icon library.

## Data
- All people and videos are made up (Maya is the main friend). Use local mock data. No backend or login for the MVP.
