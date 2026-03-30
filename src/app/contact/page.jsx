import Accordion from '@/components/Accordion';

const faqs = [
  {
    question: 'What happens on the intro call?',
    answer: 'We spend 30 minutes learning about your brand, current challenges, and what you need. No pitch deck — just a conversation to see if we\'re a fit.',
  },
  {
    question: 'How fast can we start?',
    answer: 'Most teams start within a week of signing up. We match your dedicated team and get onboarded to your tools and brand guidelines quickly.',
  },
  {
    question: 'Is there any commitment?',
    answer: 'No. All subscriptions are month-to-month. Start, pause, or cancel anytime.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">Contact</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
            Let&apos;s talk
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Tell us about your team and what you need. We&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-surface-card border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-surface-card border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full bg-surface-card border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-2">What do you need?</label>
                  <select className="w-full bg-surface-card border border-border rounded-lg px-4 py-3 text-sm text-text-secondary focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option>Select a service</option>
                    <option>Branding & Identity</option>
                    <option>Web Design</option>
                    <option>Development</option>
                    <option>Landing Pages</option>
                    <option>Social & Decks</option>
                    <option>Video & Motion</option>
                    <option>Multiple / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-surface-card border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your project, timeline, and budget range..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-surface-dark text-text-inverse font-medium px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2">
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">Email</p>
                  <a href="mailto:hello@brightbase.co" className="text-sm text-text-primary hover:text-accent transition-colors">
                    hello@brightbase.co
                  </a>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">Book Directly</p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Prefer to skip the form? Book a 30-minute intro call directly on our calendar.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">Response Time</p>
                  <p className="text-sm text-text-secondary">Within 1 business day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold tracking-tight">Quick answers</h2>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
