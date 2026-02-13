"use client";

import { Button } from "@/components/ui/primitives";
import { FadeRise } from "@/components/ui/motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Glow overlay */}
      <div className="gradient-hero-glow pointer-events-none absolute inset-0 z-0" />
      {/* Subtle diagonal sweep */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, rgba(242,76,26,0.15) 50%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        <FadeRise>
          <h1 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-brand-sand leading-[1.08]">
            Where Brands Become{" "}
            <span className="text-gradient">Powerhouses.</span>
          </h1>
        </FadeRise>

        <FadeRise delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-sand/70 sm:text-lg md:text-xl">
            Runners Circle Branding &amp; Marketing builds elite brand systems,
            AI infrastructure, and scalable digital ecosystems for modern
            businesses.
          </p>
        </FadeRise>

        <FadeRise delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg">Start Your Build</Button>
            <Button variant="secondary" size="lg">
              Explore AI Solutions
            </Button>
          </div>
        </FadeRise>
      </div>
    </section>
  );
}
