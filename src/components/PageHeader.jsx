import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportConfig } from '../motion/variants';

/* ==========================================
   PageHeader — consistent intro banner for
   inner pages with animated heading
   ========================================== */

export default function PageHeader({ eyebrow, title, highlight, description }) {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 lg:pb-28 lg:pt-44">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
      <div className="pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-primary-600/20 blur-[120px] animate-blob" />
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-accent-500/15 blur-[120px] animate-blob [animation-delay:-5s]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="relative mx-auto max-w-4xl px-6 text-center lg:px-8"
      >
        <motion.p variants={fadeUp} className="section-eyebrow mb-4">
          {eyebrow}
        </motion.p>
        <motion.h1 variants={fadeUp} className="mx-auto w-full break-words font-display text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          {title} {highlight && <span className="gradient-text">{highlight}</span>}
        </motion.h1>
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-7 h-1 w-28 rounded-full bg-gradient-to-r from-primary-400 to-accent-400"
        />
        {description && (
          <motion.p variants={fadeUp} className="mt-7 text-lg leading-relaxed text-slate-400">
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}