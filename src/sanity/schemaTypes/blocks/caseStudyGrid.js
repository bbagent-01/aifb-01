import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'caseStudyGrid',
  title: 'Case Study Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'studies',
      title: 'Case Studies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'client', title: 'Client', type: 'string' }),
            defineField({ name: 'metric', title: 'Key Metric', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
            defineField({
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({ name: 'href', title: 'Link', type: 'string' }),
          ],
          preview: { select: { title: 'client', subtitle: 'metric' } },
        },
      ],
    }),
  ],
  preview: {
    select: { studies: 'studies' },
    prepare({ studies }) {
      return { title: 'Case Study Grid', subtitle: `${studies?.length || 0} studies` };
    },
  },
});
