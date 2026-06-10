"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { NavLink } from "./NavLink";

/* Webflow's captured IX2 pre-animation states. webflow-shared.css animates
   these to their final state when a dropdown opens (.wf-open rules) or on
   hover (.product-tile-hov / .nav-text-highlight rules). */
const frozenIcon: CSSProperties = { transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" };
const tileHidden: CSSProperties = { transform: "translate3d(0px, 20px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d", opacity: 0 };
const hovHidden: CSSProperties = { opacity: 0, transform: "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" };
const highlightHidden: CSSProperties = { transform: "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" };

function ProductSubmenu() {
  return (
    <div className="submenu-product scrollable-submenu">
      <div className="label-wrapper desktop_only">
        <div className="submenu-label">
          Product
        </div>
      </div>
      <div className="w-layout-grid sub-product-grid">
        <NavLink href="/product" className="sub-product-tile overview w-inline-block" tabIndex={0} style={tileHidden}>
          <div className="product-tile-hed text_white">
            Product overview
          </div>
          <div className="eyebrow-small color_charcoal z_10 text_white">
            Learn more
          </div>
          <div className="product-tile-hov overview" style={hovHidden}></div>
        </NavLink>
        <NavLink href="/product/audit-and-compliance" className="sub-product-tile w-inline-block" tabIndex={0} style={tileHidden}>
          <div className="product-tile-hed">
            Audit & compliance
          </div>
          <div className="eyebrow-small color_charcoal z_10">
            Learn more
          </div>
          <div className="product-tile-hov" style={hovHidden}></div>
        </NavLink>
        <NavLink href="/product/cloud-security" className="sub-product-tile cloud w-inline-block" tabIndex={0} style={tileHidden}>
          <div className="product-tile-hed">
            Cloud security
          </div>
          <div className="eyebrow-small color_charcoal z_10">
            Learn more
          </div>
          <div className="product-tile-hov cloud" style={hovHidden}></div>
        </NavLink>
        <NavLink href="/product/app-security" className="sub-product-tile appsec w-inline-block" tabIndex={0} style={tileHidden}>
          <div className="product-tile-hed">
            App security
          </div>
          <div className="eyebrow-small color_charcoal z_10">
            Learn more
          </div>
          <div className="product-tile-hov appsec" style={hovHidden}></div>
        </NavLink>
        <NavLink href="/product/device-management" className="sub-product-tile device w-inline-block" tabIndex={0} style={tileHidden}>
          <div className="product-tile-hed">
            Device management
          </div>
          <div className="eyebrow-small color_charcoal z_10">
            Learn more
          </div>
          <div className="product-tile-hov device" style={hovHidden}></div>
        </NavLink>
        <NavLink href="/product/third-party-risk-management" className="sub-product-tile tprm w-inline-block" tabIndex={0} style={tileHidden}>
          <div className="product-tile-hed">
            Third-party risk management
          </div>
          <div className="eyebrow-small color_charcoal z_10">
            Learn more
          </div>
          <div className="product-tile-hov tprm" style={hovHidden}></div>
        </NavLink>
      </div>
    </div>
  );
}

function SolutionsSubmenu() {
  return (
    <div className="submenu-product scrollable-submenu">
      <div className="label-wrapper desktop_only">
        <div className="submenu-label">
          Frameworks
        </div>
      </div>
      <div className="w-layout-grid sub-solutions-grid">
        <NavLink href="/frameworks/soc2" className="solution-tile w-inline-block" tabIndex={0} style={tileHidden}>
          <img src="/assets/soc-2-badge.svg" loading="lazy" width="Auto" alt="" className="solution-icon" />
          <div>
            SOC 2
          </div>
        </NavLink>
        <NavLink href="/frameworks/gdpr" className="solution-tile w-inline-block" tabIndex={0} style={tileHidden}>
          <img src="/assets/gdpr-badge.svg" loading="lazy" width="Auto" alt="" className="solution-icon" />
          <div>
            GDPR
          </div>
        </NavLink>
        <NavLink href="/frameworks/pipeda" className="solution-tile row_child w-inline-block" tabIndex={0} style={tileHidden}>
          <img src="/assets/pipeda-badge.svg" loading="lazy" width="Auto" alt="" className="solution-icon" />
          <div>
            PIPEDA
          </div>
        </NavLink>
        <div id="w-node-_1202cf2e-6549-af6f-7a6b-50d1b7f45e02-e51a302e" className="mobile-hr"></div>
        <NavLink href="/frameworks/cmmc" className="solution-tile w-inline-block" tabIndex={0} style={tileHidden}>
          <img src="/assets/cmmc-badge.svg" loading="lazy" width="Auto" alt="" className="solution-icon" />
          <div>
            CMMC
          </div>
        </NavLink>
        <NavLink href="/frameworks/fedramp" className="solution-tile w-inline-block" tabIndex={0} style={tileHidden}>
          <img src="/assets/fedramp-badge.svg" loading="lazy" width="Auto" alt="" className="solution-icon" />
          <div>
            FedRAMP
          </div>
        </NavLink>
        <NavLink href="/frameworks/iso27001" className="solution-tile row_child w-inline-block" tabIndex={0} style={tileHidden}>
          <img src="/assets/iso-27001-badge.svg" loading="lazy" width="Auto" alt="" className="solution-icon" />
          <div>
            ISO 27001
          </div>
        </NavLink>
        <div id="w-node-_091afdd5-dbdf-64fe-4376-a4c1cb784ddd-e51a302e" className="mobile-hr"></div>
        <NavLink href="/frameworks/hipaa" className="solution-tile w-inline-block" tabIndex={0} style={tileHidden}>
          <img src="/assets/hipaa-badge.svg" loading="lazy" width="Auto" alt="" className="solution-icon" />
          <div>
            HIPAA
          </div>
        </NavLink>
        <NavLink href="/frameworks/cpra" className="solution-tile w-inline-block" tabIndex={0} style={tileHidden}>
          <img src="/assets/crpa-badge.svg" loading="lazy" width="Auto" alt="" className="solution-icon" />
          <div>
            CPRA/CCPA
          </div>
        </NavLink>
        <NavLink href="/frameworks/iso42001" className="solution-tile last_child w-inline-block" tabIndex={0} style={tileHidden}>
          <img src="/assets/iso-42001-badge.svg" loading="lazy" width="Auto" alt="" className="solution-icon" />
          <div>
            ISO42001
          </div>
        </NavLink>
      </div>
      <div className="sub-link-wrapper">
        <a href="https://trust.mycroft.io/" target="_blank" className="text-link xs_link w-inline-block" tabIndex={0}>
          <div>
            Trust center
          </div>
          <div className="arrow-icon-small xs_link w-embed" style={frozenIcon}>
            <svg id="a" data-name="mycroft-arrow_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10">
              <path d="M14.04,3.46c-1.33-1-2.19-2.62-2.58-3.46l-1.49.54c.39.92,1.17,2.46,2.5,3.69H0v1.54h12.48c-1.33,1.15-2.11,2.77-2.5,3.69l1.49.54c.39-.92,1.25-2.46,2.58-3.46.39-.31,1.17-.77,1.96-.92v-1.23c-.78-.15-1.57-.54-1.96-.92Z" style={{"fill": "currentColor"}}></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

function PrimaryLinks() {
  return (
    <>
      <div className="nav-link-item v3">
        <NavLink href="/partnerships" className="nav-link_v3 w-nav-link">
          Partnerships
        </NavLink>
        <div className="nav-text-highlight" style={highlightHidden}></div>
      </div>
      <div className="nav-link-item v3">
        <NavLink href="/resources" className="nav-link_v3 w-nav-link">
          Resources
        </NavLink>
        <div className="nav-text-highlight" style={highlightHidden}></div>
      </div>
      <div className="nav-link-item v3">
        <NavLink href="/pricing" className="nav-link_v3 w-nav-link">
          Pricing
        </NavLink>
        <div className="nav-text-highlight" style={highlightHidden}></div>
      </div>
      <div className="nav-link-item v3 last_child">
        <NavLink href="/about" className="nav-link_v3 w-nav-link">
          About
        </NavLink>
        <div className="nav-text-highlight" style={highlightHidden}></div>
      </div>
    </>
  );
}

function NavDropdown({ id, label, open, onToggle, onClose, children }: {
  id: number;
  label: ReactNode;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  children: ReactNode;
}) {
  // the original IX2 close action fades the list out over 150ms before
  // hiding it — .wf-closing stays on for that long after `open` drops
  const [closing, setClosing] = useState(false);
  const wasOpen = useRef(false);
  useEffect(() => {
    const was = wasOpen.current;
    wasOpen.current = open;
    if (open) {
      setClosing(false);
      return;
    }
    if (!was) return;
    setClosing(true);
    const t = setTimeout(() => setClosing(false), 150);
    return () => clearTimeout(t);
  }, [open]);

  return (
    <div data-delay="0" data-hover="false" className={`nav-link-dropdown w-dropdown${open ? " wf-open" : ""}`}>
      <div
        className={`dropdown-trigger w-dropdown-toggle${open ? " w--open" : ""}`}
        id={`w-dropdown-toggle-${id}`}
        aria-controls={`w-dropdown-list-${id}`}
        aria-haspopup="menu"
        aria-expanded={open}
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        <div className="nav-link_v3 dropdown">
          {label}
        </div>
        <div className="dropdown-icon w-icon-dropdown-toggle" aria-hidden="true" style={frozenIcon}></div>
      </div>
      <nav
        className={`nav-submenu w-dropdown-list${open ? " w--open wf-open" : closing ? " wf-closing" : ""}`}
        id={`w-dropdown-list-${id}`}
        aria-labelledby={`w-dropdown-toggle-${id}`}
        style={{ display: "none", opacity: 0 }}
        onClick={(e) => {
          // navigating via a submenu link closes the menu (client-side routing
          // keeps the nav mounted)
          if ((e.target as HTMLElement).closest("a")) onClose();
        }}
      >
        {children}
      </nav>
    </div>
  );
}

/** Shared site nav, reused across pages. Self-contained: dropdowns and the
 *  mobile hamburger menu are driven by React state here (not by
 *  WebflowInteractions); the open/close classes it toggles (wf-open, w--open,
 *  wf-nav-open) are styled by webflow-shared.css. Markup mirrors the original
 *  Webflow navbar_v3. */
export function SiteNav() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeDropdowns = () => setOpenDropdown(null);
  const toggleDropdown = (id: number) =>
    setOpenDropdown((cur) => (cur === id ? null : id));

  // outside click / Escape close whatever is open
  useEffect(() => {
    if (openDropdown === null && !mobileOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest?.(".w-dropdown")) setOpenDropdown(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openDropdown, mobileOpen]);

  // the open mobile menu locks page scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className={`navbar_v3 w-nav${mobileOpen ? " wf-nav-open" : ""}`}>
      <div
        className={`nav-submenu-mobile${mobileOpen ? " w--nav-menu-open" : ""}`}
        onClick={(e) => {
          // navigating via a menu link closes the panel
          if ((e.target as HTMLElement).closest("a")) {
            setMobileOpen(false);
            setOpenDropdown(null);
          }
        }}
      >
        <div className="submenu-mobile scrollable-submenu">
          <div className="nav-menu-links_v3">
            <NavDropdown id={0} label={<>Product<br /></>} open={openDropdown === 0} onToggle={() => toggleDropdown(0)} onClose={closeDropdowns}>
              <ProductSubmenu />
            </NavDropdown>
            <NavDropdown id={1} label="Solutions" open={openDropdown === 1} onToggle={() => toggleDropdown(1)} onClose={closeDropdowns}>
              <SolutionsSubmenu />
            </NavDropdown>
            <PrimaryLinks />
          </div>
          <div className="nav-menu-ctas full_width">
            <NavLink href="/demo" className="btn-nav full_width w-inline-block">
              <div className="nav-btn-text">
                Book a demo
              </div>
              <img src="/assets/arrow-icon-white.svg" loading="lazy" alt="" className="nav-btn-arrow" style={frozenIcon} />
            </NavLink>
            <a href="https://app.mycroft.io" target="_blank" className="btn-nav full_width grey w-inline-block">
              <div className="nav-btn-text color_rg">
                Login
              </div>
            </a>
            <div className="menu-gradient"></div>
          </div>
        </div>
      </div>
      <div className="nav-container_v3 desktop">
        <div className="nav-outer-wrapper">
          <div className="nav-menu-wrapper">
            <NavLink href="/" className="logo-lockup w-nav-brand" aria-label="home">
              <img loading="eager" src="/assets/mycroft-lockup-green-v2.svg" alt="Mycroft logo lockup" className="nav-logo-img" />
            </NavLink>
            <div className="nav-menu-links_v3">
              <NavDropdown id={2} label={<>Product<br /></>} open={openDropdown === 2} onToggle={() => toggleDropdown(2)} onClose={closeDropdowns}>
                <ProductSubmenu />
              </NavDropdown>
              <NavDropdown id={3} label="Solutions" open={openDropdown === 3} onToggle={() => toggleDropdown(3)} onClose={closeDropdowns}>
                <SolutionsSubmenu />
              </NavDropdown>
              <PrimaryLinks />
            </div>
            <div className="nav-menu-ctas">
              <a href="https://app.mycroft.io" target="_blank" className="nav-link_v2 login w-nav-link">
                Login
              </a>
              <NavLink href="/demo" className="btn-nav w-inline-block">
                <div className="nav-btn-text">
                  Book a demo
                </div>
                <img src="/assets/arrow-icon-white.svg" loading="lazy" alt="" className="nav-btn-arrow" style={frozenIcon} />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="nav-shadow-sliver"></div>
      </div>
      <div className="nav-mobile-container">
        <div className="nav-mob-outer">
          <div className="nav-mob-inner">
            <NavLink href="/" className="logo-lockup mobile w-nav-brand" aria-label="home">
              <img loading="eager" src="/assets/mycroft-lockup-green-v2.svg" alt="Mycroft logo lockup" className="nav-logo-img" />
            </NavLink>
            <a
              href="#"
              className={`hamburger-lockup w-inline-block${mobileOpen ? " w--open" : ""}`}
              aria-expanded={mobileOpen}
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen((open) => !open);
              }}
            >
              <div className="hamburger-top"></div>
              <div className="hamburger-mid"></div>
              <div className="hamburger-btm"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="code-embed-nav w-embed w-script"></div>
      <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
    </div>
  );
}
