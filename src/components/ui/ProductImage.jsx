import { useState } from 'react'
import { LeafMark } from './Logo'

/**
 * Renders a real photo from /public/images when one exists, and otherwise
 * falls back to a generated brand placeholder — so the layout always looks
 * deliberate whether or not the photography has been dropped in yet.
 */
export function ProductImage({ src, alt, accent = '#7b4a2f', className = '', label }) {
  const [failed, setFailed] = useState(!src)

  if (!failed) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }

  return (
    <div
      className={`grain relative flex h-full w-full flex-col items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 50% 8%, ${accent}55 0%, transparent 62%),
                     linear-gradient(165deg, var(--color-forest-800) 0%, var(--color-forest-950) 100%)`,
      }}
      role="img"
      aria-label={alt}
    >
      {/* Concentric rings echoing a cake seen from above */}
      <div aria-hidden className="absolute inset-0 opacity-[0.18]">
        {[0.9, 0.68, 0.46, 0.26].map((s) => (
          <div
            key={s}
            className="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/40"
            style={{ width: `${s * 100}%` }}
          />
        ))}
      </div>

      <LeafMark className="relative w-10 h-10 text-cream/45" />
      {label && (
        <span className="relative mt-3 px-4 text-center font-script text-xl text-cream/50">
          {label}
        </span>
      )}
    </div>
  )
}
