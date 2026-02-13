"use client";

import { Container, Button } from "@/components/ui/primitives";
import { FadeRise } from "@/components/ui/motion";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Glow */}
      <div className="gradient-hero-glow pointer-events-none absolute inset-0 z-0 opacity-40" />

      <Container className="relative z-10 text-center">
        <FadeRise>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl text-brand-sand">
            Ready To Run Circles Around Your Competition?
          </h2>
        </FadeRise>
        <FadeRise delay={0.15}>
          <div className="mt-10">
            <Button size="lg">Start Your Brand Build</Button>
          </div>
        </FadeRise>
      </Container>
    </section>
  );
}
