import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'serviceGrid',
  title: 'Service Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'services',
      title: 'Services',
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
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: { list: [2, 3] },
      initialValue: 3,
    }),
  ],
  preview: {
    select: { services: 'services' },
    prepare({ services }) {
      return { title: 'Service Grid', subtitle: `${services?.length || 0} services` };
    },
  },
});
