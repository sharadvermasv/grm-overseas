'use client'

import React, { useEffect, useState, use } from 'react'
import Link from 'next/link'
import { notFound, useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  Check,
  Twitter,
  Linkedin,
  Facebook,
  Sparkles,
  ArrowRight,
  Eye,
} from 'lucide-react'
import {
  BlogPost,
  getPostBySlug,
  getStoredPosts,
  incrementPostViews,
} from '@/lib/blog-store'
import { BlogCard } from '@/components/blog/blog-card'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function BlogPostDetail({ params }: PageProps) {
  const { slug } = use(params)
  const router = useRouter()

  const [post, setPost] = useState<BlogPost | null | undefined>(undefined)
  const [allPosts, setAllPosts] = useState<BlogPost[]>([])
  const [copied, setCopied] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const loadedPosts = getStoredPosts()
    setAllPosts(loadedPosts)
    const found = loadedPosts.find((p) => p.slug === slug && p.status === 'published')
    setPost(found || null)

    if (found) {
      incrementPostViews(found.id)
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [slug])

  if (post === null) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32">
        <h1 className="font-serif text-3xl font-bold text-foreground">Article Not Found</h1>
        <p className="mt-3 text-muted-foreground">
          The requested publication may have been moved or updated.
        </p>
        <Link
          href="/blog"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-2.5 text-sm font-semibold text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Dispatch Directory
        </Link>
      </div>
    )
  }

  if (post === undefined) {
    return <div className="min-h-screen bg-background pt-40 text-center">Loading article...</div>
  }

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id && p.status === 'published')
    .slice(0, 3)

  return (
    <article className="min-h-screen bg-background pb-28">
      {/* Top reading progress indicator */}
      <div
        className="fixed top-0 left-0 z-50 h-1 bg-gold transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header Section */}
      <section className="relative overflow-hidden bg-[oklch(0.18_0.006_65)] pt-32 pb-16 text-white sm:pt-40 sm:pb-24">
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-gold/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl px-6">
          {/* Breadcrumb back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold hover:underline mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to The Grain Dispatch
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-foreground">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-white/70">
              <Calendar className="h-3.5 w-3.5 text-gold" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1 text-xs text-white/70">
              <Clock className="h-3.5 w-3.5 text-gold" />
              {post.readingTimeMinutes} min read
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mt-6 font-serif text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-6 text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            {post.excerpt}
          </p>

          {/* Author Card */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
            <div className="flex items-center gap-3">
              {post.author.avatar ? (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-gold/40"
                />
              ) : (
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-sm font-bold text-white">
                  {post.author.name[0]}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-white/60">{post.author.role}</p>
              </div>
            </div>

            {/* Share action buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Share2 className="h-3.5 w-3.5" />}
                {copied ? 'Copied!' : 'Share Article'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cover Image */}
      <div className="mx-auto max-w-4xl px-6 -mt-8 relative z-20">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-[340px] sm:h-[460px] w-full object-cover"
          />
        </div>
      </div>

      {/* Article Body Content */}
      <div className="mx-auto max-w-3xl px-6 pt-12">
        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 leading-relaxed font-sans">
          {post.content.split('\n\n').map((block, idx) => {
            if (block.startsWith('## ')) {
              return (
                <h2 key={idx} className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mt-10 mb-4">
                  {block.replace('## ', '')}
                </h2>
              )
            }
            if (block.startsWith('### ')) {
              return (
                <h3 key={idx} className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-foreground mt-8 mb-3">
                  {block.replace('### ', '')}
                </h3>
              )
            }
            if (block.startsWith('> ')) {
              return (
                <blockquote key={idx} className="border-l-4 border-gold pl-5 italic my-6 text-foreground font-serif text-lg">
                  {block.replace('> ', '')}
                </blockquote>
              )
            }
            if (block.startsWith('- ') || block.startsWith('1. ')) {
              const items = block.split('\n')
              return (
                <ul key={idx} className="list-disc pl-6 space-y-2 my-4 text-base">
                  {items.map((it, i) => (
                    <li key={i}>{it.replace(/^[-*]\s+|\d+\.\s+/, '')}</li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={idx} className="text-base sm:text-lg leading-relaxed text-foreground/90 my-4">
                {block}
              </p>
            )
          })}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-border pt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2">
              Filed Under:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-forest/10 px-3 py-1 text-xs font-medium text-forest"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Box */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm flex items-start gap-4">
          {post.author.avatar ? (
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/40 shrink-0"
            />
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-base font-bold text-white shrink-0">
              {post.author.name[0]}
            </div>
          )}
          <div>
            <h4 className="font-serif text-base font-semibold text-foreground">{post.author.name}</h4>
            <p className="text-xs text-gold font-medium mt-0.5">{post.author.role}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Contributing editorial thought leadership on basmati supply chains, grain aging science, and FMCG exports for GRM Overseas Ltd.
            </p>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pt-24">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Related Articles & Analysis
            </h2>
            <Link
              href="/blog"
              className="text-xs font-semibold text-forest hover:text-gold flex items-center gap-1"
            >
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <BlogCard key={related.id} post={related} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
