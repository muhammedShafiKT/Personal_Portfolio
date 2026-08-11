"use client";

import { useReveal } from "@/lib/hooks";
import { ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  style,
}: {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}) {
  const { ref, isIn } = useReveal<HTMLElement>();
  return (
    // @ts-expect-error - dynamic tag with shared ref is intentional here
    <Tag ref={ref} className={`reveal ${isIn ? "in" : ""} ${className}`} style={style}>
      {children}
    </Tag>
  );
}
