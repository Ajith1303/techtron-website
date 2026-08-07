import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';

import { galleryImages } from '../data/data';
import { staggerContainer, fadeUp, scaleIn, viewportConfig } from '../motion/variants';

/* ==========================================
   Gallery — responsive grid with hover zoom
   and a premium lightbox preview
   ========================================== */

export default function Gallery({ showHeading = true }) {
  const [lightbox, setLightbox] = useState(null); // index of open image

  // Move to previous / next image in the lightbox
  const navigate = useCallback(
    (dir) => {
      setLightbox((prev) => (prev + dir + galleryImages.length) % galleryImages.length);
    },
    []
  );

  // Close the lightbox
  const close = useCallback(() => setLightbox(null), []);

  // Keyboard navigation + Escape to close
  useEffect(() => {
    if (lightbox === null) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden'; // lock scroll

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, navigate]);

  return (
    <section id="gallery" className="relative overflow-hidden py-24 lg:py-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-primary-600/12 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-accent-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ---------- Heading (hidden on Gallery page — shown via PageHeader) ---------- */}
        {showHeading && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <motion.p variants={fadeUp} className="section-eyebrow mb-3">
              Moments
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              Our <span className="gradient-text">Gallery</span>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary-400 to-accent-400"
            />
            <motion.p variants={fadeUp} className="mt-6 text-lg text-slate-400">
              A glimpse into the energy, innovation, and community behind every TechTron event.
            </motion.p>
          </motion.div>
        )}

        {/* ---------- Grid ---------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {galleryImages.map((image, i) => (
            <motion.button
              key={image.id}
              variants={fadeUp}
              custom={(i % 3) * 0.1}
              type="button"
              onClick={() => setLightbox(i)}
              className="group relative block w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              aria-label={`Open ${image.title}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Category chip */}
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-500 group-hover:border-primary-400/50 group-hover:bg-primary-500/30">
                {image.category}
              </span>

              {/* Expand icon */}
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100 group-hover:scale-110">
                <FiMaximize2 className="text-sm" />
              </span>

              {/* Title */}
              <div className="absolute inset-x-4 bottom-4 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="font-display text-lg font-bold text-white drop-shadow-lg">
                  {image.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* ---------- Lightbox ---------- */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-900/95 p-4 backdrop-blur-2xl sm:p-8"
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close lightbox"
              onClick={close}
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:rotate-90 hover:border-primary-400/60 hover:bg-primary-500/30 sm:right-8 sm:top-8"
            >
              <FiX className="text-xl" />
            </button>

            {/* Prev / Next */}
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
              className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:border-primary-400/60 hover:bg-primary-500/30 sm:left-8 sm:h-14 sm:w-14"
            >
              <FiChevronLeft className="text-2xl" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
              className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:border-primary-400/60 hover:bg-primary-500/30 sm:right-8 sm:h-14 sm:w-14"
            >
              <FiChevronRight className="text-2xl" />
            </button>

            {/* Image */}
            <motion.figure
              key={lightbox}
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl"
            >
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-card">
                <img
                  src={galleryImages[lightbox].src}
                  alt={galleryImages[lightbox].title}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>
              <figcaption className="mt-5 flex flex-col items-center justify-between gap-2 sm:flex-row">
                <div className="text-center sm:text-left">
                  <h3 className="font-display text-xl font-bold text-white">
                    {galleryImages[lightbox].title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-400">
                    {galleryImages[lightbox].category}
                  </p>
                </div>
                <span className="font-mono text-sm text-slate-500">
                  {lightbox + 1} / {galleryImages.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}