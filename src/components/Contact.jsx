import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiYoutube,
  FiTwitter,
} from 'react-icons/fi';

import { contact } from '../data/data';
import { staggerContainer, fadeUp, slideLeft, slideRight, viewportConfig } from '../motion/variants';

/* ==========================================
   Contact — info cards, social icons &
   Google Maps embed
   ========================================== */

const socialIcons = {
  instagram: <FiInstagram />,
  linkedin: <FiLinkedin />,
  github: <FiGithub />,
  youtube: <FiYoutube />,
  twitter: <FiTwitter />,
};

export default function Contact({ showHeading = true }) {
  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-primary-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-32 h-96 w-96 rounded-full bg-accent-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Heading (hidden on Contact page — shown via PageHeader) ---------- */}
        {showHeading && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
          >
            <motion.p variants={fadeUp} className="section-eyebrow mb-3">
              Contact
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              Get in <span className="gradient-text">Touch</span>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary-400 to-accent-400"
            />
            <motion.p variants={fadeUp} className="mt-6 text-lg text-slate-400">
              Questions, ideas, or want to join? We'd love to hear from you.
            </motion.p>
          </motion.div>
        )}

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          {/* ---------- Left — info + socials ---------- */}
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <div className="glass-card p-5 sm:p-8 lg:p-10">
              {/* Department / college */}
              <div className="mb-6 sm:mb-8">
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  {contact.department}
                </h3>
                <p className="mt-1 font-mono text-sm uppercase tracking-[0.2em] text-primary-400">
                  {contact.college}
                </p>
              </div>

              {/* Info rows */}
              <ul className="space-y-3 sm:space-y-5">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-3.5 transition-all duration-300 hover:border-primary-400/40 hover:bg-primary-500/10 sm:gap-4 sm:p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-400/30 bg-primary-500/10 text-lg text-primary-300 transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:text-xl">
                      <FiMail />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                        Email
                      </p>
                      <p className="break-all font-medium text-white">{contact.email}</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-3.5 transition-all duration-300 hover:border-accent-400/40 hover:bg-accent-500/10 sm:gap-4 sm:p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-400/30 bg-accent-500/10 text-lg text-accent-300 transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:text-xl">
                      <FiPhone />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                        Phone
                      </p>
                      <p className="break-words font-medium text-white">{contact.phone}</p>
                    </div>
                  </a>
                </li>

                <li className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-3.5 sm:gap-4 sm:p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-300/30 bg-primary-400/10 text-lg text-primary-300 sm:h-12 sm:w-12 sm:text-xl">
                    <FiMapPin />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      Address
                    </p>
                    {contact.addressLines.map((line) => (
                      <p key={line} className="break-words leading-relaxed text-slate-300">
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              </ul>

              {/* Social icons */}
              <div className="mt-6 sm:mt-8">
                <p className="mb-3 sm:mb-4 font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
                  Follow us
                </p>
                <div className="flex flex-wrap gap-3">
                  {contact.social.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      whileHover={{ scale: 1.12, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-slate-300 backdrop-blur-md transition-colors duration-300 hover:border-primary-400/50 hover:bg-primary-500/20 hover:text-white sm:h-12 sm:w-12 sm:text-xl"
                    >
                      {socialIcons[social.icon]}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ---------- Right — map ---------- */}
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <div className="glass-card h-full min-h-[20rem] overflow-hidden p-1 sm:p-2 sm:min-h-[16rem]">
              <iframe
                title="TechTron Location — Kings Engineering College"
                src={contact.mapEmbedUrl}
                className="h-full min-h-[19rem] w-full rounded-3xl border-0 grayscale-[0.3] invert-[0.92] hue-rotate-180 contrast-[0.9] sm:min-h-[15rem] sm:rounded-[1.4rem]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}