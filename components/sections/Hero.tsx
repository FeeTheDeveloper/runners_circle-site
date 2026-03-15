"use client";

import { Button } from "@/components/ui/primitives";
import { FadeRise } from "@/components/ui/motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="gradient-hero-glow pointer-events-none absolute inset-0 z-0" />
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
            AI CRM &amp; Marketing Systems.
          </h1>
        </FadeRise>

        <FadeRise delay={0.15}>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-brand-sand/70 sm:text-lg md:text-xl">
            We install AI CRM and marketing systems that capture leads,
            automate follow-up, and grow revenue. Built for Vet Gang companies
            first. Proven in-house. Deployed for brands nationwide.
          </p>
        </FadeRise>

        <FadeRise delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" href="/os">Launch Your AI System</Button>
            <Button variant="secondary" size="lg" href="/contact">
              Get Growth Audit
            </Button>
          </div>
        </FadeRise>
      </div>
    </section>
  );
}
