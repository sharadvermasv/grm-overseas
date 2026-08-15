'use client'

import React, { useEffect, useState, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { BlogPost, getPostById, getStoredPosts } from '@/lib/blog-store'
import { BlogEditor } from '@/components/blog/blog-editor'

interface EditPageProps {
  params: Promise<{ id: string }>
}

export default function EditBlogPostPage({ params }: EditPageProps) {
  const { id } = use(params)
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null | undefined>(undefined)

  useEffect(() => {
    const posts = getStoredPosts()
    const found = posts.find((p) => p.id === id)
    setPost(found || null)
  }, [id])

  if (post === undefined) {
    return <div className="min-h-screen bg-background pt-32 text-center text-sm">Loading article...</div>
  }

  if (post === null) {
    return (
      <div className="min-h-screen bg-background pt-32 text-center px-6">
        <h1 className="font-serif text-2xl font-bold">Article not found</h1>
        <p className="text-sm text-muted-foreground mt-2">The article you are trying to edit does not exist.</p>
        <Link
          href="/admin/blog"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-forest px-4 py-2 text-xs font-semibold text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Return to CRM Dashboard
        </Link>
      </div>
    )
  }

  return <BlogEditor initialPost={post} isEditMode />
}
