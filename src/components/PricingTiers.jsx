import Link from 'next/link';

export default function PricingTiers({ tiers }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tiers.map((tier, i) => (
        <div
          key={i}
          className={`rounded-xl p-8 ${
            tier.featured
              ? 'bg-surface-dark text-text-inverse border-2 border-surface-dark'
              : 'bg-surface-card border border-border'
          }`}
        >
          <p className={`text-xs font-mono uppercase tracking-widest mb-4 ${
            tier.featured ? 'text-accent-light' : 'text-accent'
          }`}>
            {tier.label}
          </p>
          <p className={`text-3xl font-semibold mb-1 ${
            tier.featured ? 'text-text-inverse' : 'text-text-primary'
          }`}>
            {tier.price}
          </p>
          <p className={`text-sm mb-6 ${
            tier.featured ? 'text-text-inverse/60' : 'text-text-secondary'
          }`}>
            {tier.period}
          </p>
          <p className={`text-sm leading-relaxed mb-8 ${
            tier.featured ? 'text-text-inverse/70' : 'text-text-secondary'
          }`}>
            {tier.description}
          </p>
          <ul className="space-y-3 mb-8">
            {tier.features.map((feature, j) => (
              <li key={j} className={`text-sm flex items-start gap-2 ${
                tier.featured ? 'text-text-inverse/80' : 'text-text-secondary'
              }`}>
                <span className={`mt-0.5 shrink-0 ${tier.featured ? 'text-accent-light' : 'text-accent'}`}>
                  &#10003;
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className={`block text-center text-sm font-medium px-6 py-3 rounded-lg transition-opacity hover:opacity-90 ${
              tier.featured
                ? 'bg-surface text-text-primary'
                : 'bg-surface-dark text-text-inverse'
            }`}
          >
            {tier.cta || 'Book an Intro Call'}
          </Link>
        </div>
      ))}
    </div>
  );
}
