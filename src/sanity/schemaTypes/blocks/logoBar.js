import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'logoBar',
  title: 'Logo Bar',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Client names (will be replaced with logo images later)',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Logo Bar' };
    },
  },
});
