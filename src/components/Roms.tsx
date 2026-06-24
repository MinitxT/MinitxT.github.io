import React, { useState, useEffect } from 'react'
import GitHub from './GitHub'

export default function Roms() {
  const [eyebrow, setEyebrow] = useState('')
  const [dlRomState, setDlRomState] = useState<Record<string, string>>({})
  const [dlImgState, setDlImgState] = useState<Record<string, string>>({})

  useEffect(() => {
    const text = '// Unofficial builds'
    let ti = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (ti < text.length) {
          setEyebrow((prev) => prev + text[ti])
          ti++
        } else {
          clearInterval(interval)
        }
      }, 78)
      return () => clearInterval(interval)
    }, 350)
    return () => clearTimeout(timeout)
  }, [])

  const handleDownload = (e: React.MouseEvent, romName: string, type: 'rom' | 'img') => {
    e.preventDefault()
    const stateSetter = type === 'rom' ? setDlRomState : setDlImgState
    const currentState = type === 'rom' ? dlRomState : dlImgState

    if (currentState[romName]) return

    stateSetter(prev => ({ ...prev, [romName]: type === 'rom' ? 'Preparing download…' : 'Preparing .img…' }))

    setTimeout(() => {
      stateSetter(prev => ({ ...prev, [romName]: 'Build not uploaded yet' }))
      setTimeout(() => {
        stateSetter(prev => {
          const updated = { ...prev }
          delete updated[romName]
          return updated
        })
      }, 1800)
    }, 900)
  }

  return (
    <div className="reveal vis">
      {/* ══ ROMS HERO ══ */}
      <section id="romsHero">
        <a href="#" className="back-pill">
          ← Back to Portfolio
        </a>
        <div className="hero-eyebrow" id="eyebrow">
          {eyebrow}
        </div>
        <h1 className="hero-name">
          <span className="name-inner" data-text="ROM Vault">
            ROM Vault
          </span>
        </h1>
        <p className="hero-tagline">
          <span className="hl">Custom AOSP builds</span> for the Moto Edge 40 Neo
        </p>
        <div className="hero-badges">
          <span className="badge">📱 manaus</span>
          <span className="badge">⚡ Android 16</span>
          <span className="badge">🔓 OTA Supported</span>
          <span className="badge">🐙 Built from source</span>
        </div>
      </section>

      {/* divider */}
      <div className="divider">
        <div className="div-line" />
        <div className="div-dot" />
        <div className="div-line" />
      </div>

      {/* ══ ROMS ══ */}
      <section id="roms">
        <div className="sec-head text-center mb-12">
          <div className="font-mono text-[.72rem] text-purple tracking-[4px] uppercase mb-2.5">// download center</div>
          <h2 className="sec-title font-orbitron text-[clamp(1.4rem,4vw,2.4rem)] font-bold bg-gradient-to-br from-text to-muted bg-clip-text text-transparent">Available ROMs</h2>
          <p className="text-muted text-[.88rem] mt-2.5 max-w-[480px] mx-auto leading-relaxed">
            Every build is compiled from source for the Moto Edge 40 Neo. Pick a ROM below to download.
          </p>
        </div>

        <div className="rom-grid">
          {/* LineageOS */}
          <div className="rom-card cr">
            <div className="corner-tag live">ACTIVE</div>

            <div className="rom-logo cr">
              <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="crGrad" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#ffc2e0" />
                    <stop offset=".5" stopColor="#ff2d95" />
                    <stop offset="1" stopColor="#ff5fad" />
                  </linearGradient>
                </defs>
                <circle cx="30" cy="30" r="27" fill="rgba(255,45,149,.07)" stroke="url(#crGrad)" strokeWidth="1.6" />
                <path
                  d="M30,14 C22,14 16,20 16,28 C16,34 19,37 22,40 L22,46 L38,46 L38,40 C41,37 44,34 44,28 C44,20 38,14 30,14 Z"
                  stroke="#fff3f8"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity=".92"
                />
                <line x1="24" y1="46" x2="24" y2="49" stroke="#ff1f8f" strokeWidth="2.6" strokeLinecap="round" />
                <line x1="36" y1="46" x2="36" y2="49" stroke="#ff1f8f" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </div>

            <div className="rom-info">
              <div className="rom-name-row">
                <h3>LineageOS</h3>
                <span className="sdot live" />
                <span className="slabel live">Initial</span>
              </div>
              <div className="rom-meta">Android 16 · manaus</div>
              <p className="rom-desc">
                A LineageOS based AOSP build focused on a clean, stock-like feel with
                solid day-to-day performance and OTA updates — built from source for the Edge 40 Neo.
              </p>
              <div className="chips">
                <span className="chip a">Android 16</span>
                <span className="chip r">OTA</span>
                <span className="chip s">GApps Included</span>
              </div>
            </div>

            <div className="rom-actions">
              <a
                href="#"
                onClick={(e) => handleDownload(e, 'lineage', 'rom')}
                className="act-btn primary"
              >
                {dlRomState['lineage'] || '⬇ Download ROM'}
              </a>
              <a
                href="#"
                onClick={(e) => handleDownload(e, 'lineage', 'img')}
                className="act-btn secondary"
              >
                {dlImgState['lineage'] || '📦 Download .img file'}
              </a>
              <a href="#" className="act-btn guide" onClick={(e) => e.preventDefault()}>
                📖 Installation Guide
              </a>
            </div>
          </div>

          {/* Evolution X */}
          <div className="rom-card evox">
            <div className="corner-tag live">SOON</div>

            <div className="rom-logo evox">
              <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="evoGrad" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#ffc2e0" />
                    <stop offset=".5" stopColor="#ff5fad" />
                    <stop offset="1" stopColor="#e0177d" />
                  </linearGradient>
                </defs>
                <circle cx="30" cy="30" r="27" fill="rgba(255,95,173,.07)" stroke="url(#evoGrad)" strokeWidth="1.6" />
                <path d="M18,18 L42,42" stroke="url(#evoGrad)" strokeWidth="5" strokeLinecap="round" />
                <path d="M42,18 L18,42" stroke="url(#evoGrad)" strokeWidth="5" strokeLinecap="round" />
                <circle cx="30" cy="30" r="3" fill="#f1f5f9" />
              </svg>
            </div>

            <div className="rom-info">
              <div className="rom-name-row">
                <h3>Evolution X</h3>
                <span className="sdot live" />
                <span className="slabel live">stable</span>
              </div>
              <div className="rom-meta">Android 16 · manaus</div>
              <p className="rom-desc">
                A Pixel-inspired custom ROM built on a clean AOSP foundation — stock-like feel with extra
                customization on top.
              </p>
              <div className="chips">
                <span className="chip c">Android 16</span>
                <span className="chip r">Pixel UI</span>
                <span className="chip s">Vanilla Option</span>
              </div>
            </div>

            <div className="rom-actions">
              <a
                href="#"
                onClick={(e) => handleDownload(e, 'evox', 'rom')}
                className="act-btn primary"
              >
                {dlRomState['evox'] || '⬇ Download ROM'}
              </a>
              <a
                href="#"
                onClick={(e) => handleDownload(e, 'evox', 'img')}
                className="act-btn secondary"
              >
                {dlImgState['evox'] || '📦 Download .img file'}
              </a>
              <a href="#" className="act-btn guide" onClick={(e) => e.preventDefault()}>
                📖 Installation Guide
              </a>
            </div>
          </div>

          {/* More builds (upcoming) */}
          <div className="rom-card more">
            <div className="corner-tag upcoming">UPCOMING</div>

            <div className="rom-logo more">
              <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="30"
                  cy="30"
                  r="27"
                  fill="rgba(255,95,173,.06)"
                  stroke="rgba(255,95,173,.4)"
                  strokeWidth="1.6"
                  strokeDasharray="4 5"
                />
                <line x1="30" y1="18" x2="30" y2="42" stroke="#ff5fad" strokeWidth="3.4" strokeLinecap="round" />
                <line x1="18" y1="30" x2="42" y2="30" stroke="#ff5fad" strokeWidth="3.4" strokeLinecap="round" />
              </svg>
            </div>

            <div className="rom-info">
              <div className="rom-name-row">
                <h3>More Builds</h3>
                <span className="sdot upcoming" />
                <span className="slabel upcoming">in progress</span>
              </div>
              <div className="rom-meta">manaus · TBA</div>
              <p className="rom-desc">
                Always experimenting with new builds for the Edge 40 Neo. This space will grow — watch the GitHub
                repo to get notified the moment a new ROM ships.
              </p>
            </div>

            <div className="rom-actions">
              <a href="https://github.com/Minit" target="_blank" rel="noopener noreferrer" className="act-btn ghost">
                👀 Watch on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="divider">
        <div className="div-line" />
        <div className="div-dot" />
        <div className="div-line" />
      </div>

      {/* ══ GITHUB ══ */}
      <GitHub />
    </div>
  )
}
