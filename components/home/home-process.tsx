import { PROCESS } from '@/lib/site-data'
import { Eyebrow } from '@/components/section'
import { Reveal } from '@/components/reveal'

export function HomeProcess() {
  return (
    <section
      className="relative overflow-hidden bg-[oklch(0.2_0.006_65)] py-12 text-white md:py-16"
      id="virtual-tour"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: 'url(/brand/facility-sortex.png)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Eyebrow>Field to Port</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Six steps of relentless precision.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-white/70">
            Every grain passes through an integrated pipeline we own end to end —
            from the paddy belt to the decks of the ships that carry it abroad.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((item, i) => (
            <Reveal
              key={item.step}
              delay={(i % 3) * 0.08}
              className="group bg-[oklch(0.2_0.006_65)] p-8 transition-colors hover:bg-[oklch(0.24_0.01_70)]"
            >
              <span className="font-serif text-2xl font-medium text-gold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{item.step}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {item.detail}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
