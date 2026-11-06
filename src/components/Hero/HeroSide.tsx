"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import AnimatedText from "./AnimatedText";

export default function HeroSide() {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-side">
      {/* Manifesto */}
      <div className="hero-manifesto">
        <span aria-hidden="true" className="crosshair" data-pop="">
          ✳
        </span>
        <p data-type="">
          <AnimatedText
            text={"SCALABLE SYSTEMS.\nMEASURABLE IMPACT."}
            charClassName="hero-manifesto-ch"
            as="span"
            dataAttribute=""
          />
        </p>
      </div>

      {/* Statistics Column */}
      <div className="hero-stats" data-reveal="">
        <div>
          <span className="display">8+</span>
          <p>
            <strong>YEARS EXPERIENCE</strong>
            FULL STACK &amp; LEAD
          </p>
        </div>

        <div>
          <span className="display">17+</span>
          <p>
            <strong>APPS DELIVERED</strong>
            WEB · MOBILE · PROD
          </p>
        </div>

        <div className="hero-award-stat">
          <span className="display">6</span>
          <a
            aria-label="View industries served by Sumit"
            href="#projects"
            onClick={scrollToWork}
          >
            <span>INDUSTRIES SERVED</span>
            <ArrowUpRight size={12} strokeWidth={2} />
          </a>
        </div>
      </div>
    </div>
  );
}

