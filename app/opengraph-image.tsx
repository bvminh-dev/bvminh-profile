import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
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
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          color: "#f4f4f5",
        }}
      >
        <div style={{ fontSize: 28, color: "#3b82f6", fontWeight: 600 }}>
          {profile.handle}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            marginTop: 24,
            letterSpacing: -2,
          }}
        >
          {profile.name}
        </div>
        <div style={{ fontSize: 36, color: "#a1a1aa", marginTop: 16 }}>
          {`${profile.role} · ${profile.location}`}
        </div>
      </div>
    ),
    size
  );
}
