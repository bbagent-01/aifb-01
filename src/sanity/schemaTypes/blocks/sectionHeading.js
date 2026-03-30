import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'sectionHeading',
  title: 'Section Heading',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string', description: 'Uppercase mono label above heading' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'text', title: 'Supporting Text', type: 'text', rows: 3 }),
    defineField({
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: { list: ['center', 'left'], layout: 'radio' },
      initialValue: 'center',
    }),
  ],
  preview: {
    select: { title: 'heading', subtitle: 'label' },
  },
});
