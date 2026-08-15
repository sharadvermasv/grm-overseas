'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import {
  Search,
  Sparkles,
  BookOpen,
  ArrowRight,
  SlidersHorizontal,
  PlusCircle,
} from 'lucide-react'
import {
  BlogPost,
  BLOG_CATEGORIES,
  getStoredPosts,
} from '@/lib/blog-store'
import { BlogCard } from '@/components/blog/blog-card'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  useEffect(() => {
    setPosts(getStoredPosts())
  }, [])

  const publishedPosts = useMemo(() => {
    return posts.filter((p) => p.status === 'published')
  }, [posts])

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    publishedPosts.forEach((p) => p.tags?.forEach((t) => tagSet.add(t)))
    return Array.from(tagSet)
  }, [publishedPosts])

  // Filtered posts
  const filteredPosts = useMemo(() => {
    return publishedPosts.filter((post) => {
      const matchCat =
        selectedCategory === 'All' || post.category === selectedCategory
      const matchSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
      const matchTag = !selectedTag || post.tags?.includes(selectedTag)

      return matchCat && matchSearch && matchTag
    })
  }, [publishedPosts, selectedCategory, searchQuery, selectedTag])

  const featuredPost = useMemo(() => {
    return (
      filteredPosts.find((p) => p.featured) ||
      filteredPosts[0] ||
      null
    )
  }, [filteredPosts])

  const regularPosts = useMemo(() => {
    if (!featuredPost) return filteredPosts
    return filteredPosts.filter((p) => p.id !== featuredPost.id)
  }, [filteredPosts, featuredPost])

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[oklch(0.18_0.006_65)] pt-32 pb-16 text-white sm:pt-40 sm:pb-24">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-gold/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                <Sparkles className="h-3 w-3" />
                Editorial & Intelligence
              </span>

              <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
                The Grain Dispatch
              </h1>

              <p className="mt-4 text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
                Industry analysis, grain science, international trade compliance, and authentic culinary craft from India's premier basmati house.
              </p>
            </div>

            {/* Link to Admin CRM */}
            <Link
              href="/admin/blog"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-xs font-semibold text-gold transition-all hover:bg-gold hover:text-gold-foreground"
            >
              <PlusCircle className="h-4 w-4" />
              Manage CRM / New Post
            </Link>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by keyword, varietal, certification..."
                className="w-full rounded-full border border-white/20 bg-white/10 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/40 backdrop-blur-md focus:border-gold focus:outline-none"
              />
            </div>

            {/* Reset filters if active */}
            {(selectedCategory !== 'All' || searchQuery || selectedTag) && (
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                  setSelectedTag(null)
                }}
                className="text-xs font-medium text-gold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="mt-6 flex flex-wrap items-center gap-2 overflow-x-auto pb-2">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-gold text-gold-foreground shadow-md'
                    : 'border border-white/15 bg-white/5 text-white/80 hover:bg-white/15 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Popular Tag Pills */}
          {allTags.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/60">
              <span className="text-[11px] uppercase tracking-wider text-gold font-medium">
                Topics:
              </span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`rounded-md px-2.5 py-0.5 text-xs transition-colors ${
                    selectedTag === tag
                      ? 'bg-white text-forest font-bold'
                      : 'bg-white/5 hover:bg-white/15 text-white/80'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Articles Content */}
      <section className="mx-auto max-w-7xl px-6 pt-12">
        {filteredPosts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border p-16 text-center">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <h3 className="mt-4 font-serif text-xl font-medium text-foreground">
              No matching articles found
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Try adjusting your search query or category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All')
                setSearchQuery('')
                setSelectedTag(null)
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2 text-xs font-semibold text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Featured Article Card */}
            {featuredPost && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <BlogCard post={featuredPost} featured />
              </div>
            )}

            {/* Grid of Regular Posts */}
            {regularPosts.length > 0 && (
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                    Latest Publications
                  </h2>
                  <span className="text-xs text-muted-foreground">
                    Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                  </span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {regularPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Newsletter / Export Advisory CTA */}
      <section className="mx-auto max-w-7xl px-6 pt-20">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-forest p-8 sm:p-12 text-forest-foreground shadow-2xl text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold block">
              Commercial Advisory
            </span>
            <h3 className="font-serif text-2xl font-medium sm:text-3xl text-white">
              Stay ahead of global grain market movements
            </h3>
            <p className="text-sm leading-relaxed text-white/80">
              Subscribe to the GRM Overseas monthly export digest for paddy harvest forecasts, freight indices, and regulatory updates.
            </p>
          </div>

          <div className="mt-6 sm:mt-0 w-full sm:max-w-md">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you for subscribing to GRM Overseas Grain Dispatch!')
              }}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your corporate email..."
                className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 backdrop-blur-md focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105 shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
