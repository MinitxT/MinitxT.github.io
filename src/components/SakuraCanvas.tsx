import { useEffect, useRef } from 'react'

const COLORS = [
  [255, 45, 149],
  [255, 95, 173],
  [255, 31, 143],
  [255, 143, 201],
  [224, 23, 125],
  [255, 255, 0],
  [0, 255, 255],
  [255, 0, 0],
  [0, 255, 0],
]
const rnd = (a: number, b: number) => a + Math.random() * (b - a)
const pick = () => COLORS[Math.floor(Math.random() * COLORS.length)]

class Petal {
  x = 0; y = 0; sz = 0; vy = 0; vx = 0; rot = 0; vr = 0
  sway = 0; sws = 0; swAmt = 0; op = 0; col = ''
  private sk: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D

  constructor(sk: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.sk = sk; this.ctx = ctx; this.reset(true)
  }

  reset(spread: boolean) {
    this.x = Math.random() * this.sk.width
    this.y = spread ? Math.random() * this.sk.height : -20
    this.sz = rnd(7, 15); this.vy = rnd(0.35, 0.9); this.vx = rnd(-0.35, 0.35)
    this.rot = rnd(0, Math.PI * 2); this.vr = rnd(-0.018, 0.018)
    this.sway = rnd(0, Math.PI * 2); this.sws = rnd(0.01, 0.025); this.swAmt = rnd(0.4, 1.1)
    this.op = rnd(0.45, 0.85)
    const c = pick(); this.col = `rgb(${c[0]},${c[1]},${c[2]})`
  }

  update() {
    this.sway += this.sws
    this.x += this.vx + Math.sin(this.sway) * this.swAmt * 0.3
    this.y += this.vy; this.rot += this.vr
    if (this.y > this.sk.height + 20) this.reset(false)
  }

  draw() {
    const { ctx } = this
    ctx.save(); ctx.translate(this.x, this.y); ctx.rotate(this.rot)
    ctx.globalAlpha = this.op; ctx.shadowColor = this.col; ctx.shadowBlur = this.sz * 1.6
    ctx.fillStyle = this.col
    ctx.beginPath()
    ctx.moveTo(0, -this.sz * 0.55)
    ctx.bezierCurveTo(this.sz * 0.55, -this.sz * 0.4, this.sz * 0.5, this.sz * 0.35, 0, this.sz * 0.6)
    ctx.bezierCurveTo(-this.sz * 0.5, this.sz * 0.35, -this.sz * 0.55, -this.sz * 0.4, 0, -this.sz * 0.55)
    ctx.fill(); ctx.restore()
  }
}

class Orb {
  x = 0; y = 0; r = 0; vx = 0; vy = 0; col: number[] = []; op = 0; pulse = 0; ps = 0
  private sk: HTMLCanvasElement; private ctx: CanvasRenderingContext2D

  constructor(sk: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.sk = sk; this.ctx = ctx; this.reset(true)
  }

  reset(_spread: boolean) {
    this.x = Math.random() * this.sk.width; this.y = Math.random() * this.sk.height
    this.r = rnd(160, 300); this.vx = rnd(-0.12, 0.12); this.vy = rnd(-0.1, 0.1)
    this.col = pick(); this.op = rnd(0.05, 0.11); this.pulse = rnd(0, Math.PI * 2); this.ps = rnd(0.004, 0.009)
  }

  update() {
    this.x += this.vx; this.y += this.vy; this.pulse += this.ps
    if (this.x < -this.r || this.x > this.sk.width + this.r || this.y < -this.r || this.y > this.sk.height + this.r) this.reset(false)
  }

  draw() {
    const o = this.op * (0.7 + 0.3 * Math.sin(this.pulse))
    const [r, g, b] = this.col
    const grd = this.ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r)
    grd.addColorStop(0, `rgba(${r},${g},${b},${o})`)
    grd.addColorStop(1, 'rgba(0,0,0,0)')
    this.ctx.fillStyle = grd
    this.ctx.beginPath(); this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); this.ctx.fill()
  }
}

class Dust {
  x = 0; y = 0; sz = 0; vx = 0; vy = 0; op = 0; col: number[] = []; tw = 0; tws = 0
  private sk: HTMLCanvasElement; private ctx: CanvasRenderingContext2D

  constructor(sk: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.sk = sk; this.ctx = ctx; this.reset(true)
  }

  reset(_spread: boolean) {
    this.x = Math.random() * this.sk.width; this.y = Math.random() * this.sk.height
    this.sz = rnd(0.5, 1.6); this.vx = rnd(-0.08, 0.08); this.vy = rnd(-0.18, -0.04)
    this.op = rnd(0.12, 0.4); this.col = pick(); this.tw = rnd(0, Math.PI * 2); this.tws = rnd(0.02, 0.05)
  }

  update() {
    this.x += this.vx; this.y += this.vy; this.tw += this.tws
    if (this.y < -10 || this.x < -10 || this.x > this.sk.width + 10) this.reset(false)
  }

