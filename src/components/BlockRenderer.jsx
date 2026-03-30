import Link from 'next/link';
import Accordion from './Accordion';
import TestimonialSlider from './TestimonialSlider';
import ComparisonTable from './ComparisonTable';
import SplitSection from './SplitSection';
import PricingTiers from './PricingTiers';
import CaseStudyGrid from './CaseStudyGrid';

function HeroBlock({ block }) {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {block.label && (
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">
            {block.label}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-text-primary mb-6">
          {block.heading}
        </h1>
        {block.text && (
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
            {block.text}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {block.primaryCta && (
            <Link
              href={block.primaryCtaLink || '/contact'}
              className="bg-surface-dark text-text-inverse font-medium px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              {block.primaryCta}
            </Link>
          )}
          {block.secondaryCta && (
            <Link
              href={block.secondaryCtaLink || '#'}
              className="border border-border text-text-secondary font-medium px-8 py-3.5 rounded-lg hover:bg-surface-muted transition-colors text-sm"
            >
              {block.secondaryCta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

function SectionHeadingBlock({ block }) {
  const align = block.alignment === 'left' ? 'text-left' : 'text-center';
  return (
    <div className={`max-w-3xl ${block.alignment === 'center' ? 'mx-auto' : ''} px-6 mb-12 ${align}`}>
      {block.label && (
        <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">{block.label}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{block.heading}</h2>
      {block.text && (
        <p className="text-text-secondary leading-relaxed mt-4">{block.text}</p>
      )}
    </div>
  );
}

function ServiceGridBlock({ block }) {
  const cols = block.columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3';
  return (
    <section className="pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid ${cols} gap-6`}>
          {block.services?.map((service, i) => (
            <div key={i} className="bg-surface-card border border-border rounded-xl p-8 hover:shadow-sm transition-shadow">
              <p className="text-xs font-mono text-text-muted mb-4">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="text-lg font-semibold mb-2 text-text-primary">{service.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBarBlock({ block }) {
  const isDark = block.style !== 'light';
  return (
    <section className={`py-20 md:py-24 ${isDark ? 'bg-surface-dark' : 'bg-surface-muted'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {block.stats?.map((stat, i) => (
            <div key={i} className="text-center">
              <p className={`text-3xl md:text-4xl font-semibold mb-2 ${isDark ? 'text-text-inverse' : 'text-text-primary'}`}>
                {stat.value}
              </p>
              <p className={`text-xs font-mono uppercase tracking-widest ${isDark ? 'text-text-inverse/50' : 'text-text-muted'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoBarBlock({ block }) {
  return (
    <section className="border-t border-b border-border-light py-12">
      <div className="max-w-6xl mx-auto px-6">
        {block.label && (
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted text-center mb-8">
            {block.label}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {block.logos?.map((name, i) => (
            <span key={i} className="text-sm font-medium text-text-muted/60">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsBlockBlock({ block }) {
  return (
    <section className="pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {block.steps?.map((step, i) => (
            <div key={i} className="border-t-2 border-border pt-6">
              <p className="text-xs font-mono text-accent mb-3">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="text-base font-semibold mb-2 text-text-primary">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBannerBlock({ block }) {
  const isDark = block.style !== 'light';
  return (
    <section className={`py-20 md:py-24 ${isDark ? 'bg-surface-dark' : 'bg-surface-muted'}`}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        {block.label && (
          <p className={`text-xs font-mono uppercase tracking-widest mb-6 ${isDark ? 'text-text-inverse/50' : 'text-text-muted'}`}>
            {block.label}
          </p>
        )}
        <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight mb-4 ${isDark ? 'text-text-inverse' : 'text-text-primary'}`}>
          {block.heading}
        </h2>
        {block.text && (
          <p className={`mb-10 leading-relaxed ${isDark ? 'text-text-inverse/60' : 'text-text-secondary'}`}>
            {block.text}
          </p>
        )}
        {block.ctaText && (
          <Link
            href={block.ctaLink || '/contact'}
            className={`inline-block font-medium px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm ${
              isDark
                ? 'bg-surface text-text-primary'
                : 'bg-surface-dark text-text-inverse'
            }`}
          >
            {block.ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}

function AccordionBlockBlock({ block }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <Accordion items={block.items || []} />
      </div>
    </section>
  );
}

function TestimonialSliderBlock({ block }) {
  return (
    <section className="py-20 md:py-24 bg-surface-muted">
      <div className="max-w-4xl mx-auto px-6">
        <TestimonialSlider testimonials={block.testimonials || []} />
      </div>
    </section>
  );
}

function ComparisonTableBlock({ block }) {
  const rows = block.rows?.map((row) => row.cells || []) || [];
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-surface-card border border-border rounded-xl p-6 md:p-8">
          <ComparisonTable headers={block.headers || []} rows={rows} />
        </div>
      </div>
    </section>
  );
}

function SplitSectionBlock({ block }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SplitSection
          label={block.label}
          heading={block.heading}
          text={block.text}
          imageSide={block.imageSide || 'right'}
          imagePlaceholder={!block.image}
        >
          {block.ctaText && (
            <Link
              href={block.ctaLink || '#'}
              className="text-sm font-mono uppercase tracking-widest text-accent hover:text-accent-hover transition-colors"
            >
              {block.ctaText} &rarr;
            </Link>
          )}
        </SplitSection>
      </div>
    </section>
  );
}

function PricingTiersBlock({ block }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <PricingTiers tiers={block.tiers || []} />
      </div>
    </section>
  );
}

function CaseStudyGridBlock({ block }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <CaseStudyGrid studies={block.studies || []} />
      </div>
    </section>
  );
}

const blockComponents = {
  hero: HeroBlock,
  sectionHeading: SectionHeadingBlock,
  serviceGrid: ServiceGridBlock,
  statsBar: StatsBarBlock,
  logoBar: LogoBarBlock,
  stepsBlock: StepsBlockBlock,
  ctaBanner: CtaBannerBlock,
  accordionBlock: AccordionBlockBlock,
  testimonialSlider: TestimonialSliderBlock,
  comparisonTable: ComparisonTableBlock,
  splitSection: SplitSectionBlock,
  pricingTiers: PricingTiersBlock,
  caseStudyGrid: CaseStudyGridBlock,
};

export default function BlockRenderer({ blocks }) {
  if (!blocks) return null;
  return (
    <>
      {blocks.map((block) => {
        const Component = blockComponents[block._type];
        if (!Component) {
          console.warn(`Unknown block type: ${block._type}`);
          return null;
        }
        return <Component key={block._key} block={block} />;
      })}
    </>
  );
}
