"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin, Play } from "lucide-react";
import gsap from "gsap";
import AnimatedText from "@/components/AnimatedText";
import { portfolio } from "@/data/portfolio";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Respect prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(
          [
            ".hero-top",
            ".hero-portfolio-ch",
            ".hero-handwriting-ch",
            ".hero-sumit-ch",
            ".hero-role-ch",
            ".hero-portrait-img",
            ".hero-manifesto",
            ".hero-stat-item",
            ".hero-description",
            ".hero-cta",
            ".hero-location",
            ".hero-bottom",
          ],
          { opacity: 1, y: 0, x: 0, scale: 1, filter: "none" }
        );
        return;
      }

      // GSAP Orchestrated Cinematic Animation Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Top information appears
      tl.fromTo(
        ".hero-top",
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.7 }
      );

      // 2. PORTFOLIO characters reveal sequentially (blur-to-sharp & vertical rise)
      tl.fromTo(
        ".hero-portfolio-ch",
        {
          opacity: 0,
          y: 45,
          scale: 0.94,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.05,
        },
        "-=0.3"
      );

      // 3. Handwritten Hello, I'm appears
      tl.fromTo(
        ".hero-handwriting-ch",
        {
          opacity: 0,
          y: 12,
          filter: "blur(4px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.45,
          stagger: 0.03,
        },
        "-=0.2"
      );

      // 4. SUMIT identity appears
      tl.fromTo(
        ".hero-sumit-ch",
        {
          opacity: 0,
          y: 35,
          scale: 0.92,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.65,
          stagger: 0.08,
        },
        "-=0.2"
      );

      // 5. Professional title animates
      tl.fromTo(
        ".hero-role-ch",
        {
          opacity: 0,
          y: 16,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.02,
        },
        "-=0.3"
      );

      // 6. Portrait reveals with a smooth masked upward emergence
      tl.fromTo(
        ".hero-portrait-img",
        {
          opacity: 0,
          y: 55,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power2.out",
        },
        "-=0.6"
      );

      // 7. Right-side statistics appear
      tl.fromTo(
        [".hero-manifesto", ".hero-stat-item"],
        {
          opacity: 0,
          x: 25,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.1,
        },
        "-=0.7"
      );

      // 8. Description, CTA, location and bottom bar fade into view
      tl.fromTo(
        [".hero-description", ".hero-cta", ".hero-location", ".hero-bottom"],
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
        },
        "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-screen w-full bg-[#080709] text-white overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 select-none"
      aria-label="Hero Section"
    >
      {/* Background Atmosphere: Subtle Grain & Controlled Crimson Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-noise opacity-30 z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] max-w-[95vw] h-[480px] bg-gradient-to-b from-[#ff174d]/15 via-[#e5093f]/10 to-transparent blur-[140px] z-0"
        aria-hidden="true"
      />

      {/* Scattered Aesthetic Floating Cursor Pointers (WAIL Signature Detail) */}
      <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden" aria-hidden="true">
        {/* Top Left Green Cursor (Near Hello, I'm) */}
        <div className="absolute top-28 left-[4%] hidden lg:flex items-center gap-1.5 opacity-85 animate-bounce duration-1000">
          <svg className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_8px_#34d399]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
          </svg>
        </div>

        {/* Mid Left Neon Red Cursor */}
        <div className="absolute bottom-40 left-[2.5%] hidden sm:flex items-center gap-1.5 opacity-90">
          <svg className="w-4 h-4 text-[#ff174d] drop-shadow-[0_0_8px_#ff174d]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
          </svg>
        </div>

        {/* Top Right Orange Cursor */}
        <div className="absolute top-28 right-[10%] hidden md:flex items-center gap-1.5 opacity-85">
          <svg className="w-4 h-4 text-[#f97316] drop-shadow-[0_0_8px_#f97316]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
          </svg>
        </div>

        {/* Bottom Right Cyan/Blue Cursor */}
        <div className="absolute bottom-32 right-[5%] hidden lg:flex items-center gap-1.5 opacity-85">
          <svg className="w-4 h-4 text-[#38bdf8] drop-shadow-[0_0_8px_#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
          </svg>
        </div>
      </div>

      {/* ======================================================== */}
      {/* LAYER 1 — TOP INFORMATION BAR (Inside Hero Container)    */}
      {/* ======================================================== */}
      <div className="relative z-20 w-full max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 pt-2">
        <div className="hero-top flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs font-mono">
          <div className="flex flex-col">
            <span className="font-bold uppercase tracking-widest text-white text-[11px] sm:text-xs">
              FULL STACK ENGINEER / AI APPLICATION DEVELOPER
            </span>
            <span className="text-[#a7a1a8] text-[10px] tracking-wider uppercase">
              NODE.JS · REACT.JS · REACT NATIVE · NEXT.JS
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
            <span className="font-semibold uppercase tracking-wider text-emerald-300 text-[10px] sm:text-[11px]">
              AVAILABLE FOR SELECTED OPPORTUNITIES
            </span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* LAYER 2 — MASSIVE BACKGROUND "PORTFOLIO" TYPOGRAPHY      */}
      {/* (Character-by-character animated, behind central photo) */}
      {/* ======================================================== */}
      <div
        className="hero-title pointer-events-none absolute top-[20%] sm:top-[16%] lg:top-[13%] left-0 right-0 w-full flex justify-center items-center z-0 overflow-hidden leading-none select-none px-2"
        aria-hidden="true"
      >
        <AnimatedText
          text="PORTFOLIO"
          className="font-bebas text-[clamp(4.6rem,18.8vw,22.5rem)] text-[#ff174d] tracking-tight uppercase font-normal leading-none drop-shadow-[0_12px_35px_rgba(255,23,77,0.35)] whitespace-nowrap"
          charClassName="hero-portfolio-ch"
        />
      </div>

      {/* ======================================================== */}
      {/* MAIN STAGE WRAPPER: DESKTOP & TABLET / MOBILE LAYOUTS   */}
      {/* ======================================================== */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 flex-grow flex flex-col justify-end">
        
        {/* ======================================================== */}
        {/* DESKTOP VIEWPORT (>= 1024px)                             */}
        {/* Exact WAIL overlapping editorial composition:            */}
        {/* Left Intro + Central Foreground Portrait + Right Stats   */}
        {/* ======================================================== */}
        <div className="hidden lg:flex items-end justify-between w-full relative pb-4 min-h-[580px] xl:min-h-[640px]">
          
          {/* ------------------------------------------------------ */}
          {/* LAYER 4 — LEFT INTRODUCTION                           */}
          {/* ------------------------------------------------------ */}
          <div className="hero-intro flex flex-col justify-end z-20 max-w-md xl:max-w-lg pb-4 xl:pb-6">
            
            {/* Handwritten Hello, I'm */}
            <div className="mb-1 -rotate-2 transform-gpu inline-flex items-center gap-2">
              <AnimatedText
                text="Hello, I'm"
                as="p"
                className="font-handwriting text-3xl xl:text-4xl text-[#fef08a] font-normal tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                charClassName="hero-handwriting-ch"
              />
              <svg className="w-4 h-4 text-emerald-400 rotate-[-15deg] drop-shadow-[0_0_6px_#34d399]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
              </svg>
            </div>

            {/* WAIL-Style Bold SUMIT. Identity */}
            <div className="mb-2">
              <AnimatedText
                text="SUMIT."
                as="h1"
                className="font-bebas text-7xl sm:text-8xl xl:text-9xl tracking-tight text-[#ff174d] font-normal leading-[0.85] uppercase drop-shadow-[0_0_25px_rgba(255,23,77,0.35)]"
                charClassName="hero-sumit-ch"
              />
            </div>

            {/* Professional Titles */}
            <div className="space-y-0.5 mb-3">
              <AnimatedText
                text="FULL STACK ENGINEER"
                as="h2"
                className="font-bebas text-3xl xl:text-4xl tracking-wider text-white font-normal uppercase leading-tight"
                charClassName="hero-role-ch"
              />
              <div className="font-mono text-xs xl:text-sm font-bold text-[#ff174d] uppercase tracking-wider pt-1 space-y-0.5">
                <div>NODE.JS &amp; REACT.JS</div>
                <div>AI / GENAI APPLICATION DEVELOPMENT</div>
              </div>
            </div>

            {/* Editorial Description */}
            <p className="hero-description font-display text-xs xl:text-sm text-[#a7a1a8] leading-relaxed max-w-md mb-6">
              I engineer production-grade web, mobile and backend applications using Node.js, React.js, React Native, Next.js and MongoDB.
              <br className="hidden xl:inline" />
              {" "}Building scalable systems, reliable APIs and intelligent digital experiences with 8+ years of engineering experience.
            </p>

            {/* Primary Action Button & Coordinates */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToWork}
                  data-cursor="project"
                  data-cursor-text="EXPLORE"
                  className="hero-cta btn-neon px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-wider rounded-sm inline-flex items-center gap-2 cursor-pointer touch-target shadow-[0_0_25px_rgba(255,23,77,0.4)]"
                >
                  <span>View my work</span>
                  <ArrowDown size={14} />
                </button>
              </div>

              <div className="hero-location flex items-center gap-2 font-mono text-xs text-[#a7a1a8] tracking-wider uppercase mt-1">
                <svg className="w-3.5 h-3.5 text-[#ff174d]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
                </svg>
                <span>JAIPUR, INDIA</span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* LAYER 3 — CENTRAL FOREGROUND PORTRAIT (Desktop Center) */}
          {/* ------------------------------------------------------ */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 flex justify-center items-end pointer-events-none">
            <div className="relative w-[440px] xl:w-[540px] 2xl:w-[600px] aspect-[1211/1299] max-h-[76vh] flex items-end justify-center">
              <Image
                src="/images/sumit-portrait.png"
                alt="Sumit Pramanik - Full Stack Engineer & Technical Lead"
                fill
                priority
                sizes="(max-width: 1280px) 540px, 600px"
                className="hero-portrait-img object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
              />
              {/* Seamless gradient fade at bottom to blend into floor bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20 xl:h-28 bg-gradient-to-t from-[#080709] via-[#080709]/80 to-transparent z-10 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* LAYER 5 — RIGHT INFORMATION PANEL (Compact Editorial)  */}
          {/* ------------------------------------------------------ */}
          <div className="hero-side flex flex-col justify-end z-20 max-w-xs xl:max-w-sm pb-4 xl:pb-6 pl-4">
            
            {/* Subtle Manifesto */}
            <div className="hero-manifesto mb-6 flex items-start gap-2.5">
              <span className="text-xl text-[#ff174d] leading-none" aria-hidden="true">✳</span>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                  SCALABLE SYSTEMS.
                </p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#a7a1a8]">
                  MEASURABLE ENGINEERING IMPACT.
                </p>
              </div>
            </div>

            {/* Statistics with thin horizontal hairline borders */}
            <div className="hero-stats space-y-4 border-t border-white/10 pt-5">
              
              {/* Stat 1: 8+ Years */}
              <div className="hero-stat-item flex items-baseline gap-4 group">
                <span className="font-bebas text-5xl xl:text-6xl text-[#ff174d] font-normal leading-none w-20 flex-shrink-0 group-hover:text-white transition-colors drop-shadow-[0_0_15px_rgba(255,23,77,0.3)]">
                  8+
                </span>
                <div className="flex flex-col">
                  <span className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                    YEARS OF EXPERIENCE
                  </span>
                  <span className="font-mono text-[11px] text-[#a7a1a8] mt-0.5">
                    FULL STACK &amp; TECH LEAD
                  </span>
                </div>
              </div>

              {/* Stat 2: 17+ Apps */}
              <div className="hero-stat-item flex items-baseline gap-4 group border-t border-white/5 pt-3.5">
                <span className="font-bebas text-5xl xl:text-6xl text-[#ff174d] font-normal leading-none w-20 flex-shrink-0 group-hover:text-white transition-colors drop-shadow-[0_0_15px_rgba(255,23,77,0.3)]">
                  17+
                </span>
                <div className="flex flex-col">
                  <span className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                    APPLICATIONS DELIVERED
                  </span>
                  <span className="font-mono text-[11px] text-[#a7a1a8] mt-0.5">
                    WEB · MOBILE · ENTERPRISE
                  </span>
                </div>
              </div>

              {/* Stat 3: 6 Industries */}
              <div className="hero-stat-item flex items-baseline gap-4 group border-t border-white/5 pt-3.5">
                <span className="font-bebas text-5xl xl:text-6xl text-[#ff174d] font-normal leading-none w-20 flex-shrink-0 group-hover:text-white transition-colors drop-shadow-[0_0_15px_rgba(255,23,77,0.3)]">
                  6
                </span>
                <div className="flex flex-col">
                  <button
                    type="button"
                    onClick={scrollToWork}
                    className="font-mono text-xs font-bold tracking-wider text-white uppercase flex items-center gap-1.5 hover:text-[#ff174d] transition-colors text-left cursor-pointer"
                  >
                    <span>INDUSTRIES SERVED</span>
                    <ArrowUpRight size={13} className="text-[#ff174d]" />
                  </button>
                  <span className="font-mono text-[10px] text-[#a7a1a8] mt-0.5 leading-tight">
                    FINTECH · HEALTHCARE · FITNESS · LOGISTICS · EDUCATION · E-COMMERCE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TABLET VIEWPORT (768px - 1023px)                         */}
        {/* Proportional upper split + Centered portrait            */}
        {/* ======================================================== */}
        <div className="hidden md:flex lg:hidden flex-col gap-6 pb-6 z-10 w-full">
          {/* Upper row: Left intro & Right stats side by side */}
          <div className="grid grid-cols-2 gap-6 items-start">
            <div className="flex flex-col">
              <div className="mb-1 -rotate-2 flex items-center gap-2">
                <AnimatedText
                  text="Hello, I'm"
                  as="p"
                  className="font-handwriting text-3xl text-[#fef08a]"
                  charClassName="hero-handwriting-ch"
                />
                <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
                </svg>
              </div>
              <AnimatedText
                text="SUMIT."
                as="h1"
                className="font-bebas text-7xl text-[#ff174d] leading-none uppercase mb-2"
                charClassName="hero-sumit-ch"
              />
              <AnimatedText
                text="FULL STACK ENGINEER"
                as="h2"
                className="font-bebas text-2xl text-white uppercase tracking-wider"
                charClassName="hero-role-ch"
              />
              <div className="font-mono text-xs font-bold text-[#ff174d] uppercase my-2">
                NODE.JS &amp; REACT.JS · AI / GENAI
              </div>
              <p className="hero-description font-display text-xs text-[#a7a1a8] leading-relaxed mb-4">
                I engineer production-grade web, mobile and backend applications using Node.js, React.js, React Native, Next.js and MongoDB. 8+ years experience.
              </p>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToWork}
                  className="hero-cta btn-neon px-5 py-3 font-mono text-xs font-bold uppercase rounded-sm flex items-center gap-2 w-fit touch-target"
                >
                  <span>View my work</span>
                  <ArrowDown size={14} />
                </button>
                <div className="hero-location flex items-center gap-1.5 font-mono text-xs text-[#a7a1a8] uppercase">
                  <MapPin size={12} className="text-[#ff174d]" />
                  <span>JAIPUR, INDIA</span>
                </div>
              </div>
            </div>

            {/* Right Statistics */}
            <div className="p-5 rounded-2xl bg-[#0e0c10]/80 backdrop-blur-md border border-white/10 space-y-4">
              <div className="hero-manifesto font-mono text-xs text-[#ff174d] flex items-center gap-1.5">
                <span className="text-base leading-none">✳</span>
                <span className="text-white font-medium">Scalable systems &bull; Measurable impact</span>
              </div>
              <div className="hero-stats space-y-3 pt-2 border-t border-white/10">
                <div className="hero-stat-item flex items-baseline gap-3">
                  <span className="font-bebas text-4xl text-[#ff174d] leading-none w-14 flex-shrink-0">8+</span>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-white uppercase">YEARS OF EXPERIENCE</span>
                    <span className="font-mono text-[10px] text-[#a7a1a8]">FULL STACK &amp; TECH LEAD</span>
                  </div>
                </div>
                <div className="hero-stat-item flex items-baseline gap-3 border-t border-white/5 pt-2">
                  <span className="font-bebas text-4xl text-[#ff174d] leading-none w-14 flex-shrink-0">17+</span>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-white uppercase">APPLICATIONS DELIVERED</span>
                    <span className="font-mono text-[10px] text-[#a7a1a8]">WEB · MOBILE · ENTERPRISE</span>
                  </div>
                </div>
                <div className="hero-stat-item flex items-baseline gap-3 border-t border-white/5 pt-2">
                  <span className="font-bebas text-4xl text-[#ff174d] leading-none w-14 flex-shrink-0">6</span>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-white uppercase">INDUSTRIES SERVED</span>
                    <span className="font-mono text-[9px] text-[#a7a1a8]">FINTECH · HEALTH · LOGISTICS · AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Central Portrait for Tablet */}
          <div className="flex justify-center items-end relative pt-2">
            <div className="relative w-[360px] aspect-[1211/1299] flex items-end justify-center pointer-events-none">
              <Image
                src="/images/sumit-portrait.png"
                alt="Sumit Pramanik - Full Stack Engineer"
                fill
                priority
                sizes="360px"
                className="hero-portrait-img object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080709] via-[#080709]/80 to-transparent z-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEWPORT (< 768px, 320px - 767px)                 */}
        {/* Dedicated vertical editorial composition                 */}
        {/* ======================================================== */}
        <div className="flex md:hidden flex-col gap-4 pb-4 z-10 w-full">
          
          {/* Mobile Introduction */}
          <div className="flex flex-col">
            <div className="mb-0.5 -rotate-1 flex items-center gap-1.5">
              <AnimatedText
                text="Hello, I'm"
                as="p"
                className="font-handwriting text-2xl text-[#fef08a] drop-shadow-md"
                charClassName="hero-handwriting-ch"
              />
              <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 2l16 11.5-7.5 1.5-4 7-2.5-1.5 4-7L4 12V2z" />
              </svg>
            </div>

            <AnimatedText
              text="SUMIT."
              as="h1"
              className="font-bebas text-6xl xs:text-7xl text-[#ff174d] leading-none uppercase tracking-tight mb-1"
              charClassName="hero-sumit-ch"
            />

            <AnimatedText
              text="FULL STACK ENGINEER"
              as="h2"
              className="font-bebas text-xl xs:text-2xl text-white uppercase tracking-wider leading-tight"
              charClassName="hero-role-ch"
            />

            <div className="font-mono text-[11px] text-[#ff174d] uppercase font-bold tracking-wider my-1.5 space-y-0.5">
              <div>NODE.JS &amp; REACT.JS</div>
              <div>AI / GENAI APPLICATION DEVELOPMENT</div>
            </div>
          </div>

          {/* Central Portrait (Centered with scaled background PORTFOLIO) */}
          <div className="relative flex justify-center items-end my-0.5">
            <div className="relative w-[280px] xs:w-[310px] aspect-[1211/1299] max-h-[46vh] flex items-end justify-center pointer-events-none">
              <Image
                src="/images/sumit-portrait.png"
                alt="Sumit Pramanik - Full Stack Engineer"
                fill
                priority
                sizes="(max-width: 640px) 310px"
                className="hero-portrait-img object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#080709] via-[#080709]/80 to-transparent z-10"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Short Introduction Paragraph */}
          <p className="hero-description font-display text-xs text-[#a7a1a8] leading-relaxed">
            I engineer production-grade web, mobile and backend applications using Node.js, React.js, React Native, Next.js and MongoDB. 8+ years engineering experience.
          </p>

          {/* Full-width Primary CTA on mobile */}
          <div className="flex flex-col gap-2.5">
            <button
              type="button"
              onClick={scrollToWork}
              className="hero-cta btn-neon w-full py-3.5 font-mono text-xs font-bold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 cursor-pointer touch-target shadow-[0_0_20px_rgba(255,23,77,0.35)]"
            >
              <span>View my work</span>
              <ArrowDown size={14} />
            </button>

            <div className="hero-location flex items-center justify-center gap-1.5 font-mono text-[11px] text-[#a7a1a8] uppercase">
              <MapPin size={12} className="text-[#ff174d]" />
              <span>JAIPUR, INDIA</span>
            </div>
          </div>

          {/* Statistics Grid for Mobile (2 Columns) */}
          <div className="hero-stats grid grid-cols-2 gap-2.5 pt-1">
            <div className="hero-stat-item p-3 rounded-xl bg-[#0e0c10] border border-white/10 flex flex-col justify-between">
              <span className="font-bebas text-3xl text-[#ff174d] leading-none mb-1">8+</span>
              <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">YEARS EXP</span>
              <span className="font-mono text-[9px] text-[#a7a1a8] mt-0.5">FULL STACK &amp; LEAD</span>
            </div>

            <div className="hero-stat-item p-3 rounded-xl bg-[#0e0c10] border border-white/10 flex flex-col justify-between">
              <span className="font-bebas text-3xl text-[#ff174d] leading-none mb-1">17+</span>
              <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">APPS DELIVERED</span>
              <span className="font-mono text-[9px] text-[#a7a1a8] mt-0.5">WEB · MOBILE · PROD</span>
            </div>

            <div className="hero-stat-item col-span-2 p-3 rounded-xl bg-[#0e0c10] border border-white/10 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider block">
                  6 INDUSTRIES SERVED
                </span>
                <span className="font-mono text-[9px] text-[#a7a1a8]">
                  FINTECH · HEALTHCARE · LOGISTICS · AI
                </span>
              </div>
              <span className="font-bebas text-3xl text-[#ff174d] leading-none pl-2">6</span>
            </div>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* LAYER 6 — BOTTOM BAR (Replicating WAIL's bottom footer)  */}
      {/* ======================================================== */}
      <div className="hero-bottom relative z-20 w-full border-t border-white/10 bg-[#080709]/95 backdrop-blur-sm">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-3 sm:py-3.5 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-[#a7a1a8]">
          <button
            type="button"
            onClick={scrollToWork}
            className="flex items-center gap-2.5 text-white hover:text-[#ff174d] transition-colors cursor-pointer group"
          >
            <span className="w-5 h-5 rounded-full bg-[#ff174d] text-white flex items-center justify-center shadow-[0_0_10px_rgba(255,23,77,0.5)] group-hover:scale-110 transition-transform">
              <Play size={9} fill="currentColor" />
            </span>
            <span className="font-bold uppercase tracking-wider">EXPLORE FEATURED WORKS</span>
            <span className="text-[#a7a1a8] text-[10px] hidden sm:inline">{"// 17+ PROD APPS"}</span>
          </button>

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
            <span className="text-emerald-300 uppercase tracking-wider font-semibold text-[10px] sm:text-[11px]">
              FULL STACK &amp; AI ENGINEER — WORLDWIDE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
