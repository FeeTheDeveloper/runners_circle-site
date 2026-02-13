"use client";

import { Container, SectionHeading, Card } from "@/components/ui/primitives";
import { FadeRise } from "@/components/ui/motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
          {/* Main copy */}
          <div className="lg:col-span-3">
            <FadeRise>
              <SectionHeading
                title="Built With Discipline. Executed With Precision."
                center={false}
              />
            </FadeRise>
            <FadeRise delay={0.15}>
              <div className="space-y-5 text-base leading-relaxed text-brand-sand/70 sm:text-lg">
                <p>
                  Runners Circle Branding &amp; Marketing is a Texas-based,
                  veteran-owned branding and digital infrastructure agency.
                </p>
                <p>
                  We design and deploy complete business ecosystems — not just
                  websites. From identity systems to AI-powered automation, we
                  position brands to lead, scale, and dominate their markets.
                </p>
              </div>
            </FadeRise>
          </div>

          {/* Mission card */}
          <div className="lg:col-span-2">
            <FadeRise delay={0.25}>
              <Card className="border-l-4 border-l-brand-ember">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand-sand mb-4">
                  Our Mission
                </h3>
                <p className="text-sm leading-relaxed text-brand-sand/70">
                  To provide elite-level branding, digital infrastructure, and
                  AI automation to businesses ready to scale — delivered with
                  military-grade precision and unwavering commitment to
                  excellence.
                </p>
              </Card>
            </FadeRise>
          </div>
        </div>
      </Container>
    </section>
  );
}
