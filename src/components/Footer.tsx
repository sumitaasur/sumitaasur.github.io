"use client";

import { ArrowUp, ArrowUpRight, Terminal } from "lucide-react";
import { portfolio, socialProfiles } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-8 border-t border-white/10 bg-[#060507]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand Monogram & Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff1a53] to-[#880826] text-white font-syne font-black text-sm flex items-center justify-center shadow-[0_0_15px_rgba(255,26,83,0.4)]">
            SP
          </div>
          <div>
            <div className="font-syne text-sm font-bold text-white">
              {portfolio.name} &bull; {portfolio.title}
            </div>
            <div className="font-mono text-xs text-[#a7a2ad]">
              {portfolio.location} &bull; {portfolio.coordinates}
            </div>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-[#a7a2ad]">
          {socialProfiles.map((item) => (
            <a
              key={item.platform}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff1a53] transition-colors capitalize"
            >
              {item.platform}
            </a>
          ))}
        </div>

        {/* Right: Back to Top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-[#a7a2ad] hidden lg:inline">
            &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#ff1a53] text-white font-mono text-xs font-semibold transition-all group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

