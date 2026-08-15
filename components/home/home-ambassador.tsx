import Image from 'next/image'
import { Quote } from 'lucide-react'
import { Eyebrow } from '@/components/section'
import { Reveal } from '@/components/reveal'

export function HomeAmbassador() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.16_0.006_65)] py-10 md:py-14">
      {/* warm gold glow */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
        {/* Quote */}
        <div className="order-2 md:order-1">
          <Reveal>
            <Eyebrow>Brand Ambassador</Eyebrow>
            <Quote className="mt-6 h-10 w-10 text-gold" aria-hidden="true" />
            <blockquote className="mt-6 text-balance font-serif text-2xl font-medium leading-snug text-white sm:text-3xl md:text-4xl">
              &ldquo;Quality you can trust, in every single grain. That is what
              drew me to GRM — a brand that never compromises.&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="text-lg font-semibold text-gold">Salman Khan</p>
              <p className="mt-1 text-sm text-white/60">
                Brand Ambassador, GRM Overseas
              </p>
            </div>
          </Reveal>
        </div>

        {/* Ambassador portrait — cutout on charcoal with gold glow */}
        <div className="order-1 md:order-2">
          <Reveal className="relative mx-auto max-w-md md:ml-auto">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-gold/25 bg-black shadow-2xl">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,oklch(0.55_0.11_72/0.35),transparent_60%)]"
                aria-hidden="true"
              />
              <Image
                src="/brand/ambassador/salman-khan.png"
                alt="Salman Khan, brand ambassador for GRM Overseas"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain object-bottom"
                priority={false}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
