import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { menu } from '../data/site'

export function MenuList() {
  const [active, setActive] = useState(0)
  const group = menu[active]

  return (
    <section id="menu" className="relative bg-forest-950 py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The full list"
          title="Everything on the counter"
          sub="Seasonal specials rotate through the week — call ahead and we will tell you what just came out."
          align="center"
        />

        {/* Group tabs */}
        <div className="mt-8 flex flex-wrap justify-center sm:mt-14 gap-2">
          {menu.map((g, i) => (
            <button
              key={g.group}
              onClick={() => setActive(i)}
              className={`relative rounded-full px-3.5 py-2 text-[0.8rem] font-medium sm:px-5 sm:py-2.5 sm:text-sm transition-colors duration-300 ${
                i === active ? 'text-forest-950' : 'text-cream-dim hover:text-cream'
              }`}
            >
              {i === active && (
                <motion.span
                  layoutId="menu-pill"
                  className="absolute inset-0 rounded-full bg-gold"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{g.group}</span>
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.ul
              key={group.group}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="divide-y divide-cream/10 border-y border-cream/10"
            >
              {group.items.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-baseline gap-4 py-3.5 transition-colors sm:py-5 duration-300 hover:bg-cream/[0.03]"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg font-normal tracking-tight text-cream transition-colors duration-300 group-hover:text-gold">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-gold">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-sm text-cream-dim/65">{item.desc}</p>
                  </div>

                  <span
                    aria-hidden
                    className="hidden flex-1 translate-y-[-3px] border-b border-dotted border-cream/20 sm:block"
                  />

                  <span className="shrink-0 text-sm tabular-nums text-cream-dim">
                    {item.price ? `₹${item.price}` : 'On request'}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-cream-mute">
            Designer and custom cakes are quoted to the brief — send a reference photo on WhatsApp
            and we will price it the same day.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
