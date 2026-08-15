import type { Metadata } from 'next'
import Image from 'next/image'
import { User } from 'lucide-react'
import { PageHero, SectionHeading, Eyebrow } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { RoadmapTimeline } from '@/components/about/roadmap-timeline'
import { VALUES, MANUFACTURING } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'The GRM Overseas story — five decades of basmati craft, a listed company exporting to 65+ countries, and the values that guide every grain we ship.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Five decades of basmati, milled with conviction."
        description="From a single-minded pursuit of quality in 1974 to a listed basmati house trusted across the globe — this is the GRM story."
        image="/brand/facility-warehouse.png"
      />

      {/* Journey roadmap */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Journey"
            title="Fifty years, one unbroken promise."
            description="A heritage built milestone by milestone — from a single conviction about the grain to a globally trusted, listed basmati house. Click any milestone to explore the story."
            align="center"
          />
          <RoadmapTimeline />
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <SectionHeading
          eyebrow="What Guides Us"
          title="Values milled into everything we do."
          align="center"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <Reveal
              key={value.title}
              delay={i * 0.1}
              className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl border border-border p-8"
            >
              <Image
                src={value.image || '/placeholder.svg'}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.006_65/0.9)] via-[oklch(0.16_0.006_65/0.45)] to-[oklch(0.16_0.006_65/0.1)]"
                aria-hidden="true"
              />
              <div className="relative">
                <span className="font-serif text-3xl font-medium text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-medium text-white">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/80">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Leadership — placeholder layout, content to follow */}
      <section className="bg-[oklch(0.2_0.006_65)] py-10 text-white md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
              Guided by experience, driven by vision.
            </h2>
            <p className="mt-4 text-white/60">
              Profiles of the leadership team that steers GRM&apos;s global
              growth are coming soon.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <Reveal
                key={i}
                delay={i * 0.1}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/5">
                  <User className="h-10 w-10 text-white/25" aria-hidden="true" />
                </div>
                <div className="mt-5 h-4 w-2/3 rounded bg-white/10" />
                <div className="mt-2.5 h-3 w-1/3 rounded bg-gold/30" />
                <div className="mt-4 space-y-2">
                  <div className="h-2.5 w-full rounded bg-white/5" />
                  <div className="h-2.5 w-5/6 rounded bg-white/5" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/brand/facility/sortex-plant.png"
                alt="Modern rice sortex plant with optical sorting lines at a GRM processing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Manufacturing"
              title="An integrated footprint across India."
              description="Our plants sit at the heart of India's basmati belt, with warehousing and logistics positioned close to the western seaports for swift global dispatch."
            />
            <div className="mt-8 space-y-4">
              {MANUFACTURING.map((site, i) => (
                <Reveal
                  key={site.location}
                  delay={i * 0.08}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold text-foreground">
                      {site.location}
                    </h3>
                    <span className="text-sm text-gold">{site.state}</span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {site.detail}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
