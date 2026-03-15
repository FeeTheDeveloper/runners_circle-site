import type { Metadata } from "next";
import { Container, SectionHeading, Card, Button } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Runners Circle OS supports growth across beauty, home services, healthcare, consulting, legal, logistics, and veteran-owned businesses.",
  openGraph: {
    title: "Industries We Serve | Runners Circle OS",
    description:
      "Explore how our AI CRM and marketing systems are deployed across high-performance service sectors.",
    url: "/industries",
  },
};

const INDUSTRIES = [
  "Beauty & Wellness",
  "HVAC & Home Services",
  "Home Healthcare",
  "Consultants & Agencies",
  "Legal/Tax/Financial",
  "Logistics & Transport",
  "Veteran-Owned Businesses",
];

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="gradient-hero-glow pointer-events-none absolute inset-0 z-0 opacity-50" />
        <Container className="relative z-10 text-center">
          <SectionHeading
            title="Industries We Serve"
            subtitle="We deploy vertical-ready systems that meet each market's lead velocity, sales cycle, and customer communication needs."
          />
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-brand-gray/20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <Card key={industry}>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand-sand mb-3">
                  {industry}
                </h3>
                <p className="text-sm leading-relaxed text-brand-sand/70">
                  CRM structure, AI follow-up, and conversion-focused marketing workflows tailored for {industry.toLowerCase()}.
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="text-center">
          <SectionHeading
            title="Find the Right Growth Blueprint"
            subtitle="Request a tailored growth audit or review the platform architecture behind every deployment."
          />
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" href="/contact">
              Get Growth Audit
            </Button>
            <Button variant="secondary" size="lg" href="/os">
              Learn About the OS
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
