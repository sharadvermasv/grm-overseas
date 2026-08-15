import type { Metadata } from 'next'
import { FileText, Download, TrendingUp } from 'lucide-react'
import { PageHero, SectionHeading, Eyebrow } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { INVESTOR_SECTIONS, COMPANY } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Investor Relations',
  description:
    'GRM Overseas Ltd. investor relations — financial results, annual reports, shareholding patterns, corporate announcements and governance policies.',
}

const HIGHLIGHTS = [
  { label: 'Listing', value: 'BSE & NSE' },
  { label: 'Sector', value: 'Agri / FMCG' },
  { label: 'Legacy', value: 'Since 1974' },
  { label: 'Global reach', value: '65+ countries' },
]

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Relations"
        title="Transparency that compounds trust."
        description="As a publicly listed company, GRM Overseas is committed to timely, transparent disclosure. Access our financial results, reports and governance documents below."
        image="/brand/facility-milling.png"
      />

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card p-8 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08} className="text-center">
              <p className="font-serif text-2xl font-medium text-forest sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 flex items-center gap-3 rounded-xl border border-gold/30 bg-gold/10 p-5">
          <TrendingUp className="h-5 w-5 shrink-0 text-gold" />
          <p className="text-sm leading-relaxed text-foreground/80">
            Document links below are representative placeholders. Connect your
            document store or investor portal to serve live filings and reports.
          </p>
        </Reveal>
      </section>

      {/* Document sections */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Disclosures"
            title="Reports, results and governance."
            align="center"
          />
          <div className="mt-14 space-y-10">
            {INVESTOR_SECTIONS.map((section, si) => (
              <Reveal key={section.category} delay={si * 0.05}>
                <h3 className="font-serif text-xl font-medium text-forest">
                  {section.category}
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {section.docs.map((doc) => (
                    <button
                      key={doc.title}
                      type="button"
                      className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 text-left transition-colors hover:border-gold"
                    >
                      <span className="flex items-start gap-3">
                        <FileText className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                        <span>
                          <span className="block text-sm font-semibold leading-snug text-foreground">
                            {doc.title}
                          </span>
                          {doc.date && (
                            <span className="mt-1 block text-xs text-muted-foreground">
                              {doc.date}
                            </span>
                          )}
                        </span>
                      </span>
                      <Download className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-gold" />
                    </button>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IR contact */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <Reveal className="rounded-2xl border border-border bg-card p-8 text-center md:p-12">
          <Eyebrow>Investor Queries</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance font-serif text-2xl font-medium text-foreground sm:text-3xl">
            For investor and shareholder relations, reach our IR desk.
          </h2>
          <a
            href={`mailto:${COMPANY.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-forest-foreground transition-transform hover:scale-[1.03]"
          >
            {COMPANY.email}
          </a>
        </Reveal>
      </section>

      <CtaBand />
    </>
  )
}
