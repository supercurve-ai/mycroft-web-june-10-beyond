"use client";

import { useEffect } from "react";

/**
 * Re-implements Webflow's runtime interactions in plain React/DOM — NO
 * webflow.js, NO jQuery (PRD section B, decision (a)). Mounted once per page; it
 * scans for Webflow's standard widget classes after hydration and wires up:
 *
 *   • scroll-reveal  (.wf-reveal)            — IX2 "scroll into view" fade/slide
 *                                              (desktop only — on mobile the
 *                                              elements render in final state)
 *   • tabs           (.w-tabs)               — .w-tab-link ↔ .w-tab-pane
 *   • sliders        (.w-slider)             — arrows + dots + autoplay + swipe,
 *                                              works for 1-per-view AND
 *                                              N-per-view carousels
 *   • lightbox       (.w-lightbox)           — click thumbnail → fullscreen overlay
 *
 * The site nav's dropdowns and hamburger menu are NOT wired here — SiteNav is
 * a self-contained client component that manages them with React state.
 *
 * Behavior is approximate, not pixel/timing-exact (accepted tradeoff — see the
 * product requirements). Everything is idempotent and cleans up on unmount.
 */
// One wiring is active at a time, app-wide. Client-side navigation can keep
// widget DOM (with its data-wf-* markers) alive across page swaps, and the
// mount order of the old and new page's instance isn't guaranteed — so each
// mount tears down the previous wiring and rewires from scratch, and an
// out-of-order unmount of the old instance must not kill the new wiring.
let activeTeardown: (() => void) | null = null;

