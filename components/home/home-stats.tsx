import { STATS } from '@/lib/site-data'
import { StatCounter } from '@/components/stat-counter'
import { Reveal } from '@/components/reveal'

export function HomeStats() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-14 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.08}
            className="flex flex-col items-center border-border px-4 text-center lg:[&:not(:last-child)]:border-r"
          >
            <span className="font-serif text-4xl font-medium tracking-tight text-forest sm:text-5xl">
              <StatCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </span>
            <span className="mt-3 max-w-[14ch] text-sm leading-snug text-muted-foreground">
              {stat.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
