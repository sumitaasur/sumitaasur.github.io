"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, CheckCircle2, MapPin, Sparkles, Terminal } from "lucide-react";
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
      className="relative min-h-screen w-full bg-[#080709] text-white overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 select-none"
      aria-label="Hero Section"
    >
      {/* Background Atmosphere: Subtle Grain & Controlled Neon Crimson Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-noise opacity-30 z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-[95vw] h-[450px] bg-gradient-to-b from-[#ff174d]/15 via-[#e5093f]/10 to-transparent blur-[140px] z-0"
        aria-hidden="true"
      />

      {/* Scattered Aesthetic Floating Cursor Pointers (WAIL reference) */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
        {/* Top Left Green Cursor */}
        <div className="absolute top-24 left-[5%] hidden lg:flex items-center gap-1.5 opacity-85 animate-bounce duration-1000">
          <svg className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_8px_#34d399]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
          </svg>
        </div>

        {/* Mid Left Neon Red Cursor */}
        <div className="absolute bottom-36 left-[3%] hidden sm:flex items-center gap-1.5 opacity-90">
          <svg className="w-5 h-5 text-[#ff174d] drop-shadow-[0_0_8px_#ff174d]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
          </svg>
        </div>

        {/* Top Right Orange Cursor */}
        <div className="absolute top-24 right-[12%] hidden md:flex items-center gap-1.5 opacity-85">
          <svg className="w-5 h-5 text-[#f97316] drop-shadow-[0_0_8px_#f97316]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
          </svg>
        </div>

        {/* Bottom Right Blue Cursor */}
        <div className="absolute bottom-32 right-[6%] hidden lg:flex items-center gap-1.5 opacity-85">
          <svg className="w-5 h-5 text-[#38bdf8] drop-shadow-[0_0_8px_#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
          </svg>
        </div>
      </div>

      {/* MASSIVE CONDENSED NEON RED "PORTFOLIO" TYPOGRAPHY (Behind Portrait) */}
      <div
        className="pointer-events-none absolute top-[20%] sm:top-[18%] lg:top-[14%] left-0 right-0 w-full flex justify-center items-center z-0 overflow-hidden leading-none select-none px-2"
        aria-hidden="true"
      >
        <span className="font-bebas text-[clamp(3.8rem,16vw,20.5rem)] text-[#ff174d] tracking-tight uppercase font-normal opacity-90 scale-y-105 drop-shadow-[0_0_35px_rgba(255,23,77,0.35)] whitespace-nowrap">
          PORTFOLIO
        </span>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 flex-grow flex flex-col justify-end">
        
        {/* ======================================================== */}
        {/* DESKTOP COMPOSITION (lg:grid-cols-12, >=1024px)         */}
        {/* ======================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-end w-full relative pb-4">
          
          {/* LEFT: Intro block (WAIL exact composition) */}
          <div className="lg:col-span-4 flex flex-col justify-end z-20 pb-4 xl:pb-8">
            <div className="mb-1 -rotate-2 transform-gpu flex items-center gap-2">
              <span className="font-handwriting text-3xl xl:text-4xl text-[#fef08a] font-normal tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Hello, I&apos;m
              </span>
              <svg className="w-4 h-4 text-emerald-400 rotate-[-15deg] drop-shadow-[0_0_6px_#34d399]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
              </svg>
            </div>

            <div className="mb-2">
              <h1 className="font-bebas text-7xl xl:text-9xl tracking-tight text-[#ff174d] font-normal leading-[0.88] uppercase drop-shadow-[0_0_25px_rgba(255,23,77,0.35)]">
                {portfolio.shortName}.
              </h1>
            </div>

            <div className="space-y-0.5 mb-4">
              <h2 className="font-bebas text-3xl xl:text-4xl tracking-wider text-white font-normal uppercase leading-tight">
                FULL STACK ENGINEER
              </h2>
              <h2 className="font-bebas text-3xl xl:text-4xl tracking-wider text-[#ff174d] font-normal uppercase leading-tight">
                &amp; TECHNICAL LEAD
              </h2>
              <p className="font-mono text-xs xl:text-sm text-[#ff174d] uppercase tracking-wider font-bold pt-1">
                NODE.JS | REACT.JS | AI / GENAI
              </p>
            </div>

            <p className="font-display text-xs xl:text-sm text-[#a7a1a8] leading-relaxed max-w-md mb-6">
              {portfolio.heroIntro}
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToWork}
                  data-cursor="project"
                  data-cursor-text="EXPLORE"
                  className="btn-neon px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider rounded-sm flex items-center gap-2 cursor-pointer touch-target shadow-[0_0_25px_rgba(255,23,77,0.4)]"
                >
                  <span>View my work</span>
                  <ArrowDown size={14} />
                </button>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-[#a7a1a8] tracking-wider uppercase mt-1">
                <svg className="w-3.5 h-3.5 text-[#ff174d]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
                </svg>
                <span>{portfolio.location}</span>
              </div>
            </div>
          </div>

          {/* CENTER: Foreground Transparent Portrait */}
          <div className="lg:col-span-4 flex justify-center items-end relative z-10 -mb-4 xl:-mb-6">
            <div className="relative w-[360px] xl:w-[470px] 2xl:w-[520px] aspect-[1211/1299] max-h-[72vh] flex items-end justify-center pointer-events-none">
              <Image
                src="/images/sumit-portrait.png"
                alt="Sumit Pramanik - Full Stack Engineer (Node.js, React.js, AI/GenAI)"
                fill
                priority
                sizes="(max-width: 1280px) 470px, 520px"
                className="object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)]"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080709] via-[#080709]/80 to-transparent z-10"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* RIGHT: Information Panel (WAIL exact composition) */}
          <div className="lg:col-span-4 flex flex-col justify-end z-20 pb-4 xl:pb-8 pl-4">
            <div className="mb-6 space-y-0.5">
              <div className="flex items-center gap-2 font-mono text-xs text-[#ff174d]">
                <span className="text-base leading-none">✳</span>
                <span className="text-white font-medium">Scalable systems.</span>
              </div>
              <p className="font-mono text-xs text-[#a7a1a8] pl-4">
                Measurable engineering impact.
              </p>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-5">
              {portfolio.heroStats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`flex items-baseline gap-4 group ${
                    idx > 0 ? "border-t border-white/5 pt-3.5" : ""
                  }`}
                >
                  <span className="font-bebas text-5xl xl:text-6xl text-[#ff174d] font-normal leading-none w-20 flex-shrink-0 group-hover:text-white transition-colors drop-shadow-[0_0_15px_rgba(255,23,77,0.3)]">
                    {stat.value}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold tracking-wider text-white uppercase flex items-center gap-1.5">
                      <span>{stat.label}</span>
                      {idx === 2 && <ArrowUpRight size={13} className="text-[#ff174d]" />}
                    </span>
                    <span className="font-mono text-[11px] text-[#a7a1a8] mt-0.5">
                      {stat.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TABLET COMPOSITION (md:max-lg, 768px - 1023px)          */}
        {/* ======================================================== */}
        <div className="hidden md:flex lg:hidden flex-col gap-8 pb-8 z-10">
          {/* Upper row: Left intro & Right stats side by side */}
          <div className="grid grid-cols-2 gap-6 items-start">
            <div className="flex flex-col">
              <div className="mb-1 -rotate-2 flex items-center gap-2">
                <span className="font-handwriting text-3xl text-[#fef08a]">
                  Hello, I&apos;m
                </span>
                <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
                </svg>
              </div>
              <h1 className="font-bebas text-7xl text-[#ff174d] leading-none uppercase mb-2">
                {portfolio.shortName}.
              </h1>
              <h2 className="font-bebas text-2xl text-white uppercase tracking-wider">
                FULL STACK ENGINEER
              </h2>
              <h2 className="font-bebas text-2xl text-[#ff174d] uppercase tracking-wider">
                &amp; TECHNICAL LEAD
              </h2>
              <p className="font-mono text-xs text-[#ff174d] uppercase font-bold my-2">
                NODE.JS | REACT.JS | AI / GENAI
              </p>
              <p className="font-display text-xs text-[#a7a1a8] leading-relaxed mb-4">
                {portfolio.heroIntro}
              </p>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToWork}
                  className="btn-neon px-5 py-3 font-mono text-xs font-bold uppercase rounded-sm flex items-center gap-2 w-fit touch-target"
                >
                  <span>View my work</span>
                  <ArrowDown size={14} />
                </button>
                <div className="flex items-center gap-1.5 font-mono text-xs text-[#a7a1a8] uppercase">
                  <MapPin size={12} className="text-[#ff174d]" />
                  <span>{portfolio.location}</span>
                </div>
              </div>
            </div>

            {/* Right Stats */}
            <div className="p-5 rounded-2xl bg-[#11080c] border border-white/10 space-y-4">
              <div className="font-mono text-xs text-[#ff174d] flex items-center gap-1.5">
                <span className="text-sm">✳</span>
                <span className="text-white font-medium">Scalable systems &bull; Measurable impact</span>
              </div>
              <div className="space-y-3 pt-2 border-t border-white/10">
                {portfolio.heroStats.map((stat) => (
                  <div key={stat.label} className="flex items-baseline gap-3">
                    <span className="font-bebas text-4xl text-[#ff174d] leading-none w-14 flex-shrink-0">
                      {stat.value}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-mono text-xs font-bold text-white uppercase">
                        {stat.label}
                      </span>
                      <span className="font-mono text-[10px] text-[#a7a1a8]">
                        {stat.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Central Portrait Section for Tablet */}
          <div className="flex justify-center items-end relative pt-4">
            <div className="relative w-[340px] sm:w-[380px] aspect-[1211/1299] flex items-end justify-center pointer-events-none">
              <Image
                src="/images/sumit-portrait.png"
                alt="Sumit Pramanik - Full Stack Engineer"
                fill
                priority
                sizes="380px"
                className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#080709] via-[#080709]/80 to-transparent z-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE COMPOSITION (<768px, 320px - 767px)              */}
        {/* ======================================================== */}
        <div className="flex md:hidden flex-col gap-5 pb-6 z-10 w-full">
          
          {/* Mobile Hero Top: Introduction */}
          <div className="flex flex-col">
            <div className="mb-0.5 -rotate-1 flex items-center gap-1.5">
              <span className="font-handwriting text-2xl text-[#fef08a] drop-shadow-md">
                Hello, I&apos;m
              </span>
              <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
              </svg>
            </div>

            <h1 className="font-bebas text-6xl xs:text-7xl text-[#ff174d] leading-none uppercase tracking-tight mb-1">
              {portfolio.shortName}.
            </h1>

            <h2 className="font-bebas text-xl xs:text-2xl text-white uppercase tracking-wider leading-tight">
              FULL STACK ENGINEER
            </h2>
            <h2 className="font-bebas text-xl xs:text-2xl text-[#ff174d] uppercase tracking-wider leading-tight">
              &amp; TECHNICAL LEAD
            </h2>

            <p className="font-mono text-[11px] text-[#ff174d] uppercase font-bold tracking-wider my-2">
              NODE.JS | REACT.JS | AI / GENAI
            </p>
          </div>

          {/* Mobile Central Portrait (Centered with scaled background PORTFOLIO) */}
          <div className="relative flex justify-center items-end my-1">
            <div className="relative w-[280px] xs:w-[310px] sm:w-[340px] aspect-[1211/1299] max-h-[50vh] flex items-end justify-center pointer-events-none">
              <Image
                src="/images/sumit-portrait.png"
                alt="Sumit Pramanik - Full Stack Engineer"
                fill
                priority
                sizes="(max-width: 640px) 310px, 340px"
                className="object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#080709] via-[#080709]/80 to-transparent z-10"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Short Introduction Paragraph */}
          <p className="font-display text-xs text-[#a7a1a8] leading-relaxed">
            {portfolio.heroIntro}
          </p>

          {/* Full-width Primary CTA on mobile */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={scrollToWork}
              className="btn-neon w-full py-3.5 font-mono text-xs font-bold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 cursor-pointer touch-target shadow-[0_0_20px_rgba(255,23,77,0.35)]"
            >
              <span>View my work</span>
              <ArrowDown size={14} />
            </button>

            <div className="flex items-center justify-center gap-1.5 font-mono text-[11px] text-[#a7a1a8] uppercase">
              <MapPin size={12} className="text-[#ff174d]" />
              <span>{portfolio.location}</span>
            </div>
          </div>

          {/* Statistics Grid for Mobile (2 Columns) */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {portfolio.heroStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`p-3.5 rounded-xl bg-[#11080c] border border-white/10 flex flex-col justify-between ${
                  idx === 2 ? "col-span-2" : ""
                }`}
              >
                <span className="font-bebas text-4xl text-[#ff174d] leading-none mb-1">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="font-mono text-[9px] text-[#a7a1a8] mt-0.5">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* RESPONSIVE TECHNICAL IDENTITY CARD (SAHI & WAIL Bridge) */}
        {/* ======================================================== */}
        <div className="relative z-20 my-6 sm:my-8 w-full">
          <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-[#130d12] via-[#0e080c] to-[#080709] border border-[#ff174d]/30 box-glow-crimson relative overflow-hidden">
            {/* Corner Decorative Tech Marks */}
            <span className="absolute top-2.5 left-2.5 font-mono text-[9px] text-[#ff174d]/70 font-bold">+</span>
            <span className="absolute top-2.5 right-2.5 font-mono text-[9px] text-[#ff174d]/70 font-bold">+</span>
            <span className="absolute bottom-2.5 left-2.5 font-mono text-[9px] text-[#ff174d]/70 font-bold">+</span>
            <span className="absolute bottom-2.5 right-2.5 font-mono text-[9px] text-[#ff174d]/70 font-bold">+</span>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Identity Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#ff174d] to-[#e5093f] text-white flex items-center justify-center font-bebas text-2xl font-bold flex-shrink-0 shadow-[0_0_20px_rgba(255,23,77,0.5)]">
                  SP
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                    <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                      ACTIVE &bull; AVAILABLE FOR WORK
                    </span>
                  </div>
                  <h3 className="font-syne text-xl sm:text-2xl font-bold text-white">
                    {portfolio.name}
                  </h3>
                  <p className="font-mono text-xs text-[#ff174d] font-semibold mt-0.5">
                    {portfolio.primaryTitle} &bull; {portfolio.experienceYears} Years
                  </p>
                </div>
              </div>

              {/* Technical Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 font-mono text-xs flex-grow lg:px-6 py-3 lg:py-0 border-y lg:border-y-0 lg:border-x border-white/10">
                <div>
                  <span className="text-[#a7a1a8] text-[10px] uppercase block">CORE STACK</span>
                  <span className="text-white font-semibold">Node &bull; React &bull; Native &bull; Mongo</span>
                </div>
                <div>
                  <span className="text-[#a7a1a8] text-[10px] uppercase block">APP STORE &amp; PROD</span>
                  <span className="text-white font-semibold">17+ Apps &bull; 8+ Store Launches</span>
                </div>
                <div>
                  <span className="text-[#a7a1a8] text-[10px] uppercase block">LOCATION</span>
                  <span className="text-white font-semibold">Jaipur, India &bull; Global Remote</span>
                </div>
                <div>
                  <span className="text-[#a7a1a8] text-[10px] uppercase block">AVAILABILITY</span>
                  <span className="text-emerald-300 font-semibold">Open to opportunities</span>
                </div>
              </div>

              {/* Full Width / Sized Action CTA */}
              <div className="flex-shrink-0">
                <button
                  type="button"
                  onClick={scrollToContact}
                  data-cursor="contact"
                  data-cursor-text="TALK"
                  className="btn-neon w-full lg:w-auto px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 cursor-pointer touch-target shadow-[0_0_20px_rgba(255,23,77,0.35)]"
                >
                  <span>INITIATE DIRECT DISPATCH</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* BOTTOM BAR: Scroll indicator, Availability, Thin Line    */}
      {/* ======================================================== */}
      <div className="relative z-20 w-full border-t border-white/10 bg-[#080709]/95 backdrop-blur-sm">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-[#a7a1a8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff174d]" />
            <span className="text-white font-semibold uppercase tracking-wider">
              FEATURED WORKS {"//"} 17+ PROD APPS
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToWork}
            className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown size={13} className="text-[#ff174d] animate-bounce" />
          </button>

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
