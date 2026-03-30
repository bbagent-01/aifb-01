'use client';

import { useState } from 'react';

export default function TestimonialSlider({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <div className="max-w-3xl mx-auto text-center">
      <blockquote className="text-xl md:text-2xl font-medium text-text-primary leading-relaxed mb-8">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="mb-8">
        <p className="text-sm font-semibold text-text-primary">{t.name}</p>
        <p className="text-xs text-text-muted">{t.role}, {t.company}</p>
      </div>
      {testimonials.length > 1 && (
        <div className="flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? 'bg-accent' : 'bg-border'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
