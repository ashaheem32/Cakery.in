import { motion } from 'framer-motion'
import { Cake, Sparkles, Croissant, Square, CupSoda, Sandwich } from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { categories } from '../data/site'

const ICONS = {
  cake: Cake,
  sparkles: Sparkles,
  croissant: Croissant,
  square: Square,
  cup: CupSoda,
  sandwich: Sandwich,
}

export function Categories() {
  return (
    <section className="relative bg-forest-950 py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we bake"
          title="Six counters, one kitchen"
          sub="Everything is made in-house, in small batches, the day it is sold."
          align="center"
        />

        {/* Two-up tile grid on mobile — six full-width cards was ~1800px of scroll */}
        <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-3">
          {categories.map((c, i) => {
            const Icon = ICONS[c.icon] ?? Cake
            return (
              <Reveal key={c.slug} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-cream/10 bg-forest-900/60 p-4 transition-colors duration-500 hover:border-gold/40 sm:p-7"
                >
                  {/* Hover wash */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(120% 100% at 50% 0%, rgba(201,162,39,0.14) 0%, transparent 65%)',
                    }}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      {/* Arch-topped icon niche, matching the hero frames */}
                      <span className="inline-flex h-11 w-9 items-end justify-center rounded-t-full rounded-b-lg border border-gold/25 bg-gold/10 pb-2 text-gold transition-transform duration-500 group-hover:-translate-y-1 sm:h-14 sm:w-12 sm:pb-2.5">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <span className="font-mono text-[0.6rem] tracking-[0.2em] text-gold/60 sm:text-[0.68rem]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-3.5 text-base font-normal tracking-tight text-cream sm:mt-5 sm:text-xl">
                      {c.name}
                    </h3>

                    <p className="mt-2.5 hidden text-sm leading-relaxed text-cream-dim/70 sm:block">
                      {c.blurb}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
