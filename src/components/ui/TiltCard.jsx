import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

/**
 * Pointer-tracked 3D tilt with a glare sheen that follows the cursor.
 * Children can use `translateZ` via the `preserve-3d` utility to pop forward.
 */
export function TiltCard({ children, className = '', max = 11, glare = true }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const spring = { stiffness: 180, damping: 20, mass: 0.4 }
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring)
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring)

  // Hooks stay unconditional — the glare layer is what gets conditionally rendered.
  const glareBg = useTransform(
    [px, py],
    ([x, y]) =>
      `radial-gradient(420px circle at ${x * 100}% ${y * 100}%, rgba(230,201,106,0.16), transparent 60%)`,
  )

  function handleMove(e) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  function handleLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  if (reduced) return <div className={`relative ${className}`}>{children}</div>

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={`preserve-3d relative ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  )
}
