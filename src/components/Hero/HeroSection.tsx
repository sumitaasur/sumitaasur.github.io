"use client";

import React, { useEffect, useRef } from "react";
import HeroTop from "./HeroTop";
import HeroTitle from "./HeroTitle";
import HeroPortrait from "./HeroPortrait";
import HeroIntro from "./HeroIntro";
import HeroSide from "./HeroSide";
import HeroBottom from "./HeroBottom";
import SwarmExperience from "@/components/Swarm/SwarmExperience";
import { initHeroAnimations } from "./HeroAnimations";

/**
 * HeroSection: Replicates the complete WAIL editorial hero composition
 * with Sumit Pramanik's identity, transparent black-suit portrait, and
 * full-stack engineering positioning.
 */
export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cleanup = initHeroAnimations(heroRef.current);
    return cleanup;
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
      id="top"
      aria-label="Hero Introduction"
    >
      {/* Background Atmosphere Grain & Crimson Ambient Lighting */}
      <div
        className="pointer-events-none absolute inset-0 bg-noise opacity-30 z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] max-w-[95vw] h-[480px] bg-gradient-to-b from-[#ff174d]/15 via-[#e5093f]/8 to-transparent blur-[140px] z-0"
        aria-hidden="true"
      />

      {/* Hero-Scoped 9-Agent WAIL Autonomous Swarm Rebuild Engine & Controls */}
      <SwarmExperience heroRef={heroRef} />

      {/* A. Top Information Bar */}
      <HeroTop />

      {/* B. Massive Background Typography: PORTFOLIO */}
      <HeroTitle />

      {/* C. Central Foreground Portrait: Sumit in Black Suit */}
      <HeroPortrait />

      {/* D. Left Introduction & Identity */}
      <HeroIntro />

      {/* E. Right Information Panel & Statistics */}
      <HeroSide />

      {/* F. Bottom Control & Discovery Bar */}
      <HeroBottom />
    </section>
  );
}

