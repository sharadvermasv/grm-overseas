import Image from 'next/image'
import { CERTIFICATION_BADGES, CLIENTS } from '@/lib/site-data'
import { Eyebrow } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { LogoMarquee } from '@/components/logo-marquee'

export function HomeTrust() {
  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      {/* Paddy-field background with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/brand/hero-paddy.png)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[oklch(0.17_0.006_65/0.88)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Certified Quality</Eyebrow>
          </div>
          <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            Trusted by global retailers, verified by the world&apos;s
            standards.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
            Our facilities and grain meet the most rigorous international
            food-safety and quality certifications.
          </p>
        </div>

        {/* Certification seals */}
        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {CERTIFICATION_BADGES.map((cert, i) => (
            <Reveal
              key={cert.name}
              delay={i * 0.05}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gold/60 bg-white shadow-lg">
                <Image
                  src={cert.logo || '/placeholder.svg'}
                  alt={`${cert.name} certification badge`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-white">
                {cert.name}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-white/55">
                {cert.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Client logos */}
      <div className="relative mt-14">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          Trusted by leading retailers &amp; distributors worldwide
        </p>
        <LogoMarquee
          items={CLIENTS}
          duration={45}
          fadeColor="oklch(0.19 0.006 65)"
        />
      </div>
    </section>
  )
}
