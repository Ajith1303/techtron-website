import { motion } from 'framer-motion';
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiArrowRight,
  FiCheckCircle,
  FiStar,
} from 'react-icons/fi';

import { events } from '../data/data';
import useCountdown from '../hooks/useCountdown';
import { staggerContainer, fadeUp, viewportConfig } from '../motion/variants';

/* ==========================================
   Events — premium event card with countdown
   timer + register CTA
   ========================================== */

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export default function Events() {
  const event = events[0]; // TechTron Inauguration
  const countdown = useCountdown(event.date);

  const timerBlocks = [
    { label: 'Days', value: countdown.days },
    { label: 'Hours', value: countdown.hours },
    { label: 'Minutes', value: countdown.minutes },
    { label: 'Seconds', value: countdown.seconds },
  ];

  return (
    <section id="events" className="relative overflow-hidden py-24 lg:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-primary-600/10 blur-[150px]" />

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
            {countdown.isPast ? 'Live' : 'Upcoming'}
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            What's <span className="gradient-text">Next?</span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary-400 to-accent-400"
          />
        </motion.div>

        {/* ---------- Event card ---------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto max-w-5xl"
        >
          <motion.article
            variants={fadeUp}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-card"
          >
            {/* Top gradient banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-primary-600/30 via-primary-500/20 to-accent-500/30 px-6 py-8 sm:px-12 sm:py-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-400/20 blur-3xl animate-blob" />
              <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-primary-400/20 blur-3xl animate-blob [animation-delay:-4s]" />

              <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:flex-wrap sm:items-center">
                <div className="min-w-0">
                  <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-accent-400/30 bg-accent-500/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent-300">
                    <FiStar className="shrink-0" />
                    {event.type}
                  </span>
                  <h3 className="mt-4 break-words font-display text-2xl font-extrabold text-white sm:text-4xl">
                    {event.name}
                  </h3>
                </div>

                {/* Date badge */}
                <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md sm:h-24 sm:w-24">
                  <span className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                    {new Date(event.date).getDate()}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    {new Date(event.date).toLocaleString('en-IN', { month: 'short' })}
                  </span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="grid gap-8 p-6 sm:p-12 lg:grid-cols-[1.2fr_1fr]">
              {/* Left — details */}
              <div>
                <div className="mb-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
                  <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3">
                    <FiCalendar className="shrink-0 text-xl text-primary-400" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                        Date
                      </p>
                      <p className="text-sm font-medium text-white">
                        {formatDate(event.date)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3">
                    <FiClock className="shrink-0 text-xl text-accent-400" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                        Time
                      </p>
                      <p className="text-sm font-medium text-white">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 sm:col-span-3 lg:col-span-1">
                    <FiMapPin className="shrink-0 text-xl text-primary-300" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                        Venue
                      </p>
                      <p className="text-sm font-medium text-white">{event.venue}</p>
                    </div>
                  </div>
                </div>

                <p className="leading-relaxed text-slate-400">{event.description}</p>

                {/* Highlights */}
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {event.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <FiCheckCircle className="shrink-0 text-primary-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — countdown + register / ongoing status */}
              <div className="flex flex-col rounded-3xl border border-white/10 bg-dark-800/60 p-6 sm:p-8">
                {countdown.isPast ? (
                  /* ---------- Event is happening now ---------- */
                  <div className="flex flex-1 flex-col items-center justify-center text-center">
                    <div className="relative mb-5 flex h-16 w-16 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" />
                      <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/15">
                        <FiCheckCircle className="text-3xl text-emerald-300" />
                      </span>
                    </div>

                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-300">
                      Event is ongoing
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      The TechTron Inauguration is happening right now at the Main Auditorium.
                      <br />
                      Be part of the excitement!
                    </p>

                    <div className="mt-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                      <span className="font-mono text-xs uppercase tracking-widest text-slate-300">
                        Live Now
                      </span>
                    </div>
                  </div>
                ) : (
                  /* ---------- Countdown + register ---------- */
                  <>
                    <p className="mb-5 text-center font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
                      Event starts in
                    </p>

                    <div className="grid grid-cols-4 gap-2 sm:gap-3">
                      {timerBlocks.map((block) => (
                        <div
                          key={block.label}
                          className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] py-4 backdrop-blur-md"
                        >
                          <span className="font-display text-2xl font-extrabold tabular-nums text-white sm:text-3xl">
                            {String(block.value).padStart(2, '0')}
                          </span>
                          <span className="mt-1 text-center font-mono text-[9px] uppercase tracking-widest text-slate-500 sm:text-[10px]">
                            {block.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={event.registerLink}
                      className="btn-primary group mt-8 w-full !py-4 text-base"
                    >
                      Register Now
                      <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <p className="mt-4 text-center text-xs text-slate-500">
                      Seats are limited — reserve yours today.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}