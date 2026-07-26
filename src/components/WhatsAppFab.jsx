import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { contact } from '../data/site'

/** Sticky order button that appears once you have scrolled past the hero. */
export function WhatsAppFab() {
  const [show, setShow] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setShow(v > 700))

  return (
    <motion.a
      href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
        "Hi The Cakery, I'd like to place an order.",
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      initial={false}
      animate={show ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 20 }}
      style={{ pointerEvents: show ? 'auto' : 'none' }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      // Icon-only circle on mobile; label appears once there is room for it.
      className="fixed bottom-6 right-5 z-[80] inline-flex items-center justify-center rounded-full bg-gold p-4 font-semibold text-forest-950 shadow-xl shadow-forest-950/50 sm:bottom-8 sm:right-8 sm:gap-2.5 sm:py-3.5 sm:pl-5 sm:pr-6"
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      <span className="hidden whitespace-nowrap text-sm sm:inline">Order now</span>
    </motion.a>
  )
}
