import { facts } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">01 — Professional Profile</span>
          <h2 className="section-title">Engineered for scale, driven by data &amp; AI.</h2>
          <p className="section-sub">
            Full Stack Developer (MERN) bridging high-precision frontend interfaces with resilient backend architecture, distributed queues, and production vector search.
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">
            <p>
              I am a Full Stack Developer based in <b>Calicut, Kerala, India</b>, with <b>1 year of hands-on experience</b> building scalable web applications across the entire MERN spectrum — <b>React.js, Next.js, Redux Toolkit, Node.js, Express.js, MongoDB, and TypeScript</b>.
            </p>
            <p>
              My backend engineering prioritizes throughput and system reliability: architecting secure <b>REST APIs</b>, configuring <b>JWT (httpOnly cookies) &amp; Google OAuth</b> with granular role-based access control, managing distributed job queues with <b>Redis and BullMQ</b>, streaming live status updates over <b>Socket.IO</b>, and building multi-stage containerized deployments with <b>Docker on AWS EC2 &amp; S3</b>.
            </p>
            <p>
              In addition to core full-stack systems, I actively engineer <b>AI capabilities</b>: constructing end-to-end document-to-RAG pipelines with <b>PostgreSQL and pgvector</b>, deploying <b>Python FastAPI</b> microservices for high-throughput embedding calculations, and orchestrating <b>LLM integrations with OpenAI SDK and Google Gemini</b> alongside high-speed columnar data analytics with <b>DuckDB</b>.
            </p>
            <p>
              Currently, I am shipping features as a <b>Full Stack Developer Intern at Bridgeon Solutions</b> while completing my <b>Bachelor of Computer Applications (BCA)</b> at Sree Narayana Guru Open University (SGOU).
            </p>
          </Reveal>

          <Reveal className="facts-card">
            {facts.map((f) => (
              <div className="fact-row" key={f.k}>
                <span className="fact-label">{f.k}</span>
                <span
                  className="fact-val"
                  style={f.accent ? { color: "var(--accent-emerald)", fontWeight: 700 } : undefined}
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
