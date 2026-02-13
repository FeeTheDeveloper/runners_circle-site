"use client";

import { useState, type FormEvent } from "react";
import { Container, SectionHeading, Card, Button } from "@/components/ui/primitives";
import { FadeRise } from "@/components/ui/motion";

const CONTACT_METHODS = [
  {
    label: "Email",
    value: "contact@runnerscirclebranding.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Dallas, Texas",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
      </svg>
    ),
  },
  {
    label: "Availability",
    value: "Mon – Fri, 9 AM – 6 PM CT",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
  },
];

export default function ContactContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || undefined,
          service: form.service,
          budget: "Not specified",
          timeline: "Not specified",
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setStatus("sent");
      setForm({ name: "", email: "", company: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full rounded-lg border border-white/[0.08] bg-brand-gray/40 px-4 py-3 text-sm text-brand-sand placeholder:text-brand-sand/30 focus:border-brand-ember/50 focus:outline-none focus:ring-1 focus:ring-brand-ember/30 transition-colors duration-200";

  return (
    <>
      {/* ─── Page Hero ─── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="gradient-hero-glow pointer-events-none absolute inset-0 z-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <FadeRise>
            <h1 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-brand-sand leading-[1.08]">
              Let&#39;s{" "}
              <span className="text-gradient">Build Together.</span>
            </h1>
          </FadeRise>
          <FadeRise delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-sand/70 sm:text-lg md:text-xl">
              Ready to start your next project? Tell us about your vision and
              we&#39;ll respond within 24 hours with a custom strategy proposal.
            </p>
          </FadeRise>
        </div>
      </section>

      {/* ─── Contact Form + Info ─── */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeRise>
                <SectionHeading
                  title="Send Us a Message"
                  center={false}
                  className="mb-8"
                />
              </FadeRise>
              <FadeRise delay={0.1}>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-heading font-semibold uppercase tracking-widest text-brand-sand/40 mb-2">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-heading font-semibold uppercase tracking-widest text-brand-sand/40 mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="block text-xs font-heading font-semibold uppercase tracking-widest text-brand-sand/40 mb-2">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company (optional)"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-heading font-semibold uppercase tracking-widest text-brand-sand/40 mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className={inputBase}
                      >
                        <option value="">Select a service</option>
                        <option value="Brand System">Brand System</option>
                        <option value="Website / App">Website / App</option>
                        <option value="AI Automation">AI Automation</option>
                        <option value="Full Business Build">Full Business Build</option>
                        <option value="Consulting & Strategy">Consulting &amp; Strategy</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-heading font-semibold uppercase tracking-widest text-brand-sand/40 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className={inputBase + " resize-none"}
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <Button
                      size="lg"
                      type="submit"
                      disabled={status === "sending"}
                      className={status === "sending" ? "opacity-60 pointer-events-none" : ""}
                    >
                      {status === "sending" ? "Sending…" : "Submit Inquiry"}
                    </Button>
                    {status === "sent" && (
                      <span className="text-sm font-heading text-brand-ember">
                        Message sent — we&#39;ll be in touch!
                      </span>
                    )}
                    {status === "error" && (
                      <span className="text-sm font-heading text-red-400">
                        Something went wrong. Please try again.
                      </span>
                    )}
                  </div>
                </form>
              </FadeRise>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <FadeRise delay={0.2}>
                <SectionHeading
                  title="Get In Touch"
                  center={false}
                  className="mb-6"
                />
              </FadeRise>
              {CONTACT_METHODS.map(({ label, value, icon }, i) => (
                <FadeRise key={label} delay={0.25 + i * 0.08}>
                  <Card hover={false}>
                    <div className="flex items-center gap-4">
                      <span className="text-brand-ember">{icon}</span>
                      <div>
                        <span className="block text-xs font-heading font-semibold uppercase tracking-widest text-brand-sand/40 mb-1">
                          {label}
                        </span>
                        <span className="text-sm text-brand-sand/80">{value}</span>
                      </div>
                    </div>
                  </Card>
                </FadeRise>
              ))}

              <FadeRise delay={0.5}>
                <Card className="border-l-4 border-l-brand-ember">
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand-sand mb-3">
                    Prefer a Conversation?
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-sand/70 mb-4">
                    Use our AI-powered Concierge Chat in the bottom-right
                    corner to walk through your project in a guided,
                    conversational flow.
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-full border border-brand-ember/30 px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-brand-ember animate-pulse" />
                    <span className="text-xs font-heading font-medium uppercase tracking-wider text-brand-ember">
                      Concierge Available
                    </span>
                  </div>
                </Card>
              </FadeRise>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-brand-gray/20">
        <Container className="relative z-10 text-center">
          <FadeRise>
            <SectionHeading
              title="Veteran-Owned. Texas-Built. Nationwide Reach."
              subtitle="Every engagement is treated like a mission — planned, executed, and delivered with precision."
            />
          </FadeRise>
          <FadeRise delay={0.15}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" href="/services">Explore Services</Button>
              <Button variant="secondary" size="lg" href="/about">
                About Us
              </Button>
            </div>
          </FadeRise>
        </Container>
      </section>
    </>
  );
}
