"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#about");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 15);
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.href.slice(1)))
      .filter((el): el is HTMLElement => !!el);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header id="site-header" className={scrolled ? "scrolled" : ""}>
        <div className="wrap nav-container">
          <a href="#" className="logo" aria-label="Muhammed Shafi KT Home">
            <span className="logo-mark">MS</span>
            <span>
              shafi<span style={{ color: "var(--accent-amber)" }}>.</span>dev
            </span>
          </a>

          <div className="nav-links-wrap">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={active === item.href ? "active" : ""}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-actions">
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              Resume PDF ↗
            </a>
            <a className="nav-cta" href="#contact">
              <span className="status-dot" /> Available for hire
            </a>
            <button
              className="burger"
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="mobile-close"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            <span>{item.label}</span>
            <span style={{ color: "var(--accent-amber)" }}>→</span>
          </a>
        ))}
        <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setMenuOpen(false)}
          >
            Download Resume PDF ↓
          </a>
        </div>
      </div>
    </>
  );
}
