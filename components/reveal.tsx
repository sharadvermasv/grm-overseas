'use client'

import { motion, useInView, type Variants } from 'motion/react'
import { useEffect, useRef, useState, type ReactNode } from 'react'

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'span'
}) {
  const MotionTag = motion[as]
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })
  const [fallback, setFallback] = useState(false)

  // Safety net: if the intersection observer never fires (e.g. element is
  // already in a scrolled/off-DOM state), reveal shortly after mount so
  // content is never stuck invisible.
  useEffect(() => {
    const t = setTimeout(() => setFallback(true), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      animate={inView || fallback ? 'visible' : 'hidden'}
    >
      {children}
    </MotionTag>
  )
}
