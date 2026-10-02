import { ImageResponse } from "next/og";

export const alt = "Sumit Pramanik, Frontend Developer specializing in React.js and React Native";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", background: "#08090b", color: "#f5f5f5", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 22, fontWeight: 700 }}>
        <div style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 12, background: "#6d7cff", fontSize: 17 }}>SP</div>
        SUMIT PRAMANIK
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.05 }}>Frontend Developer</div>
        <div style={{ fontSize: 25, color: "#a1a1aa" }}>React.js &amp; React Native · Next.js · TypeScript</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, color: "#a1a1aa" }}>
        <span>8+ years of experience</span>
        <span style={{ color: "#a5b4fc" }}>REACT.JS · REACT NATIVE · NEXT.JS</span>
      </div>
    </div>,
    size,
  );
}
