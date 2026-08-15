import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { VALUES } from '@/lib/site-data'

export function HomeIntro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/brand/paddy-field.png"
              alt="Lush green basmati paddy fields in northern India at golden hour"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-border bg-card p-6 shadow-xl sm:block">
            <p className="font-serif text-4xl font-medium text-forest">1974</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Five decades of
              <br />
              basmati craft
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Our Legacy"
            title="A house built on grain, trust and time."
            description="GRM Overseas Ltd. is a listed Indian basmati house that has spent over fifty years perfecting a single craft — sourcing, ageing and milling the finest long-grain rice, then delivering it with precision to the world's most demanding markets."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <h3 className="font-serif text-lg font-medium text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-9">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-gold"
            >
              Discover our story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
