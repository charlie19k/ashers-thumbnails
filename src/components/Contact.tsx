import { MessageCircle, Mail, ArrowRight } from 'lucide-react'
import { SOCIALS } from '../content'
import { XIcon } from './icons'
import { SectionHeader, useReveal, Magnetic } from './ui'

const CHANNELS = [
  { icon: MessageCircle, ...SOCIALS.discord },
  { icon: Mail, ...SOCIALS.email },
  { icon: XIcon, ...SOCIALS.twitter },
]

export default function Contact() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden border-t border-white/[0.06]">
      <div className="glow absolute left-1/2 top-1/2 h-[400px] w-[640px] -translate-x-1/2 -translate-y-1/2" />
      <div className="grid-bg absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-40">
        <SectionHeader
          eyebrow="Contact"
          title="Ready for your next viral thumbnail?"
          subtitle="Join the biggest Gorilla Tag and Roblox creators who trust Asher's Thumbnails with their first impression. Slots are limited each week — lock yours in."
        />
        <div data-reveal className="mb-14 flex justify-center">
          <Magnetic strength={0.3}>
            <a
              href={SOCIALS.discord.href}
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-10 py-4 text-base font-semibold text-black transition-all duration-300 hover:bg-accent-dim hover:shadow-[0_0_48px_rgba(255,255,255,0.3)] md:px-12 md:py-5"
            >
              Order Now
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Magnetic>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CHANNELS.map(({ icon: Icon, label, handle, href }) => (
            <a key={label} data-reveal href={href} className="card group flex flex-col items-center gap-3 px-5 py-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition-all duration-300 group-hover:border-accent/50 group-hover:text-accent">
                <Icon size={17} />
              </span>
              <div>
                <p className="text-sm font-semibold text-primary">{label}</p>
                <p className="mt-0.5 text-xs text-zinc-500">{handle}</p>
              </div>
            </a>
          ))}
        </div>
        <p data-reveal className="label-mono mt-10 text-[10px] text-zinc-600">
          Placeholder contact details — real handles coming soon
        </p>
      </div>
    </section>
  )
}
