# Editing your website — your cheat sheet

You don't need to write any code. You make changes by **talking to Claude Code in plain English**,
right inside the **Claude desktop app**. Here's everything you need.

---

## The 5-minute daily routine

1. **Open the Claude desktop app** and open this project (your website) in Claude Code.
2. Type **`/start`** and press Enter. Wait until it says the site is ready, then open
   **http://localhost:3000** in your web browser. Leave that browser tab open.
3. **Tell Claude what you want changed**, in normal English. Some examples:
   - *"Change the homepage headline to 'Security automated for enterprise standards'."*
   - *"On the homepage, make the 'Book a demo' button green."*
   - *"Add a new blog post titled 'Getting SOC 2 ready'. Here's the text: …"*
   - *"Fix the typo in the second paragraph of the latest blog post."*
4. **Watch your browser** — it refreshes by itself the moment Claude saves. No need to reload.
5. **Not quite right? Just say so:** *"a darker green"*, *"move that section up"*, *"make it shorter"*.
   Keep going until you love it.
6. **Want someone to check it first?** Type **`/preview`**. Claude gives you a private link
   (ending in `.vercel.app`) you can send to a colleague. It is **not live** — it's just for review.
   Make tweaks and run `/preview` again any time for a fresh link.
7. When you're happy, type **`/publish`**. This puts your changes on the **live website**
   (it updates within a minute or two).

---

## Your commands (type these into Claude Code)

| Command | What it does |
| --- | --- |
| **`/start`** | Starts the preview so you can see the site at http://localhost:3000 |
| **`/stop`** | Stops the preview when you're done |
| **`/preview`** | Creates a **private link** to share for review — *not live yet* |
| **`/publish`** | Sends your changes to the **live** website |
| **`/undo`** | Takes back your most recent change (it'll ask you to confirm first) |
| **`/guide`** | Shows this cheat sheet right in the chat |

You can also just *talk* — you don't have to use commands. Saying "publish this" or
"undo that last change" works too.

---

## Tips for getting great results

- **Be specific about *where*.** "On the homepage…", "In the blog post about questionnaires…",
  "In the top menu…". The more specific, the better Claude finds the right spot.
- **One change at a time is easiest** when you're learning, but you can ask for several at once.
- **Paste in your text.** For new blog posts or rewrites, just paste the full text and let Claude
  format it.
- **You can't really break anything permanently.** If something looks wrong, say *"undo that"* or
  *"that's not right, go back"*. Nothing is live until you `/publish`.
- **Preview first, publish second.** Always look at http://localhost:3000 and like what you see
  before you `/publish`.

---

## If something seems stuck

- The browser page won't load at localhost:3000 → type `/start` again.
- A change didn't appear → make sure you saw Claude say it finished, then refresh the browser once.
- Anything confusing → just ask Claude: *"is the preview running?"* or *"what did you just change?"*.
  It's there to help in plain English.
