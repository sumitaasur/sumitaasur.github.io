"use client";

import { useState } from "react";
import {
  Layers,
  Smartphone,
  Cpu,
  Activity,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Code2,
  Workflow,
  Sparkles,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function ArchitectureMatrix() {
  const [activeLayerId, setActiveLayerId] = useState<string>("ui-core");

  const layers = portfolio.architectureLayers;
  const currentLayer = layers.find((l) => l.id === activeLayerId) || layers[0];

  const getLayerIcon = (id: string) => {
    switch (id) {
      case "ui-core":
        return Layers;
      case "mobile-engine":
        return Smartphone;
      case "state-realtime":
        return Workflow;
      case "performance-pipeline":
        return Activity;
      case "cloud-release":
        return Cloud;
      default:
        return Cpu;
    }
  };

  return (
    <section
      id="architecture"
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-label="Engineering Architecture Matrix"
    >
      {/* Background Section Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#880826]/15 blur-[160px] rounded-full"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff1a53] uppercase tracking-widest mb-3">
            <span>02 {"//"} SYSTEM BLUEPRINT</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            Interactive Architecture <br />
            <span className="text-outline-hero">&amp; Technical Matrix.</span>
          </h2>
        </div>
        <div className="max-w-md font-mono text-xs sm:text-sm text-[#a7a2ad]">
          Inspect the multi-tiered engineering stack governing web platforms, cross-platform mobile runtimes, and enterprise deployment pipelines.
        </div>
      </div>

      {/* Main Interactive Matrix Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Layer Selector Tabs */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#a7a2ad] mb-1">
            SELECT ARCHITECTURE LAYER
          </p>

          {layers.map((layer) => {
            const Icon = getLayerIcon(layer.id);
            const isActive = layer.id === activeLayerId;

            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveLayerId(layer.id)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex items-start justify-between gap-4 ${
                  isActive
                    ? "bg-[#18040a] border-[#ff1a53] shadow-[0_0_30px_rgba(255,26,83,0.3)]"
                    : "bg-[#120f16] border-white/10 hover:border-white/30"
                }`}
                aria-pressed={isActive}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive
                        ? "bg-[#ff1a53] text-white shadow-[0_0_15px_rgba(255,26,83,0.6)]"
                        : "bg-white/5 text-[#a7a2ad]"
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#ff1a53] font-semibold tracking-wider block">
                      {layer.name.split("/")[0]}
                    </span>
                    <h3 className="font-syne text-sm sm:text-base font-bold text-white leading-snug">
                      {layer.name.split("/")[1] || layer.name}
                    </h3>
                    <p className="font-mono text-xs text-[#a7a2ad] mt-0.5">
                      {layer.tagline}
                    </p>
                  </div>
                </div>

                <div className="text-right flex-shrink-0 font-mono">
                  <div className="text-sm font-bold text-white">{layer.stats.metric}</div>
                  <div className="text-[9px] text-[#ff1a53] uppercase">{layer.stats.label}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep Blueprint & Technical Specs for Selected Layer */}
        <div className="lg:col-span-7 rounded-2xl bg-[#120f16] border border-white/10 p-6 sm:p-8 relative overflow-hidden">
          {/* Subtle grid and decorative marks */}
          <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#880826]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Blueprint Header */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <span className="font-mono text-xs text-[#ff1a53] font-bold uppercase tracking-wider block mb-1">
                SYSTEM TIER {"//"} {currentLayer.id.toUpperCase()}
              </span>
              <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-white">
                {currentLayer.name}
              </h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#18040a] border border-[#ff1a53]/40 text-right">
              <span className="font-syne text-xl font-black text-[#ff1a53] block leading-none">
                {currentLayer.stats.metric}
              </span>
              <span className="font-mono text-[10px] text-[#fca5a5] uppercase tracking-wider">
                {currentLayer.stats.label}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="relative z-10 font-display text-sm sm:text-base text-[#a7a2ad] leading-relaxed mb-6">
            {currentLayer.description}
          </p>

          {/* Blueprint Node Wireframe Display */}
          <div className="relative z-10 p-5 rounded-xl bg-[#09070c] border border-white/10 mb-6 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-[11px] text-[#a7a2ad]">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                LAYER ARCHITECTURE SCHEMATIC
              </span>
              <span>VERIFIED IN PRODUCTION</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentLayer.specs.map((spec, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-[#120f16] border border-white/5 flex items-start gap-2.5"
                >
                  <span className="text-[#ff1a53] font-bold mt-0.5">0{index + 1}.</span>
                  <span className="text-[#f5f3f5] leading-relaxed">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Integrated Ribbon */}
          <div className="relative z-10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#a7a2ad] block mb-3">
              ACTIVE TECHNOLOGIES &amp; PROTOCOLS IN THIS LAYER
            </span>
            <div className="flex flex-wrap gap-2">
              {currentLayer.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-[#18040a] border border-[#ff1a53]/30 text-white font-mono text-xs font-semibold hover:border-[#ff1a53] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
