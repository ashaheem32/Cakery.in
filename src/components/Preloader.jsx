import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LeafMark } from './ui/Logo'

/** Brand curtain that counts up, then splits away to reveal the hero. */
export function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    let value = 0
    const tick = setInterval(() => {
      value = Math.min(100, value + Math.random() * 22 + 12)
      setProgress(Math.floor(value))
      if (value >= 100) {
        clearInterval(tick)
        setTimeout(() => {
          setGone(true)
          onDone?.()
        }, 260)
      }
    }, 85)
    return () => clearInterval(tick)
  }, [onDone])

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-forest-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <LeafMark className="h-16 w-16 text-cream" />
          </motion.div>

          <motion.p
            className="mt-6 font-display text-2xl font-light tracking-tight text-cream"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            The Cakery
          </motion.p>

          <div className="mt-8 h-px w-56 overflow-hidden bg-cream/15">
            <motion.div
              className="h-full bg-gold"
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear', duration: 0.16 }}
            />
          </div>

          <p className="mt-4 font-mono text-xs tabular-nums tracking-widest text-cream-mute">
            {String(progress).padStart(3, '0')}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
