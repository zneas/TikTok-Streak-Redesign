# To do: TikTok Streak Redesign MVP

Last updated: 2026-11-23. Frame IDs refer to the Figma page "Prototype <---". See `CLAUDE.md` for the full flow and `docs/screens/` for the reference PNGs.

Work through the steps in order. Inside each step, build the components first, then the screen, then wire it up. Each step ends with a tester task that works end to end, so the team can test after any step.

## Done

- [x] Project setup: Vite 8, React 19, TypeScript, Tailwind 4 (`@tailwindcss/vite`), React Router 8
- [x] Design tokens wired into Tailwind (no default colors, no hex values in `src/`)
- [x] App shell: phone frame on desktop, status bar, bottom nav with routing
- [x] Mock data: Maya and friends, the Maya chat, shared videos
- [x] A3 · Inbox and A4 · Chat with Maya, with streak label, activity markers and floating pet
- [x] Shared video player: tapping a video in the chat opens it full screen and marks it Watched (**tester task 1 works**)
- [x] A1 · Home and A9 · Profile (display only)
- [x] Pet tokens `pet/leaf/back`, `pet/leaf/front`, `pet/shadow`, `pet/zzz`, in code and as Figma variables

## Step 0: Save and share what we have

- [ ] Commit the work so far
- [ ] Deploy to Vercel or Netlify (`vercel.json` already handles page routes). Deploying now means every later step can be checked on a real phone right away.

## Step 1: Shared pieces (needed by most of the screens below)

Build these before any new screen. Several screens share them, and building them per screen would mean doing it twice.

- [ ] **Streak settings store**: hidden streak, reminders, rest days and streak mode for Maya, kept in memory until the page reloads. A3h, A3x, A4x and A7 all read or change these, so it has to exist first.
- [ ] **Sheet with dimmed background**: slides up from the bottom; tapping the dimmed area closes it. Used by A5, A3h and A2.
- [ ] **Button** (primary and secondary). Used by A5, A2s and A7.
- [ ] **Toggle**. Used by A3h and A7.
- [ ] **Toast**. Used by A3x and A1b.

## Step 2: Streak info sheet (tester task 2)

- [ ] Components: **Streak badge**, **Badge track** (3d to 200d). The Badge track is reused in Step 4.
- [ ] Screen: **A5 · Streak info sheet** (14:921). Maya and You avatars, "48 days with Maya", "5 replies this week", the two rule bullets, badge track, close (X), "Streak settings" and "Got it".
- [ ] Wire: streak label in the chat header → A5. "Got it" and X close it.
- [ ] "Streak settings" button: leave it for Step 5, when A7 exists.

## Step 3: Hide the streak number (tester task 3)

- [ ] Component: **Chat actions sheet**.
- [ ] Screen: **A3h · Chat actions sheet** (13:823). Pin to top, Mute messages, "Hide streak number" toggle ("Only you see this change").
- [ ] Wire: long-press Maya's Inbox row → A3h.
- [ ] Wire: the toggle updates the settings store. Maya's label disappears in Inbox (**A3x**, 13:848) and in the chat header (**A4x**, 51:1559); the pet stays. Toast: "Streak hidden. Maya isn't notified."

## Step 4: Streak Pet page (tester task 4)

- [ ] Component: **Growth task**. Reuse **Badge track** from Step 2 and the existing **Streak pet** drawing at a larger size.
- [ ] Screen: **A6 · Streak Pet** (14:971). Close, Biscuit name chip, •••, "Streak days 48", avatars, "Resting" chip, large pet, 34/50 progress bar, "Your streak is safe for today.", Grow your Pet card (3 tasks and footnote), Streak badges card, "Learn more". The page scrolls.
- [ ] Wire: floating pet in the chat → A6. Close goes back to the chat.
- [ ] ••• button: leave it for Step 5, when A7 exists.

## Step 5: Streak settings (tester task 5)

- [ ] Components: **Settings row**, **Day chip**, **Segmented control**, **Streak mode block**.
- [ ] Screen: **A7 · Streak settings** (14:1082). Maya's row, Daily reminder and "Remind me about Maya" toggles, Plan rest days with day chips and rest note, Daily/Weekly streak mode (check the Pending state in the frame), Hide streak toggle.
- [ ] Wire everything that leads to A7: ••• on the Pet page (from Step 4) and "Streak settings" in A5 (from Step 2).
- [ ] Wire: every control updates the settings store. The Hide streak toggle here and the one in A3h are the same setting.

All five tester tasks work after this step.

## Step 6: Entry screens (not needed for the tester tasks)

- [ ] Component: **Share sheet**. Screens: **A2 / A2s** (13:570, 15:1069). "Send to" with friend avatars (check on Maya when selected), Copy link, Repost, Save video, More, "Send to Maya" button.
- [ ] Screen: **A1b · Home, sent to Maya** (13:618). Reuses the Toast from Step 1.
- [ ] Wire: Home Share → A2 → select Maya → Send → A1b.
- [ ] Component: **Notification**. Screen: **A0 · Lock screen reminder** (13:490). Lock screen with the "Maya Okafor · 48 days" notification.
- [ ] Wire: notification → Chat with Maya.

## Step 7: Before testing with users

- [ ] Fix the desktop phone frame on short windows (under about 850px tall it gets cut off). Testers on laptops will hit this.
- [ ] Test the whole flow on a real phone using the deployed link.
- [ ] Update `docs/tester-guide.md` for the coded MVP (it still has Figma-only steps, such as "press R to restart").
- [ ] Run the usability test with the five tasks and collect evaluations.

## Waiting on someone or something

- [ ] **Shop and Create**: waiting for reference UI from the team. Empty placeholders for now.
- [ ] **Decide what else should work.** Display only right now: chats with friends other than Maya; stories, Activity and System notifications; camera, call and ••• in the chat; the message field (you can type but not send); Following, LIVE and Search on Home; Profile buttons. Decide before Step 7 so testers aren't confused by buttons that do nothing.

## Docs (any time)

- [ ] Document the Tailwind class names for tokens in `CLAUDE.md` (e.g. `bg-canvas`, `text-tertiary`, `fill-flame-done`).
- [ ] Add survey results to the persona in `docs/design-thinking.pdf` (it still has a placeholder note).
