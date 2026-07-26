import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/** Trailing dot + ring that swells over interactive elements. Pointer devices only. */
export function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hot, setHot] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.5 })
  const ry = useSpring(y, { stiffness: 260, damping: 26, mass: 0.5 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return
    setEnabled(true)
    document.body.classList.add('has-custom-cursor')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHot(Boolean(e.target.closest?.('a, button, [data-cursor="hot"]')))
    }
    window.addEventListener('pointermove', move)

    return () => {
      window.removeEventListener('pointermove', move)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-gold"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-gold/60"
        style={{ x: rx, y: ry, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hot ? 52 : 30,
          height: hot ? 52 : 30,
          opacity: hot ? 1 : 0.5,
          backgroundColor: hot ? 'rgba(201,162,39,0.10)' : 'rgba(201,162,39,0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      />
    </>
  )
}
