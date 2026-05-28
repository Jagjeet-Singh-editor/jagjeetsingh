import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Toolkit from "@/components/Toolkit";
import Experience from "@/components/Experience";
import Showreel from "@/components/Showreel";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import NavDots from "@/components/NavDots";

export default function Home() {
  return (
    <>
      <NavDots />
      <main>
        <Hero />
        <Work />
        <About />
        <Toolkit />
        <Experience />
        <Showreel />
        <Awards />
        <Contact />
      </main>
    </>
  );
}
