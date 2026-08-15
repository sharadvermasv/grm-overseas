'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail, Play, ArrowUpRight } from 'lucide-react'
import {
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
} from '@/components/brand-icons'
import { cn } from '@/lib/utils'
import { COMPANY, NAV_LINKS } from '@/lib/site-data'

const socials = [
  { icon: LinkedInIcon, href: COMPANY.social.linkedin, label: 'LinkedIn' },
  { icon: InstagramIcon, href: COMPANY.social.instagram, label: 'Instagram' },
  { icon: YouTubeIcon, href: COMPANY.social.youtube, label: 'YouTube' },
  { icon: FacebookIcon, href: COMPANY.social.facebook, label: 'Facebook' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky inset-x-0 top-0 z-50">
      {/* Utility bar — GRM forest green, collapses on scroll */}
      <div
        className={cn(
          'hidden bg-forest text-forest-foreground/90 transition-all duration-300 lg:block',
          scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-10 opacity-100',
        )}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-xs">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Mail className="h-3.5 w-3.5" />
              {COMPANY.email}
            </a>
            <a
              href={`tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`}
              className="flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5" />
              {COMPANY.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="transition-colors hover:text-gold"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav — bright frosted translucent bar */}
      <div
        className={cn(
          'border-b backdrop-blur-xl transition-all duration-300',
          scrolled
            ? 'border-border bg-background/90 shadow-sm'
            : 'border-white/40 bg-background/70',
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px]">
          <nav
            className="hidden items-center gap-5 lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative whitespace-nowrap text-[13px] font-medium tracking-wide transition-colors hover:text-foreground',
                    active ? 'text-foreground' : 'text-foreground/70',
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gold" />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="/#facility-tour"
              className="hidden items-center gap-1.5 rounded-full border border-forest/30 px-3.5 py-2 text-[13px] font-semibold text-forest transition-colors hover:bg-forest hover:text-forest-foreground lg:inline-flex"
            >
              <Play className="h-3 w-3 fill-current" />
              Virtual Tour
            </a>
            <a
              href={COMPANY.domesticUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-forest px-4 py-2 text-[13px] font-semibold text-forest-foreground shadow-sm transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Domestic
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <a
                href="/#facility-tour"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/30 px-4 py-2.5 text-sm font-semibold text-forest"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Take a Virtual Tour
              </a>
              <a
                href={COMPANY.domesticUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-forest px-4 py-2.5 text-sm font-semibold text-forest-foreground"
              >
                Visit Domestic (grmconsumers.com)
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
