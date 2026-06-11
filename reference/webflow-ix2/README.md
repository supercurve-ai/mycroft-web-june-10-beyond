# Webflow IX2 interaction data (reference only — not loaded by the site)

Extracted 2026-06-10 from the original published site's JS bundle
(`webflow.schunk.364763fb5ffa43e4.js`, the `Webflow.require("ix2").init(...)`
config). Use this when reproducing an original animation in CSS/React.

- `ix2-config.json` — the full site config: every IX2 event (keyed by
  `data-w-id` targets) and all 107 action lists.
NOTE when reading the data: `actionItemGroups` run **sequentially** — each
group starts only after the previous one finishes — and when
`useFirstGroupAsInitialState` is true, group 0 is applied instantly as the
pre-animation state, not animated. Per-item `delay` is relative to its
group's start.

- `nav-actionlists.json` — just the action lists used by the navbar:
  - `a-141` / `a-149` — Product / Solutions dropdown open (150ms list fade +
    chevron flip, THEN tiles stagger in 50ms apart starting at 150ms:
    move 20px→0 over 250ms ease, fade in over 200ms ease)
  - `a-142` / `a-152` — dropdown close (150ms fade-out, then instant reset)
  - `a-139` / `a-140` — product tile hover panel (in: 300ms opacity / 350ms
    move, ease; out: 200ms ease)
  - `a-145` / `a-146` — nav link hover text color (blueberry-wine, 250ms
    ease) — mobile/tablet breakpoints ONLY (`medium/small/tiny`)
  - `a-129` / `a-130` — desktop nav link hover: the yellow
    `.nav-text-highlight` bar slides translateX(-100%) → 0 over 500ms
    outQuart, back on mouse-out (`main` breakpoint; the per-page event
    copies are keyed to page-scoped ids, so filter loosely when searching)
  - `a-48` / `a-49` — text-link arrow nudge (0→3px, 200ms ease-in / ease-out)

These are implemented in the appended section at the bottom of
`src/app/webflow-shared.css` plus the `.wf-closing` phase in
`src/app/_shared/SiteNav.tsx`.

`decode.mjs` prints any action list as a readable timeline
(`node decode.mjs a-22 a-23`; no args lists everything).

## Site-wide audit (2026-06-10)

Implemented exactly, in the appended webflow-shared.css section:

- `a-22`/`a-23` — .btn-large arrow nudge (62 buttons site-wide)
- `a-19`/`a-20` (+`a-143/144/153/154` dupes) — .btn-nav arrow nudge
- shine sweep on .btn-large:hover (shared by `a-35/41/63/69`)
- `a-35`/`a-36` — lamp CTA glow; `a-63`/`a-64` — fireplace CTA art
- `a-41`/`a-42` — product hero lantern glow
- `a-123`/`a-124` — frameworks dial-tile hover
- all the nav lists above

Already covered elsewhere in the clone:

- scroll reveals (`slideInRight`, `slideInBottom`, `a-4/5/65-68`, …) —
  WebflowInteractions + per-element `--wf-*` vars carry the exact timings
- `a-27` Hero Cursor Glow — CursorGlow.tsx
- FAQ open/close (`a-113-116` etc.) — Accordion.tsx (FaqItem)
- `a-70`/`a-71` product slider — ProductSlider/ProductSlideCard (cover-wipe
  and lottie timings exact; the slide text animates as one block instead
  of the original 0/200/400ms three-element stagger)
- mobile hamburger menu — SiteNav + CSS

Not applicable / not implemented:

- Show/Hide-Navigation on scroll (`a-2/3/9/10/74-83`) — only the OLD navbar
  symbols had this; navbar_v3 (what the clone uses) has no scroll behavior
- scroll-scrub interactions (SCROLLING_IN_VIEW: `a-50/51` product columns) —
  progress-driven; the clone approximates them as threshold reveals.
  EXCEPTIONS: `a-98/99` (features-scroll 3-slide) and `a-117/118`
  (features2-scroll 2-slide) are implemented exactly in
  `src/app/_shared/ScrollFeatureSlider.tsx` (timeline picked by slide
  count) — used by /partnerships and all five /product/* pages.
  Also `a-30-34` (slide-from-right scrubs,
  x 50px→0 easeIn + linear fade, staggered keyframe windows) are now
  implemented exactly via `.wf-scrub` + `data-wf-scrub="start,end"` in
  WebflowInteractions — used by the /about founder tiles, the /pricing
  plan tiles, and the /pricing compliance badges
- lottie scroll play/stop (`a-52`) — clone lotties autoplay. EXCEPTION:
  `a-122/125/126` (frameworks compliance dials: play after 750/1250/1750ms
  stagger on scroll-in) are implemented via DotLottiePlayer's `playOnView`
  prop — used by the "Unlock other frameworks" section
  (UnlockFrameworksSection) on all nine /frameworks/* pages. Deliberate
  deviation: the original rewound and replayed on every scroll-in; the
  clone plays once and holds the end state (owner preference)
- `a-119` frameworks hero badge mouse-parallax — implemented in
  WebflowInteractions (`.fw-hero-circle`: badge 0→16px, dots 0→−8px across
  the hero section on both axes, exponential smoothing, resting at center)
- `a-24/25` (.hero-img-glow scale), `a-86/87` arrow turn, `a-92` share
  click, `a-96` lottie fade-in — target pages/elements that aren't in the
  clone in that form

To re-extract (while the original site is still up): download the
`webflow.schunk.*.js` files referenced by the live HTML, find the one
containing `Webflow.require("ix2").init(`, brace-match the object that
follows, and `eval`/`JSON.stringify` it.
