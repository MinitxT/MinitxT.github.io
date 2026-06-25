import { useState, useEffect } from 'react'

interface NavbarProps {
  navOpen: boolean
  setNavOpen: (v: boolean) => void
  currentView: 'home' | 'roms'
}

export default function Navbar({ navOpen, setNavOpen, currentView }: NavbarProps) {
  const [scrolled, setScrolled] = useState('')

  useEffect(() => {
    const secs = document.querySelectorAll('section[id]')
    const onScroll = () => {
      let cur = ''
      secs.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 120) cur = s.id
      })
      setScrolled(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: '🎓 About' },
    { href: '#maintaining', label: '📱 Maintaining' },
    { href: '#projects', label: '🚀 Projects' },
    { href: '#roms', label: '👾 ROMs' },
    { href: '#github', label: '🐙 GitHub' },
  ]

  return (
    <nav className="fixed top-[32px] inset-x-0 z-[200] flex items-center justify-between px-14 py-[18px] bg-black/75 backdrop-blur-[24px] border-b border-border" style={{ animation: 'navPulse 3s infinite' }}>
      <a href="#" className="font-orbitron text-[1.1rem] font-black tracking-[2px] bg-gradient-to-br from-accent via-purple to-pink bg-clip-text text-transparent no-underline" style={{ animation: 'logoRainbow 2s infinite' }}>
        😍 MINIT 🔥
      </a>

      <button
        className={`nav-toggle flex flex-col justify-center gap-[5px] w-[34px] h-[34px] bg-transparent border-none cursor-pointer p-0 z-[210] md:hidden ${navOpen ? 'open' : ''}`}
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle menu"
        aria-expanded={navOpen}
      >
        <span className={`block w-full h-[1.6px] bg-text transition-all duration-300 ${navOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
        <span className={`block w-full h-[1.6px] bg-text transition-all duration-300 ${navOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-full h-[1.6px] bg-text transition-all duration-300 ${navOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
      </button>

      <div className={`nav-links flex gap-9 max-md:fixed max-md:top-0 max-md:right-0 max-md:w-[min(72vw,280px)] max-md:h-screen max-md:bg-black/95 max-md:backdrop-blur-[24px] max-md:border-l max-md:border-border max-md:pt-[90px] max-md:px-2 max-md:pb-8 max-md:flex-col max-md:gap-0 max-md:transition-transform max-md:duration-[350ms] max-md:ease-[cubic-bezier(.4,0,.2,1)] ${navOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'}`}>
        {links.map((l) => {
          const isActive = l.href === '#roms' ? currentView === 'roms' : currentView === 'home' && scrolled === l.href.slice(1)
          return (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setNavOpen(false)}
              className="text-muted no-decoration font-mono text-[.8rem] tracking-[1px] relative transition-colors duration-300 hover:text-text hover:shadow-[0_0_10px_var(--color-purple)] max-md:py-4 max-md:px-5 max-md:border-b max-md:border-purple/10 max-md:text-[.85rem] max-md:[&::after]:hidden"
              style={isActive ? { color: '#ff2d95' } : undefined}
            >
              {l.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
