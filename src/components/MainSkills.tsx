"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "ReactJs",
    designation: "Fronend Development",
    image:
      "/images/skills/reactjs.png",
  },
  {
    id: 2,
    name: "NextJs",
    designation: "Full Stack Development",
    image:
      "/images/skills/nextjs.png",
      },
  {
    id: 3,
    name: "Figma",
    designation: "UI/UX Design",
    image:
      "/images/skills/figma.png",
  },
  {
    id: 4,
    name: "SCSS",
    designation: "Web Design",
    image:
      "/images/skills/scss.png",
  },
  {
    id: 5,
    name: "Photoshop",
    designation: "Graphic Design",
    image:
      "/images/skills/photoshop.png",
  },
];

export default function MainSkills() {
  return (
    <div className="flex flex-row items-center justify-center my-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
