import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ProjectExperience from "@/components/ProjectExperience";
import Skills from "@/components/Skills";
import Github from "@/components/Github";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <ProjectExperience />
        <Skills />
        <Github />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
