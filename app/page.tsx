import Link from 'next/link'
import Header from '../components/Header'


export default function HomePage() {
  return (
    <>
      <Header signedIn={false} />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <section className="rounded-2xl bg-white p-8 shadow-soft">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">SEO Content that gets you found</h1>
          <p className="text-lg text-gray-700 mb-6">
            We plan, write, and optimise your website content so your business is easier to find on Google.
          </p>
          <div className="flex gap-3">
            <Link href="/login" className="rounded-2xl bg-wtw-purple text-white px-6 py-3">Start free 14-day trial</Link>
            <Link href="/pricing" className="rounded-2xl border border-gray-300 px-6 py-3">See pricing</Link>
          </div>
        </section>
      </main>
    </>
  )
}
