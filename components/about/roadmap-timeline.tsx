'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Sprout, Tractor, Award, Home, Wheat } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TIMELINE } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

const ICONS = [Sprout, Tractor, Award, Home, Wheat]

const MILESTONE_IMAGES = [
  '/brand/milestones/1974-factory.png',
  '/brand/milestones/1980s-packaging.png',
  '/brand/milestones/2000s-port.png',
  '/brand/milestones/2020-heritage.png',
  '/brand/milestones/today-global.png',
]

export function RoadmapTimeline() {
  const items = TIMELINE
  const n = items.length
  const [active, setActive] = useState(0)
  const [truckPosition, setTruckPosition] = useState(0)

  // Auto-cycle through milestones every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % n)
    }, 6000)
    return () => clearInterval(interval)
  }, [n])

  // Update truck position based on active milestone (0-100%)
  useEffect(() => {
    const progress = (active / (n - 1)) * 100
    setTruckPosition(progress)
  }, [active, n])

  return (
    <div className="relative mx-auto mt-8 max-w-6xl overflow-hidden rounded-3xl">
      {/* Dynamic milestone background image */}
      <div className="absolute inset-0 z-0 transition-all duration-1000">
        <Image
          src={MILESTONE_IMAGES[active]}
          alt="Milestone background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50" />
      </div>

      {/* SVG truck animation path */}
      <svg
        className="pointer-events-none absolute inset-0 z-5"
        width="100%"
        height="100%"
        viewBox="0 0 1000 300"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Curved path from milestone to milestone */}
        <defs>
          <path
            id="truckPath"
            d="M 100,200 Q 150,100 200,200 Q 300,50 400,200 Q 500,80 600,200 Q 700,90 800,200 Q 900,100 950,200"
            fill="none"
            stroke="none"
          />
        </defs>

        {/* Animated truck following the path */}
        <g className="truck-group" style={{ opacity: 0.8 }}>
          <animateMotion
            dur={`${n * 6}s`}
            repeatCount="indefinite"
            keyPoints={Array.from({ length: n }, (_, i) => i / (n - 1))}
            keyTimes={Array.from(
              { length: n },
              (_, i) => `${(i / (n - 1)) * 100}%`,
            ).join(';')}
          >
            <path href="#truckPath" />
            {/* Truck SVG icon */}
            <g transform="translate(-20,-15)">
              {/* Cab */}
              <rect x="0" y="10" width="16" height="16" fill="#d4a574" />
              {/* Cargo bed */}
              <rect x="16" y="14" width="24" height="12" fill="#c9956b" />
              {/* Front wheel */}
              <circle cx="8" cy="28" r="3" fill="#333" />
              {/* Back wheel */}
              <circle cx="32" cy="28" r="3" fill="#333" />
              {/* Windshield */}
              <rect x="2" y="12" width="6" height="6" fill="#87ceeb" opacity="0.7" />
            </g>
          </animateMotion>
        </g>
      </svg>

      {/* Timeline cards grid */}
      <ol className="relative z-10 grid gap-6 p-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-3 lg:p-6">
        {items.map((item, i) => {
          const Icon = ICONS[i % ICONS.length]
          const isActive = active === i
          return (
            <li
              key={item.year}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group relative"
            >
              <Reveal delay={i * 0.08}>
                <button
                  onClick={() => setActive(i)}
                  className={cn(
                    'flex h-full flex-col justify-start rounded-2xl border-2 p-4 text-left transition-all duration-500 cursor-pointer',
                    isActive
                      ? 'border-gold/80 bg-gold/25 shadow-2xl scale-105 ring-4 ring-gold/40'
                      : 'border-white/20 bg-white/10 shadow-lg hover:bg-white/15 hover:border-white/30',
                  )}
                >
                  {/* Year badge */}
                  <span
                    className={cn(
                      'inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-1.5 font-serif font-bold transition-all duration-500 w-fit',
                      isActive
                        ? 'bg-gold text-gold-foreground text-base ring-2 ring-gold/40 shadow-lg'
                        : 'bg-white/20 text-white text-sm',
                    )}
                  >
                    {item.year}
                  </span>

                  {/* Icon node — pops when active */}
                  <div
                    className={cn(
                      'mt-3 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 transform',
                      isActive
                        ? 'bg-gold shadow-2xl ring-4 ring-gold/40 scale-125'
                        : 'bg-white/20 scale-100',
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-5 w-5 transition-all duration-500',
                        isActive
                          ? 'text-gold-foreground'
                          : 'text-white',
                      )}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={cn(
                      'mt-3 font-serif font-semibold transition-all duration-300',
                      isActive
                        ? 'text-white text-base opacity-100 h-auto'
                        : 'text-white/70 text-sm opacity-60 h-auto',
                    )}
                  >
                    {item.title}
                  </h3>

                  {/* Detail text — expand when active */}
                  <p
                    className={cn(
                      'mt-2 leading-relaxed transition-all duration-500 text-white/80 text-sm',
                      isActive
                        ? 'opacity-100 max-h-96'
                        : 'opacity-0 max-h-0 overflow-hidden',
                    )}
                  >
                    {item.detail}
                  </p>
                </button>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
