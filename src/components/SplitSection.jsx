export default function SplitSection({
  label,
  heading,
  text,
  imageSide = 'right',
  imageAlt = '',
  imagePlaceholder = true,
  children,
}) {
  const contentBlock = (
    <div className="flex flex-col justify-center">
      {label && (
        <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">{label}</p>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-text-primary">
        {heading}
      </h2>
      {text && (
        <p className="text-text-secondary leading-relaxed mb-6">{text}</p>
      )}
      {children}
    </div>
  );

  const imageBlock = (
    <div className="flex items-center justify-center">
      {imagePlaceholder ? (
        <div className="w-full aspect-[4/3] bg-surface-muted border border-border rounded-xl flex items-center justify-center">
          <span className="text-xs font-mono text-text-muted uppercase tracking-widest">{imageAlt || 'Image'}</span>
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      {imageSide === 'left' ? (
        <>
          {imageBlock}
          {contentBlock}
        </>
      ) : (
        <>
          {contentBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}
