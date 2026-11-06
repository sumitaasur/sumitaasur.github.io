"use client";

import { useEffect, useState } from "react";

export type CursorMode =
  | "default"
  | "hover"
  | "project"
  | "code"
  | "drag"
  | "contact"
  | "click";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [mode, setMode] = useState<CursorMode>("default");
  const [badgeText, setBadgeText] = useState("");
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    // Only enable custom cursor for precise pointer devices (desktop mouse)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsFinePointer(mediaQuery.matches);

    const onMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };
    mediaQuery.addEventListener("change", onMediaChange);

    if (mediaQuery.matches) {
      document.body.classList.add("has-custom-cursor");
    }

    return () => {
      mediaQuery.removeEventListener("change", onMediaChange);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });

      // Determine hover mode based on target elements
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      const cursorText = target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text");

      if (cursorText) {
        setBadgeText(cursorText);
      } else {
        setBadgeText("");
      }

      if (cursorAttr) {
        setMode(cursorAttr as CursorMode);
      } else if (target.closest("button") || target.closest("a") || target.closest("[role='button']")) {
        setMode("hover");
      } else {
        setMode("default");
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isFinePointer]);

  // Smooth lerp trailing animation for the outer ring
  useEffect(() => {
    if (!isFinePointer) return;
    let animationFrameId: number;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setPos((prev) => ({
        x: lerp(prev.x, targetPos.x, 0.22),
        y: lerp(prev.y, targetPos.y, 0.22),
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPos, isFinePointer]);

  if (!isFinePointer) return null;

  // Determine sizing and styles depending on mode
  const isProject = mode === "project";
  const isDrag = mode === "drag";
  const isHover = mode === "hover";
  const isContact = mode === "contact";
  const hasBadge = isProject || isDrag || isContact || Boolean(badgeText);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* Outer trailing glow aura & ring */}
      <div
        className="fixed top-0 left-0 rounded-full transition-all duration-150 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${
            isMouseDown ? 0.8 : hasBadge ? 1.7 : isHover ? 1.4 : 1
          })`,
          width: hasBadge ? "72px" : "36px",
          height: hasBadge ? "72px" : "36px",
          border: hasBadge
            ? "1px solid rgba(255, 26, 83, 0.85)"
            : isHover
            ? "1.5px solid rgba(255, 26, 83, 0.7)"
            : "1px solid rgba(255, 255, 255, 0.35)",
          backgroundColor: hasBadge
            ? "rgba(136, 8, 38, 0.85)"
            : isHover
            ? "rgba(225, 29, 72, 0.15)"
            : "rgba(255, 255, 255, 0.03)",
          backdropFilter: hasBadge ? "blur(8px)" : "none",
          boxShadow: hasBadge
            ? "0 0 25px rgba(255, 26, 83, 0.5)"
            : isHover
            ? "0 0 16px rgba(225, 29, 72, 0.3)"
            : "none",
        }}
      >
        {hasBadge && (
          <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-white text-center leading-tight px-1">
            {badgeText || (isProject ? "VIEW ↗" : isDrag ? "DRAG ↔" : isContact ? "TALK ↗" : "")}
          </span>
        )}
      </div>

      {/* Immediate center point */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#ff1a53] shadow-[0_0_10px_#ff1a53] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150"
        style={{
          transform: `translate3d(${targetPos.x}px, ${targetPos.y}px, 0) translate(-50%, -50%) scale(${
            hasBadge ? 0 : isMouseDown ? 0.5 : 1
          })`,
          opacity: hasBadge ? 0 : 1,
        }}
      />
    </div>
  );
}

