import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'sectionHeading' },
        { type: 'serviceGrid' },
        { type: 'statsBar' },
        { type: 'logoBar' },
        { type: 'stepsBlock' },
        { type: 'ctaBanner' },
        { type: 'accordionBlock' },
        { type: 'testimonialSlider' },
        { type: 'comparisonTable' },
        { type: 'splitSection' },
        { type: 'pricingTiers' },
        { type: 'caseStudyGrid' },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
    prepare({ title, subtitle }) {
      return { title, subtitle: `/${subtitle || ''}` };
    },
  },
});
