"use client";

import { stackMarquee } from "@/lib/data";
import { useReducedMotion } from "@/lib/hooks";

export default function StackMarquee() {
  const reducedMotion = useReducedMotion();
  const items = [...stackMarquee, ...stackMarquee];

  return (
    <div className="marquee-section" aria-label="Core Technical Stack Overview">
      <div
        className="marquee-track"
        style={reducedMotion ? { animation: "none" } : undefined}
      >
        {items.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
