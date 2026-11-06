"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Terminal,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  Sparkles,
  Smartphone,
  Globe,
} from "lucide-react";
import { portfolio, socialProfiles } from "@/data/portfolio";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Calculate subtle 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = -((y - centerY) / centerY) * 8;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      id="top"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-16 sm:pb-24 px-4 sm:px-8 flex flex-col justify-between overflow-hidden bg-tech-grid"
      aria-label="Introduction & Architecture Overview"
    >
      {/* Dynamic Ambient Glow Layers */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#ff1a53]/20 via-[#880826]/10 to-transparent blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#67001f]/25 via-transparent to-transparent blur-[120px]"
        aria-hidden="true"
      />

      {/* Top Telemetry HUD Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 py-3 px-4 rounded-xl bg-[#0e0d12]/60 border border-white/5 backdrop-blur-md mb-8">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
          <span className="font-mono text-[11px] text-[#f5f3f5] tracking-wide font-medium">
            TELEMETRY: <span className="text-emerald-400">OPTIMAL</span> {"//"} JAIPUR [26.91°N, 75.78°E]
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6 font-mono text-[11px] text-[#a7a2ad]">
          <span className="flex items-center gap-1.5">
            <Cpu size={12} className="text-[#ff1a53]" />
            REACT 18+ &amp; HERMES
          </span>
          <span className="flex items-center gap-1.5">
            <Smartphone size={12} className="text-[#ff1a53]" />
            CROSS-PLATFORM NATIVE
          </span>
          <span className="flex items-center gap-1.5">
            <Zap size={12} className="text-emerald-400" />
            35% PERF LIFT
          </span>
        </div>
        <div className="font-mono text-[11px] text-[#ff1a53] font-semibold">
          VERIFIED PRODUCTION ARCHITECTURE
        </div>
      </div>

      {/* Main Hero Composition */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto">
        {/* Left Column: Monumental Oversized Typography & Value */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#ff1a53]/10 border border-[#ff1a53]/30 w-fit mb-6">
            <Sparkles size={13} className="text-[#ff1a53]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#ff1a53] font-semibold">
              Senior Full Stack Engineer &bull; Technical Lead
            </span>
          </div>

          {/* Monumental Headline with Outlined & Glowing Typography */}
          <h1 className="font-syne text-[clamp(2.75rem,7vw,5.75rem)] font-extrabold leading-[0.92] tracking-tighter uppercase mb-6 text-white">
            <span className="block text-outline-hero transition-all duration-300">
              ARCHITECTING
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fce7f3] to-[#fda4af]">
              SCALABLE WEB &amp;
            </span>
            <span className="block text-[#ff1a53] glow-crimson">
              NATIVE MOBILE.
            </span>
          </h1>

          {/* Lead Value Statement */}
          <p className="font-display text-base sm:text-xl text-[#a7a2ad] max-w-2xl leading-relaxed mb-8">
            {portfolio.valueStatement} Specializing in <span className="text-white font-semibold">React.js</span>,{" "}
            <span className="text-[#ff1a53] font-semibold">React Native</span>,{" "}
            <span className="text-white font-semibold">Next.js</span>, and enterprise cross-platform architecture with{" "}
            <span className="text-white font-semibold">8+ years</span> of production IT delivery.
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <a
              href="#projects"
              data-cursor="project"
              data-cursor-text="EXPLORE"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ff1a53] to-[#880826] text-white font-mono text-sm font-bold tracking-wider hover:shadow-[0_0_30px_rgba(255,26,83,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDownRight size={17} />
            </a>

            <a
              href="/Sumit-Pramanik-Resume.pdf"
              download
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#120f16] border border-white/10 text-white font-mono text-sm font-semibold hover:border-[#ff1a53]/60 hover:bg-[#1a1420] transition-all duration-200"
            >
              <Download size={16} className="text-[#ff1a53]" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <a
              href="#architecture"
              className="inline-flex items-center gap-2 px-4 py-3.5 text-[#a7a2ad] hover:text-white font-mono text-sm font-medium transition-colors"
            >
              <span>System Specs</span>
              <ArrowDown size={14} className="text-[#ff1a53]" />
            </a>
          </div>

          {/* Hero Stats Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            {portfolio.heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <div className="font-syne text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-baseline gap-1">
                  <span>{stat.value}</span>
                  <span className="font-mono text-xs text-[#ff1a53] font-medium">{stat.suffix}</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#a7a2ad]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Signature SAHI Red Identity Block & Layered Visual */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* 3D Tilt Card Container */}
          <div
            ref={cardRef}
            className="w-full max-w-md rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#880826] via-[#4a0315] to-[#120307] border border-[#ff1a53]/40 box-glow-red-card relative overflow-hidden transition-transform duration-200 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            }}
          >
            {/* Tech Grid Background inside card */}
            <div className="absolute inset-0 bg-tech-grid-crimson opacity-60 pointer-events-none" />

            {/* Corner Decorative Crosshairs */}
            <span className="absolute top-3 left-3 font-mono text-[10px] text-[#ff1a53]/70 font-bold">+</span>
            <span className="absolute top-3 right-3 font-mono text-[10px] text-[#ff1a53]/70 font-bold">+</span>
            <span className="absolute bottom-3 left-3 font-mono text-[10px] text-[#ff1a53]/70 font-bold">+</span>
            <span className="absolute bottom-3 right-3 font-mono text-[10px] text-[#ff1a53]/70 font-bold">+</span>

            {/* Card Header Strip */}
            <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white">
                  IDENTITY CARD {"//"} SPEC 01
                </span>
              </div>
              <span className="font-mono text-[10px] text-white/60 tracking-wider">
                NODE_ID: SP_8Y
              </span>
            </div>

            {/* Layered Engineering Portrait / Hologram Avatar */}
            <div className="relative z-10 w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#18040a] border border-[#ff1a53]/30 flex items-center justify-center mb-5 group">
              {/* Radar Orbit Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-[#ff1a53]/20 animate-rotate-radar" />
                <div className="absolute w-32 h-32 rounded-full border border-dashed border-[#ff1a53]/40" />
                <div className="absolute w-16 h-16 rounded-full border border-[#ff1a53]/60" />
              </div>

              {/* Stylized Hologram Monogram & Visual Center */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#ff1a53] to-[#3a010c] flex items-center justify-center text-white font-syne text-3xl font-black shadow-[0_0_35px_rgba(255,26,83,0.7)] mb-2 border border-white/20">
                  SP
                </div>
                <div className="font-syne text-lg font-bold text-white tracking-wide">
                  {portfolio.name}
                </div>
                <div className="font-mono text-xs text-[#fda4af] font-medium">
                  {portfolio.title}
                </div>
              </div>

              {/* Holographic Telemetry Badges */}
              <div className="absolute top-2 left-2 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-[#ff1a53]/30 font-mono text-[9px] text-[#fda4af]">
                ENGINE: REACT NATIVE 60FPS
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-emerald-500/30 font-mono text-[9px] text-emerald-300">
                LCP 0.9s {"//"} OPTIMIZED
              </div>
            </div>

            {/* Card Content & Details */}
            <div className="relative z-10 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-white/90">
                <span className="text-[#fca5a5]">CORE STACK</span>
                <span className="font-semibold text-white">React.js &bull; React Native &bull; Next</span>
              </div>
              <div className="flex items-center justify-between text-white/90">
                <span className="text-[#fca5a5]">APP STORES</span>
                <span className="font-semibold text-emerald-300">iOS App Store &bull; Google Play</span>
              </div>
              <div className="flex items-center justify-between text-white/90">
                <span className="text-[#fca5a5]">BASE LOCATION</span>
                <span className="font-semibold text-white">Jaipur, India &bull; Global Remote</span>
              </div>
              <div className="flex items-center justify-between text-white/90">
                <span className="text-[#fca5a5]">STATUS</span>
                <span className="text-[#ff1a53] font-bold uppercase tracking-wider">
                  Open for Leadership / Contract
                </span>
              </div>
            </div>

            {/* Quick Card Action */}
            <div className="relative z-10 mt-5 pt-4 border-t border-white/15 flex items-center justify-between">
              <a
                href="#contact"
                className="w-full py-2.5 px-4 rounded-lg bg-white text-[#4a0315] hover:bg-[#ff1a53] hover:text-white font-mono text-xs font-bold text-center transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>INITIATE DIRECT DISPATCH</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Cue */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-8 border-t border-white/5 mt-10 text-xs font-mono text-[#a7a2ad]">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-[#ff1a53]" />
          <span>SCROLL DOWN TO INSPECT ARCHITECTURE MATRIX</span>
        </div>
        <a
          href="#architecture"
          className="flex items-center gap-1.5 text-white hover:text-[#ff1a53] transition-colors"
          aria-label="Scroll to Architecture Section"
        >
          <span>EXPLORE</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
