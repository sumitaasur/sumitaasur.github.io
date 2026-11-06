"use client";

import { CheckCircle2, FileCode, GitFork, ShieldCheck, Cpu } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function ProcessTimeline() {
  const phases = portfolio.processPhases;

  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-label="Engineering Lifecycle Process"
    >
      {/* Background Section Glow */}
      <div
        className="pointer-events-none absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#ff174d]/10 blur-[170px] rounded-full"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff174d] uppercase tracking-widest mb-3">
            <span>05 {"//"} ENGINEERING METHODOLOGY</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            From RFC to Multi-Store <br />
            <span className="text-outline-hero">Certified Release.</span>
          </h2>
        </div>
        <div className="max-w-md font-mono text-xs sm:text-sm text-[#a7a1a8]">
          A disciplined 4-stage engineering lifecycle transforming nebulous requirements into bulletproof, production-hardened web and mobile releases.
        </div>
      </div>

      {/* Process Stages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((item, index) => (
          <div
            key={item.number}
            className="p-6 sm:p-7 rounded-2xl bg-[#0e0c10] border border-white/10 hover:border-[#ff174d]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Phase Header */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-syne text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#ff174d] to-[#e5093f]">
                  {item.number}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#a7a1a8]">
                  PHASE 0{index + 1}
                </span>
              </div>

              <h3 className="font-syne text-xl font-bold text-white mb-3 group-hover:text-[#ff174d] transition-colors">
                {item.phase}
              </h3>

              <p className="font-display text-xs sm:text-sm text-[#a7a1a8] leading-relaxed mb-6">
                {item.summary}
              </p>
            </div>

            {/* Artifacts Checklist */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff174d] block mb-1">
                KEY DELIVERABLES
              </span>
              {item.artifacts.map((art) => (
                <div key={art} className="flex items-center gap-2 text-xs font-mono text-[#f5f3f5]">
                  <CheckCircle2 size={12} className="text-[#ff174d] flex-shrink-0" />
                  <span className="truncate">{art}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
