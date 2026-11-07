"use client";

import React, { useEffect, useRef, useState } from "react";
import { SwarmEngine } from "./SwarmEngine";
import SwarmControls from "./SwarmControls";

interface SwarmExperienceProps {
  heroRef?: React.RefObject<HTMLElement>;
}

/**
 * SwarmExperience: Integrates WAIL's native 9-agent autonomous reconstruction
 * swarm engine strictly scoped to the hero section with Saturn ring orbit,
 * selection bounding boxes, character reveals, and hero-scoped controls.
 */
export default function SwarmExperience({ heroRef }: SwarmExperienceProps) {
  const cursorsRef = useRef<HTMLDivElement>(null);
  const selRef = useRef<HTMLDivElement>(null);
  const [engine, setEngine] = useState<SwarmEngine | null>(null);

  useEffect(() => {
    if (!cursorsRef.current || !selRef.current) return;
    const heroEl =
      heroRef?.current ||
      document.getElementById("top") ||
      document.querySelector<HTMLElement>(".hero");
    if (!heroEl) return;

    const swarm = new SwarmEngine(cursorsRef.current, selRef.current, heroEl);
    setEngine(swarm);

    return () => {
      swarm.destroy();
    };
  }, [heroRef]);

  return (
    <>
      {/* WAIL Native Swarm Cursor Agent Layer - Scoped to Hero */}
      <div
        id="cursors"
        ref={cursorsRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
      />

      {/* WAIL Selection Bounding Box & Ripple Canvas - Scoped to Hero */}
      <div
        id="sel"
        ref={selRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
      />

      {/* Hero-Scoped Interactive Control Panel */}
      <SwarmControls engine={engine} />
    </>
  );
}
