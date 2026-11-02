import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Marquee from "@/components/Marquee";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Marquee />
      <Industries />
      <Contact />
    </>
  );
}
