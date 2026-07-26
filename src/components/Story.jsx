import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { LeafMark } from './ui/Logo'
import { story, stats } from '../data/site'

export function Story() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const markY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])
  const markRotate = useTransform(scrollYProgress, [0, 1], [-8, 8])

  return (
    <section id="story" ref={ref} className="grain relative overflow-hidden bg-forest-900 py-14 sm:py-24 lg:py-32">
      {/* Oversized watermark leaf drifting with scroll */}
      <motion.div
        aria-hidden
        style={{ y: markY, rotate: markRotate }}
        className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 opacity-[0.045]"
      >
        <LeafMark className="h-[34rem] w-[34rem] text-cream" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Our story" title={story.heading} />

            <div className="mt-8 space-y-5">
              {story.body.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.1}>
                  <p className="text-base leading-relaxed text-cream-dim/80">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.45}>
              <p className="mt-9 font-script text-3xl text-gold">— The Cakery kitchen</p>
            </Reveal>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.09} className="h-full">
                <motion.div
                  whileHover={{ backgroundColor: 'rgba(201,162,39,0.07)' }}
                  className="flex h-full flex-col justify-center bg-forest-850 p-5 sm:p-8 lg:p-10"
                >
                  <span className="font-display text-4xl font-light tracking-tight text-gold sm:text-5xl">
                    {s.value}
                  </span>
                  <span className="mt-2 text-sm leading-snug text-cream-dim/70">{s.label}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
