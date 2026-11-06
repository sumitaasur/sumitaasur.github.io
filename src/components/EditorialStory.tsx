"use client";

import { CheckCircle2, ShieldCheck, Terminal, Workflow, Zap, Cpu } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function EditorialStory() {
  const philosophy = portfolio.philosophy;

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-label="Engineering Philosophy and Approach"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff174d] uppercase tracking-widest mb-3">
            <span data-type>06 {"//"} ENGINEERING METHODOLOGY</span>
          </div>
          <h2
            data-reveal="center"
            className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase font-normal leading-[0.9]"
          >
            The Engineering <br />
            <span className="text-[#ff174d] text-outline-hero">Philosophy.</span>
          </h2>
        </div>
        <div data-reveal className="max-w-md font-mono text-xs sm:text-sm text-[#a7a1a8] leading-relaxed">
          &ldquo;Full stack engineering is the discipline of taking product requirements from technical architecture to backend APIs, frontend systems, cross-platform mobile runtimes, and intelligent AI features with zero friction.&rdquo;
        </div>
      </div>

      {/* Philosophy Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {philosophy.map((item, index) => (
          <div
            key={item.title}
            data-reveal
            className="p-6 sm:p-7 rounded-2xl bg-[#0e0c10] border border-white/10 hover:border-[#ff174d]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span data-type className="font-mono text-xs text-[#ff174d] font-bold">
                  0{index + 1} {"//"} PRINCIPLE
                </span>
                <Workflow size={16} data-pop className="text-[#a7a1a8] group-hover:text-[#ff174d] transition-colors" />
              </div>

              <h3 data-type className="font-syne text-xl font-bold text-white mb-3 group-hover:text-[#ff174d] transition-colors">
                {item.title}
              </h3>

              <p className="font-display text-xs sm:text-sm text-[#a7a1a8] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        {/* Education & Academic Card */}
        <div
          data-reveal
          className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#140a10] to-[#0e0c10] border border-[#ff174d]/30 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span data-type className="font-mono text-xs text-white/60 font-bold uppercase">
                ACADEMIC FOUNDATION
              </span>
              <Terminal size={16} data-pop className="text-[#ff174d]" />
            </div>

            <h3 data-type className="font-syne text-xl font-bold text-white mb-2">
              {portfolio.education.degree}
            </h3>

            <p className="font-mono text-xs text-[#a7a1a8]">
              {portfolio.education.institution} &bull; {portfolio.education.location}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between font-mono text-xs text-white/50">
            <span>Class of {portfolio.education.year}</span>
            <span data-pop className="text-emerald-400 font-bold">VERIFIED DEGREE</span>
          </div>
        </div>
      </div>

      {/* Verified Resume Achievements Showcase */}
      <div data-reveal className="p-6 sm:p-8 rounded-2xl bg-[#080709] border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <Zap size={18} data-pop className="text-[#ff174d]" />
            <h3 data-type className="font-syne text-xl font-bold text-white">
              Quantified Production Outcomes
            </h3>
          </div>
          <span className="font-mono text-xs text-emerald-400 font-semibold">
            VERIFIED RESUME METRICS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {portfolio.achievements.map((item) => (
            <div
              key={item.metric}
              data-pop
              className="p-5 rounded-xl bg-[#0e0c10] border border-white/5 flex flex-col justify-between"
            >
              <div>
                <span className="font-bebas text-3xl sm:text-4xl text-[#ff174d] block mb-1">
                  {item.metric}
                </span>
                <h4 className="font-syne text-sm font-bold text-white mb-2">
                  {item.label}
                </h4>
                <p className="font-display text-xs text-[#a7a1a8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
