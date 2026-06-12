/**
 * Mycroft Design Tokens
 * ─────────────────────────────────────────────────────────────────────────────
 * TS class-name tokens for building NEW components with Tailwind. Each token
 * is a string of Tailwind utilities that reproduces one of the site's Webflow
 * type/layout styles 1:1 (values extracted from webflow-shared.css).
 *
 * The cloned snapshot components keep their original Webflow class names
 * (h1_v2, body-text-medium, container-large, …) — do NOT rewrite those; the
 * class names are what keeps the clone faithful. Use these tokens when you
 * add net-new UI so it matches the existing design without touching the
 * captured stylesheet.
 *
 * The CSS side (palette vars, fonts, breakpoints) lives in src/app/tokens.css.
 * Custom responsive variants used below (Webflow's breakpoints, desktop-first):
 *   max-tablet:    ≤ 991px
 *   max-landscape: ≤ 767px (mobile landscape)
 *   max-portrait:  ≤ 479px (mobile portrait)
 *
 * Usage:
 *   import { t } from "@/lib/tokens"
 *   <h2 className={t.type.h2}>...</h2>
 */

// ─── TYPOGRAPHY ──────────────────────────────────────────────────────────────
//
// Font roles:
//   font-display = Newsreader Display (serif) → big headlines (h1–h3), pullquotes
//   font-body    = Tasa Orbiter (sans)        → everything else: body, h4, h6,
//                                               eyebrows, buttons, labels

export const type = {
  // ── Headlines (mirror .h1_v2 … .h4_v2, .h6) ───────────────────────────────
  h1: "font-display font-medium text-unblack text-[4.5rem] leading-[110%] tracking-[-0.01rem] max-tablet:text-[3.5rem] max-landscape:text-[2.5rem] max-portrait:text-[2.25rem]",
  h2: "font-display font-medium text-unblack text-[3.875rem] leading-[110%] tracking-[-0.015rem] max-tablet:text-[3rem] max-landscape:text-[2.35rem] max-portrait:text-[2rem]",
  h3: "font-display font-medium text-unblack text-[3.25rem] leading-[110%] tracking-[-0.015rem] max-tablet:text-[2.25rem] max-landscape:text-[2.125rem]",
  h4: "font-body font-semibold text-[2.35rem] leading-[110%] max-tablet:text-[2rem] max-landscape:text-[1.75rem] max-portrait:text-[1.5rem]",
  h6: "font-body font-semibold text-unblack text-[1.55rem] leading-[110%] tracking-[0.015rem] max-landscape:text-[1.25rem] max-portrait:text-[1.125rem] max-portrait:tracking-[0]",

  // ── Deks / quotes (mirror .text-dek-m, .pullquote-text) ───────────────────
  dek: "font-body text-unblack text-[1.7rem] leading-[125%]",
  pullquote: "font-display text-unblack text-[2.875rem] leading-[115%] tracking-[-0.01rem] mb-5 max-tablet:text-[2.5rem] max-landscape:text-[1.875rem] max-landscape:mb-4 max-portrait:text-[1.65rem]",

  // ── Body text (mirror .body-text-large / -medium / -small) ────────────────
  bodyLG: "font-body text-unblack text-[1.375rem] leading-[125%] max-tablet:text-[1.25rem] max-portrait:text-[1.125rem]",
  body: "font-body text-unblack text-[1.25rem] leading-[125%] max-tablet:text-[1.125rem] max-portrait:text-[1rem]",
  bodySM: "font-body text-unblack text-[1.125rem] leading-[123%] max-portrait:text-[1rem]",

  // ── Eyebrows / labels (mirror .eyebrow-small) ─────────────────────────────
  eyebrow: "font-body uppercase text-unblack text-[11px] leading-[110%] tracking-[0.03rem] max-landscape:text-[10px]",
} as const

// ─── COLORS ──────────────────────────────────────────────────────────────────
//
// Mycroft palette (Webflow design-system names). Hex values for inline use;
// Tailwind classes resolve via the @theme bindings in tokens.css.
//
// Usage conventions seen across the site:
//   unblack       → page background (dark) and primary text (light sections)
//   racing-green  → dark green sections / headings on light backgrounds
//   mint          → hero headlines + accents on dark backgrounds
//   earl-grey-40  → light section backgrounds; earl-grey → muted text on dark
//   sand          → warm light section background
//   smoke         → secondary/muted text
//   glow / glow-50→ yellow highlights (nav dropdown hover underline)

export const color = {
  // Hex values — for inline style={} or non-Tailwind contexts
  unblack: "#1d1c1a",
  charcoal: "#2e3333",
  racingGreen: "#0e2a2a",
  racingGreen60: "#6e7f7f",
  racingGreen75: "#4a5f5f",
  velvetGreen: "#014d4b",
  mint: "#88e2b5",
  mint75: "#a6eac8",
  earlGrey: "#b9caca",
  earlGrey40: "#e3eaea",
  earlGrey60: "#d5dfdf",
  earlGrey75: "#cbd7d7",
  sand: "#dedcce",
  smoke: "#75888f",
  smoke50: "#bac3c7",
  glow: "#fff480",
  glow50: "#fffabf",
  glow75: "#fff7a0",
  blueberryWine: "#5750e3",
  blueberryWine50: "#aba7f1",
  aubergine: "#67437b",
  dustyLavender: "#beacb9",
  gold: "#d9c382",
  terracotta: "#db9a8c",
  terracotta75: "#e4b3a9",
  ember: "#d14424", // ::selection highlight

  // CSS variable strings — for inline style={} that should track tokens.css
  mintCSS: "var(--color-mint)",
  racingGreenCSS: "var(--color-racing-green)",
  unblackCSS: "var(--color-unblack)",

  // Common Tailwind classes
  heroText: "text-mint",
  darkSectionBg: "bg-racing-green",
  lightSectionBg: "bg-earl-grey-40",
  sandSectionBg: "bg-sand",
  mutedText: "text-smoke",
} as const

// ─── LAYOUT ──────────────────────────────────────────────────────────────────
//
// Mirrors the Webflow structural classes (.page-padding, .container-*,
// section padding variables).

export const layout = {
  // .page-padding — horizontal page gutters
  pagePadding: "relative mx-auto px-8 max-portrait:px-5",
  // .container-large / -medium / -small — centered max-width wrappers
  containerLarge: "w-full max-w-300 mx-auto",
  containerMedium: "w-full max-w-240 mx-auto",
  containerSmall: "w-full max-w-200 mx-auto",
  // Webflow's --spacing-layout--container-max-width (74.875rem) via @theme
  containerSite: "w-full max-w-site mx-auto",
  // --spacing-layout--section-padding-* (lg 5rem / md 6rem / sm 5rem / xs 4rem)
  sectionPadding: "py-20 max-tablet:py-24 max-landscape:py-20 max-portrait:py-16",
} as const

// ─── COMPONENTS ──────────────────────────────────────────────────────────────
//
// Webflow component tokens (--component-button--*, --component-card--*).

export const component = {
  // Base button box (visual skin varies; .btn-large in the clone is the pill CTA)
  button: "font-body font-medium text-[1rem] leading-[1.5em] px-[1.2em] py-[0.5em] rounded-button",
  card: "rounded-card",
  cardBody: "p-[24px] max-portrait:p-[20px]",
  input: "font-body text-[1rem] leading-[1.5em] rounded-button mb-4",
} as const

// ─── EXPORT ──────────────────────────────────────────────────────────────────

export const t = { type, color, layout, component } as const
export default t
