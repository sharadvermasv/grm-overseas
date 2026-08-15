'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoItem = { name: string; logo?: string }

export function LogoMarquee({
  items,
  duration = 40,
  className,
  itemClassName,
  fadeColor = 'oklch(0.945 0.01 84)',
}: {
  items: LogoItem[]
  duration?: number
  className?: string
  itemClassName?: string
  fadeColor?: string
}) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...items, ...items]

  return (
    <div
      className={cn('group relative overflow-hidden', className)}
      aria-label="Retailers we supply"
    >
      {/* edge fades */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28"
        style={{
          background: `linear-gradient(to right, ${fadeColor}, transparent)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28"
        style={{
          background: `linear-gradient(to left, ${fadeColor}, transparent)`,
        }}
      />

      <div
        className="animate-marquee flex w-max items-center gap-4 group-hover:[animation-play-state:paused] sm:gap-6"
        style={{ ['--marquee-duration' as string]: `${duration}s` }}
      >
        {loop.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            aria-hidden={i >= items.length}
            className={cn(
              'flex h-20 w-48 shrink-0 items-center justify-center rounded-lg border border-border bg-card px-3 shadow-sm sm:h-24 sm:w-56',
              itemClassName,
            )}
          >
            {item.logo ? (
              <Image
                src={item.logo || '/placeholder.svg'}
                alt={`${item.name} logo`}
                width={200}
                height={72}
                style={{ height: 'auto', width: 'auto' }}
                className="max-h-14 max-w-[11rem] object-contain sm:max-h-16 sm:max-w-[13rem]"
              />
            ) : (
              <span className="text-center text-base font-bold uppercase leading-tight tracking-tight text-foreground sm:text-lg">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
