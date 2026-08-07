import Hero from '../components/Hero';
import About from '../components/About';
import ExecutiveCommittee from '../components/ExecutiveCommittee';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

/* ==========================================
   Home — the full one-page experience
   ========================================== */

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExecutiveCommittee />
      <Events />
      <Gallery />
      <Contact />
    </>
  );
}
