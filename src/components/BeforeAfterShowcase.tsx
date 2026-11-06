"use client";

import { useState, useRef } from "react";
import { Zap, Activity, Clock, ShieldAlert, CheckCircle2, SlidersHorizontal, ArrowLeftRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function BeforeAfterShowcase() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const { before, after, title, subtitle } = portfolio.beforeAfterCaseStudy;

  const handlePointerMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handlePointerMove(e.clientX);
    }
  };

  return (
    <section
      id="performance"
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-label="Before and After Performance Engineering Benchmark"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff1a53] uppercase tracking-widest mb-3">
            <span>03 {"//"} BENCHMARK CASE STUDY</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            Measured Impact: <br />
            <span className="text-outline-hero">Before vs. Engineered.</span>
          </h2>
        </div>
        <div className="max-w-md font-mono text-xs sm:text-sm text-[#a7a2ad]">
          Drag the interactive slider below to inspect the measured performance contrast between standard legacy frontend patterns and my production-optimized architectures.
        </div>
      </div>

      {/* Interactive Draggable Comparison Component */}
      <div
        ref={containerRef}
        onMouseDown={() => (isDragging.current = true)}
        onMouseUp={() => (isDragging.current = false)}
        onMouseLeave={() => (isDragging.current = false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        data-cursor="drag"
        data-cursor-text="DRAG"
        className="relative w-full rounded-2xl overflow-hidden border border-white/10 select-none bg-[#09070c] shadow-[0_20px_60px_rgba(0,0,0,0.6)] cursor-ew-resize min-h-[460px] sm:min-h-[420px]"
      >
        {/* RIGHT LAYER: Engineered Architecture (Revealed underneath) */}
        <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-[#18040a] via-[#10070d] to-[#080709]">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-emerald-400">
                {after.tag}
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold">
              +35% SPEED LIFT
            </span>
          </div>

          {/* Metric Comparison Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            <div className="p-4 rounded-xl bg-white/[0.04] border border-emerald-500/20">
              <div className="font-mono text-[10px] uppercase text-[#a7a2ad]">LARGEST CONTENTFUL PAINT</div>
              <div className="font-syne text-3xl font-black text-emerald-400 mt-1">{after.lcp}</div>
              <div className="font-mono text-[11px] text-emerald-300/80 mt-1">Instant perceived load</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.04] border border-emerald-500/20">
              <div className="font-mono text-[10px] uppercase text-[#a7a2ad]">INITIAL BUNDLE PAYLOAD</div>
              <div className="font-syne text-3xl font-black text-emerald-400 mt-1">{after.bundleSize}</div>
              <div className="font-mono text-[11px] text-emerald-300/80 mt-1">Tree-shaken dynamic splits</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.04] border border-emerald-500/20">
              <div className="font-mono text-[10px] uppercase text-[#a7a2ad]">FRAME RATE STABILITY</div>
              <div className="font-syne text-3xl font-black text-emerald-400 mt-1">{after.frameRate}</div>
              <div className="font-mono text-[11px] text-emerald-300/80 mt-1">Hermes AOT bytecode engine</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.04] border border-emerald-500/20">
              <div className="font-mono text-[10px] uppercase text-[#a7a2ad]">RELEASE PIPELINE</div>
              <div className="font-syne text-xl sm:text-2xl font-bold text-white mt-1">{after.releaseCycle}</div>
              <div className="font-mono text-[11px] text-emerald-300/80 mt-1">Automated Fastlane &amp; CI/CD</div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs font-mono text-emerald-300">
            <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
            <span>VERDICT: {after.verdict}</span>
          </div>
        </div>

        {/* LEFT LAYER: Standard / Legacy Pattern (Clipped via sliderPosition) */}
        <div
          className="absolute inset-y-0 left-0 p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-[#1a1518] to-[#120f12] border-r border-[#ff1a53] shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="w-[1000px] max-w-[90vw] flex flex-col justify-between h-full">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-rose-400">
                  {before.tag}
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 font-mono text-xs font-semibold">
                BASELINE / LEGACY
              </span>
            </div>

            {/* Metric Comparison Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-rose-500/20">
                <div className="font-mono text-[10px] uppercase text-[#a7a2ad]">LARGEST CONTENTFUL PAINT</div>
                <div className="font-syne text-3xl font-black text-rose-400 mt-1">{before.lcp}</div>
                <div className="font-mono text-[11px] text-rose-300/80 mt-1">High dropoff latency</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-rose-500/20">
                <div className="font-mono text-[10px] uppercase text-[#a7a2ad]">INITIAL BUNDLE PAYLOAD</div>
                <div className="font-syne text-3xl font-black text-rose-400 mt-1">{before.bundleSize}</div>
                <div className="font-mono text-[11px] text-rose-300/80 mt-1">Monolithic unpruned imports</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-rose-500/20">
                <div className="font-mono text-[10px] uppercase text-[#a7a2ad]">FRAME RATE STABILITY</div>
                <div className="font-syne text-3xl font-black text-rose-400 mt-1">{before.frameRate}</div>
                <div className="font-mono text-[11px] text-rose-300/80 mt-1">Bridge bottleneck cascades</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-rose-500/20">
                <div className="font-mono text-[10px] uppercase text-[#a7a2ad]">RELEASE PIPELINE</div>
                <div className="font-syne text-xl sm:text-2xl font-bold text-white mt-1">{before.releaseCycle}</div>
                <div className="font-mono text-[11px] text-rose-300/80 mt-1">High human error factor</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs font-mono text-rose-300">
              <ShieldAlert size={16} className="text-rose-400 flex-shrink-0" />
              <span>VERDICT: {before.verdict}</span>
            </div>
          </div>
        </div>

        {/* DRAGGABLE SLIDER DIVIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#ff1a53] shadow-[0_0_20px_#ff1a53] flex items-center justify-center -translate-x-1/2 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 rounded-full bg-[#ff1a53] text-white flex items-center justify-center shadow-[0_0_20px_#ff1a53] border-2 border-white pointer-events-auto cursor-ew-resize">
            <ArrowLeftRight size={16} />
          </div>
        </div>
      </div>

      {/* Slider Hint */}
      <div className="flex items-center justify-between text-xs font-mono text-[#a7a2ad] mt-4 px-2">
        <span>&larr; Slide Left for Legacy Baseline</span>
        <span className="hidden sm:inline">Interactive Drag Handle</span>
        <span>Slide Right for Engineered Architecture &rarr;</span>
      </div>
    </section>
  );
}
