'use client';

import { useState } from 'react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left group"
          >
            <span className="text-base font-medium text-text-primary group-hover:text-accent transition-colors pr-8">
              {item.question}
            </span>
            <span className="text-text-muted text-xl leading-none shrink-0">
              {openIndex === i ? '−' : '+'}
            </span>
          </button>
          {openIndex === i && (
            <div className="pb-5 pr-12">
              <p className="text-sm text-text-secondary leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
