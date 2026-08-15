'use client'

import { useEffect, useMemo, useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { geoEqualEarth } from 'd3-geo'
import { PORTS, DESTINATIONS } from '@/lib/site-data'

const GEO_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const WIDTH = 980
const HEIGHT = 520
const SCALE = 175

const ORIGIN = PORTS[0].coordinates // India (western ports)

// Destinations that carry an animated ship — a spread across every region.
const SHIP_ROUTES = [
  'United Arab Emirates',
  'Saudi Arabia',
  'Iraq',
  'Iran',
  'United Kingdom',
  'Germany',
  'Netherlands',
  'Italy',
  'France',
  'Russia',
  'Turkey',
  'Canada',
  'South Africa',
  'Kenya',
  'Egypt',
  'Australia',
  'Singapore',
  'Malaysia',
  'China',
]

// Blackish-gold night palette
const OCEAN = 'oklch(0.19 0.006 65)'
const LAND = 'oklch(0.27 0.012 70)'
const LAND_HOVER = 'oklch(0.34 0.03 75)'
const LAND_STROKE = 'oklch(0.4 0.04 80)'
const LANE = 'oklch(0.74 0.128 72)'
const SHIP_RED = 'oklch(0.74 0.128 72)'
const SHIP_RED_DARK = 'oklch(0.5 0.09 70)'
const SHIP_WHITE = 'oklch(0.96 0.02 90)'

type Pt = [number, number]

export function ShippingMap() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { origin, lanes } = useMemo(() => {
    const projection = geoEqualEarth()
      .scale(SCALE)
      .translate([WIDTH / 2, HEIGHT / 2])

    const project = (c: Pt): Pt => {
      const r = projection(c)
      return r ? [r[0], r[1]] : [0, 0]
    }

    const o = project(ORIGIN)

    const lanes = DESTINATIONS.map((dest) => {
      const d = project(dest.coordinates)
      const mx = (o[0] + d[0]) / 2
      const my = (o[1] + d[1]) / 2
      const dx = d[0] - o[0]
      const dy = d[1] - o[1]
      const len = Math.hypot(dx, dy) || 1
      // Perpendicular offset creates a gentle arc (bowing toward the top).
      const off = Math.min(len * 0.18, 90)
      let nx = -dy / len
      let ny = dx / len
      if (ny > 0) {
        nx = -nx
        ny = -ny
      }
      const cx = mx + nx * off
      const cy = my + ny * off
      const path = `M${o[0].toFixed(2)},${o[1].toFixed(2)} Q${cx.toFixed(
        2,
      )},${cy.toFixed(2)} ${d[0].toFixed(2)},${d[1].toFixed(2)}`
      return {
        ...dest,
        point: d,
        path,
        len,
        hasShip: SHIP_ROUTES.includes(dest.name),
      }
    })

    return { origin: o, lanes }
  }, [])

  if (!mounted) {
    return (
      <div
        className="aspect-[980/520] w-full rounded-2xl border border-border"
        style={{ background: OCEAN }}
      />
    )
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-border"
      style={{ background: OCEAN }}
    >
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: SCALE }}
        width={WIDTH}
        height={HEIGHT}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={LAND}
                stroke={LAND_STROKE}
                strokeWidth={0.5}
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none', fill: LAND_HOVER },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {/* Sea lanes */}
        {lanes.map((lane) => {
          const dim = hovered && hovered !== lane.name
          return (
            <path
              key={`lane-${lane.name}`}
              d={lane.path}
              fill="none"
              stroke={LANE}
              strokeWidth={lane.hasShip ? 0.9 : 0.6}
              strokeLinecap="round"
              strokeDasharray="2 4"
              strokeOpacity={dim ? 0.12 : lane.hasShip ? 0.55 : 0.28}
              style={{ transition: 'stroke-opacity 0.3s' }}
            />
          )
        })}

        {/* Animated ships — kept upright (no rotate) so they never flip. */}
        {lanes
          .filter((l) => l.hasShip)
          .map((lane, i) => {
            const dur = Math.min(Math.max(lane.len / 30, 8), 18)
            const dim = hovered && hovered !== lane.name
            return (
              <g
                key={`ship-${lane.name}`}
                style={{ opacity: dim ? 0.2 : 1, transition: 'opacity 0.3s' }}
              >
                <g>
                  {/* Side-view cargo ship, symmetric and upright */}
                  {/* hull */}
                  <path
                    d="M-11,2.5 L11,2.5 L8,8 L-8,8 Z"
                    fill={SHIP_RED}
                    stroke={SHIP_RED_DARK}
                    strokeWidth={0.6}
                  />
                  {/* deck line */}
                  <rect
                    x={-11}
                    y={1.5}
                    width={22}
                    height={1.4}
                    fill={SHIP_WHITE}
                  />
                  {/* superstructure / cabin */}
                  <rect
                    x={-4.5}
                    y={-4}
                    width={9}
                    height={5.5}
                    rx={0.6}
                    fill={SHIP_WHITE}
                    stroke={SHIP_RED_DARK}
                    strokeWidth={0.4}
                  />
                  {/* windows */}
                  <rect x={-3} y={-2.4} width={6} height={1.4} fill={OCEAN} />
                  {/* funnel */}
                  <rect
                    x={-1.4}
                    y={-7.5}
                    width={2.8}
                    height={3.6}
                    rx={0.4}
                    fill={SHIP_RED}
                    stroke={SHIP_RED_DARK}
                    strokeWidth={0.4}
                  />
                  <animateMotion
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                    path={lane.path}
                    begin={`-${(i * 1.3).toFixed(2)}s`}
                  />
                </g>
              </g>
            )
          })}

        {/* Origin ports */}
        {PORTS.map((port, idx) => (
          <g key={port.name} transform={`translate(${origin[0]},${origin[1]})`}>
            {idx === 0 && (
              <>
                <circle r={8} fill={SHIP_RED} fillOpacity={0.25}>
                  <animate
                    attributeName="r"
                    values="6;12;6"
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="fill-opacity"
                    values="0.35;0;0.35"
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  r={4.5}
                  fill={SHIP_RED}
                  stroke="oklch(0.99 0.005 90)"
                  strokeWidth={1.5}
                />
                <text
                  textAnchor="middle"
                  y={-12}
                  className="fill-[oklch(0.85_0.12_82)] text-[11px] font-semibold"
                >
                  India
                </text>
              </>
            )}
          </g>
        ))}

        {/* Destination markers */}
        {lanes.map((lane, i) => (
          <g
            key={`dest-${lane.name}`}
            transform={`translate(${lane.point[0]},${lane.point[1]})`}
            onMouseEnter={() => setHovered(lane.name)}
            onMouseLeave={() => setHovered(null)}
            style={{ cursor: 'pointer' }}
          >
            <circle
              r={hovered === lane.name ? 4.5 : 2.6}
              fill="oklch(0.82 0.13 82)"
              fillOpacity={0.9}
              style={{ transition: 'r 0.2s' }}
            >
              <animate
                attributeName="opacity"
                values="0.45;1;0.45"
                dur="2.4s"
                begin={`-${((i % 8) * 0.3).toFixed(2)}s`}
                repeatCount="indefinite"
              />
            </circle>
            {hovered === lane.name && (
              <g>
                <rect
                  x={-lane.name.length * 3.1 - 6}
                  y={-24}
                  width={lane.name.length * 6.2 + 12}
                  height={16}
                  rx={4}
                  fill="oklch(0.16 0.006 65)"
                  stroke={SHIP_RED}
                  strokeWidth={0.5}
                />
                <text
                  textAnchor="middle"
                  y={-12}
                  className="fill-[oklch(0.97_0.01_90)] text-[9px] font-medium"
                >
                  {lane.name}
                </text>
              </g>
            )}
          </g>
        ))}
      </ComposableMap>

      <div className="pointer-events-none absolute bottom-3 right-4 rounded-md bg-[oklch(0.16_0.006_65_/_0.7)] px-2 py-1 text-xs font-medium text-[oklch(0.85_0.12_82)] backdrop-blur-sm">
        Ships sailing from India to {DESTINATIONS.length}+ destinations
      </div>
    </div>
  )
}
