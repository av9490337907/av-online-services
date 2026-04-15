import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Briefcase,
  CheckCircle2,
  CreditCard,
  Fingerprint,
  Layers,
  MessageCircle,
  Phone,
  Printer,
} from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  name: string;
  accent: "blue" | "teal";
  description: string;
  features: string[];
  badge?: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: <Fingerprint size={30} />,
    name: "Aadhaar Services",
    accent: "blue",
    description: "Print, update, and lamination services for Aadhaar card.",
    features: [
      "Aadhaar card print",
      "Aadhaar update / correction",
      "Aadhaar lamination",
    ],
    badge: "Popular",
  },
  {
    icon: <CreditCard size={30} />,
    name: "PAN Card Services",
    accent: "teal",
    description: "New PAN card application and corrections.",
    features: [
      "New PAN card application",
      "PAN card correction / update",
      "NSDL & UTI services",
    ],
    badge: "Hot",
  },
  {
    icon: <Briefcase size={30} />,
    name: "Online Applications",
    accent: "blue",
    description: "Job applications, government schemes, and online forms.",
    features: [
      "Government job applications",
      "Scholarship applications",
      "Online scheme registrations",
      "Digital forms and e-documents",
    ],
  },
  {
    icon: <Printer size={30} />,
    name: "Xerox & Printing",
    accent: "teal",
    description: "Black & White and Color Xerox, document printing.",
    features: [
      "Black & White xerox",
      "Color printing",
      "Document printing",
      "Photo printing",
    ],
  },
  {
    icon: <Layers size={30} />,
    name: "Lamination",
    accent: "blue",
    description: "High-quality lamination for all documents.",
    features: [
      "Document lamination",
      "ID card lamination",
      "Certificate lamination",
      "Pocket size lamination",
    ],
  },
];

const WHY_US = [
  { emoji: "⚡", label: "Fast Service" },
  { emoji: "💰", label: "Affordable Prices" },
  { emoji: "🛡️", label: "Trusted Support" },
  { emoji: "🏢", label: "All Services in One Place" },
];

function ServiceCard({ svc, index }: { svc: ServiceItem; index: number }) {
  const isTeal = svc.accent === "teal";
  const iconBg = isTeal ? "rgba(6,182,212,0.12)" : "rgba(10,35,66,0.08)";
  const iconColor = isTeal ? "#06B6D4" : "#0A2342";
  const badgeBg = isTeal ? "rgba(6,182,212,0.15)" : "rgba(10,35,66,0.08)";
  const badgeColor = isTeal ? "#06B6D4" : "#0A2342";

  return (
    <div
      className="bg-card rounded-xl border border-border border-accent-top shadow-elevated hover-lift transition-smooth flex flex-col overflow-hidden card-fade-in"
      style={{ animationDelay: `${index * 0.08}s`, opacity: 0 }}
      data-ocid={`service-card-${svc.name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="p-6 flex-1">
        {/* Icon + Badge row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ background: iconBg, color: iconColor }}
          >
            {svc.icon}
          </div>
          {svc.badge && (
            <Badge
              className="text-xs font-bold border-0 px-2.5"
              style={{ background: badgeBg, color: badgeColor }}
            >
              {svc.badge}
            </Badge>
          )}
        </div>

        {/* Name + description */}
        <h3
          className="text-lg font-bold mb-1.5 font-display"
          style={{ color: "var(--brand-navy)" }}
        >
          {svc.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {svc.description}
        </p>

        {/* Feature list */}
        <ul className="space-y-2">
          {svc.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2.5 text-sm">
              <CheckCircle2
                size={15}
                className="flex-shrink-0"
                style={{ color: iconColor }}
              />
              <span className="text-foreground">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA footer */}
      <div className="px-6 pb-5">
        <Link to="/contact" data-ocid="service-enquire-link">
          <Button
            variant="outline"
            size="sm"
            className="w-full font-semibold transition-smooth"
            style={{
              borderColor: isTeal
                ? "rgba(6,182,212,0.45)"
                : "rgba(10,35,66,0.25)",
              color: iconColor,
            }}
          >
            Enquire Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.14 265) 0%, oklch(0.15 0.12 264) 100%)",
        }}
        data-ocid="services-hero"
      >
        {/* Grid pattern overlay — Teal */}
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
          <svg width="100%" height="100%" aria-hidden="true">
            <defs>
              <pattern
                id="svc-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="0.6"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#svc-grid)" />
          </svg>
        </div>
        {/* Teal radial glow */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, #06B6D4 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        {/* Bottom teal line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{
            background:
              "linear-gradient(90deg, transparent, #06B6D4, #22D3EE, #06B6D4, transparent)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <Badge
            className="mb-4 text-xs uppercase tracking-widest border-0"
            style={{ background: "rgba(6,182,212,0.15)", color: "#06B6D4" }}
          >
            AV Online Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4 leading-tight">
            Our Services
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
            Complete digital services under one roof — fast, reliable, and
            affordable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-16 px-4" data-ocid="services-grid">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <ServiceCard key={svc.name} svc={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="bg-muted/40 border-y border-border py-12 px-4"
        data-ocid="why-us"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">
            Why Customers Trust Us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {WHY_US.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-3xl" aria-hidden="true">
                  {item.emoji}
                </span>
                <span className="text-sm font-semibold text-foreground text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.14 265) 0%, oklch(0.15 0.12 264) 100%)",
        }}
        data-ocid="services-cta"
      >
        {/* Teal top border */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 teal-gradient"
          aria-hidden="true"
        />
        <div className="max-w-xl mx-auto relative z-10">
          <h2 className="text-3xl font-display font-extrabold text-white mb-3">
            Need a Service?
          </h2>
          <p
            className="mb-8 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            Contact us today on WhatsApp or phone for any of our services. We
            are here to help you with all your digital needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" data-ocid="services-contact-cta">
              <Button
                size="lg"
                className="font-bold px-7 shadow-teal hover:opacity-90 transition-smooth gap-2"
                style={{
                  background: "#06B6D4",
                  color: "#0F2460",
                }}
              >
                <MessageCircle size={18} />
                Contact Us
              </Button>
            </Link>
            <a href="tel:+919701880499" data-ocid="services-call-cta">
              <Button
                size="lg"
                className="font-semibold gap-2 transition-smooth"
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
              >
                <Phone size={18} />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
