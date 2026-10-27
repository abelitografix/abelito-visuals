import { useCallback, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Work from './components/Work.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // When someone clicks "Start a similar project" or "Ask about this",
  // we remember the project type so the contact form can pre-select it.
  const [preset, setPreset] = useState({ type: '', n: 0 });

  const startProject = useCallback((type = '') => {
    setPreset((p) => ({ type, n: p.n + 1 }));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('contact')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }, []);

  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />

<div className="ticker-section">
  <Marquee />
</div>

<Work onStartProject={startProject} />
        <About />
        <Services onStartProject={startProject} />
        <Contact preset={preset} />
      </main>
      <Footer />
    </>
  );
}
