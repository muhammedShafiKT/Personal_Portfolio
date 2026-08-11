"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const value = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100;
      setPct(value);
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return <div id="progress" style={{ width: `${pct}%` }} />;
}
