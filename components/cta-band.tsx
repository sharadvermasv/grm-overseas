import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaBand({
  title = 'Let’s bring premium basmati to your market.',
  description = 'Partner with a listed basmati house trusted across 65+ countries. Request a quote, samples or private-label options.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="bg-forest text-forest-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-10 md:flex-row md:items-center md:py-14">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-forest-foreground/80">
            {description}
          </p>
        </Reveal>
        <Reveal className="shrink-0">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground shadow-lg transition-transform hover:scale-[1.03]"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
