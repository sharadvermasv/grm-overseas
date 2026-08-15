import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold',
        className,
      )}
    >
      <span className="h-px w-6 bg-gold" aria-hidden="true" />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  invert = false,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  invert?: boolean
  className?: string
}) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <div className={cn(align === 'center' && 'flex justify-center')}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cn(
          'mt-4 text-balance font-serif text-3xl font-medium leading-[1.1] tracking-tight sm:text-4xl md:text-5xl',
          invert ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-pretty text-base leading-relaxed sm:text-lg',
            invert ? 'text-white/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string
  title: string
  description: string
  image: string
}) {
  return (
    <section className="relative flex min-h-[30vh] items-end overflow-hidden pt-6">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.006_65)] via-[oklch(0.18_0.006_65/0.7)] to-[oklch(0.18_0.006_65/0.35)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-10">
        <Reveal>
          <Eyebrow className="text-gold">{eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl font-medium leading-[1.05] tracking-tight text-white text-shadow-hero sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/85">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
