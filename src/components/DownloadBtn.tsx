"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";

export default function DownloadBtn() {
    const openPdf = () => {
        window.open('/Kapil-Resume.pdf', '_blank');
      };
  return (
    <div className="text-center mt-10">
      <Button
        onClick={openPdf}
        borderRadius="1.75rem"
        className="bg-white dark:bg-[#0a0a0a] text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        My Resume
      </Button>
    </div>
  );
}
