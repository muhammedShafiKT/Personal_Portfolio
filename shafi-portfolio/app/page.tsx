import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StackMarquee from "@/components/StackMarquee";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Hero />
      <StackMarquee />
      <About />
      <Capabilities />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
