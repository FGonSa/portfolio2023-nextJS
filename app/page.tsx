
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Empresas from "@/components/Empresas";
import Footer from "../components/Footer";
import FAB from "../components/FAB";

export default function Home() {
  
  return (
    <main>
          <Hero />
          <About />
          <Empresas />
          <Projects />
          <Skills />
          {/* <Contact /> */}
          <FAB />
        <Footer />
    </main>
  )
}
