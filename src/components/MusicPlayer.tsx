import { useRef, useState, useCallback } from 'react'

const CHORDS = [
  [174.61, 220.00, 261.63, 349.23],
  [220.00, 261.63, 329.63, 440.00],
  [196.00, 246.94, 293.66, 392.00],
  [164.81, 207.65, 246.94, 329.63],
]

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const [subtitle, setSubtitle] = useState('🎶 click to play 🎉')
  const audioRef = useRef<{
    ctx: AudioContext | null
    master: GainNode | null
    timer: ReturnType<typeof setInterval> | null
    oscs: { osc: OscillatorNode; gain: GainNode }[]
    chordIdx: number
  }>({
    ctx: null,
    master: null,
    timer: null,
    oscs: [],
    chordIdx: 0,
  })

  const initAudio = useCallback(() => {
    const a = audioRef.current
    if (a.ctx) return

    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    const master = ctx.createGain()
    master.gain.value = 0
    master.connect(ctx.destination)

    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 900
    filter.Q.value = 0.7
    filter.connect(master)

    const lfo = ctx.createOscillator()
    lfo.frequency.value = 0.08
    const lfoGain = ctx.createGain()
    lfoGain.gain.value = 260
    lfo.connect(lfoGain)
    lfoGain.connect(filter.frequency)
    lfo.start()

    const oscs = CHORDS[0].map((freq, i) => {
      const osc = ctx.createOscillator()
      osc.type = i % 2 === 0 ? 'triangle' : 'sine'
      osc.frequency.value = freq
      osc.detune.value = (Math.random() - 0.5) * 10
      const g = ctx.createGain()
      g.gain.value = 0.16
      osc.connect(g)
      g.connect(filter)
      osc.start()
      return { osc, gain: g }
    })

    const bufLen = ctx.sampleRate * 2
    const noiseBuf = ctx.createBuffer(1, bufLen, ctx.sampleRate)
    const data = noiseBuf.getChannelData(0)
    for (let i = 0; i < bufLen; i++) data[i] = (Math.random() * 2 - 1) * (Math.random() < 0.02 ? 1 : 0.15)
    const noise = ctx.createBufferSource()
    noise.buffer = noiseBuf
    noise.loop = true
    const nf = ctx.createBiquadFilter()
    nf.type = 'highpass'
    nf.frequency.value = 2200
    const ng = ctx.createGain()
    ng.gain.value = 0.025
    noise.connect(nf)
    nf.connect(ng)
    ng.connect(master)
    noise.start()

    const timer = setInterval(() => {
      a.chordIdx = (a.chordIdx + 1) % CHORDS.length
      const chord = CHORDS[a.chordIdx]
      a.oscs.forEach((v, i) => {
        v.osc.frequency.setTargetAtTime(chord[i % chord.length], ctx.currentTime, 1.4)
      })
    }, 4200)

    a.ctx = ctx
    a.master = master
    a.timer = timer
    a.oscs = oscs
  }, [])

  const toggle = useCallback(() => {
    const a = audioRef.current
    const next = !playing
    setPlaying(next)

    if (next) {
      initAudio()
      a.ctx!.resume().then(() => {
        a.master!.gain.cancelScheduledValues(a.ctx!.currentTime)
        a.master!.gain.setTargetAtTime(0.22, a.ctx!.currentTime, 0.5)
        setSubtitle('🎵 playing... 💖')
      })
    } else {
      if (a.ctx && a.master) {
        a.master.gain.cancelScheduledValues(a.ctx.currentTime)
        a.master.gain.setTargetAtTime(0, a.ctx.currentTime, 0.35)
        setTimeout(() => { if (!playing && a.ctx) a.ctx.suspend() }, 500)
      }
      setSubtitle('🎶 click to play 🎉')
    }
  }, [playing, initAudio])

  return (
    <div className={`music-pl fixed bottom-7 right-7 z-[300] flex items-center gap-2.5 bg-[rgba(5,1,3,.92)] border border-border rounded-full py-[9px] pr-4 pl-[9px] backdrop-blur-[24px] transition-all duration-300 hover:border-[rgba(255,45,149,.35)] max-md:bottom-[18px] max-md:right-[18px] ${!playing ? 'paused' : ''}`} style={{ animation: 'musicPlPulse 3s infinite' }}>
      <button
        onClick={toggle}
        className="w-[34px] h-[34px] rounded-full border-none bg-gradient-to-br from-violet to-purple cursor-pointer flex items-center justify-center text-[.95rem] shrink-0 transition-all duration-300 shadow-[0_0_12px_rgba(255,45,149,.4)] hover:scale-[1.12] hover:shadow-[0_0_22px_rgba(255,45,149,.5)]"
        style={{ animation: 'mBtnSpin 2s linear infinite' }}
      >
        {playing ? '⏸️' : '🎵🔥'}
      </button>
      <div className="flex flex-col">
        <span className="font-mono text-[.68rem] text-text whitespace-nowrap" style={{ animation: 'mTitleBlink .5s infinite' }}>🎵 Lofi Beats 💖</span>
        <span className="font-mono text-[.58rem] text-subtle">{subtitle}</span>
      </div>
      <div className="flex gap-[2px] items-end h-[14px] ml-[2px]">
        {[0, 0.22, 0.1, 0.35, 0.18].map((d, i) => (
          <div key={i} className="mbar" style={{ animationDelay: `${d}s` }} />
        ))}
      </div>
    </div>
  )
}
