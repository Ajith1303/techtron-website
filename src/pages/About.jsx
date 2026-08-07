import { motion } from 'framer-motion';

import PageHeader from '../components/PageHeader';
import AboutSection from '../components/About';
import { fadeUp, staggerContainer, viewportConfig } from '../motion/variants';
import { about } from '../data/data';

/* ==========================================
   About page — vision, mission & objectives
   ========================================== */

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About"
        highlight="TechTron"
        description={about.intro}
      />

      {/* Reuse the home About section for vision/mission/objectives */}
      <AboutSection />

      {/* ---------- Membership CTA strip ---------- */}
      <section className="relative overflow-hidden pb-24 lg:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary-600/15 via-white/[0.04] to-accent-500/15 p-8 text-center backdrop-blur-xl sm:p-14"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary-400 to-accent-400"
          />
          <motion.h2 variants={fadeUp} className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Ready to be part of <span className="gradient-text">something bigger?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg text-slate-400">
            Join TechTron today and unlock a world of opportunities — workshops, mentorship,
            hackathons, and a community that grows together.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <a href="#" className="btn-primary">
              Register Now
            </a>
            <a href="/events" className="btn-outline">
              Explore Events
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}