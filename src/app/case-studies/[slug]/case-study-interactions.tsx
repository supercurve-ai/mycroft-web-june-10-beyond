"use client";

import { useEffect } from "react";

/**
 * Client-side wiring for case-study pages — a faithful port of the page's
 * original inline scripts:
 *  - builds the table of contents from the article's h2/h3/h4 headings,
 *  - highlights the TOC entry for the section currently in view
 *    (IntersectionObserver, same rootMargin/threshold as the original),
 *  - smooth-scrolls on TOC clicks and offsets direct #hash navigation,
 *  - fills in the share-button URLs and wires the copy-link button.
 */
export function CaseStudyInteractions() {
  useEffect(() => {
    const article = document.getElementById("single-article");
    const tocContainer = document.getElementById("toc");
    if (!article || !tocContainer) return;

    // ---- Build the TOC from the article's visible headings
    const headings = Array.from(article.querySelectorAll<HTMLElement>("h2, h3, h4"))
      .filter((h) => h.offsetParent !== null);
    const ul = document.createElement("ul");
    headings.forEach((heading) => {
      const title = (heading.textContent ?? "").trim();
      const anchorId = `toc-${title.toLowerCase().replace(/\s+/g, "-")}`;
      heading.id = anchorId;
      const li = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.textContent = title;
      anchor.href = `#${anchorId}`;
      li.appendChild(anchor);
      ul.appendChild(li);
    });
    tocContainer.appendChild(ul);

    const tocItems = Array.from(tocContainer.querySelectorAll<HTMLAnchorElement>("a"));

    // ---- Smooth scroll on TOC click (active state is the observer's job)
    const onTocClick = (event: Event) => {
      event.preventDefault();
      const href = (event.currentTarget as HTMLAnchorElement).getAttribute("href") ?? "";
      document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    tocItems.forEach((item) => item.addEventListener("click", onTocClick));

    // ---- Highlight the TOC entry for the section in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          tocItems.forEach((item) =>
            item.classList.toggle("active", item.getAttribute("href") === `#${id}`),
          );
        });
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0.1 },
    );
    headings.forEach((h) => observer.observe(h));

    // ---- Offset direct #hash navigation so headings clear the nav
    const offsetAnchor = () => {
      if (location.hash.length === 0) return;
      const target = document.getElementById(location.hash.substring(1));
      if (target) {
        const offset = target.getBoundingClientRect().top - 100;
        window.scrollTo(window.scrollX, window.scrollY + offset);
      }
    };
    window.addEventListener("hashchange", offsetAnchor);
    const offsetTimer = window.setTimeout(offsetAnchor, 1);

    // ---- Share buttons
    const title = encodeURIComponent(document.title);
    const url = encodeURIComponent(window.location.href);
    const setShare = (sel: string, href: string) => {
      const a = document.querySelector<HTMLAnchorElement>(sel);
      if (a) {
        a.href = href;
        a.target = "_blank";
      }
    };
    setShare("[data-share-linkedin]",
      `https://www.linkedin.com/shareArticle?mini=true&url=${url}%2F&title=${title}&summary=`);
    setShare("[data-share-twitter]", `https://twitter.com/share?url=${url}&text=${title}`);
    setShare("[data-share-facebook]",
      `https://www.facebook.com/sharer/sharer.php?u=${url}%2F&title=${title}%3F`);

    const copyBtn = document.querySelector<HTMLAnchorElement>(".share-copy-btn");
    let copiedTimer = 0;
    const onCopy = (e: Event) => {
      e.preventDefault();
      navigator.clipboard.writeText(window.location.href).then(() => {
        copyBtn?.classList.add("copied");
        copiedTimer = window.setTimeout(() => copyBtn?.classList.remove("copied"), 2000);
      });
    };
    copyBtn?.addEventListener("click", onCopy);

    return () => {
      observer.disconnect();
      tocItems.forEach((item) => item.removeEventListener("click", onTocClick));
      window.removeEventListener("hashchange", offsetAnchor);
      window.clearTimeout(offsetTimer);
      window.clearTimeout(copiedTimer);
      copyBtn?.removeEventListener("click", onCopy);
      tocContainer.innerHTML = "";
    };
  }, []);

  return null;
}
