"use client";

import { Container, SectionHeading, Card } from "@/components/ui/primitives";
import { StaggerReveal } from "@/components/ui/motion";

const SERVICES = [
  {
    title: "Brand Architecture",
    bullets: [
      "Messaging Strategy",
      "Identity Design",
      "Market Positioning",
      "Competitive Analysis",
    ],
  },
  {
    title: "Website & App Development",
    bullets: [
      "Next.js App Router",
      "GitHub-First Infrastructure",
      "Vercel Deployment",
      "SEO Optimization",
    ],
  },
  {
    title: "AI Prompting & Automation",
    bullets: [
      "Custom GPT Systems",
      "Workflow Automation",
      "Public AI Deployment",
      "Business Scaling Tools",
    ],
  },
  {
    title: "Marketing Systems",
    bullets: [
      "Social Strategy",
      "Campaign Funnels",
      "Conversion Optimization",
      "Authority Positioning",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-black">
      <Container>
        <SectionHeading
          title="What We Build"
          subtitle="Full-spectrum brand systems, digital infrastructure, and AI-powered automation."
        />
        <StaggerReveal
          stagger={0.1}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map(({ title, bullets }) => (
            <Card key={title}>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand-sand mb-5">
                {title}
              </h3>
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
  );
}
