"use client";

import { useState } from "react";
import { type as type_, color, component } from "@/lib/tokens";
import { ButtonLarge } from "../_shared/ButtonLarge";

/**
 * /style-guide — internal reference for the Mycroft token system
 * (src/app/tokens.css + src/lib/tokens.ts). Modeled on the Supercurve
 * style-guide page. Not linked from the site nav and noindexed.
 */

// ── Color token table ─────────────────────────────────────────────────────────
type Swatch = {
  name: string;
  varName: string; // CSS custom property in tokens.css
  tw: string; // Tailwind utility suffix (bg-<tw>, text-<tw>, …)
  hex: string;
  desc: string;
};

const colorGroups: { group: string; note?: string; items: Swatch[] }[] = [
  {
    group: "Core",
    items: [
      { name: "Unblack", varName: "--color-unblack", tw: "unblack", hex: color.unblack, desc: "Page background (dark) and primary text (light sections)" },
      { name: "Charcoal", varName: "--color-charcoal", tw: "charcoal", hex: color.charcoal, desc: "Dark neutral surface" },
    ],
  },
  {
    group: "Greens",
    items: [
      { name: "Racing Green", varName: "--color-racing-green", tw: "racing-green", hex: color.racingGreen, desc: "Dark sections; headings on light backgrounds" },
      { name: "Racing Green 60", varName: "--color-racing-green-60", tw: "racing-green-60", hex: color.racingGreen60, desc: "60% tint" },
      { name: "Racing Green 75", varName: "--color-racing-green-75", tw: "racing-green-75", hex: color.racingGreen75, desc: "75% tint" },
      { name: "Velvet Green", varName: "--color-velvet-green", tw: "velvet-green", hex: color.velvetGreen, desc: "Dark CTA / button surfaces" },
      { name: "Mint", varName: "--color-mint", tw: "mint", hex: color.mint, desc: "Hero headlines and accents on dark backgrounds" },
      { name: "Mint 75", varName: "--color-mint-75", tw: "mint-75", hex: color.mint75, desc: "75% tint" },
    ],
  },
  {
    group: "Neutrals",
    items: [
      { name: "Earl Grey", varName: "--color-earl-grey", tw: "earl-grey", hex: color.earlGrey, desc: "Muted text on dark backgrounds" },
      { name: "Earl Grey 40", varName: "--color-earl-grey-40", tw: "earl-grey-40", hex: color.earlGrey40, desc: "Light section backgrounds" },
      { name: "Earl Grey 60", varName: "--color-earl-grey-60", tw: "earl-grey-60", hex: color.earlGrey60, desc: "60% tint" },
      { name: "Earl Grey 75", varName: "--color-earl-grey-75", tw: "earl-grey-75", hex: color.earlGrey75, desc: "75% tint" },
      { name: "Sand", varName: "--color-sand", tw: "sand", hex: color.sand, desc: "Warm light section background" },
      { name: "Smoke", varName: "--color-smoke", tw: "smoke", hex: color.smoke, desc: "Secondary / muted text" },
      { name: "Smoke 50", varName: "--color-smoke-50", tw: "smoke-50", hex: color.smoke50, desc: "50% tint" },
    ],
  },
  {
    group: "Accents",
    note: "Webflow tint suffixes mean a lighter mix toward white (50 = 50% tint).",
    items: [
      { name: "Glow", varName: "--color-glow", tw: "glow", hex: color.glow, desc: "Yellow highlight" },
      { name: "Glow 50", varName: "--color-glow-50", tw: "glow-50", hex: color.glow50, desc: "Nav dropdown hover underline" },
      { name: "Glow 75", varName: "--color-glow-75", tw: "glow-75", hex: color.glow75, desc: "75% tint" },
      { name: "Blueberry Wine", varName: "--color-blueberry-wine", tw: "blueberry-wine", hex: color.blueberryWine, desc: "Purple accent" },
      { name: "Blueberry Wine 50", varName: "--color-blueberry-wine-50", tw: "blueberry-wine-50", hex: color.blueberryWine50, desc: "50% tint" },
      { name: "Aubergine", varName: "--color-aubergine", tw: "aubergine", hex: color.aubergine, desc: "Deep purple accent" },
      { name: "Dusty Lavender", varName: "--color-dusty-lavender", tw: "dusty-lavender", hex: color.dustyLavender, desc: "Soft lavender accent" },
      { name: "Gold", varName: "--color-gold", tw: "gold", hex: color.gold, desc: "Gold accent" },
      { name: "Terracotta", varName: "--color-terracotta", tw: "terracotta", hex: color.terracotta, desc: "Clay accent" },
      { name: "Terracotta 75", varName: "--color-terracotta-75", tw: "terracotta-75", hex: color.terracotta75, desc: "75% tint" },
      { name: "Ember", varName: "--color-ember", tw: "ember", hex: color.ember, desc: "Text-selection highlight (unnamed in Webflow)" },
    ],
  },
];

