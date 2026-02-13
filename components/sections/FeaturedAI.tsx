"use client";

import { Container, Button } from "@/components/ui/primitives";
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
            <h2 className="font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl text-brand-sand">
              AI That Works For Your Business.
            </h2>
          </FadeRise>
          <FadeRise delay={0.12}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-sand/70 sm:text-lg">
              Deploy intelligent assistants, automate operations, and create
              scalable digital workflows that operate 24/7.
            </p>
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
