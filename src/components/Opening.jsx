import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, MapPin, PartyPopper } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/SectionHeading'
import { opening, contact } from '../data/site'

const UNITS = [
  ['days', 'Days'],
  ['hours', 'Hours'],
  ['minutes', 'Minutes'],
  ['seconds', 'Seconds'],
]

function remaining(target) {
  const ms = target - Date.now()
  if (ms <= 0) return null
  const s = Math.floor(ms / 1000)
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  }
}

export function Opening() {
  const target = new Date(opening.date).getTime()
  const [left, setLeft] = useState(() => remaining(target))
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
    const id = setInterval(() => setLeft(remaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const isOpen = ready && !left

  return (
    <section className="relative overflow-hidden bg-forest-950 py-14 sm:py-24 lg:py-28">
      {/* Confetti-ish gold sparks */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }, (_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold"
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.6, 1.4, 0.6] }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              delay: i * 0.28,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="glass grain overflow-hidden rounded-3xl px-5 py-9 text-center sm:px-14 sm:py-16">
            <Eyebrow className="justify-center">
              <PartyPopper className="h-3.5 w-3.5" />
              {isOpen ? 'Now open' : opening.title}
            </Eyebrow>

            <h2 className="mt-4 text-[1.9rem] font-light leading-tight tracking-tight text-balance sm:mt-6 sm:text-5xl">
              {isOpen ? (
                <>
                  The doors are <span className="foil">open</span>
                </>
              ) : (
                <>
                  The countdown to <span className="foil">Taliparamba</span>
                </>
              )}
            </h2>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream-dim/80">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-gold" />
                {opening.dateDisplay}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                {opening.place}
              </span>
            </div>

            {/* Countdown */}
            {!isOpen && (
              <div className="mt-7 grid grid-cols-4 gap-2 sm:mt-11 sm:gap-4">
                {UNITS.map(([key, label]) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-cream/10 bg-forest-900/70 px-1.5 py-4 sm:px-4 sm:py-7"
                  >
                    <span className="block font-display text-3xl font-light tabular-nums text-gold sm:text-5xl">
                      {String(left?.[key] ?? 0).padStart(2, '0')}
                    </span>
                    <span className="mt-1.5 block text-[0.65rem] uppercase tracking-[0.18em] text-cream-mute sm:text-xs">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 sm:mt-11">
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-forest-950 transition-transform duration-300 hover:scale-105"
              >
                {isOpen ? 'Call the store' : 'Pre-book your cake'}
              </a>
              <p className="mt-4 text-xs text-cream-mute">
                {contact.phoneDisplay} · {contact.deliveryNote}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
