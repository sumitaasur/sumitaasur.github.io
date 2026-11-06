"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import { portfolio, socialProfiles } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-8 border-t border-white/10 bg-[#080709]">
      <div className="max-w-[1520px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand Monogram & Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff174d] to-[#e5093f] text-white font-syne font-black text-sm flex items-center justify-center shadow-[0_0_15px_rgba(255,23,77,0.4)]">
            SP
          </div>
          <div>
            <div className="font-syne text-sm font-bold text-white uppercase">
              {portfolio.name} &bull; {portfolio.primaryTitle}
            </div>
            <div className="font-mono text-xs text-[#a7a1a8]">
              Node.js &bull; React.js &bull; React Native &bull; AI / GenAI &bull; {portfolio.location}
            </div>
          </div>
        </div>

        {/* Center: Verified Profiles */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#a7a1a8]">
          <a
            href={portfolio.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff174d] transition-colors touch-target py-1"
          >
            LinkedIn
          </a>
          <a
            href={portfolio.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff174d] transition-colors touch-target py-1"
          >
            GitHub
          </a>
          <span className="text-white/20">|</span>
          <a
            href={`mailto:${portfolio.email}`}
            className="hover:text-[#ff174d] transition-colors touch-target py-1"
          >
            {portfolio.email}
          </a>
        </div>

        {/* Right: Back to Top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-[#a7a1a8] hidden lg:inline">
            &copy; {new Date().getFullYear()} {portfolio.name} &bull; ALL RIGHTS RESERVED
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#ff174d] hover:text-[#ff174d] text-white flex items-center justify-center transition-colors cursor-pointer touch-target"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
