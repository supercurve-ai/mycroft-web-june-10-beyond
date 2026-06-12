---
description: Publish your changes to the live website
allowed-tools: Bash
---

Publish the user's current changes to the live website. This makes their changes public.

Pushing to `main` triggers Vercel to auto-deploy to production — so publishing here is just a git
push, NOT a `vercel --prod` command (that would double-deploy). Use `/preview` for a private
shareable link beforehand; `/publish` is the live, public step.

Steps:
1. Run `git status` and `git diff --stat` to see what changed.
2. Briefly tell the user, in plain English, what is about to go live (e.g. "This will publish your
   edits to the homepage headline and the new blog post").
3. Quickly sanity-check that nothing is obviously broken — if there's any doubt the site builds,
   run `pnpm build` and stop if it fails (explain the problem simply and offer to fix it).
4. Stage everything: `git add -A`.
5. Commit with a short, plain-English message describing the change (no jargon, no "Co-Authored-By"
   footer needed for her edits — keep it human, e.g. `Update homepage headline and add SOC 2 post`).
6. Push to `main`: `git push origin main`.
7. Tell the user it's published and that the live site updates automatically within a minute or two.
   If a production URL is known, give it to them.

If the push fails (e.g. needs a pull first), explain it simply and handle it — don't dump raw git
errors on her.
