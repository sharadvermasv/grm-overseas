'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const INTERESTS = [
  'Bulk Export',
  'Private Label',
  'Brand Distribution',
  'Samples',
  'Other',
]

export function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    // Open the user's email client with a prefilled message to info@grmrice.com.
    const form = e.currentTarget
    const data = new FormData(form)
    const get = (k: string) => (data.get(k) as string) || '—'
    const subject = `Export enquiry — ${get('interest')} — ${get('company')}`
    const body = [
      `Name: ${get('name')}`,
      `Company: ${get('company')}`,
      `Email: ${get('email')}`,
      `Country: ${get('country')}`,
      `Interested in: ${get('interest')}`,
      '',
      'Message:',
      get('message'),
    ].join('\n')
    const mailto = `mailto:info@grmrice.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setTimeout(() => setStatus('success'), 600)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-forest" />
        <h3 className="mt-4 font-serif text-2xl font-medium text-foreground">
          Thank you for reaching out.
        </h3>
        <p className="mt-2 max-w-sm leading-relaxed text-muted-foreground">
          Your inquiry has been received. Our export team will get back to you
          within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-gold hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Company name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input id="country" name="country" placeholder="Destination country" />
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="interest">I&apos;m interested in</Label>
        <select
          id="interest"
          name="interest"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          {INTERESTS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your requirements — varieties, volumes, packaging and timelines."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-forest-foreground transition-transform hover:scale-[1.02] disabled:opacity-70 sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          'Send Inquiry'
        )}
      </button>
    </form>
  )
}
