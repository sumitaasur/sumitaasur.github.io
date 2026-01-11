import React from "react";
import { FlipWords } from "./ui/flip-words";

export default function FlipTitle() {
  const words = ["Web Designs", "Frontend Projects", "Digital Experiences", "Interfaces"];

  return (
      <h1 className="text-3xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-400 dark:from-neutral-50 dark:to-neutral-400  bg-opacity-50">
      Hi, I&apos;m Kapil Kumawat: Creating Engaging<br />
        <FlipWords words={words} /> <br />
        That Stand Out
      </h1> 
  );
}
