import { useReveal } from '../hooks/useReveal'

export default function GitHub() {
  const ref = useReveal()

  return (
    <section id="github" className="py-10 px-6 pb-[90px] text-center">
      <div ref={ref} className="reveal max-w-[580px] mx-auto bg-[rgba(255,95,173,.04)] border border-border rounded-3xl py-[60px] px-11 backdrop-blur-[22px] relative overflow-hidden" style={{ animation: 'ghInnerPulse 4s infinite' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,45,149,.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="w-[58px] h-[58px] mx-auto mb-[18px] bg-card border border-border rounded-2xl flex items-center justify-center text-[1.75rem]" style={{ animation: 'ghIcoSpin 3s linear infinite' }}>
          🐙😍
        </div>
        <h2 className="font-orbitron text-[1.55rem] mb-2.5" style={{ animation: 'ghH2Rainbow 2s infinite' }}>
          🔥 Find Me on GitHub 🚀💯
        </h2>
        <p className="text-muted text-[.88rem] mb-[30px]">👨‍🏫 Device trees, kernel sources, and all the ROM work live here. 🎸🎉</p>
        <a
          href="https://github.com/MinitxT"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[10px] px-[36px] py-[13px] rounded-xl bg-gradient-to-br from-violet to-purple text-white no-decoration font-mono text-[.88rem] font-medium transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_18px_40px_rgba(224,23,125,.5)]"
          style={{ animation: 'ghBtnPulse 1s infinite' }}
        >
          🌟 github.com/Minit → 🔥
        </a>
      </div>
    </section>
  )
}
