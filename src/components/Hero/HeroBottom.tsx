"use client";

import React from "react";
import { ArrowDown, Play } from "lucide-react";

export default function HeroBottom() {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-bottom" data-reveal="">
      <button
        type="button"
        className="reel-button"
        id="playFeatured"
        onClick={scrollToWork}
      >
        <span className="play-circle">
          <Play size={12} fill="currentColor" strokeWidth={2} />
        </span>
        <span>EXPLORE SHIPPED WORK</span>
        <span className="muted">17+ APPS</span>
      </button>

      <span
        className="hero-scroll"
        onClick={scrollToWork}
        role="button"
        tabIndex={0}
      >
        SCROLL TO DISCOVER <ArrowDown size={13} strokeWidth={2} />
      </span>

      <span className="edition">FULL STACK &amp; AI ENGINEER — WORLDWIDE</span>
    </div>
  );
}

