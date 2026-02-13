import Link from "next/link";
import { Container } from "@/components/ui/primitives";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "AI Solutions", href: "#ai" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X / Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-brand-black pt-16 pb-8">
      <Container>
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-xl font-heading font-bold tracking-tight text-brand-sand">
              RUNNERS&nbsp;CIRCLE
            </span>
            <p className="mt-4 text-sm leading-relaxed text-brand-sand/60">
              Elite branding, digital infrastructure &amp; AI automation for
              modern businesses. Veteran-owned. Texas-built.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-heading font-semibold uppercase tracking-widest text-brand-sand/40">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-brand-sand/60 hover:text-brand-ember transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-xs font-heading font-semibold uppercase tracking-widest text-brand-sand/40">
              Connect
            </h4>
            <ul className="space-y-2">
              {SOCIALS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-brand-sand/60 hover:text-brand-ember transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="mb-4 text-xs font-heading font-semibold uppercase tracking-widest text-brand-sand/40">
              Headquarters
            </h4>
            <p className="text-sm text-brand-sand/60">Dallas, Texas</p>
            <p className="mt-1 text-sm text-brand-sand/60">
              Serving clients nationwide
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-ember/30 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-brand-ember" />
              <span className="text-xs font-heading font-medium uppercase tracking-wider text-brand-ember">
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-sand/40">
            &copy; {new Date().getFullYear()} Runners Circle Branding &amp;
            Marketing LLC. All rights reserved.
          </p>
          <p className="text-xs text-brand-sand/40">
            100% Veteran-Owned &bull; Texas Registered LLC
          </p>
        </div>
      </Container>
    </footer>
  );
}
