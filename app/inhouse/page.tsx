import type { Metadata } from "next";
import { Container, SectionHeading, Card, Button } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "In-House Companies",
  description:
    "See the Vet Gang companies operating on Runners Circle OS and how in-house deployments validate the platform before nationwide rollouts.",
  openGraph: {
    title: "In-House Companies | Runners Circle OS",
    description:
      "Vet Gang HQ and other in-house companies run on the same AI CRM and marketing platform deployed for clients nationwide.",
    url: "/inhouse",
  },
};

const COMPANIES = [
  "Vet Gang HQ",
  "Barbers & Blades",
  "Logistics Command",
  "Consulting Ops",
];

export default function InHousePage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="gradient-hero-glow pointer-events-none absolute inset-0 z-0 opacity-50" />
        <Container className="relative z-10 text-center">
          <SectionHeading
            title="In-House Companies"
            subtitle="Runners Circle OS was built inside Vet Gang companies first, pressure-tested in active operations, then deployed for external brands."
          />
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-brand-gray/20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {COMPANIES.map((company) => (
              <Card key={company}>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand-sand mb-3">
                  {company}
                </h3>
                <p className="text-sm leading-relaxed text-brand-sand/70">
                  Operating with AI-first CRM workflows, automated nurturing, and performance reporting linked directly to revenue outcomes.
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="text-center">
          <SectionHeading
            title="Want to Build Inside the Circle?"
            subtitle="Join the next wave of operators deploying battle-tested systems across brands and markets."
          />
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" href="/contact">
              Join the Circle
            </Button>
            <Button variant="secondary" size="lg" href="/pricing">
              See Pricing
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
