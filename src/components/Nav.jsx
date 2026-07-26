import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu as MenuIcon, X, Phone } from 'lucide-react'
import { Logo } from './ui/Logo'
import { nav, contact } from '../data/site'

export function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setSolid(v > 40))

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        // NB: never `transition-all` here — a CSS transition on `transform`
        // fights Framer Motion's inline transform and strands the entry animation.
        // Opaque enough that scrolling photography stays behind the wordmark —
        // the 55% `.glass` mix let hero text read straight through on mobile.
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
          solid
            ? 'border-b border-cream/10 bg-forest-950/92 shadow-lg shadow-forest-950/40 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="text-cream transition-colors hover:text-gold">
            <Logo markClass="h-7 w-7" textClass="text-lg sm:text-xl" />
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm text-cream-dim transition-colors hover:text-cream"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-400 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${contact.phone}`}
              className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-forest-950 transition-transform duration-300 hover:scale-105 sm:inline-flex"
            >
              <Phone className="h-4 w-4" />
              Order now
            </a>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="rounded-full border border-cream/20 p-2.5 text-cream transition-colors hover:border-gold hover:text-gold md:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-forest-950/98 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Logo markClass="h-7 w-7" textClass="text-lg" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-full border border-cream/20 p-2.5 text-cream"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-cream/10 py-5 font-display text-4xl font-light text-cream"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-8 pb-12">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-semibold text-forest-950"
              >
                <Phone className="h-4 w-4" />
                {contact.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
