"use client";

import { profile } from "@/lib/data";
import { useClipboard } from "@/lib/hooks";
import Reveal from "./Reveal";

export default function Contact() {
  const { copy, copied } = useClipboard();

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">05 — Get In Touch</span>
          <h2 className="section-title">Let&apos;s build something exceptional.</h2>
          <p className="section-sub">
            Actively open to Full Stack Developer (MERN), Backend, and AI integration engineering roles.
          </p>
        </Reveal>

        <Reveal className="contact-grid" as="div">
          <div>
            <p className="contact-headline">
              Ready to discuss high-impact roles — reach out via{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a> or call{" "}
              <a href={profile.phoneHref}>{profile.phone}</a>.
            </p>

            <p className="contact-sub">
              Based in Calicut, Kerala, India. Ready to contribute across the entire full-stack lifecycle — from database schema design and API services to performant, responsive frontend interfaces.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                Send Direct Email →
              </a>
              <button
                className="btn btn-ghost"
                onClick={() => copy(profile.email)}
              >
                {copied ? "Email Copied ✓" : "Copy Email Address"}
              </button>
            </div>
          </div>

          <div className="contact-card-list">
            <div className="contact-row">
              <span className="contact-k">Email</span>
              <a className="contact-v" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>

            <div className="contact-row">
              <span className="contact-k">Phone</span>
              <a className="contact-v" href={profile.phoneHref}>
                {profile.phone}
              </a>
            </div>

            <div className="contact-row">
              <span className="contact-k">Location</span>
              <span className="contact-v">{profile.location}</span>
            </div>

            <div className="contact-row">
              <span className="contact-k">GitHub</span>
              <a
                className="contact-v"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/muhammedShafiKT
              </a>
            </div>

            <div className="contact-row">
              <span className="contact-k">LinkedIn</span>
              <a
                className="contact-v"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/muhammedshafikt
              </a>
            </div>

            <div className="contact-row">
              <span className="contact-k">Portfolio</span>
              <a
                className="contact-v"
                href={profile.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                muhammedshafikt-fullstack-developer.vercel.app
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {copied && (
        <div className="copy-toast" role="status">
          <span>✓</span> Email address copied to clipboard!
        </div>
      )}
    </section>
  );
}
