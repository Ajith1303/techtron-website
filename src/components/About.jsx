import { motion } from 'framer-motion';
import { FiEye, FiTarget, FiCode, FiZap, FiUsers, FiAward } from 'react-icons/fi';

import { about } from '../data/data';
import { staggerContainer, fadeUp, viewportConfig } from '../motion/variants';

/* ==========================================
   About — intro, vision, mission & objectives
   in premium animated glass cards
   ========================================== */

const objectiveIcons = {
  code: <FiCode />,
  rocket: <FiZap />,
  users: <FiUsers />,
  trophy: <FiAward />,
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ---------- Heading ---------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.p variants={fadeUp} className="section-eyebrow mb-3">
            About Us
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Who are <span className="gradient-text">we?</span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary-400 to-accent-400"
          />
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-slate-400">
            {about.intro}
          </motion.p>
        </motion.div>

        {/* ---------- Vision & Mission ---------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-8 md:grid-cols-2"
        >
          {/* Vision */}
          <motion.article
            variants={fadeUp}
            className="glass-card glass-card-hover group relative flex flex-col items-center justify-center overflow-hidden p-6 text-center lg:p-10"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-400/30 bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-2xl text-primary-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <FiEye />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Our Vision</h3>
            <p className="mt-4 leading-relaxed text-slate-400">{about.vision}</p>
          </motion.article>

          {/* Mission */}
          <motion.article
            variants={fadeUp}
            className="glass-card glass-card-hover group overflow-hidden p-6 lg:p-10"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-400/30 bg-gradient-to-br from-accent-500/20 to-primary-500/20 text-2xl text-accent-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <FiTarget />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Our Mission</h3>
            <ul className="mt-4 space-y-3">
              {about.missionPoints.map((point, i) => (
                <li key={i} className="flex gap-3 text-justify leading-relaxed text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-primary-400 to-accent-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </motion.div>

        {/* ---------- Objectives ---------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-8"
        >
          <motion.h3 variants={fadeUp} className="mb-8 text-center font-display text-2xl font-bold text-white">
            Our <span className="gradient-text">Objectives</span>
          </motion.h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.objectives.map((obj, i) => (
              <motion.article
                key={obj.title}
                variants={fadeUp}
                custom={i * 0.1}
                className="glass-card glass-card-hover group relative overflow-hidden p-6 text-center"
              >
                {/* Corner gradient accent */}
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-primary-500/10 to-accent-500/10 text-2xl text-primary-300 transition-all duration-500 group-hover:scale-110 group-hover:border-primary-400/40 group-hover:text-white">
                  {objectiveIcons[obj.icon] || <FiCode />}
                </div>
                <h4 className="font-display text-lg font-semibold text-white">{obj.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{obj.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}