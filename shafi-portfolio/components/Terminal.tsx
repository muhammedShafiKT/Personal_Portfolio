"use client";

import { useEffect, useRef, useState } from "react";
import { terminalLines } from "@/lib/data";
import { useReducedMotion } from "@/lib/hooks";

type Rendered = { html?: string; text?: string; done: boolean };

export default function Terminal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [started, setStarted] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(false);

  // Start typing once the hero scrolls into view.
  useEffect(() => {
    const el = containerRef.current?.closest(".hero");
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Typing loop.
  useEffect(() => {
    if (!started) return;
    if (reducedMotion) {
      setLineIndex(terminalLines.length);
      return;
    }
    if (lineIndex >= terminalLines.length) {
      setShowCursor(true);
      return;
    }
    const line = terminalLines[lineIndex];
    const full = line.p ? line.p + " " + line.k : line.out ?? "";
    const speed = line.p ? 38 : 14;

    if (charIndex <= full.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(
        () => {
          setLineIndex((i) => i + 1);
          setCharIndex(0);
        },
        line.p ? 260 : 420
      );
      return () => clearTimeout(t);
    }
  }, [started, lineIndex, charIndex, reducedMotion]);

  const completedLines = terminalLines.slice(0, lineIndex);
  const current = terminalLines[lineIndex];
  const currentFull = current ? (current.p ? current.p + " " + current.k : current.out ?? "") : "";
  const currentPartial = current ? currentFull.slice(0, charIndex) : "";

  return (
    <div className="term">
      <div className="term-bar">
        <span className="term-dot r" />
        <span className="term-dot y" />
        <span className="term-dot g" />
        <span className="term-title">shafi@dev — zsh</span>
      </div>
      <div className="term-body" ref={containerRef}>
        {reducedMotion
          ? terminalLines.map((l, i) => (
              <div
                className="term-line"
                key={i}
                style={l.out ? { color: "var(--text-soft)" } : undefined}
              >
                {l.p ? (
                  <>
                    <span className="p">{l.p}</span> <span className="k">{l.k}</span>
                  </>
                ) : (
                  l.out
                )}
              </div>
            ))
          : (
            <>
              {completedLines.map((l, i) => (
                <div
                  className="term-line"
                  key={i}
                  style={l.out ? { color: "var(--text-soft)" } : undefined}
                >
                  {l.p ? (
                    <>
                      <span className="p">{l.p}</span> <span className="k">{l.k}</span>
                    </>
                  ) : (
                    l.out
                  )}
                </div>
              ))}
              {current && (
                <div
                  className="term-line"
                  style={current.out ? { color: "var(--text-soft)" } : undefined}
                >
                  {current.p ? (
                    <>
                      <span className="p">{current.p}</span>{" "}
                      <span className="k">{currentPartial.slice(2)}</span>
                    </>
                  ) : (
                    currentPartial
                  )}
                </div>
              )}
              {showCursor && <span className="cursor" />}
            </>
          )}
      </div>
    </div>
  );
}
