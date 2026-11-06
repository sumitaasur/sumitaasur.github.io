"use client";

import { useState } from "react";
import {
  ExternalLink,
  ArrowUpRight,
  Globe,
  CheckCircle2,
  Apple,
  Play,
  Braces,
  Tag,
  AlertTriangle,
} from "lucide-react";
import { portfolio, type PortfolioProject, type ProjectCategory } from "@/data/portfolio";

const filterTabs: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Works (15)" },
  { id: "backend-fullstack", label: "Backend & Full Stack" },
  { id: "mobile", label: "Mobile & Native" },
  { id: "ai-web3d", label: "AI & WebGL 3D" },
  { id: "fintech-health", label: "Fintech & Healthcare" },
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
      aria-label="Production Project Repository"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#ff174d]/10 blur-[180px] rounded-full"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff174d] uppercase tracking-widest mb-3">
            <span data-type>04 {"//"} COMMERCIAL PRODUCTION REPOSITORY</span>
          </div>
          <h2
            data-reveal="center"
            className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase font-normal leading-[0.9]"
          >
            Selected Works &amp; <br />
            <span className="text-[#ff174d] text-outline-hero">Shipped Platforms.</span>
          </h2>
        </div>
        <div data-reveal className="max-w-md font-mono text-xs sm:text-sm text-[#a7a1a8]">
          Production applications spanning full-stack web architectures, cross-platform mobile apps, and 3D WebGL platforms across the US, Europe, UAE, Australia, and India.
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
              data-pop
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer touch-target ${
                isActive
                  ? "bg-[#ff174d] text-white shadow-[0_0_20px_rgba(255,23,77,0.5)]"
                  : "bg-[#0e0c10] text-[#a7a1a8] border border-white/10 hover:border-white/30 hover:text-white"
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
          const accentColor = project.accent || "#ff174d";

          return (
            <article
              key={project.name}
              data-reveal
              data-cursor="project"
              data-cursor-text="INSPECT"
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl bg-[#0e0c10] border border-white/10 hover:border-[#ff174d]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:-translate-y-1"
            >
              {/* Card Visual Artwork Preview Header */}
              <div
                className="relative w-full aspect-[16/9] overflow-hidden p-6 flex flex-col justify-between"
                style={{
                  background: `linear-gradient(135deg, #140a10 0%, #0e0c10 60%, ${accentColor}18 100%)`,
                }}
              >
                <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

                {/* Top Art Info */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-white/50 tracking-wider">
                      0{index + 1} {"//"} ARCHIVE
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/10 font-mono text-[10px] text-white uppercase font-bold">
                      {project.industry}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#ff174d] transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Holographic Mockup Box */}
                <div className="relative z-10 self-center w-full max-w-xs p-4 rounded-xl bg-black/75 border border-white/15 backdrop-blur-md shadow-2xl transition-transform duration-300 group-hover:scale-105 group-hover:border-[#ff174d]/60">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 font-mono text-[10px] text-[#a7a1a8]">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <span>{project.name.toLowerCase()}.service</span>
                  </div>
                  <div className="flex items-center gap-3 py-1">
                    <div className="w-9 h-9 rounded-lg bg-[#ff174d]/20 border border-[#ff174d]/40 flex items-center justify-center text-[#ff174d]">
                      <Braces size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-syne text-xs font-bold text-white">
                        {project.name}
                      </span>
                      <span className="font-mono text-[9px] text-emerald-400 truncate max-w-[170px]">
                        {project.architectureHighlight || "Production Engineered"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Art Tech Tagline */}
                <div className="relative z-10 font-mono text-xs text-[#a7a1a8] line-clamp-1">
                  {project.tagline || project.overview}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 data-type className="font-syne text-2xl font-bold text-white group-hover:text-[#ff174d] transition-colors">
                      {project.name}
                    </h3>
                    <span data-pop className="text-xs font-mono text-[#ff174d] uppercase font-semibold">
                      {project.industry}
                    </span>
                  </div>

                  <p className="font-display text-xs sm:text-sm text-[#a7a1a8] leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Contributions */}
                  <div className="space-y-1.5 mb-5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff174d] font-bold block">
                      KEY ENGINEERING CONTRIBUTION
                    </span>
                    {project.myContribution.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-mono text-[#f5f3f5]">
                        <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Tech Stack and Links */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        data-pop
                        className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/5 font-mono text-[10px] text-[#a7a1a8]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded bg-white/[0.04] font-mono text-[10px] text-[#a7a1a8]">
                        +{project.technologies.length - 4}
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
                        className="text-[#a7a1a8] hover:text-[#ff174d] flex items-center gap-1 transition-colors touch-target"
                        title="Live Platform"
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
                        className="text-[#a7a1a8] hover:text-[#ff174d] flex items-center gap-1 transition-colors touch-target"
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
                        className="text-[#a7a1a8] hover:text-[#ff174d] flex items-center gap-1 transition-colors touch-target"
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
