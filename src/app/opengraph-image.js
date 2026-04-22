import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Technocracy 2026";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "50px 64px",
          color: "#f2f8f8",
          background:
            "radial-gradient(circle at 20% 15%, rgba(24,228,234,0.22), transparent 35%), linear-gradient(145deg, #003b40 0%, #005a60 54%, #00696f 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 34, letterSpacing: 4, color: "#18e4ea" }}>ECE PRESENTS</p>
          <p style={{ fontSize: 30 }}>30 APRIL - 1 MAY 2026</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <h1 style={{ fontSize: 108, lineHeight: 1, margin: 0, letterSpacing: 2 }}>TECHNOCRACY 2026</h1>
          <p style={{ fontSize: 42, margin: 0 }}>Code Kachal | HackSpark</p>
          <p style={{ fontSize: 28, margin: 0, color: "#cde4e4" }}>
            Team up to 3 members | Registration Fee: 900 BDT | RUET
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 28, margin: 0 }}>technocracy2026.vercel.app</p>
          <p style={{ fontSize: 26, color: "#18e4ea", margin: 0 }}>REGISTER NOW</p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
