"use client";

import { Container, SectionHeading, Card, Button } from "@/components/ui/primitives";
import { FadeRise, StaggerReveal } from "@/components/ui/motion";

/* ─── Data ─── */
const VALUES = [
  {
    title: "Discipline",
    body: "Every deliverable follows a structured, repeatable process — no shortcuts, no guesswork.",
  },
  {
    title: "Precision",
    body: "Pixel-perfect design and battle-tested code. We sweat the details so your audience feels the difference.",
  },
  {
    title: "Integrity",
    body: "Transparent communication, honest timelines, and no hidden fees. Your trust is non-negotiable.",
  },
  {
    title: "Innovation",
    body: "We build with the latest technology — AI automation, modern frameworks, and scalable cloud infrastructure.",
  },
];

const TIMELINE = [
  {
    year: "2021",
    event: "Founded as a veteran-owned branding consultancy in Dallas, Texas.",
  },
  {
    year: "2022",
    event: "Expanded into full-stack web development and digital infrastructure.",
  },
  {
    year: "2023",
    event: "Launched AI automation division — custom GPTs, workflow bots, and intelligent assistants.",
  },
  {
    year: "2024",
    event: "Evolved into a full-spectrum digital agency serving clients nationwide.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* ─── Page Hero ─── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="gradient-hero-glow pointer-events-none absolute inset-0 z-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <FadeRise>
            <h1 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-brand-sand leading-[1.08]">
              Built Different.{" "}
              <span className="text-gradient">On Purpose.</span>
            </h1>
          </FadeRise>
          <FadeRise delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-sand/70 sm:text-lg md:text-xl">
              Runners Circle is a veteran-owned branding &amp; marketing agency
              that builds elite digital ecosystems for businesses ready to lead
              their market.
            </p>
          </FadeRise>
        </div>
      </section>

      {/* ─── Origin Story ─── */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <FadeRise>
                <SectionHeading
                  title="The Runners Circle Story"
                  center={false}
                />
              </FadeRise>
              <FadeRise delay={0.15}>
                <div className="space-y-5 text-base leading-relaxed text-brand-sand/70 sm:text-lg">
                  <p>
                    Runners Circle Branding &amp; Marketing was founded on a
                    simple principle: businesses deserve better than cookie-cutter
                    templates and surface-level strategy.
                  </p>
                  <p>
                    We started in Dallas, Texas with a focus on brand identity
                    and strategy consulting. As our clients&#39; needs evolved, so
                    did we — expanding into full-stack web development, AI
                    automation, and scalable digital infrastructure.
                  </p>
                  <p>
                    Today, we operate as a full-spectrum digital agency, serving
                    clients across industries nationwide. Every engagement is
                    treated like a mission — planned, executed, and delivered with
                    military-grade precision.
                  </p>
                </div>
              </FadeRise>
            </div>
            <div className="lg:col-span-2">
              <FadeRise delay={0.25}>
                <Card className="border-l-4 border-l-brand-ember">
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand-sand mb-4">
                    Our Mission
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-sand/70">
                    To provide elite-level branding, digital infrastructure, and
                    AI automation to businesses ready to scale — delivered with
                    military-grade precision and unwavering commitment to
                    excellence.
                  </p>
                </Card>
              </FadeRise>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Core Values ─── */}
      <section className="py-24 md:py-32 bg-brand-gray/20">
        <Container>
          <SectionHeading
            title="What We Stand For"
            subtitle="Four pillars that drive everything we build."
          />
          <StaggerReveal
            stagger={0.1}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {VALUES.map(({ title, body }) => (
              <Card key={title}>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand-sand mb-4">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-sand/70">
                  {body}
                </p>
              </Card>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* ─── Timeline ─── */}
      <section className="py-24 md:py-32 bg-brand-black">
        <Container>
          <SectionHeading
            title="Our Journey"
            subtitle="From veteran-owned consultancy to full-spectrum digital agency."
          />
          <div className="relative mx-auto max-w-2xl pl-8 border-l-2 border-brand-ember/30">
            {TIMELINE.map(({ year, event }, i) => (
              <FadeRise key={year} delay={i * 0.12}>
                <div className="relative mb-10 last:mb-0">
                  <div className="absolute -left-[calc(2rem+5px)] flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-ember bg-brand-black text-sm font-heading font-bold text-brand-ember">
                    {year}
                  </div>
                  <p className="text-base leading-relaxed text-brand-sand/70 sm:text-lg pt-1">
                    {event}
                  </p>
                </div>
              </FadeRise>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Veteran Badge ─── */}
      <section className="py-24 md:py-32 bg-brand-gray/20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <FadeRise>
                <SectionHeading
                  title="Mission-Driven. Results-Focused."
                  center={false}
                  className="mb-6"
                >
                  <div className="space-y-4 text-base leading-relaxed text-brand-sand/70 sm:text-lg">
                    <p>
                      Runners Circle Branding &amp; Marketing LLC is a verified
                      100% Veteran-Owned Texas business.
                    </p>
                    <p>
                      We bring military discipline and execution-level focus into
                      every build. When you partner with us, you get a team that
                      treats your brand like a mission — and we don&#39;t fail
                      missions.
                    </p>
                  </div>
                </SectionHeading>
              </FadeRise>
            </div>
            <FadeRise delay={0.2}>
              <Card hover={false} className="flex flex-col items-center text-center py-12">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-ember/60 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 text-brand-ember">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-brand-sand mb-2">
                  Veteran-Owned
                </h3>
                <p className="text-sm text-brand-sand/60 max-w-xs">
                  100% Veteran-Owned &bull; Texas Registered LLC &bull;
                  Discipline, Integrity &amp; Excellence
                </p>
              </Card>
            </FadeRise>
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="gradient-hero-glow pointer-events-none absolute inset-0 z-0 opacity-40" />
        <Container className="relative z-10 text-center">
          <FadeRise>
            <SectionHeading title="Ready To Build Something Legendary?" />
          </FadeRise>
          <FadeRise delay={0.15}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" href="/contact">Start Your Build</Button>
              <Button variant="secondary" size="lg" href="/services">
                Explore Services
              </Button>
            </div>
          </FadeRise>
        </Container>
      </section>
    </>
  );
}
