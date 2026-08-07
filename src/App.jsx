import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import ExecutiveCommittee from './pages/ExecutiveCommittee';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

/* ==========================================
   TechTron — App Entry
   ========================================== */

// Scrolls window to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-dark-900 text-slate-200">
      {/* Fixed brand background — consistent across all pages */}
      <div className="brand-bg" aria-hidden="true" />
      <ScrollToTop />
      <Navbar />

      {/* AnimatePresence enables smooth page transitions between routes */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/executive-committee" element={<ExecutiveCommittee />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback — unknown routes go home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;