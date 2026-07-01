import ErrorBoundary from "./components/ErrorBoundary";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="bg-[#050816]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}