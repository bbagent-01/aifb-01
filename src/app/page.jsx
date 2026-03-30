import Link from 'next/link';

const services = [
  { title: 'Branding & Identity', desc: 'Logos, brand systems, and visual identity that position you for your next funding round.' },
  { title: 'Web Design', desc: 'Marketing sites, landing pages, and product pages that convert visitors into pipeline.' },
  { title: 'Development', desc: 'Webflow, WordPress, and custom builds — pixel-perfect and performance-optimized.' },
  { title: 'Landing Pages', desc: 'Campaign and product launch pages designed to drive signups and demos.' },
  { title: 'Social & Decks', desc: 'Scroll-stopping social creative and investor-ready presentations.' },
  { title: 'Video & Motion', desc: 'Product demos, explainers, and social video that tell your story.' },
];

const stats = [
  { value: '20x', label: 'Faster than hiring' },
  { value: '50%', label: 'Lower cost than agencies' },
  { value: '100%', label: 'Utilization rate' },
  { value: '4.9/5', label: 'Client satisfaction' },
];

const caseStudies = [
  { client: 'Fixify', metric: '$25M Series A', desc: 'Full rebrand positioned them for a successful raise.', tag: 'Branding' },
  { client: 'SourceWhale', metric: '22% more conversions', desc: 'Landing pages that turned traffic into pipeline.', tag: 'Web Design' },
  { client: 'Camp Coalesce', metric: '50+ hours saved', desc: 'AI-enhanced creative workflow at scale.', tag: 'Subscription' },
];

const steps = [
  { num: '01', title: 'Intro Call', desc: 'We learn about your brand, goals, and what you need.' },
  { num: '02', title: 'Match Your Team', desc: 'You get a dedicated senior creative team matched to your needs.' },
  { num: '03', title: 'Start Shipping', desc: 'Requests flow, creative ships. No ticketing systems, no delays.' },
  { num: '04', title: 'Scale Up or Down', desc: 'Adjust your plan month-to-month as your needs change.' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">
            Fractional Creative for B2B SaaS
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-text-primary mb-6">
            Scale your creative without scaling payroll
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
            One subscription. One dedicated team. Design, development, video, and copy — everything your marketing team needs to ship faster.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-surface-dark text-text-inverse font-medium px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Book an Intro Call
            </Link>
            <Link
              href="/work"
              className="border border-border text-text-secondary font-medium px-8 py-3.5 rounded-lg hover:bg-surface-muted transition-colors text-sm"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="border-t border-b border-border-light py-12">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted text-center mb-8">
            Trusted by Growth-Stage SaaS Teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {['Airlock Digital', 'RDA', 'SourceWhale', 'Fixify', 'Camp Coalesce', 'Hyperproof'].map((name) => (
              <span key={name} className="text-sm font-medium text-text-muted/60">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">The Problem</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
            Growing fast but creative can&apos;t keep up?
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Hiring is slow and expensive. Agencies lock you into retainers with junior talent. Freelancers are unreliable. Subscription design services lack quality. You need a better model.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">Services</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Everything your marketing team needs</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-surface-card border border-border rounded-xl p-8 hover:shadow-sm transition-shadow">
                <p className="text-xs font-mono text-text-muted mb-4">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="text-lg font-semibold mb-2 text-text-primary">{service.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-sm font-mono uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors">
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface-dark py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-semibold text-text-inverse mb-2">{stat.value}</p>
                <p className="text-xs font-mono uppercase tracking-widest text-text-inverse/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">Work</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Results that compound</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-surface-card border border-border rounded-xl p-8">
                <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">{study.tag}</p>
                <p className="text-2xl font-semibold text-text-primary mb-1">{study.metric}</p>
                <p className="text-sm font-medium text-text-primary mb-3">{study.client}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{study.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/work" className="text-sm font-mono uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors">
              View All Work &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">From intro call to shipping creative</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="border-t-2 border-border pt-6">
                <p className="text-xs font-mono text-accent mb-3">{step.num}</p>
                <h3 className="text-base font-semibold mb-2 text-text-primary">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-text-inverse/50 mb-6">Ready?</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-inverse mb-4">
            Scale your creative output this week
          </h2>
          <p className="text-text-inverse/60 mb-10 leading-relaxed">
            Book a 30-minute intro call. We&apos;ll learn about your needs and show you how it works.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-surface text-text-primary font-medium px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Book an Intro Call
          </Link>
        </div>
      </section>
    </>
  );
}
