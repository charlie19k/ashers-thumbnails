import { useEffect, useRef } from 'react'
import type { HTMLAttributes } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Plus } from 'lucide-react'
import { NAV_LINKS, THUMBNAILS, PRICE, FAQS, SOCIALS } from './content'
import { useReveal } from './components/ui'
import { Fx } from './components/Fx'
import Threads from './components/Threads'
import Aurora from './components/Aurora'

gsap.registerPlugin(ScrollTrigger)

/* Signature rotating badge — circular text that spins forever. */
function Badge({ className = '', ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`relative ${className}`} {...rest}>
      <svg viewBox="0 0 100 100" className="spin-slow h-full w-full">
        <defs>
          <path id="badge-curve" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
        </defs>
        <text className="fill-zinc-400 font-mono text-[8.4px] uppercase tracking-[0.28em]">
          <textPath href="#badge-curve" startOffset="0%">
            Asher ✦ Thumbnail Designer ✦&nbsp;
          </textPath>
        </text>
      </svg>
      <ArrowUpRight size={18} className="absolute inset-0 m-auto text-accent" />
    </div>
  )
}

/* ================= TOP BAR ================= */

function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-5 py-5 md:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-[15px] font-extrabold tracking-tight text-white">Asher</span>
          <span className="label-mono hidden text-[9px] text-white/60 sm:block">Thumbnail Designer</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="label-mono text-[10px] text-white/70 transition-colors duration-200 hover:text-white">
              {link}
            </a>
          ))}
        </nav>
        <a href="#contact" className="label-mono flex items-center gap-1.5 text-[10px] text-white">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute h-full w-full animate-ping rounded-full bg-white opacity-60" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          Available
        </a>
      </div>
    </header>
  )
}

/* ================= HERO — "STOP THE SCROLL." ================= */

function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-line]', { yPercent: 115 }, { yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.1, delay: 0.15 })
      gsap.fromTo('[data-fade]', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1, delay: 0.7 })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Fx>
          <Threads color={[0.96, 0.92, 0.82]} amplitude={1} distance={0.35} enableMouseInteraction={false} />
        </Fx>
      </div>
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-base" />

      {/* giant statement */}
      <div className="relative flex flex-1 flex-col justify-center px-5 md:px-8">
        <h1 className="font-extrabold uppercase leading-[0.82] tracking-[-0.04em] text-primary">
          <span className="block overflow-hidden">
            <span data-line className="block text-[19vw] md:text-[15vw]">Stop</span>
          </span>
          <span className="block overflow-hidden">
            <span data-line className="block pl-[8vw] font-serif-display text-[15vw] font-normal italic normal-case tracking-normal text-zinc-500 md:text-[11vw]">the</span>
          </span>
          <span className="block overflow-hidden">
            <span data-line className="block text-[19vw] text-accent md:text-[15vw]">Scroll.</span>
          </span>
        </h1>
      </div>

      {/* bottom meta bar */}
      <div className="relative flex items-end justify-between gap-6 border-t border-line px-5 py-6 md:px-8">
        <div data-fade className="max-w-xs">
          <p className="text-sm leading-relaxed text-zinc-400">
            Custom Gorilla Tag &amp; Roblox thumbnails, built one at a time by <span className="text-primary">Asher</span>.
          </p>
        </div>
        <Badge className="hidden h-24 w-24 shrink-0 sm:block" />
      </div>
    </section>
  )
}

/* ================= WORK — editorial gallery ================= */

function Work() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="work" ref={ref} className="px-5 py-24 md:px-8 md:py-36">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 data-reveal className="text-5xl font-extrabold uppercase tracking-tight text-primary md:text-8xl">
          Selected<br /><span className="numeral-outline">Work</span>
        </h2>
        <p data-reveal className="label-mono max-w-xs text-[10px] leading-relaxed text-zinc-500">
          Thumbnails designed for Gorilla Tag &amp; Roblox creators. Hover any piece to see who it's for.
        </p>
      </div>

      {/* uniform grid — offset every other for rhythm */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-y-16">
        {THUMBNAILS.map((t, i) => (
          <div key={i} className={i % 2 === 1 ? 'md:mt-24' : ''}>
            <WorkTile t={t} index={i + 1} />
          </div>
        ))}
      </div>
    </section>
  )
}

