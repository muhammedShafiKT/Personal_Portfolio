"use client";

import { useState } from "react";
import { capabilities } from "@/lib/data";
import Reveal from "./Reveal";

const filterCategories = [
  { key: "all", label: "All Proficiencies" },
  { key: "languages", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend & APIs" },
  { key: "databases", label: "Databases & Vector" },
  { key: "devops", label: "Cloud & DevOps" },
  { key: "security", label: "Auth & Security" },
  { key: "ai", label: "AI & Analytics" },
  { key: "tools", label: "Tools" },
];

export default function Capabilities() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const visibleGroups =
    selectedFilter === "all"
      ? capabilities
      : capabilities.filter((c) => c.categoryKey === selectedFilter);

  return (
    <section className="section" id="capabilities" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">02 — Technical Proficiencies</span>
          <h2 className="section-title">Categorized technical capabilities.</h2>
          <p className="section-sub">
            Directly mapped across full-stack development, distributed backend architecture, vector databases, and AI pipelines. No arbitrary progress bars — only verified, production-utilized technologies.
          </p>
        </Reveal>

        <Reveal className="skills-filter-bar">
          {filterCategories.map((f) => (
            <button
              key={f.key}
              className={`filter-btn ${selectedFilter === f.key ? "active" : ""}`}
              onClick={() => setSelectedFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="capabilities-bento">
          {visibleGroups.map((group) => (
            <div className="skill-bento-card" key={group.num}>
              <div className="skill-card-top">
                <span className="skill-card-icon">{group.icon}</span>
                <span className="skill-card-num">{group.num}</span>
              </div>
              <h3 className="skill-card-title">{group.title}</h3>
              <p className="skill-card-desc">{group.description}</p>
              <div className="skill-chips-wrap">
                {group.items.map((item) => (
                  <span className="tech-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
