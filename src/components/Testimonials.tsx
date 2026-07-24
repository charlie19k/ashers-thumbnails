import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../content'
import { SectionHeader, useReveal } from './ui'

export default function Testimonials() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section id="testimonials" ref={sectionRef} className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionHeader
        eyebrow="Testimonials"
        title="What creators say"
        subtitle="Real reviews from the Gorilla Tag and Roblox creators I work with will live here soon."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <figure key={i} data-reveal className="card flex flex-col gap-5 p-7">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={14} className="fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-[15px] leading-relaxed text-zinc-300">“{t.quote}”</blockquote>
            <figcaption className="mt-auto flex items-center gap-3 border-t border-white/[0.06] pt-5">
              <img
                src={t.avatar}
                alt={`${t.name} avatar placeholder`}
                loading="lazy"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
              />
              <div>
                <p className="text-sm font-semibold text-primary">{t.name}</p>
                <p className="mt-0.5 text-xs text-zinc-500">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
