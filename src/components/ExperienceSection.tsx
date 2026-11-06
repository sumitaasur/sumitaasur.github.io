"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function ExperienceSection() {
  const experiences = portfolio.experience;

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-label="Professional Experience Timeline"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#67001f]/15 blur-[160px] rounded-full"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff1a53] uppercase tracking-widest mb-3">
            <span>05 {"//"} CAREER TRAJECTORY</span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase font-normal leading-[0.9]">
            8+ Years of Verified <br />
            <span className="text-[#e11d48] text-outline-hero">Engineering Delivery.</span>
          </h2>
        </div>
        <div className="max-w-md font-mono text-xs sm:text-sm text-[#a7a2ad]">
          A progressive career path in production software engineering: from quality verification to full stack systems, REST API architecture, and cross-platform leadership.
        </div>
      </div>

      {/* Experience Entries List */}
      <div className="space-y-6">
        {experiences.map((job, index) => (
          <div
            key={`${job.company}-${index}`}
            className="p-6 sm:p-8 rounded-2xl bg-[#120f16] border border-white/10 hover:border-[#ff1a53]/50 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top row: Role, Badge, Company, Location, Dates */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-[#ff1a53] font-bold">
                    0{index + 1} {"//"}
                  </span>
                  <h3 className="font-syne text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff1a53] transition-colors">
                    {job.role}
                  </h3>
                  {job.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ff1a53]/15 border border-[#ff1a53]/30 font-mono text-[10px] text-[#ff1a53] font-semibold uppercase">
                      {job.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#a7a2ad]">
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <Briefcase size={13} className="text-[#ff1a53]" />
                    {job.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    {job.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-[#ff1a53] bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/10 w-fit">
                <Calendar size={13} />
                <span>{job.dates}</span>
              </div>
            </div>

            {/* Highlights List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {job.highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm font-display text-[#a7a2ad] leading-relaxed">
                  <CheckCircle2 size={15} className="text-[#ff1a53] mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
