export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      width="44"
      height="26"
      viewBox="0 0 44 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Asher's Thumbnails logo"
      className={className}
    >
      <rect x="0" y="3" width="14" height="20" rx="3" fill="#dedbc8" />
      <rect x="16" y="3" width="12" height="20" rx="3" fill="#e1e0cc" />
      <rect x="30" y="3" width="14" height="20" rx="3" fill="#e1e0cc" fillOpacity="0.35" />
    </svg>
  )
}
