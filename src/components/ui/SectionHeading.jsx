import { Reveal, RevealWords } from './Reveal'

export function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold ${className}`}
    >
      <span aria-hidden className="h-px w-8 bg-gold/50" />
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, sub, align = 'left', className = '' }) {
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <h2 className="mt-3.5 text-[1.9rem] font-light leading-[1.06] tracking-tight text-balance sm:mt-5 sm:text-5xl lg:text-6xl">
        <RevealWords text={title} />
      </h2>
      {sub && (
        <Reveal delay={0.15}>
          <p className="mt-3 text-sm leading-relaxed text-cream-dim/80 text-balance sm:mt-5 sm:text-lg">
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  )
}
