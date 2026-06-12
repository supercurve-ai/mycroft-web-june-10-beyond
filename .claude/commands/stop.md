---
description: Stop the website preview on your computer
allowed-tools: Bash
---

Stop the local preview of the website (the dev server running on port 3000).

Steps:
1. Check whether anything is running on port 3000
   (`lsof -ti :3000` returns one or more process IDs).
2. If something is running, stop it with `lsof -ti :3000 | xargs kill -9`.
3. Confirm nothing is responding on http://localhost:3000 anymore
   (`curl -s -o /dev/null -w "%{http_code}" http://localhost:3000` no longer returns 200).
4. Tell the user, in plain friendly English, that the preview has been stopped. If it wasn't
   running in the first place, just let them know there was nothing to stop. Remind them they can
   start it again any time with `/start`.

Do not explain the technical details unless they ask.