export function WebflowInteractions() {
  useEffect(() => {
    activeTeardown?.();
    const cleanups: Array<() => void> = [];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Webflow's mobile-landscape breakpoint. On mobile, scroll animations are
    // disabled entirely: elements just render in their final state
    // (iteration-2 req 11). The CSS media query covers paint-before-JS too.
    const mobile = window.matchMedia("(max-width: 767px)").matches;

    // ── scroll reveals ───────────────────────────────────────────────────────
    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>(".wf-reveal:not([data-wf-revealed])"),
    );
    if (reveals.length) {
      reveals.forEach((el) => el.setAttribute("data-wf-revealed", ""));
      cleanups.push(() =>
        reveals.forEach((el) => el.removeAttribute("data-wf-revealed")),
      );
      if (reduce || mobile) {
        reveals.forEach((el) => el.classList.add("is-revealed"));
      } else {
        // IX2's SCROLL_INTO_VIEW reveals are all one-shot on the original site
        // (every one of the 108 events has loop:false + playInReverse:false):
        // the element animates in once when it first enters the viewport and
        // then stays put — it does NOT reset or replay when scrolled away and
        // back. So we reveal at the threshold and stop observing it.
        const io = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-revealed");
                io.unobserve(entry.target);
              }
            }
          },
          { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
        );
        reveals.forEach((el) => io.observe(el));
        cleanups.push(() => io.disconnect());
      }
    }

    // ── scroll scrubs (IX2 "while scrolling in view") ────────────────────────
    // Unlike .wf-reveal (threshold-triggered), these elements' opacity/
    // translateX are a pure function of scroll position, so the animation runs
    // in reverse when scrolling back up — matching the original
    // SCROLLING_IN_VIEW continuous actions. Progress: 0 = element top at viewport bottom, 100 = element
    // bottom at viewport top. data-wf-scrub="start,end" gives the keyframe
    // range in progress-%; values are exponentially smoothed (IX2 smoothing
    // 50). Opacity interpolates linearly and the offset eases in; the
    // from-state (axis, distance, start-opacity) comes from data-wf-scrub-from
    // — default x/50px/0 = a-30/31/32, the home features tiles use y/15%/0.5 =
    // a-29 "Move-fade-up". The slide can run over its own window via
    // data-wf-scrub-move="start,end" (default = the fade window); a-50/51
    // (product columns) slide x over 0–25% but fade over 0–15%. On pages too
    // short to scroll the element all
    // the way past the viewport top (e.g. /demo, where the badges sit just
    // above the footer), the end keyframe is capped at the progress reachable
    // at max scroll so the animation still completes at the page bottom.
    const scrubs = Array.from(
      document.querySelectorAll<HTMLElement>(".wf-scrub:not([data-wf-scrubbed])"),
    );
    if (scrubs.length && !reduce && !mobile) {
      scrubs.forEach((el) => el.setAttribute("data-wf-scrubbed", ""));
      const items = scrubs.map((el) => {
        const [oStart = 0, oEnd = 100] = (el.dataset.wfScrub ?? "")
          .split(",")
          .map(Number);
        // The slide can run over its own keyframe window, independent of the
        // fade — a-50/51 (product columns) slide x over 0–25% but fade over
        // 0–15%. Defaults to the fade window (a-30/31/32, where they match).
        const [mStart = oStart, mEnd = oEnd] = (el.dataset.wfScrubMove ?? "")
          .split(",")
          .filter((s) => s !== "")
          .map(Number);
        // from-state "axis,distance,opacity"; defaults reproduce a-30/31/32
        // (slide-in-from-right: x 50px → 0, opacity 0 → 1)
        const [axis = "x", dist = "50px", fromOp = "0"] = (
          el.dataset.wfScrubFrom ?? ""
        ).split(",");
        const distNum = parseFloat(dist);
        const distUnit = dist.replace(/[-.\d]/g, "") || "px";
        return {
          el,
          oStart,
          oEnd,
          mStart,
          mEnd,
          ov: -1,
          mv: -1,
          axis,
          distNum,
          distUnit,
          fromOp: Number(fromOp),
        };
      });
      const easeIn = (t: number) => t * t;
      let raf = 0;
      const frame = () => {
        const vh = window.innerHeight;
        const scrollLeft = Math.max(
          0,
          document.documentElement.scrollHeight - vh - window.scrollY,
        );
        let settling = false;
        for (const it of items) {
          const r = it.el.getBoundingClientRect();
          const progress = ((vh - r.top) / (vh + r.height)) * 100;
          // cap so an element that can't scroll fully past the viewport top
          // (e.g. just above the footer) still completes by the page bottom
          const cap = progress + (scrollLeft / (vh + r.height)) * 100;
          const advance = (start: number, end: number, cur: number) => {
            const e = Math.min(end, cap);
            const target =
              e > start
                ? Math.min(1, Math.max(0, (progress - start) / (e - start)))
                : progress > start
                  ? 1
                  : 0;
            let next = cur < 0 ? target : cur + (target - cur) * 0.5;
            if (Math.abs(target - next) < 0.001) next = target;
            else settling = true;
            return next;
          };
          const ov = advance(it.oStart, it.oEnd, it.ov);
          const mv = advance(it.mStart, it.mEnd, it.mv);
          if (ov !== it.ov) {
            it.ov = ov;
            it.el.style.opacity = String(it.fromOp + (1 - it.fromOp) * ov);
          }
          if (mv !== it.mv) {
            it.mv = mv;
            const off = `${it.distNum * (1 - easeIn(mv))}${it.distUnit}`;
            it.el.style.transform =
              it.axis === "y"
                ? `translate3d(0px, ${off}, 0px)`
                : `translate3d(${off}, 0px, 0px)`;
          }
        }
        raf = settling ? requestAnimationFrame(frame) : 0;
      };
      const kick = () => {
        if (!raf) raf = requestAnimationFrame(frame);
      };
      window.addEventListener("scroll", kick, { passive: true });
      window.addEventListener("resize", kick);
      kick();
      cleanups.push(() => {
        window.removeEventListener("scroll", kick);
        window.removeEventListener("resize", kick);
        if (raf) cancelAnimationFrame(raf);
        scrubs.forEach((el) => el.removeAttribute("data-wf-scrubbed"));
      });
    }

    // ── frameworks hero badge mouse-parallax (IX2 a-119) ────────────────────
    // MOUSE_MOVE over the hero section drives the badge (+16px full-range on
    // both axes) and the dot grid (−8px) with exponential smoothing; the
    // resting state is mid-range (mouse at section center), which is also the
    // frozen inline transform the capture shipped — so no-JS/mobile/reduced
    // motion all hold that pose.
    const heroCircles = Array.from(
      document.querySelectorAll<HTMLElement>(".fw-hero-circle:not([data-wf-parallax])"),
    );
    if (heroCircles.length && !reduce && !mobile) {
      heroCircles.forEach((circle) => {
        const section = circle.closest<HTMLElement>("section");
        const badge = circle.querySelector<HTMLElement>(".fw-hero-badge-img");
        const dots = circle.querySelector<HTMLElement>(".fw-hero-dots");
        if (!section || !badge || !dots) return;
        circle.setAttribute("data-wf-parallax", "");
        let tx = 0.5, ty = 0.5, cx = 0.5, cy = 0.5;
        let raf = 0;
        const frame = () => {
          cx += (tx - cx) * 0.5;
          cy += (ty - cy) * 0.5;
          if (Math.abs(tx - cx) < 0.001 && Math.abs(ty - cy) < 0.001) {
            cx = tx;
            cy = ty;
            raf = 0;
          } else {
            raf = requestAnimationFrame(frame);
          }
          badge.style.transform = `translate3d(${16 * cx}px, ${16 * cy}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
          dots.style.transform = `translate3d(${-8 * cx}px, ${-8 * cy}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        };
        const kick = () => {
          if (!raf) raf = requestAnimationFrame(frame);
        };
        const onMove = (e: MouseEvent) => {
          const r = section.getBoundingClientRect();
          tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
          ty = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
          kick();
        };
        const onLeave = () => {
          tx = 0.5;
          ty = 0.5;
          kick();
        };
        section.addEventListener("mousemove", onMove);
        section.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          circle.removeAttribute("data-wf-parallax");
          section.removeEventListener("mousemove", onMove);
          section.removeEventListener("mouseleave", onLeave);
          if (raf) cancelAnimationFrame(raf);
        });
      });
    }

    // ── tabs ─────────────────────────────────────────────────────────────────
    document
      .querySelectorAll<HTMLElement>(".w-tabs:not([data-wf-tabs])")
      .forEach((tabs) => {
        tabs.setAttribute("data-wf-tabs", "");
        cleanups.push(() => tabs.removeAttribute("data-wf-tabs"));
        const links = Array.from(
          tabs.querySelectorAll<HTMLElement>(".w-tab-link"),
        );
        const panes = Array.from(
          tabs.querySelectorAll<HTMLElement>(".w-tab-pane"),
        );
        links.forEach((link) => {
          const onClick = (e: Event) => {
            e.preventDefault();
            const key = link.getAttribute("data-w-tab");
            links.forEach((l) =>
              l.classList.toggle("w--current", l === link),
            );
            panes.forEach((p) =>
              p.classList.toggle(
                "w--tab-active",
                p.getAttribute("data-w-tab") === key,
              ),
            );
          };
          link.addEventListener("click", onClick);
          cleanups.push(() => link.removeEventListener("click", onClick));
        });
      });

    // ── sliders / carousels ──────────────────────────────────────────────────
    // The capture freezes webflow.js's runtime state (inline transforms /
    // per-slide widths), which is why a dead carousel shows only its first
    // slide. We reset that state, lay the slides out in a flex row inside the
    // mask, and translate by the target slide's real offset — so carousels that
    // show several slides at once work as well as 1-per-view ones.
    document
      .querySelectorAll<HTMLElement>(".w-slider:not([data-wf-slider])")
      .forEach((slider) => {
        slider.setAttribute("data-wf-slider", "");
        const mask = slider.querySelector<HTMLElement>(".w-slider-mask");
        const slides = Array.from(
          slider.querySelectorAll<HTMLElement>(".w-slide"),
        );
        if (!mask || slides.length < 2) return;

        mask.style.overflow = "hidden";
        mask.style.display = "flex";
        slides.forEach((s) => {
          s.style.flex = "0 0 auto";
          s.style.transform = "";       // clear frozen runtime transform
          s.style.transition = "";
        });

        // last index from which scrolling further would show empty space
        const maxIndex = () => {
          const total = slides.reduce((w, s) => w + s.offsetWidth, 0);
          const overflow = Math.max(0, total - mask.clientWidth);
          let acc = 0;
          for (let i = 0; i < slides.length; i++) {
            if (acc >= overflow - 1) return i;
            acc += slides[i].offsetWidth;
          }
          return slides.length - 1;
        };

        // dots: webflow.js generates them at runtime — if the capture missed
        // them, build one per reachable position so navigation always exists.
        const nav = slider.querySelector<HTMLElement>(".w-slider-nav");
        let dots = Array.from(
          slider.querySelectorAll<HTMLElement>(".w-slider-dot"),
        );
        if (nav && dots.length === 0) {
          for (let i = 0; i <= maxIndex(); i++) {
            const d = document.createElement("div");
            d.className = "w-slider-dot";
            nav.appendChild(d);
          }
          dots = Array.from(nav.querySelectorAll<HTMLElement>(".w-slider-dot"));
        }

        let index = 0;
        const render = () => {
          const offset = slides[index].offsetLeft - slides[0].offsetLeft;
          slides.forEach((s) => {
            s.style.transition = reduce ? "none" : "transform 0.5s ease";
            s.style.transform = `translateX(${-offset}px)`;
          });
          dots.forEach((d, i) => d.classList.toggle("w-active", i === index));
        };
        const go = (n: number) => {
          const max = maxIndex();
          index = n < 0 ? max : n > max ? 0 : n;   // wrap around
          render();
        };

        const left = slider.querySelector<HTMLElement>(".w-slider-arrow-left");
        const right = slider.querySelector<HTMLElement>(".w-slider-arrow-right");
        const onLeft = (e: Event) => {
          e.preventDefault();
          stopAuto();
          go(index - 1);
        };
        const onRight = (e: Event) => {
          e.preventDefault();
          stopAuto();
          go(index + 1);
        };
        left?.addEventListener("click", onLeft);
        right?.addEventListener("click", onRight);
        dots.forEach((d, i) => {
          const onDot = () => {
            stopAuto();
            go(i);
          };
          d.addEventListener("click", onDot);
          cleanups.push(() => d.removeEventListener("click", onDot));
        });

        // swipe (pointer events cover touch + mouse drag)
        let downX: number | null = null;
        const onDown = (e: PointerEvent) => {
          downX = e.clientX;
        };
        const onUp = (e: PointerEvent) => {
          if (downX === null) return;
          const dx = e.clientX - downX;
          downX = null;
          if (Math.abs(dx) < 40) return;
          stopAuto();
          go(index + (dx < 0 ? 1 : -1));
        };
        mask.addEventListener("pointerdown", onDown);
        mask.addEventListener("pointerup", onUp);

        // autoplay — Webflow puts the config on the .w-slider element
        let timer: ReturnType<typeof setInterval> | null = null;
        const auto = slider.getAttribute("data-autoplay");
        if ((auto === "true" || auto === "1") && !reduce) {
          const delay = Number(slider.getAttribute("data-delay")) || 4000;
          timer = setInterval(() => go(index + 1), delay);
        }
        const stopAuto = () => {
          if (timer) {
            clearInterval(timer);
            timer = null;
          }
        };

        const onResize = () => render();
        window.addEventListener("resize", onResize);
        cleanups.push(() => {
          slider.removeAttribute("data-wf-slider");
          left?.removeEventListener("click", onLeft);
          right?.removeEventListener("click", onRight);
          mask.removeEventListener("pointerdown", onDown);
          mask.removeEventListener("pointerup", onUp);
          window.removeEventListener("resize", onResize);
          stopAuto();
        });
        render();
      });

    // ── lightbox (single-image overlay) ──────────────────────────────────────
    document
      .querySelectorAll<HTMLElement>(".w-lightbox:not([data-wf-lb])")
      .forEach((lb) => {
        lb.setAttribute("data-wf-lb", "");
        const onClick = (e: Event) => {
          const img = lb.querySelector<HTMLImageElement>("img");
          const src = img?.currentSrc || img?.src;
          if (!src) return;
          e.preventDefault();
          const overlay = document.createElement("div");
          overlay.className = "wf-lightbox-overlay";
          const full = document.createElement("img");
          full.src = src;
          overlay.appendChild(full);
          overlay.addEventListener("click", () => overlay.remove());
          document.body.appendChild(overlay);
        };
        lb.addEventListener("click", onClick);
        cleanups.push(() => {
          lb.removeAttribute("data-wf-lb");
          lb.removeEventListener("click", onClick);
        });
      });

    const teardown = () => cleanups.forEach((fn) => fn());
    activeTeardown = teardown;
    return () => {
      // only tear down if a newer instance hasn't already taken over
      if (activeTeardown === teardown) {
        activeTeardown = null;
        teardown();
      }
    };
  }, []);

  return null;
}
