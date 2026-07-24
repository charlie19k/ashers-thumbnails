import { useRef, useState } from 'react'
import gsap from 'gsap'
import { Plus } from 'lucide-react'
import { FAQS } from '../content'
import { SectionHeader, useReveal } from './ui'

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLSpanElement>(null)

  const toggle = () => {
    const body = bodyRef.current
    if (!body) return
    gsap.killTweensOf([body, iconRef.current])
    if (open) {
      gsap.to(body, { height: 0, opacity: 0, duration: 0.4, ease: 'power3.inOut' })
      gsap.to(iconRef.current, { rotate: 0, duration: 0.4, ease: 'power3.inOut' })
    } else {
      gsap.to(body, { height: 'auto', opacity: 1, duration: 0.45, ease: 'power3.inOut' })
      gsap.to(iconRef.current, { rotate: 135, duration: 0.4, ease: 'power3.inOut' })
    }
    setOpen(!open)
  }

  return (
    <div data-reveal className="border-b border-white/[0.06]">
      <button onClick={toggle} className="group flex w-full items-center justify-between gap-6 py-6 text-left" aria-expanded={open}>
        <span className="text-[15px] font-semibold text-primary transition-colors duration-200 group-hover:text-accent md:text-base">
          {q}
        </span>
        <span
          ref={iconRef}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors duration-200 group-hover:border-white/25 group-hover:text-primary"
        >
          <Plus size={14} />
        </span>
      </button>
      <div ref={bodyRef} className="h-0 overflow-hidden opacity-0">
        <p className="pb-6 pr-14 text-sm leading-relaxed text-zinc-400 md:text-[15px]">{a}</p>
      </div>
    </div>
  )
}

export default function Faq() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-3xl px-6 py-24 md:py-32">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions, answered"
        subtitle="Everything you need to know before ordering your first thumbnail."
      />
      <div className="border-t border-white/[0.06]">
        {FAQS.map((faq, i) => (
          <FaqItem key={i} q={faq.q} a={faq.a} />
        ))}
      </div>
    </section>
  )
}
