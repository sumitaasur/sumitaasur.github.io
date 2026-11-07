"use client";

import React from "react";
import Image from "next/image";

export default function HeroPortrait() {
  return (
    <div className="hero-portrait" data-reveal="center">
      <Image
        src="/images/sumit-portrait.png"
        alt="Sumit Pramanik - Full Stack Engineer & AI Application Developer"
        width={1211}
        height={1299}
        priority
        fetchPriority="high"
        sizes="(max-width: 600px) 78vw, (max-width: 1100px) 56vw, 57vw"
        className="hero-portrait-img select-none pointer-events-none"
      />
    </div>
  );
}

