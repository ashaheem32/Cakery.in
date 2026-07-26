import { motion } from 'framer-motion'
import { MapPin, Phone, Truck, MessageCircle } from 'lucide-react'
import { Instagram } from './ui/Icons'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { locations, contact } from '../data/site'

export function Visit() {
  return (
    <section id="visit" className="relative bg-forest-950 py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Find us"
          title="Three counters across Kannur"
          sub={`${contact.deliveryNote} — order by phone or WhatsApp and we will bring it to you.`}
          align="center"
        />

        {/* Locations */}
        <div className="mt-9 grid sm:mt-16 gap-4 md:grid-cols-3">
          {locations.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-cream/10 bg-forest-900/70 p-5 transition-colors sm:p-8 duration-500 hover:border-gold/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold">
                      {l.role}
                    </span>
                    <h3 className="mt-2.5 font-display text-2xl font-light tracking-tight text-cream">
                      {l.name}
                    </h3>
                  </div>
                  <MapPin className="h-5 w-5 shrink-0 text-gold/60 transition-transform duration-500 group-hover:-translate-y-1" />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-cream-dim/70">{l.note}</p>
                <p className="mt-5 border-t border-cream/10 pt-4 text-xs text-cream-mute">
                  {l.district}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Contact strip */}
        <Reveal delay={0.15}>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4 lg:grid-cols-4">
            {[
              {
                icon: Phone,
                label: 'Call to order',
                value: contact.phoneDisplay,
                href: `tel:${contact.phone}`,
              },
              {
                icon: MessageCircle,
                label: 'WhatsApp',
                value: contact.phoneAltDisplay,
                href: `https://wa.me/${contact.whatsapp}`,
              },
              {
                icon: Instagram,
                label: 'Instagram',
                value: '@the_cakery.in',
                href: contact.instagram,
              },
              {
                icon: Truck,
                label: 'Delivery',
                value: 'Free up to 20 km',
                href: null,
              },
            ].map((c) => {
              const Inner = (
                <>
                  <c.icon className="h-5 w-5 text-gold" />
                  <span className="mt-4 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream-mute">
                    {c.label}
                  </span>
                  <span className="mt-1.5 block text-sm text-cream">{c.value}</span>
                </>
              )

              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="rounded-2xl border border-cream/10 bg-forest-900/70 p-4 transition-all sm:p-7 duration-400 hover:-translate-y-1 hover:border-gold/40"
                >
                  {Inner}
                </a>
              ) : (
                <div
                  key={c.label}
                  className="rounded-2xl border border-cream/10 bg-forest-900/70 p-4 sm:p-7"
                >
                  {Inner}
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
