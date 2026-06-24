import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Maintaining() {
  const ref = useReveal()
  const phoneRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    const phone = phoneRef.current
    if (!stage || !phone) return

    const onMove = (e: MouseEvent) => {
      const r = stage.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      phone.style.transform = `rotateY(${px * 22}deg) rotateX(${py * -22}deg)`
    }
    const onLeave = () => { phone.style.transform = '' }

    stage.addEventListener('mousemove', onMove)
    stage.addEventListener('mouseleave', onLeave)
    return () => {
      stage.removeEventListener('mousemove', onMove)
      stage.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section id="maintaining" className="px-6 pt-5 pb-[50px] max-w-[1080px] mx-auto">
      <div ref={ref} className="reveal sec-head text-center mb-12">
        <div className="font-mono text-[.72rem] text-purple tracking-[4px] uppercase mb-2.5" style={{ animation: 'secEyePulse 1s infinite' }}>
          // 🔥 build status 😍
        </div>
        <h2 className="sec-title font-orbitron text-[clamp(1.4rem,4vw,2.4rem)] font-bold bg-gradient-to-br from-text to-muted bg-clip-text text-transparent" style={{ animation: 'secTitleRainbow 3s infinite' }}>
          👨‍🏫 Currently Maintaining 📱🚀
        </h2>
      </div>

      <div ref={ref} className="reveal maint-wrap grid grid-cols-[300px_minmax(0,1fr)] gap-16 items-center max-md:grid-cols-1 max-md:gap-10">
        {/* Phone showcase */}
        <div ref={stageRef} className="phone-stage relative h-[480px] flex items-center justify-center perspective-[1100px] max-md:h-[380px]">
          <div className="absolute inset-x-0 bottom-[6%] h-[55%] bg-[image:linear-gradient(rgba(255,143,201,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,143,201,.08)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,.9))] pointer-events-none" style={{ transform: 'rotateX(62deg)' }} />
          <div className="absolute w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(255,45,149,.32)_0%,rgba(255,31,143,.14)_45%,transparent_72%)] blur-2xl pointer-events-none" style={{ animation: 'auraPulse 1s ease-in-out infinite' }} />
          <div className="absolute w-[160px] h-[340px] rounded-[74px] border border-[rgba(255,31,143,.35)] pointer-events-none" style={{ animation: 'ringPulse 1.2s cubic-bezier(.4,0,.3,1) infinite' }} />
          <div className="absolute w-[160px] h-[340px] rounded-[74px] border border-[rgba(255,45,149,.3)] pointer-events-none" style={{ animation: 'ringPulse 1.2s cubic-bezier(.4,0,.3,1) infinite .6s' }} />

          <div ref={phoneRef} className="relative w-[220px] h-[460px] max-md:w-[170px] max-md:h-[355px]" style={{ transformStyle: 'preserve-3d', animation: 'phoneFloat 1s ease-in-out infinite', transition: 'transform .15s ease-out', willChange: 'transform' }}>
            <svg className="phone-svg" viewBox="0 0 240 500" fill="none">
              <defs>
                <linearGradient id="phoneStroke" x1="0" y1="0" x2="240" y2="500" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#ffc2e0" />
                  <stop offset=".5" stopColor="#ff2d95" />
                  <stop offset="1" stopColor="#ff5fad" />
                </linearGradient>
              </defs>
              <rect x="10" y="8" width="220" height="484" rx="48" stroke="url(#phoneStroke)" strokeWidth="2.4" />
              <rect x="19" y="17" width="202" height="466" rx="40" stroke="#ff8fc9" strokeWidth="1" opacity=".28" />
              <circle cx="120" cy="34" r="4" className="p-front-cam" stroke="#ff8fc9" strokeWidth="1.2" opacity=".55" />
              <circle cx="120" cy="34" r="1.6" fill="#ff8fc9" opacity=".7" />
              <line x1="44" y1="24" x2="100" y2="24" stroke="#ff8fc9" strokeWidth="1.4" opacity=".35" />
              <line x1="150" y1="480" x2="196" y2="480" stroke="#ff8fc9" strokeWidth="1.4" opacity=".35" />
              <rect x="225" y="146" width="6" height="40" rx="3" className="p-btn" stroke="#ff1f8f" strokeWidth="1.4" />
              <rect x="225" y="196" width="6" height="58" rx="3" className="p-btn" stroke="#ff1f8f" strokeWidth="1.4" />
              <rect x="28" y="30" width="78" height="118" rx="20" className="p-island" stroke="#ff5fad" strokeWidth="1.8" />
              <circle cx="58" cy="64" r="21" className="p-lens" stroke="url(#phoneStroke)" strokeWidth="1.8" />
              <circle cx="58" cy="64" r="14" stroke="#ff1f8f" strokeWidth="1" opacity=".5" />
              <circle cx="58" cy="64" r="2.8" fill="#ff1f8f" className="p-dot" />
              <circle cx="58" cy="114" r="17" className="p-lens" stroke="url(#phoneStroke)" strokeWidth="1.8" />
              <circle cx="58" cy="114" r="11.5" stroke="#ff1f8f" strokeWidth="1" opacity=".5" />
              <circle cx="58" cy="114" r="2.4" fill="#ff1f8f" className="p-dot" />
              <circle cx="88" cy="89" r="6" className="p-flash" stroke="#ff8fc9" strokeWidth="1.4" />
              <text x="112" y="60" className="p-label">50MP</text>
              <line x1="112" y1="66" x2="134" y2="66" stroke="#ff8fc9" strokeWidth=".8" opacity=".4" />
              <text x="112" y="118" className="p-label">13MP</text>
              <line x1="112" y1="124" x2="134" y2="124" stroke="#ff8fc9" strokeWidth=".8" opacity=".4" />
              <g transform="translate(120,302)">
                <circle r="36" className="p-logobg" stroke="url(#phoneStroke)" strokeWidth="1.8" />
                <path d="M -18,-17 C -31,-3 -23,14 -3,19" stroke="#f1f5f9" strokeWidth="2.8" strokeLinecap="round" fill="none" opacity=".9" />
                <path d="M 18,-17 C 31,-3 23,14 3,19" stroke="#f1f5f9" strokeWidth="2.8" strokeLinecap="round" fill="none" opacity=".9" />
                <circle cx="0" cy="21" r="3.4" fill="#ff1f8f" className="p-dot" />
              </g>
              <rect x="108" y="476" width="24" height="4" rx="2" stroke="#ff8fc9" strokeWidth="1" opacity=".4" />
            </svg>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-[7px] px-4 py-[6px] rounded-full bg-[rgba(255,31,143,.1)] border border-[rgba(255,31,143,.4)] font-mono text-[.74rem] text-[#ffb3d9] backdrop-blur-lg" style={{ animation: 'phoneTagPulse 2s infinite' }}>
            <span className="w-[6px] h-[6px] rounded-full bg-glow" style={{ animation: 'ptDotBlink .3s infinite' }} />
            🔥 manaus 🚀
          </div>
        </div>

        {/* Info + Terminal */}
        <div className="min-w-0">
          <div className="flex items-center gap-[9px] mb-[18px] font-mono text-[.74rem] tracking-[2.5px] text-green" style={{ animation: 'statusBlink .5s infinite' }}>
            <span className="w-2 h-2 rounded-full bg-green" style={{ animation: 'pg .5s infinite' }} />
            🔥 ACTIVE DEVELOPMENT 😍
          </div>

          <h3 className="font-orbitron font-bold text-[clamp(1.3rem,3vw,1.9rem)] mb-[18px] leading-[1.3] text-text" style={{ animation: 'deviceGlow 1s infinite' }}>
            📱 manaus <span className="text-subtle mx-1" style={{ animation: 'sepBlink .3s infinite' }}>—</span> 🔥 Motorola Edge 40 Neo 💯
          </h3>

          <div className="flex gap-[10px] flex-wrap mb-[26px]">
            <span className="font-mono text-[.78rem] py-[7px] px-4 rounded-lg bg-purple/10 border border-purple/35 text-accent" style={{ animation: 'chipPulse 1s infinite' }}>😍 Android 16 🚀</span>
          </div>

          <div className="flex flex-wrap gap-[9px] mb-[30px]">
            {['👨‍🏫 Custom ROM Developer 🔥', '📱 Android 16 🎉', '⚡ OTA Supported 💖', '🌟 AOSP Based 💯', '🎓 Active Development 🚀', '🔥 Custom ROM 😍', '🎸 Kernel Hacker ⭐', '💫 Device Tree 🌈'].map((b) => (
              <span key={b} className="px-[15px] py-[7px] rounded-full font-mono text-[.7rem] text-muted border border-border bg-[rgba(255,95,173,.04)] transition-all duration-300 hover:text-[#ffb3d9] hover:border-glow hover:bg-[rgba(255,31,143,.1)] hover:shadow-[0_0_16px_rgba(255,31,143,.3)] hover:-translate-y-0.5" style={{ animation: 'mbadgeRainbow 4s infinite' }}>
                {b}
              </span>
            ))}
          </div>

          <BuildTerminal />
        </div>
      </div>
    </section>
  )
}

function BuildTerminal() {
  const bodyRef = useRef<HTMLPreElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  const LINES: [string, string][] = [
    ['cmd', 'repo init -u https://github.com/LineageOS/android.git -b lineage-23.2'],
    ['dim', 'Fetching manifest ... '],
    ['dim', 'almost done ✓'],
    ['ok', 'done ✓'],
    ['blank', ''],
    ['cmd', 'source build/envsetup.sh && lunch lineage_manaus-userdebug'],
    ['ok', '✓ 999 errors ✓'],
    ['dim', 'including device/motorola/manaus/AndroidProducts.mk'],
    ['tag', 'Moto Edge 40 Neo • Android 16 • '],
    ['ok', 'ready ✓'],
    ['blank', ''],
    ['cmd', 'mka bacon'],
    ['dim', '[kernel] compiling with Clang 26 + LTO ...'],
    ['dim', '[system] building Android 16 framework ...'],
    ['dim', '[vendor] patching Motorola blobs ...'],
    ['dim', '[vendor] patching Google blobs ...'],
    ['dim', '[vendor] patching patched blobs ...'],
    ['dim', '[vendor] patching patched patched boobs ...'],
    ['pink', '[rom] syncing LineageOS Android 16 sources ...'],
    ['pink', '[rom] generating OTA package ...'],
    ['pink', '[ota] signing official build ...'],
    ['blank', ''],
    ['tag', 'lineage-16.0-manaus.zip ready for flash ✓'],
    ['ok', '🔥 Custom ROM Developer Build ✓ 😍'],
  ]

  useEffect(() => {
    const body = bodyRef.current
    const wrap = wrapRef.current
    if (!body || !wrap) return

    function typeLine(li: number) {
      if (li >= LINES.length) {
        setTimeout(() => { started.current = false; body!.innerHTML = ''; typeLine(0) }, 3600)
        return
      }
      const [type, text] = LINES[li]
      if (type === 'blank') {
        body!.innerHTML += '\n'
        li++
        setTimeout(() => typeLine(li), 90)
        return
      }
      const span = document.createElement('span')
      span.className = 'c-' + (type === 'cmd' ? 'cmd' : type === 'ok' ? 'ok' : type === 'tag' ? 'tag' : type === 'pink' ? 'pink' : 'dim')
      body!.appendChild(span)
      const cursor = document.createElement('span')
      cursor.className = 'term-cursor'
      body!.appendChild(cursor)

      let ci = 0
      const speed = type === 'cmd' ? 26 : 10
      const iv = setInterval(() => {
        span.textContent += text[ci++]
        body!.scrollTop = body!.scrollHeight
        if (ci >= text.length) {
          clearInterval(iv)
          cursor.remove()
          body!.appendChild(document.createTextNode('\n'))
          li++
          setTimeout(() => typeLine(li), type === 'cmd' ? 260 : 70)
        }
      }, speed)
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true
          typeLine(0)
        }
      })
    }, { threshold: 0.35 })
    obs.observe(wrap)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={wrapRef} className="relative bg-card border border-border rounded-[14px] overflow-hidden" style={{ animation: 'termGlow 4s infinite' }}>
      <div className="absolute top-0 left-0 right-0 h-[2px] z-[1] bg-gradient-to-r from-pink via-purple to-glow opacity-75" />
      <div className="flex items-center gap-2 py-[11px] px-4 bg-[#0d0d0f] border-b border-border">
        <span className="w-[9px] h-[9px] rounded-full bg-[#f87171]" />
        <span className="w-[9px] h-[9px] rounded-full bg-[#fbbf24]" />
        <span className="w-[9px] h-[9px] rounded-full bg-[#34d399]" />
        <span className="ml-2 min-w-0 flex-1 font-mono text-[.7rem] text-subtle overflow-hidden text-ellipsis whitespace-nowrap">
          🔥 minit@aosp-build ~/android/lineage-16 <em className="text-accent not-italic">[manaus]</em> 😍
        </span>
      </div>
      <pre ref={bodyRef} className="term-body font-mono text-[.78rem] leading-[1.85] p-5 h-[250px] max-md:h-[210px] max-md:text-[.72rem] overflow-y-auto whitespace-pre-wrap break-words text-muted" />
      <div className="flex items-center justify-between py-[9px] px-[18px] border-t border-border bg-[#0d0d0f] font-mono text-[.62rem] tracking-[1.5px]">
        <span className="text-green flex items-center gap-[7px]">
          <span className="w-[6px] h-[6px] rounded-full bg-green" style={{ animation: 'pg .5s infinite' }} />
          🔥 ACTIVE · MANAUS 🚀
        </span>
        <span className="text-pink">👨‍🏫 KERNEL WORK 💯</span>
      </div>
    </div>
  )
}
