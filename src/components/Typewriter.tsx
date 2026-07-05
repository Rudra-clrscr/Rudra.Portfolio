"use client";

import { useEffect, useState } from "react";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

type TypewriterProps = {
  /** Phrases to cycle through. */
  words: string[];
  className?: string;
};

/**
 * Types a word out character by character, pauses, deletes it, then moves to
 * the next word — looping forever. Respects prefers-reduced-motion by showing
 * the first word statically.
 */
export default function Typewriter({ words, className = "" }: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || words.length === 0) return;

    const current = words[wordIndex % words.length];
    const done = text === current;
    const empty = text === "";

    let delay = deleting ? 45 : 90;
    if (done && !deleting) delay = 1500; // pause on full word
    if (empty && deleting) delay = 300; // pause before next word

    const timeout = setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
      } else if (deleting && empty) {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, reduced]);

  if (reduced) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={className}>
      {text}
      <span className="typewriter-caret" aria-hidden="true" />
    </span>
  );
}
