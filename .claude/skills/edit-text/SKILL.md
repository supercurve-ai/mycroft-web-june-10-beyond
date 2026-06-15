---
name: edit-text
description: Find and change wording on the site (a headline, paragraph, button label, menu item, FAQ answer) safely — locating the right source file from what the user sees on the page, editing without breaking line-wrapping, and showing before/after. Use when the user says "change the headline to…", "fix this typo", "reword this section", or "update the text that says X".
---

# Edit text / copy

A non-technical user describes copy by **what they see on the page**, not by
file. The job is to find the right source, change exactly the intended words,
and not break anything subtle (line-wrapping, non-breaking spaces, a word that
appears in several places). This skill is for wording changes — for swapping an
image use **swap-image**, for metadata/SEO text use **seo**.

## 1. Locate the text

Search the source for a distinctive fragment of the visible text. Quote a short,
unique phrase rather than the whole sentence:

```
grep -rn "distinctive phrase" src/
```

Where copy usually lives:
- **Page sections** — `src/app/<route>/_sections/*.tsx`
- **Framework pages** — `src/app/frameworks/<slug>/content.tsx`
- **Product subpages** — `src/app/product/<slug>/content.tsx`
- **Blog / case studies** — `src/content/blog/*.mdx`, `src/content/case-studies/*.mdx`
- **Nav / footer / shared buttons** — `src/components/site-nav.tsx`, `site-footer.tsx`, CTA components
- **Page title / search snippet** — the `metadata` block in `page.tsx` (use **seo**)

If grep finds **multiple matches**, the same words may appear on several pages.
Confirm with the user which one they mean before editing — or edit all, if
that's the intent. Curly quotes/apostrophes (`’ “ ”`) and `&amp;` in the source
can make a literal search miss; try a shorter fragment or the ASCII form.

## 2. Watch the non-breaking-space trap

Ported Webflow copy hides **non-breaking spaces (U+00A0)** that look exactly
like normal spaces in the editor. If you retype a phrase with normal spaces, the
line-wrapping changes silently. Before editing a phrase, check it:

```
grep -P '\xC2\xA0' <file>
```

Preserve existing U+00A0 characters when you edit around them. When the user
wants words to stay together on one line (e.g. "SOC 2"), the site's convention
is a `whitespace-nowrap` span (see `<Soc2/>` in `frameworks/soc2/content.tsx`),
not a manual nbsp.

## 3. Make the change

- Edit only the words requested; keep surrounding markup, classes, `<br/>`,
  curly quotes and entities intact.
- Match the existing punctuation style (this site uses curly quotes `’ “ ”` and
  em dashes in body copy).
- For a button or menu label, remember it may be shared across pages — changing
  it in `site-nav.tsx`/a shared component changes it everywhere.

## 4. Show before / after

Show the user the old text and the new text plainly so they can confirm it's the
right spot and wording — they can't read the diff. If a dev server is running
(`/start`), point them at the page to see it live.

## Verify

- If you touched a `.tsx`/`.ts` file, `pnpm build` should still pass (a broken
  edit — unbalanced tag/quote — fails the build). Small `.mdx` body edits are
  lower-risk but still build-checked before publishing.

## ⚠️ Required: report

End with a short report:

- **Where** the text was (file + which page it shows on).
- **Before → after** of the exact wording changed.
- **Multiple locations** — if the phrase appeared elsewhere, say whether you
  changed one or all, and which.
- **Shared element warning** — if it was a nav/footer/button label that now
  changes site-wide.
- **NBSP / wrapping** — note if you preserved non-breaking spaces or if wrapping
  may shift.
