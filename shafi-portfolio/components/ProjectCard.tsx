"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/data";
import { useReducedMotion } from "@/lib/hooks";

export default function ProjectCard({
  project,
  onOpenImage,
}: {
  project: Project;
  onOpenImage: (src: string, alt: string) => void;
}) {
  const stripRef = useRef<HTMLDivElement | null>(null);
  const shotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeShot, setActiveShot] = useState(0);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [activeRagIndex, setActiveRagIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  const hasShots = Boolean(project.shots && project.shots.length > 0);

  useEffect(() => {
    if (!hasShots) return;
    const strip = stripRef.current;
    if (!strip) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = shotRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveShot(idx);
          }
        });
      },
      { root: strip, threshold: 0.6 }
    );
    shotRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [project, hasShots]);

  function scrollToShot(i: number) {
    shotRefs.current[i]?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      inline: "start",
    });
  }

  const currentRole = project.roles ? project.roles[activeRoleIndex] : null;
  const currentRagStage = project.ragStages ? project.ragStages[activeRagIndex] : null;

  return (
    <article className="project-card-wrap">
      {/* Top Header */}
      <div className="proj-header">
        <div className="proj-meta-left">
          <div className="proj-tag-row">
            <span className="proj-index-code">{project.index}</span>
            {project.badge && (
              <span className="proj-badge-pill">{project.badge}</span>
            )}
            <span className="proj-index-code">· {project.year}</span>
          </div>
          <h3 className="proj-name">{project.name}</h3>
          <p className="proj-tagline">{project.tagline}</p>
        </div>

        <div className="proj-ctas">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Live Application ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              GitHub Source ↗
            </a>
          )}
        </div>
      </div>

      {/* Metrics Bar */}
      {project.metrics && (
        <div className="proj-metrics-bar">
          {project.metrics.map((m) => (
            <div className="proj-metric-item" key={m.label}>
              <span className="proj-metric-val">{m.value}</span>
              <span className="proj-metric-lbl">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Custom Distinct Visual Presentation */}
      {hasShots && project.shots ? (
        <div className="mock-win">
          <div className="mock-win-bar">
            <span className="term-circle r" />
            <span className="term-circle y" />
            <span className="term-circle g" />
            <div className="mock-url-box">{project.shots[activeShot]?.url}</div>
          </div>
          <div className="screenshots-strip" ref={stripRef}>
            {project.shots.map((shot, i) => (
              <div
                className="shot-slide"
                key={shot.src}
                ref={(el) => {
                  shotRefs.current[i] = el;
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.alt}
                  onClick={() => onOpenImage(shot.src, shot.alt)}
                />
              </div>
            ))}
          </div>
          <div className="shot-navigation-dots">
            {project.shots.map((_, i) => (
              <button
                key={i}
                className={`nav-dot ${i === activeShot ? "active" : ""}`}
                aria-label={`Show screenshot ${i + 1}`}
                onClick={() => scrollToShot(i)}
              />
            ))}
          </div>
        </div>
      ) : project.roles ? (
        /* EventOS: Interactive Role-Based Console */
        <div className="mock-win">
          <div className="mock-win-bar">
            <span className="term-circle r" />
            <span className="term-circle y" />
            <span className="term-circle g" />
            <div className="mock-url-box">
              eventos://rbac-governance/matrix-inspector
            </div>
          </div>
          <div className="role-console-box">
            <div className="role-tabs">
              {project.roles.map((r, idx) => (
                <button
                  key={r.slug}
                  className={`role-tab-btn ${
                    activeRoleIndex === idx ? "active" : ""
                  }`}
                  onClick={() => setActiveRoleIndex(idx)}
                >
                  {r.name}
                </button>
              ))}
            </div>

            {currentRole && (
              <div className="role-detail-card">
                <div>
                  <h4 className="role-detail-title">{currentRole.name}</h4>
                  <p className="role-detail-desc">{currentRole.desc}</p>
                </div>
                <div className="role-permissions-list">
                  <h5>Enforced Access Controls &amp; Capabilities</h5>
                  <ul>
                    {currentRole.access.map((acc) => (
                      <li key={acc}>{acc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : project.ragStages ? (
        /* KnowledgeHub: Interactive Document-to-RAG Simulator */
        <div className="mock-win">
          <div className="mock-win-bar">
            <span className="term-circle r" />
            <span className="term-circle y" />
            <span className="term-circle g" />
            <div className="mock-url-box">
              rag-engine://pipeline/document-to-vector-simulation
            </div>
          </div>
          <div className="rag-simulator-box">
            <div className="rag-steps-nav">
              {project.ragStages.map((s, idx) => (
                <button
                  key={s.step}
                  className={`rag-step-btn ${
                    activeRagIndex === idx ? "active" : ""
                  }`}
                  onClick={() => setActiveRagIndex(idx)}
                >
                  <span className="rag-step-num">STAGE {s.step}</span>
                  <span className="rag-step-name">{s.name}</span>
                </button>
              ))}
            </div>

            {currentRagStage && (
              <div className="rag-inspect-panel">
                <span className="rag-engine-badge">
                  ENGINE: {currentRagStage.engine}
                </span>
                <div className="rag-code-block">{currentRagStage.code}</div>
                <p className="rag-explain">{currentRagStage.detail}</p>
              </div>
            )}
          </div>
        </div>
      ) : null}

      {/* Project Engineering Body */}
      <div className="proj-body">
        <div className="proj-grid-2col">
          <div>
            <h4 className="proj-section-title">The Challenge</h4>
            <p className="proj-body-p">{project.problem}</p>
            <h4 className="proj-section-title" style={{ marginTop: 24 }}>
              Architectural Solution
            </h4>
            <p className="proj-body-p">{project.solution}</p>
          </div>

          <div>
            <h4 className="proj-section-title">Key Engineering Features</h4>
            <ul className="proj-feature-list">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architecture Flow Line */}
        <div className="arch-flow-wrap">
          <div className="arch-flow-label">ARCHITECTURE PIPELINE FLOW:</div>
          <div className="arch-flow-steps">
            {project.flow.map((step, i) => (
              <span key={step} style={{ display: "contents" }}>
                <span className="flow-step-tag">{step}</span>
                {i < project.flow.length - 1 && (
                  <span className="flow-step-arrow">→</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Engineering Decisions & Deployment */}
        <div className="proj-grid-2col" style={{ marginTop: 28 }}>
          <div>
            <h4 className="proj-section-title">Critical Technical Decisions</h4>
            <ul className="proj-feature-list">
              {project.decisions.map((d) => (
                <li key={d.label}>
                  <b style={{ color: "var(--text-primary)" }}>{d.label}</b>:{" "}
                  {d.detail}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="proj-section-title">Authentication &amp; Deployment</h4>
            <p className="proj-body-p">{project.authDeployment}</p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="proj-stack-pills">
          {project.stack.map((tech) => (
            <span className="tech-chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
