"use client";

import React from "react";
import { ArrowDown, MapPin } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { portfolio } from "@/data/portfolio";

export default function HeroIntro() {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-intro">
      {/* 1. Handwritten greeting */}
      <p className="handwriting" data-type="">
        <AnimatedText
          text="Hello, I’m"
          charClassName="hero-handwriting-ch"
          as="span"
          dataAttribute=""
        />
      </p>

      {/* 2. Bold Identity */}
      <h1 className="display" data-type="">
        <span className="sr-only">Sumit Pramanik – Full Stack Engineer</span>
        <AnimatedText
          text={portfolio.shortName}
          charClassName="hero-identity-ch"
          as="span"
          dataAttribute=""
        />
        <span className="accent">.</span>
      </h1>

      {/* 3. Primary Title and Technology Stack */}
      <div className="hero-role" data-type="">
        <AnimatedText
          text="FULL STACK ENGINEER"
          charClassName="hero-role-ch"
          as="span"
          dataAttribute=""
        />
        <span className="hero-role-sub">
          NODE.JS &amp; REACT.JS · AI / GENAI
        </span>
      </div>

      {/* 4. Professional Introduction Description */}
      <p className="hero-description" data-reveal="">
        I engineer production-grade web, mobile and backend applications using Node.js, React.js, React Native, Next.js and MongoDB.
        <br />
        Building scalable systems, reliable APIs and intelligent digital experiences with 8+ years of engineering experience.
      </p>

      {/* 5. Primary Action Link */}
      <a
        className="primary-link"
        data-reveal=""
        href="#projects"
        onClick={scrollToWork}
      >
        <span>View my work</span>
        <ArrowDown size={17} strokeWidth={2} />
      </a>

      {/* 6. Location Coordinate */}
      <span className="hero-location" data-reveal="">
        <MapPin size={12} strokeWidth={2} />
        <span>JAIPUR, INDIA</span>
      </span>
    </div>
  );
}

