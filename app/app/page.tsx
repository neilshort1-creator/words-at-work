// trigger deploy
import { redirect } from 'next/navigation'
import { createClient } from '../../lib/supabase/server'
import Header from '../../components/Header'



export default async function Dashboard() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  return (
    <>
      <Header signedIn={true} />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold mb-3">Run Website Audit</h2>
            <form action="#" className="space-y-3">
              <input className="w-full rounded-xl border px-4 py-3" placeholder="Enter your website (e.g., rchltd.co.uk)" />
              <button className="rounded-2xl bg-wtw-purple text-white px-5 py-3">Run audit</button>
            </form>
            <p className="text-gray-600 text-sm mt-3">This is a placeholder. We’ll wire this up to your audit engine next.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <h3 className="font-semibold mb-2">Credits</h3>
            <p className="text-gray-700">Starter: 2 articles/month</p>
            <div className="mt-3 h-3 w-full bg-gray-200 rounded-xl overflow-hidden">
              <div className="h-3 bg-wtw-purple" style={{ width: '40%' }} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
