'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  Bold,
  Italic,
  Heading2,
  Heading3,
  Quote,
  List,
  ListOrdered,
  Link as LinkIcon,
  Image as ImageIcon,
  Table as TableIcon,
  Eye,
  Edit3,
  Save,
  CheckCircle,
  ArrowLeft,
  Sparkles,
  Clock,
  Trash2,
} from 'lucide-react'
import {
  BlogPost,
  BLOG_CATEGORIES,
  DEFAULT_AUTHORS,
  PRESET_COVER_IMAGES,
  slugify,
  calculateReadingTime,
  createPost,
  updatePost,
  deletePost,
} from '@/lib/blog-store'
import { SeoPreview } from './seo-preview'

interface BlogEditorProps {
  initialPost?: BlogPost
  isEditMode?: boolean
}

export function BlogEditor({ initialPost, isEditMode = false }: BlogEditorProps) {
  const router = useRouter()

  const [title, setTitle] = useState(initialPost?.title || '')
  const [slug, setSlug] = useState(initialPost?.slug || '')
  const [autoSlug, setAutoSlug] = useState(!isEditMode)
  const [excerpt, setExcerpt] = useState(initialPost?.excerpt || '')
  const [content, setContent] = useState(initialPost?.content || '')
  const [category, setCategory] = useState(initialPost?.category || 'Export Insights')
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState<string[]>(initialPost?.tags || ['Basmati Rice', 'Exports'])
  const [coverImage, setCoverImage] = useState(
    initialPost?.coverImage || PRESET_COVER_IMAGES[0].url
  )
  const [selectedAuthorIdx, setSelectedAuthorIdx] = useState(0)
  const [status, setStatus] = useState<'published' | 'draft' | 'scheduled'>(
    initialPost?.status || 'published'
  )
  const [featured, setFeatured] = useState(initialPost?.featured || false)
  const [activeTab, setActiveTab] = useState<'edit' | 'preview' | 'split'>('split')
  const [isSaving, setIsSaving] = useState(false)
  const [notification, setNotification] = useState<string | null>(null)

  // Auto generate slug from title if enabled
  useEffect(() => {
    if (autoSlug) {
      setSlug(slugify(title))
    }
  }, [title, autoSlug])

  const readingTime = calculateReadingTime(content)
  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0

  // Format toolbar helpers
  const insertFormatting = (prefix: string, suffix: string = '') => {
    const textarea = document.getElementById('blog-content-textarea') as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selected = content.substring(start, end)
    const replacement = prefix + (selected || 'text') + suffix
    const updatedContent = content.substring(0, start) + replacement + content.substring(end)

    setContent(updatedContent)
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + prefix.length, start + replacement.length - suffix.length)
    }, 50)
  }

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      const clean = tagInput.trim().replace(/^#/, '')
      if (clean && !tags.includes(clean)) {
        setTags([...tags, clean])
        setTagInput('')
      }
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove))
  }

  const handleSave = (newStatus?: 'published' | 'draft') => {
    if (!title.trim()) {
      alert('Please enter an article title')
      return
    }

    setIsSaving(true)
    const finalStatus = newStatus || status
    const author = DEFAULT_AUTHORS[selectedAuthorIdx] || DEFAULT_AUTHORS[0]

    if (isEditMode && initialPost) {
      updatePost(initialPost.id, {
        title,
        slug: slug || slugify(title),
        excerpt,
        content,
        category,
        tags,
        coverImage,
        author,
        status: finalStatus,
        featured,
      })
      setNotification('Article updated successfully!')
    } else {
      createPost({
        title,
        slug: slug || slugify(title),
        excerpt: excerpt || title,
        content: content || 'Article content in progress...',
        category,
        tags,
        coverImage,
        author,
        publishedAt: new Date().toISOString().split('T')[0],
        status: finalStatus,
        featured,
      })
      setNotification('Article created successfully!')
    }

    setIsSaving(false)
    setTimeout(() => {
      router.push('/admin/blog')
    }, 800)
  }

  const handleDelete = () => {
    if (initialPost && confirm('Are you sure you want to delete this blog post?')) {
      deletePost(initialPost.id)
      router.push('/admin/blog')
    }
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Top action header bar */}
      <div className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur-xl px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push('/admin/blog')}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors hover:bg-secondary"
              aria-label="Back to dashboard"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div>
              <h1 className="font-serif text-lg font-semibold text-foreground">
                {isEditMode ? 'Edit Article' : 'Create New Article'}
              </h1>
              <p className="text-xs text-muted-foreground">
                {wordCount} words • {readingTime} min read
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            {notification && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest animate-in fade-in">
                <CheckCircle className="h-3.5 w-3.5" />
                {notification}
              </span>
            )}

            {isEditMode && (
              <button
                type="button"
                onClick={handleDelete}
                className="inline-flex items-center gap-1.5 rounded-xl border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Delete
              </button>
            )}

            <button
              type="button"
              onClick={() => handleSave('draft')}
              disabled={isSaving}
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Save className="h-3.5 w-3.5" />
              Save Draft
            </button>

            <button
              type="button"
              onClick={() => handleSave('published')}
              disabled={isSaving}
              className="inline-flex items-center gap-1.5 rounded-xl bg-forest px-5 py-2 text-xs font-semibold text-white shadow-md transition-transform hover:scale-[1.02]"
            >
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              {isEditMode ? 'Update & Publish' : 'Publish Article'}
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Main Column: Content & Markdown */}
          <div className="space-y-6 lg:col-span-8">
            {/* Title & Slug */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Article Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. The Science of Aging Basmati Rice"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 font-serif text-xl font-medium text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    URL Slug
                  </label>
                  <button
                    type="button"
                    onClick={() => setAutoSlug(!autoSlug)}
                    className="text-[11px] text-gold hover:underline"
                  >
                    {autoSlug ? 'Lock Slug' : 'Auto-Generate'}
                  </button>
                </div>
                <div className="mt-2 flex items-center rounded-xl border border-border bg-background px-3 py-2 text-xs">
                  <span className="text-muted-foreground select-none">/blog/</span>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => {
                      setAutoSlug(false)
                      setSlug(slugify(e.target.value))
                    }}
                    placeholder="article-slug"
                    className="w-full bg-transparent font-mono text-xs text-foreground focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Excerpt / Short Summary
                </label>
                <textarea
                  rows={2}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="A brief 1-2 sentence overview of the article for social sharing and search snippets..."
                  className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
            </div>

            {/* Markdown Content Editor */}
            <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
              {/* Editor View Switcher & Toolbar */}
              <div className="flex flex-wrap items-center justify-between border-b border-border bg-secondary/50 p-3">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => insertFormatting('## ', '\n')}
                    title="Heading 2"
                    className="rounded-lg p-2 text-foreground/80 hover:bg-background hover:text-foreground"
                  >
                    <Heading2 className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('### ', '\n')}
                    title="Heading 3"
                    className="rounded-lg p-2 text-foreground/80 hover:bg-background hover:text-foreground"
                  >
                    <Heading3 className="h-4 w-4" />
                  </button>
                  <span className="h-4 w-px bg-border mx-1" />
                  <button
                    type="button"
                    onClick={() => insertFormatting('**', '**')}
                    title="Bold"
                    className="rounded-lg p-2 text-foreground/80 hover:bg-background hover:text-foreground"
                  >
                    <Bold className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('*', '*')}
                    title="Italic"
                    className="rounded-lg p-2 text-foreground/80 hover:bg-background hover:text-foreground"
                  >
                    <Italic className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('> ', '\n')}
                    title="Quote"
                    className="rounded-lg p-2 text-foreground/80 hover:bg-background hover:text-foreground"
                  >
                    <Quote className="h-4 w-4" />
                  </button>
                  <span className="h-4 w-px bg-border mx-1" />
                  <button
                    type="button"
                    onClick={() => insertFormatting('- ', '\n')}
                    title="Bullet List"
                    className="rounded-lg p-2 text-foreground/80 hover:bg-background hover:text-foreground"
                  >
                    <List className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('1. ', '\n')}
                    title="Numbered List"
                    className="rounded-lg p-2 text-foreground/80 hover:bg-background hover:text-foreground"
                  >
                    <ListOrdered className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('[Link Title](', ')')}
                    title="Insert Link"
                    className="rounded-lg p-2 text-foreground/80 hover:bg-background hover:text-foreground"
                  >
                    <LinkIcon className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('![Image description](', ')')}
                    title="Insert Image"
                    className="rounded-lg p-2 text-foreground/80 hover:bg-background hover:text-foreground"
                  >
                    <ImageIcon className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      insertFormatting(
                        '\n| Feature | Specification |\n|---|---|\n| Grain Length | 8.35 mm |\n| Moisture | 12% Max |\n'
                      )
                    }
                    title="Insert Table"
                    className="rounded-lg p-2 text-foreground/80 hover:bg-background hover:text-foreground"
                  >
                    <TableIcon className="h-4 w-4" />
                  </button>
                </div>

                {/* View Tabs */}
                <div className="flex items-center rounded-xl bg-background p-1 border border-border text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab('edit')}
                    className={`flex items-center gap-1 rounded-lg px-2.5 py-1 font-medium transition-colors ${
                      activeTab === 'edit'
                        ? 'bg-forest text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Edit3 className="h-3 w-3" /> Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('split')}
                    className={`flex items-center gap-1 rounded-lg px-2.5 py-1 font-medium transition-colors ${
                      activeTab === 'split'
                        ? 'bg-forest text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Split
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('preview')}
                    className={`flex items-center gap-1 rounded-lg px-2.5 py-1 font-medium transition-colors ${
                      activeTab === 'preview'
                        ? 'bg-forest text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Eye className="h-3 w-3" /> Preview
                  </button>
                </div>
              </div>

              {/* Editor Workspace */}
              <div
                className={`grid min-h-[480px] ${
                  activeTab === 'split'
                    ? 'lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border'
                    : 'grid-cols-1'
                }`}
              >
                {/* Textarea Input */}
                {(activeTab === 'edit' || activeTab === 'split') && (
                  <textarea
                    id="blog-content-textarea"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your article in Markdown format here..."
                    className="w-full resize-y bg-background p-5 font-mono text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
                    rows={20}
                  />
                )}

                {/* Live Preview Pane */}
                {(activeTab === 'preview' || activeTab === 'split') && (
                  <div className="bg-card p-6 overflow-y-auto max-h-[600px] prose dark:prose-invert max-w-none text-foreground text-left">
                    <h1 className="font-serif text-2xl font-bold">{title || 'Untitled Article'}</h1>
                    <div className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90 font-sans mt-4">
                      {content || <span className="text-muted-foreground italic">Preview will render here...</span>}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Live SEO Preview */}
            <SeoPreview title={title} slug={slug} excerpt={excerpt} />
          </div>

          {/* Sidebar: Metadata & Settings */}
          <div className="space-y-6 lg:col-span-4">
            {/* Status & Featured */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
              <h3 className="font-serif text-base font-semibold text-foreground">Publishing Settings</h3>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Post Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as any)}
                  className="mt-2 w-full rounded-xl border border-border bg-background p-2.5 text-sm font-medium text-foreground focus:border-gold focus:outline-none"
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>

              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="text-xs font-medium text-foreground">Feature this story on homepage</span>
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="h-4 w-4 rounded border-border text-forest focus:ring-gold"
                />
              </div>
            </div>

            {/* Category */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-3">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-border bg-background p-2.5 text-sm font-medium text-foreground focus:border-gold focus:outline-none"
              >
                {BLOG_CATEGORIES.filter((c) => c !== 'All').map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Author */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-3">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Author
              </label>
              <select
                value={selectedAuthorIdx}
                onChange={(e) => setSelectedAuthorIdx(Number(e.target.value))}
                className="w-full rounded-xl border border-border bg-background p-2.5 text-sm font-medium text-foreground focus:border-gold focus:outline-none"
              >
                {DEFAULT_AUTHORS.map((auth, idx) => (
                  <option key={idx} value={idx}>
                    {auth.name} ({auth.role.split(',')[0]})
                  </option>
                ))}
              </select>
            </div>

            {/* Cover Image Selector */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Cover Image
              </label>

              {coverImage && (
                <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
                  <img src={coverImage} alt="Cover preview" className="h-full w-full object-cover" />
                </div>
              )}

              <div>
                <span className="text-xs text-muted-foreground block mb-2">Preset Images:</span>
                <div className="grid grid-cols-3 gap-2">
                  {PRESET_COVER_IMAGES.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCoverImage(preset.url)}
                      className={`relative aspect-video overflow-hidden rounded-lg border-2 transition-all ${
                        coverImage === preset.url ? 'border-gold ring-2 ring-gold/40' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={preset.url} alt={preset.label} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs text-muted-foreground block mb-1">Or custom image URL:</span>
                <input
                  type="url"
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  placeholder="https://..."
                  className="w-full rounded-xl border border-border bg-background p-2.5 text-xs text-foreground focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            {/* Tags */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-3">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Tags
              </label>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full bg-forest/10 px-2.5 py-1 text-xs font-medium text-forest"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-red-500 text-xs ml-0.5"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
                placeholder="Type tag and press Enter..."
                className="w-full rounded-xl border border-border bg-background p-2.5 text-xs text-foreground focus:border-gold focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
