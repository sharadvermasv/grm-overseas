import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PRODUCT_PREVIEW } from '@/lib/site-data'
import { SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'

export function HomeProducts() {
  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The Range"
            title="A grain for every table."
            description="Sella, golden sella, steam, raw and organic basmati — each processed to exacting specifications and available in retail and bulk formats."
          />
          <Reveal>
            <Link
              href="/products"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              View all products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {PRODUCT_PREVIEW.map((product, i) => (
            <Reveal key={product.name} delay={(i % 5) * 0.06}>
              <div className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.name} basmati rice grains`}
                    fill
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-medium text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
