import gsap from "gsap";

export function initHeroAnimations(heroElement: HTMLElement | null) {
  if (!heroElement) return () => {};

  // Respect prefers-reduced-motion
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    gsap.set(
      [
        ".hero-top",
        ".hero-title",
        ".hero-title-ch",
        ".hero-portrait",
        ".hero-handwriting-ch",
        ".hero-identity-ch",
        ".hero-role",
        ".hero-role-ch",
        ".hero-description",
        ".primary-link",
        ".hero-location",
        ".hero-manifesto",
        ".hero-manifesto-ch",
        ".hero-stats",
        ".hero-bottom",
      ],
      { opacity: 1, y: 0, x: 0, scale: 1, filter: "none", clipPath: "none" }
    );
    return () => {};
  }

  const ctx = gsap.context(() => {
    // Check if Swarm has taken control of the page (if swarm is active, let Swarm handle interactive reconstruction)
    if (document.body.classList.contains("swarm-active")) {
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Top information appears
    tl.fromTo(
      ".hero-top",
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 0.6 }
    );

    // 2. PORTFOLIO background typography entrance
    tl.fromTo(
      ".hero-title",
      { opacity: 0, scale: 0.96, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8 },
      "-=0.3"
    );

    // 3. Portrait image reveal
    tl.fromTo(
      ".hero-portrait",
      { opacity: 0, scale: 0.95, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power2.out" },
      "-=0.5"
    );

    // 4. Handwritten "Hello, I'm"
    tl.fromTo(
      ".hero-intro .handwriting",
      { opacity: 0, y: 10, rotate: -12 },
      { opacity: 1, y: 0, rotate: -7, duration: 0.6 },
      "-=0.6"
    );

    // 5. SUMIT. identity reveal
    tl.fromTo(
      ".hero-intro h1",
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.4"
    );

    // 6. Role & Description
    tl.fromTo(
      [".hero-role", ".hero-description"],
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
      "-=0.4"
    );

    // 7. CTA & Location
    tl.fromTo(
      [".primary-link", ".hero-location"],
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
      "-=0.3"
    );

    // 8. Manifesto & Stats
    tl.fromTo(
      [".hero-manifesto", ".hero-stats"],
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.7, stagger: 0.1 },
      "-=0.5"
    );

    // 9. Bottom bar
    tl.fromTo(
      ".hero-bottom",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.4"
    );
  }, heroElement);

  return () => ctx.revert();
}

