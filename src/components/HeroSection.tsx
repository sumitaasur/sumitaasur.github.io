import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import FlipTitle from "./FlipTitle";
import DownloadBtn from "./DownloadBtn";
import MainSkills from "./MainSkills";


export const HeroSection = () => {
  return (
    <div className="h-svh w-full flex items-center justify-center dark:bg-[#0a0a0a] bg-white antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        {/* <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-400 dark:from-neutral-50 dark:to-neutral-400  bg-opacity-50">
        Elevating Your Online Presence Creatively
        </h1> */}
        <FlipTitle />

        {/* <p className="md:mt-12 mt-6 font-normal  md:text-base text-xs dark:text-neutral-300 text-neutral-950 max-w-3xl text-center mx-auto">
        I design responsive, user-friendly websites using React.js for dynamic interfaces and Next.js for improved performance through server-side rendering. These technologies help me create fast, SEO-optimized, and visually appealing web experiences.
        </p> */}

        <MainSkills />

        <DownloadBtn />
      </div>
    </div>
  )
}
