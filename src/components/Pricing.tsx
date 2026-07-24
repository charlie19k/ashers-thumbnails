import { Check, Zap } from 'lucide-react'
import { PRICE } from '../content'
import { SectionHeader, useReveal, Magnetic } from './ui'

export default function Pricing() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section id="pricing" ref={sectionRef} className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeader
        eyebrow="Pricing"
        title="One price. No tiers."
        subtitle="Every thumbnail gets the full treatment — no subscriptions, no upsells, just artwork engineered to earn the click."
      />
      <div className="mx-auto max-w-lg">
        <div
          data-reveal
          className="relative flex flex-col gap-7 rounded-2xl border border-accent/40 bg-accent/[0.04] p-8 shadow-[0_0_60px_rgba(255,255,255,0.06)] md:p-10"
        >
          <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-3.5 py-1 text-[11px] font-semibold text-black">
            <Zap size={11} />
            Custom Thumbnail
          </span>
          <div className="text-center">
            <p className="text-6xl font-bold tracking-tight text-primary md:text-7xl">{PRICE.range}</p>
            <p className="label-mono mt-3 text-zinc-500">{PRICE.unit}</p>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">{PRICE.tagline}</p>
          </div>
          <ul className="mx-auto flex w-full max-w-xs flex-col gap-3">
            {PRICE.features.map((feature, f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <Check size={10} className="text-accent" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="pt-1">
            <Magnetic className="w-full">
              <a
                href="#contact"
                className="flex w-full items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-accent-dim hover:shadow-[0_0_32px_rgba(255,255,255,0.25)]"
              >
                Order a Thumbnail
              </a>
            </Magnetic>
          </div>
        </div>
        <p data-reveal className="label-mono mt-8 text-center text-[10px] text-zinc-600">
          {PRICE.note}
        </p>
      </div>
    </section>
  )
}
