import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'ctaBanner',
  title: 'CTA Banner',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'text', title: 'Supporting Text', type: 'text', rows: 2 }),
    defineField({ name: 'ctaText', title: 'CTA Text', type: 'string' }),
    defineField({ name: 'ctaLink', title: 'CTA Link', type: 'string' }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: { list: ['dark', 'light'], layout: 'radio' },
      initialValue: 'dark',
    }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare({ title }) {
      return { title: `CTA: ${title}` };
    },
  },
});
