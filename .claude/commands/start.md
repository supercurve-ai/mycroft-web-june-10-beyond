---
description: Start the website preview on your computer
allowed-tools: Bash
---

Start the local preview of the website so the user can see their changes.

Steps:
1. Check whether the dev server is already running on port 3000
   (`curl -s -o /dev/null -w "%{http_code}" http://localhost:3000` returns 200).
2. If it is NOT already running, start it in the background with `pnpm dev`.
3. Wait a few seconds, then confirm it responds on http://localhost:3000.
4. Tell the user, in plain friendly English, that their site is ready to preview and to open
   **http://localhost:3000** in their browser. Remind them it auto-refreshes whenever a change is
   made — they don't need to restart anything.

Do not explain the technical details unless they ask.
