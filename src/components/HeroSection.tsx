"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function HeroSection() {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen w-full bg-[#080709] text-white overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 select-none"
      aria-label="Hero Section"
    >
      {/* Background Atmosphere: Subtle Grain & Red Ambient Lighting */}
      <div
        className="pointer-events-none absolute inset-0 bg-noise opacity-40 z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#e11d48]/15 via-[#880826]/10 to-transparent blur-[160px] z-0"
        aria-hidden="true"
      />

      {/* Scattered Aesthetic Floating Cursor Pointers (WAIL reference) */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
        {/* Top Left Yellow/Green Cursor */}
        <div className="absolute top-28 left-[8%] hidden lg:flex items-center gap-1.5 opacity-80 animate-bounce duration-1000">
          <svg className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_8px_#34d399]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
          </svg>
        </div>

        {/* Mid Left Red Cursor */}
        <div className="absolute bottom-32 left-[4%] hidden sm:flex items-center gap-1.5 opacity-80">
          <svg className="w-5 h-5 text-[#ff1a53] drop-shadow-[0_0_8px_#ff1a53]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
          </svg>
        </div>

        {/* Top Right Orange/Red Cursor */}
        <div className="absolute top-28 right-[14%] hidden md:flex items-center gap-1.5 opacity-80">
          <svg className="w-5 h-5 text-[#f97316] drop-shadow-[0_0_8px_#f97316]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
          </svg>
        </div>

        {/* Bottom Right Blue Cursor */}
        <div className="absolute bottom-28 right-[8%] hidden lg:flex items-center gap-1.5 opacity-80">
          <svg className="w-5 h-5 text-[#38bdf8] drop-shadow-[0_0_8px_#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
          </svg>
        </div>
      </div>

      {/* MASSIVE CONDENSED RED "PORTFOLIO" TYPOGRAPHY (Spanning Viewport Behind Portrait) */}
      <div
        className="pointer-events-none absolute top-[28%] sm:top-[24%] lg:top-[20%] left-0 right-0 w-full flex justify-center items-center z-0 overflow-hidden leading-none select-none"
        aria-hidden="true"
      >
        <span className="font-bebas text-[clamp(6.5rem,19.5vw,22rem)] text-[#d61a3c] tracking-normal uppercase font-normal opacity-95 scale-y-110 drop-shadow-[0_0_35px_rgba(214,26,60,0.25)]">
          PORTFOLIO
        </span>
      </div>

      {/* MAIN HERO CONTENT COMPOSITION: Left Info, Central Portrait, Right Stats */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 flex-grow flex flex-col justify-end pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full relative">
          
          {/* ======================================================== */}
          {/* LEFT CONTENT: Handwritten greeting, Red SUMIT block, Bio */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-end z-20 pb-4 lg:pb-10">
            {/* Handwritten "Hello, I'm" */}
            <div className="mb-1 -rotate-2 transform-gpu">
              <span className="font-handwriting text-3xl sm:text-4xl text-[#fef08a] font-normal tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Hello, I&apos;m
              </span>
            </div>

            {/* Giant Red SUMIT Identity Block */}
            <div className="mb-3">
              <h1 className="font-bebas text-6xl sm:text-8xl lg:text-9xl tracking-tight text-[#e11d48] font-normal leading-[0.88] uppercase drop-shadow-[0_4px_20px_rgba(225,29,72,0.3)]">
                {portfolio.shortName}.
              </h1>
            </div>

            {/* Title & Sub-positioning */}
            <div className="space-y-1 mb-4">
              <h2 className="font-bebas text-xl sm:text-2xl tracking-wider text-white font-normal uppercase">
                {portfolio.primaryTitle}
              </h2>
              <p className="font-mono text-xs sm:text-[13px] text-[#ff1a53] uppercase tracking-wider font-semibold">
                NODE.JS | REACT.JS | AI / GENAI
              </p>
            </div>

            {/* Professional Introduction Paragraph */}
            <p className="font-display text-xs sm:text-sm text-[#a7a2ad] leading-relaxed max-w-md mb-6">
              {portfolio.heroIntro}
            </p>

            {/* View My Work CTA Button & Location */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToWork}
                data-cursor="project"
                data-cursor-text="EXPLORE"
                className="px-6 py-3.5 bg-[#e11d48] hover:bg-[#c8102e] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:shadow-[0_0_30px_rgba(225,29,72,0.6)] cursor-pointer"
              >
                <span>View my work</span>
                <ArrowDown size={14} />
              </button>

              <div className="flex items-center gap-1.5 font-mono text-xs text-[#a7a2ad] tracking-wider uppercase">
                <span className="text-[#ff1a53]">&bull;</span>
                <span>{portfolio.location}</span>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CENTRAL FOREGROUND PORTRAIT (Overlapping PORTFOLIO text) */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 flex justify-center items-end relative z-10 -mb-4 lg:-mb-8">
            <div className="relative w-[320px] sm:w-[420px] lg:w-[480px] xl:w-[520px] aspect-[4/5] max-h-[75vh] flex items-end justify-center pointer-events-none">
              {/* Portrait Image */}
              <Image
                src="/images/sumit-portrait.jpg"
                alt="Sumit Pramanik - Full Stack Engineer"
                fill
                priority
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 520px"
                className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />

              {/* Seamless Bottom Vignette Gradient to blend shoulders into floor */}
              <div
                className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080709] via-[#080709]/80 to-transparent z-10"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT INFORMATION PANEL: Tagline & 3 Big Stat Blocks    */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-end z-20 pb-4 lg:pb-10 pl-0 lg:pl-6">
            {/* Tagline / Subtitle */}
            <div className="mb-6 space-y-0.5">
              <div className="flex items-center gap-2 font-mono text-xs text-[#ff1a53]">
                <span>*</span>
                <span className="text-white font-medium">Scalable systems.</span>
              </div>
              <p className="font-mono text-xs text-[#a7a2ad] pl-3.5">
                Measurable engineering impact.
              </p>
            </div>

            {/* Vertical Stack of Statistics (Matching WAIL screenshot layout) */}
            <div className="space-y-4 border-t border-white/10 pt-5">
              {/* Stat 1: Years */}
              <div className="flex items-baseline gap-4 group">
                <span className="font-bebas text-5xl sm:text-6xl text-[#e11d48] font-normal leading-none w-16 sm:w-20 flex-shrink-0 group-hover:text-white transition-colors">
                  {portfolio.heroStats[0].value}
                </span>
                <div className="flex flex-col">
                  <span className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                    {portfolio.heroStats[0].label}
                  </span>
                  <span className="font-mono text-[11px] text-[#a7a2ad]">
                    {portfolio.heroStats[0].detail}
                  </span>
                </div>
              </div>

              {/* Stat 2: Apps */}
              <div className="flex items-baseline gap-4 group border-t border-white/5 pt-3.5">
                <span className="font-bebas text-5xl sm:text-6xl text-[#e11d48] font-normal leading-none w-16 sm:w-20 flex-shrink-0 group-hover:text-white transition-colors">
                  {portfolio.heroStats[1].value}
                </span>
                <div className="flex flex-col">
                  <span className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                    {portfolio.heroStats[1].label}
                  </span>
                  <span className="font-mono text-[11px] text-[#a7a2ad]">
                    {portfolio.heroStats[1].detail}
                  </span>
                </div>
              </div>

              {/* Stat 3: Industries */}
              <div className="flex items-baseline gap-4 group border-t border-white/5 pt-3.5">
                <span className="font-bebas text-5xl sm:text-6xl text-[#e11d48] font-normal leading-none w-16 sm:w-20 flex-shrink-0 group-hover:text-white transition-colors">
                  {portfolio.heroStats[2].value}
                </span>
                <div className="flex flex-col">
                  <span className="font-mono text-xs font-bold tracking-wider text-white uppercase flex items-center gap-1.5">
                    <span>{portfolio.heroStats[2].label}</span>
                    <ArrowUpRight size={13} className="text-[#ff1a53]" />
                  </span>
                  <span className="font-mono text-[10px] text-[#a7a2ad] leading-tight mt-0.5">
                    {portfolio.heroStats[2].detail}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* BOTTOM BAR: Scroll indicator, Availability, Thin Line    */}
      {/* ======================================================== */}
      <div className="relative z-20 w-full border-t border-white/10 bg-[#080709]/90 backdrop-blur-sm">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#a7a2ad]">
          {/* Left: Featured Work indicator */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff1a53]" />
            <span className="text-white font-semibold uppercase tracking-wider">FEATURED WORKS // 17+ PROD APPS</span>
          </div>

          {/* Center: Scroll to discover */}
          <button
            type="button"
            onClick={scrollToWork}
            className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown size={13} className="text-[#ff1a53] animate-bounce" />
          </button>

          {/* Right: Availability status */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
            <span className="text-emerald-300 uppercase tracking-wider font-semibold">
              {portfolio.availabilityStatus}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
