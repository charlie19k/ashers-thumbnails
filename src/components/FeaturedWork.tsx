import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { X, ArrowUpRight } from 'lucide-react'
import { THUMBNAILS } from '../content'
import type { Thumbnail } from '../content'
import { SectionHeader, useReveal } from './ui'

function TiltCard({ thumb, onOpen }: { thumb: Thumbnail; onOpen: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const rx = gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power3.out' })
    const ry = gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power3.out' })

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      ry(px * 5)
      rx(-py * 5)
    }
    const onLeave = () => {
      rx(0)
      ry(0)
    }
    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
    return () => {
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div data-reveal className="[perspective:1000px]">
      <div
        ref={cardRef}
        onClick={onOpen}
        className="thumb-card card group cursor-pointer overflow-hidden !rounded-2xl p-2.5"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={thumb.image}
            alt={`${thumb.title} — thumbnail for ${thumb.creator}`}
            loading="lazy"
            className="thumb-img aspect-video w-full object-cover"
          />
          <span className="label-mono absolute left-3 top-3 rounded-md bg-black/60 px-2 py-1 text-[9px] text-primary/80 backdrop-blur-sm">
            {thumb.game}
          </span>
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-black">
              Preview
              <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between px-2 pb-1.5 pt-3.5">
          <div>
            <p className="text-sm font-semibold text-primary">{thumb.creator}</p>
            <p className="mt-0.5 text-xs text-zinc-500">{thumb.views}</p>
          </div>
          <span className="label-mono text-[9px] text-zinc-600">{String(THUMBNAILS.indexOf(thumb) + 1).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  )
}

function Lightbox({ thumb, onClose }: { thumb: Thumbnail; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' })
    gsap.fromTo(
      panelRef.current,
      { opacity: 0, scale: 0.95, y: 24 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'expo.out' }
    )
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const close = () => {
    gsap.to(panelRef.current, { opacity: 0, scale: 0.96, y: 16, duration: 0.25, ease: 'power2.in' })
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: onClose })
  }

  return (
    <div
      ref={overlayRef}
      onClick={close}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
    >
      <div ref={panelRef} onClick={(e) => e.stopPropagation()} className="w-full max-w-4xl">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-panel p-2.5">
          <img src={thumb.image} alt={thumb.title} className="w-full rounded-xl" />
          <div className="flex items-center justify-between px-3 py-3.5">
            <div>
              <p className="text-sm font-semibold text-primary">{thumb.creator}</p>
              <p className="label-mono mt-1 text-[10px] text-zinc-500">
                {thumb.game} · {thumb.views}
              </p>
            </div>
            <button
              onClick={close}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-primary transition-colors hover:bg-white/[0.06]"
              aria-label="Close preview"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeaturedWork() {
  const sectionRef = useReveal<HTMLElement>()
  const [active, setActive] = useState<Thumbnail | null>(null)

  return (
    <section id="portfolio" ref={sectionRef} className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionHeader
        eyebrow="Featured Work"
        title="Featured Work"
        subtitle="A collection of thumbnails I've designed for some of the biggest Gorilla Tag and Roblox creators."
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {THUMBNAILS.map((thumb, i) => (
          <TiltCard key={i} thumb={thumb} onOpen={() => setActive(thumb)} />
        ))}
      </div>
      {active && <Lightbox thumb={active} onClose={() => setActive(null)} />}
    </section>
  )
}
