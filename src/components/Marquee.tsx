interface MarqueeProps {
  text: string
  reverse?: boolean
  className?: string
}

export default function Marquee({ text, reverse, className = '' }: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap bg-gradient-to-r from-purple via-violet to-pink py-1.5 px-0 font-bold text-[.8rem] tracking-[3px] uppercase text-white border-purple/50 ${className}`}>
      <div
        className="inline-block"
        style={{
          animation: `marqueeScroll 8s linear infinite${reverse ? ' reverse' : ''}`,
        }}
      >
        {text}
      </div>
    </div>
  )
}
