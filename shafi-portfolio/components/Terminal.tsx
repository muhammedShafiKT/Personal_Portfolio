"use client";

import { useEffect, useRef, useState } from "react";
import { terminalLines } from "@/lib/data";
import { useClipboard, useReducedMotion } from "@/lib/hooks";

export default function Terminal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [started, setStarted] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const { copy, copied } = useClipboard();

  // Start typing once the hero section scrolls into view
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
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Typing simulation loop
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
    const speed = line.p ? 34 : 12;

    if (charIndex <= full.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(
        () => {
          setLineIndex((i) => i + 1);
          setCharIndex(0);
        },
        line.p ? 240 : 380
      );
      return () => clearTimeout(t);
    }
  }, [started, lineIndex, charIndex, reducedMotion]);

  const completedLines = terminalLines.slice(0, lineIndex);
  const current = terminalLines[lineIndex];
  const currentFull = current ? (current.p ? current.p + " " + current.k : current.out ?? "") : "";
  const currentPartial = current ? currentFull.slice(0, charIndex) : "";

  function handleCopySession() {
    const text = terminalLines
      .map((l) => (l.p ? `${l.p} ${l.k}` : l.out))
      .join("\n");
    copy(text);
  }

  return (
    <div className="term-box">
      <div className="term-topbar">
        <div className="term-controls">
          <span className="term-circle r" />
          <span className="term-circle y" />
          <span className="term-circle g" />
          <span className="term-title">shafi@developer-box: ~ (zsh)</span>
        </div>
        <button
          className="term-copy-btn"
          onClick={handleCopySession}
          aria-label="Copy terminal log"
        >
          {copied ? "Copied ✓" : "Copy Session"}
        </button>
      </div>

      <div className="term-body" ref={containerRef}>
        {reducedMotion ? (
          terminalLines.map((l, i) => (
            <div
              className="term-line"
              key={i}
              style={l.out ? { color: "var(--text-secondary)" } : undefined}
            >
              {l.p ? (
                <>
                  <span className="term-prompt">{l.p}</span>{" "}
                  <span className="term-cmd">{l.k}</span>
                </>
              ) : (
                <span className="term-output">{l.out}</span>
              )}
            </div>
          ))
        ) : (
          <>
            {completedLines.map((l, i) => (
              <div
                className="term-line"
                key={i}
                style={l.out ? { color: "var(--text-secondary)" } : undefined}
              >
                {l.p ? (
                  <>
                    <span className="term-prompt">{l.p}</span>{" "}
                    <span className="term-cmd">{l.k}</span>
                  </>
                ) : (
                  <span className="term-output">{l.out}</span>
                )}
              </div>
            ))}

            {current && (
              <div
                className="term-line"
                style={current.out ? { color: "var(--text-secondary)" } : undefined}
              >
                {current.p ? (
                  <>
                    <span className="term-prompt">{current.p}</span>{" "}
                    <span className="term-cmd">{currentPartial.slice(2)}</span>
                  </>
                ) : (
                  <span className="term-output">{currentPartial}</span>
                )}
              </div>
            )}
            {showCursor && <span className="term-cursor" />}
          </>
        )}
      </div>
    </div>
  );
}
