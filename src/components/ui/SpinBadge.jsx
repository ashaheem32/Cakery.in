import { LeafMark } from './Logo'

/**
 * Slowly rotating circular seal — text set on a circular path with the leaf
 * mark held still in the middle. Used as the hero's focal accent.
 */
export function SpinBadge({
  text = 'THE CAKERY · KANNUR · FRESH EVERY MORNING · ',
  className = '',
  duration = 26,
}) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full motion-safe:animate-[spin-seal_var(--seal-duration)_linear_infinite]"
        style={{ '--seal-duration': `${duration}s` }}
        aria-hidden="true"
      >
        <defs>
          <path
            id="seal-arc"
            fill="none"
            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
          />
        </defs>
        <text
          className="fill-gold"
          style={{ fontSize: '8.4px', letterSpacing: '2.1px', fontWeight: 600 }}
        >
          <textPath href="#seal-arc">{text}</textPath>
        </text>
      </svg>

      <span className="absolute inset-0 flex items-center justify-center">
        <LeafMark className="h-1/4 w-1/4 text-cream/80" />
      </span>

      <style>{`
        @keyframes spin-seal {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
