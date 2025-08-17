import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Words at Work – SEO content that gets you found',
  description: 'Run a quick website analysis and get search-friendly articles each month.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
