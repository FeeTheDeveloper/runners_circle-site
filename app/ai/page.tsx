import type { Metadata } from "next";
import AIContent from "./AIContent";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Custom AI assistants, workflow automation, intelligent analytics, and public AI deployment — purpose-built for your business.",
  openGraph: {
    title: "AI Solutions",
    description:
      "Deploy intelligent systems that work 24/7. Custom AI assistants, automation, and analytics built by Runners Circle.",
    url: "/ai",
  },
};

export default function AIPage() {
  return <AIContent />;
}
