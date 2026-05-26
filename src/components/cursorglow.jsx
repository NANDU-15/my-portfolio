import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="bg-black text-white overflow-x-hidden relative">
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Contact />

      <Footer />
    </main>
  );
}

export default App;gi