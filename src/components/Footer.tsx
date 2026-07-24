import { MessageCircle, Mail } from 'lucide-react'
import { NAV_LINKS, SOCIALS } from '../content'
import { XIcon } from './icons'
import { LogoMark } from './LogoMark'

const SOCIAL_ICONS = [
  { icon: MessageCircle, href: SOCIALS.discord.href, label: 'Discord' },
  { icon: Mail, href: SOCIALS.email.href, label: 'Email' },
  { icon: XIcon, href: SOCIALS.twitter.href, label: 'Twitter / X' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06]">
      {/* oversized outline wordmark peeking from the bottom edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none whitespace-nowrap text-center font-serif-display text-[clamp(90px,16vw,240px)] italic leading-[0.72] text-transparent"
        style={{ WebkitTextStroke: '1px rgba(225,224,204,0.12)', transform: 'translateY(28%)' }}
      >
        Asher's Thumbnails
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-12 md:flex-row md:justify-between md:gap-6">
        <a href="#" className="flex items-center gap-2.5">
          <LogoMark className="h-4 w-auto" />
          <span className="text-sm font-semibold tracking-tight text-primary">
            Asher's <span className="text-zinc-500">Thumbnails</span>
          </span>
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] font-medium text-zinc-500 transition-colors duration-200 hover:text-primary"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-zinc-400 transition-all duration-200 hover:border-white/25 hover:text-primary"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
      <p className="border-t border-white/[0.04] py-6 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Asher's Thumbnails · Premium Gorilla Tag & Roblox thumbnail design
      </p>
    </footer>
  )
}
