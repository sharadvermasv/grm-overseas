'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export function HomeHero() {
  return (
    <section className="relative -mt-[112px] flex min-h-[100svh] items-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/brand/hero-poster.png"
        aria-hidden="true"
      >
        <source src="/brand/video/grm-hero.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28">
        <Image
          src="/brand/grm-logo.png"
          alt="GRM Overseas logo"
          width={132}
          height={44}
          priority
          style={{ height: 'auto' }}
          className="mb-8 h-9 w-auto lg:h-10"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            Basmati house since 1974
          </span>
          <h1 className="mt-6 text-balance font-serif text-4xl font-medium leading-[1.02] tracking-tight text-white text-shadow-hero sm:text-6xl lg:text-7xl">
            The world&apos;s finest basmati, from India&apos;s fields to global
            tables.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/85">
            For over five decades, GRM Overseas has milled, aged and shipped
            premium Indian basmati to more than 65 countries — trusted by the
            world&apos;s leading retailers.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-lg transition-transform hover:scale-[1.03]"
            >
              Explore Our Rice
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-foreground"
            >
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
