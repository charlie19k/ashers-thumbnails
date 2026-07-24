// ---------------------------------------------------------------------------
// EDIT THIS FILE TO REPLACE ALL PLACEHOLDER CONTENT.
// Swap image URLs, creator names, testimonials, pricing and contact links here
// without touching any component code.
// ---------------------------------------------------------------------------

export const NAV_LINKS = ['Work', 'Process', 'Pricing', 'About', 'FAQ', 'Contact']

export type Game = 'Gorilla Tag' | 'Roblox'

export interface Thumbnail {
  title: string
  creator: string // placeholder — replace with the real creator's name
  game: Game
  image: string // placeholder — replace with your real thumbnail (1280x720)
  views: string
}

export const THUMBNAILS: Thumbnail[] = [
  { title: 'VERITY.EXE', creator: 'VERITY.EXE', game: 'Gorilla Tag', image: '/work/verity-exe.png', views: '' },
  { title: 'TRYPOPHOBIA.EXE', creator: 'TRYPOPHOBIA.EXE', game: 'Gorilla Tag', image: '/work/bh-06.webp', views: '' },
  { title: 'Blood 67', creator: 'Blood 67', game: 'Roblox', image: '/work/bh-05.webp', views: '' },
  { title: 'Sleeping Monkey', creator: 'Sleeping Monkey', game: 'Gorilla Tag', image: '/work/bh-08.webp', views: '' },
  { title: 'Finds Your Address', creator: 'Finds Your Address', game: 'Gorilla Tag', image: '/work/bh-09.webp', views: '' },
  { title: 'Banned For Walking', creator: 'Banned For Walking', game: 'Gorilla Tag', image: '/work/bh-10.webp', views: '' },
  { title: 'The Jester', creator: 'The Jester', game: 'Gorilla Tag', image: '/work/bh-07.webp', views: '' },
  { title: 'Red Eyes', creator: 'Red Eyes', game: 'Gorilla Tag', image: '/work/bh-04.webp', views: '' },
]

export interface Creator {
  name: string // placeholder
  subs: string // placeholder
  avatar: string // placeholder — replace with the creator's avatar
  game: Game
}

export const CREATORS: Creator[] = [
  { name: 'Creator Name', subs: '0.0M subscribers', avatar: 'https://picsum.photos/seed/creator-a/200/200', game: 'Gorilla Tag' },
  { name: 'Creator Name', subs: '0.0M subscribers', avatar: 'https://picsum.photos/seed/creator-b/200/200', game: 'Roblox' },
  { name: 'Creator Name', subs: '0.0M subscribers', avatar: 'https://picsum.photos/seed/creator-c/200/200', game: 'Gorilla Tag' },
  { name: 'Creator Name', subs: '0.0M subscribers', avatar: 'https://picsum.photos/seed/creator-d/200/200', game: 'Roblox' },
  { name: 'Creator Name', subs: '0.0M subscribers', avatar: 'https://picsum.photos/seed/creator-e/200/200', game: 'Gorilla Tag' },
  { name: 'Creator Name', subs: '0.0M subscribers', avatar: 'https://picsum.photos/seed/creator-f/200/200', game: 'Roblox' },
]

export interface Stat {
  value: number
  suffix: string
  label: string
  sub: string
}

export const STATS: Stat[] = [
  { value: 100, suffix: '+', label: 'Thumbnails Created', sub: 'And counting, every single week' },
  { value: 50, suffix: 'M+', label: 'Combined Views', sub: 'Driven by thumbnails I designed' },
  { value: 20, suffix: '+', label: 'Top Creators', sub: 'The biggest names in Gorilla Tag & Roblox' },
  { value: 24, suffix: 'h', label: 'Fast Turnaround', sub: 'Most orders delivered within a day' },
]

export interface Testimonial {
  quote: string // placeholder review
  name: string // placeholder creator name
  role: string
  avatar: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Placeholder review — this is where a real quote from one of the biggest Gorilla Tag creators will go. Something about CTR doubling overnight.',
    name: 'Creator Name',
    role: 'Gorilla Tag Creator · 0.0M subs',
    avatar: 'https://picsum.photos/seed/testi-a/120/120',
  },
  {
    quote: 'Placeholder review — a real testimonial from a top Roblox creator will be inserted here. Something about thumbnails that finally match the content.',
    name: 'Creator Name',
    role: 'Roblox Creator · 0.0M subs',
    avatar: 'https://picsum.photos/seed/testi-b/120/120',
  },
  {
    quote: 'Placeholder review — this spot is reserved for a creator quote about turnaround speed, communication, and results on their channel.',
    name: 'Creator Name',
    role: 'Gorilla Tag Creator · 0.0M subs',
    avatar: 'https://picsum.photos/seed/testi-c/120/120',
  },
]

export interface Price {
  range: string
  unit: string
  tagline: string
  note: string
  features: string[]
}

export const PRICE: Price = {
  range: '$15–25',
  unit: 'per thumbnail',
  tagline: 'One flat price. Where it lands in the range depends on how complex the scene is.',
  note: 'Ordered through Discord — payment details shared before work starts.',
  features: [
    '1 custom thumbnail, built for your video',
    'Full HD 1280×720 PNG delivery',
    'Revisions until it feels right',
    'Fast turnaround',
    'CTR-focused composition',
  ],
}

export interface Faq {
  q: string
  a: string
}

export const FAQS: Faq[] = [
  {
    q: 'How much does a thumbnail cost?',
    a: 'Every thumbnail is $15–25. Where it lands in that range depends on how complex the scene is — simple compositions sit at the lower end, heavy custom scenes at the upper end. You always get the exact price before I start.',
  },
  {
    q: 'How fast is your turnaround?',
    a: 'Most thumbnails are delivered within 24–48 hours, and I always communicate timelines up front before starting an order.',
  },
  {
    q: 'Do you offer revisions?',
    a: "Yes. Revisions are included with every order — I'll keep adjusting until you're happy with it.",
  },
  {
    q: 'How does payment work?',
    a: 'Payment is handled before work begins, with details shared when you place your order through Discord. Larger or recurring orders can be split into milestones.',
  },
  {
    q: 'How do I receive my files?',
    a: 'You get a high-resolution 1280×720 PNG optimized for YouTube, delivered through Discord or email.',
  },
  {
    q: 'Can you match my channel’s existing style?',
    a: 'Absolutely. I study your channel, your niche and your best-performing videos, then design around your branding so every thumbnail feels unmistakably yours.',
  },
]

// Replace these with your real handles / links.
export const SOCIALS = {
  discord: { label: 'Discord', handle: '@asher.p', href: '#' },
  email: { label: 'Email', handle: 'hello@example.com', href: 'mailto:hello@example.com' },
  twitter: { label: 'Twitter / X', handle: '@yourhandle', href: '#' },
}
