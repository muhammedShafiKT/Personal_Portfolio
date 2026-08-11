"use client";

import { stackMarquee } from "@/lib/data";
import { useReducedMotion } from "@/lib/hooks";

export default function StackMarquee() {
  const reducedMotion = useReducedMotion();
  const items = [...stackMarquee, ...stackMarquee];

  return (
    <div className="stack-strip">
      <div
        className="stack-track"
        style={reducedMotion ? { animation: "none" } : undefined}
      >
        {items.map((item, i) => (
          <span className="stack-item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
