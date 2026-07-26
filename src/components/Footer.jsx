import { Phone, Globe, ArrowUp } from 'lucide-react'
import { Instagram } from './ui/Icons'
import { Logo } from './ui/Logo'
import { nav, contact, brand } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="grain relative overflow-hidden border-t border-cream/10 bg-forest-900">
      {/* Oversized wordmark bleeding off the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 left-1/2 w-full -translate-x-1/2 select-none text-center font-display text-[18vw] font-light leading-none text-cream/[0.035]"
      >
        The Cakery
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo markClass="h-8 w-8" textClass="text-2xl" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-dim/70">
              {brand.tagline}. Handcrafted in Kannur, Pappinisseri and Taliparamba.
              {' '}
              {contact.deliveryNote}.
            </p>

            <div className="mt-7 flex gap-3">
              {[
                { icon: Instagram, href: contact.instagram, label: 'Instagram' },
                { icon: Phone, href: `tel:${contact.phone}`, label: 'Call' },
                { icon: Globe, href: contact.website, label: 'Website' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-cream-dim/75 transition-colors duration-300 hover:text-gold"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">
              Order
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-cream-dim/75">
              <li>
                <a href={`tel:${contact.phone}`} className="transition-colors hover:text-gold">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phoneAlt}`} className="transition-colors hover:text-gold">
                  {contact.phoneAltDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-7 sm:flex-row">
          <p className="text-xs text-cream-mute">
            © {year} {brand.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs text-cream-mute transition-colors hover:text-gold"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
