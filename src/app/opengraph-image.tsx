import { ImageResponse } from "next/og";
import { siteContent } from "@/content";

// Auto-generated social share card (LinkedIn / WhatsApp / X preview).
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteContent.profile.name} — ${siteContent.profile.headline}`;

export default function OpengraphImage() {
  const { profile } = siteContent;

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
          background: "#07080d",
          backgroundImage:
            "radial-gradient(900px 500px at 10% -10%, rgba(124,92,255,0.35), transparent 60%), radial-gradient(700px 450px at 100% 10%, rgba(34,211,238,0.22), transparent 55%)",
          color: "#e8eaf2",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#22d3ee",
          }}
        >
          {profile.location}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 46,
            fontWeight: 600,
            color: "#9aa0b4",
          }}
        >
          {profile.headline}
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 16,
            fontSize: 26,
            color: "#9aa0b4",
          }}
        >
          <span>Python</span>
          <span>·</span>
          <span>Data Science</span>
          <span>·</span>
          <span>Flask</span>
          <span>·</span>
          <span>Backend</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
