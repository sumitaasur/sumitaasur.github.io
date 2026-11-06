"use client";

import React from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  as?: React.ElementType;
}

export default function AnimatedText({
  text,
  className = "",
  charClassName = "",
  as: Component = "div",
}: AnimatedTextProps) {
  // Support multiline text separated by newline
  const lines = text.split("\n");

  return (
    <Component className={className} aria-label={text.replace(/\n/g, " ")}>
      {lines.map((line, lineIdx) => {
        const words = line.split(" ");
        return (
          <React.Fragment key={lineIdx}>
            {lineIdx > 0 && <br />}
            {words.map((word, wordIdx) => (
              <span key={wordIdx} className="inline-block whitespace-nowrap">
                {word.split("").map((char, charIdx) => (
                  <span
                    key={charIdx}
                    className={`ch ${charClassName}`}
                    aria-hidden="true"
                  >
                    {char}
                  </span>
                ))}
                {wordIdx < words.length - 1 && (
                  <span className="inline-block whitespace-pre" aria-hidden="true">
                    {" "}
                  </span>
                )}
              </span>
            ))}
          </React.Fragment>
        );
      })}
    </Component>
  );
}
