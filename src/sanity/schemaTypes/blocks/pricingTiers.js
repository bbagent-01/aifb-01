import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pricingTiers',
  title: 'Pricing Tiers',
  type: 'object',
  fields: [
    defineField({
      name: 'tiers',
      title: 'Tiers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'price', title: 'Price', type: 'string' }),
            defineField({ name: 'period', title: 'Period', type: 'string', initialValue: 'per month' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
            defineField({ name: 'featured', title: 'Featured?', type: 'boolean', initialValue: false }),
            defineField({
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({ name: 'cta', title: 'CTA Text', type: 'string' }),
          ],
          preview: { select: { title: 'label', subtitle: 'price' } },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Pricing Tiers' };
    },
  },
});
