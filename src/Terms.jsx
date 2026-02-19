export default function Terms() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-neutral-600 mb-8">Effective Date: February 23, 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">1. Agreement to Terms</h2>
            <p>
              By accessing or using StackDek ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and StackDek, LLC ("StackDek," "we," "us," or "our"), a Georgia limited liability company located at 2015 Dahlonega Hwy, Cumming, GA 30040.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">2. Description of Service</h2>
            <p>
              StackDek is a web-based contractor management platform that provides tools for job management, quoting, invoicing, customer tracking, and business operations. The Service is provided "as is" and may be modified, updated, or discontinued at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">3. Account Registration and Eligibility</h2>
            <h3 className="text-xl font-semibold mb-2 text-neutral-900">3.1 Eligibility</h3>
            <p>
              You must be at least 18 years old and legally able to enter into binding contracts to use StackDek. By creating an account, you represent that you meet these requirements.
            </p>
            
            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-900">3.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate and complete registration information</li>
              <li>Keep your password secure and not share it with others</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">4. Subscription Plans and Pricing</h2>
            <h3 className="text-xl font-semibold mb-2 text-neutral-900">4.1 Plans</h3>
            <p>
              StackDek offers multiple subscription plans (Starter, Pro, Enterprise). Plan details and pricing are available on our website. We reserve the right to modify pricing with 30 days' notice to existing subscribers.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-900">4.2 Billing</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Subscriptions are billed monthly or annually, depending on your chosen plan</li>
              <li>Billing occurs on the same day each billing cycle</li>
              <li>You authorize us to charge your payment method on file</li>
              <li>Failed payments may result in service suspension or termination</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-900">4.3 Free Trial</h3>
            <p>
              New users may receive a 14-day free trial. No credit card is required for the trial. If you do not subscribe after the trial ends, your account will be deactivated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">5. Cancellation and Refunds</h2>
            <h3 className="text-xl font-semibold mb-2 text-neutral-900">5.1 Cancellation</h3>
            <p>
              You may cancel your subscription at any time from your account settings. Cancellations take effect at the <strong>end of your current billing period</strong>. You will retain access to the Service until that date.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-900">5.2 No Refunds or Pro-Rating</h3>
            <p>
              <strong>All subscription fees are non-refundable.</strong> If you cancel mid-cycle, you will not receive a refund or credit for unused time. Your subscription will simply not renew at the end of the current period.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-900">5.3 Data After Cancellation</h3>
            <p>
              After cancellation, your data will be retained for <strong>30 days</strong> in case you wish to reactivate. After 30 days, all data is permanently deleted. You may export your data at any time before deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">6. Acceptable Use</h2>
            <p>You agree not to use StackDek to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Harass, abuse, or harm others</li>
              <li>Attempt to gain unauthorized access to the Service or other users' accounts</li>
              <li>Use the Service for any fraudulent or illegal activity</li>
              <li>Scrape, copy, or reverse-engineer the Service</li>
            </ul>
            <p className="mt-3">
              Violation of these terms may result in immediate account suspension or termination without refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">7. User Content and Data</h2>
            <h3 className="text-xl font-semibold mb-2 text-neutral-900">7.1 Your Data</h3>
            <p>
              You retain all ownership rights to the data you enter into StackDek (customer lists, job details, invoices, etc.). By using the Service, you grant us a limited license to host, store, and process your data solely to provide the Service.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-900">7.2 Responsibility</h3>
            <p>
              You are solely responsible for the accuracy, legality, and appropriateness of your data. We are not liable for any content you upload or transmit through the Service.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-900">7.3 Backup</h3>
            <p>
              While we perform regular backups, <strong>you are responsible for maintaining your own backups</strong> of critical data. We recommend exporting your data regularly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">8. Intellectual Property</h2>
            <p>
              StackDek and all related trademarks, logos, and content are the property of StackDek, LLC. You may not use our branding, code, or design elements without permission. These Terms do not grant you any ownership rights to the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">9. Third-Party Services</h2>
            <p>
              StackDek integrates with third-party services (e.g., Stripe for payments, email providers, SMS services). Your use of these services is subject to their respective terms and privacy policies. We are not responsible for third-party services or their performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">10. Disclaimers and Limitation of Liability</h2>
            <h3 className="text-xl font-semibold mb-2 text-neutral-900">10.1 Service "As Is"</h3>
            <p>
              StackDek is provided "as is" and "as available" without warranties of any kind, express or implied. We do not guarantee uninterrupted, error-free, or secure operation.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-900">10.2 Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, StackDek, LLC and its affiliates, officers, and employees shall not be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Any indirect, incidental, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Damages resulting from use or inability to use the Service</li>
            </ul>
            <p className="mt-3">
              <strong>Our total liability to you for any claims arising from these Terms or the Service shall not exceed the amount you paid us in the 12 months preceding the claim.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless StackDek, LLC from any claims, damages, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Your data or content uploaded to the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">12. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time, with or without notice, for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Non-payment of fees</li>
              <li>Any reason we deem necessary to protect the Service or other users</li>
            </ul>
            <p className="mt-3">
              Upon termination, you will lose access to the Service and your data (subject to the 30-day retention period described in Section 5.3).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">13. Governing Law and Dispute Resolution</h2>
            <h3 className="text-xl font-semibold mb-2 text-neutral-900">13.1 Governing Law</h3>
            <p>
              These Terms are governed by the laws of the State of Georgia, USA, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-900">13.2 Dispute Resolution</h3>
            <p>
              Any disputes arising from these Terms or the Service shall be resolved through binding arbitration in Forsyth County, Georgia, under the rules of the American Arbitration Association. You waive the right to participate in class-action lawsuits.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-900">13.3 Exceptions</h3>
            <p>
              Either party may seek injunctive relief in court to protect intellectual property rights or prevent unauthorized use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">14. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. If we make material changes, we will notify you via email or a prominent notice in the Service at least 30 days before the changes take effect. Continued use of StackDek after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">15. Miscellaneous</h2>
            <h3 className="text-xl font-semibold mb-2 text-neutral-900">15.1 Entire Agreement</h3>
            <p>
              These Terms, along with our Privacy Policy, constitute the entire agreement between you and StackDek regarding the Service.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-900">15.2 Severability</h3>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-900">15.3 Waiver</h3>
            <p>
              Our failure to enforce any right or provision of these Terms does not constitute a waiver of that right.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-900">15.4 Assignment</h3>
            <p>
              You may not assign these Terms without our written consent. We may assign these Terms at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900">16. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us:
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
