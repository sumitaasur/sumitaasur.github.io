"use client";

import { useState } from "react";
import {
  Code2,
  Workflow,
  Smartphone,
  Layers,
  Gauge,
  Rocket,
  ShieldCheck,
  Laptop,
  Braces,
  Cpu,
} from "lucide-react";
import {
  SiAndroidstudio,
  SiApple,
  SiFirebase,
  SiJavascript,
  SiJenkins,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTypescript,
  SiXcode,
} from "react-icons/si";
import { portfolio } from "@/data/portfolio";

export default function SkillsSection() {
  const [selectedGroupIdx, setSelectedGroupIdx] = useState(0);

  const groups = portfolio.skillGroups;
  const currentGroup = groups[selectedGroupIdx] || groups[0];

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case "react":
        return <SiReact className="text-[#61dafb]" />;
      case "next":
        return <SiNextdotjs className="text-white" />;
      case "typescript":
        return <SiTypescript className="text-[#3178c6]" />;
      case "javascript":
        return <SiJavascript className="text-[#f7df1e]" />;
      case "redux":
        return <SiRedux className="text-[#764abc]" />;
      case "node":
        return <SiNodedotjs className="text-[#339933]" />;
      case "firebase":
        return <SiFirebase className="text-[#ffca28]" />;
      case "jenkins":
        return <SiJenkins className="text-[#d24939]" />;
      case "apple":
        return <SiApple className="text-white" />;
      case "android":
        return <SiAndroidstudio className="text-[#3ddc84]" />;
      case "xcode":
        return <SiXcode className="text-[#1575f9]" />;
      case "linux":
        return <SiLinux className="text-[#fcc624]" />;
      case "api":
        return <Braces className="text-[#ff174d]" />;
      case "ai":
        return <Cpu className="text-[#ff174d]" />;
      case "performance":
        return <Gauge className="text-[#ff174d]" />;
      case "architecture":
        return <Workflow className="text-[#ff174d]" />;
      case "cloud":
        return <Laptop className="text-[#ff174d]" />;
      case "testing":
        return <ShieldCheck className="text-[#ff174d]" />;
      case "delivery":
        return <Rocket className="text-[#ff174d]" />;
      case "mobile":
        return <Smartphone className="text-[#ff174d]" />;
      default:
        return <Code2 className="text-[#ff174d]" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-label="Technical Skills and Capabilities"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff174d] uppercase tracking-widest mb-3">
            <span>07 {"//"} TECHNICAL TOOLKIT</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            Specialized Stack &amp; <br />
            <span className="text-outline-hero">Core Capabilities.</span>
          </h2>
        </div>
        <div className="max-w-md font-mono text-xs sm:text-sm text-[#a7a1a8]">
          A breakdown of languages, frameworks, native SDKs, state management libraries, and cloud services deployed across 8+ years of production engineering.
        </div>
      </div>

      {/* Group Navigation Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-10">
        {groups.map((group, index) => {
          const isActive = index === selectedGroupIdx;
          return (
            <button
              key={group.name}
              type="button"
              onClick={() => setSelectedGroupIdx(index)}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer touch-target ${
                isActive
                  ? "bg-[#ff174d] text-white shadow-[0_0_20px_rgba(255,23,77,0.5)]"
                  : "bg-[#0e0c10] text-[#a7a1a8] border border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              <span className="opacity-60">0{index + 1}</span>
              <span>{group.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentGroup.skills.map((item) => (
          <div
            key={item.name}
            className="p-5 rounded-2xl bg-[#0e0c10] border border-white/10 hover:border-[#ff174d]/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {getTechIcon(item.icon)}
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-emerald-400 font-semibold uppercase">
                  VERIFIED
                </span>
              </div>

              <h3 className="font-syne text-lg font-bold text-white mb-2 group-hover:text-[#ff174d] transition-colors">
                {item.name}
              </h3>

              <p className="font-display text-xs sm:text-sm text-[#a7a1a8] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
