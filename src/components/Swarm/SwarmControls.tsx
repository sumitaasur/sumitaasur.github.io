"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  X,
  Zap,
  Sparkles,
  ChevronUp,
} from "lucide-react";
import { SwarmEngine, SwarmStats } from "./SwarmEngine";
import { swarmAudio } from "./SwarmAudio";

interface SwarmControlsProps {
  engine: SwarmEngine | null;
}

export default function SwarmControls({ engine }: SwarmControlsProps) {
  const [stats, setStats] = useState<SwarmStats>({
    total: 0,
    completed: 0,
    percentage: 0,
    isTouring: false,
    isPaused: false,
    speed: 1,
    activeSectionId: "top",
    activeSectionName: "01. HERO",
  });

  const [soundOn, setSoundOn] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    if (!engine) return;
    const unsub = engine.subscribe((newStats) => {
      setStats(newStats);
    });
    return () => {
      unsub();
    };
  }, [engine]);

  const toggleSound = () => {
    const next = swarmAudio.toggle();
    setSoundOn(next);
  };

  const toggleTour = () => {
    if (!engine) return;
    if (stats.isTouring) {
      engine.stopTour();
    } else {
      engine.startTour();
    }
  };

  const togglePause = () => {
    if (!engine) return;
    engine.togglePause();
  };

  const cycleSpeed = () => {
    if (!engine) return;
    const current = stats.speed;
    const nextSpeed = current === 1 ? 2 : current === 2 ? 3 : 1;
    engine.setSpeed(nextSpeed);
  };

  const handleGoLive = () => {
    if (!engine) return;
    engine.goLive();
  };

  const handleReplay = () => {
    if (!engine) return;
    engine.replay(false);
  };

  const handleDismiss = () => {
    if (!engine) return;
    engine.dismiss();
    setIsDismissed(true);
  };

  const handleResume = () => {
    if (!engine) return;
    engine.resume();
    setIsDismissed(false);
    setIsMinimized(false);
  };

  // If dismissed or reduced motion, show floating launcher so user can reopen
  if (isDismissed) {
    return (
      <aside
        aria-label="Swarm Rebuild Launcher"
        className="fixed bottom-5 right-5 z-[140] select-none"
      >
        <button
          type="button"
          onClick={handleResume}
          aria-label="Launch Swarm Rebuild"
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#100c12]/90 border border-[#ff174d]/30 text-white shadow-[0_4px_20px_rgba(255,23,77,0.25)] hover:border-[#ff174d] hover:shadow-[0_0_25px_rgba(255,23,77,0.45)] backdrop-blur-md transition-all cursor-pointer"
        >
          <Sparkles size={14} className="text-[#ff174d] animate-spin-slow" />
          <span className="font-mono text-[10px] uppercase font-bold tracking-wider">
            Rebuild Swarm
          </span>
        </button>
      </aside>
    );
  }

  // Minimized state: sleek compact pill
  if (isMinimized) {
    return (
      <aside
        aria-label="Swarm Controls Pill"
        className="fixed bottom-5 right-5 z-[140] select-none"
      >
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          aria-label="Open Swarm Panel"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0e0a11]/95 border border-white/15 text-white shadow-xl hover:border-[#ff174d]/50 backdrop-blur-md transition-all font-mono text-[10px] cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff174d] animate-ping" />
          <span className="text-[#ff174d] font-bold">{stats.activeSectionName.split(".")[1]?.trim() || "SWARM"}</span>
          <span className="text-white/60">&bull;</span>
          <span className="font-bold">{stats.percentage}%</span>
          <ChevronUp size={12} className="text-white/60 ml-0.5" />
        </button>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Portfolio-Wide Swarm Rebuild Orchestrator"
      className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-[140] select-none max-w-[96vw] w-auto transition-all"
    >
      <div className="flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-2xl bg-[#0e0a11]/94 border border-[#ff174d]/35 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_30px_rgba(255,23,77,0.22)] text-white font-mono text-[11px]">
        {/* Swarm Status & Active Section Header */}
        <div className="flex items-center gap-2 pr-2 sm:pr-3 border-r border-white/10">
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff174d] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-bold tracking-wider text-[10px] text-white">
              <span className="hidden sm:inline">SWARM</span>
              <span className="text-[#ff174d] truncate max-w-[90px] sm:max-w-[120px]">
                {stats.activeSectionName}
              </span>
              <span className="text-white/60">&bull;</span>
              <span className="text-white">{stats.percentage}%</span>
            </div>
            {/* Dynamic progress bar */}
            <div className="w-20 sm:w-28 h-1 bg-white/10 rounded-full overflow-hidden mt-0.5">
              <div
                className="h-full bg-gradient-to-r from-[#ff174d] to-[#ff6bd6] transition-all duration-300"
                style={{ width: `${stats.percentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* 1. TOUR Mode */}
          <button
            type="button"
            onClick={toggleTour}
            title={stats.isTouring ? "Pause Portfolio Tour" : "Start Full Portfolio Tour"}
            className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
              stats.isTouring
                ? "bg-[#ff174d] text-white border-[#ff174d] shadow-[0_0_12px_rgba(255,23,77,0.5)]"
                : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
            }`}
          >
            {stats.isTouring ? (
              <Pause size={12} fill="currentColor" />
            ) : (
              <Play size={12} fill="currentColor" />
            )}
            <span className="text-[10px] font-bold tracking-wider">TOUR</span>
          </button>

          {/* 2. Pause / Resume */}
          <button
            type="button"
            onClick={togglePause}
            title={stats.isPaused ? "Resume Swarm Animation" : "Pause Swarm Animation"}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
              stats.isPaused
                ? "bg-amber-500/20 border-amber-500/50 text-amber-300"
                : "bg-white/5 border-white/10 text-[#a7a1a8] hover:text-white hover:bg-white/10"
            }`}
          >
            {stats.isPaused ? <Play size={13} fill="currentColor" /> : <Pause size={13} />}
          </button>

          {/* 3. Speed Toggle (1x, 2x, 3x) */}
          <button
            type="button"
            onClick={cycleSpeed}
            title="Cycle Animation Speed (1x, 2x, 3x)"
            className="flex items-center gap-0.5 sm:gap-1 px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
          >
            <Zap size={11} className="text-[#ffb02e]" />
            <span className="text-[10px] font-bold">{stats.speed}x</span>
          </button>

          {/* 4. Sound Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            title={soundOn ? "Mute Mechanical Audio" : "Enable Mechanical Audio"}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
              soundOn
                ? "bg-[#ff174d]/20 border-[#ff174d] text-[#ff174d]"
                : "bg-white/5 border-white/10 text-[#a7a1a8] hover:text-white hover:bg-white/10"
            }`}
          >
            {soundOn ? <Volume2 size={13} /> : <VolumeX size={13} />}
          </button>

          {/* 5. GO LIVE (Instant 100% Reveal) */}
          <button
            type="button"
            onClick={handleGoLive}
            title="Go Live: Reveal Complete Portfolio Instantly"
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25 transition-all cursor-pointer"
          >
            <Sparkles size={11} className="text-emerald-400" />
            <span className="text-[10px] font-bold tracking-wider">GO LIVE</span>
          </button>

          {/* 6. Replay */}
          <button
            type="button"
            onClick={handleReplay}
            title="Replay Full Portfolio Rebuild"
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-[#a7a1a8] hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <RotateCcw size={13} />
          </button>

          {/* 7. Minimize */}
          <button
            type="button"
            onClick={() => setIsMinimized(true)}
            title="Minimize Controls to Floating Pill"
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-[#a7a1a8] hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <X size={13} />
          </button>

          {/* 8. Full Dismiss (Visible on larger screens) */}
          <button
            type="button"
            onClick={handleDismiss}
            title="Dismiss Swarm Agents Completely"
            className="hidden md:block p-1.5 rounded-lg bg-white/5 border border-white/10 text-rose-400/70 hover:text-rose-400 hover:bg-rose-500/10 transition-all cursor-pointer ml-0.5 text-[10px] font-bold"
          >
            OFF
          </button>
        </div>
      </div>
    </aside>
  );
}
