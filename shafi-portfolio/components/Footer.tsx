"use client";

import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer>
      <div className="wrap footer-flex">
        <div className="footer-left">
          <span>
            Designed &amp; engineered by <b>{profile.name}</b> · © {year}
          </span>
          <div style={{ color: "var(--text-muted)", fontSize: 11.5, marginTop: 4 }}>
            Full Stack Developer (MERN) · Calicut, Kerala, India
          </div>
        </div>

        <div className="footer-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.resumePath} target="_blank" rel="noopener noreferrer">
            Resume PDF
          </a>
          <button
            onClick={scrollToTop}
            style={{ color: "var(--accent-amber)", cursor: "pointer", fontFamily: "var(--mono)", fontSize: 13 }}
            aria-label="Scroll back to top"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
