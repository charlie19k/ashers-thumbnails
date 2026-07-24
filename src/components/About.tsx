import { Crosshair, Layers, Eye, Sun, Palette, Heart, Fingerprint, Check } from 'lucide-react'
import { SectionHeader, useReveal, PrimaryButton } from './ui'

const PILLARS = [
  { icon: Crosshair, label: 'CTR' },
  { icon: Layers, label: 'Composition' },
  { icon: Eye, label: 'Readability' },
  { icon: Sun, label: 'Lighting' },
  { icon: Palette, label: 'Color' },
  { icon: Heart, label: 'Emotion' },
  { icon: Fingerprint, label: 'Branding' },
]

const POINTS = [
  'Designed around what actually gets clicked in your niche',
  'Built to stay readable at any size, on any device',
  'Consistent with your channel branding, video after video',
]

export default function About() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section id="about" ref={sectionRef} className="relative border-y border-white/[0.06] bg-panel/50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
        {/* Text column */}
        <div>
          <SectionHeader eyebrow="About" title="About Asher's Thumbnails" center={false} />
          <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-zinc-400 md:text-base">
            <p data-reveal>
              I specialize in one thing: Gorilla Tag and Roblox thumbnails that get clicked. I've worked with some of
              the biggest creators in both communities — including{' '}
              <span className="rounded-md bg-white/[0.06] px-1.5 py-0.5 text-zinc-500">[Creator Name]</span>,{' '}
              <span className="rounded-md bg-white/[0.06] px-1.5 py-0.5 text-zinc-500">[Creator Name]</span> and{' '}
              <span className="rounded-md bg-white/[0.06] px-1.5 py-0.5 text-zinc-500">[Creator Name]</span> — designing
              the first impression for videos seen by millions.
            </p>
            <p data-reveal>
              Every thumbnail is engineered, not decorated. It's built around CTR, composition, readability, lighting,
              color, emotion, and branding — so it doesn't just look good in a portfolio, it wins on the homepage next
              to a hundred competing videos.
            </p>
          </div>
          <ul className="mt-8 flex flex-col gap-3">
            {POINTS.map((point) => (
              <li key={point} data-reveal className="flex items-start gap-3 text-[15px] text-zinc-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <Check size={11} className="text-accent" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div data-reveal className="mt-10">
            <PrimaryButton href="#pricing">See Pricing</PrimaryButton>
          </div>
        </div>

        {/* Bento column */}
        <div className="grid grid-cols-2 gap-4">
          <div data-reveal className="card col-span-2 overflow-hidden !rounded-2xl">
            <img
              src="https://picsum.photos/seed/asher-about/1200/675"
              alt="Placeholder — recent thumbnail work"
              loading="lazy"
              className="aspect-video w-full object-cover"
            />
          </div>
          <div data-reveal className="card flex flex-col justify-between gap-8 p-6">
            <span className="label-mono text-zinc-500">Focus</span>
            <div>
              <p className="text-3xl font-bold tracking-tight text-primary">2</p>
              <p className="mt-1 text-sm text-zinc-400">Games. Gorilla Tag & Roblox — nothing else, mastered.</p>
            </div>
          </div>
          <div data-reveal className="card flex flex-col justify-between gap-8 p-6">
            <span className="label-mono text-zinc-500">Delivery</span>
            <div>
              <p className="text-3xl font-bold tracking-tight text-primary">24–48h</p>
              <p className="mt-1 text-sm text-zinc-400">Typical turnaround from brief to final file.</p>
            </div>
          </div>
          <div data-reveal className="card col-span-2 p-6">
            <span className="label-mono text-zinc-500">Every thumbnail is built on</span>
            <div className="mt-4 flex flex-wrap gap-2">
              {PILLARS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-300"
                >
                  <Icon size={12} className="text-accent" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
