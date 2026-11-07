"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { portfolio, socialProfiles } from "@/data/portfolio";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const inquiryTopics = [
  "Full Stack Architecture & Delivery",
  "AI / GenAI Application Integration",
  "Node.js Backend & REST API Design",
  "Cross-Platform React Native Mobile",
  "Technical Leadership & Consultation",
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(inquiryTopics[0]);
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [mailtoFallbackUrl, setMailtoFallbackUrl] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolio.email);
    setCopied(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#ff174d", "#e5093f", "#ffffff", "#ff2a5f"],
      });
    } catch {
      // Ignore confetti error
    }

    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setStatusMessage("");
    setIsSuccess(false);
    setMailtoFallbackUrl(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = ((formData.get("name") as string) || "").trim();
    const email = ((formData.get("email") as string) || "").trim();
    const userMessage = ((formData.get("message") as string) || "").trim();

    if (!name || name.length < 2 || name.length > 120) {
      setIsSuccess(false);
      setStatusMessage("Please enter a valid name (between 2 and 120 characters).");
      setSending(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 254) {
      setIsSuccess(false);
      setStatusMessage("Please enter a valid business email address.");
      setSending(false);
      return;
    }

    if (!userMessage || userMessage.length < 10 || userMessage.length > 4000) {
      setIsSuccess(false);
      setStatusMessage("Please enter a project message brief (between 10 and 4,000 characters).");
      setSending(false);
      return;
    }

    // Pre-construct client mailto fallback URL
    const mailSubject = encodeURIComponent(`Portfolio Inquiry [${selectedTopic}] - ${name}`);
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInquiry Classification: ${selectedTopic}\n\nProject Brief / Architecture Goals:\n${userMessage}`
    );
    const mailtoUrl = `mailto:${portfolio.email}?subject=${mailSubject}&body=${mailBody}`;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setIsSuccess(false);
      setStatusMessage("Email service is temporarily unconfigured. Please send your dispatch via direct email.");
      setMailtoFallbackUrl(mailtoUrl);
      setSending(false);
      return;
    }

    // Provide all template parameter variants to support both owner notification and visitor auto-reply templates
    const templateParams = {
      name,
      from_name: name,
      title: selectedTopic || `Portfolio Inquiry from ${name}`,
      subject: `Portfolio Inquiry [${selectedTopic}] - ${name}`,
      email,
      from_email: email,
      reply_to: email,
      message: `[Inquiry Classification: ${selectedTopic}]\n\n${userMessage}`,
    };

    try {
      const res = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (res.status === 200 || res.text === "OK") {
        setIsSuccess(true);
        setStatusMessage("Transmission confirmed. I will review and reply within 24 hours.");
        form.reset();

        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#ff174d", "#22c55e", "#ffffff"],
          });
        } catch {
          // Ignore confetti error
        }
      } else {
        throw new Error(res.text || "Transmission failed.");
      }
    } catch (err: unknown) {
      setIsSuccess(false);
      const errText =
        (err && typeof err === "object" && "text" in err && typeof (err as { text: unknown }).text === "string"
          ? (err as { text: string }).text
          : (err as Error)?.message) || "Transmission failed. Please reach out directly or try again.";
      setStatusMessage(`Transmission error: ${errText}`);
      setMailtoFallbackUrl(mailtoUrl);
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
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#ff174d]/15 to-transparent blur-[180px] rounded-full"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff174d] uppercase tracking-widest mb-3">
            <span data-type>07 {"//"} INITIATE ENGAGEMENT</span>
          </div>
          <h2
            data-reveal="center"
            className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase font-normal leading-[0.9]"
          >
            Let&apos;s Build <br />
            <span className="text-[#ff174d] text-outline-hero">Something Real.</span>
          </h2>
        </div>
        <div data-reveal className="max-w-md font-mono text-xs sm:text-sm text-[#a7a1a8]">
          Available for Full Stack Engineering, AI application development, REST API architecture, and cross-platform leadership worldwide.
        </div>
      </div>

      {/* Main Grid: Left Direct Dispatch Details, Right Interactive Form Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Links & Coordinates */}
        <div className="lg:col-span-5 space-y-6">
          {/* Status Card */}
          <div data-reveal className="p-6 rounded-2xl bg-gradient-to-br from-[#140a10] via-[#0e080c] to-[#080709] border border-[#ff174d]/30 box-glow-crimson">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold">
                {portfolio.availabilityStatus}
              </span>
            </div>
            <p className="font-display text-xs sm:text-sm text-[#a7a1a8] leading-relaxed mb-5">
              {portfolio.name} &bull; {portfolio.primaryTitle}
            </p>

            {/* Quick Copy Email Button */}
            <button
              type="button"
              data-pop
              onClick={copyEmail}
              data-cursor="contact"
              data-cursor-text="COPY"
              className="w-full py-3.5 px-4 rounded-xl bg-white/[0.06] border border-white/10 hover:border-[#ff174d] text-white font-mono text-xs font-semibold flex items-center justify-between transition-all group cursor-pointer touch-target"
            >
              <div className="flex items-center gap-2.5 truncate">
                <Mail size={15} className="text-[#ff174d]" />
                <span className="truncate">{portfolio.email}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#ff174d] flex-shrink-0">
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? "COPIED" : "COPY"}</span>
              </div>
            </button>
          </div>

          {/* Direct Phone & Details */}
          <div data-reveal className="p-6 rounded-2xl bg-[#0e0c10] border border-white/10 space-y-3 font-mono text-xs">
            <a
              href={`tel:${portfolio.phone}`}
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff174d]/40 text-[#a7a1a8] hover:text-white transition-colors touch-target"
            >
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#ff174d]" />
                <span>{portfolio.phone}</span>
              </div>
              <ArrowUpRight size={14} />
            </a>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-[#a7a1a8]">
              <span>LOCATION BASE</span>
              <span className="text-white font-semibold">{portfolio.location}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-[#a7a1a8]">
              <span>TIMEZONE</span>
              <span className="text-white font-semibold">IST (UTC+5:30) &bull; Global Remote</span>
            </div>
          </div>

          {/* Verified Professional Profiles */}
          <div data-reveal className="p-6 rounded-2xl bg-[#0e0c10] border border-white/10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#a7a1a8] block mb-3">
              VERIFIED PROFESSIONAL NETWORKS
            </span>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={portfolio.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white hover:border-[#ff174d] hover:text-[#ff174d] font-mono text-xs transition-colors touch-target"
              >
                <FaLinkedin size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href={portfolio.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white hover:border-[#ff174d] hover:text-[#ff174d] font-mono text-xs transition-colors touch-target"
              >
                <SiGithub size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Transmission Terminal Form */}
        <div data-reveal className="lg:col-span-7 rounded-2xl bg-[#0e0c10] border border-white/10 p-6 sm:p-8 relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <Terminal size={15} data-pop className="text-[#ff174d]" />
              <span data-type className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                DIRECT TRANSMISSION {"//"} TERMINAL
              </span>
            </div>
            <span data-pop className="font-mono text-[10px] text-emerald-400">ENCRYPTED / SSL</span>
          </div>

          {/* Topic Selectors */}
          <div className="mb-6">
            <label className="font-mono text-xs text-[#a7a1a8] block mb-2.5">
              SELECT ENGAGEMENT CLASSIFICATION:
            </label>
            <div className="flex flex-wrap gap-2">
              {inquiryTopics.map((topic) => {
                const isSelected = selectedTopic === topic;
                return (
                  <button
                    key={topic}
                    type="button"
                    data-pop
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 cursor-pointer touch-target ${
                      isSelected
                        ? "bg-[#ff174d] text-white shadow-[0_0_15px_rgba(255,23,77,0.4)]"
                        : "bg-white/[0.04] text-[#a7a1a8] border border-white/5 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#a7a1a8] block mb-1.5">
                  YOUR NAME / ORGANIZATION *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  maxLength={100}
                  placeholder="e.g. Alex Rivera (Lead Architect)"
                  className="w-full px-4 py-3 rounded-xl bg-[#080709] border border-white/10 focus:border-[#ff174d] focus:outline-none text-white font-mono text-xs transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#a7a1a8] block mb-1.5">
                  BUSINESS EMAIL *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  maxLength={100}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#080709] border border-white/10 focus:border-[#ff174d] focus:outline-none text-white font-mono text-xs transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-[11px] uppercase tracking-wider text-[#a7a1a8] block mb-1.5">
                MESSAGE BRIEF / SYSTEM ARCHITECTURE GOALS *
              </label>
              <textarea
                name="message"
                required
                maxLength={4000}
                rows={5}
                placeholder="Describe your project requirements, technical architecture, or engineering role..."
                className="w-full px-4 py-3 rounded-xl bg-[#080709] border border-white/10 focus:border-[#ff174d] focus:outline-none text-white font-mono text-xs leading-relaxed resize-y transition-colors"
              />
            </div>

            {/* Status Feedback */}
            {statusMessage && (
              <div
                className={`p-3.5 rounded-xl font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isSuccess
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                    : "bg-rose-500/10 border border-rose-500/30 text-rose-300"
                }`}
                role="status"
              >
                <div className="flex items-center gap-2">
                  {isSuccess && <CheckCircle2 size={15} className="flex-shrink-0" />}
                  <span>{statusMessage}</span>
                </div>
                {mailtoFallbackUrl && (
                  <a
                    href={mailtoFallbackUrl}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-200 font-semibold transition-colors flex-shrink-0 touch-target"
                  >
                    <span>Open Mail App</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            )}

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="submit"
                data-pop
                disabled={sending}
                className="btn-neon inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase cursor-pointer disabled:opacity-50 touch-target"
              >
                <span>{sending ? "TRANSMITTING..." : "DISPATCH TRANSMISSION"}</span>
                <Send size={14} />
              </button>

              <span className="font-mono text-[11px] text-[#a7a1a8]">
                Direct Dispatch &bull; {portfolio.email}
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
