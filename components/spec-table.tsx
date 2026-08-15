'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { SPECIFICATIONS, type SpecRow } from '@/lib/site-data'

const GROUPS: (SpecRow['group'] | 'All')[] = [
  'All',
  'White Sella',
  'Golden Sella',
  'Steam',
]

const COLUMNS: { key: keyof SpecRow; label: string }[] = [
  { key: 'variety', label: 'Variety' },
  { key: 'length', label: 'Avg. Length (mm)' },
  { key: 'moisture', label: 'Moisture (%)' },
  { key: 'broken', label: 'Broken (%)' },
  { key: 'purity', label: 'Purity (%)' },
  { key: 'damaged', label: 'Damaged (%)' },
  { key: 'foreign', label: 'Foreign Matter' },
]

export function SpecTable() {
  const [filter, setFilter] = useState<(typeof GROUPS)[number]>('All')

  const rows =
    filter === 'All'
      ? SPECIFICATIONS
      : SPECIFICATIONS.filter((row) => row.group === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {GROUPS.map((group) => (
          <button
            key={group}
            type="button"
            onClick={() => setFilter(group)}
            className={cn(
              'rounded-full border px-5 py-2 text-sm font-semibold transition-colors',
              filter === group
                ? 'border-forest bg-forest text-forest-foreground'
                : 'border-border bg-card text-foreground/70 hover:border-gold hover:text-gold',
            )}
          >
            {group}
          </button>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[oklch(0.2_0.006_65)] text-white">
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className="whitespace-nowrap px-5 py-4 font-semibold"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.variety}
                className={cn(
                  'border-t border-border transition-colors hover:bg-secondary',
                  i % 2 === 1 && 'bg-card',
                )}
              >
                {COLUMNS.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      'whitespace-nowrap px-5 py-4',
                      col.key === 'variety'
                        ? 'font-semibold text-foreground'
                        : 'text-muted-foreground',
                    )}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Specifications are indicative and can be customised to buyer requirements.
        Moisture, broken and purity tolerances are stated as approximate limits.
      </p>
    </div>
  )
}
