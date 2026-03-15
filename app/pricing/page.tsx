import type { Metadata } from "next";
import { Container, SectionHeading, Card, Button } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Pricing Packages",
  description:
    "Choose from Starter, Growth, Authority, and Multi-Brand packages to deploy Runners Circle OS at the right scale for your business.",
  openGraph: {
    title: "Pricing Packages | Runners Circle OS",
    description:
      "Transparent platform packages for brands implementing AI CRM infrastructure and automated marketing systems.",
    url: "/pricing",
  },
};

const PACKAGES = [
  {
    name: "Starter",
    tagline: "Launch your first AI CRM engine.",
    includes: [
      "CRM setup with core pipeline stages",
      "Basic AI follow-up sequences",
      "Lead capture and routing workflows",
      "Monthly optimization review",
    ],
  },
  {
    name: "Growth",
    tagline: "Scale lead flow and conversion velocity.",
    includes: [
      "Advanced automation and nurture campaigns",
      "Multi-channel follow-up orchestration",
      "Reporting dashboard and KPI tracking",
      "Bi-weekly strategy sessions",
    ],
  },
  {
    name: "Authority",
    tagline: "Own your market with full-system deployment.",
    includes: [
      "AI concierge and appointment workflows",
      "Brand/content command center",
      "Sales pipeline optimization",
      "Weekly executive growth calls",
    ],
  },
  {
    name: "Multi-Brand",
    tagline: "Operate multiple companies from one command layer.",
    includes: [
      "Cross-brand CRM architecture",
      "Centralized campaign operations",
      "Role-based dashboards per business unit",
      "Dedicated systems partner support",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="gradient-hero-glow pointer-events-none absolute inset-0 z-0 opacity-50" />
        <Container className="relative z-10 text-center">
          <SectionHeading
            title="Pricing Packages"
            subtitle="Flexible system packages built for operators at every stage, from first implementation to multi-brand expansion."
          />
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-brand-gray/20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {PACKAGES.map((pkg) => (
              <Card key={pkg.name} className="h-full">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand-sand mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-brand-ember mb-5">{pkg.tagline}</p>
                <ul className="space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-brand-sand/75 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-ember" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="text-center">
          <SectionHeading
            title="Pick the Right Package"
            subtitle="Book a consultation to map your current operation to the right package and growth timeline."
          />
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" href="/contact">
              Book Consultation
            </Button>
            <Button variant="secondary" size="lg" href="/os">
              Explore the OS
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
