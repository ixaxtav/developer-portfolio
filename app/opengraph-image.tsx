import { ImageResponse } from "next/og";

export const alt =
  "Ixax Tavarez — Lead Full-Stack Developer. Thoughtful software. Useful outcomes.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f7f5ee",
        color: "#262820",
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
          borderBottom: "2px solid #262820",
          paddingBottom: 24,
        }}
      >
        <span style={{ fontSize: 34 }}>ixax tavarez.</span>
        <span style={{ fontSize: 22 }}>LEAD FULL-STACK DEVELOPER</span>
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
        <span>Thoughtful software.</span>
        <span style={{ color: "#a4442b" }}>Useful outcomes.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 23,
        }}
      >
        <span>React · TypeScript · Python · Go · Node.js</span>
        <span>ixaxtavarez.com ↗</span>
      </div>
    </div>,
    size,
  );
}
