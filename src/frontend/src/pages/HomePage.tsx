import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  BadgePercent,
  Briefcase,
  Building2,
  ChevronRight,
  CreditCard,
  Fingerprint,
  Globe,
  Layers,
  MapPin,
  Phone,
  Printer,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";
import BusinessHours from "../components/BusinessHours";

const services = [
  {
    icon: <Fingerprint size={26} />,
    title: "Aadhaar Print & Update",
    desc: "Print, update, and correction services for your Aadhaar card.",
    href: "/services",
  },
  {
    icon: <CreditCard size={26} />,
    title: "PAN Card Application",
    desc: "New PAN card applications and corrections handled quickly.",
    href: "/services",
  },
  {
    icon: <Briefcase size={26} />,
    title: "Online Job Applications",
    desc: "Job applications, government schemes, and online forms.",
    href: "/services",
  },
  {
    icon: <Building2 size={26} />,
    title: "Government Services",
    desc: "Access to e-Government portals, certificates, and official forms.",
    href: "/services",
  },
  {
    icon: <Printer size={26} />,
    title: "Xerox & Printing",
    desc: "Black & White and Color xerox, high-quality document printing.",
    href: "/services",
  },
  {
    icon: <Layers size={26} />,
    title: "Lamination",
    desc: "High-quality lamination for all your important documents.",
    href: "/services",
  },
  {
    icon: <Globe size={26} />,
    title: "Internet Browsing",
    desc: "Fast internet browsing and digital assistance available.",
    href: "/services",
  },
];

const reasons = [
  {
    icon: <Zap size={20} />,
    title: "Fast Service",
    desc: "Quick turnaround on all services, no long waits.",
  },
  {
    icon: <BadgePercent size={20} />,
    title: "Affordable Prices",
    desc: "Budget-friendly pricing for every service we offer.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Trusted Support",
    desc: "Reliable and honest assistance every single time.",
  },
  {
    icon: <Star size={20} />,
    title: "All in One Place",
    desc: "Aadhaar, PAN, printing, and more under one roof.",
  },
];

const offerBadges = ["Quick Processing", "Affordable Price", "Trusted Service"];

