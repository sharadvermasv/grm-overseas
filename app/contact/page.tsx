import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Building2, Factory } from 'lucide-react'
import { PageHero } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { InquiryForm } from '@/components/inquiry-form'
import { COMPANY, ADDRESSES } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact & Export Enquiries',
  description:
    'Talk to the GRM Overseas export team. Request quotations, samples, and private-label programmes for premium Indian basmati rice. Offices in Delhi, Naultha (Panipat) and Gurgaon.',
}

const officeIcons = [Building2, Factory, Building2]
const offices = ADDRESSES.map((addr, i) => ({
  icon: officeIcons[i] ?? Building2,
  label: `${addr.label} · ${addr.city}`,
  address: addr.lines,
}))

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s put GRM basmati on your shelves"
        description="Whether you are a distributor, retailer, or importer, our export desk responds to every serious enquiry with specifications, samples, and a tailored quotation."
      />

      <section className="border-b border-border bg-background py-10 lg:py-12">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          {/* Contact details */}
          <Reveal className="flex flex-col gap-10">
            <div>
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground">
                Export desk
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                Reach the team directly, or send the enquiry form and we will
                come back to you within one business day.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <a
                href={`mailto:${COMPANY.email}`}
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-forest transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </span>
                  <span className="text-lg text-foreground">
                    {COMPANY.email}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`}
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-forest transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                    Phone
                  </span>
                  <span className="text-lg text-foreground">
                    {COMPANY.phone}
                  </span>
                </span>
              </a>
            </div>

            <div className="flex flex-col gap-6 border-t border-border pt-8">
              {offices.map((office) => {
                const Icon = office.icon
                return (
                  <div key={office.label} className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-forest">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                        {office.label}
                      </span>
                      <span className="mt-1 block max-w-xs leading-relaxed text-foreground">
                        {office.address}
                      </span>
                    </span>
                  </div>
                )
              })}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-9">
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Domestic note */}
      <section className="bg-secondary py-14">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center lg:px-8">
          <MapPin className="h-6 w-6 text-gold" aria-hidden="true" />
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Looking for GRM in India?
          </h2>
          <p className="max-w-xl leading-relaxed text-muted-foreground">
            Our domestic consumer brands are available across Indian retail.
            Visit our consumer division for household packs and recipes.
          </p>
          <a
            href={COMPANY.domesticUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium uppercase tracking-widest text-forest underline-offset-4 hover:underline"
          >
            Visit GRM Consumers
          </a>
        </div>
      </section>
    </>
  )
}
