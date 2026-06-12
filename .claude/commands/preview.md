---
description: Create a private preview link to share before going live
allowed-tools: Bash
---

Create a shareable preview of the user's current changes — a private link she can send to someone
for review **before** anything goes to the live website.

Steps:
1. Make sure her work is saved first: if there are uncommitted changes, `git add -A` and
   `git commit` with a short plain-English message (so the preview matches what's saved).
2. Build a preview deployment with the Vercel CLI: run `vercel` (NOT `--prod`). This uploads the
   current code and creates a private preview. It prints a URL ending in `.vercel.app`.
3. Capture that preview URL from the output and give it to her in plain, friendly English, e.g.:
   *"Here's your private preview link to share for review — this is NOT live yet:
   https://mycroft-website-xxxx.vercel.app. When you're ready to make it live, use /publish."*
4. If the command fails because the project isn't linked yet, tell her the one-time Vercel setup
   still needs to be done by the technical person — don't try to log in or link yourself.

Important: `/preview` never makes changes live. Only `/publish` does that.
