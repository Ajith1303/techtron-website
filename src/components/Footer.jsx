import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiHeart, FiInstagram, FiLinkedin, FiGithub, FiYoutube, FiTwitter } from 'react-icons/fi';

import { brand, footer as footerData, contact } from '../data/data';

/* ==========================================
   Footer — logo, quick links, contact info,
   social icons & copyright
   ========================================== */

const socialIcons = {
  instagram: <FiInstagram />,
  linkedin: <FiLinkedin />,
  github: <FiGithub />,
  youtube: <FiYoutube />,
  twitter: <FiTwitter />,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-dark-800/40">
      {/* Top glow divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* ---------- Brand ---------- */}
          <div className="lg:col-span-1">
            <Link to="/" className="group flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="logo-ring shrink-0"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  className="h-12 w-12 drop-shadow-glow"
                />
              </motion.div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-xl font-bold text-white">{brand.name}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary-400">
                  IT Association
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {footerData.description}
            </p>
            <p className="mt-4 font-mono text-xs tracking-[0.25em] text-primary-400">
              {brand.tagline}
            </p>
          </div>

          {/* ---------- Quick Links ---------- */}
          <div>
            <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-primary-300"
                  >
                    <span className="h-px w-4 bg-primary-500/50 transition-all duration-300 group-hover:w-6 group-hover:bg-primary-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Contact ---------- */}
          <div>
            <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FiMail className="mt-0.5 shrink-0 text-primary-400" />
                <a href={`mailto:${contact.email}`} className="break-all text-slate-400 transition-colors hover:text-primary-300">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="mt-0.5 shrink-0 text-primary-400" />
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-slate-400 transition-colors hover:text-primary-300">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-primary-400" />
                <span className="text-slate-400">{brand.address}</span>
              </li>
            </ul>
          </div>

          {/* ---------- Socials ---------- */}
          <div>
            <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
              Connect With Us
            </h4>
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
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-slate-300 backdrop-blur-md transition-colors duration-300 hover:border-primary-400/50 hover:bg-primary-500/20 hover:text-white"
                >
                  {socialIcons[social.icon]}
                </motion.a>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-slate-500">
              {contact.department}
              <br />
              {contact.college}
            </p>
          </div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-center text-sm text-slate-500">
            © {year} <span className="font-semibold text-slate-300">{brand.name}</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-slate-500">
            Made with <FiHeart className="text-accent-400" /> by the {brand.name} Team
          </p>
        </div>
      </div>
    </footer>
  );
}