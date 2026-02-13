"use client";

import { Container, Card } from "@/components/ui/primitives";
import { FadeRise } from "@/components/ui/motion";

export default function VeteranAuthority() {
  return (
    <section className="py-24 md:py-32 bg-brand-gray/20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Copy */}
          <div>
            <FadeRise>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl text-brand-sand mb-6">
                Mission-Driven. Results-Focused.
              </h2>
            </FadeRise>
            <FadeRise delay={0.12}>
              <div className="space-y-4 text-base leading-relaxed text-brand-sand/70 sm:text-lg">
                <p>
                  Runners Circle Branding &amp; Marketing LLC is a verified 100%
                  Veteran-Owned Texas business.
                </p>
                <p>
                  We bring military discipline and execution-level focus into
                  every build.
                </p>
              </div>
            </FadeRise>
          </div>

          {/* Badge */}
          <FadeRise delay={0.2}>
            <Card hover={false} className="flex flex-col items-center text-center py-12">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-ember/60 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-10 w-10 text-brand-ember"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-brand-sand mb-2">
                Veteran-Owned
              </h3>
              <p className="text-sm text-brand-sand/60 max-w-xs">
                100% Veteran-Owned &bull; Texas Registered LLC &bull; Discipline,
                Integrity &amp; Excellence
              </p>
            </Card>
          </FadeRise>
        </div>
      </Container>
    </section>
  );
}
