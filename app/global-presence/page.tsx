import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero, SectionHeading, Eyebrow } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { ShippingMap } from '@/components/shipping-map'
import { CtaBand } from '@/components/cta-band'
import { TRADE_FAIRS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Global Presence',
  description:
    'GRM Overseas exports premium basmati to 65+ countries across the Middle East, Europe, Americas, Africa and Asia Pacific — shipping from Indian ports.',
}

export default function GlobalPresencePage() {
  return (
    <>
      <PageHero
        eyebrow="Global Presence"
        title="Rooted in India, present on every continent."
        description="From India, GRM basmati reaches retail shelves and kitchens in more than 65 countries — among the top 5 exporters of rice in the world."
        image="/brand/export-port.png"
      />

      {/* Map */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <SectionHeading
          eyebrow="Trade Routes"
          title="65+ countries and counting."
          description="Built over five decades, our basmati travels from India to markets across the Middle East, Europe, Africa, the Americas and Asia Pacific."
          align="center"
        />
        <Reveal className="mt-14">
          <ShippingMap />
        </Reveal>
      </section>

      {/* Exhibitions logo grid */}
      <section className="bg-secondary py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Where to Meet Us"
            title="Our participation around the world."
            description="Our team exhibits at premier international food trade shows year-round. Come taste the GRM difference in person."
            align="center"
          />
          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3">
            {TRADE_FAIRS.map((fair, i) => (
              <Reveal
                key={`${fair.name}-${fair.city}`}
                delay={i * 0.05}
                className="flex flex-col items-center justify-center rounded-2xl border border-border bg-background p-6 text-center"
              >
                <div className="flex h-16 w-full items-center justify-center">
                  <Image
                    src={fair.logo || '/placeholder.svg'}
                    alt={`${fair.name} logo`}
                    width={200}
                    height={80}
                    style={{ height: 'auto', width: 'auto' }}
                    className="max-h-14 max-w-[10rem] object-contain"
                  />
                </div>
                <span className="mt-3 h-px w-8 bg-gold" aria-hidden="true" />
                <span className="mt-3 text-sm text-muted-foreground">
                  {fair.city}
                </span>
              </Reveal>
            ))}
          </div>

          {/* Exhibition stall photo */}
          <Reveal className="mt-10">
            <div className="relative aspect-[16/7] overflow-hidden rounded-2xl">
              <Image
                src="/brand/exhibition-stall.png"
                alt="GRM Overseas exhibition stall at an international food trade fair"
                fill
                sizes="(max-width: 1024px) 100vw, 80rem"
                className="object-cover"
              />
              <div className="absolute -bottom-4 left-4 hidden rounded-xl border border-border bg-card p-4 shadow-xl sm:block">
                <Eyebrow>Since 1974</Eyebrow>
                <p className="mt-1 font-serif text-lg text-foreground">
                  Trusted worldwide
                </p>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Representative image — official stall photography to follow.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Let’s explore opportunities in your market." />
    </>
  )
}
