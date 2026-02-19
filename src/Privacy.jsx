export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo-transparent.png" alt="StackDek" className="h-10 w-auto" />
          </a>
          <div className="flex items-center gap-4">
            <a href="https://stackdek-app.vercel.app/login" className="text-neutral-600 hover:text-neutral-900 font-medium text-sm transition">
              Login
            </a>
            <a href="/" className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition">
              ← Home
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-neutral-600 mb-8">Effective Date: February 23, 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">1. Introduction</h2>
            <p>
              StackDek, LLC ("we," "our," or "us") operates the StackDek contractor management platform. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our services.
            </p>
            <p>
              <strong>Contact Information:</strong><br />
              StackDek, LLC<br />
              2015 Dahlonega Hwy<br />
              Cumming, GA 30040<br />
              Email: hello@stackdek.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-2 text-neutral-900">2.1 Information You Provide</h3>
            <p>When you use StackDek, we collect information you provide directly, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Account information (name, email, phone number, company name)</li>
              <li>Customer and job data you enter into the platform</li>
              <li>Payment information (processed securely by Stripe)</li>
              <li>Communications with us (support emails, feedback)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-900">2.2 Automatically Collected Information</h3>
            <p>We automatically collect certain technical information, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Usage data (features used, pages visited, time spent)</li>
              <li>Essential cookies for authentication and session management</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and maintain the StackDek service</li>
              <li>Process payments and prevent fraud</li>
              <li>Send quotes, invoices, and notifications (via your connected accounts)</li>
              <li>Provide customer support</li>
              <li>Improve our platform and develop new features</li>
              <li>Send service updates and marketing communications (you can opt out)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">4. Third-Party Services</h2>
            <p>We use the following third-party services to operate StackDek:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Supabase:</strong> Database and authentication (user data storage)</li>
              <li><strong>Vercel:</strong> Hosting and content delivery</li>
              <li><strong>Stripe:</strong> Payment processing (we do not store credit card details)</li>
              <li><strong>Analytics providers:</strong> Aggregate usage statistics (non-identifying data)</li>
            </ul>
            <p className="mt-3">
              <strong>Email and SMS:</strong> Quotes and invoices are sent using your own connected accounts (Google, Twilio, etc.). We do not access the content of these communications beyond what's necessary to facilitate sending.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">5. Data Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your data only in these circumstances:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Service providers:</strong> Third-party vendors who help us operate (as listed above)</li>
              <li><strong>Legal compliance:</strong> If required by law or to protect our rights</li>
              <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
              <li><strong>With your consent:</strong> When you explicitly authorize sharing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">6. Cookies and Tracking</h2>
            <p>
              StackDek uses <strong>essential cookies only</strong> for authentication and session management. We do not use third-party tracking cookies for advertising purposes. You can disable cookies in your browser, but this may affect functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">7. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data, including encryption (both in transit and at rest), secure authentication, and regular security audits. However, no system is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">8. Data Retention and Deletion</h2>
            <p>
              We retain your data for as long as your account is active. If you cancel your subscription:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your data is kept for <strong>30 days</strong> in case you want to return</li>
              <li>After 30 days, all data is permanently deleted</li>
              <li>You can request immediate deletion by contacting us at hello@stackdek.com</li>
            </ul>
            <p className="mt-3">
              <strong>Right to Export:</strong> You can export your data (customers, jobs, invoices) at any time from the account settings page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">9. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing emails</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at <a href="mailto:hello@stackdek.com" className="text-orange-600 hover:text-orange-700 underline">hello@stackdek.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">10. Children's Privacy</h2>
            <p>
              StackDek is not intended for users under 18 years of age. We do not knowingly collect information from children. If we discover we have collected data from a minor, we will delete it immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make significant changes, we will notify you via email or a prominent notice in the app. Continued use of StackDek after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <p>
              Email: <a href="mailto:hello@stackdek.com" className="text-orange-600 hover:text-orange-700 underline">hello@stackdek.com</a><br />
              Mail: StackDek, LLC, 2015 Dahlonega Hwy, Cumming, GA 30040
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a href="/" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-xl transition">
            Back to Home
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="max-w-6xl mx-auto px-5 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} StackDek, LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
