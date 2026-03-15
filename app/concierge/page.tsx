import type { Metadata } from "next";
import { Container, SectionHeading, Card, Button } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "AI Concierge",
  description:
    "Deploy a branded AI Concierge to handle lead qualification, appointment booking, FAQs, and sales follow-up across your customer journey.",
  openGraph: {
    title: "AI Concierge | Runners Circle OS",
    description:
      "Website assistant, intake support, appointment setting, and sales follow-up powered by a branded AI Concierge layer.",
    url: "/concierge",
  },
};

const FEATURES = [
  "Website Assistant",
  "Lead Qualification",
  "Appointment Setting",
  "FAQ & Intake Support",
  "Sales Follow-Up",
  "Branded Experience",
];

export default function ConciergePage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="gradient-hero-glow pointer-events-none absolute inset-0 z-0 opacity-50" />
        <Container className="relative z-10 text-center">
          <SectionHeading
            title="AI Concierge"
            subtitle="A branded conversational layer that engages visitors instantly, qualifies opportunities, and keeps your pipeline moving 24/7."
          />
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-brand-gray/20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <Card key={feature}>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand-sand mb-3">
                  {feature}
                </h3>
                <p className="text-sm leading-relaxed text-brand-sand/70">
                  Built into your brand voice and connected to your CRM workflows for seamless customer interactions.
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="text-center">
          <SectionHeading
            title="Deploy Your AI Concierge"
            subtitle="Activate conversational support that qualifies, nurtures, and books opportunities without adding headcount."
          />
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" href="/contact">
              Get an AI Concierge
            </Button>
            <Button variant="secondary" size="lg" href="/pricing">
              View Packages
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
