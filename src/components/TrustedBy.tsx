import { BadgeCheck } from 'lucide-react'
import { CREATORS } from '../content'
import { YoutubeIcon } from './icons'
import { SectionHeader, useReveal } from './ui'

export default function TrustedBy() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionHeader
        eyebrow="Social Proof"
        title="Trusted by top creators"
        subtitle="Some of the biggest names in the Gorilla Tag and Roblox communities trust Asher's Thumbnails with their first impression."
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {CREATORS.map((creator, i) => (
          <div key={i} data-reveal className="card group flex flex-col items-center gap-4 px-5 py-8 text-center">
            <div className="relative">
              <img
                src={creator.avatar}
                alt={`${creator.name} avatar placeholder`}
                loading="lazy"
                className="h-16 w-16 rounded-full object-cover ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent">
                <BadgeCheck size={12} className="text-black" />
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">{creator.name}</p>
              <p className="mt-1 flex items-center justify-center gap-1.5 text-xs text-zinc-500">
                <YoutubeIcon size={11} />
                {creator.subs}
              </p>
            </div>
            <span className="label-mono rounded-md border border-white/[0.08] px-2 py-1 text-[9px] text-zinc-500">
              {creator.game}
            </span>
          </div>
        ))}
      </div>
      <p data-reveal className="label-mono mt-10 text-center text-[10px] text-zinc-600">
        Real creator names, logos & subscriber counts coming soon
      </p>
    </section>
  )
}
