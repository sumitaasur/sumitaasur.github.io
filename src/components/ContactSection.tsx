"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Sparkles,
  Terminal,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { portfolio, socialProfiles } from "@/data/portfolio";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiInstagram, SiX, SiFacebook } from "react-icons/si";

const inquiryTopics = [
  "Technical Leadership & RFCs",
  "React Native Mobile Architecture",
  "Frontend Performance & Web Vitals",
  "Contract & Engineering Delivery",
  "General Consultation",
];

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: <FaLinkedin size={18} />,
  github: <SiGithub size={18} />,
  instagram: <SiInstagram size={18} />,
  x: <SiX size={18} />,
  facebook: <SiFacebook size={18} />,
};

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(inquiryTopics[0]);
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolio.email);
    setCopied(true);

    // Fire confetti celebration
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#ff1a53", "#880826", "#ffffff", "#fda4af"],
      });
    } catch {
      // Ignore if canvas is unsupported
    }

    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage("");
    setIsSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const userMessage = formData.get("message") as string;

    const payload = {
      name,
      email,
      message: `[Inquiry Topic: ${selectedTopic}]\n\n${userMessage}`,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setIsSuccess(true);
      setStatusMessage("Dispatch transmission successful. I will respond within 24 hours.");
      form.reset();

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#ff1a53", "#22c55e", "#ffffff"],
        });
      } catch {
        // Ignore confetti error
      }
    } catch (err) {
      setIsSuccess(false);
      setStatusMessage(
        err instanceof Error
          ? err.message
          : "Delivery error. Please use direct email link below."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-label="Contact and Dispatch Center"
    >
      {/* Background Section Glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#880826]/20 to-transparent blur-[180px] rounded-full"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff1a53] uppercase tracking-widest mb-3">
            <span>08 {"//"} TRANSMISSION TERMINAL</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            Let&apos;s Build Something <br />
            <span className="text-outline-hero">Extraordinary.</span>
          </h2>
        </div>
        <div className="max-w-md font-mono text-xs sm:text-sm text-[#a7a2ad]">
          Available for senior technical leadership, architecture consulting, and high-impact web and mobile engineering engagements worldwide.
        </div>
      </div>

      {/* Main Grid: Left Direct Dispatch Details, Right Interactive Form Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Links & Coordinates */}
        <div className="lg:col-span-5 space-y-6">
          {/* Status Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#18040a] via-[#10070d] to-[#080709] border border-[#ff1a53]/30 box-glow-crimson">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold">
                AVAILABILITY STATUS: ACTIVE
              </span>
            </div>
            <p className="font-display text-sm text-[#a7a2ad] leading-relaxed mb-5">
              Currently accepting selective opportunities for Technical Lead, Senior Full Stack Engineer, or Cross-Platform Architect roles.
            </p>

            {/* Quick Copy Email Button */}
            <button
              type="button"
              onClick={copyEmail}
              data-cursor="contact"
              data-cursor-text="COPY"
              className="w-full py-3 px-4 rounded-xl bg-white/[0.06] border border-white/10 hover:border-[#ff1a53] text-white font-mono text-xs font-semibold flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-2.5 truncate">
                <Mail size={15} className="text-[#ff1a53]" />
                <span className="truncate">{portfolio.email}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#ff1a53] flex-shrink-0">
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? "COPIED" : "COPY"}</span>
              </div>
            </button>
          </div>

          {/* Direct Phone & Details */}
          <div className="p-6 rounded-2xl bg-[#120f16] border border-white/10 space-y-4 font-mono text-xs">
            <a
              href={`tel:${portfolio.phone}`}
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff1a53]/40 text-[#a7a2ad] hover:text-white transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#ff1a53]" />
                <span>{portfolio.phone}</span>
              </div>
              <ArrowUpRight size={14} />
            </a>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-[#a7a2ad]">
              <span>COORDINATES</span>
              <span className="text-white font-semibold">{portfolio.coordinates}</span>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-[#a7a2ad]">
              <span>TIMEZONE</span>
              <span className="text-white font-semibold">IST (UTC+5:30) &bull; Global Remote Sync</span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-6 rounded-2xl bg-[#120f16] border border-white/10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#a7a2ad] block mb-3">
              PROFESSIONAL DIRECTORIES &amp; NETWORKS
            </span>
            <div className="flex flex-wrap gap-2.5">
              {socialProfiles.map((item) => (
                <a
                  key={item.platform}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white hover:border-[#ff1a53] hover:text-[#ff1a53] font-mono text-xs transition-colors"
                  aria-label={item.label}
                >
                  {socialIcons[item.platform]}
                  <span className="capitalize">{item.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Dispatch Terminal Form */}
        <div className="lg:col-span-7 rounded-2xl bg-[#120f16] border border-white/10 p-6 sm:p-8 relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <Terminal size={15} className="text-[#ff1a53]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                DISPATCH PROTOCOL {"//"} FORM
              </span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400">ENCRYPTED / SSL</span>
          </div>

          {/* Topic Selectors */}
          <div className="mb-6">
            <label className="font-mono text-xs text-[#a7a2ad] block mb-2.5">
              SELECT INQUIRY CLASSIFICATION:
            </label>
            <div className="flex flex-wrap gap-2">
              {inquiryTopics.map((topic) => {
                const isSelected = selectedTopic === topic;
                return (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                      isSelected
                        ? "bg-[#ff1a53] text-white font-bold shadow-[0_0_15px_rgba(255,26,83,0.4)]"
                        : "bg-white/[0.04] text-[#a7a2ad] border border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs text-[#a7a2ad] block mb-1.5">
                  YOUR NAME / STAKEHOLDER *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  maxLength={120}
                  placeholder="e.g. Elena Vance"
                  className="w-full px-4 py-3 rounded-xl bg-[#09070c] border border-white/10 focus:border-[#ff1a53] focus:outline-none text-white font-mono text-xs transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-[#a7a2ad] block mb-1.5">
                  DIRECT EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  maxLength={254}
                  placeholder="elena@enterprise.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#09070c] border border-white/10 focus:border-[#ff1a53] focus:outline-none text-white font-mono text-xs transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-xs text-[#a7a2ad] block mb-1.5">
                TRANSMISSION MESSAGE *
              </label>
              <textarea
                name="message"
                required
                maxLength={4000}
                rows={5}
                placeholder="Detail your engineering requirements, project scope, team leadership needs, or timelines..."
                className="w-full px-4 py-3 rounded-xl bg-[#09070c] border border-white/10 focus:border-[#ff1a53] focus:outline-none text-white font-mono text-xs leading-relaxed resize-y transition-colors"
              />
            </div>

            {/* Status Message */}
            {statusMessage && (
              <div
                className={`p-3.5 rounded-xl font-mono text-xs flex items-center gap-2 ${
                  isSuccess
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                    : "bg-rose-500/10 border border-rose-500/30 text-rose-300"
                }`}
                role="status"
              >
                {isSuccess && <CheckCircle2 size={15} />}
                <span>{statusMessage}</span>
              </div>
            )}

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#880826] to-[#ff1a53] text-white font-mono text-xs font-bold tracking-wider hover:shadow-[0_0_25px_rgba(255,26,83,0.5)] active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
              >
                <span>{sending ? "TRANSMITTING..." : "DISPATCH TRANSMISSION"}</span>
                <Send size={14} />
              </button>

              <span className="font-mono text-[11px] text-[#a7a2ad]">
                Direct SMTP or mailto fallback supported
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
