'use client'
import { useState } from 'react'
import { createClient } from '../../lib/supabase/client'
import Header from '../../components/Header'



export default function LoginPage() {
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendLink = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${location.origin}/app`
      }
    })
    if (error) setError(error.message)
    else setSent(true)
  }

  return (
    <>
      <Header signedIn={false} />
      <main className="mx-auto max-w-md px-4 py-12">
        <div className="bg-white rounded-2xl p-6 shadow-soft">
          <h1 className="text-2xl font-semibold mb-2">Log in</h1>
          <p className="text-gray-700 mb-4">We’ll email you a one-time login link.</p>
          <form onSubmit={sendLink} className="space-y-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@business.co.uk"
              className="w-full rounded-xl border px-4 py-3"
            />
            <button className="w-full rounded-2xl bg-wtw-purple text-white px-4 py-3">
              Send login link
            </button>
          </form>
          {sent && <p className="text-green-700 mt-4">Check your inbox for the login link.</p>}
          {error && <p className="text-red-700 mt-4">{error}</p>}
        </div>
      </main>
    </>
  )
}
