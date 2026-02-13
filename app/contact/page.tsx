import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your next project with Runners Circle. Get in touch for branding, web development, AI automation, and digital strategy.",
  openGraph: {
    title: "Contact Us",
    description:
      "Ready to build? Tell us about your vision and get a custom strategy proposal within 24 hours.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
