'use client'

import { useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'

export function HomeTour() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    const v = videoRef.current
    if (!v) return
    v.play()
    setPlaying(true)
  }

  return (
    <section
      id="facility-tour"
      className="scroll-mt-28 bg-[oklch(0.2_0.006_65)] py-10 text-white md:py-14"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Virtual Tour"
          title="Step inside our world."
          description="Take a guided look at how GRM sources, ages, mills and ships premium basmati — from India's paddy fields to the port."
          align="center"
          invert
        />
        <Reveal className="mx-auto mt-8 max-w-5xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster="/brand/hero-poster.png"
              controls={playing}
              playsInline
              preload="metadata"
            >
              <source src="/brand/video/grm-hero.mp4" type="video/mp4" />
            </video>
            {!playing && (
              <button
                type="button"
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-[oklch(0.16_0.006_65/0.35)] transition-colors hover:bg-[oklch(0.16_0.006_65/0.2)]"
                aria-label="Play virtual tour"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-lg transition-transform hover:scale-105">
                  <Play className="h-8 w-8 translate-x-0.5 fill-current" />
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
