import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Clock,
  DollarSign,
  Heart,
  ShieldCheck,
  Target,
} from "lucide-react";

const highlights = [
  { value: "7+", label: "Services Offered" },
  { value: "500+", label: "Happy Customers" },
  { value: "3+", label: "Years Serving" },
];

const values = [
  {
    icon: <Heart size={20} />,
    title: "Customer First",
    desc: "Every customer is treated with respect, patience, and personalized attention.",
  },
  {
    icon: <Clock size={20} />,
    title: "Fast Service",
    desc: "We process your documents and requests quickly so you save time.",
  },
  {
    icon: <DollarSign size={20} />,
    title: "Affordable Pricing",
    desc: "Quality services at the most competitive, budget-friendly prices.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Trusted & Reliable",
    desc: "Your documents and data are handled with complete care and confidentiality.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A1A4A 0%, #0F2460 60%, #0A1A4A 100%)",
        }}
        data-ocid="about-hero"
      >
        {/* Grid pattern — Teal lines */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <svg
            width="100%"
            height="100%"
            aria-hidden="true"
            role="presentation"
          >
            <defs>
              <pattern
                id="about-grid"
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
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>
        {/* Teal accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #06B6D4 30%, #22D3EE 50%, #06B6D4 70%, transparent)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
          <Badge
            className="mb-4 text-xs uppercase tracking-widest border-0 font-semibold"
            style={{ background: "rgba(6,182,212,0.18)", color: "#06B6D4" }}
          >
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Trusted. <span style={{ color: "#22D3EE" }}>Reliable.</span>{" "}
            Affordable.
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Your local partner for all government document services, online
            applications, and printing needs — making digital services
            accessible to everyone.
          </p>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-card border-b" data-ocid="about-stats">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-3 divide-x divide-border">
            {highlights.map((stat) => (
              <div
                key={stat.label}
                className="py-8 md:py-10 text-center px-4"
                data-ocid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="text-3xl md:text-4xl font-black mb-1"
                  style={{ color: "var(--brand-teal)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-background" data-ocid="about-content">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Badge
                className="mb-4 text-xs uppercase tracking-widest border-0 font-semibold"
                style={{
                  background: "rgba(10,35,66,0.08)",
                  color: "#0A2342",
                }}
              >
                Who We Are
              </Badge>
              <h2
                className="text-3xl font-black mb-5 leading-snug"
                style={{ color: "var(--brand-navy)" }}
              >
                AV Online Services
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  AV Online Services is a trusted digital service center
                  providing a wide range of online and document-related
                  services. We aim to deliver{" "}
                  <strong className="text-brand-navy">
                    fast, reliable, and affordable solutions
                  </strong>{" "}
                  to our customers.
                </p>
                <p>
                  We are your local partner for all government document
                  services, online applications, and printing needs. Our goal is
                  to make digital services accessible to everyone in our
                  community.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/services">
                  <Button
                    className="font-semibold hover-lift"
                    style={{ background: "#06B6D4", color: "#fff" }}
                    data-ocid="about-cta-services"
                  >
                    Explore Our Services
                    <ChevronRight size={15} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mission Box */}
            <div
              className="rounded-2xl p-7 border shadow-blue relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(6,182,212,0.06) 0%, rgba(6,182,212,0.03) 100%)",
                borderColor: "rgba(6,182,212,0.2)",
              }}
              data-ocid="about-mission"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{
                  background: "linear-gradient(90deg, #06B6D4, #22D3EE)",
                }}
              />
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(6,182,212,0.12)",
                    color: "#06B6D4",
                  }}
                >
                  <Target size={20} />
                </div>
                <h3
                  className="text-lg font-black"
                  style={{ color: "var(--brand-navy)" }}
                >
                  Our Mission
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Our mission is to simplify digital services for everyone —
                making government processes, document work, and online tasks{" "}
                <strong style={{ color: "#0A2342" }}>
                  fast, easy, and affordable
                </strong>
                .
              </p>
              <div
                className="mt-6 pt-5 border-t"
                style={{ borderColor: "rgba(6,182,212,0.15)" }}
              >
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest mb-3">
                  We handle
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Aadhaar Services",
                    "PAN Card",
                    "Govt. Forms",
                    "Printing",
                    "Lamination",
                    "Internet",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: "rgba(6,182,212,0.1)",
                        color: "#0891B2",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/40" data-ocid="about-values">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge
              className="mb-3 text-xs uppercase tracking-widest border-0 font-semibold"
              style={{
                background: "rgba(6,182,212,0.12)",
                color: "var(--brand-teal)",
              }}
            >
              What We Stand For
            </Badge>
            <h2
              className="text-3xl font-black mb-3"
              style={{ color: "var(--brand-navy)" }}
            >
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
              The principles that guide everything we do for our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-card rounded-xl p-6 border shadow-sm hover-lift card-fade-in border-accent-top"
                style={{
                  borderColor: "var(--border)",
                  animationDelay: `${i * 0.1}s`,
                }}
                data-ocid={`value-${v.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "")}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(6,182,212,0.12)",
                    color: "var(--brand-teal)",
                  }}
                >
                  {v.icon}
                </div>
                <h3
                  className="font-bold text-sm mb-2"
                  style={{ color: "var(--brand-navy)" }}
                >
                  {v.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section
        className="py-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A2342 0%, #0F2460 100%)",
        }}
        data-ocid="about-cta"
      >
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
            Visit us today or get in touch — we're here to help with all your
            digital needs.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact">
              <Button
                className="font-bold hover-lift shadow-teal"
                style={{
                  background: "#06B6D4",
                  color: "#ffffff",
                }}
                data-ocid="about-cta-contact"
              >
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                className="font-semibold hover-lift"
                style={{
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "#fff",
                  background: "transparent",
                }}
                data-ocid="about-cta-services-bottom"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
