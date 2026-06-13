"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type TypingTextProps = {
  texts: string[];
  className?: string;
};

export function TypingText({ texts, className }: TypingTextProps) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setDisplay(texts[0]);
      return;
    }

    const current = texts[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, display.length + 1);
          setDisplay(next);
          if (next === current) {
            setTimeout(() => setDeleting(true), 1800);
          }
        } else {
          const next = current.slice(0, display.length - 1);
          setDisplay(next);
          if (next === "") {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      deleting ? 40 : 70,
    );

    return () => clearTimeout(timeout);
  }, [display, deleting, index, reduced, texts]);

  return (
    <span className={className}>
      {display}
      <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-pulse bg-cyan-400 align-middle" />
    </span>
  );
}
