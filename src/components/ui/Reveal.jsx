import { Fragment, useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const VIEWPORT = { once: true, amount: 0.15 }

/**
 * IntersectionObserver is the primary trigger, but it can miss when content
 * arrives on screen without a scroll sequence — a `/#visit` deep link, a
 * browser-restored scroll position, or an instant programmatic jump. That
 * leaves the section stranded at `opacity: 0` forever.
 *
 * So after mount we also measure geometry directly and reveal anything that is
 * already on screen. One timer per instance, no scroll listeners.
 */
function useRevealed(ref) {
  const inView = useInView(ref, VIEWPORT)
  const [settled, setSettled] = useState(false)

  useEffect(() => {
    if (settled) return
    const id = setTimeout(() => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight && r.bottom > 0) setSettled(true)
    }, 600)
    return () => clearTimeout(id)
  }, [ref, settled])

  return inView || settled
}

/** Fade + rise as the element scrolls into view. */
export function Reveal({ children, delay = 0, y = 28, className = '' }) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const show = useRevealed(ref)

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Splits a string into words that rise into place one after another.
 *
 * The trigger lives on the OUTER span, not the words themselves: each word sits
 * inside an `overflow-hidden` clip and starts translated fully out of it, so an
 * observer attached to the word would see an empty rect and never fire.
 */
export function RevealWords({ text, className = '', delay = 0, stagger = 0.06 }) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const show = useRevealed(ref)
  const words = text.split(' ')

  if (reduced) return <span className={className}>{text}</span>

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial="hidden"
      animate={show ? 'show' : 'hidden'}
      transition={{ delayChildren: delay, staggerChildren: stagger }}
    >
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          {/* -mb/pb pair keeps descenders from being clipped by the mask */}
          <span className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '115%' },
                show: {
                  y: 0,
                  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </motion.span>
  )
}