function WorkTile({ t, index }: { t: (typeof THUMBNAILS)[number]; index: number }) {
  return (
    <figure data-reveal className="group">
      {/* caption line — sits above the image, nothing overlaps */}
      <div className="mb-3 flex items-baseline justify-between gap-4 border-b border-line pb-2.5">
        <span className="numeral-stroke text-4xl font-extrabold leading-none transition-colors duration-300 group-hover:text-zinc-500">
          #{index}
        </span>
        <span className="label-mono text-[9px] text-zinc-500 transition-colors duration-300 group-hover:text-accent">
          {t.game}
        </span>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-line">
        <img src={t.image} alt={t.title} loading="lazy" className="aspect-video w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]" />
        {/* hover overlay — reveals the creator */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/85 via-black/20 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="flex w-full items-end justify-between">
            <span className="text-lg font-bold text-white">{t.creator}</span>
            <ArrowUpRight size={22} className="text-white" />
          </div>
        </div>
      </div>
    </figure>
  )
}

/* ================= STATEMENT / APPROACH ================= */

const PRINCIPLES = [
  { n: '01', title: 'One clear focal point', body: 'Every design is built around a single subject, so the eye knows exactly where to land first.' },
  { n: '02', title: 'Just two games', body: 'I only work on Gorilla Tag and Roblox, so I know what already looks overdone and what still stands out.' },
  { n: '03', title: 'Built from scratch', body: 'No templates, no recycled scenes. Composed, lit and colored for the video it belongs to.' },
  { n: '04', title: 'Checked at real size', body: 'Thumbnails are tiny in the feed, so I check every design small the whole way through — not just full-screen.' },
]

function Statement() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="process" ref={ref} className="relative overflow-hidden border-y border-line bg-panel px-5 py-24 md:px-8 md:py-36">
      {/* faint animated veil for depth — dark burnt-orange, distinct from the contact aurora */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.4]">
        <Fx>
          <Aurora colorStops={['#3a1607', '#ff5c1c', '#3a1607']} amplitude={0.7} blend={0.4} speed={0.35} />
        </Fx>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-panel/75 via-panel/45 to-panel/75" />

      <div className="relative mx-auto max-w-6xl">
        <span data-reveal className="label-mono mb-8 block text-[10px] text-accent">The approach</span>
        <h2 data-reveal className="max-w-4xl text-3xl font-medium leading-[1.35] tracking-tight text-primary md:text-5xl md:leading-[1.3]">
          A thumbnail isn't there to look <span className="font-serif-display italic text-zinc-400">nice.</span> It's there to be the one people actually{' '}
          <span className="box-decoration-clone rounded-[3px] bg-accent px-2.5 py-0.5 font-bold text-black">click.</span>
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-4">
          {PRINCIPLES.map((p) => (
            <div key={p.n} data-reveal className="flex flex-col gap-3 border-t border-line pt-5">
              <span className="font-serif-display text-4xl italic text-accent">{p.n}</span>
              <h3 className="text-base font-bold text-primary">{p.title}</h3>
              <p className="text-[13px] leading-relaxed text-zinc-500">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================= RATES ================= */

function Rates() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="pricing" ref={ref} className="px-5 py-24 text-center md:px-8 md:py-40">
      <span data-reveal className="label-mono text-[10px] text-accent">Rates</span>
      <p data-reveal className="mx-auto mt-6 max-w-md text-2xl font-medium leading-snug text-primary md:text-3xl">
        Every thumbnail, <span className="font-serif-display italic text-zinc-400">one flat price.</span>
      </p>

      {/* the inverted price moment */}
      <div data-reveal className="mt-10 flex flex-col items-center">
        <span className="inline-block -rotate-2 rounded-md bg-accent px-6 py-2 text-[19vw] font-extrabold leading-none tracking-tight text-black md:px-10 md:text-[9rem]">
          {PRICE.range}
        </span>
        <span className="mt-5 font-serif-display text-2xl italic text-zinc-400 md:text-3xl">{PRICE.unit}</span>
      </div>

      <p data-reveal className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-zinc-500">{PRICE.tagline}</p>

      <div data-reveal className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2.5">
        {PRICE.features.map((f) => (
          <span key={f} className="rounded-full border border-line px-4 py-2 text-[11px] text-zinc-400 transition-colors duration-200 hover:border-accent/50 hover:text-primary">
            {f}
          </span>
        ))}
      </div>

      <p data-reveal className="label-mono mt-10 text-[9px] text-zinc-600">{PRICE.note}</p>
    </section>
  )
}

/* ================= FAQ ================= */

function Faq() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="faq" ref={ref} className="border-t border-line px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <span data-reveal className="label-mono text-[10px] text-accent">FAQ</span>
          <h2 data-reveal className="mt-5 text-4xl font-extrabold uppercase tracking-tight text-primary md:text-5xl">
            Good to<br /><span className="font-serif-display lowercase italic text-zinc-500">know.</span>
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          {FAQS.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-base font-bold text-primary transition-colors duration-200 hover:text-accent md:text-lg [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus size={16} className="shrink-0 text-zinc-600 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="pb-6 pr-8 text-sm leading-relaxed text-zinc-500">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================= CONTACT — Aurora finale ================= */

function Contact() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="contact" ref={ref} className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0 opacity-80">
        <Fx>
          <Aurora colorStops={['#ff5c1c', '#ff9d52', '#ff5c1c']} amplitude={0.9} blend={0.6} speed={0.6} />
        </Fx>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_45%,transparent_5%,rgba(10,10,10,0.6)_68%,#0a0a0a_100%)]" />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay" />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-5 py-28 text-center md:px-8">
        <Badge data-reveal className="mb-10 h-28 w-28" />
        <h2 data-reveal className="text-[17vw] font-extrabold uppercase leading-[0.82] tracking-[-0.04em] text-primary md:text-[12vw]">
          Let's<br />
          <span className="mt-2 inline-block -rotate-2 bg-accent px-5 pb-1 text-black md:px-8">talk.</span>
        </h2>
        <p data-reveal className="mt-8 max-w-sm text-sm leading-relaxed text-zinc-400">
          Got a video that needs a thumbnail? Message me on Discord and we'll sort out the details.
        </p>
        <a
          data-reveal
          href={SOCIALS.discord.href}
          className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-bold text-black transition-transform duration-300 hover:scale-[1.03]"
        >
          {SOCIALS.discord.handle} on Discord
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  )
}

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 md:px-8">
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <span className="text-sm font-extrabold tracking-tight text-primary">Asher</span>
        <span className="label-mono text-[9px] text-zinc-700">© {new Date().getFullYear()} · Gorilla Tag &amp; Roblox thumbnails · {SOCIALS.discord.handle}</span>
      </div>
    </footer>
  )
}

/* ================= APP ================= */

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-base font-sans text-primary">
      <TopBar />
      <Hero />
      <Work />
      <Statement />
      <Rates />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}
