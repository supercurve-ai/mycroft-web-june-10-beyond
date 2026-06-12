---
description: Undo your most recent change
allowed-tools: Bash
---

Undo the user's most recent change(s). Use this when she says she made a mistake or wants to go back.

First, figure out what she wants to undo:

- **If she has unpublished edits** (changes shown by `git status` that haven't been published yet):
  describe what those edits are, confirm she wants to throw them away, then discard them with
  `git checkout -- <files>` (or `git restore <files>`). This returns the files to the last published
  version.

- **If everything is already published** and she wants to undo the last *published* change:
  show her the last commit (`git log -1 --stat`), confirm, then revert it with `git revert --no-edit HEAD`
  and `git push origin main` so the live site goes back too.

Always:
1. Tell her in plain English exactly what will be undone *before* doing it, and get a yes.
2. Never discard work without confirming first.
3. After undoing, tell her to refresh http://localhost:3000 to see the reverted version.
