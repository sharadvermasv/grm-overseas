import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import {
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
} from '@/components/brand-icons'
import { COMPANY, NAV_LINKS, PRODUCT_GROUPS, ADDRESSES } from '@/lib/site-data'

const socials = [
  { icon: LinkedInIcon, href: COMPANY.social.linkedin, label: 'LinkedIn' },
  { icon: InstagramIcon, href: COMPANY.social.instagram, label: 'Instagram' },
  { icon: YouTubeIcon, href: COMPANY.social.youtube, label: 'YouTube' },
  { icon: FacebookIcon, href: COMPANY.social.facebook, label: 'Facebook' },
]

export function SiteFooter() {
  return (
    <footer className="bg-[oklch(0.2_0.006_65)] text-[oklch(0.86_0.01_84)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex rounded-lg bg-white/95 px-3 py-2">
            <Image
              src="/brand/grm-logo.png"
              alt={`${COMPANY.name} logo`}
              width={140}
              height={48}
              style={{ height: 'auto' }}
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            {COMPANY.name} — a listed Indian basmati house exporting the world&apos;s
            finest rice to 65+ countries since {COMPANY.founded}.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg font-medium text-white">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/65 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-medium text-white">Products</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {PRODUCT_GROUPS.map((group) => (
              <li key={group.id}>
                <Link
                  href="/products"
                  className="text-white/65 transition-colors hover:text-gold"
                >
                  {group.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={COMPANY.domesticUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/65 transition-colors hover:text-gold"
              >
                Domestic (grmconsumers.com)
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-medium text-white">Contact</h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-white/65 transition-colors hover:text-gold"
              >
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href={`tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`}
                className="text-white/65 transition-colors hover:text-gold"
              >
                {COMPANY.phone}
              </a>
            </li>
            {ADDRESSES.map((addr) => (
              <li key={addr.label} className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-white/65">
                  <span className="block font-medium text-white/80">
                    {addr.label} · {addr.city}
                  </span>
                  {addr.lines}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-white/55 sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {COMPANY.name} All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/admin/blog" className="text-xs text-gold/80 hover:text-gold transition-colors">
              CRM Admin Portal ↗
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
