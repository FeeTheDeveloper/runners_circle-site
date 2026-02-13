"use client";

import { Container, SectionHeading, Button } from "@/components/ui/primitives";
import { FadeRise } from "@/components/ui/motion";

export default function FeaturedAI() {
  return (
    <section
      id="ai"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--color-brand-teal)" }}
    >
      {/* Glow overlay */}
      <div className="gradient-hero-glow pointer-events-none absolute inset-0 z-0 opacity-60" />

      <div className="relative z-10">
        <Container className="text-center">
          <FadeRise>
            <SectionHeading
              title="AI That Works For Your Business."
              subtitle="Deploy intelligent assistants, automate operations, and create scalable digital workflows that operate 24/7."
            />
          </FadeRise>
          <FadeRise delay={0.24}>
            <div className="mt-10">
              <Button size="lg">Launch Your AI System</Button>
            </div>
          </FadeRise>
        </Container>
      </div>
    </section>
  );
}
