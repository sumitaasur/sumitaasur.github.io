"use client";

import React from "react";
import AnimatedText from "./AnimatedText";

export default function HeroTitle() {
  return (
    <div
      aria-hidden="true"
      className="hero-title display"
      data-type=""
    >
      <AnimatedText
        text="PORTFOLIO"
        charClassName="hero-title-ch"
        as="span"
        dataAttribute=""
      />
    </div>
  );
}

