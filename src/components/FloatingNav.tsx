"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#architecture" },
  { label: "AI / GenAI", href: "#ai-engineering" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("top");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("dialog-open");
    } else {
      document.body.classList.remove("dialog-open");
    }
    return () => document.body.classList.remove("dialog-open");
  }, [mobileMenuOpen]);

  useEffect(() => {
    const sectionIds = ["top", "projects", "architecture", "ai-engineering", "about", "experience", "contact"];
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
      {/* Top Navbar Header matching WAIL sticky header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b border-[#292323] ${
          isScrolled
            ? "bg-[#080709]/98 backdrop-blur-md shadow-2xl"
            : "bg-[#080709]/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-[clamp(20px,3.8vw,68px)] h-[66px] flex items-center justify-between">
          {/* Left: Brand Monogram / Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("top");
            }}
            className="flex items-center gap-1.5 group touch-target"
            aria-label={`${portfolio.name} home`}
          >
            <span className="font-bebas text-2xl sm:text-3xl text-white tracking-wider uppercase group-hover:text-[#ff174d] transition-colors">
              SUMIT
            </span>
            <span className="font-mono text-xs text-[#ff174d] font-bold">®</span>
          </a>

          {/* Center: Desktop Nav Links (Hidden on mobile/tablet) */}
          <nav
            className="hidden lg:flex items-center gap-8 xl:gap-12"
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
                  className={`font-mono text-xs uppercase tracking-wider transition-colors relative py-2 touch-target flex items-center ${
                    isActive
                      ? "text-white font-bold"
                      : "text-[#a7a1a8] hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff174d]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Let's Talk CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              data-cursor="contact"
              data-cursor-text="TALK"
              className="hidden sm:inline-flex items-center gap-2 font-mono text-xs font-bold text-white hover:text-[#ff174d] uppercase tracking-wider transition-colors group px-3 py-2 touch-target"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight
                size={14}
                className="text-[#ff174d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white hover:border-[#ff174d] transition-colors touch-target cursor-pointer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} className="text-[#ff174d]" /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#080709]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 pt-24 lg:hidden animate-in fade-in duration-200 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button in drawer header */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#ff174d] transition-colors touch-target"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col gap-2 max-w-lg mx-auto w-full">
            <div className="flex items-center gap-2 px-3.5 py-1.5 mb-3 rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span className="font-mono text-[10px] text-emerald-300 uppercase tracking-wider font-semibold">
                {portfolio.availabilityStatus}
              </span>
            </div>

            <p className="font-mono text-[10px] uppercase tracking-widest text-[#a7a1a8] mb-2">
              NAVIGATION DIRECTORY
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
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all text-xl font-bebas tracking-wider uppercase touch-target ${
                    isActive
                      ? "bg-[#ff174d]/15 border-[#ff174d] text-[#ff174d]"
                      : "bg-[#11080c] border-white/5 text-white hover:border-white/20 active:bg-white/10"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs opacity-50">0{idx + 1}</span>
                    {item.label}
                  </span>
                  <ArrowUpRight size={18} />
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3 max-w-lg mx-auto w-full mt-6">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="btn-neon flex items-center justify-center gap-2 w-full py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-wider touch-target"
            >
              <span>INITIATE TRANSMISSION</span>
              <ArrowUpRight size={16} />
            </a>
            <div className="flex items-center justify-between text-xs font-mono text-[#a7a1a8] px-1">
              <span>{portfolio.location}</span>
              <span>{portfolio.experienceYears} Years Exp</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
