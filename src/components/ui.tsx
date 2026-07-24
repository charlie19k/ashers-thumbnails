import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Subtle magnetic hover — the element leans toward the cursor. */
export function Magnetic({ children, strength = 0.2, className = '' }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' })

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      xTo((e.clientX - (rect.left + rect.width / 2)) * strength)
      yTo((e.clientY - (rect.top + rect.height / 2)) * strength)
    }
    const onLeave = () => {
      xTo(0)
      yTo(0)
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {children}
    </div>
  )
}

/** Scroll-triggered stagger reveal for all children matching `[data-reveal]`. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll('[data-reveal]')
    if (!targets.length) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: 'top 80%', once: true },
        }
      )
    }, el)
    return () => ctx.revert()
  }, [])

  return ref
}

/** Eyebrow + heading + subtitle used by every section. */
export function SectionHeader({ eyebrow, title, subtitle, center = true }: { eyebrow: string; title: ReactNode; subtitle?: string; center?: boolean }) {
  return (
    <div className={`flex flex-col gap-5 mb-14 md:mb-20 ${center ? 'items-center text-center' : 'items-start text-left'}`}>
      <span data-reveal className="label-mono flex items-center gap-2 text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 data-reveal className="max-w-3xl text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p data-reveal className="max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

/** Lime primary button. */
export function PrimaryButton({ children, href = '#contact', className = '' }: { children: ReactNode; href?: string; className?: string }) {
  return (
    <Magnetic>
      <a
        href={href}
        className={`inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-accent-dim hover:shadow-[0_0_32px_rgba(255,255,255,0.25)] ${className}`}
      >
        {children}
      </a>
    </Magnetic>
  )
}

/** Ghost outline button. */
export function GhostButton({ children, href = '#portfolio', className = '' }: { children: ReactNode; href?: string; className?: string }) {
  return (
    <Magnetic>
      <a
        href={href}
        className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-7 py-3.5 text-sm font-medium text-primary transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] ${className}`}
      >
        {children}
      </a>
    </Magnetic>
  )
}
