import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.grmrice.com'),
  title: {
    default:
      'GRM Overseas Ltd. | The World’s Finest Basmati, From India to Global Tables',
    template: '%s | GRM Overseas Ltd.',
  },
  description:
    'GRM Overseas Ltd. — a listed Indian basmati rice house exporting to 65+ countries since 1974. GMP, ISO 22000, BRC, U.S. FDA, Organic, SQF/HACCP, Kosher and Halal certified. The 2nd largest rice exporter to the Middle East and 3rd largest worldwide.',
  generator: 'v0.app',
  keywords: [
    'basmati rice exporter',
    'GRM Overseas',
    'GRM Overseas Limited',
    'premium basmati rice',
    'rice supplier India',
    'Himalaya basmati',
    'Tanoush basmati',
    'sella rice exporter',
    'golden sella rice',
    'private label rice',
  ],
  icons: {
    icon: '/brand/grm-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1b1a16',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${fraunces.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-background font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
