import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiZap } from 'react-icons/fi';

import { navLinks, brand } from '../data/data';

/* ==========================================
   Navbar — sticky glass navigation with
   animated mobile hamburger menu
   ========================================== */

const desktopLinkClass = ({ isActive }) =>
  `relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
    isActive
      ? 'text-white'
      : 'text-slate-400 hover:text-white'
  }`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Add glass background after scrolling a bit
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-dark-900/80 backdrop-blur-xl shadow-glass'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* ---------- Logo ---------- */}
        <Link to="/" className="group flex min-w-0 items-center gap-3" onClick={() => setMobileOpen(false)}>
          <motion.div
            whileHover={{ rotate: 8, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="logo-ring relative shrink-0"
          >
            <img
              src={brand.logo}
              alt={`${brand.name} Logo`}
              className="h-11 w-11 drop-shadow-glow"
            />
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary-500/30 blur-lg transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
          </motion.div>
          <div className="hidden min-w-0 flex-col leading-tight xs:flex">
            <span className="truncate font-display text-lg font-bold tracking-wide text-white">
              {brand.name}
            </span>
            <span className="truncate font-mono text-[10px] uppercase tracking-[0.3em] text-primary-400">
              IT Association
            </span>
          </div>
        </Link>

        {/* ---------- Desktop nav ---------- */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={desktopLinkClass} end={link.path === '/'}>
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary-400 to-accent-400"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ---------- Desktop CTA ---------- */}
        <Link to="/events" className="btn-primary hidden !px-5 !py-2.5 text-sm lg:inline-flex">
          <FiZap className="text-base" />
          Register
        </Link>

        {/* ---------- Mobile hamburger ---------- */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-md transition-colors hover:border-primary-400/40 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-xl"
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* ---------- Mobile menu panel ---------- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full border-b border-white/10 bg-dark-900/95 backdrop-blur-2xl lg:hidden"
          >
            <ul className="max-h-[calc(100vh-6rem)] overflow-y-auto px-6 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.35 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `mb-2 block rounded-2xl px-5 py-4 text-base font-medium transition-all duration-300 ${
                        isActive
                          ? 'border border-primary-400/30 bg-primary-500/10 text-white shadow-glow'
                          : 'border border-transparent text-slate-300 hover:bg-white/5 hover:text-white'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * navLinks.length, duration: 0.35 }}
                className="mt-4"
              >
                <Link
                  to="/events"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full"
                >
                  <FiZap className="text-base" />
                  Register Now
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}