"use client";

import { useEffect, useRef } from "react";
import { X, ExternalLink, Apple, Play, CheckCircle2, Braces, Globe, GitFork, AlertTriangle } from "lucide-react";
import { type PortfolioProject } from "@/data/portfolio";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: PortfolioProject | null;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    document.body.classList.add("dialog-open");
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("dialog-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e0c10] border border-[#ff174d]/40 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.8)] box-glow-crimson"
      >
        {/* Close Button */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-[#ff174d] text-white flex items-center justify-center transition-colors cursor-pointer touch-target"
          aria-label="Close project modal"
        >
          <X size={18} />
        </button>

        {/* Industry & Status */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-[#ff174d]/15 border border-[#ff174d]/30 font-mono text-[11px] text-[#ff174d] font-bold uppercase">
            {project.industry}
          </span>
          <span className="font-mono text-xs text-[#a7a1a8]">
            PRODUCTION RECORD
          </span>
        </div>

        {/* Title */}
        <h2
          id="modal-project-title"
          className="font-syne text-2xl sm:text-4xl font-extrabold text-white mb-2"
        >
          {project.name}
        </h2>

        {/* Tagline / Subtitle */}
        <p className="font-mono text-xs text-[#ff174d] font-medium mb-6">
          {project.tagline || project.overview}
        </p>

        {/* Overview */}
        <div className="mb-6">
          <span className="font-mono text-xs uppercase tracking-wider text-[#a7a1a8] block mb-2">
            SYSTEM OVERVIEW
          </span>
          <p className="font-display text-sm sm:text-base text-[#f5f3f5] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Architecture Highlight */}
        {project.architectureHighlight && (
          <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs">
            <span className="text-[#ff174d] font-bold uppercase block mb-1">
              ARCHITECTURAL HIGHLIGHT
            </span>
            <p className="text-[#a7a1a8]">{project.architectureHighlight}</p>
          </div>
        )}

        {/* Key Engineering Contributions */}
        <div className="mb-6">
          <span className="font-mono text-xs uppercase tracking-wider text-[#ff174d] font-bold block mb-3">
            VERIFIED RESUME CONTRIBUTIONS
          </span>
          <div className="space-y-2">
            {project.myContribution.map((contribution, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-display text-[#a7a1a8]">
                <CheckCircle2 size={16} className="text-[#ff174d] mt-0.5 flex-shrink-0" />
                <span>{contribution}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Challenges & Solutions */}
        {project.engineeringChallenges && (
          <div className="mb-6 p-4 rounded-xl bg-[#080709] border border-white/10 font-mono text-xs">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold uppercase mb-2">
              <AlertTriangle size={14} />
              <span>CORE TECHNICAL CHALLENGE &amp; SOLUTION</span>
            </div>
            <p className="text-[#a7a1a8] leading-relaxed">
              {project.engineeringChallenges}
            </p>
          </div>
        )}

        {/* Technologies Grid */}
        <div className="mb-8">
          <span className="font-mono text-xs uppercase tracking-wider text-[#a7a1a8] block mb-3">
            TECHNOLOGY STACK
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 font-mono text-xs text-white font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-neon inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all touch-target"
            >
              <Globe size={14} />
              <span>VISIT LIVE PLATFORM</span>
              <ExternalLink size={12} />
            </a>
          )}

          {project.iosUrl && (
            <a
              href={project.iosUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold transition-all touch-target"
            >
              <Apple size={14} />
              <span>APPLE APP STORE</span>
              <ExternalLink size={12} />
            </a>
          )}

          {project.androidUrl && (
            <a
              href={project.androidUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold transition-all touch-target"
            >
              <Play size={14} />
              <span>GOOGLE PLAY</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
