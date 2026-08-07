import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiUsers, FiAward } from 'react-icons/fi';

import useTypewriter from '../hooks/useTypewriter';
import { hero, brand } from '../data/data';

/* ==========================================
   Hero — full-screen premium landing with
   fixed flexible brand background + typing
   animation + TechTron logo showcase
   ========================================== */

export default function Hero() {
  const typed = useTypewriter(hero.typingWords);

  /* Symmetric letter-size wave — first letter big, second smaller,
     middle even smaller, then grows back big symmetrically
     (big ends → small middle → big ends) */
  const letters = hero.title.split('');
  const n = letters.length;
  const mid = (n - 1) / 2;
  const letterScale = (i) => 0.65 + (Math.abs(i - mid) / mid) * 0.35;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Fixed flexible brand background (replaces theme.png) */}
      <div className="brand-bg" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900" />

      {/* Ambient floating orbs */}
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary-600/25 blur-[120px] animate-blob" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent-500/20 blur-[140px] animate-blob [animation-delay:-4s]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-primary-400/15 blur-[120px] animate-blob [animation-delay:-8s]" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-primary-400/60"
          style={{
            top: `${(i * 11 + 7) % 92}%`,
            left: `${(i * 23 + 13) % 94}%`,
          }}
          animate={{ y: [0, -24, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + (i % 4), repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Horizontal scan line accent */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />

      {/* ---------- Content ---------- */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-28 pb-24 text-center sm:px-6">
        {/* Logo mark — premium TechTron ring */}
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            <span className="absolute inset-0 -z-10 rounded-full bg-primary-500/30 blur-2xl" />
            <span className="absolute inset-0 -z-10 rounded-full bg-primary-400/10 blur-xl" />
            <motion.img
              src={brand.logo}
              alt="TechTron Logo"
              className="logo-ring h-24 w-24 animate-float-y sm:h-28 sm:w-28"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium tracking-wide text-primary-300 backdrop-blur-md sm:px-5 sm:text-sm"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-400" />
          </span>
          <span className="truncate">{brand.department}</span>
        </motion.div>

        {/* Hero title — responsive, no overflow on mobile */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full break-words font-display text-5xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          {letters.map((ch, i) => (
            <span
              key={i}
              className="inline-block"
              style={{ fontSize: `${letterScale(i) * 100}%` }}
            >
              <motion.span
                className="gradient-text inline-block"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: [0, -12, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.6 + i * 0.05 },
                  y: {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.7 + i * 0.15,
                  },
                }}
              >
                {ch}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-4 px-2 font-mono text-xs uppercase tracking-[0.3em] text-slate-400 sm:text-base sm:tracking-[0.4em]"
        >
          {hero.subtitle}
        </motion.p>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-6 flex h-10 items-center justify-center px-2 font-display text-xl font-bold sm:text-4xl"
        >
          <span className="gradient-text">
            {typed}
            <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-primary-400 text-transparent">
              |
            </span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl px-2 text-base leading-relaxed text-slate-400 sm:text-xl"
        >
          {hero.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 px-2 sm:flex-row"
        >
          <Link to="/about" className="btn-primary group w-full sm:w-auto">
            Explore
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link to="/events" className="btn-accent group w-full sm:w-auto">
            <FiUsers className="transition-transform duration-300 group-hover:scale-110" />
            Register
          </Link>
        </motion.div>

        {/* Quick stat chips */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mx-auto mt-14 grid w-full max-w-2xl grid-cols-1 gap-3 px-0 sm:grid-cols-3 sm:gap-4"
        >
          {[
            { icon: <FiCode />, label: '250+', value: 'Members' },
            { icon: <FiAward />, label: '30+', value: 'Events / Year' },
            { icon: <FiUsers />, label: '15+', value: 'Workshops' },
          ].map((stat) => (
            <div
              key={stat.value}
              className="glass-card rounded-2xl px-4 py-4 text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="mx-auto mb-1 flex w-fit items-center gap-2 text-primary-400">
                {stat.icon}
                <span className="font-display text-xl font-bold text-white">{stat.label}</span>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ---------- Scroll indicator ---------- */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-12 w-8 items-start justify-center rounded-full border border-white/20 p-2 backdrop-blur-md transition-colors hover:border-primary-400/60"
        >
          <motion.span
            className="h-3 w-1 rounded-full bg-gradient-to-b from-primary-400 to-accent-400"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
        <span className="mt-2 block text-center font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
          Scroll
        </span>
      </motion.a>
    </section>
  );
}