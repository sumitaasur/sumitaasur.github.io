"use client";

import { portfolio } from "@/data/portfolio";

export default function ClientMarquee() {
  const clients = portfolio.marqueeClients;
  const tech = portfolio.marqueeTech;

  return (
    <section
      style={{ contain: "paint" }}
      className="relative py-12 sm:py-16 overflow-hidden bg-[#080709] border-y border-white/5 max-w-[100vw]"
    >
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#ff174d]/5 via-transparent to-[#ff174d]/5 opacity-50"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-6">
        {/* Track 1: Client Brands & Organizations (Moving Left) */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee-left flex items-center gap-8">
            {[...clients, ...clients, ...clients].map((client, idx) => (
              <div
                key={`client-${idx}`}
                className="flex items-center gap-6 font-syne text-lg sm:text-2xl font-bold uppercase tracking-tight text-[#f5f3f5]/80 hover:text-[#ff174d] transition-colors"
              >
                <span>{client}</span>
                <span className="text-[#ff174d] text-sm">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Core Engineering Stack & Tooling (Moving Right) */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee-right flex items-center gap-8">
            {[...tech, ...tech, ...tech].map((item, idx) => (
              <div
                key={`tech-${idx}`}
                className="flex items-center gap-6 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#a7a1a8] hover:text-white transition-colors"
              >
                <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/5">
                  {item}
                </span>
                <span className="text-white/20">{"//"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
