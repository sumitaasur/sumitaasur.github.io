"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, Sparkles, Terminal } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const navItems = [
  { label: "Overview", href: "#top" },
  { label: "Architecture", href: "#architecture" },
  { label: "Selected Work", href: "#projects" },
  { label: "Performance", href: "#performance" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "Toolkit", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("top");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["top", "architecture", "projects", "performance", "process", "experience", "skills", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.2, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Bar with Floating Pill Container */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-5 transition-all duration-300 pointer-events-none ${
          isScrolled ? "backdrop-blur-sm bg-black/25" : ""
        }`}
      >
        {/* Left: Brand Monogram & Coordinates */}
        <div className="pointer-events-auto flex items-center gap-3">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("top");
            }}
            className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#120f16]/90 border border-white/10 hover:border-[#ff1a53]/50 transition-all duration-200 backdrop-blur-md"
            aria-label={`${portfolio.name} home`}
          >
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ff1a53] to-[#880826] text-white font-mono text-[11px] font-bold flex items-center justify-center shadow-[0_0_12px_rgba(255,26,83,0.4)]">
              SP
            </span>
            <div className="flex flex-col">
              <span className="font-syne text-xs font-bold tracking-tight text-white group-hover:text-[#ff1a53] transition-colors">
                {portfolio.name}
              </span>
              <span className="font-mono text-[9px] text-[#a7a2ad] hidden sm:inline">
                {portfolio.coordinates}
              </span>
            </div>
          </a>

          {/* Availability Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#120f16]/90 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
            <span className="font-mono text-[10px] tracking-wider uppercase text-emerald-300 font-semibold">
              {portfolio.availabilityBadge}
            </span>
          </div>
        </div>

        {/* Center: Desktop Floating Navigation Pill */}
        <nav
          className="pointer-events-auto hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#120f16]/90 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          aria-label="Primary Navigation"
        >
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id);
                }}
                className={`relative px-3.5 py-1.5 rounded-full font-mono text-xs transition-all duration-200 ${
                  isActive
                    ? "text-white font-bold bg-[#ff1a53] shadow-[0_0_16px_rgba(255,26,83,0.5)]"
                    : "text-[#a7a2ad] hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Quick Action CTA & Mobile Toggle */}
        <div className="pointer-events-auto flex items-center gap-2.5">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#880826] to-[#ff1a53] text-white font-mono text-xs font-bold hover:shadow-[0_0_24px_rgba(255,26,83,0.5)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>DISPATCH</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#120f16]/95 border border-white/10 text-white hover:border-[#ff1a53] transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 md:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span className="font-mono text-[10px] text-emerald-300 uppercase tracking-wider">
                {portfolio.availabilityBadge}
              </span>
            </div>

            <p className="font-mono text-[10px] uppercase tracking-widest text-[#a7a2ad] mb-1">
              INDEX DIRECTORY
            </p>

            {navItems.map((item, idx) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(id);
                  }}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-base font-syne font-semibold ${
                    isActive
                      ? "bg-[#ff1a53]/15 border-[#ff1a53] text-[#ff1a53]"
                      : "bg-[#120f16] border-white/5 text-white hover:border-white/20"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs opacity-50">0{idx + 1}</span>
                    {item.label}
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#880826] to-[#ff1a53] text-white font-mono text-sm font-bold shadow-[0_0_25px_rgba(255,26,83,0.4)]"
            >
              <span>DISPATCH MESSAGE</span>
              <ArrowUpRight size={16} />
            </a>
            <div className="flex items-center justify-between text-xs font-mono text-[#a7a2ad]">
              <span>{portfolio.location}</span>
              <span>{portfolio.experienceLabel}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

