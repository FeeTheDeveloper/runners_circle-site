"use client";

import { Container, SectionHeading } from "@/components/ui/primitives";
import { ProgressiveReveal } from "@/components/ui/motion";

const STEPS = [
  { number: "01", title: "Strategy Mapping" },
  { number: "02", title: "System Architecture" },
  { number: "03", title: "Build & Deployment" },
  { number: "04", title: "AI Integration" },
  { number: "05", title: "Scale & Optimize" },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-brand-black">
      <Container>
        <SectionHeading
          title="Our Process"
          subtitle="Five precision-engineered phases to take your brand from concept to market dominance."
        />

        {/* Desktop timeline */}
        <div className="hidden md:block">
          <ProgressiveReveal className="relative flex items-start justify-between">
            {STEPS.map(({ number, title }, i) => (
              <div key={number} className="relative flex flex-col items-center text-center flex-1">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="absolute top-5 left-1/2 w-full h-px bg-gradient-to-r from-brand-ember/40 to-brand-ember/10 z-0" />
                )}
                {/* Node */}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-ember bg-brand-black text-sm font-heading font-bold text-brand-ember">
                  {number}
                </div>
                <span className="mt-4 text-sm font-heading font-semibold uppercase tracking-wide text-brand-sand/80 max-w-[120px]">
                  {title}
                </span>
              </div>
            ))}
          </ProgressiveReveal>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden">
          <ProgressiveReveal className="relative flex flex-col gap-8 pl-8 border-l-2 border-brand-ember/30">
            {STEPS.map(({ number, title }) => (
              <div key={number} className="relative flex items-center gap-4">
                <div className="absolute -left-[calc(2rem+5px)] flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-ember bg-brand-black text-sm font-heading font-bold text-brand-ember">
                  {number}
                </div>
                <span className="text-sm font-heading font-semibold uppercase tracking-wide text-brand-sand/80">
                  {title}
                </span>
              </div>
            ))}
          </ProgressiveReveal>
        </div>
      </Container>
    </section>
  );
}
