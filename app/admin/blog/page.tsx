'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Plus,
  Search,
  Eye,
  Edit2,
  Trash2,
  Copy,
  CheckCircle,
  FileText,
  Clock,
  Sparkles,
  RefreshCw,
  ExternalLink,
  ArrowUpRight,
  Filter,
} from 'lucide-react'
import {
  BlogPost,
  BLOG_CATEGORIES,
  getStoredPosts,
  deletePost,
  updatePost,
  createPost,
  resetToSeedData,
} from '@/lib/blog-store'

export default function AdminBlogDashboard() {
  const router = useRouter()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [notification, setNotification] = useState<string | null>(null)

  const loadPosts = () => {
    setPosts(getStoredPosts())
  }

  useEffect(() => {
    loadPosts()
  }, [])

  const showNotification = (msg: string) => {
    setNotification(msg)
    setTimeout(() => setNotification(null), 3000)
  }

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      deletePost(id)
      loadPosts()
      showNotification('Post deleted successfully')
    }
  }

  const handleToggleStatus = (post: BlogPost) => {
    const newStatus = post.status === 'published' ? 'draft' : 'published'
    updatePost(post.id, { status: newStatus })
    loadPosts()
    showNotification(`Post updated to ${newStatus}`)
  }

  const handleDuplicate = (post: BlogPost) => {
    createPost({
      ...post,
      title: `${post.title} (Copy)`,
      slug: `${post.slug}-copy-${Date.now()}`,
      status: 'draft',
      publishedAt: new Date().toISOString().split('T')[0],
      featured: false,
    })
    loadPosts()
    showNotification('Post duplicated as draft')
  }

  const handleReset = () => {
    if (confirm('Reset all posts to default seed articles? Any custom posts will be overwritten.')) {
      resetToSeedData()
      loadPosts()
      showNotification('Reset to seed articles successfully')
    }
  }

  // Analytics Metrics
  const stats = useMemo(() => {
    const total = posts.length
    const published = posts.filter((p) => p.status === 'published').length
    const drafts = posts.filter((p) => p.status === 'draft').length
    const totalViews = posts.reduce((acc, p) => acc + (p.views || 0), 0)
    return { total, published, drafts, totalViews }
  }, [posts])

  // Filtered Posts
  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const matchSearch =
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.author.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchStatus = selectedStatus === 'all' || p.status === selectedStatus
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory

      return matchSearch && matchStatus && matchCat
    })
  }, [posts, searchQuery, selectedStatus, selectedCategory])

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Top Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-forest/10 px-2.5 py-0.5 text-xs font-semibold text-forest">
                GRM CMS v1.0
              </span>
              <span className="text-xs text-muted-foreground">Admin Portal</span>
            </div>
            <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Blog & Publications CRM
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage international grain intelligence articles, culinary guides, and export press releases.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/blog"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              View Public Blog
            </Link>

            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-2 rounded-xl bg-forest px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-transform hover:scale-[1.02]"
            >
              <Plus className="h-4 w-4" />
              Write New Article
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-8">
        {/* Notification Alert */}
        {notification && (
          <div className="mb-6 flex items-center justify-between rounded-xl border border-forest/30 bg-forest/10 p-4 text-xs font-semibold text-forest animate-in fade-in">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              {notification}
            </span>
            <button onClick={() => setNotification(null)} className="text-xs hover:underline">
              Dismiss
            </button>
          </div>
        )}

        {/* Analytics Stat Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Total Articles</span>
              <FileText className="h-4 w-4 text-gold" />
            </div>
            <p className="mt-3 font-serif text-3xl font-bold text-foreground">{stats.total}</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Published</span>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </div>
            <p className="mt-3 font-serif text-3xl font-bold text-green-600">{stats.published}</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Drafts / In Review</span>
              <Clock className="h-4 w-4 text-amber-500" />
            </div>
            <p className="mt-3 font-serif text-3xl font-bold text-amber-500">{stats.drafts}</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Total Article Reads</span>
              <Eye className="h-4 w-4 text-forest" />
            </div>
            <p className="mt-3 font-serif text-3xl font-bold text-forest">{stats.totalViews.toLocaleString()}</p>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, author, topic..."
              className="w-full rounded-xl border border-border bg-background py-2 pl-9 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="rounded-xl border border-border bg-background px-3 py-2 text-xs font-medium text-foreground focus:border-gold focus:outline-none"
            >
              <option value="all">All Status</option>
              <option value="published">Published Only</option>
              <option value="draft">Drafts Only</option>
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-xl border border-border bg-background px-3 py-2 text-xs font-medium text-foreground focus:border-gold focus:outline-none"
            >
              {BLOG_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <button
              onClick={handleReset}
              title="Reset to default seed articles"
              className="inline-flex items-center gap-1 rounded-xl border border-border bg-background px-3 py-2 text-xs text-muted-foreground hover:text-foreground"
            >
              <RefreshCw className="h-3 w-3" />
              Reset Seeds
            </button>
          </div>
        </div>

        {/* Articles Table */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border bg-secondary/40 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="py-3.5 px-4">Article</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Author</th>
                  <th className="py-3.5 px-4">Published</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Views</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredPosts.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-sm text-muted-foreground">
                      No articles found matching the current filters.
                    </td>
                  </tr>
                ) : (
                  filteredPosts.map((post) => (
                    <tr key={post.id} className="transition-colors hover:bg-secondary/20">
                      {/* Title & Cover thumbnail */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={post.coverImage}
                            alt=""
                            className="h-10 w-14 rounded-lg object-cover border border-border shrink-0"
                          />
                          <div className="max-w-md">
                            <Link
                              href={`/admin/blog/edit/${post.id}`}
                              className="font-serif text-sm font-semibold text-foreground hover:text-forest line-clamp-1"
                            >
                              {post.title}
                            </Link>
                            <span className="text-[11px] text-muted-foreground font-mono">
                              /blog/{post.slug}
                            </span>
                            {post.featured && (
                              <span className="ml-2 inline-flex items-center gap-0.5 rounded bg-gold/15 px-1.5 py-0.2 text-[9px] font-bold text-gold">
                                ★ Featured
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-3.5 px-4">
                        <span className="inline-flex rounded-md bg-secondary px-2.5 py-1 text-[11px] font-medium text-foreground">
                          {post.category}
                        </span>
                      </td>

                      {/* Author */}
                      <td className="py-3.5 px-4">
                        <span className="font-medium text-foreground">{post.author.name}</span>
                      </td>

                      {/* Published Date */}
                      <td className="py-3.5 px-4 text-muted-foreground whitespace-nowrap">
                        {post.publishedAt}
                      </td>

                      {/* Status Toggle Badge */}
                      <td className="py-3.5 px-4">
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(post)}
                          title="Click to toggle status"
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold transition-all ${
                            post.status === 'published'
                              ? 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300'
                              : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              post.status === 'published' ? 'bg-green-500' : 'bg-amber-500'
                            }`}
                          />
                          {post.status}
                        </button>
                      </td>

                      {/* Views */}
                      <td className="py-3.5 px-4 font-mono text-muted-foreground">
                        {post.views || 0}
                      </td>

                      {/* Action buttons */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          {post.status === 'published' && (
                            <Link
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              title="View Public Post"
                              className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          )}

                          <Link
                            href={`/admin/blog/edit/${post.id}`}
                            title="Edit Article"
                            className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-forest"
                          >
                            <Edit2 className="h-4 w-4" />
                          </Link>

                          <button
                            type="button"
                            onClick={() => handleDuplicate(post)}
                            title="Duplicate Post"
                            className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-gold"
                          >
                            <Copy className="h-4 w-4" />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDelete(post.id, post.title)}
                            title="Delete Post"
                            className="rounded-lg p-1.5 text-muted-foreground hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
