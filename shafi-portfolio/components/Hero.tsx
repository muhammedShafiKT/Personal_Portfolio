import { profile } from "@/lib/data";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-left">
          <span className="hero-avail">
            <span className="status-dot" /> Calicut, Kerala IN — open to full-stack roles
          </span>
          <h1 className="hero-name">
            Muhammed
            <br />
            Shafi <span className="accent">KT.</span>
          </h1>
          <p className="hero-role">
            {profile.role}
          </p>
          <p className="hero-desc">
            MERN-stack developer working across React, Node.js, and MongoDB, with a habit
            of reaching for job queues, real-time updates, and background workers when a
            UI alone isn&apos;t enough. Currently a Full Stack Developer Intern at Bridgeon
            Solutions.
          </p>
          <div className="hero-ctas">
            <a href="#work" className="btn btn-primary">
              View Projects →
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>
          <div className="hero-links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href={profile.resumePath} target="_blank" rel="noopener noreferrer">
              Resume ↗
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="portrait-frame">
            <div className="corner tl" />
            <div className="corner br" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.portraitPath} alt="Portrait of Muhammed Shafi KT" />
            <div className="portrait-tag">
              <b>Muhammed Shafi KT</b>
              <span>full-stack engineer / MERN</span>
            </div>
          </div>
          <Terminal />
        </div>
      </div>
    </section>
  );
}
