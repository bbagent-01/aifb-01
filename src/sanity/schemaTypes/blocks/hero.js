import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'text', title: 'Supporting Text', type: 'text', rows: 3 }),
    defineField({ name: 'primaryCta', title: 'Primary CTA Text', type: 'string' }),
    defineField({ name: 'primaryCtaLink', title: 'Primary CTA Link', type: 'string' }),
    defineField({ name: 'secondaryCta', title: 'Secondary CTA Text', type: 'string' }),
    defineField({ name: 'secondaryCtaLink', title: 'Secondary CTA Link', type: 'string' }),
  ],
  preview: {
    select: { title: 'heading', subtitle: 'label' },
  },
});
