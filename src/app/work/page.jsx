import Link from 'next/link';
import CaseStudyGrid from '@/components/CaseStudyGrid';

const studies = [
  {
    client: 'Airlock Digital',
    metric: 'Active Subscription',
    desc: 'Ongoing creative partnership — brand, web, and campaign design for a cybersecurity leader.',
    tags: ['Subscription', 'Branding', 'Web'],
    href: '#',
  },
  {
    client: 'RDA',
    metric: 'Active Subscription',
    desc: 'Dedicated creative team handling brand evolution, marketing assets, and web development.',
    tags: ['Subscription', 'Web Design'],
    href: '#',
  },
  {
    client: 'SourceWhale',
    metric: '22% More Conversions',
    desc: 'Landing pages and campaign creative that turned traffic into qualified pipeline.',
    tags: ['Web Design', 'Landing Pages'],
    href: '#',
  },
  {
    client: 'Fixify',
    metric: '$25M Series A',
    desc: 'Full rebrand that positioned a growing startup for a successful fundraise.',
    tags: ['Branding', 'Project'],
    href: '#',
  },
  {
    client: 'Camp Coalesce',
    metric: '50+ Hours Saved',
    desc: 'AI-enhanced creative workflow that dramatically increased output and reduced turnaround.',
    tags: ['Subscription', 'AI'],
    href: '#',
  },
  {
    client: 'Hyperproof',
    metric: 'Brand Refresh',
    desc: 'Visual identity update and marketing collateral for a compliance automation platform.',
    tags: ['Branding', 'Project'],
    href: '#',
  },
];

const logos = ['Navis', 'Saviynt', 'Eqvista', 'NOXX', 'EZ Texting'];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">Work</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
            Results, not just deliverables
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Real outcomes for real SaaS companies. From rebrands that raise millions to landing pages that convert.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <CaseStudyGrid studies={studies} />
        </div>
      </section>

      {/* More clients */}
      <section className="border-t border-border-light py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-8">
            Also Worked With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {logos.map((name) => (
              <span key={name} className="text-sm font-medium text-text-muted/60">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-inverse mb-4">
            Want results like these?
          </h2>
          <p className="text-text-inverse/60 mb-10">
            Book a call and tell us what you&apos;re working on.
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
