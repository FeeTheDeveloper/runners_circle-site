"use client";

import { Container, SectionHeading, Card, Button } from "@/components/ui/primitives";
import { FadeRise, StaggerReveal } from "@/components/ui/motion";

/* ─── AI Solutions Data ─── */
const SOLUTIONS = [
  {
    title: "Custom AI Assistants",
    description:
      "Purpose-built conversational AI trained on your business data — handling inquiries, qualifying leads, and guiding customers 24/7.",
    features: [
      "Branded conversational flows",
      "Multi-step lead qualification",
      "Knowledge base integration",
      "CRM & email auto-routing",
    ],
  },
  {
    title: "Workflow Automation",
    description:
      "Eliminate repetitive tasks with intelligent automations that connect your tools, process data, and trigger actions automatically.",
    features: [
      "Multi-platform orchestration",
      "Conditional logic pipelines",
      "Real-time data processing",
      "Error handling & logging",
    ],
  },
  {
    title: "AI-Powered Content",
    description:
      "Generate on-brand marketing content, social posts, and copy at scale — guided by your voice, tone, and strategic goals.",
    features: [
      "Brand voice calibration",
      "Multi-format content generation",
      "SEO-optimized output",
      "Batch scheduling & publishing",
    ],
  },
  {
    title: "Intelligent Analytics",
    description:
      "Turn raw data into actionable insights with AI dashboards that surface trends, anomalies, and growth opportunities.",
    features: [
      "Custom KPI dashboards",
      "Predictive trend analysis",
      "Automated reporting",
      "Anomaly detection alerts",
    ],
  },
  {
    title: "Public AI Deployment",
    description:
      "Launch user-facing AI tools and interactive experiences that differentiate your brand and drive engagement.",
    features: [
      "Embeddable chat widgets",
      "Interactive product advisors",
      "AI-powered search & discovery",
      "Custom GPT applications",
    ],
  },
  {
    title: "API & Integration Layer",
    description:
      "Connect AI capabilities to your existing stack — CRMs, databases, payment processors, and third-party platforms.",
    features: [
      "RESTful API development",
      "Webhook orchestration",
      "OAuth & auth management",
      "Rate limiting & monitoring",
    ],
  },
];

const USE_CASES = [
  {
    industry: "E-Commerce",
    description: "AI product recommendations, automated customer support, and dynamic pricing models.",
  },
  {
    industry: "Professional Services",
    description: "Lead qualification bots, automated proposal generation, and intelligent scheduling.",
  },
  {
    industry: "Real Estate",
    description: "Property matching AI, automated follow-ups, and market analysis dashboards.",
  },
  {
    industry: "Health & Wellness",
    description: "Appointment booking assistants, personalized program recommendations, and client engagement automation.",
  },
];

export default function AIContent() {
  return (
    <>
      {/* ─── Page Hero ─── */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{ background: "var(--color-brand-teal)" }}
      >
        <div className="gradient-hero-glow pointer-events-none absolute inset-0 z-0 opacity-60" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <FadeRise>
            <h1 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-brand-sand leading-[1.08]">
              AI That{" "}
              <span className="text-gradient">Works For You.</span>
            </h1>
          </FadeRise>
          <FadeRise delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-sand/70 sm:text-lg md:text-xl">
              Deploy intelligent assistants, automate operations, and create
              scalable digital workflows that operate around the clock —
              custom-built for your business.
            </p>
          </FadeRise>
          <FadeRise delay={0.3}>
            <div className="mt-10">
              <Button size="lg" href="/contact">Launch Your AI System</Button>
            </div>
          </FadeRise>
        </div>
      </section>

      {/* ─── Solutions Grid ─── */}
      <section className="py-24 md:py-32 bg-brand-black">
        <Container>
          <SectionHeading
            title="AI Solutions We Build"
            subtitle="Purpose-built intelligent systems — not off-the-shelf plugins."
          />
          <StaggerReveal
            stagger={0.08}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {SOLUTIONS.map(({ title, description, features }) => (
              <Card key={title}>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand-sand mb-3">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-sand/60 mb-5">
                  {description}
                </p>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-brand-sand/70"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-ember shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-24 md:py-32 bg-brand-gray/20">
        <Container>
          <SectionHeading
            title="How We Deploy AI"
            subtitle="A disciplined four-phase approach to intelligent system design."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Audit & Discovery", d: "We map your operations, data sources, and automation opportunities." },
              { n: "02", t: "System Architecture", d: "We design the AI pipeline — models, integrations, and user flows." },
              { n: "03", t: "Build & Train", d: "We develop, test, and fine-tune your AI systems against real scenarios." },
              { n: "04", t: "Deploy & Monitor", d: "We launch to production and set up monitoring, analytics, and iteration." },
            ].map(({ n, t, d }, i) => (
              <FadeRise key={n} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-ember bg-brand-black text-lg font-heading font-bold text-brand-ember mb-5">
                    {n}
                  </div>
                  <h3 className="font-heading text-base font-bold uppercase tracking-wide text-brand-sand mb-3">
                    {t}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-sand/60">{d}</p>
                </div>
              </FadeRise>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Use Cases ─── */}
      <section className="py-24 md:py-32 bg-brand-black">
        <Container>
          <SectionHeading
            title="AI Across Industries"
            subtitle="Intelligent solutions tailored to your vertical."
          />
          <StaggerReveal stagger={0.1} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.map(({ industry, description }) => (
              <Card key={industry}>
                <span className="inline-block mb-3 rounded-full bg-brand-ember/10 px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider text-brand-ember">
                  {industry}
                </span>
                <p className="text-sm leading-relaxed text-brand-sand/70">
                  {description}
                </p>
              </Card>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* ─── Why Us ─── */}
      <section className="py-24 md:py-32 bg-brand-gray/20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <FadeRise>
                <SectionHeading
                  title="Why Build AI With Runners Circle?"
                  center={false}
                  className="mb-6"
                >
                  <div className="space-y-4 text-base leading-relaxed text-brand-sand/70 sm:text-lg">
                    <p>
                      We don&#39;t just plug in third-party tools and call it AI.
                      Every system is custom-engineered for your business — your
                      data, your workflows, your brand voice.
                    </p>
                    <p>
                      Our team combines deep technical expertise with
                      strategic thinking, ensuring your AI investments deliver
                      measurable ROI from day one.
                    </p>
                  </div>
                </SectionHeading>
              </FadeRise>
            </div>
            <FadeRise delay={0.2}>
              <Card className="border-l-4 border-l-brand-ember">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand-sand mb-4">
                  Our AI Commitment
                </h3>
                <ul className="space-y-3 text-sm text-brand-sand/70">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-ember shrink-0 mt-1.5" />
                    Custom-built — never generic templates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-ember shrink-0 mt-1.5" />
                    Production-grade with monitoring &amp; fallbacks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-ember shrink-0 mt-1.5" />
                    Full documentation &amp; team training included
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-ember shrink-0 mt-1.5" />
                    Ongoing optimization &amp; iteration support
                  </li>
                </ul>
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
            <SectionHeading title="Ready To Deploy Intelligent Systems?" />
          </FadeRise>
          <FadeRise delay={0.15}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" href="/contact">Start Your AI Build</Button>
              <Button variant="secondary" size="lg" href="/services">
                View All Services
              </Button>
            </div>
          </FadeRise>
        </Container>
      </section>
    </>
  );
}
