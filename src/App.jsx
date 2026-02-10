import { useState } from 'react'

const features = [
  {
    icon: '📋',
    title: 'Job Stack',
    desc: "See every job lined up for the day, drag to reprioritize, and never miss a stop. Your crew knows exactly what's next.",
  },
  {
    icon: '⚡',
    title: 'Quick Quotes',
    desc: 'Build and send professional quotes in under 60 seconds — right from the field. Close deals before the lead goes cold.',
  },
  {
    icon: '👥',
    title: 'Client Management',
    desc: 'Every client, property, and job history in one place. No more digging through texts and spreadsheets.',
  },
  {
    icon: '📊',
    title: 'Revenue Tracking',
    desc: 'See exactly how much you quoted, invoiced, and earned. Know your numbers at a glance.',
  },
]

const testimonials = [
  {
    name: 'Marcus H.',
    title: 'Landscaping Owner',
    text: 'I was managing jobs in my notes app. StackDek let me fire my admin assistant and still organize everything better.',
    avatar: '🧑‍💼',
  },
  {
    name: 'Sarah L.',
    title: 'Cleaning Service',
    text: 'Quotes that took 30 minutes now take 3. Plus I actually track which customers are profitable.',
    avatar: '👩‍💼',
  },
  {
    name: 'James T.',
    title: 'Plumbing Contractor',
    text: 'My crew loves it. They know exactly what job is next without calling me. Revenue went up 20%.',
    avatar: '👨‍💼',
  },
]

