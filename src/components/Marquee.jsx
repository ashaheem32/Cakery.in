import { LeafMark } from './ui/Logo'

const WORDS = [
  'Cakes',
  'Brownies',
  'Jar Cakes',
  'Pastries',
  'Designer Cakes',
  'Snacks',
  'Éclairs',
  'Mousse',
]

/** Infinite ticker — two identical tracks sliding as one seamless loop. */
export function Marquee() {
  const track = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {WORDS.map((w) => (
        <span key={w} className="flex items-center gap-10">
          <span className="font-display text-3xl font-light whitespace-nowrap text-cream/70 sm:text-4xl">
            {w}
          </span>
          <LeafMark className="h-5 w-5 shrink-0 text-gold" />
        </span>
      ))}
    </div>
  )

  return (
    <div className="relative overflow-hidden border-y border-cream/10 bg-forest-900 py-7">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-forest-900 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-forest-900 to-transparent"
      />
      <div className="flex animate-[marquee_38s_linear_infinite] motion-reduce:animate-none">
        {track}
        {track}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
