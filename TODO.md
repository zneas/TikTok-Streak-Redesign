# To do: TikTok Streak Redesign MVP

Last updated: 2026-11-21. Frame IDs refer to the Figma page "Prototype <---". See `CLAUDE.md` for the full flow and `docs/screens/` for the reference PNGs.

## Done

- [x] Project setup: Vite 8, React 19, TypeScript, Tailwind 4 (`@tailwindcss/vite`), React Router 8
- [x] Design tokens wired into Tailwind (no default colors, no hex values in `src/`)
- [x] App shell: phone frame on desktop, status bar, bottom nav with routing
- [x] Mock data: Maya and friends, the Maya chat, shared videos
- [x] A3 · Inbox and A4 · Chat with Maya, with streak label, activity markers and floating pet
- [x] Shared video player: tapping a video in the chat opens it full screen and marks it Watched (tester task 1 works)
- [x] A1 · Home and A9 · Profile (display only)
- [x] Pet tokens `pet/leaf/back`, `pet/leaf/front`, `pet/shadow`, `pet/zzz`, in code and as Figma variables

## Screens to build

In priority order. The first four unlock the remaining tester tasks.

- [ ] **A5 · Streak info sheet** (14:921), task 2. Maya and You avatars, "48 days with Maya", "5 replies this week", the two rule bullets, badge track (3d to 200d), close (X), "Streak settings" and "Got it" buttons.
- [ ] **A3h · Chat actions sheet** (13:823), task 3. Long-press Maya in Inbox: Pin to top, Mute messages, "Hide streak number" toggle ("Only you see this change").
- [ ] **A3x · Inbox, streak hidden** (13:848) and **A4x · Chat, streak hidden** (51:1559), task 3. Maya's streak label disappears in Inbox and in the chat; the pet stays. Toast: "Streak hidden. Maya isn't notified."
- [ ] **A6 · Streak Pet** (14:971), task 4. Close, Biscuit name chip, •••, "Streak days 48", avatars, "Resting" chip, large pet, 34/50 progress bar, "Your streak is safe for today.", Grow your Pet card (3 tasks and footnote), Streak badges card, "Learn more". The page scrolls.
- [ ] **A7 · Streak settings** (14:1082), task 5. Maya's row, Daily reminder and "Remind me about Maya" toggles, Plan rest days with day chips and rest note, Daily/Weekly streak mode (check the Pending state in the frame), Hide streak toggle.
- [ ] **A2 / A2s · Share sheet** (13:570, 15:1069). "Send to" with friend avatars (check on Maya when selected), Copy link, Repost, Save video, More, "Send to Maya" button.
- [ ] **A1b · Home, sent to Maya** (13:618). "Sent to Maya" toast after sending.
- [ ] **A0 · Lock screen reminder** (13:490). Lock screen with the "Maya Okafor · 48 days" notification.
- [ ] **Shop and Create.** Waiting for reference UI from the team; empty placeholders for now.

## Components to build

Named after the Figma Design System components.

- [ ] Sheet with dimmed background (shared by A2, A3h and A5)
- [ ] Toggle
- [ ] Button
- [ ] Segmented control
- [ ] Day chip
- [ ] Streak badge
- [ ] Badge track
- [ ] Growth task
- [ ] Toast
- [ ] Notification
- [ ] Settings row
- [ ] Streak mode block
- [ ] Streak info sheet
- [ ] Chat actions sheet
- [ ] Share sheet

## Interactions to wire up

- [ ] Streak label in the chat header → A5
- [ ] Floating pet → A6
- [ ] ••• on the Pet page → A7
- [ ] "Streak settings" in A5 → A7
- [ ] Long-press Maya's Inbox row → A3h
- [ ] "Hide streak number" hides the label in Inbox and chat, for you only
- [ ] Home Share → A2 → select Maya → Send → A1b
- [ ] Lock-screen notification → Chat with Maya
- [ ] Keep streak settings (hidden streak, rest days, streak mode) across screens until the page reloads

## Display only for now (decide whether any of these need to work)

- [ ] Chats with friends other than Maya
- [ ] Stories, Activity, System notifications
- [ ] Camera, call and ••• buttons in the chat
- [ ] Message field (you can type but not send)
- [ ] Following, LIVE and Search on Home
- [ ] Profile buttons

## Release and testing

- [ ] Commit the work so far
- [ ] Deploy to Vercel or Netlify and share the link (`vercel.json` already handles page routes)
- [ ] Test on a real phone
- [ ] Update `docs/tester-guide.md` for the coded MVP (it still has the Figma-only steps, such as "press R to restart")
- [ ] Run the usability test with the five tasks and collect evaluations

## Known issues

- [ ] On desktop windows shorter than about 850px, the 360 × 784 phone frame gets cut off at the top and bottom. Consider scaling it down to fit.

## Docs and research

- [ ] Document the Tailwind class names for tokens in `CLAUDE.md` (e.g. `bg-canvas`, `text-tertiary`, `fill-flame-done`)
- [ ] Add survey results to the persona in `docs/design-thinking.pdf` (it still has a placeholder note)
