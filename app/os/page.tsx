import type { Metadata } from "next";
import { Container, SectionHeading, Card, Button } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Runners Circle OS",
  description:
    "Runners Circle OS is the AI CRM and marketing operating system built to capture leads, automate follow-up, and scale revenue.",
  openGraph: {
    title: "Runners Circle OS | AI CRM & Marketing Operating System",
    description:
      "Deploy CRM infrastructure, AI automation, branded content systems, and performance dashboards in one unified operating system.",
    url: "/os",
  },
};

const MODULES = [
  {
    title: "CRM Infrastructure",
    features: [
      "Pipeline architecture and lifecycle stages",
      "Lead source tracking and attribution setup",
      "Custom fields, tags, and segment logic",
      "Unified inbox and deal management workflows",
    ],
  },
  {
    title: "AI Marketing Automation",
    features: [
      "Instant lead response and nurture sequences",
      "Multi-channel follow-up via SMS, email, and voice",
      "Campaign triggers based on customer behavior",
      "Reactivation and win-back automations",
    ],
  },
  {
    title: "Brand & Content Command",
    features: [
      "Offer-based campaign planning and deployment",
      "Branded messaging templates and playbooks",
      "Content operations tied to conversion goals",
      "Centralized publishing and audience workflows",
    ],
  },
  {
    title: "Performance Dashboard",
    features: [
      "Live reporting on leads, appointments, and revenue",
      "Channel-level ROI and campaign visibility",
      "Sales team and pipeline performance metrics",
      "Executive-level snapshots for faster decisions",
    ],
  },
];

export default function OSPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="gradient-hero-glow pointer-events-none absolute inset-0 z-0 opacity-50" />
        <Container className="relative z-10 text-center">
          <SectionHeading
            title="Runners Circle OS"
            subtitle="The AI CRM & marketing operating system that captures demand, automates follow-up, and scales revenue with disciplined execution."
          />
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-brand-gray/20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {MODULES.map((module) => (
              <Card key={module.title}>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-brand-sand mb-4">
                  {module.title}
                </h3>
                <ul className="space-y-3">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-brand-sand/75 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-ember" />
                      <span>{feature}</span>
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
            title="Ready to Install Your Operating System?"
            subtitle="Launch with the same infrastructure proven across in-house brands and nationwide growth campaigns."
          />
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" href="/contact">
              Launch Your AI CRM
            </Button>
            <Button variant="secondary" size="lg" href="/industries">
              Explore Use Cases
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
