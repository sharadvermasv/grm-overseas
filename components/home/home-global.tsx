import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { ShippingMap } from '@/components/shipping-map'

export function HomeGlobal() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <SectionHeading
        eyebrow="Global Presence"
        title="65+ countries and counting."
        description="Built over five decades, GRM is among the top 5 exporters of rice in the world — carrying premium Indian basmati from our fields to tables across the globe."
        align="center"
      />

      <Reveal className="mt-8">
        <ShippingMap />
      </Reveal>

      <Reveal className="mt-10 text-center">
        <Link
          href="/global-presence"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-gold"
        >
          Explore our global network
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  )
}
