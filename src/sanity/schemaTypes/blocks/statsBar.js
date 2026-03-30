import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'statsBar',
  title: 'Stats Bar',
  type: 'object',
  fields: [
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: { list: ['dark', 'light'], layout: 'radio' },
      initialValue: 'dark',
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Stats Bar' };
    },
  },
});
