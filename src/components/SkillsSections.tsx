"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function SkillsSection() {
  return (
    <div className="h-auto flex flex-col antialiased dark:bg-[#0a0a0a] bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      
      <h2 className="text-4xl md:text-5xl font-bold text-center dark:text-neutral-300 text-neutral-950 mb-5">My Skills</h2>

      <div className="py-3">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      <div className="py-3">
        <InfiniteMovingCards
          items={testimonialsCode}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "With Adobe Photoshop expertise, I excel in creating and enhancing images, designing graphics, and editing photos to achieve professional-quality results.",
    image: "/images/skills/photoshop.png",
    title: "Adobe Photoshop",
  },
  {
    quote:
      "Proficient in Adobe Illustrator, I specialize in vector graphic design, creating logos, illustrations, and intricate designs with precision and creativity.",
    image: "/images/skills/illustrator.png",
    title: "Adobe Illustrator",
  },
  // {
  //   quote:
  //     "Skilled in Adobe Premiere Pro, I bring video projects to life through professional editing, color correction, and seamless transitions for compelling narratives.",
  //   image: "/images/skills/premiere-pro.png",
  //   title: "Adobe Premiere Pro",
  // },
  {
    quote:
      "Expert in Adobe XD, I design intuitive and visually appealing user interfaces, focusing on user experience and interactive prototypes for digital products.",
    image: "/images/skills/xd.png",
    title: "Adobe XD",
  },
  // {
  //   quote:
  //     "With Adobe Media Encoder, I efficiently manage video rendering and compression tasks, ensuring optimized output for multiple platforms with excellent quality.",
  //   image: "/images/skills/media-encoder.png",
  //   title: "Adobe Media Encoder",
  // },
  // {
  //   quote:
  //     "Proficient in Adobe After Effects, I create stunning motion graphics, visual effects, and animations, adding dynamic elements to videos and multimedia projects.",
  //   image: "/images/skills/after-effects.png",
  //   title: "Adobe After Effects",
  // }
];

const testimonialsCode = [
  {
    quote:
      "Skilled in Figma, I design modern and user-friendly interfaces, collaborate with teams effectively, and create interactive prototypes to visualize design concepts.",
    image: "/images/skills/figma.png",
    title: "Figma",
  },
  {
    quote:
      "Experienced with SCSS, I streamline and enhance CSS with variables, nested rules, and modular styles, improving maintainability and scalability in web design.",
    image: "/images/skills/scss.png",
    title: "SCSS",
  },
  {
    quote:
      "Proficient in JavaScript, I develop dynamic and interactive web applications, implement complex features, and solve problems with versatile scripting capabilities.",
    image: "/images/skills/javascript.png",
    title: "JavaScript",
  },
  // {
  //   quote:
  //     "Skilled in TypeScript, I enhance JavaScript development with static typing, leading to more reliable and maintainable code in complex applications.",
  //   image: "/images/skills/typescript.png",
  //   title: "TypeScript",
  // },
  {
    quote:
      "Experienced with ReactJS, I build efficient and scalable user interfaces, leverage component-based architecture, and create responsive web applications.",
    image: "/images/skills/reactjs.png",
    title: "ReactJS",
  },
  {
    quote:
      "Proficient in NextJS, I develop server-side rendered React applications, optimize performance, and implement static site generation for faster and more reliable web experiences.",
    image: "/images/skills/nextjs.png",
    title: "NextJS",
  },
  // {
  //   quote:
  //     "Skilled in Material UI, I create modern and consistent user interfaces with pre-designed components and a responsive grid system, enhancing user experience.",
  //   image: "/images/skills/material-ui.png",
  //   title: "Material UI",
  // },
  {
    quote:
      "I leverage Tailwind CSS to create responsive, modern web applications with a focus on utility-first design, ensuring clean code and seamless user experiences. My projects highlight customization and efficiency, from personal portfolios to dynamic dashboards.",
    image: "/images/skills/tailwind.png",
    title: "Tailwind CSS ",
  },
  {
    quote:
      "Proficient in Bootstrap, I utilize its responsive grid system and pre-built components to quickly design and develop mobile-first, visually appealing websites.",
    image: "/images/skills/bootstrap.png",
    title: "Bootstrap",
  }
];



