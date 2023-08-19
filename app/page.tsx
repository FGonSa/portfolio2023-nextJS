
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Empresas from "@/components/Empresas";

export default function Home() {
  
  return (
    <main>
          <Hero />
          <About />
          <Empresas />
          <Projects />
          <Skills />
          {/* <Contact /> */}
    </main>
  )
}
