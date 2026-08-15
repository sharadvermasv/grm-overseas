import type { Metadata } from 'next'
import Image from 'next/image'
import { Newspaper, Camera, Megaphone } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Media',
  description:
    'News, press coverage, campaigns and event highlights from GRM Overseas — a listed Indian basmati house exporting to 65+ countries.',
}

const pressPlaceholders = [
  {
    icon: Newspaper,
    title: 'Press feature coming soon',
    body: 'Coverage of our exports, milestones and brand journey across leading business and trade media will appear here.',
  },
  {
    icon: Megaphone,
    title: 'Campaign highlights',
    body: 'Details of our brand campaigns, ambassador features and marketing initiatives will be shared in this space.',
  },
  {
    icon: Camera,
    title: 'Event gallery',
    body: 'Photo highlights from Gulfood, SIAL, WorldFood and other international trade fairs will be published here.',
  },
]

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="News, press and moments from the GRM journey."
        description="From international trade fairs to brand campaigns and press coverage — a window into GRM Overseas as we carry premium Indian basmati to the world."
        image="/brand/exhibition-stall.png"
      />

      {/* Press / coverage */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <SectionHeading
          eyebrow="In the Media"
          title="GRM in the press."
          description="Coverage of our milestones, exports and brand journey across leading business and trade media."
          align="center"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pressPlaceholders.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className="flex flex-col rounded-2xl border border-dashed border-border bg-card p-8"
            >
              <item.icon className="h-7 w-7 text-gold" />
              <p className="mt-4 font-serif text-lg font-medium text-foreground">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ambassador / campaign highlight */}
      <section className="bg-secondary py-10 md:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/brand/exhibition-stall.png"
                alt="GRM Overseas presence at an international food exhibition"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Brand & Campaigns"
              title="A brand the world recognises."
              description="From our national brand ambassador to campaigns across the Middle East and beyond, GRM's brands — Himalaya River, Tanoush and 10X — reach millions of households worldwide. Campaign films, stills and press kits will be featured here."
            />
          </div>
        </div>
      </section>

      <CtaBand title="Media enquiries? Let’s connect." />
    </>
  )
}
