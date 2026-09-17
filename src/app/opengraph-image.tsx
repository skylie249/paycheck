import { ImageResponse } from "next/og";

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
          alignItems: "flex-start",
          padding: 80,
          background: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            borderRadius: 999,
            padding: "8px 20px",
            background: "rgba(15, 118, 110, 0.1)",
            color: "#0f766e",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Free Tool
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 72,
            fontWeight: 700,
            color: "#0f172a",
            letterSpacing: -1.5,
          }}
        >
          US Paycheck Calculator
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 32,
            color: "#475569",
            maxWidth: 900,
          }}
        >
          Estimate your take-home pay after federal tax, state tax, Social
          Security, and Medicare.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 48,
            borderRadius: 20,
            padding: "24px 36px",
            background: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
            color: "#ffffff",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 20, opacity: 0.85 }}>
              Estimated take-home pay per pay period
            </div>
            <div style={{ display: "flex", fontSize: 48, fontWeight: 700 }}>
              $2,236
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