  draw() {
    const o = this.op * (0.5 + 0.5 * Math.sin(this.tw))
    const [r, g, b] = this.col
    this.ctx.fillStyle = `rgba(${r},${g},${b},${o})`
    this.ctx.beginPath(); this.ctx.arc(this.x, this.y, this.sz, 0, Math.PI * 2); this.ctx.fill()
  }
}

class Glow {
  x = 0; y = 0; sz = 0; vx = 0; vy = 0; op = 0; col: number[] = []; sw = 0; swo = 0; sws = 0
  private sk: HTMLCanvasElement; private ctx: CanvasRenderingContext2D

  constructor(sk: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.sk = sk; this.ctx = ctx; this.reset(true)
  }

  reset(spread: boolean) {
    this.x = Math.random() * this.sk.width
    this.y = spread ? Math.random() * this.sk.height : this.sk.height + rnd(0, 40)
    this.sz = rnd(1.4, 3.6); this.vx = rnd(-0.18, 0.18); this.vy = rnd(-0.55, -0.18)
    this.op = rnd(0.25, 0.7); this.col = pick()
    this.sw = rnd(0.3, 1.2); this.swo = rnd(0, Math.PI * 2); this.sws = rnd(0.008, 0.02)
  }

  update() {
    this.swo += this.sws
    this.x += this.vx + Math.sin(this.swo) * this.sw * 0.2
    this.y += this.vy
    if (this.y < -30) this.reset(false)
  }

  draw() {
    const [r, g, b] = this.col
    this.ctx.save()
    this.ctx.globalAlpha = this.op
    this.ctx.shadowColor = `rgb(${r},${g},${b})`
    this.ctx.shadowBlur = this.sz * 4.5
    this.ctx.fillStyle = `rgb(${r},${g},${b})`
    this.ctx.beginPath(); this.ctx.arc(this.x, this.y, this.sz, 0, Math.PI * 2); this.ctx.fill()
    this.ctx.restore()
  }
}

class Spark {
  alive = false; x = 0; y = 0; maxLife = 0; life = 0; sz = 0; col: number[] = []
  private sk: HTMLCanvasElement; private ctx: CanvasRenderingContext2D

  constructor(sk: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.sk = sk; this.ctx = ctx
  }

  spawn() {
    this.x = Math.random() * this.sk.width; this.y = Math.random() * this.sk.height
    this.maxLife = rnd(18, 34); this.life = this.maxLife
    this.sz = rnd(1, 2.2); this.col = pick(); this.alive = true
  }

  update() { if (this.alive && --this.life <= 0) this.alive = false }

  draw() {
    if (!this.alive) return
    const t = this.life / this.maxLife
    const o = t > 0.7 ? (1 - t) / 0.3 : t / 0.7
    this.ctx.save(); this.ctx.globalAlpha = o
    this.ctx.shadowColor = '#fff'; this.ctx.shadowBlur = 10
    this.ctx.fillStyle = '#fff'
    this.ctx.beginPath(); this.ctx.arc(this.x, this.y, this.sz * (0.6 + t * 0.6), 0, Math.PI * 2); this.ctx.fill()
    this.ctx.restore()
  }
}

export default function SakuraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const sk = canvasRef.current
    if (!sk) return
    const ctx = sk.getContext('2d')!
    const canvas = sk
    const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const MOBILE = window.innerWidth < 720

    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const orbs = Array.from({ length: MOBILE ? 6 : 12 }, () => new Orb(canvas, ctx))
    const dustP = Array.from({ length: MOBILE ? 80 : 180 }, () => new Dust(canvas, ctx))
    const glowsP = Array.from({ length: MOBILE ? 44 : 84 }, () => new Glow(canvas, ctx))
    const sparks = Array.from({ length: 14 }, () => new Spark(canvas, ctx))
    const petals = Array.from({ length: MOBILE ? 28 : 52 }, () => new Petal(canvas, ctx))

    if (REDUCE) {
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, sk.width, sk.height)
      orbs.forEach((o) => o.draw())
      dustP.forEach((d) => d.draw())
      glowsP.forEach((g) => g.draw())
      petals.forEach((p) => p.draw())
      return
    }

    let raf: number
    ;(function loop() {
      ctx.fillStyle = 'rgba(0,0,0,.16)'
      ctx.fillRect(0, 0, sk.width, sk.height)
      orbs.forEach((o) => { o.update(); o.draw() })
      dustP.forEach((d) => { d.update(); d.draw() })
      glowsP.forEach((g) => { g.update(); g.draw() })
      petals.forEach((p) => { p.update(); p.draw() })
      if (Math.random() < 0.025) {
        const s = sparks.find((s) => !s.alive)
        if (s) s.spawn()
      }
      sparks.forEach((s) => { s.update(); s.draw() })
      raf = requestAnimationFrame(loop)
    })()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="sk" />
}
