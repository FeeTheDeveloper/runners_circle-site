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
  title: "Runners Circle Branding & Marketing | Veteran-Owned Digital Agency",
  description:
    "Veteran-owned branding & marketing agency in Dallas, Texas. We build elite digital ecosystems — brand strategy, web development, AI automation, and growth systems.",
  openGraph: {
    title: "Runners Circle Branding & Marketing",
    description:
      "Veteran-owned. Texas-built. We build elite digital ecosystems for businesses ready to lead their market.",
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
