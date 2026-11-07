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
    isPaused: false,
    speed: 1,
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
    engine.replay();
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

  // If dismissed or reduced motion, show compact hero launcher so user can reopen
  if (isDismissed) {
    return (
      <aside
        aria-label="Hero Swarm Rebuild Launcher"
        className="absolute bottom-4 right-4 sm:right-8 z-30 select-none"
      >
        <button
          type="button"
          onClick={handleResume}
          aria-label="Launch Hero Swarm Rebuild"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#100c12]/90 border border-[#ff174d]/30 text-white shadow-[0_4px_20px_rgba(255,23,77,0.25)] hover:border-[#ff174d] hover:shadow-[0_0_25px_rgba(255,23,77,0.45)] backdrop-blur-md transition-all cursor-pointer"
        >
          <Sparkles size={12} className="text-[#ff174d] animate-spin-slow" />
          <span className="font-mono text-[10px] uppercase font-bold tracking-wider">
            Rebuild Hero
          </span>
        </button>
      </aside>
    );
  }

  // Minimized state: sleek compact pill inside the hero
  if (isMinimized) {
    return (
      <aside
        aria-label="Hero Swarm Controls Pill"
        className="absolute bottom-4 right-4 sm:right-8 z-30 select-none"
      >
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          aria-label="Open Hero Swarm Panel"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e0a11]/95 border border-white/15 text-white shadow-xl hover:border-[#ff174d]/50 backdrop-blur-md transition-all font-mono text-[10px] cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff174d] animate-ping" />
          <span className="text-[#ff174d] font-bold">HERO SWARM</span>
          <span className="text-white/60">&bull;</span>
          <span className="font-bold">{stats.percentage}%</span>
          <ChevronUp size={12} className="text-white/60 ml-0.5" />
        </button>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Hero Swarm Rebuild Controls"
      className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-30 select-none max-w-[94vw] w-auto transition-all"
    >
      <div className="flex items-center gap-1 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl bg-[#0e0a11]/92 border border-[#ff174d]/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(255,23,77,0.18)] text-white font-mono text-[11px]">
        {/* Swarm Status & Hero Percentage */}
        <div className="flex items-center gap-2 pr-2 sm:pr-2.5 border-r border-white/10">
          <div className="relative flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#ff174d] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-bold tracking-wider text-[10px] text-white">
              <span className="hidden sm:inline">SWARM</span>
              <span className="text-[#ff174d]">HERO</span>
              <span className="text-white/60">&bull;</span>
              <span className="text-white">{stats.percentage}%</span>
            </div>
            {/* Dynamic progress bar */}
            <div className="w-16 sm:w-24 h-1 bg-white/10 rounded-full overflow-hidden mt-0.5">
              <div
                className="h-full bg-gradient-to-r from-[#ff174d] to-[#ff6bd6] transition-all duration-300"
                style={{ width: `${stats.percentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1">
          {/* 1. Pause / Resume */}
          <button
            type="button"
            onClick={togglePause}
            title={stats.isPaused ? "Resume Hero Swarm" : "Pause Hero Swarm"}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
              stats.isPaused
                ? "bg-amber-500/20 border-amber-500/50 text-amber-300"
                : "bg-white/5 border-white/10 text-[#a7a1a8] hover:text-white hover:bg-white/10"
            }`}
          >
            {stats.isPaused ? <Play size={12} fill="currentColor" /> : <Pause size={12} />}
          </button>

          {/* 2. Speed Toggle (1x, 2x, 3x) */}
          <button
            type="button"
            onClick={cycleSpeed}
            title="Cycle Animation Speed (1x, 2x, 3x)"
            className="flex items-center gap-0.5 px-1.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
          >
            <Zap size={10} className="text-[#ffb02e]" />
            <span className="text-[10px] font-bold">{stats.speed}x</span>
          </button>

          {/* 3. Sound Toggle */}
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
            {soundOn ? <Volume2 size={12} /> : <VolumeX size={12} />}
          </button>

          {/* 4. GO LIVE (Instant 100% Reveal) */}
          <button
            type="button"
            onClick={handleGoLive}
            title="Reveal Complete Hero Instantly"
            className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25 transition-all cursor-pointer"
          >
            <Sparkles size={10} className="text-emerald-400" />
            <span className="text-[10px] font-bold tracking-wider">REVEAL</span>
          </button>

          {/* 5. Replay */}
          <button
            type="button"
            onClick={handleReplay}
            title="Replay Hero Swarm Reconstruction"
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-[#a7a1a8] hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <RotateCcw size={12} />
          </button>

          {/* 6. Minimize */}
          <button
            type="button"
            onClick={() => setIsMinimized(true)}
            title="Minimize Hero Controls"
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-[#a7a1a8] hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <X size={12} />
          </button>

          {/* 7. Dismiss */}
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
