"use client";

import { Layers, Workflow, ShieldCheck, Rocket, GitPullRequest, Smartphone, CheckCircle2 } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function EditorialStory() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-label="Engineering Philosophy & Background"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff1a53] uppercase tracking-widest mb-3">
            <span>01 {"//"} ARCHITECTURAL ESSAY</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            Engineering for Scale, <br />
            <span className="text-outline-hero">Precision &amp; Motion.</span>
          </h2>
        </div>
        <div className="max-w-md font-mono text-xs sm:text-sm text-[#a7a2ad] leading-relaxed">
          &ldquo;Frontend engineering at the senior level is not merely styling pixels; it is distributed state architecture, native runtime optimization, and production risk mitigation.&rdquo;
        </div>
      </div>

      {/* Main Editorial Narrative Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Editorial Narrative */}
        <div className="lg:col-span-7 space-y-6 text-[#a7a2ad] font-display text-base sm:text-lg leading-relaxed">
          <p className="text-white text-lg sm:text-xl font-medium leading-relaxed">
            With <span className="text-[#ff1a53] font-bold">8+ years of IT engineering</span> and over{" "}
            <span className="text-white font-bold">6+ years specializing in React Native and React.js</span>, I build resilient systems that operate effortlessly under real-world production stress.
          </p>

          <p>
            {portfolio.summary}
          </p>

          <p>
            Whether integrating the <span className="text-white font-semibold">Three.js WebGL canvas</span> inside a React Native mobile application for US athlete gear customization, synchronizing high-concurrency patient consultations across web and native mobile for <span className="text-white font-semibold">Medara Health</span>, or engineering German credit optimization algorithms for <span className="text-white font-semibold">Bonify &amp; SCHUFA</span>, my focus remains constant: <span className="text-white font-semibold">zero runtime failures, deterministic state, and fluid 60fps interaction.</span>
          </p>

          {/* Core Impacts Ribbon */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portfolio.engineeringImpacts.map((impact) => (
              <div key={impact} className="flex items-center gap-2.5 text-xs font-mono text-[#f5f3f5]">
                <CheckCircle2 size={14} className="text-[#ff1a53] flex-shrink-0" />
                <span>{impact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Fact & Principle Pillars */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {portfolio.aboutFacts.map((fact, idx) => (
            <div
              key={fact.mark}
              className="p-6 rounded-2xl bg-[#120f16] border border-white/10 hover:border-[#ff1a53]/50 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#880826]/10 rounded-full blur-2xl group-hover:bg-[#ff1a53]/20 transition-all" />

              <div className="relative z-10 flex items-baseline justify-between mb-3">
                <span className="font-syne text-2xl font-black text-white group-hover:text-[#ff1a53] transition-colors">
                  {fact.mark}
                </span>
                <span className="font-mono text-[10px] text-[#a7a2ad]">
                  PILLAR 0{idx + 1}
                </span>
              </div>

              <h3 className="relative z-10 font-syne text-base font-bold text-white mb-2">
                {fact.title}
              </h3>

              <p className="relative z-10 font-mono text-xs text-[#a7a2ad] leading-relaxed">
                {fact.label}
              </p>
            </div>
          ))}

          {/* Education Mini Badge */}
          <div className="p-5 rounded-2xl bg-[#0a080d] border border-white/5 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase text-[#ff1a53] tracking-widest font-semibold">
                ACADEMIC FOUNDATION
              </span>
              <span className="font-syne text-sm font-bold text-white">
                {portfolio.education.degree}
              </span>
              <span className="font-mono text-xs text-[#a7a2ad]">
                {portfolio.education.institution} &bull; {portfolio.education.location}
              </span>
            </div>
            <span className="font-mono text-xs text-white/50 px-2.5 py-1 rounded bg-white/5 border border-white/10">
              {portfolio.education.year}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
