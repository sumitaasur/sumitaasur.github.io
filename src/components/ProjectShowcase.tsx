"use client";

import { useState } from "react";
import {
  ExternalLink,
  ArrowUpRight,
  Smartphone,
  Globe,
  Layers,
  Sparkles,
  CheckCircle2,
  Apple,
  Play,
  Braces,
} from "lucide-react";
import { portfolio, type PortfolioProject, type ProjectCategory } from "@/data/portfolio";

const filterTabs: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Works (16)" },
  { id: "mobile", label: "Mobile & Native (7)" },
  { id: "web", label: "Web Architecture (6)" },
  { id: "3d", label: "3D & WebGL (3)" },
  { id: "fintech-health", label: "Fintech & Health (4)" },
];

export default function ProjectShowcase({
  onSelectProject,
}: {
  onSelectProject: (project: PortfolioProject) => void;
}) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = portfolio.projects.filter((proj) => {
    if (activeCategory === "all") return true;
    return proj.category === activeCategory;
  });

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-label="Selected Production Projects"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#ff1a53]/10 blur-[180px] rounded-full"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff1a53] uppercase tracking-widest mb-3">
            <span>04 {"//"} COMMERCIAL REPOSITORY</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            Selected Works &amp; <br />
            <span className="text-outline-hero">Shipped Platforms.</span>
          </h2>
        </div>
        <div className="max-w-md font-mono text-xs sm:text-sm text-[#a7a2ad]">
          Production applications spanning Apple App Store, Google Play, and enterprise cloud deployments across the US, UK, Germany, UAE, Australia, and India.
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2.5 mb-12">
        {filterTabs.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-200 ${
                isActive
                  ? "bg-[#ff1a53] text-white shadow-[0_0_20px_rgba(255,26,83,0.5)]"
                  : "bg-[#120f16] text-[#a7a2ad] border border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => {
          const accentColor = project.accent || "#ff1a53";

          return (
            <article
              key={project.name}
              data-cursor="project"
              data-cursor-text="INSPECT"
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl bg-[#120f16] border border-white/10 hover:border-[#ff1a53]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:-translate-y-1"
            >
              {/* Card Visual Artwork Preview Header */}
              <div
                className="relative w-full aspect-[16/9] overflow-hidden p-6 flex flex-col justify-between"
                style={{
                  background: `linear-gradient(135deg, #18040a 0%, #10070d 60%, ${accentColor}15 100%)`,
                }}
              >
                {/* Tech grid texture inside art */}
                <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

                {/* Top Art Info */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-white/50 tracking-wider">
                    0{index + 1} {"//"} ARCHIVE
                  </span>
                  <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[10px] uppercase text-[#ff1a53] font-bold">
                    {project.category}
                  </span>
                </div>

                {/* Abstract Interactive Holographic Mockup Box */}
                <div className="relative z-10 self-center w-full max-w-xs p-4 rounded-xl bg-black/70 border border-white/15 backdrop-blur-md shadow-2xl transition-transform duration-300 group-hover:scale-105 group-hover:border-[#ff1a53]/60">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 font-mono text-[10px] text-[#a7a2ad]">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <span>{project.name.toLowerCase()}.runtime</span>
                  </div>
                  <div className="flex items-center gap-3 py-1">
                    <div className="w-9 h-9 rounded-lg bg-[#880826]/40 border border-[#ff1a53]/40 flex items-center justify-center text-[#ff1a53]">
                      <Braces size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-syne text-xs font-bold text-white">
                        {project.name}
                      </span>
                      <span className="font-mono text-[9px] text-emerald-400">
                        {project.architectureHighlight || "Engineered for 60fps"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Art Tech Pills */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#a7a2ad] line-clamp-1">
                    {project.tagline || project.name}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#ff1a53] transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-syne text-2xl font-bold text-white mb-2 group-hover:text-[#ff1a53] transition-colors">
                    {project.name}
                  </h3>

                  <p className="font-display text-sm text-[#a7a2ad] leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Outcomes */}
                  <div className="space-y-2 mb-6">
                    {project.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-mono text-[#f5f3f5]">
                        <CheckCircle2 size={13} className="text-[#ff1a53] mt-0.5 flex-shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Tech Stack and Links */}
                <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/5 font-mono text-[10px] text-[#a7a2ad]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 rounded bg-white/[0.04] font-mono text-[10px] text-[#a7a2ad]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Direct Store / Web Links */}
                  <div className="flex items-center gap-3 text-xs font-mono">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#a7a2ad] hover:text-[#ff1a53] flex items-center gap-1 transition-colors"
                        title="Live Website"
                      >
                        <Globe size={13} />
                        <span>Web</span>
                      </a>
                    )}
                    {project.iosUrl && (
                      <a
                        href={project.iosUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#a7a2ad] hover:text-[#ff1a53] flex items-center gap-1 transition-colors"
                        title="Apple App Store"
                      >
                        <Apple size={13} />
                        <span>iOS</span>
                      </a>
                    )}
                    {project.androidUrl && (
                      <a
                        href={project.androidUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#a7a2ad] hover:text-[#ff1a53] flex items-center gap-1 transition-colors"
                        title="Google Play Store"
                      >
                        <Play size={13} />
                        <span>Play</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
