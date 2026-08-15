import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { BRANDS } from '@/lib/site-data'
import { SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'

export function HomeBrands() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <SectionHeading
        eyebrow="Our Brands"
        title="Two signatures — plus your own private label."
        description="Stock our internationally recognised brands, Himalaya River and Tanoush, or launch a range under your own label. Every pack carries the GRM promise of purity and consistency."
        align="center"
      />
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {BRANDS.map((brand, i) => (
          <Reveal key={brand.name} delay={i * 0.12}>
            <Link
              href="/products"
              className="group relative block h-[440px] overflow-hidden rounded-2xl"
            >
              <Image
                src={brand.image}
                alt={`${brand.name} basmati by GRM Overseas`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.006_65/0.9)] via-[oklch(0.16_0.006_65/0.35)] to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {brand.tagline}
                </span>
                <h3 className="mt-2 flex items-center gap-2 font-serif text-3xl font-medium text-white">
                  {brand.name}
                  <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
                <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-white/80">
                  {brand.description}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Private label strip */}
      <Reveal className="mt-8">
        <Link
          href="/products"
          className="group flex flex-col items-start justify-between gap-5 rounded-2xl border border-border bg-secondary p-8 sm:flex-row sm:items-center"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Private Label
            </span>
            <h3 className="mt-2 font-serif text-2xl font-medium text-forest">
              Your brand, our grain, world-class quality.
            </h3>
            <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
              A trusted private-label partner for retailers and distributors
              worldwide — export-grade basmati packed in your artwork, to your
              specification.
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-forest-foreground transition-transform group-hover:scale-[1.03]">
            Explore private label
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </Link>
      </Reveal>
    </section>
  )
}
