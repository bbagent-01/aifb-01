import Link from 'next/link';

function StudyCard({ study }) {
  const content = (
    <>
      <div className="aspect-[16/10] bg-surface-muted flex items-center justify-center border-b border-border-light">
        <span className="text-xs font-mono text-text-muted uppercase tracking-widest">{study.client}</span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {study.tags?.map((tag, j) => (
            <span key={j} className="text-[10px] font-mono uppercase tracking-widest text-accent bg-accent-subtle px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-lg font-semibold text-text-primary mb-1 group-hover:text-accent transition-colors">
          {study.metric}
        </p>
        <p className="text-sm font-medium text-text-primary mb-2">{study.client}</p>
        <p className="text-sm text-text-secondary leading-relaxed">{study.desc || study.description}</p>
      </div>
    </>
  );

  const className = "group bg-surface-card border border-border rounded-xl overflow-hidden hover:shadow-sm transition-shadow";

  if (study.href && study.href !== '#') {
    return <Link href={study.href} className={className}>{content}</Link>;
  }
  return <div className={className}>{content}</div>;
}

export default function CaseStudyGrid({ studies }) {
  if (!studies?.length) return null;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {studies.filter(Boolean).map((study, i) => (
        <StudyCard key={study._key || i} study={study} />
      ))}
    </div>
  );
}
