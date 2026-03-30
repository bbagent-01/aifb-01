import Link from 'next/link';

const serviceCategories = [
  {
    category: 'Design',
    services: [
      { title: 'Branding & Identity', desc: 'Logos, brand systems, guidelines, and visual identity built for scale.' },
      { title: 'Web Design', desc: 'Marketing sites, product pages, and microsites that convert.' },
      { title: 'Landing Pages', desc: 'Campaign and launch pages optimized for signups and demos.' },
      { title: 'Social Media Creative', desc: 'Scroll-stopping graphics for every platform and format.' },
      { title: 'Slide Decks', desc: 'Investor decks, sales decks, and internal presentations that land.' },
      { title: 'eBooks & Reports', desc: 'Designed content assets that drive downloads and authority.' },
    ],
  },
  {
    category: 'Development',
    services: [
      { title: 'Webflow', desc: 'Custom Webflow builds with CMS, animations, and integrations.' },
      { title: 'WordPress', desc: 'Theme customization, plugin development, and migrations.' },
      { title: 'HubSpot', desc: 'Landing pages, email templates, and CRM customization.' },
    ],
  },
  {
    category: 'Production',
    services: [
      { title: 'Video & Motion', desc: 'Product demos, explainers, social video, and motion graphics.' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">Services</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
            Full-service creative, fractional commitment
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Everything from brand to web to campaigns, delivered by a dedicated senior team. One subscription covers it all.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((cat, catIndex) => (
        <section key={cat.category} className="pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="border-b border-border pb-4 mb-8">
              <p className="text-xs font-mono uppercase tracking-widest text-accent">
                {String(catIndex + 1).padStart(2, '0')} &mdash; {cat.category}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.services.map((service, i) => (
                <div key={i} className="bg-surface-card border border-border rounded-xl p-8 hover:shadow-sm transition-shadow">
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">{service.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why one team */}
      <section className="bg-surface-dark py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-text-inverse/50 mb-4">Why One Team</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-inverse">
              One team. Every channel. Zero coordination overhead.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Consistency', desc: 'The same team knows your brand inside and out. No re-onboarding, no style drift.' },
              { title: 'Speed', desc: 'No handoffs between vendors. Your team moves from brief to final in hours, not weeks.' },
              { title: 'Cost', desc: 'One subscription replaces 3-4 freelancers and a project manager. Save 30-70% vs. hiring.' },
            ].map((point, i) => (
              <div key={i}>
                <h3 className="text-base font-semibold text-text-inverse mb-2">{point.title}</h3>
                <p className="text-sm text-text-inverse/60 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Not sure what you need?</h2>
          <p className="text-text-secondary mb-8">Book a call and we&apos;ll figure it out together.</p>
          <Link
            href="/contact"
            className="inline-block bg-surface-dark text-text-inverse font-medium px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Book an Intro Call
          </Link>
        </div>
      </section>
    </>
  );
}
