'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'

function formatValue(value: number, prefix?: string, suffix?: string) {
  const rounded = Math.round(value)
  const withCommas = rounded.toLocaleString('en-IN')
  return `${prefix ?? ''}${withCommas}${suffix ?? ''}`
}

export function StatCounter({
  value,
  prefix,
  suffix,
  className,
}: {
  value: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const duration = 1600
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setDisplay(eased * value)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className={className}>
      {formatValue(display, prefix, suffix)}
    </span>
  )
}
