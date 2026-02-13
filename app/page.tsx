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
