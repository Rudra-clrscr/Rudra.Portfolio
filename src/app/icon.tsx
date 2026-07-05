import { ImageResponse } from "next/og";

// Auto-generated favicon: an "R" monogram on the brand gradient.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 40,
          fontWeight: 700,
          color: "#fff",
          background: "linear-gradient(135deg, #7c5cff, #22d3ee 60%, #f471b5)",
          borderRadius: 14,
        }}
      >
        R
      </div>
    ),
    { ...size }
  );
}
