export default function Divider() {
  return (
    <div className="flex items-center gap-5 max-w-[860px] mx-auto my-9 px-6">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="w-[5px] h-[5px] bg-purple rounded-full" style={{ animation: 'divDotPulse 2s infinite' }} />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  )
}
