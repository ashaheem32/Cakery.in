import { Quote } from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { testimonials } from '../data/site'

/** Two rows drifting in opposite directions, paused on hover. */
export function Testimonials() {
  const rows = [
    { items: [...testimonials, ...testimonials], dir: 'normal', dur: '46s' },
    { items: [...testimonials.slice().reverse(), ...testimonials.slice().reverse()], dir: 'reverse', dur: '56s' },
  ]

  return (
    <section className="relative overflow-hidden bg-forest-900 py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Feedback"
          title="What Kannur says"
          sub="Straight from the feedback highlight on our Instagram."
          align="center"
        />
      </div>

      <div className="mt-9 space-y-4 sm:mt-16 sm:space-y-5">
        {rows.map((row, r) => (

          <div
            key={r}
            className={`group relative overflow-hidden ${r === 1 ? 'hidden sm:flex' : 'flex'}`}
          >
            <div
              className="flex shrink-0 gap-5 pr-5 motion-reduce:animate-none"
              style={{
                animation: `drift ${row.dur} linear infinite`,
                animationDirection: row.dir,
              }}
            >
              {row.items.map((t, i) => (
                <figure
                  key={`${r}-${i}`}
                  className="flex w-[17rem] shrink-0 flex-col rounded-2xl border border-cream/10 bg-forest-850 p-5 sm:p-7 transition-colors duration-500 hover:border-gold/35 sm:w-[23rem]"
                >
                  <Quote className="h-5 w-5 shrink-0 text-gold/70" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-cream-dim/85">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-cream/10 pt-4 text-xs text-cream-mute">
                    <span className="text-cream-dim">{t.name}</span> · {t.from}
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* duplicate track for a seamless loop */}
            <div
              aria-hidden
              className="flex shrink-0 gap-5 pr-5 motion-reduce:animate-none"
              style={{
                animation: `drift ${row.dur} linear infinite`,
                animationDirection: row.dir,
              }}
            >
              {row.items.map((t, i) => (
                <figure
                  key={`dup-${r}-${i}`}
                  className="flex w-[17rem] shrink-0 flex-col rounded-2xl border border-cream/10 bg-forest-850 p-5 sm:p-7 sm:w-[23rem]"
                >
                  <Quote className="h-5 w-5 shrink-0 text-gold/70" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-cream-dim/85">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-cream/10 pt-4 text-xs text-cream-mute">
                    <span className="text-cream-dim">{t.name}</span> · {t.from}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes drift {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  )
}
