import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand architecture, web development, AI automation, marketing systems, and digital infrastructure — full-spectrum services for modern businesses.",
  openGraph: {
    title: "Our Services",
    description:
      "From brand strategy to AI automation — explore the full-spectrum digital services Runners Circle delivers.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
