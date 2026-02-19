import { useState } from 'react'

const features = [
  { 
    icon: '📋', 
    title: 'Digital Stack', 
    desc: 'Your jobs, lined up the way you think about them. Not a calendar — a stack. Top of the pile gets done first.',
    detail: 'Drag and drop to reorder. Mark complete and the next job auto-highlights. Simple visual flow that matches your mental model.'
  },
  { 
    icon: '🔄', 
    title: 'Flexible Flow', 
    desc: 'Rain delay? Emergency call? Just drag and reorder. Your day adapts to reality, not the other way around.',
    detail: 'No rigid time blocks. No forced calendar. Move jobs around as priorities shift throughout the day.'
  },
  { 
    icon: '📝', 
    title: 'Simple Quotes & Contracts', 
    desc: 'Build a quote in 60 seconds. Send AND sign contracts right in the app — no DocuSign needed.',
    detail: 'Professional quotes with your branding. Built-in e-signature. Track opens and signatures. Text or email delivery.'
  },
  { 
    icon: '📊', 
    title: 'Job Costing & Tracking', 
    desc: 'Know your actual profit on every job. Track materials, labor, and expenses in real-time.',
    detail: 'See which jobs make money and which don\'t. Make better decisions on pricing and job selection.'
  },
  { 
    icon: '📱', 
    title: 'Mobile & Offline', 
    desc: "Works on your phone. Works without signal. Because you're on a roof, not at a desk.",
    detail: 'Native mobile apps for iOS and Android. Offline mode syncs when you get back online. Built for the job site.'
  },
  { 
    icon: '🎯', 
    title: 'Marketing Suite', 
    desc: 'Automated follow-ups, email campaigns, and customer reminders. Stay top-of-mind without lifting a finger.',
    detail: 'Pre-built templates for common scenarios. Schedule campaigns. Track engagement. Turn past customers into repeat business.'
  },
]

const painPoints = [
  { icon: '💸', text: 'Pricing balloons — starts at $50/month, then doubles when you add your crew and need basic features' },
  { icon: '🔒', text: 'Features locked behind paywalls — want to send a simple contract? That\'s the "Pro" plan, plus DocuSign fees' },
  { icon: '📅', text: 'Overly complex scheduling — forced into color-coded calendars and strict 15-minute time slots that don\'t match how you work' },
  { icon: '🤯', text: 'Built for enterprise — designed for 500-person companies, not a 5-person roofing crew running jobs off the dash' },
  { icon: '🖥️', text: "Desktop-first design — completely useless when you're standing in a customer's yard or up on a roof" },
  { icon: '📢', text: 'Hidden costs everywhere — CRM + contract tools + marketing automation = $290/month or more' },
]

const testimonials = [
  { name: 'Mike R.', trade: 'Roofing Contractor', text: 'Finally a CRM that matches how I actually run my roofing jobs. Stack it, do it, next.', avatar: '🏗️' },
  { name: 'Carlos D.', trade: 'Landscaping Owner', text: 'I was juggling three apps and a notebook. StackDek replaced all of it from my phone.', avatar: '🌿' },
  { name: 'Lisa M.', trade: 'Cleaning Service', text: 'My quotes used to take 20 minutes. Now I send them before I leave the walkthrough.', avatar: '✨' },
  { name: 'James W.', trade: 'HVAC Technician', text: 'The offline mode is a game-changer. Half my jobs are in basements with zero signal.', avatar: '❄️' },
]

