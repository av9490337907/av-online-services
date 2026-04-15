import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";

interface FormState {
  name: string;
  phone: string;
  message: string;
}

const contactDetails = [
  {
    icon: <Phone size={22} />,
    label: "Phone / WhatsApp",
    value: "+91 9701880499",
    href: "tel:+919701880499",
    note: "Call or WhatsApp us",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.10)",
  },
  {
    icon: <MapPin size={22} />,
    label: "Address",
    value: "Mahabubabad, Telangana, India",
    href: "https://maps.google.com/?q=Mahabubabad,Telangana",
    note: "Visit us at our shop",
    color: "#e05d00",
    bg: "rgba(224,93,0,0.08)",
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "av9490337907@gmail.com",
    href: "mailto:av9490337907@gmail.com",
    note: "Email us anytime",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.10)",
  },
];

const businessHours = [
  { days: "Monday – Sunday", hours: "9:00 AM – 9:00 PM", open: true },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello AV Online Services!\n\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`,
    );
    window.open(`https://wa.me/919490337907?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <>
      {/* Hero */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A1A4A 0%, #0F2460 60%, #122B70 100%)",
        }}
        data-ocid="contact-hero"
      >
        {/* Decorative grid — Teal */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          aria-hidden="true"
        >
          <svg width="100%" height="100%" role="presentation">
            <defs>
              <pattern
                id="cg"
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
            <rect width="100%" height="100%" fill="url(#cg)" />
          </svg>
        </div>
        {/* Teal bottom border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #06B6D4 20%, #22D3EE 50%, #06B6D4 80%, transparent)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
          <Badge
            className="mb-4 text-xs uppercase tracking-widest border-0 px-4 py-1"
            style={{ background: "rgba(6,182,212,0.15)", color: "#22D3EE" }}
          >
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Get in <span style={{ color: "#22D3EE" }}>Touch</span> With Us
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            We're here to help with all your digital needs. Walk in, call,
            WhatsApp, or email us.
          </p>
        </div>
      </section>

      {/* Contact Cards + Form */}
      <section className="py-16 bg-background" data-ocid="contact-main">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left — Contact Details + Hours + WhatsApp CTA */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-black text-brand-navy">
                Contact Information
              </h2>

              {/* Contact Cards */}
              <div className="flex flex-col gap-4">
                {contactDetails.map((item, i) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 bg-card rounded-2xl p-5 border border-border shadow-sm hover-lift card-fade-in"
                    style={{ animationDelay: `${i * 0.08}s` }}
                    data-ocid={`contact-card-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {/* Icon in colored circle */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"
                      style={{ background: item.bg, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm font-semibold text-brand-navy hover:text-brand-teal transition-smooth break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-brand-navy break-words">
                          {item.value}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours Card */}
              <div
                className="rounded-2xl border border-border bg-card p-5 shadow-sm card-fade-in"
                style={{ animationDelay: "0.28s" }}
                data-ocid="contact-hours"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(6,182,212,0.08)",
                      color: "#06B6D4",
                    }}
                  >
                    <Clock size={22} />
                  </div>
                  <h3 className="font-black text-base text-brand-navy">
                    Business Hours
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  {businessHours.map((row) => (
                    <div
                      key={row.days}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {row.days}
                      </span>
                      <span
                        className="text-sm font-semibold px-3 py-0.5 rounded-full"
                        style={
                          row.open
                            ? {
                                background: "rgba(6,182,212,0.1)",
                                color: "#0891B2",
                              }
                            : {
                                background: "rgba(0,0,0,0.06)",
                                color: "var(--muted-foreground)",
                              }
                        }
                      >
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA Banner */}
              <div
                className="rounded-2xl p-5 flex flex-col gap-3 card-fade-in"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(37,211,102,0.12), rgba(37,211,102,0.06))",
                  border: "1.5px solid rgba(37,211,102,0.3)",
                  animationDelay: "0.34s",
                }}
                data-ocid="contact-whatsapp-banner"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle size={20} style={{ color: "#25D366" }} />
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#1a8a44" }}
                  >
                    Chat with us on WhatsApp for quick assistance!
                  </p>
                </div>
                <a
                  href="https://wa.me/919490337907?text=Hello%2C%20I%20need%20help%20with%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl py-3 px-6 font-semibold text-white transition-smooth hover:opacity-90 hover-lift pulse-soft"
                  style={{ background: "#25D366" }}
                  data-ocid="contact-whatsapp-cta"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-black text-brand-navy">
                Send Us a Message
              </h2>
              {submitted ? (
                <div
                  className="rounded-2xl p-10 text-center border shadow-sm flex-1 flex flex-col items-center justify-center"
                  style={{
                    background: "rgba(37,211,102,0.06)",
                    borderColor: "rgba(37,211,102,0.3)",
                  }}
                  data-ocid="contact-success"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-black text-xl text-brand-navy mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Opening WhatsApp with your message pre-filled. We'll respond
                    as soon as possible!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 bg-card border border-border rounded-2xl p-6 shadow-sm"
                  data-ocid="contact-form"
                >
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="contact-name"
                      className="text-sm font-semibold text-brand-navy"
                    >
                      Your Name
                    </Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Enter your full name"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="border-input focus:ring-primary"
                      data-ocid="contact-name-input"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="contact-phone"
                      className="text-sm font-semibold text-brand-navy"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="+91 97018 80499"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      className="border-input focus:ring-primary"
                      data-ocid="contact-phone-input"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="contact-message"
                      className="text-sm font-semibold text-brand-navy"
                    >
                      Message / Service Needed
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us what you need — Aadhaar update, PAN card, printing, etc."
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      className="border-input focus:ring-primary resize-none"
                      data-ocid="contact-message-input"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="font-semibold w-full transition-smooth hover-lift"
                    style={{ background: "#06B6D4", color: "#ffffff" }}
                    data-ocid="contact-submit-btn"
                  >
                    <Send size={16} className="mr-2" />
                    Send via WhatsApp
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    This will open WhatsApp with your message pre-filled.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Form Section */}
      <section className="py-16 bg-muted/30" data-ocid="contact-google-form">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          {/* Section heading */}
          <div className="mb-8 text-center">
            <h2
              className="text-2xl md:text-3xl font-black mb-3"
              style={{ color: "#1E3A8A" }}
            >
              Send Us a Message
            </h2>
            {/* Teal accent underline */}
            <div
              className="mx-auto rounded-full"
              style={{
                width: 56,
                height: 4,
                background: "linear-gradient(90deg, #06B6D4, #22D3EE)",
              }}
              aria-hidden="true"
            />
            <p
              className="mt-3 text-sm max-w-md mx-auto"
              style={{ color: "rgba(30,58,138,0.65)" }}
            >
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          {/* Form card */}
          <div
            className="rounded-2xl border bg-card shadow-sm overflow-hidden"
            style={{ borderColor: "rgba(6,182,212,0.25)" }}
            data-ocid="contact-google-form-card"
          >
            {/* Teal top accent bar */}
            <div
              className="h-1 w-full"
              style={{
                background: "linear-gradient(90deg, #1E3A8A, #06B6D4, #22D3EE)",
              }}
              aria-hidden="true"
            />

            {/* Responsive iframe wrapper */}
            {/*
              Mobile   : fixed height so the form is always fully visible &
                         scrollable within the page (no nested scroll trap).
              Desktop  : taller fixed height gives the form ample room.
              The iframe fills 100% of the wrapper in both directions.
            */}
            <div className="w-full" style={{ padding: "0 0 0 0" }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSe931SfCoLug4L3kiu5YjbnXQlJHQtxnA7lbKS0_9eyJa8-gw/viewform?embedded=true"
                title="AV Online Services Contact Form"
                width="100%"
                // Tall enough to show the full Google Form on most screens
                // without an inner scroll; the outer page scroll handles overflow.
                style={{
                  display: "block",
                  border: "none",
                  minHeight: "900px",
                  height: "auto",
                }}
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                loading="lazy"
              >
                Loading form…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 bg-background" data-ocid="contact-map">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div
            className="rounded-2xl overflow-hidden border border-border shadow-sm"
            data-ocid="contact-map-embed"
          >
            <a
              href="https://maps.google.com/?q=Mahabubabad,Telangana"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label="Open location in Google Maps"
            >
              <div
                className="relative flex flex-col items-center justify-center gap-3 transition-smooth hover:opacity-90"
                style={{
                  height: 240,
                  background:
                    "linear-gradient(135deg, rgba(6,182,212,0.06), rgba(6,182,212,0.10))",
                }}
              >
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ opacity: 0.04 }}
                  aria-hidden="true"
                >
                  <svg width="100%" height="100%" role="presentation">
                    <defs>
                      <pattern
                        id="mg"
                        width="30"
                        height="30"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 30 0 L 0 0 0 30"
                          fill="none"
                          stroke="#06B6D4"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mg)" />
                  </svg>
                </div>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-elevated"
                  style={{
                    background: "rgba(6,182,212,0.12)",
                    color: "#06B6D4",
                  }}
                >
                  <MapPin size={32} />
                </div>
                <div className="text-center">
                  <p className="font-black text-base text-brand-navy">
                    Mahabubabad, Telangana
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Click to open in Google Maps
                  </p>
                </div>
                <Badge
                  className="text-xs border-0"
                  style={{
                    background: "rgba(6,182,212,0.15)",
                    color: "#0891B2",
                  }}
                >
                  📍 Visit us at our shop in Mahabubabad
                </Badge>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
