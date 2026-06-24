import { useEffect, useRef } from 'react'

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis') }) },
      { threshold: 0.1 }
    )
    if (headerRef.current) obs.observe(headerRef.current)
    if (cardRef.current) obs.observe(cardRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" className="px-6 pt-5 pb-20 max-w-[980px] mx-auto">
      <div ref={headerRef} className="reveal text-center mb-12">
        <div className="font-mono text-[.72rem] text-purple tracking-[4px] uppercase mb-2.5" style={{ animation: 'secEyePulse 1s infinite' }}>
          // 🔥 my builds 😍
        </div>
        <h2 className="font-orbitron text-[clamp(1.4rem,4vw,2.4rem)] font-bold bg-gradient-to-br from-text to-muted bg-clip-text text-transparent" style={{ animation: 'secTitleRainbow 3s infinite' }}>
          🚀 Projects 💯🔥
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-[22px] max-md:grid-cols-1">
        <a ref={cardRef} href="roms.html" className="reveal pcard block bg-card border border-border rounded-[20px] p-[34px] relative overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(.4,0,.2,1)] no-underline text-inherit hover:-translate-y-[7px] hover:border-[rgba(255,45,149,.42)] hover:shadow-[0_22px_60px_rgba(255,45,149,.14)]" style={{ animation: 'pcardFloat 4s ease-in-out infinite' }}>
          <div className="absolute top-0 right-0 px-4 py-[5px] font-mono text-[.62rem] tracking-[1px] rounded-bl-xl rounded-tr-[20px] bg-[rgba(16,185,129,.15)] text-green border-b border-l border-[rgba(16,185,129,.3)]" style={{ animation: 'cornerTagPulse 1s infinite' }}>
            🔥 OPEN 😍
          </div>
          <div className="flex items-center gap-2 mb-[22px]">
            <div className="w-2 h-2 rounded-full bg-green" style={{ animation: 'pg .5s infinite' }} />
            <span className="font-mono text-[.68rem] tracking-[2px] uppercase text-green">👨‍🏫 LINEAGEOS BASED 🚀</span>
          </div>
          <h3 className="font-orbitron text-[1.35rem] font-bold mb-1.5 text-text" style={{ animation: 'pcardH3Glow 1s infinite' }}>
            😍 LineageOS for Moto Edge 40 Neo 🔥
          </h3>
          <div className="font-mono text-[.78rem] text-purple mb-1">📱 Motorola Edge 40 Neo 💯</div>
          <p className="text-muted text-[.88rem] leading-[1.65] mb-[22px]">
            A 🔥 LineageOS based 🎉 custom ROM running 😍 Android 16 🚀, built from source for the
            Moto Edge 40 Neo. Click view to check it out and grab the latest build. 💖⭐
          </p>
          <span className="inline-flex items-center gap-2 px-5 py-[9px] border border-[rgba(255,45,149,.4)] rounded-[10px] bg-[rgba(255,45,149,.08)] text-purple font-mono text-[.78rem] transition-all duration-300 hover:bg-purple/18 hover:text-text" style={{ animation: 'plinkPulse 1s infinite' }}>
            🔥 View → 🚀
          </span>
        </a>
      </div>
    </section>
  )
}
