import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { committeeMembers } from '../data/data';
import { staggerContainer, fadeUp, viewportConfig } from '../motion/variants';

/* ==========================================
   Executive Committee — premium profile cards
   with glassmorphism + hover animations.
   Mobile: 3D auto-slide card deck (cards effect).
   Desktop/tablet: slow smooth auto-slide carousel —
   pause on hover/touch, resumes automatically.
   All cards are uniform width & height.
   ========================================== */

/* Social icon configuration — each entry maps to a member's
   `social` field in src/data/data.js. If a member has no URL
   for a given key, the icon falls back to "#" (disabled). */
const socialLinks = [
  { Icon: FiMail, key: 'mail', label: 'Email' },
  { Icon: FiLinkedin, key: 'linkedin', label: 'LinkedIn' },
  { Icon: FiGithub, key: 'github', label: 'GitHub' },
];

/* Reusable member card — used by both the grid and the mobile slider.
   Mobile-first sizes match the ORIGINAL optimization; the `sm:` overrides
   make desktop / tablet cards more compact. */
function MemberCard({ member }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={(member.id % 4) * 0.1}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-dark-900 shadow-card transition-all duration-500 sm:hover:-translate-y-3 hover:border-primary-400/40 hover:shadow-glow"
    >
      {/* Photo — padding-bottom ratio (works on all mobile browsers,
          unlike aspect-ratio) + explicit fallback background.
          Desktop uses a taller ratio so the enlarged cards
          show more of the member photo. */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-primary-600/30 to-accent-600/30 pb-[125%] sm:pb-[92%]">
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 sm:group-hover:scale-110 sm:group-hover:rotate-1"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Social icons — always visible on touch/mobile,
            hover-reveal on desktop */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 transition-all duration-500 sm:bottom-16 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
          {socialLinks.map(({ Icon, key, label }) => {
            const href = member.social?.[key] || '#';
            return (
              <motion.a
                key={key}
                href={href}
                aria-label={`${member.name}'s ${label}`}
                title={`${member.name} on ${label}`}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:border-primary-400/60 hover:bg-primary-500/30 sm:h-10 sm:w-10"
              >
                <Icon className="text-sm sm:text-base" />
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Info — fixed height so every card is identical.
          Mobile keeps original h-28; desktop override uses h-24
          so the enlarged cards have room for bigger text. */}
      <div className="relative flex h-28 flex-col items-center justify-center p-5 text-center sm:h-24 sm:p-4">
        {/* Glow dot accent */}
        <span className="absolute left-1/2 top-0 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-400 to-transparent transition-all duration-500 group-hover:w-24" />

        <h3 className="font-display text-lg font-bold gradient-text sm:text-xl">
          {member.name}
        </h3>
        <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.3em] text-slate-400 sm:mt-1.5 sm:text-sm sm:tracking-[0.28em]">
          {member.position}
        </p>
      </div>
    </motion.article>
  );
}

export default function ExecutiveCommittee({ showHeading = true }) {
  return (
    <section id="executive-committee" className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -right-40 top-32 h-96 w-96 rounded-full bg-accent-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-32 h-96 w-96 rounded-full bg-primary-600/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Heading (hidden on Committee page — shown via PageHeader) ---------- */}
        {showHeading && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mx-auto mb-10 max-w-3xl text-center sm:mb-16"
          >
            <motion.p variants={fadeUp} className="section-eyebrow mb-3">
              Leadership
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              Executive <span className="gradient-text">Committee</span>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary-400 to-accent-400"
            />
            <motion.p variants={fadeUp} className="mt-6 text-lg text-slate-400">
              The passionate team driving TechTron forward — guiding, organizing, and inspiring
              the community to achieve excellence.
            </motion.p>
          </motion.div>
        )}

        {/* ---------- Desktop / tablet coverflow carousel (hidden on mobile) ---------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="hidden sm:block"
        >
          <div className="ec-desktop-layout">
            <Swiper
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              effect="coverflow"
              slidesPerView={3}
              spaceBetween={10}
              centeredSlides
              grabCursor
              loop
              speed={1400}
              easing="ease-in-out"
              watchSlidesProgress
              loopAdditionalSlides={3}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
                scale: 0.82,
              }}
              className="ec-swiper-desktop"
              autoplay={{
                delay: 3800,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: '.ec-touch-prev',
                nextEl: '.ec-touch-next',
              }}
              breakpoints={{
                1024: { slidesPerView: 3, spaceBetween: 14 },
              }}
            >
              {committeeMembers.map((member) => (
                <SwiperSlide key={member.id} className="h-auto">
                  <MemberCard member={member} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Left / right touch navigation buttons */}
            <button
              type="button"
              aria-label="Previous committee member"
              className="ec-touch-btn ec-touch-prev"
            >
              <FiChevronLeft className="text-2xl" />
            </button>
            <button
              type="button"
              aria-label="Next committee member"
              className="ec-touch-btn ec-touch-next"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          </div>
        </motion.div>

        {/* ---------- Mobile 3D auto-slide deck (hidden on sm+) ---------- */}
        <div className="sm:hidden">
          <Swiper
            modules={[EffectCards, Autoplay, Pagination]}
            effect="cards"
            grabCursor
            centeredSlides
            className="ec-swiper"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
          >
            {committeeMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <MemberCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>

          <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
            Swipe to explore
          </p>
        </div>
      </div>
    </section>
  );
}