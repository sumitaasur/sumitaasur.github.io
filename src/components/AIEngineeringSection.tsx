"use client";

import { useState } from "react";
import {
  Cpu,
  Sparkles,
  Bot,
  Terminal,
  Search,
  Database,
  ArrowRight,
  Layers,
  Code2,
  CheckCircle2,
  AlertCircle,
  Zap,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function AIEngineeringSection() {
  const [activeStep, setActiveStep] = useState(0);
  const aiData = portfolio.aiSection;

  const ragPipelineSteps = [
    {
      step: "01",
      title: "Query & Ingestion",
      tech: "Node.js Controller",
      description: "User natural language request received, sanitized, and tokenized before embedding synthesis.",
    },
    {
      step: "02",
      title: "Vector Embedding",
      tech: "Embedding Model API",
      description: "Text converted into high-dimensional numerical vectors capturing semantic intent and relationships.",
    },
    {
      step: "03",
      title: "Similarity Search",
      tech: "Vector Index / Cosine Sim",
      description: "Top-K most relevant domain documents retrieved based on vector distance threshold.",
    },
    {
      step: "04",
      title: "Context Augmentation",
      tech: "System Prompt Injection",
      description: "Retrieved knowledge chunks injected into prompt template alongside conversation history guardrails.",
    },
    {
      step: "05",
      title: "Streaming Generation",
      tech: "Server-Sent Events (SSE)",
      description: "LLM synthesizes grounded response streamed character-by-character back to the React UI.",
    },
  ];

  return (
    <section
      id="ai-engineering"
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-label="AI and Generative AI Application Development"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#e11d48]/10 blur-[180px] rounded-full"
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff1a53] uppercase tracking-widest mb-3">
            <Sparkles size={14} />
            <span>02 {"//"} INTELLIGENT SYSTEMS INTERFACE</span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase font-normal leading-[0.9]">
            AI &amp; GenAI <br />
            <span className="text-[#e11d48] text-outline-hero">Application Engineering.</span>
          </h2>
        </div>
        <div className="max-w-md font-mono text-xs sm:text-sm text-[#a7a2ad] leading-relaxed">
          {aiData.description}
        </div>
      </div>

      {/* Core Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {aiData.capabilities.map((cap, idx) => (
          <div
            key={cap.title}
            className="p-6 sm:p-7 rounded-2xl bg-[#120f16] border border-white/10 hover:border-[#ff1a53]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#880826]/10 rounded-full blur-2xl group-hover:bg-[#ff1a53]/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#ff1a53] font-bold">
                  0{idx + 1} {"//"} CAPABILITY
                </span>
                <Bot size={18} className="text-[#a7a2ad] group-hover:text-[#ff1a53] transition-colors" />
              </div>

              <h3 className="font-syne text-xl font-bold text-white mb-3 group-hover:text-[#ff1a53] transition-colors">
                {cap.title}
              </h3>

              <p className="font-display text-xs sm:text-sm text-[#a7a2ad] leading-relaxed mb-6">
                {cap.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
              {cap.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/5 font-mono text-[10px] text-[#f5f3f5]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* AI-Assisted Engineering Workflow Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#18040a] to-[#120f16] border border-[#ff1a53]/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-emerald-400 font-bold uppercase">
                DAILY AUGMENTED TOOLKIT
              </span>
              <Terminal size={18} className="text-emerald-400" />
            </div>

            <h3 className="font-syne text-xl font-bold text-white mb-3">
              AI-Augmented Development
            </h3>

            <p className="font-display text-xs sm:text-sm text-[#a7a2ad] leading-relaxed mb-6">
              Daily power-user of agentic and assistive development environments to accelerate sprint turnaround by approximately 30% while maintaining rigorous code quality.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
            {["Claude", "Cursor", "GitHub Copilot", "ChatGPT", "Codex"].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-lg bg-white/10 text-white font-mono text-xs font-semibold"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive RAG Architecture Pipeline Schematic */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0b090e] border border-white/10 mb-16 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2.5">
            <Database size={18} className="text-[#ff1a53]" />
            <h3 className="font-syne text-lg sm:text-xl font-bold text-white">
              Interactive RAG Pipeline Architecture
            </h3>
          </div>
          <span className="font-mono text-xs text-[#a7a2ad]">
            Click any step to inspect technical layer
          </span>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6">
          {ragPipelineSteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#18040a] border-[#ff1a53] shadow-[0_0_20px_rgba(255,26,83,0.3)]"
                    : "bg-[#120f16] border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#ff1a53]">{step.step}</span>
                  {isSelected && <Zap size={12} className="text-[#ff1a53]" />}
                </div>
                <div className="font-syne text-xs sm:text-sm font-bold text-white mb-1 truncate">
                  {step.title}
                </div>
                <div className="font-mono text-[10px] text-[#a7a2ad] truncate">
                  {step.tech}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Console */}
        <div className="p-5 rounded-xl bg-[#120f16] border border-white/10 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[#ff1a53] font-bold uppercase tracking-wider text-[10px]">
              CURRENT ACTIVE STAGE: {ragPipelineSteps[activeStep].title} ({ragPipelineSteps[activeStep].tech})
            </span>
            <p className="text-white text-xs sm:text-sm font-display">
              {ragPipelineSteps[activeStep].description}
            </p>
          </div>
          <div className="px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] whitespace-nowrap self-start sm:self-center">
            ● NODE.JS PIPELINE VERIFIED
          </div>
        </div>
      </div>

      {/* Clearly Distinguished "Currently Expanding Into" Section */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#120f16] border border-white/10">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#a7a2ad] uppercase tracking-wider">
          <AlertCircle size={14} className="text-amber-400" />
          <span>CONTINUOUS LEARNING &amp; EXPANSION (PROTOTYPING &bull; NON-PRODUCTION)</span>
        </div>

        <h3 className="font-syne text-xl sm:text-2xl font-bold text-white mb-2">
          Expanding Technical Frontiers
        </h3>
        <p className="font-display text-xs sm:text-sm text-[#a7a2ad] mb-6 max-w-2xl">
          Transparently distinguishing established commercial production engineering (Node.js, React.js, React Native, Next.js) from emerging technologies currently being researched and prototyped:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {aiData.expandingInto.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-xl bg-[#09070c] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-syne text-lg font-bold text-white">{item.name}</h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-400/10 border border-amber-400/30 text-amber-300">
                    {item.status}
                  </span>
                </div>
                <p className="font-display text-xs text-[#a7a2ad] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
