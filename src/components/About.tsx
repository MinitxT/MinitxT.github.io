import { useReveal } from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="px-6 pt-[60px] pb-[40px] max-w-[860px] mx-auto">
      <div ref={ref} className="reveal about-wrap flex items-center gap-14 bg-[rgba(255,95,173,.04)] border border-border rounded-3xl p-12 backdrop-blur-[22px] relative overflow-hidden max-md:flex-col max-md:text-center max-md:p-[34px_24px] max-md:gap-[34px]" style={{ animation: 'aboutWrapGlow 4s infinite' }}>
        <div className="absolute -top-[60%] -left-[40%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_40%_40%,rgba(255,45,149,.06)_0%,transparent_60%)] pointer-events-none" style={{ animation: 'aboutBgPulse 3s infinite' }} />

        <div className="relative shrink-0 w-[150px] h-[150px]">
          <div className="absolute rounded-full border border-[rgba(255,45,149,.65)] pointer-events-none" style={{ inset: '-13px', animation: 'breath .8s ease-in-out infinite' }} />
          <div className="absolute rounded-full border border-[rgba(255,45,149,.3)] pointer-events-none" style={{ inset: '-28px', animation: 'breath .8s ease-in-out infinite .2s' }} />
          <div className="absolute rounded-full border border-[rgba(255,95,173,.18)] pointer-events-none" style={{ inset: '-44px', animation: 'breath .8s ease-in-out infinite .4s' }} />
          <div
            id="profImg"
            className="w-[150px] h-[150px] rounded-full bg-gradient-to-br from-violet to-pink flex items-center justify-center font-orbitron text-[1.9rem] font-black text-white relative z-[1] overflow-hidden"
            style={{ animation: 'profImgSpin 2s linear infinite' }}
          >
            MT
          </div>
        </div>

        <div className="about-text min-w-0">
          <h2 className="font-orbitron text-[1.45rem] mb-3.5 bg-gradient-to-br from-text to-purple bg-clip-text text-transparent" style={{ animation: 'aboutH2Pulse 1s infinite' }}>
            🎓😍 About Me 🔥💯
          </h2>
          <h3 className="font-bold text-purple mb-4">
            <em>🔥 Understanding How Things Works is My Favorite Hobby 💖</em>
          </h3>
          <p className="text-muted leading-[1.75] text-[.93rem] mb-5">
            Hey, I'm <em className="text-purple not-italic">😍 Minit 🔥</em> — a 🥺 16-year-old student 🎓 with a real passion 💖 for understanding
            how things like <em className="text-purple not-italic">🔥 AOSP 😍</em> and <em className="text-purple not-italic">🚀 Android ⚡</em> actually work under the hood. What
            started as plain curiosity turned into late nights inside the AOSP source tree,
            picking apart device trees, and chasing build errors that take way too long to figure
            out. I build everything on a remote server PC, since compiling AOSP from scratch needs
            more power than my own laptop can handle. I'm not doing any of this for clout or money —
            I genuinely just enjoy learning how it all fits together. Purely for fun. 🎸🎉
          </p>
          <div className="flex gap-2 flex-wrap max-md:justify-center">
            {['🎓 16-year-old Student 🥺', '🔥 AOSP Builder 💯', '👨‍🏫 ROM Dev 🚀', '📱 Moto Manaus 🌟', '⚡ Custom ROMs 💖'].map((t) => (
              <span key={t} className="px-[5px] py-[5px] rounded-full bg-purple/10 border border-purple/30 text-[.72rem] text-purple font-mono" style={{ animation: 'tagBounce .5s infinite' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
