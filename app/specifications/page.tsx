import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { SpecTable } from '@/components/spec-table'
import { PriceCalculator } from '@/components/price-calculator'
import { CtaBand } from '@/components/cta-band'
import { JourneyRoadmap } from '@/components/private-label/journey-roadmap'
import { CERTIFICATION_BADGES, PRIVATE_LABEL_OFFERINGS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Private Label & Specifications',
  description:
    'GRM Overseas private-label programme — a five-step journey from market research to global delivery. Plus technical basmati specifications, an export price calculator and our certifications.',
}

export default function PrivateLabelPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Label & Specifications"
        title="Your brand, built on fifty years of grain."
        description="From market research to global shipment, our end-to-end private-label programme turns export-grade basmati into your own retail brand — backed by measurable, certified quality."
        image="/brand/grains-golden-sella.png"
      />

      {/* 5-step process */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <SectionHeading
          eyebrow="How It Works"
          title="A five-step private-label journey."
          description="A guided programme that takes your brand from concept to container, with GRM’s export team beside you at every step."
          align="center"
        />
        <JourneyRoadmap />
      </section>

      {/* Offerings */}
      <section className="bg-secondary py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What You Get"
            title="Everything your private label needs."
            align="center"
          />
          <div className="mt-12 flex flex-col gap-12 md:gap-16">
            {PRIVATE_LABEL_OFFERINGS.map((offer, i) => {
              const flipped = i % 2 === 1
              return (
                <Reveal
                  key={offer.title}
                  className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                    flipped ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg shadow-forest/10">
                    <Image
                      src={offer.image || '/placeholder.svg'}
                      alt={offer.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {`0${i + 1}`}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl font-medium text-forest md:text-3xl">
                      {offer.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {offer.detail}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Price calculator */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <SectionHeading
          eyebrow="Instant Estimate"
          title="Calculate your export price."
          description="A quick, indicative price based on variety, pack size, incoterm and volume — then request a firm quotation from our team."
          align="center"
        />
        <Reveal className="mt-8">
          <PriceCalculator />
        </Reveal>
      </section>

      {/* Spec table */}
      <section className="bg-secondary py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Grain Parameters"
            title="Variety-wise specifications."
            description="Filter by product family to compare grain length, moisture, purity and other key parameters."
          />
          <Reveal className="mt-8">
            <SpecTable />
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <SectionHeading
          eyebrow="Quality Assurance"
          title="Certified to the world's most rigorous standards."
          align="center"
        />
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {CERTIFICATION_BADGES.map((cert, i) => (
            <Reveal
              key={cert.name}
              delay={i * 0.05}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gold/50 bg-white shadow-sm">
                <Image
                  src={cert.logo || '/placeholder.svg'}
                  alt={`${cert.name} certification badge`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-foreground">
                {cert.name}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                {cert.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Ready to launch your own basmati brand?" />
    </>
  )
}