function DashboardMockup() {
  const jobs = [
    { client: 'Martinez Residence', type: 'Weekly Mow', time: '8:00 AM', status: 'In Progress', color: 'bg-yellow-400' },
    { client: 'Oakwood Office Park', type: 'Full Service', time: '10:30 AM', status: 'Scheduled', color: 'bg-blue-500' },
    { client: 'Chen Property', type: 'Hedge Trim', time: '1:00 PM', status: 'Scheduled', color: 'bg-blue-500' },
    { client: 'Riverdale HOA', type: 'Leaf Cleanup', time: '3:00 PM', status: 'Quoted', color: 'bg-neutral-300' },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden max-w-lg w-full">
      {/* Title bar */}
      <div className="bg-neutral-900 px-5 py-3 flex items-center justify-between">
        <span className="text-white font-bold text-sm tracking-wide">Today's Stack</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 p-4 bg-neutral-50 border-b border-neutral-200">
        {[['12', 'Jobs'], ['$4,280', 'Quoted'], ['$18k', 'Revenue']].map(([val, label]) => (
          <div key={label} className="text-center">
            <div className="text-xl font-bold text-neutral-900">{val}</div>
            <div className="text-xs text-neutral-500">{label}</div>
          </div>
        ))}
      </div>
      {/* Job list */}
      <div className="p-4 space-y-2.5">
        <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Today</div>
        {jobs.map((j) => (
          <div key={j.client} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition">
            <div>
              <div className="font-semibold text-sm text-neutral-900">{j.client}</div>
              <div className="text-xs text-neutral-500">{j.type} · {j.time}</div>
            </div>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full text-white ${j.color}`}>
              {j.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [emails, setEmails] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setEmails((prev) => [...prev, { email, date: new Date().toLocaleString() }])
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-symbol.png" alt="StackDek" className="h-8 w-auto" />
            <span className="text-xl font-bold tracking-tight">StackDek</span>
          </div>
          <a href="#beta" className="text-sm bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded-lg font-medium transition">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-neutral-100 text-neutral-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-neutral-200">
              ✨ Trusted by service crews across the US
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Run Your Whole Business<br />
              <span className="text-neutral-600">From Your Phone</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-10 max-w-lg leading-relaxed">
              StackDek is the job scheduling, quoting, and invoicing app for lawn care, cleaning, plumbing, and field service businesses. Stop juggling spreadsheets. Start running your operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#beta" className="inline-block bg-neutral-900 hover:bg-neutral-800 text-white font-semibold px-8 py-3.5 rounded-xl transition text-center">
                Get Early Access →
              </a>
              <a href="#features" className="inline-block border border-neutral-300 hover:border-neutral-400 text-neutral-900 font-medium px-8 py-3.5 rounded-xl transition text-center">
                See How It Works
              </a>
            </div>
            <p className="text-sm text-neutral-500 mt-6">
              🚀 Beta users get lifetime 50% discount + early feature access
            </p>
          </div>
          <div className="flex justify-center">
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-neutral-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Run Jobs</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Built specifically for service businesses. No bloat. Just the tools that actually matter.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-neutral-900">{f.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Service Businesses Love StackDek</h2>
          <p className="text-lg text-neutral-600">Real feedback from real users</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-neutral-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">{t.avatar}</div>
                <div className="text-left">
                  <p className="font-bold text-neutral-900">{t.name}</p>
                  <p className="text-sm text-neutral-600">{t.title}</p>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed italic">"{t.text}"</p>
              <div className="mt-4 text-yellow-400">★★★★★</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">The Old Way</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Jobs scattered across texts, calls, and your calendar</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Quotes take 30 minutes (on paper or email)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>No idea if your jobs are actually profitable</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Crew confusion about what's next (lots of calls)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Invoicing is manual and painful</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">With StackDek</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Every job visible in your Job Stack</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Professional quotes in 60 seconds</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Real-time dashboard showing revenue & metrics</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Your crew knows the day's stack (no chaos)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Invoices sent automatically</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="beta" className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-4">Join the Beta — Free for 30 Days</h2>
        <p className="text-lg text-neutral-600 mb-10">
          Get your crew organized. Stop managing chaos. Beta users lock in 50% off for life.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-8">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 px-5 py-3.5 rounded-xl border border-neutral-300 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition"
          />
          <button
            type="submit"
            className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3.5 rounded-xl font-semibold transition whitespace-nowrap"
          >
            Get Access
          </button>
        </form>
        {submitted && (
          <p className="text-green-600 font-medium">✅ You're on the list! Check your email for next steps.</p>
        )}
        <p className="text-sm text-neutral-500">No credit card required. Instant setup.</p>
      </section>

      {/* FAQ (mini) */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Questions?</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Is this for my type of business?</h3>
              <p className="text-neutral-600">Designed for lawn care, landscaping, cleaning, plumbing, painting, and any field service business that takes jobs and sends quotes.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Can my whole team use it?</h3>
              <p className="text-neutral-600">Yes. Unlimited crew members can view the job stack and update status. The owner manages clients, quotes, and settings.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Do you offer support?</h3>
              <p className="text-neutral-600">During beta, yes — direct email support. We respond within a few hours. Eventually Slack/chat.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">How much will it cost after beta?</h3>
              <p className="text-neutral-600">TBD. But beta users get 50% off whatever we charge. Lock it in now.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div className="flex items-center gap-2">
              <img src="/logo-symbol.png" alt="StackDek" className="h-8 w-auto" />
              <span className="font-bold text-lg">StackDek</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm font-semibold text-neutral-900 mb-3">Product</p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li><a href="#features" className="hover:text-neutral-900 transition">Features</a></li>
                  <li><a href="#" className="hover:text-neutral-900 transition">Pricing</a></li>
                  <li><a href="#" className="hover:text-neutral-900 transition">Security</a></li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900 mb-3">Company</p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li><a href="#" className="hover:text-neutral-900 transition">About</a></li>
                  <li><a href="#" className="hover:text-neutral-900 transition">Blog</a></li>
                  <li><a href="#" className="hover:text-neutral-900 transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900 mb-3">Legal</p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li><a href="#" className="hover:text-neutral-900 transition">Privacy</a></li>
                  <li><a href="#" className="hover:text-neutral-900 transition">Terms</a></li>
                  <li><a href="mailto:hello@stackdek.com" className="hover:text-neutral-900 transition">Email</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
            <p>© {new Date().getFullYear()} StackDek. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-neutral-900 transition">Twitter</a>
              <a href="#" className="hover:text-neutral-900 transition">LinkedIn</a>
              <a href="#" className="hover:text-neutral-900 transition">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
