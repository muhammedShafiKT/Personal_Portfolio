import { profile, timeline } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">04 — Career &amp; Education</span>
          <h2 className="section-title">Industry experience &amp; academic foundations.</h2>
          <p className="section-sub">
            Hands-on full-stack development experience shipping production features, paired with foundational computer applications coursework.
          </p>
        </Reveal>

        <Reveal className="timeline-track" as="div">
          {timeline.map((item, idx) => (
            <div className="timeline-entry" key={item.role}>
              <span
                className={`timeline-node ${idx === 0 ? "active-pulse" : ""}`}
              />
              <div className="timeline-header">
                <span className="timeline-date">{item.date}</span>
                {item.badge && (
                  <span className="timeline-badge">{item.badge}</span>
                )}
              </div>
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-org">{item.org}</p>

              {item.desc && (
                <ul className="timeline-bullets">
                  {item.desc.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}

              {item.techPills && (
                <div className="timeline-tags">
                  {item.techPills.map((pill) => (
                    <span className="tech-chip" key={pill}>
                      {pill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Reveal>

        <Reveal className="resume-banner" as="div">
          <div className="resume-banner-content">
            <h3>Looking for the complete resume?</h3>
            <p>
              Download the official CV detailing technical skills, system design projects, and production engineering history.
            </p>
          </div>
          <div className="resume-banner-actions">
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download CV (PDF) ↓
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost">
              Direct Contact →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
