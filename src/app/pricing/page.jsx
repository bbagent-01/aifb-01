import Link from 'next/link';
import PricingTiers from '@/components/PricingTiers';
import ComparisonTable from '@/components/ComparisonTable';
import Accordion from '@/components/Accordion';
import TestimonialSlider from '@/components/TestimonialSlider';

const tiers = [
  {
    label: 'Growth',
    price: '$7,500',
    period: 'per month',
    description: 'For startups with consistent creative needs. One dedicated designer, fast turnaround.',
    features: [
      'Dedicated senior designer',
      'Unlimited requests',
      '2-3 day turnaround',
      'Brand & web design',
      'Social media creative',
      'Slack/async communication',
    ],
  },
  {
    label: 'Scale',
    price: '$15,000',
    period: 'per month',
    featured: true,
    description: 'For growth-stage teams with multi-channel needs. Full creative team, faster output.',
    features: [
      'Everything in Growth',
      'Designer + developer',
      '1-2 day turnaround',
      'Webflow/WordPress development',
      'Landing pages & campaigns',
      'Video & motion graphics',
      'Weekly strategy calls',
    ],
    cta: 'Most Popular — Book a Call',
  },
  {
    label: 'Enterprise',
    price: '$22,500',
    period: 'per month',
    description: 'For teams that need a fully embedded creative department. Senior talent across every discipline.',
    features: [
      'Everything in Scale',
      'Full creative team (3-4 people)',
      'Same-day turnaround available',
      'Brand strategy & consulting',
      'HubSpot & CRM integration',
      'Dedicated account lead',
      'Custom reporting',
    ],
  },
];

const comparisonHeaders = ['', 'Brightbase', 'In-House Team', 'Traditional Agency'];
const comparisonRows = [
  ['Monthly cost', '$7.5K–$22.5K', '$25K–$65K+', '$15K–$50K+'],
  ['Time to start', 'Days', '3–6 months', '2–4 weeks'],
  ['Flexibility', 'Month-to-month', 'Salary + benefits', '6–12 month contracts'],
  ['Utilization', '100%', '50–60%', 'Varies'],
  ['Skill range', 'Design, dev, video, copy', 'Limited to hire', 'Per-project staffing'],
  ['Direct access to talent', 'Yes', 'Yes', 'Account manager buffer'],
  ['Unused hours', 'Roll over', 'Lost', 'Lost'],
];

const faqs = [
  {
    question: 'How does the subscription work?',
    answer: 'Choose a plan, and your dedicated team starts working on your requests immediately. Submit as many requests as you want — we work through them based on priority. No contracts, cancel anytime.',
  },
  {
    question: 'What if I need more than one plan covers?',
    answer: 'You can upgrade or add capacity at any time. We also offer custom plans for teams with specific needs. Book a call and we\'ll figure out the right fit.',
  },
  {
    question: 'Do unused hours roll over?',
    answer: 'Yes. If you don\'t use your full allocation in a given month, it rolls over to the next month. No wasted budget.',
  },
  {
    question: 'Is there a long-term contract?',
    answer: 'No. All plans are month-to-month. You can pause, upgrade, downgrade, or cancel at any time with 30 days notice.',
  },
  {
    question: 'What\'s the turnaround time?',
    answer: 'Most requests are delivered within 1-3 business days depending on complexity and your plan tier. Larger projects like full website builds are scoped with clear timelines upfront.',
  },
  {
    question: 'Who will I be working with?',
    answer: 'You get a dedicated senior creative team — not a rotating pool of freelancers. The same people learn your brand and work with you consistently.',
  },
];

const testimonials = [
  {
    quote: 'Brightbase replaced our need to hire three full-time creatives. The quality is consistently better than what we were getting from our previous agency.',
    name: 'Marketing Director',
    role: 'VP Marketing',
    company: 'Series B SaaS',
  },
  {
    quote: 'We went from concept to launched rebrand in under 6 weeks. That would have taken 6 months with an agency.',
    name: 'Founder',
    role: 'CEO',
    company: 'Series A Startup',
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
            Simple pricing, serious output
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            One subscription replaces freelancers, agencies, and job postings. Scale up or down as your needs change.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <PricingTiers tiers={tiers} />
        </div>
      </section>

      {/* Comparison */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">Compare</p>
            <h2 className="text-3xl font-semibold tracking-tight">How Brightbase stacks up</h2>
          </div>
          <div className="bg-surface-card border border-border rounded-xl p-6 md:p-8">
            <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 md:py-24 bg-surface-muted">
        <div className="max-w-4xl mx-auto px-6">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">FAQ</p>
            <h2 className="text-3xl font-semibold tracking-tight">Common questions</h2>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-inverse mb-4">
            Let&apos;s find the right plan for you
          </h2>
          <p className="text-text-inverse/60 mb-10">
            30-minute call. No commitment. We&apos;ll scope your needs and recommend a plan.
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
