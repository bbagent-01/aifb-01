import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonialSlider',
  title: 'Testimonial Slider',
  type: 'object',
  fields: [
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 3 }),
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'role', title: 'Role', type: 'string' }),
            defineField({ name: 'company', title: 'Company', type: 'string' }),
          ],
          preview: { select: { title: 'name', subtitle: 'company' } },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Testimonial Slider' };
    },
  },
});
