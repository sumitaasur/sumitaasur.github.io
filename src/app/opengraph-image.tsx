import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sumit Pramanik - Senior Full Stack Engineer & Technical Lead";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 80px",
        background: "#080709",
        color: "#ffffff",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Background glow aura */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-100px",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "rgba(255, 23, 77, 0.22)",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: 52,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              background: "#ff174d",
              color: "#ffffff",
              fontSize: 20,
              fontWeight: 800,
              boxShadow: "0 0 25px rgba(255, 23, 77, 0.5)",
            }}
          >
            SP
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.5 }}>
              SUMIT PRAMANIK
            </span>
            <span style={{ fontSize: 13, color: "#ff174d", fontFamily: "monospace" }}>
              26.9124° N, 75.7873° E // REMOTE WORLDWIDE
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            borderRadius: "24px",
            background: "rgba(34, 197, 94, 0.12)",
            border: "1px solid rgba(34, 197, 94, 0.3)",
            fontSize: 13,
            color: "#4ade80",
            fontFamily: "monospace",
            fontWeight: 700,
          }}
        >
          AVAILABLE FOR LEADERSHIP &amp; CONTRACT
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div
          style={{
            fontSize: 66,
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: -2,
            color: "#ffffff",
          }}
        >
          Senior Full Stack Engineer &amp; Technical Lead
        </div>
        <div style={{ fontSize: 26, color: "#a7a1a8" }}>
          Node.js • React.js • React Native • Next.js • MongoDB • AI / GenAI
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "24px",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          fontSize: 16,
          color: "#a7a1a8",
          fontFamily: "monospace",
        }}
      >
        <span>8+ YEARS EXP // 17+ PROD APPS // 35% MEASURED PERF LIFT</span>
        <span style={{ color: "#ff174d", fontWeight: 700 }}>
          ARCHITECTING FOR SCALE &amp; MOTION
        </span>
      </div>
    </div>,
    size
  );
}
