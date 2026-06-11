# Tasks

<!--
  /tasks            show this list
  /tasks next       Claude starts the next unchecked task (flips it to ⏳)
  /tasks add <text> add a task
  /tasks done <n>   mark task n complete once YOU have verified it

  - [ ] = todo   - [⏳] = in progress   - [x] = done (user-verified)
-->
# Coding agent tasks (for you claude code)
-[x] local dev build, react not hydrating.  It works on prod build though (actually running the build command locally).  Causes these symptoms 
  - [x] Pressing the hamburger menu on mobile on a physical phone is not responsive to touch but it does work on desktop in the mobile view
  - [x] Lottie animation on mobile on the homepage does not show up. Check all other pages as well that have Lottie as they probably don't show up either.
- [x] Create token system: tokens.css and tokens.ts
- [x] Mobile sitenav needs animation on open and close. Check existing implementation on mycroft.io. When testing on web at a mobile size, opening it also makes the scrollbar disappear on our version, causing a slight layout shift
- [x] No bullet points are showing in any blog posts

- [ ] react tree hydration error on mobile: "A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component."  Check if on web too
- [ ] mobile scroll behaviour when sitenav open doesnt match web
- [ ] Animations on scroll up for elements.  Animations play when scroll down and up and initially pages were missing animations on scroll up events.  Please check each page to see if all the animations are correct
- [ ] mobile hamburger menu, when its open you can see the right and left edges of the middle line of the hamburger menu behind the X
- [ ] Table in <https://www.mycroft.io/blog/compliance-automation-for-startups> under header "Checklist: What to look for in compliance automation" has new formatting but it doesn't look good
- [ ] Staging environment.  How can I easily setup a staging environent for them on vercel.  The requirement is that they need to be able to send someone else a preview link before publishing.  Branch previews may be the solution
- [ ] Figure out how to switch over from Webflow to the new website without any downtime on Tuesday
- [ ] Test SEO on each page — use ngrok tunnel (you tell me if you can compare SEO rich text results on this version to live mycroft.io)
- [ ] List recommended improvements and impact
- [ ] Make sure codebase is clean
- [ ] Figure out how to publish a preview-only link on Vercel so it's not public and not indexed by Google. Make it password protected

# new tasks
- [] if I close sitenav with product or solutions open, when I reopen it, they should be closed.  right now they stay open
- [] site wide meta data.  put on list of decisions I made to review with mycroft

# Claude code tasks after initial task list is finished.  dont start on this now claude
- [ ] Look through repo to see what else to clean up
- [ ] Change all file names to kebab-case
- [ ] Fix react/no-unescaped-entities linting issues and turn the rule back on
- [ ] Fix @next/next/no-img-element linting issues and turn the rule back on
- [ ] Ask Claude what else I could be missing
- [ ] Convert to Tailwind

# Manual tasks for Benji
- [ ] full manual QA test by human of web
- [ ] full manual QA test by human on actual mobile device
- [ ] Remove TASKS.md from repo (must confirm with Benji before doing this to make sure we're actually finished)
- [ ] Send Nida the preview link
- [ ] Check breakpoints
- [ ] Test HubSpot integration
- [ ] Test Zapier integration (will need login info)
- [ ] Create a CookieYes account and test that it works
- [ ] Make sure `mycroft.io` and `www.mycroft.io` are both working (www is the default)
- [ ] Look through all settings on the Webflow website
- [ ] Double check all ThirdPartyScripts.tsx
- [ ] Double check list of redirects and test them (see <https://webflow.com/dashboard/sites/mycroft-dev/publishing>)
- [ ] /security needs to redirect but I haven't figured out how it works yet. When I go to it, it redirects to an app.mycroft page and then to a trust. page
- [ ] remove allowedDevOrigins from next.config.mjs
- [ ] remove bypassPermissions from defaultMode in settings.json for claude.  Check repo for any other security risks