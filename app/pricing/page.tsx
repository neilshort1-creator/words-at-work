import Header from '../components/Header'


export default function PricingPage() {
  const plans = [
    { name: 'Starter', price: '£129/mo', features: ['2 articles/month', 'SEO optimisation', 'Website analysis tool'] },
    { name: 'Growth', price: '£249/mo', features: ['4 articles/month', 'Keyword research', 'Content calendar'] },
    { name: 'Scale', price: '£499/mo', features: ['10 articles/month', 'Bulk rewriter', 'Competitor insights'] },
  ]
  return (
    <>
      <Header signedIn={false} />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Pricing</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl bg-white p-6 shadow-soft">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-2xl mt-2">{p.price}</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                {p.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