// ── Type scale — driven directly from tokens ──────────────────────────────────
const typeScale: {
  name: string;
  tokenKey: string;
  classes: string;
  webflowClass: string;
  font: string;
  size: string;
  usage: string;
  sample: string;
}[] = [
  { name: "H1", tokenKey: "type.h1", classes: type_.h1, webflowClass: ".h1_v2", font: "Newsreader Display 500", size: "4.5rem → 3.5 / 2.5 / 2.25", usage: "Hero headlines", sample: "Compliance that earns trust." },
  { name: "H2", tokenKey: "type.h2", classes: type_.h2, webflowClass: ".h2_v2", font: "Newsreader Display 500", size: "3.875rem → 3 / 2.35 / 2", usage: "Section headlines", sample: "Security, minus the busywork." },
  { name: "H3", tokenKey: "type.h3", classes: type_.h3, webflowClass: ".h3_v2", font: "Newsreader Display 500", size: "3.25rem → 2.25 / 2.125", usage: "Sub-section headlines", sample: "One platform, every framework." },
  { name: "H4", tokenKey: "type.h4", classes: type_.h4, webflowClass: ".h4_v2", font: "Tasa Orbiter 600", size: "2.35rem → 2 / 1.75 / 1.5", usage: "Feature headings", sample: "Continuous monitoring" },
  { name: "H6", tokenKey: "type.h6", classes: type_.h6, webflowClass: ".h6", font: "Tasa Orbiter 600", size: "1.55rem → 1.25 / 1.125", usage: "Card / feature titles", sample: "Audit-ready evidence" },
  { name: "Dek", tokenKey: "type.dek", classes: type_.dek, webflowClass: ".text-dek-m", font: "Tasa Orbiter 400", size: "1.7rem", usage: "Hero subheads / deks", sample: "Your security program, handled end to end." },
  { name: "Pullquote", tokenKey: "type.pullquote", classes: type_.pullquote, webflowClass: ".pullquote-text", font: "Newsreader Display 400", size: "2.875rem → 2.5 / 1.875 / 1.65", usage: "Customer quotes", sample: "“Mycroft made our SOC 2 feel effortless.”" },
  { name: "Body LG", tokenKey: "type.bodyLG", classes: type_.bodyLG, webflowClass: ".body-text-large", font: "Tasa Orbiter 400", size: "1.375rem → 1.25 / 1.125", usage: "Lead paragraphs", sample: "Mycroft pairs hands-on security experts with software that automates the tedious parts of compliance." },
  { name: "Body", tokenKey: "type.body", classes: type_.body, webflowClass: ".body-text-medium", font: "Tasa Orbiter 400", size: "1.25rem → 1.125 / 1", usage: "Standard body copy", sample: "From device management to vendor reviews, everything lives in one place and stays continuously up to date." },
  { name: "Body SM", tokenKey: "type.bodySM", classes: type_.bodySM, webflowClass: ".body-text-small", font: "Tasa Orbiter 400", size: "1.125rem → 1", usage: "Secondary content, captions", sample: "Trusted by startups and scale-ups across SOC 2, ISO 27001, HIPAA and more." },
  { name: "Eyebrow", tokenKey: "type.eyebrow", classes: type_.eyebrow, webflowClass: ".eyebrow-small", font: "Tasa Orbiter 400 · uppercase", size: "11px → 10px", usage: "Section overlines, labels", sample: "Why Mycroft" },
];

