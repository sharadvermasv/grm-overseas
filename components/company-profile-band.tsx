import { Download } from 'lucide-react'
import { COMPANY_PROFILE_PDF } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

export function CompanyProfileBand() {
  return (
    <section className="bg-forest py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-gold/25 bg-[oklch(0.22_0.02_150)] p-8 text-center sm:flex-row sm:text-left md:p-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Company Profile
            </span>
            <h2 className="mt-2 text-balance font-serif text-2xl font-medium text-forest-foreground md:text-3xl">
              Five decades of basmati, in one document.
            </h2>
            <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-forest-foreground/70">
              Download the GRM Overseas corporate profile for our full capability,
              certification and export credentials.
            </p>
          </div>
          <a
            href={COMPANY_PROFILE_PDF}
            download
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-lg transition-transform hover:scale-[1.03]"
          >
            <Download className="h-4 w-4" />
            Download Company Profile
          </a>
        </Reveal>
      </div>
    </section>
  )
}
