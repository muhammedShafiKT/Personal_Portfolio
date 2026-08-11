import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">05 — Contact</span>
          <h2 className="section-title">Let&apos;s build something.</h2>
        </Reveal>

        <Reveal className="contact-grid" as="div">
          <div>
            <p className="contact-big">
              Open to full-stack and MERN roles — reach out at{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </div>

          <div className="contact-list">
            <div className="contact-row">
              <span className="k">Email</span>
              <a className="v" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>

            <div className="contact-row">
              <span className="k">Phone</span>
              <a className="v" href={profile.phoneHref}>
                {profile.phone}
              </a>
            </div>

            <div className="contact-row">
              <span className="k">Location</span>
              <span className="v">{profile.location}</span>
            </div>

            <div className="contact-row">
              <span className="k">GitHub</span>
              <a
                className="v"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/muhammedShafiKT
              </a>
            </div>

            <div className="contact-row">
              <span className="k">LinkedIn</span>
              <a
                className="v"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/muhammedshafikt/
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}