const breakpoints = [
  { variant: "max-tablet:", range: "≤ 991px", css: "@media (width < 992px)", desc: "Webflow Tablet — also min-width twin `tablet:`" },
  { variant: "max-landscape:", range: "≤ 767px", css: "@media (width < 768px)", desc: "Webflow Mobile landscape" },
  { variant: "max-portrait:", range: "≤ 479px", css: "@media (width < 480px)", desc: "Webflow Mobile portrait" },
];

const containers = [
  { name: "container-large", token: "layout.containerLarge", width: "75rem / 1200px", pct: "100%" },
  { name: "container-site", token: "layout.containerSite (max-w-site)", width: "74.875rem / 1198px", pct: "99.8%" },
  { name: "container-medium", token: "layout.containerMedium", width: "60rem / 960px", pct: "80%" },
  { name: "container-small", token: "layout.containerSmall", width: "50rem / 800px", pct: "66.7%" },
];

function SectionHead({ id, title, blurb }: { id: string; title: string; blurb: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-10">
      <h2 className={type_.h3}>{title}</h2>
      <p className={`${type_.bodySM} text-smoke mt-3 max-w-[44rem]`}>{blurb}</p>
    </div>
  );
}

function CodeChip({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-[12px] bg-earl-grey-40 text-racing-green rounded px-1.5 py-0.5">
      {children}
    </code>
  );
}

