'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Calculator, ArrowRight } from 'lucide-react'
import {
  CALCULATOR_VARIETIES,
  CALCULATOR_PACK_SIZES,
} from '@/lib/site-data'

const INCOTERMS = [
  { label: 'FOB (Indian Port)', factor: 1.0 },
  { label: 'CFR (Destination Port)', factor: 1.08 },
  { label: 'CIF (Destination Port)', factor: 1.12 },
]

export function PriceCalculator() {
  const [varietyName, setVarietyName] = useState(CALCULATOR_VARIETIES[0].name)
  const [packLabel, setPackLabel] = useState(CALCULATOR_PACK_SIZES[3].label)
  const [incotermLabel, setIncotermLabel] = useState(INCOTERMS[0].label)
  const [quantity, setQuantity] = useState(25)

  const estimate = useMemo(() => {
    const variety = CALCULATOR_VARIETIES.find((v) => v.name === varietyName)!
    const pack = CALCULATOR_PACK_SIZES.find((p) => p.label === packLabel)!
    const incoterm = INCOTERMS.find((i) => i.label === incotermLabel)!
    const perMT = variety.baseRatePerMT * pack.factor * incoterm.factor
    const total = perMT * quantity
    return { perMT, total }
  }, [varietyName, packLabel, incotermLabel, quantity])

  const usd = (n: number) =>
    n.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    })

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="grid lg:grid-cols-5">
        {/* Inputs */}
        <div className="p-8 lg:col-span-3 lg:p-10">
          <div className="flex items-center gap-3">
            <Calculator className="h-6 w-6 text-gold" />
            <h3 className="font-serif text-2xl font-medium text-foreground">
              Price Estimate Calculator
            </h3>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Get an indicative export price in seconds. Select your variety, pack
            size, incoterm and volume — then request a firm quotation.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-foreground">
                Variety
              </span>
              <select
                value={varietyName}
                onChange={(e) => setVarietyName(e.target.value)}
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none"
              >
                {CALCULATOR_VARIETIES.map((v) => (
                  <option key={v.name} value={v.name}>
                    {v.name} ({v.category})
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-foreground">
                Pack Size
              </span>
              <select
                value={packLabel}
                onChange={(e) => setPackLabel(e.target.value)}
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none"
              >
                {CALCULATOR_PACK_SIZES.map((p) => (
                  <option key={p.label} value={p.label}>
                    {p.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-foreground">
                Incoterm
              </span>
              <select
                value={incotermLabel}
                onChange={(e) => setIncotermLabel(e.target.value)}
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none"
              >
                {INCOTERMS.map((i) => (
                  <option key={i.label} value={i.label}>
                    {i.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-foreground">
                Quantity (MT)
              </span>
              <input
                type="number"
                min={1}
                max={5000}
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value) || 1))
                }
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none"
              />
            </label>
          </div>
        </div>

        {/* Result */}
        <div className="flex flex-col justify-center border-t border-border bg-forest p-8 text-forest-foreground lg:col-span-2 lg:border-l lg:border-t-0 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Indicative Estimate
          </p>
          <p className="mt-4 font-serif text-4xl font-medium">
            {usd(estimate.total)}
          </p>
          <p className="mt-1 text-sm text-forest-foreground/70">
            approx. {usd(estimate.perMT)} / MT · {quantity} MT
          </p>
          <Link
            href="/contact"
            className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-[oklch(0.2_0.006_65)] transition-transform hover:scale-[1.03]"
          >
            Request a Firm Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="mt-4 text-xs leading-relaxed text-forest-foreground/60">
            Indicative only. Final pricing depends on live market rates, crop,
            specification and destination. Figures shown are placeholders pending
            confirmation.
          </p>
        </div>
      </div>
    </div>
  )
}
