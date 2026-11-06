"use client";

import { useEffect, useRef } from "react";
import { X, ExternalLink, Apple, Play, CheckCircle2, Braces, Sparkles, Globe, GitFork } from "lucide-react";
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
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#120f16] border border-[#ff1a53]/40 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.8)] box-glow-crimson"
      >
        {/* Close Button */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff1a53] text-white flex items-center justify-center transition-colors"
          aria-label="Close project modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff1a53] uppercase tracking-wider mb-2">
            <span>SPECIFICATION {"//"} {project.category.toUpperCase()}</span>
          </div>
          <h2
            id="modal-project-title"
            className="font-syne text-2xl sm:text-4xl font-extrabold text-white mb-2"
          >
            {project.name}
          </h2>
          {project.tagline && (
            <p className="font-mono text-xs sm:text-sm text-emerald-400">
              {project.tagline}
            </p>
          )}
        </div>

        {/* Architecture Highlight Box */}
        {project.architectureHighlight && (
          <div className="p-4 rounded-xl bg-[#18040a] border border-[#ff1a53]/30 mb-6 flex items-start gap-3">
            <Braces size={18} className="text-[#ff1a53] mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-mono text-[10px] text-[#ff1a53] uppercase font-bold tracking-wider block">
                ENGINEERING ARCHITECTURE HIGHLIGHT
              </span>
              <p className="font-mono text-xs text-white mt-0.5">
                {project.architectureHighlight}
              </p>
            </div>
          </div>
        )}

        {/* Description */}
        <div className="space-y-4 font-display text-sm sm:text-base text-[#a7a2ad] leading-relaxed mb-6">
          <p>{project.description}</p>
        </div>

        {/* Outcomes */}
        <div className="mb-6">
          <span className="font-mono text-xs uppercase tracking-wider text-[#ff1a53] font-bold block mb-3">
            VERIFIED OUTCOMES &amp; DELIVERABLES
          </span>
          <div className="space-y-2">
            {project.outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-mono text-white">
                <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies List */}
        <div className="mb-8">
          <span className="font-mono text-xs uppercase tracking-wider text-[#a7a2ad] block mb-3">
            TECHNOLOGY STACK
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 font-mono text-xs text-white"
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
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#ff1a53] text-white font-mono text-xs font-bold hover:shadow-[0_0_20px_rgba(255,26,83,0.5)] transition-all"
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
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold transition-all"
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
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold transition-all"
            >
              <Play size={14} />
              <span>GOOGLE PLAY STORE</span>
              <ExternalLink size={12} />
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold transition-all"
            >
              <GitFork size={14} />
              <span>REPOSITORY</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
