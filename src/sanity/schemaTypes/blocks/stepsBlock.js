import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'stepsBlock',
  title: 'Steps / Process',
  type: 'object',
  fields: [
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),
  ],
  preview: {
    select: { steps: 'steps' },
    prepare({ steps }) {
      return { title: 'Steps', subtitle: `${steps?.length || 0} steps` };
    },
  },
});
