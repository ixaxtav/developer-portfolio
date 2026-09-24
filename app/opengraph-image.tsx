import { ImageResponse } from "next/og";

export const alt =
  "Ixax Tavarez, lead full-stack developer.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#fff",
        color: "#000",
        padding: "65px 80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "4px solid #000",
          paddingBottom: 24,
        }}
      >
        <span style={{ fontSize: 34 }}>Ixax Tavarez</span>
        <span style={{ fontSize: 24 }}>@ixaxtav</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          lineHeight: 1.05,
          letterSpacing: "-3px",
        }}
      >
        <span>Hello World! I’m Ixax,</span>
        <span>a lead full-stack developer.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 23,
        }}
      >
        <span>React, TypeScript, Python, Go, Node.js</span>
        <span>ixaxtavarez.com</span>
      </div>
    </div>,
    size,
  );
}
