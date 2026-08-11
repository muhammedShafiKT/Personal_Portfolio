import { profile, timeline } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">04 — Experience</span>
          <h2 className="section-title">Where I&apos;ve worked and studied.</h2>
        </Reveal>

        <Reveal className="timeline" as="div">
          {timeline.map((item) => (
            <div className="tl-item" key={item.role}>
              <span className="tl-dot" />
              <span className="tl-date">{item.date}</span>
              <h3 className="tl-role">{item.role}</h3>
              <p className="tl-org">{item.org}</p>
              {item.desc && (
                <ul className="tl-desc">
                  {item.desc.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Reveal>

        <Reveal className="resume-band" as="div" style={{ marginTop: 64 }}>
          <div>
            <h3>Want the complete picture?</h3>
            <p>Full work history, education, and skill list in one PDF.</p>
          </div>
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Download Resume ↓
          </a>
        </Reveal>
      </div>
    </section>
  );
}
