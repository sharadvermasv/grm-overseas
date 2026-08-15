'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar, Eye } from 'lucide-react'
import { BlogPost } from '@/lib/blog-store'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-gold/50 lg:grid lg:grid-cols-12">
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:col-span-7">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center rounded-full bg-forest px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-forest-foreground shadow-md">
              {post.category}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
          <div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-gold" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-gold" />
                {post.readingTimeMinutes} min read
              </span>
            </div>

            <h2 className="mt-4 font-serif text-2xl font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-forest sm:text-3xl">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-6">
            <div className="flex items-center gap-3">
              {post.author.avatar ? (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-gold/40"
                />
              ) : (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-xs font-bold text-white">
                  {post.author.name[0]}
                </div>
              )}
              <div className="text-left">
                <p className="text-xs font-semibold text-foreground">{post.author.name}</p>
                <p className="text-[11px] text-muted-foreground line-clamp-1">{post.author.role}</p>
              </div>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-forest/10 px-3.5 py-2 text-xs font-semibold text-forest transition-colors hover:bg-forest hover:text-white"
            >
              Read Story
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gold/40 hover:-translate-y-1">
      <div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center rounded-full bg-forest/90 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3 text-gold" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-gold" />
              {post.readingTimeMinutes} min read
            </span>
          </div>

          <h3 className="mt-3 font-serif text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-forest line-clamp-2">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>

          <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="border-t border-border/60 p-6 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {post.author.avatar ? (
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-7 w-7 rounded-full object-cover ring-1 ring-gold/40"
            />
          ) : (
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-[10px] font-bold text-white">
              {post.author.name[0]}
            </div>
          )}
          <span className="text-xs font-medium text-foreground line-clamp-1">{post.author.name}</span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="text-xs font-semibold text-gold transition-colors hover:text-forest flex items-center gap-1"
        >
          Read <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </article>
  )
}
