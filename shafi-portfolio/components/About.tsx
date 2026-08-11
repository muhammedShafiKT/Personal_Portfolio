import { facts } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">01 — About</span>
          <h2 className="section-title">Systems-minded, product-focused.</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-text">
            <p>
              I&apos;m a full-stack developer based in Kerala, working across the MERN
              stack — <b>React and Redux Toolkit</b> on the frontend, <b>Node.js and
              Express</b> on the backend, with <b>MongoDB, Redis, and DuckDB</b> handling
              data along the way.
            </p>
            <p>
              What I enjoy most is the part most portfolios skip: the plumbing behind the
              UI. Background job queues that don&apos;t block a request, real-time updates
              over sockets, a pipeline that ingests a messy CSV and turns it into a
              dashboard. <b>InsightFlow</b> and <b>Luxora</b> — the two projects on this
              page — are both built that way, end to end, by me alone.
            </p>
            <p>
              Right now I&apos;m interning as a <b>Full Stack Developer at Bridgeon
              Solutions</b>, shipping features in production, while finishing my BCA at
              Sree Narayana Guru Open University.
            </p>
          </Reveal>
          <Reveal className="facts">
            {facts.map((f) => (
              <div className="fact" key={f.k}>
                <span className="fact-k">{f.k}</span>
                <span
                  className="fact-v"
                  style={f.accent ? { color: "var(--ok)" } : undefined}
                >
                  {f.v}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
