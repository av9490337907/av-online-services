import { useEffect } from "react";

export default function LogoPage() {
  useEffect(() => {
    document.title = "AV Online Services – Logo";
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        boxSizing: "border-box",
      }}
    >
      {/* Large standalone logo SVG — inline for right-click save */}
      <svg
        width="640"
        height="800"
        viewBox="0 0 160 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="AV Online Services Logo"
        role="img"
        style={{ maxWidth: "90vw", maxHeight: "70vh" }}
        data-ocid="logo-svg"
      >
        {/* White canvas background */}
        <rect x="0" y="0" width="160" height="200" fill="#FFFFFF" />

        {/* Outer teal ring */}
        <circle
          cx="80"
          cy="90"
          r="55"
          stroke="#06B6D4"
          strokeWidth="4"
          fill="none"
        />

        {/* Deep Blue circle background */}
        <circle cx="80" cy="90" r="51" fill="#1E3A8A" />

        {/* Globe grid lines — vertical prime meridian */}
        <line
          x1="80"
          y1="39"
          x2="80"
          y2="141"
          stroke="#06B6D4"
          strokeWidth="1.2"
          strokeOpacity="0.45"
        />
        {/* Horizontal equator */}
        <line
          x1="29"
          y1="90"
          x2="131"
          y2="90"
          stroke="#06B6D4"
          strokeWidth="1.2"
          strokeOpacity="0.45"
        />
        {/* Latitude line — upper third */}
        <line
          x1="41"
          y1="73"
          x2="119"
          y2="73"
          stroke="#06B6D4"
          strokeWidth="0.9"
          strokeOpacity="0.35"
        />
        {/* Latitude line — lower third */}
        <line
          x1="41"
          y1="107"
          x2="119"
          y2="107"
          stroke="#06B6D4"
          strokeWidth="0.9"
          strokeOpacity="0.35"
        />
        {/* Central vertical meridian ellipse */}
        <ellipse
          cx="80"
          cy="90"
          rx="29"
          ry="51"
          stroke="#06B6D4"
          strokeWidth="1.2"
          strokeOpacity="0.5"
          fill="none"
        />
        {/* Equatorial ellipse */}
        <ellipse
          cx="80"
          cy="90"
          rx="51"
          ry="18"
          stroke="#06B6D4"
          strokeWidth="1.2"
          strokeOpacity="0.5"
          fill="none"
        />

        {/* "AV" text centered inside globe — "A" in Teal, "V" in White */}
        <text
          x="80"
          y="98"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="32"
          fontWeight="700"
          letterSpacing="1"
        >
          <tspan fill="#06B6D4">A</tspan>
          <tspan fill="#FFFFFF">V</tspan>
        </text>

        {/* Email text below the circle */}
        <text
          x="80"
          y="163"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="9"
          fontWeight="500"
          fill="#374151"
          letterSpacing="0.3"
        >
          av9490337907@gmail.com
        </text>
      </svg>

      {/* Email label — larger, standalone below the SVG */}
      <p
        style={{
          marginTop: "28px",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "18px",
          fontWeight: 500,
          color: "#374151",
          letterSpacing: "0.02em",
          textAlign: "center",
        }}
        data-ocid="logo-email"
      >
        av9490337907@gmail.com
      </p>

      {/* Helper text */}
      <p
        style={{
          marginTop: "14px",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "13px",
          fontWeight: 400,
          color: "#9CA3AF",
          textAlign: "center",
          maxWidth: "380px",
          lineHeight: 1.5,
        }}
        data-ocid="logo-helper-text"
      >
        Right-click the logo above and select &quot;Save image as...&quot; to
        download
      </p>
    </div>
  );
}
