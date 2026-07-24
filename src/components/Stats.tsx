import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { STATS } from '../content'
import { useReveal } from './ui'

gsap.registerPlugin(ScrollTrigger)

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const counter = { n: 0 }
    const tween = gsap.to(counter, {
      n: value,
      duration: 1.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      onUpdate: () => {
        el.textContent = `${Math.round(counter.n)}${suffix}`
      },
    })
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [value, suffix])

  return (
    <span ref={ref} className="text-5xl font-bold tracking-tight text-primary md:text-6xl">
      0{suffix}
    </span>
  )
}

export default function Stats() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section ref={sectionRef} className="relative border-y border-white/[0.06] bg-panel/50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/[0.06] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {STATS.map((stat, i) => (
          <div key={i} data-reveal className="flex flex-col gap-2 px-8 py-12 md:py-16">
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="text-sm font-semibold text-zinc-200">{stat.label}</p>
            <p className="text-[13px] text-zinc-500">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
