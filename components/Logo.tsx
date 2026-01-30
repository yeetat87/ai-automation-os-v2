export function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40" height="40">
      <circle cx="25" cy="25" r="22" fill="#1a4a8a"/>
      <ellipse cx="25" cy="25" rx="27" ry="8" fill="none" stroke="white" strokeWidth="1.8" transform="rotate(-35 25 25)"/>
      <ellipse cx="25" cy="25" rx="25" ry="7" fill="none" stroke="white" strokeWidth="1.8" transform="rotate(40 25 25)"/>
      <path d="M20,11 L21,17.5 L20,24 L22,19 L28,20 L22,19 L23,13 L21,17.5 Z" fill="white"/>
    </svg>
  )
}

export function LogoFooter() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32" height="32">
      <circle cx="25" cy="25" r="22" fill="#1a4a8a"/>
      <ellipse cx="25" cy="25" rx="27" ry="8" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" transform="rotate(-35 25 25)"/>
      <ellipse cx="25" cy="25" rx="25" ry="7" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" transform="rotate(40 25 25)"/>
      <path d="M20,11 L21,17.5 L20,24 L22,19 L28,20 L22,19 L23,13 L21,17.5 Z" fill="white"/>
    </svg>
  )
}