const faqs = [
  {
    q: 'How is this different from Jobber, Housecall Pro, or ServiceTitan?',
    a: 'Those tools were built for large companies with office staff. StackDek is built for small crews who run their business from a truck. We focus on a flexible "stack" workflow instead of rigid calendars, and we bundle contracts + marketing at one low price instead of nickel-and-diming you.'
  },
  {
    q: 'Do I need DocuSign or another contract service?',
    a: 'Nope! Contract creation, sending, and e-signature are built right into StackDek Pro. No third-party tools needed. Save $60/month on DocuSign fees.'
  },
  {
    q: 'Can I use this offline on job sites?',
    a: 'Yes. The mobile app works without internet. View jobs, create quotes, take notes. Everything syncs when you\'re back online.'
  },
  {
    q: 'What if I have a crew? Do I pay per user?',
    a: 'Pro plan includes multi-user access at no extra charge. Add your whole crew. No per-seat fees.'
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes! Start with a 14-day free trial of Pro. No credit card required. Cancel anytime.'
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'You own your data. Export everything (customers, jobs, invoices) before you go. We don\'t hold it hostage.'
  },
  {
    q: 'Can I import my existing customer list?',
    a: 'Absolutely. CSV import is built-in. Bring your contacts from spreadsheets, old CRMs, or anywhere else.'
  },
  {
    q: 'Do you offer phone support?',
    a: 'Yes. Pro plan includes priority email and phone support. We\'re contractors too — we know your time matters.'
  },
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
        <h3 className="text-2xl font-bold text-green-800 mb-2">Welcome to StackDek!</h3>
        <p className="text-green-700">Check your email for login details and setup instructions.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto text-left">
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="name" required value={form.name} onChange={handleChange} placeholder="Your Name *" className="w-full px-5 py-4 rounded-xl border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-base" />
        <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="Email *" className="w-full px-5 py-4 rounded-xl border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-base" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" className="w-full px-5 py-4 rounded-xl border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-base" />
        <select name="trade" value={form.trade} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-500 text-base appearance-none bg-white">
          <option value="">Trade / Business Type</option>
          {trades.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <textarea name="headache" value={form.headache} onChange={handleChange} placeholder="What's your biggest CRM headache? (optional — helps us help you)" rows={3} className="w-full px-5 py-4 rounded-xl border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-base resize-none" />
      {error && <p className="text-red-600 text-sm text-center">{error}</p>}
      <button type="submit" disabled={loading} className="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-bold px-8 py-4 rounded-xl text-lg transition shadow-lg">
        {loading ? 'Starting Your Trial...' : 'Start Free Trial →'}
      </button>
      <p className="text-sm text-neutral-500 text-center">14-day free trial. No credit card required.</p>
    </form>
  )
}

