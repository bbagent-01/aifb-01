import Link from 'next/link';

const values = [
  { title: 'Quality Over Quantity', desc: 'Senior talent on every project. We\'d rather do fewer things exceptionally than more things adequately.' },
  { title: 'Flexibility by Design', desc: 'Month-to-month subscriptions. Scale up for launches, scale down when things are quiet. No penalties.' },
  { title: 'Direct Access', desc: 'No account managers as a buffer. You work directly with the people doing the work.' },
  { title: 'AI-Enhanced', desc: 'We use AI to move faster and smarter — not to replace craft, but to amplify it.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">About</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
            A better way to do creative
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Brightbase is a fractional creative team for B2B SaaS companies who need great design, development, and content — without the overhead of hiring or the friction of traditional agencies.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="border-t border-border pt-12">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-6">Our Story</p>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Most B2B SaaS companies hit the same wall: they&apos;re growing fast, marketing needs are compounding, and they can&apos;t hire creative talent fast enough to keep up. So they cobble together freelancers, try subscription design services, or overpay agencies — and none of it works well.
              </p>
              <p>
                Brightbase was built to solve that. We give growth-stage SaaS teams a dedicated creative team — designers, developers, and producers — on a flexible subscription. You get the quality and consistency of an in-house team at a fraction of the cost.
              </p>
              <p>
                We&apos;re not trying to be the biggest agency. We&apos;re trying to be the best creative partner a 50-person SaaS company has ever had.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">Principles</p>
            <h2 className="text-3xl font-semibold tracking-tight">How we work</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <div key={i} className="border-t-2 border-border pt-6">
                <p className="text-xs font-mono text-accent mb-3">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="text-lg font-semibold mb-2 text-text-primary">{value.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-text-inverse/50 mb-6">Let&apos;s Work Together</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-inverse mb-4">
            Meet us on a call
          </h2>
          <p className="text-text-inverse/60 mb-10 leading-relaxed">
            30 minutes. No pitch deck. Just a conversation about what you need and whether we&apos;re a fit.
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
