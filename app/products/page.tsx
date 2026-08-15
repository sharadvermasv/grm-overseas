import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero, SectionHeading, Eyebrow } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { BRANDS, PRODUCT_GROUPS, PACKAGING_TYPES } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore GRM Overseas basmati — White Sella, Golden Sella and Steam varieties, flagship brands Himalaya River, Tanoush and 10X, plus private-label and flexible packaging options.',
}

const BUY_OPTIONS = [
  {
    tag: 'Brand',
    title: 'Himalaya River',
    copy: 'Our flagship export brand across premium basmati, sella, brown & long-grain rice.',
    image: '/brand/buy/himalaya-hf.png',
  },
  {
    tag: 'Brand',
    title: 'Tanoush',
    copy: 'A fragrant range crafted for European and Middle Eastern tables.',
    image: '/brand/buy/tanoush.png',
  },
  {
    tag: 'Brand',
    title: '10X',
    copy: 'A bold, modern basmati line engineered for standout retail shelves.',
    image: '/brand/buy/tenx.png',
  },
  {
    tag: 'Private Label',
    title: 'Your Brand',
    copy: 'Export-grade basmati in your own packaging, to your specification.',
    image: '/brand/buy/your-brand.png',
  },
]

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Every grain, milled to a global standard."
        description="A complete basmati portfolio available four ways — under our Himalaya River, Tanoush or 10X brands, or as your own private label."
        image="/brand/basmati-grains.png"
      />

      {/* Ways to partner */}
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-10 md:pb-20 md:pt-14">
        <SectionHeading
          eyebrow="How to Buy"
          title="Three proven brands — or make it your own."
          description="Whether you stock our internationally recognised brands or launch a range under your own label, every pack carries the same export-grade GRM quality."
          align="center"
        />
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BUY_OPTIONS.map((opt, i) => (
            <Reveal
              key={opt.title}
              delay={i * 0.08}
              className="group relative flex min-h-[20rem] flex-col justify-end overflow-hidden rounded-2xl border border-border p-6 text-left"
            >
              <Image
                src={opt.image || '/placeholder.svg'}
                alt={`${opt.title} rice packaging`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.006_65/0.92)] via-[oklch(0.16_0.006_65/0.5)] to-[oklch(0.16_0.006_65/0.15)]"
                aria-hidden="true"
              />
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {opt.tag}
                </span>
                <h3 className="mt-2 font-serif text-xl font-medium text-white">
                  {opt.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {opt.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brands with full variety lineup */}
      <section className="bg-secondary py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Brands"
            title="Signatures the world knows and trusts."
            align="center"
          />
          <div className="mt-14 space-y-16">
            {BRANDS.map((brand, bi) => (
              <Reveal key={brand.id} delay={bi * 0.05}>
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
                  {/* Brand intro */}
                  <div className="lg:col-span-1">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[oklch(0.97_0.006_84)]">
                      <Image
                        src={brand.image}
                        alt={`${brand.fullName} basmati by GRM Overseas`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {brand.tagline}
                    </span>
                    <h3 className="mt-2 font-serif text-3xl font-medium text-forest">
                      {brand.fullName}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {brand.description}
                    </p>
                  </div>

                  {/* Variety grid */}
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                      {brand.varieties.map((variety) => {
                        const extraZoom = variety.name
                          .toLowerCase()
                          .includes('organic')
                        return (
                        <div
                          key={variety.name}
                          className="group overflow-hidden rounded-xl border border-border bg-background"
                        >
                          <div className="relative aspect-square bg-[oklch(0.97_0.006_84)]">
                            <Image
                              src={variety.image}
                              alt={`${variety.name} — ${variety.grain}`}
                              fill
                              sizes="(max-width: 640px) 50vw, 200px"
                              className={`object-contain transition-transform duration-500 group-hover:scale-110 ${
                                extraZoom ? 'scale-[1.55]' : 'scale-125'
                              }`}
                            />
                          </div>
                          <div className="border-t border-border p-3">
                            <p className="text-sm font-semibold leading-snug text-foreground">
                              {variety.name}
                            </p>
                            <p className="mt-1 text-xs text-gold">{variety.grain}</p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {variety.sizes}
                            </p>
                          </div>
                        </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product groups */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="The Range"
            title="Three families, countless varieties."
            description="Each family is processed to preserve grain length, aroma and cooking performance — and every variety is available across our packaging formats."
            align="center"
          />
          <div className="mt-16 space-y-8">
            {PRODUCT_GROUPS.map((group, i) => (
              <Reveal key={group.id} delay={i * 0.08}>
                <div className="grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-5">
                  <div className="relative h-56 lg:col-span-2 lg:h-auto">
                    <Image
                      src={group.image}
                      alt={`${group.name} basmati rice grains`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:col-span-3 lg:p-10">
                    <h3 className="font-serif text-2xl font-medium uppercase tracking-wide text-forest">
                      {group.name}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                      {group.blurb}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.varieties.map((variety) => (
                        <span
                          key={variety}
                          className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium uppercase tracking-wide text-foreground/80"
                        >
                          {variety}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging formats */}
      <section className="bg-secondary py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Packaging"
            title="From 1 kg pouches to 50 kg sacks."
            description="Every format can be produced under our brands or fully customised for your private label — jute, PP, BOPP, non-woven and stand-up pouches."
            align="center"
          />
          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {PACKAGING_TYPES.map((pack, i) => (
              <Reveal
                key={pack.name}
                delay={i * 0.06}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative aspect-square bg-white">
                  <Image
                    src={pack.image}
                    alt={`${pack.name} — unbranded rice packaging format`}
                    fill
                    sizes="(max-width: 640px) 50vw, 200px"
                    className="object-cover"
                  />
                </div>
                <p className="p-3 text-center text-sm font-semibold text-foreground">
                  {pack.name}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Private label CTA */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Private Label"
              title="Your brand, our grain, world-class quality."
              description="We are a trusted private-label partner for retailers and distributors worldwide. From market research to shipment, our five-step programme delivers export-grade basmati in your packaging, to your specification."
            />
            <Reveal className="mt-9">
              <Link
                href="/specifications"
                className="group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-forest-foreground transition-transform hover:scale-[1.03]"
              >
                Explore Private Label &amp; Specifications
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/brand/private-label.png"
                alt="Assortment of private-label rice packaging formats by GRM Overseas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Domestic callout */}
      <section className="mx-auto max-w-7xl px-6 pb-12 md:pb-14">
        <Reveal className="rounded-2xl border border-border bg-secondary p-8 text-center md:p-12">
          <Eyebrow>Looking for retail packs in India?</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance font-serif text-2xl font-medium text-foreground sm:text-3xl">
            Explore our domestic consumer range at grmconsumers.com
          </h2>
          <a
            href="https://www.grmconsumers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            Visit GRM Consumers
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </section>

      <CtaBand title="Ready to stock the world’s finest basmati?" />
    </>
  )
}
