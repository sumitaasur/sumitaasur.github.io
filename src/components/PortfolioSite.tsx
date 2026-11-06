"use client";

import { useState } from "react";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import ClientMarquee from "@/components/ClientMarquee";
import EditorialStory from "@/components/EditorialStory";
import ArchitectureMatrix from "@/components/ArchitectureMatrix";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import ProjectModal from "@/components/ProjectModal";
import Footer from "@/components/Footer";
import { type PortfolioProject } from "@/data/portfolio";

export default function PortfolioSite() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <SmoothScrollProvider>
      {/* Animated Multi-State Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation Bar with Live Status */}
      <FloatingNav />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 overflow-hidden">
        {/* 1. Immersive Hero with Oversized Typography, Red Identity Block & 3D Layered Hologram */}
        <HeroSection />

        {/* 2. Client & Brand Marquee (WAIL ticker) */}
        <ClientMarquee />

        {/* 3. Editorial Storytelling & Engineering Philosophy */}
        <EditorialStory />

        {/* 4. Interactive Engineering Architecture Matrix */}
        <ArchitectureMatrix />

        {/* 5. Measured Impact Before / After Interactive Slider */}
        <BeforeAfterShowcase />

        {/* 6. Selected Work & Shipped Platforms with Category Filtering */}
        <ProjectShowcase onSelectProject={(project) => setSelectedProject(project)} />

        {/* 7. Creative Engineering Process Lifecycle */}
        <ProcessTimeline />

        {/* 8. Verified Professional Experience Timeline */}
        <ExperienceSection />

        {/* 9. Specialized Stack & Technical Capabilities */}
        <SkillsSection />

        {/* 10. Contact / Dispatch Center */}
        <ContactSection />
      </main>

      {/* Cinematic Footer */}
      <Footer />

      {/* Interactive Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </SmoothScrollProvider>
  );
}
