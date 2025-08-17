'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header({ signedIn }: { signedIn: boolean }) {
  const pathname = usePathname()
  return (
    <header className="w-full bg-white shadow-soft">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-wtw-purple">Words at Work</Link>
        <nav className="flex items-center gap-4">
          <Link href="/pricing" className="text-sm">Pricing</Link>
          {signedIn ? (
            <Link href="/app" className="rounded-2xl bg-wtw-purple text-white px-4 py-2 text-sm">Dashboard</Link>
          ) : pathname === '/login' ? null : (
            <Link href="/login" className="rounded-2xl bg-wtw-purple text-white px-4 py-2 text-sm">Log in</Link>
          )}
        </nav>
      </div>
    </header>
  )
}
