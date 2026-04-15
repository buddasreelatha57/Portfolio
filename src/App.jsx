import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {


  return (
    <div className="bg-slate-900 text-white">

      {/* Cursor Glow */}
      <div className="cursor-glow"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Sections */}
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;