export default function RainbowFlash() {
  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ animation: 'rainbowFlash .4s infinite' }}
    />
  )
}
