import { ImageResponse } from "next/og";

export const alt =
  "Sumit Pramanik, Senior Full Stack Engineer & Technical Lead specializing in React.js and React Native";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background: "#080709",
        color: "#f5f3f5",
        fontFamily: "sans-serif",
        border: "1px solid rgba(255, 26, 83, 0.3)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
              background: "#ff1a53",
              color: "#ffffff",
              fontSize: 20,
              fontWeight: 800,
              boxShadow: "0 0 25px rgba(255, 26, 83, 0.5)",
            }}
          >
            SP
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.5 }}>
              SUMIT PRAMANIK
            </span>
            <span style={{ fontSize: 13, color: "#ff1a53", fontFamily: "monospace" }}>
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
        <div style={{ fontSize: 26, color: "#a7a2ad" }}>
          React.js • React Native • Next.js • TypeScript • 60fps Cross-Platform Architecture
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
          color: "#a7a2ad",
          fontFamily: "monospace",
        }}
      >
        <span>8+ YEARS EXP // 17+ PROD APPS // 35% MEASURED PERF LIFT</span>
        <span style={{ color: "#ff1a53", fontWeight: 700 }}>
          ARCHITECTING FOR SCALE &amp; MOTION
        </span>
      </div>
    </div>,
    size
  );
}
