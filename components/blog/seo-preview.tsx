import React from 'react'
import { Globe } from 'lucide-react'

interface SeoPreviewProps {
  title: string
  slug: string
  excerpt: string
}

export function SeoPreview({ title, slug, excerpt }: SeoPreviewProps) {
  const displayTitle = title.trim() || 'Your Article Title Goes Here — GRM Overseas'
  const displaySlug = slug.trim() || 'your-article-slug'
  const displayExcerpt =
    excerpt.trim() ||
    'Discover the latest insights on Indian Basmati exports, aged grain science, sustainable agriculture, and global retail standards from GRM Overseas Ltd.'

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <Globe className="h-3.5 w-3.5 text-gold" />
        Search Engine Snippet Preview (Google)
      </div>

      <div className="mt-4 rounded-xl border border-border/70 bg-background p-4 text-left">
        {/* Google Result URL Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-forest text-[9px] font-bold text-white">
            G
          </div>
          <span className="font-sans text-xs text-[#202124] dark:text-[#dadce0]">
            https://grm-overseas.vercel.app › blog › {displaySlug}
          </span>
        </div>

        {/* Google Result Title */}
        <h4 className="mt-1.5 font-sans text-base font-medium text-[#1a0dab] hover:underline dark:text-[#8ab4f8] cursor-pointer line-clamp-1">
          {displayTitle} | GRM Overseas
        </h4>

        {/* Google Result Description */}
        <p className="mt-1 font-sans text-xs leading-relaxed text-[#4d5156] dark:text-[#bdc1c6] line-clamp-2">
          {displayExcerpt}
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>Title length: {displayTitle.length}/60 chars (Optimal)</span>
        <span>Description length: {displayExcerpt.length}/160 chars</span>
      </div>
    </div>
  )
}
