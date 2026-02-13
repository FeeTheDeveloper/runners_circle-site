import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Runners Circle is a veteran-owned branding & marketing agency in Dallas, Texas. Learn our story, values, and mission.",
  openGraph: {
    title: "About Runners Circle",
    description:
      "Veteran-owned. Texas-built. Learn how Runners Circle builds elite digital ecosystems for modern businesses.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
