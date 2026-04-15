import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import BusinessHours from "./BusinessHours";
import WhatsAppButton from "./WhatsAppButton";

// AV Online Services — Redesigned Logo (Teal theme, no gold)
// ViewBox: 160×200 — wide white canvas, circle centered at (80,90) r=55
export function AVLogo({
  size = "md",
  variant = "default",
}: {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light" | "dark";
}) {
  const sizes = { sm: 44, md: 60, lg: 72 };
  const s = sizes[size];
  const isDark = variant === "dark" || variant === "light";
  const textColor = isDark ? "#FFFFFF" : "#0A2342";
  const tagColor = "#06B6D4"; // Teal replaces gold everywhere

  // SVG dimensions scale with size prop; keep 160:200 aspect ratio
  const svgW = Math.round(s * (160 / 88));
  const svgH = Math.round(s * (200 / 88));

  return (
    <div className="flex items-center gap-3">
      {/* Globe SVG — flat vector style, wide white canvas */}
      <svg
        width={svgW}
        height={svgH}
        viewBox="0 0 160 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* White canvas background */}
        <rect x="0" y="0" width="160" height="200" fill="#FFFFFF" />

        {/* Outer teal ring — circle center (80,90), r=55 */}
        <circle
          cx="80"
          cy="90"
          r="55"
          stroke="#06B6D4"
          strokeWidth="4"
          fill="none"
        />

        {/* Deep Blue circle background — r=51 (inside ring) */}
        <circle cx="80" cy="90" r="51" fill="#1E3A8A" />

        {/* Globe grid lines — clipped inside the deep blue circle */}
        {/* Vertical prime meridian */}
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
        {/* Latitude lines — upper and lower thirds */}
        <line
          x1="41"
          y1="73"
          x2="119"
          y2="73"
          stroke="#06B6D4"
          strokeWidth="0.9"
          strokeOpacity="0.35"
        />
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

        {/* "AV" text — centered inside globe at (80, 90) */}
        {/* "A" in Teal, "V" in White — bold modern sans-serif */}
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

        {/* Email text — well below circle (circle bottom = 90+55=145, text at y=163) */}
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

      {/* Brand text */}
      <div className="flex flex-col leading-tight min-w-0">
        <span
          className="font-bold tracking-tight whitespace-nowrap"
          style={{
            color: textColor,
            fontSize: Math.round(s * 0.3),
            fontWeight: 800,
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
          }}
        >
          av_online_services
        </span>
        <span
          className="font-medium tracking-widest uppercase whitespace-nowrap"
          style={{
            color: tagColor,
            fontSize: Math.round(s * 0.155),
            fontWeight: 600,
            letterSpacing: "0.1em",
            lineHeight: 1.5,
          }}
        >
          Digital &amp; Online Solutions
        </span>
      </div>
    </div>
  );
}

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top info bar */}
      <div
        className="py-1.5 px-4 text-xs hidden md:block"
        style={{ background: "#0A2342", color: "rgba(255,255,255,0.82)" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a
              href="tel:+919701880499"
              className="flex items-center gap-1.5 transition-smooth hover:text-[#06B6D4]"
              data-ocid="topbar-phone"
            >
              <Phone size={11} />
              <span>+91 9701880499</span>
            </a>
            <div className="flex items-center gap-1.5">
              <MapPin size={11} />
              <span>Mahabubabad</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={11} />
            <BusinessHours compact />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-card border-b sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-elevated" : "shadow-sm"}`}
        style={{ borderColor: "var(--border)" }}
        data-ocid="main-header"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-2.5 flex items-center justify-between">
          <Link to="/" aria-label="AV Online Services Home" className="py-1">
            <AVLogo size="md" variant="default" />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            data-ocid="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-smooth hover:bg-muted ${
                    isActive ? "bg-muted font-semibold" : "hover:text-primary"
                  }`}
                  style={{
                    color: isActive ? "#0A2342" : "#0A2342",
                  }}
                  data-ocid={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link to="/contact">
              <Button
                className="ml-3 text-sm font-semibold transition-smooth hover:opacity-90"
                style={{ background: "#06B6D4", color: "#ffffff" }}
                data-ocid="header-contact-cta"
              >
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
            style={{ color: "#0A2342" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            data-ocid="mobile-menu-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile nav drawer */}
        {mobileOpen && (
          <div
            className="md:hidden bg-card border-t px-4 pb-4 pt-2"
            style={{ borderColor: "var(--border)" }}
          >
            <nav className="flex flex-col gap-1" data-ocid="mobile-nav">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                      isActive ? "font-semibold" : "hover:bg-muted"
                    }`}
                    style={{
                      background: isActive ? "rgba(6,182,212,0.08)" : undefined,
                      color: "#0A2342",
                    }}
                    data-ocid={`mobile-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div
                className="pt-2 border-t mt-2"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                  <a
                    href="tel:+919701880499"
                    className="flex items-center gap-2"
                    style={{ color: "#0A2342" }}
                  >
                    <Phone size={12} style={{ color: "#06B6D4" }} />
                    <span>+91 9701880499</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <Clock size={12} style={{ color: "#06B6D4" }} />
                    <BusinessHours compact />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer
        style={{ background: "#0A2342", color: "rgba(255,255,255,0.85)" }}
      >
        {/* Teal accent top stripe */}
        <div
          className="h-1"
          style={{
            background:
              "linear-gradient(90deg, transparent, #06B6D4 20%, #22D3EE 50%, #06B6D4 80%, transparent)",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand column */}
            <div className="flex flex-col gap-4">
              <AVLogo size="md" variant="dark" />
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Your one-stop center for all online services, document work, and
                printing needs. Fast, reliable, and affordable.
              </p>
              <BusinessHours />
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className="font-semibold text-sm uppercase tracking-widest mb-4"
                style={{ color: "#06B6D4" }}
              >
                Quick Links
              </h3>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm transition-smooth hover:text-[#06B6D4]"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                      data-ocid={`footer-nav-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3
                className="font-semibold text-sm uppercase tracking-widest mb-4"
                style={{ color: "#06B6D4" }}
              >
                Address
              </h3>
              <div
                className="flex flex-col gap-3 text-sm"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                <div className="flex items-start gap-2">
                  <MapPin
                    size={14}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#06B6D4" }}
                  />
                  <span>
                    Mahabubabad,
                    <br />
                    Telangana, India
                  </span>
                </div>
                <a
                  href="tel:+919701880499"
                  className="flex items-center gap-2 hover:text-[#06B6D4] transition-smooth"
                >
                  <Phone
                    size={14}
                    className="flex-shrink-0"
                    style={{ color: "#06B6D4" }}
                  />
                  <span>+91 9701880499</span>
                </a>
                <a
                  href="https://wa.me/919490337907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#06B6D4] transition-smooth"
                  data-ocid="footer-whatsapp"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="flex-shrink-0"
                    style={{ color: "#06B6D4" }}
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            <span>
              © {new Date().getFullYear()} AV Online Services. All rights
              reserved.
            </span>
            <span>
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "avonlineservices.in")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-smooth underline-offset-2 hover:underline hover:text-[#06B6D4]"
                style={{ color: "rgba(6,182,212,0.6)" }}
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
