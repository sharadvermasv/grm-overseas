'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  Wheat,
  Package,
  TrendingUp,
  FileSignature,
  Ship,
  type LucideIcon,
} from 'lucide-react'
import { PRIVATE_LABEL_STEPS } from '@/lib/site-data'

const ICONS: Record<string, LucideIcon> = {
  wheat: Wheat,
  package: Package,
  lineChart: TrendingUp,
  fileSignature: FileSignature,
  ship: Ship,
}

// Node positions in the 0–100 SVG coordinate space (desktop road).
const NODES = [
  { x: 10, y: 40, up: true },
  { x: 30, y: 64, up: false },
  { x: 50, y: 40, up: true },
  { x: 70, y: 64, up: false },
  { x: 90, y: 40, up: true },
]

const ROAD_PATH =
  'M10,40 C20,40 20,64 30,64 C40,64 40,40 50,40 C60,40 60,64 70,64 C80,64 80,40 90,40'

function Badge({ icon, step }: { icon: string; step: string }) {
  const Icon = ICONS[icon] ?? Wheat
  return (
    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-forest text-white shadow-lg shadow-forest/20">
      <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[0.7rem] font-semibold text-forest ring-2 ring-secondary">
        {step}
      </span>
    </div>
  )
}

export function JourneyRoadmap() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })

  return (
    <div ref={ref} className="mt-10">
      {/* Desktop / tablet winding road */}
      <div className="relative mx-auto hidden h-[460px] max-w-5xl md:block">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d={ROAD_PATH}
            fill="none"
            stroke="oklch(0.24 0.006 65)"
            strokeWidth={7}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.path
            d={ROAD_PATH}
            fill="none"
            stroke="oklch(0.72 0.11 78)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="1 7"
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          />
        </svg>

        {NODES.map((node, i) => {
          const step = PRIVATE_LABEL_STEPS[i]
          return (
            <motion.div
              key={step.step}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={
                inView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.6 }
              }
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative flex justify-center">
                <Badge icon={step.icon} step={step.step} />
                <div
                  className={`absolute left-1/2 w-52 -translate-x-1/2 text-center ${
                    node.up
                      ? 'bottom-[calc(100%+1rem)]'
                      : 'top-[calc(100%+1rem)]'
                  }`}
                >
                  <h3 className="font-serif text-lg font-medium text-forest">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Mobile vertical winding path */}
      <div className="relative mx-auto max-w-md md:hidden">
        <div
          className="absolute bottom-4 left-8 top-4 w-0.5 border-l-2 border-dashed border-gold/60"
          aria-hidden="true"
        />
        <ol className="space-y-8">
          {PRIVATE_LABEL_STEPS.map((step, i) => (
            <motion.li
              key={step.step}
              className="relative flex gap-5 pl-1"
              initial={{ opacity: 0, x: -16 }}
              animate={
                inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }
              }
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative z-10 shrink-0">
                <Badge icon={step.icon} step={step.step} />
              </div>
              <div className="pt-1">
                <h3 className="font-serif text-lg font-medium text-forest">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.detail}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  )
}