export default function StyleGuidePage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  const sections = [
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "breakpoints", label: "Breakpoints" },
    { id: "layout", label: "Layout" },
    { id: "components", label: "Components" },
    { id: "chrome", label: "Site chrome" },
  ];

  return (
    <div className="min-h-screen bg-white text-unblack font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-earl-grey-60">
        <div className="max-w-site mx-auto px-8 max-portrait:px-5 h-16 flex items-center justify-between gap-6">
          <div className="flex items-baseline gap-3 shrink-0">
            <span className="font-display text-xl text-racing-green">Mycroft</span>
            <span className="text-earl-grey">×</span>
            <span className="text-[13px] text-smoke">Style Guide</span>
          </div>
          <nav className="flex items-center gap-5 overflow-x-auto">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-[13px] text-smoke hover:text-unblack whitespace-nowrap transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-site mx-auto px-8 max-portrait:px-5 py-16 space-y-24">
        {/* Intro */}
        <div>
          <p className={`${type_.eyebrow} text-smoke mb-4`}>Internal reference</p>
          <h1 className={type_.h2}>Design tokens</h1>
          <p className={`${type_.body} text-smoke mt-4 max-w-[46rem]`}>
            The Mycroft theme as extracted from the Webflow clone. CSS variables and
            Tailwind bindings live in <CodeChip>src/app/tokens.css</CodeChip>; the
            class-name tokens rendered on this page come from{" "}
            <CodeChip>src/lib/tokens.ts</CodeChip> (<CodeChip>t.type.h2</CodeChip>,{" "}
            <CodeChip>t.layout.containerLarge</CodeChip>, …). Cloned snapshot
            components keep their original Webflow class names — use these tokens for
            net-new UI.
          </p>
        </div>

        {/* ── Colors ─────────────────────────────────────────────────────────── */}
        <section>
          <SectionHead
            id="colors"
            title="Colors"
            blurb="The Webflow palette, one CSS variable per colour. Numeric suffix = Webflow tint percentage (lighter mix toward white). Click a hex to copy it. Tailwind: bg-mint, text-racing-green, border-earl-grey-40, …"
          />
          <div className="space-y-12">
            {colorGroups.map((g) => (
              <div key={g.group}>
                <h3 className={`${type_.h6} mb-1`}>{g.group}</h3>
                {g.note && <p className="text-[13px] text-smoke mb-4">{g.note}</p>}
                <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-4 mt-4">
                  {g.items.map((c) => (
                    <div
                      key={c.varName}
                      className="rounded-card border border-earl-grey-60 overflow-hidden"
                    >
                      <div
                        className="h-20"
                        style={{ backgroundColor: c.hex }}
                        title={c.varName}
                      />
                      <div className="p-3 space-y-1">
                        <p className="text-[14px] font-medium leading-tight">{c.name}</p>
                        <button
                          onClick={() => copy(c.hex, c.varName)}
                          className="font-mono text-[12px] text-smoke hover:text-unblack transition-colors"
                          title="Copy hex"
                        >
                          {copied === c.varName ? "copied!" : c.hex}
                        </button>
                        <p className="font-mono text-[11px] text-smoke-50 break-all leading-snug">
                          {c.varName} · bg-{c.tw}
                        </p>
                        <p className="text-[12px] text-smoke leading-snug">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Typography ─────────────────────────────────────────────────────── */}
        <section>
          <SectionHead
            id="typography"
            title="Typography"
            blurb="Two faces: Newsreader Display (serif) for big headlines and quotes, Tasa Orbiter (sans) for everything else. Each token reproduces a Webflow class 1:1, including its responsive steps (desktop → ≤991 / ≤767 / ≤479)."
          />
          <div className="space-y-10">
            {typeScale.map((ts) => (
              <div key={ts.tokenKey} className="border-b border-earl-grey-60 pb-8">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4 text-[12px] text-smoke">
                  <span className="font-medium text-[14px] text-unblack">{ts.name}</span>
                  <CodeChip>t.{ts.tokenKey}</CodeChip>
                  <span>mirrors <CodeChip>{ts.webflowClass}</CodeChip></span>
                  <span>{ts.font}</span>
                  <span>{ts.size}</span>
                  <span className="text-smoke-50">{ts.usage}</span>
                </div>
                <p className={ts.classes}>{ts.sample}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Breakpoints ────────────────────────────────────────────────────── */}
        <section>
          <SectionHead
            id="breakpoints"
            title="Breakpoints"
            blurb="The site is styled desktop-first with Webflow's max-width breakpoints. These custom variants (from tokens.css) match them exactly — Tailwind's default sm/md/lg do NOT line up with the clone."
          />
          <div className="rounded-card border border-earl-grey-60 overflow-hidden">
            <table className="w-full text-left text-[14px]">
              <thead className="bg-earl-grey-40">
                <tr>
                  <th className="px-4 py-3 font-medium">Variant</th>
                  <th className="px-4 py-3 font-medium">Range</th>
                  <th className="px-4 py-3 font-medium">Compiles to</th>
                  <th className="px-4 py-3 font-medium">Webflow breakpoint</th>
                </tr>
              </thead>
              <tbody>
                {breakpoints.map((b) => (
                  <tr key={b.variant} className="border-t border-earl-grey-60">
                    <td className="px-4 py-3"><CodeChip>{b.variant}</CodeChip></td>
                    <td className="px-4 py-3">{b.range}</td>
                    <td className="px-4 py-3 font-mono text-[12px] text-smoke">{b.css}</td>
                    <td className="px-4 py-3 text-smoke">{b.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Layout ─────────────────────────────────────────────────────────── */}
        <section>
          <SectionHead
            id="layout"
            title="Layout"
            blurb="Centered max-width containers (mirroring .container-large / -medium / -small), page gutters and section padding."
          />
          <div className="space-y-3">
            {containers.map((c) => (
              <div key={c.name}>
                <div
                  className="h-10 rounded bg-earl-grey-40 border border-earl-grey-60 flex items-center px-4"
                  style={{ width: c.pct }}
                >
                  <span className="text-[13px] whitespace-nowrap">
                    {c.name} · {c.width}
                  </span>
                </div>
                <p className="font-mono text-[11px] text-smoke-50 mt-1 mb-3">t.{c.token}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 max-w-[44rem] text-[14px]">
            <p>
              <CodeChip>t.layout.pagePadding</CodeChip>{" "}
              <span className="text-smoke">
                — horizontal gutters: 2rem, dropping to 1.25rem on mobile portrait
                (mirrors <CodeChip>.page-padding</CodeChip>).
              </span>
            </p>
            <p>
              <CodeChip>t.layout.sectionPadding</CodeChip>{" "}
              <span className="text-smoke">
                — vertical section rhythm: 5rem / 6rem / 5rem / 4rem across the four
                breakpoints (Webflow&apos;s --spacing-layout--section-padding-*).
              </span>
            </p>
          </div>
        </section>

        {/* ── Components ─────────────────────────────────────────────────────── */}
        <section>
          <SectionHead
            id="components"
            title="Components"
            blurb="Webflow component tokens (button / card / input radii and padding), plus the real site CTA — ButtonLarge renders the captured .btn-large markup, so it always matches production."
          />
          <div className="grid gap-8 max-tablet:grid-cols-1 grid-cols-2">
            {/* Real CTA buttons */}
            <div className="rounded-card border border-earl-grey-60 p-6">
              <p className="text-[14px] font-medium mb-1">ButtonLarge (site CTA)</p>
              <p className="text-[12px] text-smoke mb-5">
                src/app/_shared/ButtonLarge.tsx — captured <CodeChip>.btn-large</CodeChip> markup
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <ButtonLarge href="/demo">Book a demo</ButtonLarge>
              </div>
              <div className="mt-5 rounded-card bg-racing-green p-5 flex flex-wrap items-center gap-4">
                <ButtonLarge href="/demo" velvet>
                  Book a demo
                </ButtonLarge>
                <span className="text-[12px] text-earl-grey">velvet variant on dark</span>
              </div>
            </div>

            {/* Token-built button + radii */}
            <div className="rounded-card border border-earl-grey-60 p-6">
              <p className="text-[14px] font-medium mb-1">Component tokens</p>
              <p className="text-[12px] text-smoke mb-5">
                <CodeChip>t.component.button</CodeChip> box + radius tokens
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className={`${component.button} bg-racing-green text-white hover:bg-velvet-green transition-colors`}>
                  Token button
                </button>
                <button className={`${component.button} border border-racing-green text-racing-green hover:bg-earl-grey-40 transition-colors`}>
                  Outline
                </button>
              </div>
              <div className="flex items-end gap-6 mt-8">
                <div>
                  <div className="w-20 h-20 rounded-button bg-earl-grey-40 border border-earl-grey-60" />
                  <p className="font-mono text-[11px] text-smoke mt-2">rounded-button · 0.5rem</p>
                </div>
                <div>
                  <div className="w-20 h-20 rounded-card bg-earl-grey-40 border border-earl-grey-60" />
                  <p className="font-mono text-[11px] text-smoke mt-2">rounded-card · 0.5rem</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Site chrome ────────────────────────────────────────────────────── */}
        <section>
          <SectionHead
            id="chrome"
            title="Site chrome"
            blurb="Global behaviors defined once in tokens.css (formerly duplicated in every page's CSS)."
          />
          <div className="space-y-8 max-w-[46rem]">
            <div className="rounded-card border border-earl-grey-60 p-6">
              <p className="text-[14px] font-medium mb-2">Text selection</p>
              <p className={type_.bodySM}>
                Select this sentence — the highlight is{" "}
                <span className="font-mono text-[13px]">ember #d14424</span> with white
                text, site-wide.
              </p>
            </div>

            <div className="rounded-card border border-earl-grey-60 p-6">
              <p className="text-[14px] font-medium mb-2">Nav dropdown hover</p>
              <p className={`${type_.bodySM} text-smoke mb-4`}>
                Desktop only (≥992px): hovering a <CodeChip>.dropdown-trigger</CodeChip>{" "}
                sweeps a glow-50 underline in from the left.
              </p>
              <span className="dropdown-trigger inline-block text-[1.05rem] cursor-pointer">
                Hover me — Product
              </span>
            </div>

            <div className="rounded-card border border-earl-grey-60 p-6">
              <p className="text-[14px] font-medium mb-2">Logo marquee</p>
              <p className={`${type_.bodySM} text-smoke mb-4`}>
                <CodeChip>.scroll</CodeChip> (80s linear loop) and{" "}
                <CodeChip>.reverse</CodeChip> drive the logo strips (LogoMarquee).
              </p>
              <div className="overflow-hidden whitespace-nowrap rounded bg-earl-grey-40 py-3">
                <div className="scroll inline-flex gap-12 pr-12 text-smoke text-[14px]">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i}>MYCROFT&nbsp;·&nbsp;SOC&nbsp;2&nbsp;·&nbsp;ISO&nbsp;27001&nbsp;·&nbsp;HIPAA&nbsp;·&nbsp;GDPR&nbsp;·</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-earl-grey-60 pt-8 pb-4 text-[12px] text-smoke">
          Tokens: <CodeChip>src/app/tokens.css</CodeChip> ·{" "}
          <CodeChip>src/lib/tokens.ts</CodeChip> — this page is noindexed and not in
          the sitemap.
        </footer>
      </main>
    </div>
  );
}
