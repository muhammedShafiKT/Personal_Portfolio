"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">03 — Work</span>
          <h2 className="section-title">Featured projects.</h2>
          <p className="section-sub">
            Two products, built solo, end to end — architecture, backend systems, and UI.
          </p>
        </Reveal>

        {projects.map((project) => (
          <Reveal key={project.name}>
            <ProjectCard
              project={project}
              onOpenImage={(src, alt) => setLightbox({ src, alt })}
            />
          </Reveal>
        ))}
      </div>

      <Lightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ""}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
}
