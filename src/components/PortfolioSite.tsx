"use client";

import { useState } from "react";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import ClientMarquee from "@/components/ClientMarquee";
import AIEngineeringSection from "@/components/AIEngineeringSection";
import ArchitectureMatrix from "@/components/ArchitectureMatrix";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import ExperienceSection from "@/components/ExperienceSection";
import EditorialStory from "@/components/EditorialStory";
import ContactSection from "@/components/ContactSection";
import ProjectModal from "@/components/ProjectModal";
import Footer from "@/components/Footer";
import { type PortfolioProject } from "@/data/portfolio";

export default function PortfolioSite() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <SmoothScrollProvider>
      {/* Animated Multi-State Custom Cursor */}
      <CustomCursor />

      {/* WAIL-Inspired Top Navigation Bar */}
      <FloatingNav />

      {/* Main Content Stream */}
      <main id="main-content" className="relative z-10 overflow-hidden">
        {/* 1. High-Fidelity WAIL Recreation Hero with Sumit's Actual Portrait */}
        <HeroSection />

        {/* 2. Brand & Technology Continuous Marquee */}
        <ClientMarquee />

        {/* 3. Dedicated AI & GenAI Engineering Section (Intelligent Systems Interface) */}
        <AIEngineeringSection />

        {/* 4. Connected Full Stack Architecture Map (Node.js, React, Mobile, Cloud) */}
        <ArchitectureMatrix />

        {/* 5. Measured Impact: Before vs. Engineered Architecture */}
        <BeforeAfterShowcase />

        {/* 6. Selected Works & Shipped Platforms (Filtered Projects with Technical Challenges) */}
        <ProjectShowcase onSelectProject={(project) => setSelectedProject(project)} />

        {/* 7. Engineering Methodology & Lifecycle Process */}
        <ProcessTimeline />

        {/* 8. Verified Professional Experience (With 86 Agency Lead Frontend Engineer) */}
        <ExperienceSection />

        {/* 9. Editorial Philosophy & Quantified Production Outcomes */}
        <EditorialStory />

        {/* 10. Transmission Terminal & Contact */}
        <ContactSection />
      </main>

      {/* Cinematic Footer */}
      <Footer />

      {/* Accessible Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </SmoothScrollProvider>
  );
}
