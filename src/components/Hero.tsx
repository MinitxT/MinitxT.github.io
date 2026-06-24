import { useEffect, useState } from 'react'

export default function Hero() {
  const [eyebrow, setEyebrow] = useState('')

  useEffect(() => {
    const TXT = '// 🔥 HEY THERE :D 😍'
    let ti = 0
    const timeout = setTimeout(() => {
      const iv = setInterval(() => {
        setEyebrow((prev) => prev + TXT[ti++])
        if (ti >= TXT.length) clearInterval(iv)
      }, 78)
    }, 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-6 pt-[110px] pb-[60px] relative">
      <div className="max-w-[820px]">
        <div
          className="font-mono text-[.85rem] text-purple tracking-[4px] uppercase mb-[22px] min-h-[1.2em]"
          style={{ animation: 'fadeUp .8s .2s forwards, eyebrowBlink .3s infinite' }}
        >
          {eyebrow}
        </div>

        <h1
          className="font-orbitron text-[clamp(3.2rem,11vw,7.5rem)] font-black leading-none mb-[22px]"
          style={{ animation: 'fadeUp .8s .45s forwards, nameShake .1s infinite, glitchText 3s infinite' }}
        >
          <span
            className="name-inner bg-gradient-to-br from-[#ffc2e0] via-purple to-pink bg-clip-text text-transparent relative inline-block"
            data-text="🔥 MINIT 🔥"
            style={{ animation: 'nameGlow 1s infinite', color: '#fff' }}
          >
            🔥 MINIT 🔥
          </span>
        </h1>

        <p
          className="text-[clamp(.95rem,2.5vw,1.25rem)] text-muted mb-[38px] font-light"
          style={{ animation: 'fadeUp .8s .7s forwards, taglineBounce .5s infinite, neonFlash 1.5s infinite' }}
        >
          <span className="text-purple font-medium" style={{ textShadow: '0 0 15px var(--color-purple), 0 0 30px var(--color-purple)' }}>😍 CUSTOM ROM Developer 👨‍🏫</span> &amp; 🌈 WEB DESIGNER 🚀
        </p>

        <div
          className="flex gap-[10px] justify-center flex-wrap"
          style={{ animation: 'fadeUp .8s .9s forwards, badgesRainbow 3s infinite' }}
        >
          {[
            '📱😍 AOSP 🔥',
            '🔧👨‍🏫 Custom ROMs 💯',
            '⚡🚀 Android 16 🎉',
            '🎓🥺 Student 💖',
            '🌟 LineageOS ⭐',
            '🎸 Moto Edge 💪',
          ].map((b) => (
            <span
              key={b}
              className="px-[7px] py-[7px] border border-border rounded-full text-[.78rem] font-mono text-muted bg-[rgba(255,95,173,.04)] backdrop-blur-[10px] transition-all duration-300"
              style={{ animation: 'badgePulse 1s infinite' }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-7 left-1/2"
        style={{ animation: 'fadeUp .8s 1.3s forwards, scrollHintBounce .5s infinite' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[.65rem] tracking-[3px]" style={{ animation: 'scrollTextRainbow 2s infinite' }}>⬇️ SCROLL DOWN ⬇️</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  )
}
