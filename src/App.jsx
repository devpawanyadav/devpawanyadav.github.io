import './styles/global.css';
import CustomCursor from './components/CustomCursor';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <CustomCursor />
      <ParticleCanvas />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  );
}
