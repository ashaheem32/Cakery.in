import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { TiltCard } from './ui/TiltCard'
import { ProductImage } from './ui/ProductImage'
import { signature, contact } from '../data/site'

export function Signature() {
  return (
    <section id="signature" className="relative bg-forest-900 py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="The ones they come back for"
            title="Signature bakes"
            sub="Three things we are known for across Kannur. Made fresh, sold out early."
          />
          <Reveal delay={0.2}>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold"
            >
              Order any of these
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        {/* Mobile: one-card-at-a-time swipe rail (three stacked cards ran ~2800px).
            Desktop: unchanged three-column grid. */}
        <div className="no-scrollbar -mx-5 mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mt-16 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {signature.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={i * 0.12}
              className="w-[76vw] shrink-0 snap-start sm:w-[52vw] lg:w-auto"
            >
              <TiltCard className="group h-full">
                <article className="flex h-full flex-col rounded-3xl border border-cream/10 bg-forest-850 p-3 transition-colors duration-500 group-hover:border-gold/40">
                  {/* Arch frame — echoes the hero */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-2xl ring-1 ring-gold/15">
                    <div className="absolute inset-0 transition-transform duration-700 ease-silk group-hover:scale-[1.06]">
                      <ProductImage
                        src={p.image}
                        alt={`${p.name} — ${p.desc}`}
                        accent={p.accent}
                        label={p.name}
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-3 pb-2 pt-4 sm:px-4 sm:pb-3 sm:pt-6" style={{ transform: 'translateZ(40px)' }}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-mono text-[0.68rem] tracking-[0.2em] text-gold/70">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cream-mute">
                        {p.kicker}
                      </span>
                    </div>
                    <span aria-hidden className="mt-3 block h-px w-full bg-cream/10" />

                    <h3 className="mt-3.5 font-display text-xl font-light tracking-tight text-cream sm:mt-5 sm:text-2xl">
                      {p.name}
                    </h3>
                    <p className="mt-2 flex-1 text-[0.82rem] leading-relaxed text-cream-dim/75 sm:mt-3 sm:text-sm">
                      {p.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-cream/12 px-2.5 py-0.5 text-[0.68rem] text-cream-mute sm:px-3 sm:py-1 sm:text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-cream/10 pt-4 sm:mt-6 sm:pt-5">
                      <span className="text-sm text-cream-dim">
                        {p.price ? `₹${p.price}` : 'Price on request'}
                      </span>
                      <motion.a
                        href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                          `Hi The Cakery, I'd like to order the ${p.name}.`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center gap-1.5 rounded-full bg-cream/10 px-4 py-2 text-xs font-semibold text-cream transition-colors duration-300 hover:bg-gold hover:text-forest-950"
                      >
                        Order
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </motion.a>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
