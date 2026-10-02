"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  ExternalLink,
  Gauge,
  Laptop,
  Linkedin,
  Mail,
  Moon,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sun,
  Workflow,
  X,
} from "lucide-react";
import type { IconType } from "react-icons";
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
  SiXcode,
} from "react-icons/si";
import {
  featuredProjects,
  moreProjects,
  portfolio,
  type PortfolioProject,
} from "@/data/portfolio";
import { useEffect, useRef, useState } from "react";

const technologyIcons: Record<string, IconType> = {
  javascript: SiJavascript,
  react: SiReact,
  next: SiNextdotjs,
  node: SiNodedotjs,
  redux: SiRedux,
  firebase: SiFirebase,
  jenkins: SiJenkins,
  android: SiAndroidstudio,
  xcode: SiXcode,
  linux: SiLinux,
  apple: SiApple,
};

const utilityIcons = {
  api: Braces,
  ai: Braces,
  architecture: Workflow,
  cloud: Laptop,
  performance: Gauge,
  leadership: Workflow,
  mobile: Smartphone,
  responsive: Laptop,
  security: ShieldCheck,
  testing: ShieldCheck,
  delivery: Rocket,
  git: Code2,
  typescript: Code2,
  vscode: Code2,
  windows: Laptop,
};

const sectionLinks = [
  { label: "About", id: "about" },
  { label: "Expertise", id: "expertise" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const projectAccents = ["#d6fb67", "#84d8f4", "#ff9b73", "#d6a8ff", "#f3ce68"];

function SkillIcon({ name }: { name: string }) {
  const BrandIcon = technologyIcons[name];
  if (BrandIcon) return <BrandIcon aria-hidden="true" />;
  const UtilityIcon = utilityIcons[name as keyof typeof utilityIcons] ?? Code2;
  return <UtilityIcon aria-hidden="true" />;
}

function ProjectArtwork({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <div
      className={`project-art project-art-${index % 5}`}
      style={{ "--project-accent": projectAccents[index % projectAccents.length] } as React.CSSProperties}
      aria-label={`${project.name} abstract project visual`}
      role="img"
    >
      {/* TODO: Set project.image in portfolio data when a resume-verified screenshot is available. */}
      {project.image ? (
        <Image src={project.image} alt={`${project.name} project`} fill sizes="(max-width: 760px) 100vw, 50vw" />
      ) : (
        <>
          <div className="art-index">0{(index % 9) + 1} / PROJECT</div>
          <div className="art-window" aria-hidden="true">
            <div className="art-window-top"><span /><span /><span /><i>product.interface</i></div>
            <div className="art-window-content">
              <span className="art-glyph"><Braces /></span>
              <div className="art-lines"><i /><i /><i /></div>
              <div className="art-orbit"><span /><b /></div>
            </div>
          </div>
          <div className="art-tech" aria-hidden="true">
            {project.technologies.slice(0, 3).map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectLinks({ project }: { project: PortfolioProject }) {
  const links = [
    ["Live project", project.liveUrl],
    ["Google Play", project.androidUrl],
    ["App Store", project.iosUrl],
    ["Store", project.storeUrl],
    ["Repository", project.repoUrl],
  ] as const;

  return (
    <div className="project-links">
      {links.map(([label, url]) => url && (
        <a href={url} key={label} target="_blank" rel="noreferrer">
          {label}<ExternalLink aria-hidden="true" size={14} />
        </a>
      ))}
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: PortfolioProject;
  index: number;
  onOpen: (project: PortfolioProject, trigger: HTMLButtonElement) => void;
}) {
  return (
    <article className="project-card">
      <ProjectArtwork project={project} index={index} />
      <div className="project-card-body">
        <div className="project-card-heading">
          <h3>{project.name}</h3>
          <button
            className="round-action"
            type="button"
            aria-label={`Open details for ${project.name}`}
            onClick={(event) => onOpen(project, event.currentTarget)}
          >
            <ArrowUpRight aria-hidden="true" size={18} />
          </button>
        </div>
        <p>{project.description}</p>
        <ul className="tech-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <ul className="outcome-list">
          {project.outcomes.map((outcome) => <li key={outcome}><Check aria-hidden="true" />{outcome}</li>)}
        </ul>
      </div>
    </article>
  );
}

export default function PortfolioSite() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [contactStatus, setContactStatus] = useState("");
  const [sending, setSending] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const mailtoHref = `mailto:${portfolio.email}?subject=${encodeURIComponent("Portfolio contact")}`;

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setDarkMode(useDark);
    document.documentElement.dataset.theme = useDark ? "dark" : "light";
  }, []);

  useEffect(() => {
    const updateHeader = () => document.querySelector(".site-header")?.classList.toggle("is-scrolled", window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".section-heading-row, .section-grid, .expertise-card, .experience-entry, .project-card, .more-project, .achievement-list, .education-row, .contact-layout");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => { item.classList.add("reveal"); observer.observe(item); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = sectionLinks.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedProject) {
      lastTriggerRef.current?.focus();
      return;
    }
    document.body.classList.add("dialog-open");
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
      if (event.key === "Tab") {
        const controls = document.querySelectorAll<HTMLElement>(".project-dialog button, .project-dialog a");
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("dialog-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  function toggleTheme() {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    document.documentElement.dataset.theme = nextMode ? "dark" : "light";
    window.localStorage.setItem("portfolio-theme", nextMode ? "dark" : "light");
  }

  function openProject(project: PortfolioProject, trigger: HTMLButtonElement) {
    lastTriggerRef.current = trigger;
    setSelectedProject(project);
  }

  async function submitContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setSending(true);
    setContactStatus("");
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message ?? "Message could not be sent.");
      setContactStatus("Message sent. Thank you for getting in touch.");
      formElement.reset();
    } catch (error) {
      setContactStatus(error instanceof Error ? error.message : "Message could not be sent. Use the email link below instead.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-inner">
          <a className="wordmark" href="#top" aria-label={`${portfolio.name}, home`}>
            <span className="wordmark-mark">SP</span>
            <span>{portfolio.name}</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            {sectionLinks.map(({ label, id }) => (
              <a key={id} href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>{label}</a>
            ))}
          </nav>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`} title={`Switch to ${darkMode ? "light" : "dark"} mode`}>
            {darkMode ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero-section" id="top" aria-labelledby="hero-title">
          <div className="hero-inner page-width">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" /> Jaipur, Rajasthan <span className="eyebrow-divider">/</span> {portfolio.experienceLabel}</p>
              <h1 id="hero-title">Senior Frontend<br /><span>Engineer</span></h1>
              <p className="hero-role">{portfolio.name}</p>
              <p className="hero-stack">{portfolio.secondaryTitle}</p>
              <p className="hero-value">{portfolio.valueStatement}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View projects <ArrowDownRight aria-hidden="true" /></a>
                <a className="button button-secondary" href="/Sumit-Pramanik-Resume.pdf" download>Download resume <ArrowDown aria-hidden="true" /></a>
                <a className="text-link" href="#contact">Contact <ArrowRight aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-code" aria-label="Developer code illustration">
              <div className="code-topline"><span><i /><i /><i /></span><span>application.ts</span><Braces aria-hidden="true" /></div>
              <div className="code-content" aria-hidden="true">
                <p><b>01</b><span className="code-purple">const</span> developer <span className="code-purple">=</span> &#123;</p>
                <p><b>02</b><span className="code-indent">focus:</span> <span className="code-green">&quot;web + mobile&quot;</span>,</p>
                <p><b>03</b><span className="code-indent">tools:</span> [<span className="code-green">&quot;React&quot;</span>, <span className="code-green">&quot;React Native&quot;</span>],</p>
                <p><b>04</b><span className="code-indent">approach:</span> <span className="code-green">&quot;ship thoughtfully&quot;</span></p>
                <p><b>05</b>&#125;;</p>
                <p className="code-call"><b>06</b><span className="code-muted">{"// Built for people, ready for production."}</span></p>
              </div>
              <div className="code-footer"><span><span className="code-live-dot" /> Ready to build</span><span>JavaScript</span></div>
              <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown aria-hidden="true" /></a>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="page-width section-grid">
            <div className="section-intro">
              <p className="eyebrow">01 / About</p>
              <h2 id="about-title">Building for the<br /><span>whole journey.</span></h2>
            </div>
            <div className="about-copy">
              <p>{portfolio.summary}</p>
              <div className="about-facts">
                {portfolio.aboutFacts.map((fact) => <div key={fact.mark}><span className="fact-mark">{fact.mark}</span><span>{fact.label.split("\n").map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>)}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section expertise-section" id="expertise" aria-labelledby="expertise-title">
          <div className="page-width">
            <div className="section-heading-row">
              <div><p className="eyebrow">02 / Architecture &amp; Technical Leadership</p><h2 id="expertise-title">What I do<span>.</span></h2></div>
              <p className="section-note">Hands-on engineering with architectural thinking and technical ownership.</p>
            </div>
            <div className="expertise-grid">
              {portfolio.expertise.map((area, index) => (
                <article className="expertise-card" key={area.title}>
                  <span>0{index + 1}</span><h3>{area.title}</h3><p>{area.description}</p>
                </article>
              ))}
            </div>
            <div className="engineering-impact">
              <h3>Engineering Impact</h3>
              <ul>{portfolio.engineeringImpacts.map((impact) => <li key={impact}>{impact}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="page-width">
            <div className="section-heading-row">
              <div><p className="eyebrow">03 / Toolkit</p><h2 id="skills-title">Skills in practice<span>.</span></h2></div>
              <p className="section-note">Technologies and environments named in the resume.</p>
            </div>
            <div className="skill-groups">
              {portfolio.skillGroups.map((group, groupIndex) => (
                <div className="skill-group" key={group.name}>
                  <div className="skill-group-label"><span>0{groupIndex + 1}</span><h3>{group.name}</h3></div>
                  <div className="skill-track-viewport">
                    <div className={`skill-track ${group.skills.length > 3 ? "skill-track-moving" : ""}`}>
                      {[...group.skills, ...(group.skills.length > 3 ? group.skills : [])].map((skill, index) => (
                        <article className="skill-card" key={`${skill.name}-${index}`} aria-hidden={index >= group.skills.length ? true : undefined}>
                          <span className={`skill-icon skill-icon-${skill.icon}`}><SkillIcon name={skill.icon} /></span>
                          <span className="skill-copy"><strong>{skill.name}</strong><span>{skill.description}</span></span>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="page-width">
            <div className="section-heading-row">
              <div><p className="eyebrow">04 / Experience</p><h2 id="experience-title">A growing practice<span>.</span></h2></div>
              <p className="section-note">Work history and dates from the resume.</p>
            </div>
            <div className="experience-list">
              {portfolio.experience.map((job, index) => (
                <article className="experience-entry" key={job.company}>
                  <div className="experience-index">0{index + 1}</div>
                  <div className="experience-main"><div className="experience-title-row"><h3>{job.role}</h3><time>{job.dates}</time></div><p className="experience-company">{job.company}<span>{job.location}</span></p><ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
                  <ArrowUpRight className="experience-arrow" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="page-width">
            <div className="section-heading-row projects-heading">
              <div><p className="eyebrow">05 / Selected work</p><h2 id="projects-title">Projects, shipped<span>.</span></h2></div>
              <p className="section-note">Web and mobile product experiences across React.js, Next.js, and React Native.</p>
            </div>
            <div className="project-grid">
              {featuredProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} onOpen={openProject} />)}
            </div>
          </div>
        </section>

        <section className="section more-section" id="more-work" aria-labelledby="more-title">
          <div className="page-width">
            <div className="section-heading-row">
              <div><p className="eyebrow">06 / More work</p><h2 id="more-title">Across platforms<span>.</span></h2></div>
              <p className="section-note">Additional projects documented in the resume.</p>
            </div>
            <div className="more-grid">
              {moreProjects.map((project, index) => (
                <article className="more-project" key={project.name}>
                  <div className="more-project-top"><span>0{index + 1}</span><span className="more-project-icon"><Code2 aria-hidden="true" /></span></div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="tech-list">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                  <ProjectLinks project={project} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section achievements-section" id="achievements" aria-labelledby="achievements-title">
          <div className="page-width">
            <div className="section-heading-row">
              <div><p className="eyebrow">07 / Measurable Results</p><h2 id="achievements-title">Engineering impact<span>.</span></h2></div>
              <p className="section-note">Outcomes from frontend delivery, optimization, and engineering systems.</p>
            </div>
            <div className="achievement-stats">{portfolio.impactStats.map((stat) => <article className="achievement-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></article>)}</div>
            <ul className="achievement-list">{portfolio.achievements.map((achievement, index) => <li key={achievement}><span>0{index + 1}</span><p>{achievement}</p></li>)}</ul>
          </div>
        </section>

        <section className="section education-section" id="education" aria-labelledby="education-title">
          <div className="page-width education-row">
            <div><p className="eyebrow">08 / Education</p><h2 id="education-title">Foundations<span>.</span></h2></div>
            <div className="education-detail"><div><h3>{portfolio.education.degree}</h3><p>{portfolio.education.institution} <span>{portfolio.education.location}</span></p></div><time>{portfolio.education.year}</time></div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="page-width contact-layout">
            <div className="contact-copy"><p className="eyebrow">09 / Contact</p><h2 id="contact-title">Let&apos;s build<br /><span>what&apos;s next.</span></h2><p>For project conversations and professional enquiries, reach out directly or leave a message.</p>
              <a className="contact-detail" href={mailtoHref}><Mail aria-hidden="true" /><span>{portfolio.email}</span><ArrowUpRight aria-hidden="true" /></a>
              <a className="contact-detail" href={`tel:${portfolio.phone}`}><Phone aria-hidden="true" /><span>{portfolio.phone}</span><ArrowUpRight aria-hidden="true" /></a>
              <a className="contact-detail" href={portfolio.linkedinUrl} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /><span>linkedin.com/in/sumitaasur</span><ArrowUpRight aria-hidden="true" /></a>
            </div>
            <form className="contact-form" onSubmit={submitContact}>
              <div className="form-fields"><label>Name<input name="name" autoComplete="name" required maxLength={120} /></label><label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} /></label></div>
              <label>Message<textarea name="message" rows={5} required maxLength={4000} /></label>
              <div className="form-bottom"><button className="button button-primary" type="submit" disabled={sending}>{sending ? "Sending" : "Send message"}<ArrowUpRight aria-hidden="true" /></button><span className="form-status" aria-live="polite">{contactStatus}</span></div>
              <p className="mailto-fallback">SMTP not available? <a href={mailtoHref}>Open your email app <ArrowUpRight aria-hidden="true" /></a></p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="page-width footer-inner"><a className="wordmark" href="#top"><span className="wordmark-mark">SP</span><span>{portfolio.name}</span></a><span>{portfolio.title}</span><a href="#top">Back to top <ArrowUpRight aria-hidden="true" /></a></div></footer>

      {selectedProject && (
        <div className="dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}>
          <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" aria-describedby="dialog-description">
            <button ref={closeButtonRef} className="dialog-close" type="button" aria-label="Close project details" onClick={() => setSelectedProject(null)}><X aria-hidden="true" /></button>
            <ProjectArtwork project={selectedProject} index={portfolio.projects.findIndex(({ name }) => name === selectedProject.name)} />
            <div className="dialog-content"><p className="eyebrow">Project details</p><h2 id="dialog-title">{selectedProject.name}</h2><p id="dialog-description">{selectedProject.description}</p><ul className="tech-list">{selectedProject.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul><ul className="outcome-list">{selectedProject.outcomes.map((outcome) => <li key={outcome}><Check aria-hidden="true" />{outcome}</li>)}</ul><ProjectLinks project={selectedProject} /></div>
          </section>
        </div>
      )}
    </>
  );
}
