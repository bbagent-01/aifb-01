import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'accordionBlock',
  title: 'FAQ / Accordion',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'question' } },
        },
      ],
    }),
  ],
  preview: {
    select: { items: 'items' },
    prepare({ items }) {
      return { title: 'FAQ / Accordion', subtitle: `${items?.length || 0} items` };
    },
  },
});