export default function App() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-transparent.png" alt="StackDek" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="hidden md:block text-neutral-600 hover:text-neutral-900 font-medium text-sm transition">Features</a>
            <a href="#pricing" className="hidden md:block text-neutral-600 hover:text-neutral-900 font-medium text-sm transition">Pricing</a>
            <a href="#faq" className="hidden md:block text-neutral-600 hover:text-neutral-900 font-medium text-sm transition">FAQ</a>
            <a href="#signup" className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-md">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="max-w-6xl mx-auto px-5 pt-16 pb-20 md:pt-28 md:pb-28 text-center">
        <p className="text-sm sm:text-base font-bold uppercase tracking-widest text-orange-600 mb-4">Built by Contractors, For Contractors</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Run Your Entire Business<br className="hidden sm:block" /> From One Simple Stack
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto mb-4 leading-relaxed">
          Replace Jobber + DocuSign + your marketing tools with one affordable CRM built for real contractors.<br className="hidden md:block" />
          <strong>CRM • Quotes • Contracts • Job Costing • Marketing — all in one place.</strong>
        </p>
        <p className="text-base text-neutral-500 mb-10 max-w-2xl mx-auto">
          No rigid calendars. No per-seat fees. No third-party contract services. Just a simple stack of jobs that works the way you think.
        </p>
        <a href="#signup" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-12 py-5 rounded-xl text-xl transition shadow-xl shadow-orange-600/20">
          Start Free Trial →
        </a>
        <p className="text-sm text-neutral-400 mt-5">✅ 14-day free trial • No credit card required • Cancel anytime</p>
      </section>

      {/* ─── VALUE PROP BANNER ─── */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-8">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <div>
            <p className="text-orange-100 text-sm font-semibold mb-1">What contractors currently pay:</p>
            <p className="text-3xl font-bold">$290<span className="text-lg font-normal">/month</span></p>
            <p className="text-orange-100 text-sm">Jobber + DocuSign + Marketing Tools</p>
          </div>
          <div className="text-4xl">→</div>
          <div>
            <p className="text-orange-100 text-sm font-semibold mb-1">StackDek Pro — Everything included:</p>
            <p className="text-5xl font-bold">$69<span className="text-2xl font-normal">/month</span></p>
            <p className="text-orange-100 text-sm font-bold">Save $221/month = $2,652/year</p>
          </div>
        </div>
      </section>

      {/* ─── CORE IDEA ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">We Get How You Really Work</h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              Let's be real — most contractors don't live by color-coded calendars and strict 15-minute slots. You've got a <strong>stack of quotes sitting on the dash</strong>, a mental list of callbacks, and you're figuring out what gets done today based on the weather, who's home, and what's been waiting the longest.
            </p>
            <p>
              That's not disorganized — <strong>that's how the trade works.</strong> But every CRM out there tries to force you into some corporate workflow designed for office managers, not guys running crews out of their truck.
            </p>
            <p>
              Your jobs aren't appointments — they're a <strong>stack</strong>. A pile of work that shifts every day based on what's real, not what some software thinks your schedule should look like. Rain delay? Emergency call? Customer no-show? You adapt. Your tools should too.
            </p>
            <p>
              That's why we built StackDek around a <strong>flexible flow</strong> instead of a rigid calendar. Your quotes live next to your jobs. Your leads don't disappear into a spreadsheet. Contract signing happens in-app. And the whole thing runs from your phone — because that's where you run your business.
            </p>
            <p className="font-semibold text-neutral-900 text-xl">
              One tool. One price. Everything you need to run your contracting business.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PAIN POINTS ─── */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">Tired of This?</h2>
          <p className="text-center text-neutral-600 mb-12 text-lg">The problems with every other contractor CRM:</p>
          <div className="space-y-4">
            {painPoints.map((p) => (
              <div key={p.text} className="flex items-start gap-4 bg-white border border-red-200 rounded-xl p-6 shadow-sm">
                <span className="text-3xl flex-shrink-0">{p.icon}</span>
                <p className="text-neutral-800 text-base sm:text-lg pt-1">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-neutral-900 mb-4">StackDek fixes all of this.</p>
            <a href="#features" className="inline-block text-orange-600 hover:text-orange-700 font-semibold text-lg underline">
              See how it works →
            </a>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">Everything You Need. Nothing You Don't.</h2>
          <p className="text-center text-neutral-600 mb-12 text-lg max-w-3xl mx-auto">Six core features. No bloat. Just what contractors actually use every day.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl transition hover:border-orange-300">
                <div className="text-5xl mb-5">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">{f.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-3">{f.desc}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="bg-gradient-to-b from-neutral-50 to-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">Simple, Honest Pricing</h2>
          <p className="text-center text-neutral-600 mb-12 text-lg max-w-2xl mx-auto">One low price. All features included. No hidden costs. No per-seat fees.</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* Basic */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-neutral-600 mb-6 text-sm">For solo contractors just starting out</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-neutral-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> <span>Single user</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> <span>Digital job stack</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> <span>Basic quotes & invoices</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> <span>Lead tracking</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> <span>Mobile app</span></li>
                <li className="flex items-start gap-2"><span className="text-neutral-300 font-bold">✗</span> <span className="text-neutral-400">Contract signing</span></li>
                <li className="flex items-start gap-2"><span className="text-neutral-300 font-bold">✗</span> <span className="text-neutral-400">Job costing</span></li>
                <li className="flex items-start gap-2"><span className="text-neutral-300 font-bold">✗</span> <span className="text-neutral-400">Marketing automation</span></li>
              </ul>
              <a href="#signup" className="block text-center bg-neutral-200 hover:bg-neutral-300 text-neutral-900 font-semibold px-6 py-3 rounded-xl transition">
                Start Free Trial
              </a>
            </div>

            {/* Pro - Featured */}
            <div className="bg-gradient-to-b from-orange-600 to-orange-500 text-white rounded-2xl p-8 relative shadow-2xl transform md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-neutral-900 px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-orange-100 mb-6 text-sm">Everything to run your entire business</p>
              <div className="mb-6">
                <span className="text-6xl font-bold">$69</span>
                <span className="text-orange-100">/month</span>
              </div>
              <p className="text-sm text-orange-100 mb-6 font-semibold">💰 Replaces $290/month in subscriptions</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2"><span className="font-bold">✓</span> <span><strong>Multi-user access</strong> (no per-seat fees)</span></li>
                <li className="flex items-start gap-2"><span className="font-bold">✓</span> <span>Digital job stack + flexible flow</span></li>
                <li className="flex items-start gap-2"><span className="font-bold">✓</span> <span>Professional quotes & invoicing</span></li>
                <li className="flex items-start gap-2"><span className="font-bold">✓</span> <span><strong>In-app contract sending & e-signature</strong></span></li>
                <li className="flex items-start gap-2"><span className="font-bold">✓</span> <span><strong>Job costing & profit tracking</strong></span></li>
                <li className="flex items-start gap-2"><span className="font-bold">✓</span> <span><strong>Marketing automation suite</strong></span></li>
                <li className="flex items-start gap-2"><span className="font-bold">✓</span> <span>Mobile app + offline mode</span></li>
                <li className="flex items-start gap-2"><span className="font-bold">✓</span> <span><strong>Priority support</strong></span></li>
              </ul>
              <a href="#signup" className="block text-center bg-white hover:bg-neutral-100 text-orange-600 font-bold px-6 py-4 rounded-xl transition shadow-lg text-lg">
                Start Free Trial →
              </a>
            </div>

            {/* Enterprise */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-neutral-600 mb-6 text-sm">For larger teams with custom needs</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> <span>Everything in Pro</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> <span>Unlimited users</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> <span>Custom integrations</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> <span>Dedicated account manager</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> <span>Advanced reporting</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> <span>SSO & security features</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> <span>24/7 phone support</span></li>
              </ul>
              <a href="mailto:hello@stackdek.com" className="block text-center bg-neutral-200 hover:bg-neutral-300 text-neutral-900 font-semibold px-6 py-3 rounded-xl transition">
                Contact Sales
              </a>
            </div>
          </div>

          {/* Value Comparison */}
          <div className="bg-neutral-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">The Math is Simple</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-orange-400 font-bold mb-4 text-lg">What You're Paying Now:</p>
                <ul className="space-y-3">
                  <li className="flex justify-between"><span>Jobber or similar CRM</span><span className="font-bold">$180/mo</span></li>
                  <li className="flex justify-between"><span>DocuSign for contracts</span><span className="font-bold">$60/mo</span></li>
                  <li className="flex justify-between"><span>Marketing/email tools</span><span className="font-bold">$50/mo</span></li>
                  <li className="flex justify-between border-t border-neutral-700 pt-3 text-xl"><span>Total</span><span className="font-bold text-red-400">$290/mo</span></li>
                </ul>
              </div>
              <div>
                <p className="text-green-400 font-bold mb-4 text-lg">With StackDek Pro:</p>
                <ul className="space-y-3">
                  <li className="flex justify-between"><span>CRM + Job Stack</span><span className="font-bold">✓</span></li>
                  <li className="flex justify-between"><span>Contract Signing</span><span className="font-bold">✓</span></li>
                  <li className="flex justify-between"><span>Marketing Automation</span><span className="font-bold">✓</span></li>
                  <li className="flex justify-between"><span>+ Job Costing</span><span className="font-bold">✓</span></li>
                  <li className="flex justify-between border-t border-neutral-700 pt-3 text-xl"><span>Total</span><span className="font-bold text-green-400">$69/mo</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-3xl font-bold text-green-400 mb-2">Save $2,652 Every Year</p>
              <p className="text-neutral-400">That's real money back in your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY STACKDEK / PHILOSOPHY ─── */}
      <section className="bg-neutral-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">Why We Built This</h2>
          <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
            <p>
              StackDek was built by <strong className="text-white">Jarrod</strong>, a contractor who got tired of paying hundreds of dollars a month for bloated software that didn't match how he actually worked.
            </p>
            <p>
              Every CRM on the market was designed for corporate teams with office managers and strict schedules. None of them understood that contractors don't work that way. Jobs shift. Weather happens. Priorities change hourly.
            </p>
            <p>
              So we built something different: <strong className="text-white">a flexible stack instead of a rigid calendar</strong>. A tool that adapts to your day instead of forcing your day to adapt to it.
            </p>
            <p>
              And we bundled everything you actually need — <strong className="text-white">CRM, quotes, contracts, job costing, marketing</strong> — into one affordable package. Because paying $290/month for three separate subscriptions is insane.
            </p>
            <p className="text-xl text-orange-400 font-semibold">
              Built by contractors. Priced for contractors. Designed for the way you really work.
            </p>
          </div>
          <div className="mt-12 text-center">
            <a href="#signup" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-10 py-4 rounded-xl text-lg transition shadow-xl">
              Try It Free for 14 Days →
            </a>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">Contractors Love It</h2>
          <p className="text-center text-neutral-600 mb-12 text-lg">Real feedback from real contractors</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition">
                <p className="text-neutral-800 text-lg leading-relaxed italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{t.avatar}</span>
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

      {/* ─── FAQ ─── */}
      <section id="faq" className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">Common Questions</h2>
          <p className="text-center text-neutral-600 mb-12 text-lg">Everything you need to know</p>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-neutral-50 transition"
                >
                  <span className="font-semibold text-neutral-900 pr-4">{faq.q}</span>
                  <span className="text-2xl text-neutral-400 flex-shrink-0">{expandedFaq === idx ? '−' : '+'}</span>
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-5 text-neutral-700 leading-relaxed border-t border-neutral-100">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-neutral-600 mb-4">Still have questions?</p>
            <a href="mailto:hello@stackdek.com" className="text-orange-600 hover:text-orange-700 font-semibold text-lg underline">
              Email us at hello@stackdek.com
            </a>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA + SIGN-UP ─── */}
      <section id="signup" className="bg-gradient-to-br from-orange-600 to-orange-500 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ready to Simplify Your Business?</h2>
          <p className="text-lg text-orange-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of contractors who've replaced their bloated CRM stack with one simple tool.
          </p>
          <div className="bg-white text-neutral-900 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <SignUpForm />
          </div>
          <p className="text-orange-100 mt-8 text-sm max-w-xl mx-auto">
            🔒 Your data is secure. We never share your information. Cancel anytime with no hassle.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo-transparent.png" alt="StackDek" className="h-10 w-auto mb-4" />
              <p className="text-sm text-neutral-600">The simple CRM built for real contractors.</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><a href="#features" className="hover:text-neutral-900">Features</a></li>
                <li><a href="#pricing" className="hover:text-neutral-900">Pricing</a></li>
                <li><a href="#faq" className="hover:text-neutral-900">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><a href="mailto:hello@stackdek.com" className="hover:text-neutral-900">Contact</a></li>
                <li><a href="mailto:support@stackdek.com" className="hover:text-neutral-900">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><a href="/privacy" className="hover:text-neutral-900">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-neutral-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-neutral-200 text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} StackDek. All rights reserved.</p>
            <a href="mailto:hello@stackdek.com" className="hover:text-neutral-900 transition">hello@stackdek.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
