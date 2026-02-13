"use client";

import { Container, SectionHeading, Card } from "@/components/ui/primitives";
import { StaggerReveal } from "@/components/ui/motion";

const CASES = [
  {
    name: "Apex Performance Co.",
    industry: "Fitness & Wellness",
    services: "Brand Architecture, Website, AI Chatbot",
    results: "3× lead volume in 60 days, 40% faster client onboarding.",
  },
  {
    name: "Meridian Capital Group",
    industry: "Financial Services",
    services: "Identity System, Marketing Funnels, SEO",
    results: "200% organic traffic increase, 5-figure monthly pipeline.",
  },
  {
    name: "Vanguard Supply Chain",
    industry: "Logistics & Operations",
    services: "AI Automation, App Development, Brand Strategy",
    results: "Reduced manual ops by 70%, unified brand across 12 markets.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-brand-black">
      <Container>
        <SectionHeading
          title="Selected Work"
          subtitle="Results-driven builds across industries."
        />
        <StaggerReveal stagger={0.12} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map(({ name, industry, services, results }) => (
            <Card key={name}>
              <span className="inline-block mb-3 rounded-full bg-brand-ember/10 px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider text-brand-ember">
                {industry}
              </span>
              <h3 className="font-heading text-lg font-bold text-brand-sand mb-4">
                {name}
              </h3>
              <div className="space-y-3 text-sm text-brand-sand/70">
                <div>
                  <span className="block text-xs font-heading font-semibold uppercase tracking-widest text-brand-sand/40 mb-1">
                    Services
                  </span>
                  {services}
                </div>
                <div>
                  <span className="block text-xs font-heading font-semibold uppercase tracking-widest text-brand-sand/40 mb-1">
                    Results
                  </span>
                  {results}
                </div>
              </div>
            </Card>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
