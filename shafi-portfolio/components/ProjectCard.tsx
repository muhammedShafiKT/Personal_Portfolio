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
  const reducedMotion = useReducedMotion();

  useEffect(() => {
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
  }, [project]);

  function scrollToShot(i: number) {
    shotRefs.current[i]?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      inline: "start",
    });
  }

  return (
    <article className="project">
      <div className="project-top">
        <div>
          <span className="project-index">{project.index}</span>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-tagline">{project.tagline}</p>
        </div>
        <div className="project-links">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Live Demo ↗
          </a>
        </div>
      </div>

      <div className="win">
        <div className="win-bar">
          <span className="term-dot r" />
          <span className="term-dot y" />
          <span className="term-dot g" />
          <span className="win-url">{project.shots[activeShot]?.url}</span>
        </div>
        <div className="shot-strip" ref={stripRef}>
          {project.shots.map((shot, i) => (
            <div
              className="shot"
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
        <div className="shot-dots">
          {project.shots.map((_, i) => (
            <button
              key={i}
              className={`sdot ${i === activeShot ? "active" : ""}`}
              aria-label={`Show screenshot ${i + 1}`}
              onClick={() => scrollToShot(i)}
            />
          ))}
        </div>
      </div>

      <div className="project-body">
        <div className="pb-grid">
          <div className="pb-block">
            <h4>Problem</h4>
            <p>{project.problem}</p>
            <h4 style={{ marginTop: 24 }}>Solution</h4>
            <p>{project.solution}</p>
          </div>
          <div className="pb-block">
            <h4>Key Features</h4>
            <ul>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flow">
          {project.flow.map((step, i) => (
            <span key={step} style={{ display: "contents" }}>
              <span className="flow-step">{step}</span>
              {i < project.flow.length - 1 && <span className="flow-arrow">→</span>}
            </span>
          ))}
        </div>

        <div className="pb-grid" style={{ marginTop: 26 }}>
          <div className="pb-block">
            <h4>Engineering Decisions</h4>
            <ul>
              {project.decisions.map((d) => (
                <li key={d.label}>
                  <b style={{ color: "var(--text)" }}>{d.label}</b> — {d.detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="pb-block">
            <h4>Auth &amp; Deployment</h4>
            <p>{project.authDeployment}</p>
          </div>
        </div>

        <div className="stack-tags">
          {project.stack.map((tech) => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