export default function HomePage() {
  return (
    <>
      {/* Special Offer Banner — Teal gradient replaces amber/gold */}
      <div
        className="py-3 px-4 text-center text-sm font-bold flex flex-wrap items-center justify-center gap-2 md:gap-4"
        style={{
          background:
            "linear-gradient(90deg, #0891B2 0%, #06B6D4 25%, #22D3EE 50%, #06B6D4 75%, #0891B2 100%)",
          color: "#fff",
        }}
        data-ocid="offer-banner"
      >
        <span className="flex items-center gap-2 font-extrabold tracking-wide text-sm md:text-base">
          🔥 PAN Card &amp; Aadhaar Services Available Here!
        </span>
        <span className="hidden md:flex items-center gap-2">
          {offerBadges.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.35)",
              }}
            >
              ✓ {b}
            </span>
          ))}
        </span>
      </div>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background:
            "linear-gradient(135deg, #080E2E 0%, #0F2460 45%, #1A3070 100%)",
        }}
        data-ocid="hero-section"
      >
        {/* Background image overlay */}
        <img
          src="/assets/generated/av-hero-banner.dim_1200x400.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Decorative grid — Teal */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Decorative teal orb */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #06B6D4, transparent)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            {/* Location badge */}
            <Badge
              className="mb-5 text-xs uppercase tracking-widest font-medium border"
              style={{
                background: "rgba(6,182,212,0.1)",
                color: "#06B6D4",
                borderColor: "rgba(6,182,212,0.3)",
              }}
            >
              📍 Digital Solutions · Mahabubabad
            </Badge>

            <h1
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-4"
              style={{ textShadow: "0 2px 24px rgba(15,36,96,0.5)" }}
            >
              AV Online Services –{" "}
              <span style={{ color: "#22D3EE" }}>Digital Solutions</span>
            </h1>

            <p
              className="text-base md:text-lg mb-3"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Your one-stop center for all online services, document work, and
              printing needs.{" "}
              <strong style={{ color: "rgba(255,255,255,0.92)" }}>
                Fast, reliable, and affordable
              </strong>{" "}
              services at your convenience.
            </p>

            <p
              className="text-sm font-semibold mb-8 flex items-center gap-2"
              style={{ color: "#06B6D4" }}
            >
              <Zap size={14} fill="currentColor" />
              We make your digital work easy!
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Link to="/services">
                <Button
                  size="lg"
                  className="font-bold text-sm shadow-teal hover:opacity-90 transition-smooth"
                  style={{ background: "#06B6D4", color: "#0F2460" }}
                  data-ocid="hero-explore-services"
                >
                  Explore Our Services
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </Link>
              <a href="tel:+919701880499">
                <Button
                  size="lg"
                  className="font-semibold text-sm transition-smooth"
                  style={{
                    background: "#06B6D4",
                    color: "#0F2460",
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#22D3EE";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#06B6D4";
                  }}
                  data-ocid="hero-call-us"
                >
                  <Phone size={15} className="mr-2" />
                  Call Us Now
                </Button>
              </a>
            </div>

            {/* Business hours in hero */}
            <div
              className="inline-flex items-center gap-3 rounded-xl px-4 py-3"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              data-ocid="hero-business-hours"
            >
              <BusinessHours />
            </div>
          </div>
        </div>

        {/* Bottom teal accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, transparent, #06B6D4 20%, #22D3EE 50%, #06B6D4 80%, transparent)",
          }}
        />
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background" data-ocid="services-section">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge
              className="mb-3 text-xs uppercase tracking-widest border-0"
              style={{ background: "rgba(10,35,66,0.08)", color: "#0A2342" }}
            >
              What We Offer
            </Badge>
            <h2
              className="text-3xl md:text-4xl font-black mb-3"
              style={{ color: "var(--brand-navy)" }}
            >
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We provide a wide range of services to meet all your digital and
              documentation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <Link
                key={svc.title}
                to={svc.href}
                className="group block bg-card rounded-xl p-5 border hover-lift shadow-sm hover:shadow-blue transition-smooth card-fade-in border-accent-top"
                style={{
                  borderColor: "var(--border)",
                  animationDelay: `${i * 0.08}s`,
                }}
                data-ocid={`service-card-${i}`}
              >
                {/* Icon circle */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-smooth group-hover:scale-110"
                  style={{
                    background: "rgba(6,182,212,0.1)",
                    color: "#06B6D4",
                  }}
                >
                  {svc.icon}
                </div>
                <h3
                  className="font-bold text-sm mb-1.5 leading-snug"
                  style={{ color: "var(--brand-navy)" }}
                >
                  {svc.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {svc.desc}
                </p>
                <span
                  className="text-xs font-semibold flex items-center gap-1 transition-smooth group-hover:gap-2"
                  style={{ color: "#06B6D4" }}
                >
                  Learn More <ChevronRight size={12} />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button
                variant="outline"
                className="font-semibold transition-smooth"
                style={{ borderColor: "#06B6D4", color: "#06B6D4" }}
                data-ocid="view-all-services"
              >
                View All Services
                <ChevronRight size={15} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-16"
        style={{ background: "rgba(6,182,212,0.04)" }}
        data-ocid="why-choose-section"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge
              className="mb-3 text-xs uppercase tracking-widest border-0"
              style={{
                background: "rgba(6,182,212,0.12)",
                color: "#0891B2",
              }}
            >
              Why Us
            </Badge>
            <h2
              className="text-3xl md:text-4xl font-black mb-3"
              style={{ color: "var(--brand-navy)" }}
            >
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              We're committed to delivering the best service experience every
              time you visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="bg-card rounded-xl p-6 border shadow-sm card-fade-in border-accent-top hover-lift"
                style={{
                  borderColor: "var(--border)",
                  animationDelay: `${i * 0.1}s`,
                }}
                data-ocid={`reason-card-${i}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(6,182,212,0.12)",
                    color: "#06B6D4",
                  }}
                >
                  {r.icon}
                </div>
                <h3
                  className="font-bold text-sm mb-2"
                  style={{ color: "var(--brand-navy)" }}
                >
                  {r.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        className="py-16 md:py-20 relative"
        style={{
          background:
            "linear-gradient(135deg, #080E2E 0%, #0F2460 60%, #1a2a70 100%)",
        }}
        data-ocid="cta-section"
      >
        {/* Teal top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #06B6D4 30%, #22D3EE 50%, #06B6D4 70%, transparent)",
          }}
        />
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <Badge
            className="mb-4 text-xs uppercase tracking-widest border"
            style={{
              background: "rgba(6,182,212,0.1)",
              color: "#22D3EE",
              borderColor: "rgba(6,182,212,0.25)",
            }}
          >
            Get in Touch
          </Badge>
          <h2
            className="text-3xl md:text-4xl font-black text-white mb-4"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}
          >
            Contact Us Today!
          </h2>
          <p className="mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
            We are here to help you with all your digital needs.
          </p>
          <p
            className="text-sm mb-8 flex items-center justify-center gap-1.5"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <MapPin size={13} />
            Mahabubabad, Telangana
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href="tel:+919701880499">
              <Button
                size="lg"
                className="font-bold shadow-teal hover:opacity-90 transition-smooth"
                style={{ background: "#06B6D4", color: "#0F2460" }}
                data-ocid="cta-call-btn"
              >
                <Phone size={16} className="mr-2" />📱 Call / WhatsApp
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold hover:bg-white/10 transition-smooth"
                style={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#ffffff",
                }}
                data-ocid="cta-contact-page-btn"
              >
                Get Directions
              </Button>
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-3 gap-4 max-w-sm mx-auto rounded-2xl px-6 py-4"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {[
              { value: "7+", label: "Services" },
              { value: "Mon–Sun", label: "Open" },
              { value: "9–9 PM", label: "Hours" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-lg font-black"
                  style={{ color: "#22D3EE" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs font-medium"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
