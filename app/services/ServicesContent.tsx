"use client";

import { Container, SectionHeading, Card, Button } from "@/components/ui/primitives";
import { FadeRise, StaggerReveal } from "@/components/ui/motion";

/* ─── Service Data ─── */
const CORE_SERVICES = [
  {
    title: "Brand Architecture",
    description:
      "Complete brand identity systems — from strategy and positioning to visual design and messaging frameworks.",
    bullets: [
      "Brand Strategy & Positioning",
      "Logo & Visual Identity Design",
      "Messaging & Voice Framework",
      "Competitive Market Analysis",
      "Brand Guidelines Documentation",
    ],
  },
  {
    title: "Website & App Development",
    description:
      "High-performance digital platforms built with modern technology for speed, scalability, and conversion.",
    bullets: [
      "Next.js & React Development",
      "Responsive UI/UX Design",
      "SEO & Performance Optimization",
      "GitHub-First Infrastructure",
      "Vercel / Cloud Deployment",
    ],
  },
  {
    title: "AI Prompting & Automation",
    description:
      "Intelligent systems that work around the clock — custom AI assistants, workflow automation, and data pipelines.",
    bullets: [
      "Custom GPT & LLM Systems",
      "Conversational AI Assistants",
      "Workflow & Process Automation",
      "Public-Facing AI Deployment",
      "API Integration & Orchestration",
    ],
  },
  {
    title: "Marketing Systems",
    description:
      "Strategic marketing infrastructure that generates leads, builds authority, and drives measurable growth.",
    bullets: [
      "Social Media Strategy",
      "Campaign & Funnel Design",
      "Email Marketing Automation",
      "Content & Authority Positioning",
      "Conversion Rate Optimization",
    ],
  },
  {
    title: "Digital Infrastructure",
    description:
      "The backbone of your digital business — hosting, domains, analytics, and CI/CD pipelines built to scale.",
    bullets: [
      "Cloud Hosting & DNS Management",
      "CI/CD Pipeline Configuration",
      "Analytics & Tracking Setup",
      "Security & SSL Configuration",
      "Third-Party Integration",
    ],
  },
  {
    title: "Consulting & Strategy",
    description:
      "High-level advisory for founders and teams looking to architect their next phase of growth.",
    bullets: [
      "Digital Transformation Strategy",
      "Technology Stack Advisory",
      "Growth & Scaling Roadmaps",
      "AI Adoption Consulting",
      "Competitive Intelligence Briefs",
    ],
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    body: "We audit your current brand, technology, and market position to identify gaps and opportunities.",
  },
  {
    number: "02",
    title: "Strategy",
    body: "A custom roadmap is built around your goals — brand architecture, tech stack, and growth plan.",
  },
  {
    number: "03",
    title: "Build & Deploy",
    body: "Our team executes pixel-perfect design and production-grade code, deployed to modern infrastructure.",
  },
  {
    number: "04",
    title: "Optimize & Scale",
    body: "Post-launch, we monitor performance, integrate AI systems, and optimize for continuous growth.",
  },
];

export default function ServicesContent() {
  return (
    <>
      {/* ─── Page Hero ─── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="gradient-hero-glow pointer-events-none absolute inset-0 z-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <FadeRise>
            <h1 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-brand-sand leading-[1.08]">
              Full-Spectrum{" "}
              <span className="text-gradient">Digital Services.</span>
            </h1>
          </FadeRise>
          <FadeRise delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-sand/70 sm:text-lg md:text-xl">
              From brand strategy to AI automation — we build complete digital
              ecosystems that position your business to lead, scale, and
              dominate.
            </p>
          </FadeRise>
        </div>
      </section>

      {/* ─── Core Services Grid ─── */}
      <section className="py-24 md:py-32 bg-brand-black">
        <Container>
          <SectionHeading
            title="What We Build"
            subtitle="End-to-end capabilities for brands that demand more than templates."
          />
          <StaggerReveal
            stagger={0.08}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {CORE_SERVICES.map(({ title, description, bullets }) => (
              <Card key={title}>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand-sand mb-3">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-sand/60 mb-5">
                  {description}
                </p>
                <ul className="space-y-2">
                  {bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-brand-sand/70"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-ember shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* ─── Process ─── */}
      <section className="py-24 md:py-32 bg-brand-gray/20">
        <Container>
          <SectionHeading
            title="How We Work"
            subtitle="Four precision-engineered phases from strategy to scale."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map(({ number, title, body }, i) => (
              <FadeRise key={number} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-ember bg-brand-black text-lg font-heading font-bold text-brand-ember mb-5">
                    {number}
                  </div>
                  <h3 className="font-heading text-base font-bold uppercase tracking-wide text-brand-sand mb-3">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-sand/60">
                    {body}
                  </p>
                </div>
              </FadeRise>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Pricing Philosophy ─── */}
      <section className="py-24 md:py-32 bg-brand-black">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <FadeRise>
                <SectionHeading
                  title="Investment, Not Expense."
                  center={false}
                  className="mb-6"
                >
                  <div className="space-y-4 text-base leading-relaxed text-brand-sand/70 sm:text-lg">
                    <p>
                      Every project is scoped and priced based on complexity,
                      deliverables, and timeline. No hourly billing surprises —
                      you get a clear proposal before any work begins.
                    </p>
                    <p>
                      Whether you need a single landing page or a complete
                      digital ecosystem with AI integration, we&#39;ll architect a
                      plan that fits your goals and budget.
                    </p>
                  </div>
                </SectionHeading>
              </FadeRise>
            </div>
            <FadeRise delay={0.2}>
              <Card className="border-l-4 border-l-brand-ember">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand-sand mb-4">
                  Typical Engagements
                </h3>
                <ul className="space-y-3">
                  {[
                    ["Brand System", "$2,500 – $7,500"],
                    ["Website Build", "$3,000 – $10,000"],
                    ["AI Automation", "$2,500 – $8,000"],
                    ["Full Ecosystem", "$10,000+"],
                  ].map(([service, range]) => (
                    <li key={service} className="flex items-center justify-between text-sm">
                      <span className="text-brand-sand/70">{service}</span>
                      <span className="font-heading font-semibold text-brand-ember">
                        {range}
                      </span>
                    </li>
                  ))}
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
            <SectionHeading title="Let&#39;s Build Your Competitive Edge." />
          </FadeRise>
          <FadeRise delay={0.15}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" href="/contact">Start Your Build</Button>
              <Button variant="secondary" size="lg" href="/ai">
                Explore AI Solutions
              </Button>
            </div>
          </FadeRise>
        </Container>
      </section>
    </>
  );
}
