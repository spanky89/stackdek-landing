import { useState } from 'react'

const features = [
  { icon: '📋', title: 'Digital Stack', desc: 'Your jobs, lined up the way you think about them. Not a calendar — a stack. Top of the pile gets done first.' },
  { icon: '🔄', title: 'Flexible Flow', desc: 'Rain delay? Emergency call? Just drag and reorder. Your day adapts to reality, not the other way around.' },
  { icon: '📝', title: 'Simple Quotes', desc: 'Build a quote in 60 seconds from the truck. Send it before you pull out of the driveway.' },
  { icon: '📊', title: 'Lead Tracker', desc: 'Know who called, who you quoted, and who ghosted. Follow up at the right time, every time.' },
  { icon: '📱', title: 'Mobile & Offline', desc: "Works on your phone. Works without signal. Because you're on a roof, not at a desk." },
  { icon: '💰', title: 'Affordable Forever', desc: "No per-seat fees. No premium tiers. One price that stays low — because contractors shouldn't need an MBA to afford software." },
]

const painPoints = [
  { icon: '💸', text: 'Pricing balloons — starts at $50/month, then doubles when you add your crew and need basic features' },
  { icon: '🔒', text: 'Features locked behind paywalls — want to send a simple quote? That\'s a "Pro" plan upgrade' },
  { icon: '📅', text: 'Overly complex scheduling — forced into color-coded calendars and strict 15-minute time slots that don\'t match how you work' },
  { icon: '🤯', text: 'Built for enterprise — designed for 500-person companies, not a 5-person roofing crew running jobs off the dash' },
  { icon: '🖥️', text: "Desktop-first design — completely useless when you're standing in a customer's yard or up on a roof" },
  { icon: '📢', text: 'Feature bloat everywhere — dashboards crammed with stuff you never asked for and will never use' },
]

const testimonials = [
  { name: 'Mike R.', trade: 'Roofing Contractor', text: 'Finally a CRM that matches how I actually run my roofing jobs. Stack it, do it, next.', avatar: '🏗️' },
  { name: 'Carlos D.', trade: 'Landscaping Owner', text: 'I was juggling three apps and a notebook. StackDek replaced all of it from my phone.', avatar: '🌿' },
  { name: 'Lisa M.', trade: 'Cleaning Service', text: 'My quotes used to take 20 minutes. Now I send them before I leave the walkthrough.', avatar: '✨' },
  { name: 'James W.', trade: 'HVAC Technician', text: 'The offline mode is a game-changer. Half my jobs are in basements with zero signal.', avatar: '❄️' },
]

const trades = [
  'Roofing', 'Landscaping', 'Cleaning', 'Plumbing', 'HVAC', 'Electrical',
  'Painting', 'Flooring', 'General Contracting', 'Pest Control', 'Other',
]

function SignUpForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', trade: '', headache: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.name) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Failed to submit signup')
      }

      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', trade: '', headache: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error('Signup error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">You're on the list!</h3>
        <p className="text-green-700">We'll reach out soon with early access details.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto text-left">
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="name" required value={form.name} onChange={handleChange} placeholder="Your Name *" className="w-full px-5 py-4 rounded-xl border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-base" />
        <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="Email *" className="w-full px-5 py-4 rounded-xl border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-base" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" className="w-full px-5 py-4 rounded-xl border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-base" />
        <select name="trade" value={form.trade} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-base appearance-none bg-white">
          <option value="">Trade / Business Type</option>
          {trades.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <textarea name="headache" value={form.headache} onChange={handleChange} placeholder="What's your biggest CRM headache? (optional)" rows={3} className="w-full px-5 py-4 rounded-xl border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-base resize-none" />
      {error && <p className="text-red-600 text-sm text-center">{error}</p>}
      <button type="submit" disabled={loading} className="w-full bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 text-white font-bold px-8 py-4 rounded-xl text-lg transition">
        {loading ? 'Joining...' : 'Join the Beta — It\'s Free →'}
      </button>
      <p className="text-sm text-neutral-500 text-center">No credit card. No commitment. Just early access.</p>
    </form>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-symbol.png" alt="StackDek" className="h-9 w-auto" />
            <span className="text-xl font-bold tracking-tight">StackDek</span>
          </div>
          <a href="#signup" className="bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition">
            Join Beta
          </a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="max-w-5xl mx-auto px-5 pt-16 pb-20 md:pt-28 md:pb-28 text-center">
        <p className="text-sm sm:text-base font-bold uppercase tracking-widest text-neutral-500 mb-4">Built by Contractors, For Contractors</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          The Simple CRM That<br className="hidden sm:block" /> Works Like You Do
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto mb-4 leading-relaxed">
          Tired of CRMs like Jobber that pile on bloat, hidden fees, and forced schedules?<br className="hidden md:block" />
          We're stripping out the complexity that slows you down and keeping what actually helps: <strong>more jobs closed, less time wasted chasing details.</strong>
        </p>
        <p className="text-base text-neutral-500 mb-10 max-w-xl mx-auto">
          Made by contractors, for contractors — we know what you need. Your jobs, quotes, and leads in one simple stack. No learning curve. No desktop required.
        </p>
        <a href="#signup" className="inline-block bg-neutral-900 hover:bg-neutral-800 text-white font-bold px-10 py-4 rounded-xl text-lg transition shadow-lg shadow-neutral-900/10">
          Get Early Access — Free →
        </a>
        <p className="text-sm text-neutral-400 mt-5">🚀 Beta users lock in 50% off for life</p>
      </section>

      {/* ─── CORE IDEA ─── */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">We Get How You Really Work</h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              Let's be real — most old-school contractors don't live by color-coded calendars and strict 15-minute slots. You've got a <strong>stack of quotes sitting on the dash</strong>, a mental list of callbacks, and you're figuring out what gets done today based on the weather, who's home, and what's been waiting the longest.
            </p>
            <p>
              That's not disorganized — that's how the trade works. But every CRM out there tries to force you into some corporate workflow designed for office managers, not guys running crews out of their truck.
            </p>
            <p>
              Your jobs aren't appointments — they're a <strong>stack</strong>. A pile of work that shifts every day based on what's real, not what some software thinks your schedule should look like. Rain delay? Emergency call? Customer no-show? You adapt. Your tools should too.
            </p>
            <p>
              That's why we built StackDek around a <strong>flexible flow</strong> instead of a rigid calendar. Your quotes live next to your jobs. Your leads don't disappear into a spreadsheet. And the whole thing runs from your phone — because that's where you run your business.
            </p>
            <p className="font-semibold text-neutral-900">
              We're stripping out the complexity that slows you down and keeping what actually helps: more jobs closed, less time wasted chasing details.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PAIN POINTS ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Sound Familiar?</h2>
          <p className="text-center text-neutral-600 mb-12 text-lg">Every CRM you've tried has the same problems:</p>
          <div className="space-y-4">
            {painPoints.map((p) => (
              <div key={p.text} className="flex items-start gap-4 bg-red-50 border border-red-100 rounded-xl p-5">
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <p className="text-neutral-800 text-base sm:text-lg">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES TEASE ─── */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">What You Actually Get</h2>
          <p className="text-center text-neutral-600 mb-12 text-lg max-w-2xl mx-auto">Six things. That's it. No feature bloat — just what contractors told us they need.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-neutral-200 rounded-2xl p-7 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-neutral-900">{f.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Contractors Get It</h2>
          <p className="text-center text-neutral-600 mb-12 text-lg">Here's what early testers are saying</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-neutral-200 rounded-2xl p-7">
                <p className="text-neutral-800 text-lg leading-relaxed italic mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{t.avatar}</span>
                  <div>
                    <p className="font-bold text-neutral-900">{t.name}</p>
                    <p className="text-sm text-neutral-500">{t.trade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER CTA + SIGN-UP ─── */}
      <section id="signup" className="bg-neutral-900 text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join the StackDek Beta Today</h2>
          <p className="text-lg text-neutral-300 mb-10 max-w-xl mx-auto">
            Get in early. Help shape the tool. Lock in the lowest price we'll ever offer.
          </p>
          <div className="bg-white text-neutral-900 rounded-2xl p-8 sm:p-10">
            <SignUpForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50 py-10">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <img src="/logo-symbol.png" alt="StackDek" className="h-7 w-auto" />
            <span className="font-bold text-neutral-700">StackDek</span>
          </div>
          <p>© {new Date().getFullYear()} StackDek. All rights reserved.</p>
          <a href="mailto:hello@stackdek.com" className="hover:text-neutral-900 transition">hello@stackdek.com</a>
        </div>
      </footer>
    </div>
  )
}
