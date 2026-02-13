"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Button } from "@/components/ui/primitives";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "AI", href: "#ai" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-header fixed top-0 left-0 z-50 w-full">
      <Container className="flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo / Wordmark */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-heading font-bold tracking-tight text-brand-sand group-hover:text-brand-ember transition-colors duration-300">
            RUNNERS&nbsp;CIRCLE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative px-3 py-2 text-sm font-heading font-medium uppercase tracking-wide text-brand-sand/70 hover:text-brand-sand transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-brand-ember after:transition-all after:duration-300 hover:after:w-3/4"
            >
              {label}
            </Link>
          ))}
          <Button size="sm" className="ml-4">
            Start Your Build
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-brand-sand"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </Container>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col items-center gap-2 pb-6 bg-brand-black/90 backdrop-blur-xl">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-heading font-medium uppercase tracking-wide text-brand-sand/70 hover:text-brand-ember transition-colors"
            >
              {label}
            </Link>
          ))}
          <Button size="sm" className="mt-2">
            Start Your Build
          </Button>
        </nav>
      </div>
    </header>
  );
}
