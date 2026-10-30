import { profile } from "@/lib/data";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-avail">
              <span className="status-dot" />
              <span>{profile.location} · Open to Full Stack / MERN Roles</span>
            </div>

            <h1 className="hero-title">
              <span className="name-gradient">Muhammed</span>
              <br />
              <span className="name-gradient">Shafi</span>
              <span className="accent-dot"> KT.</span>
            </h1>

            <p className="hero-role-lead">
              <b>{profile.title}</b> — Architecting scalable full-stack web applications, resilient backend microservices, and production AI pipelines.
            </p>

            <p className="hero-bio">
              1 year of hands-on experience engineering production systems with <b>React.js, Next.js, Node.js, Express.js, MongoDB, and TypeScript</b>. Experienced in Docker containerization, Redis job queues, and AWS cloud hosting, with deep focus on AI capabilities including <b>RAG pipelines, vector embeddings, pgvector, and LLM integrations</b>. Currently a Full Stack Developer Intern at <b>Bridgeon Solutions</b>.
            </p>

            <div className="hero-hud">
              <div className="hud-pill">
                <span className="hud-val">1 Year</span>
                <span className="hud-lbl">Hands-on Experience</span>
              </div>
              <div className="hud-pill">
                <span className="hud-val">4 Systems</span>
                <span className="hud-lbl">Featured Products</span>
              </div>
              <div className="hud-pill">
                <span className="hud-val">MERN + Py</span>
                <span className="hud-lbl">Core Engineering</span>
              </div>
              <div className="hud-pill">
                <span className="hud-val">RAG / Vectors</span>
                <span className="hud-lbl">AI Architecture</span>
              </div>
            </div>

            <div className="hero-ctas">
              <a href="#work" className="btn btn-primary">
                Explore Projects →
              </a>
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Download CV (PDF) ↗
              </a>
              <a href="#contact" className="btn btn-ghost">
                Initialize Contact
              </a>
            </div>

            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="portrait-container">
              <div className="corner-bracket tl" />
              <div className="corner-bracket tr" />
              <div className="corner-bracket bl" />
              <div className="corner-bracket br" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.portraitPath}
                alt="Muhammed Shafi KT - Full Stack Developer"
                width={480}
                height={580}
              />
              <div className="portrait-overlay" />
              <div className="portrait-meta">
                <span className="portrait-name">Muhammed Shafi KT</span>
                <span className="portrait-role">Full Stack Developer (MERN) · Bridgeon Solutions</span>
              </div>
            </div>

            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
