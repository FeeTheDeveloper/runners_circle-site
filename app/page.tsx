import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import FeaturedAI from "@/components/sections/FeaturedAI";
import Process from "@/components/sections/Process";
import VeteranAuthority from "@/components/sections/VeteranAuthority";
import Portfolio from "@/components/sections/Portfolio";
import FinalCTA from "@/components/sections/FinalCTA";
import SplashIntro from "@/components/SplashIntro";

export const metadata: Metadata = {
  title: "AI CRM & Marketing Systems | Runners Circle OS",
  description:
    "We install AI CRM and marketing systems that capture leads, automate follow-up, and grow revenue for growth-focused brands.",
  openGraph: {
    title: "Runners Circle OS | AI CRM & Marketing Systems",
    description:
      "Built for Vet Gang companies first and deployed nationwide for brands that need CRM and marketing systems that perform.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <SplashIntro />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <FeaturedAI />
      <Process />
      <VeteranAuthority />
      <Portfolio />
      <FinalCTA />
    </>
  );
}
