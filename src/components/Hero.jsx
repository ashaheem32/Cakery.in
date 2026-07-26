import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, MapPin, Truck, CalendarDays } from 'lucide-react'
import { SpinBadge } from './ui/SpinBadge'
import { contact, brand, signature, opening, locations } from '../data/site'

const hero = signature.find((p) => p.slug === 'london-cake') ?? signature[0]
const inset = signature.find((p) => p.slug === 'milk-cake') ?? signature[1]

const rise = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] },
  }),
}

/**
 * Rendered twice: inside the copy column on desktop, and as a third grid child
 * on mobile so it sits *below* the photograph rather than pushing it off-screen.
 * Only one is ever displayed.
 */
function FactRail({ facts, className = '' }) {
  return (
    <ul
      className={`grid gap-px overflow-hidden rounded-xl border border-cream/10 bg-cream/10 sm:grid-cols-3 ${className}`}
    >
      {facts.map((f) => (
        <li
          key={f.label}
          className="flex items-center gap-2.5 bg-forest-900/80 px-4 py-3 text-xs text-cream-dim/85"
        >
          <f.icon className="h-4 w-4 shrink-0 text-gold" />
          {f.label}
        </li>
      ))}
    </ul>
  )
}

/** Arch-topped image frame — the recurring motif across the site. */
function Arch({ src, alt, className = '', delay = 0, y }) {
  return (
    <motion.figure
      style={{ y }}
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      transition={{ delay, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      // No `position` utility here — Tailwind emits `relative` after `absolute`,
      // so a base `relative` would silently beat an `absolute` passed by the caller.
      className={`overflow-hidden rounded-t-full ring-1 ring-gold/25 ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.18 }}
        animate={{ scale: 1 }}
        transition={{ delay, duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full object-cover"
      />
    </motion.figure>
  )
}

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Layers drift at different rates as you leave the hero
  const yMain = useTransform(scrollYProgress, [0, 1], ['0%', '-14%'])
  const yInset = useTransform(scrollYProgress, [0, 1], ['0%', '-38%'])
  const ySeal = useTransform(scrollYProgress, [0, 1], ['0%', '-70%'])
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '38%'])
  const copyFade = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  const facts = [
    { icon: Truck, label: 'Free delivery · 20 km' },
    { icon: MapPin, label: `${locations.length} counters · Kannur` },
    { icon: CalendarDays, label: `Opens ${opening.dateDisplay.split(' · ')[0]}` },
  ]

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-14 lg:pt-24 lg:pb-0"
    >
      {/* Ambient wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(70% 55% at 72% 28%, #10513b 0%, transparent 62%), radial-gradient(60% 60% at 10% 85%, #0b3b2b 0%, transparent 65%), linear-gradient(180deg, #04170f 0%, #07281d 52%, #04170f 100%)',
        }}
      />
      {/* Hairline grid, faint */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.055]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #f4efe4 1px, transparent 1px), linear-gradient(to bottom, #f4efe4 1px, transparent 1px)',
          backgroundSize: '90px 90px',
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-9 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        {/* ── Copy ─────────────────────────────────────────────── */}
        <motion.div style={{ y: copyY, opacity: copyFade }} className="relative z-10 max-w-xl">
          <motion.div variants={rise} initial="hidden" animate="show" custom={0}>
            <span className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold">
              <span aria-hidden className="h-px w-10 bg-gold/50" />
              Est. Kannur · Kerala
            </span>
          </motion.div>

          <motion.h1
            variants={rise}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-[3rem] font-light leading-[0.94] tracking-tight text-balance sm:text-6xl lg:text-[4.3rem] xl:text-[5rem]"
          >
            Baked this
            <br />
            morning.
            <br />
            <span className="foil italic">Gone by noon.</span>
          </motion.h1>

          <motion.p
            variants={rise}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-md text-base leading-relaxed text-cream-dim/85 sm:text-lg"
          >
            {brand.tagline} — handcrafted in small batches and delivered to your
            door. Nothing sits overnight, because nothing has to.
          </motion.p>

          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full overflow-hidden rounded-full bg-gold px-8 py-3.5 text-center text-sm font-semibold text-forest-950 sm:w-auto"
            >
              <span className="relative z-10">Order on WhatsApp</span>
              <span className="absolute inset-0 -translate-x-full bg-gold-light transition-transform duration-500 ease-silk group-hover:translate-x-0" />
            </a>
            <a
              href="#signature"
              className="block w-full rounded-full border border-cream/25 px-8 py-3.5 text-center text-sm font-semibold text-cream transition-colors duration-300 hover:border-gold hover:text-gold sm:w-auto"
            >
              See the menu
            </a>
          </motion.div>

          {/* Desktop position: under the copy */}
          <motion.div variants={rise} initial="hidden" animate="show" custom={4}>
            <FactRail facts={facts} className="mt-9 hidden lg:grid" />
          </motion.div>
        </motion.div>

        {/* ── Arch composition ─────────────────────────────────── */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Bottom padding only exists to make room for the inset arch, which
              is desktop-only — so no padding is spent on mobile. */}
          <div className="relative lg:pb-16 lg:pl-16">
            {/* Height is driven off the viewport so the hero never overflows */}
            <div className="relative">
              <Arch
                src={hero.image}
                alt={`${hero.name} — ${hero.desc}`}
                delay={0.45}
                y={yMain}
                className="aspect-[3/4] w-full lg:aspect-auto lg:h-[min(60svh,560px)]"
              />

              {/* Caption plate riding the bottom-right of the arch */}
              <motion.div
                variants={rise}
                initial="hidden"
                animate="show"
                custom={5}
                className="absolute bottom-4 right-4 z-20 rounded-xl border border-cream/12 bg-forest-950/85 px-5 py-3 backdrop-blur"
              >
                <p className="font-script text-2xl leading-none text-gold">{hero.name}</p>
                <p className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-cream-mute">
                  {hero.kicker}
                </p>
              </motion.div>
            </div>

            {/* Smaller offset arch, faster parallax */}
            <Arch
              src={inset.image}
              alt={`${inset.name} — ${inset.desc}`}
              delay={0.75}
              y={yInset}
              className="absolute bottom-0 left-0 z-10 hidden aspect-[3/4] w-[34%] shadow-2xl shadow-forest-950/70 lg:block"
            />

            {/* Rotating seal, straddling the arch shoulder */}
            <motion.div style={{ y: ySeal }} className="absolute left-0 top-12 z-20 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <SpinBadge className="h-28 w-28" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Mobile position: below the photograph, so it doesn't shove the
            hero image off the first screen. Hidden once the two-column
            layout kicks in and the in-copy one takes over. */}
        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={5}
          className="lg:hidden"
        >
          <FactRail facts={facts} />
        </motion.div>
      </div>

      <motion.a
        href="#signature"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-cream-mute transition-colors hover:text-gold lg:block"
        aria-label="Scroll to menu"
      >
        <motion.span
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
