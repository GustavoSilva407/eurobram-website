import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a1f3d 0%, #123A72 55%, #094a3a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#ffffff",
              color: "#123A72",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            EB
          </div>
          <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -0.5 }}>EUROBRAM</div>
        </div>
        <div style={{ display: "flex", marginTop: 56, fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 980 }}>
          Laboratory Materials Sourcing for the Brazilian Pharmaceutical Market
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "rgba(255,255,255,0.7)" }}>
          Germany / Brazil · Pharmaceutical &amp; Agrochemical Procurement
        </div>
      </div>
    ),
    { ...size }
  );
}
