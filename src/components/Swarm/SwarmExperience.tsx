"use client";

import React, { useEffect, useRef, useState } from "react";
import { SwarmEngine } from "./SwarmEngine";
import SwarmControls from "./SwarmControls";

/**
 * SwarmExperience: Integrates WAIL's native 9-agent autonomous reconstruction
 * swarm engine into Next.js with Saturn ring orbit, selection bounding boxes,
 * typed character carousels, and floating interactive controls.
 */
export default function SwarmExperience() {
  const cursorsRef = useRef<HTMLDivElement>(null);
  const selRef = useRef<HTMLDivElement>(null);
  const [engine, setEngine] = useState<SwarmEngine | null>(null);

  useEffect(() => {
    if (!cursorsRef.current || !selRef.current) return;

    const swarm = new SwarmEngine(cursorsRef.current, selRef.current);
    setEngine(swarm);

    return () => {
      swarm.destroy();
    };
  }, []);

  return (
    <>
      {/* WAIL Native Swarm Cursor Agent Layer */}
      <div
        id="cursors"
        ref={cursorsRef}
        aria-hidden="true"
        className="pointer-events-none"
      />

      {/* WAIL Selection Bounding Box & Ripple Canvas */}
      <div
        id="sel"
        ref={selRef}
        aria-hidden="true"
        className="pointer-events-none"
      />

      {/* Floating Interactive Control Panel */}
      <SwarmControls engine={engine} />
    </>
  );
}

