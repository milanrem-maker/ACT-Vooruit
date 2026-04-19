import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/site-config";

export const runtime = "edge";
export const alt = siteConfig.seo.defaultTitle;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, rgba(251,247,241,1) 0%, rgba(244,235,223,1) 100%)",
          color: "#231f1a",
          padding: "72px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            fontSize: 24,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#476150",
          }}
        >
          ACT Vooruit
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1,
              fontFamily: '"Palatino Linotype", "Book Antiqua", serif',
              maxWidth: 980,
            }}
          >
            ACT-based coaching voor studenten en young professionals.
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.5,
              maxWidth: 900,
              color: "#5f5549",
            }}
          >
            Geen therapie of diagnostiek, maar een praktische en laagdrempelige
            eerste stap richting meer rust, richting en beweging.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          {["Praktisch", "Laagdrempelig", "Regio Nijmegen en online"].map(
            (label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "999px",
                  background: "rgba(255, 255, 255, 0.8)",
                  padding: "14px 22px",
                  fontSize: 22,
                  color: "#5f5549",
                }}
              >
                {label}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
