import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectsPage = defineType({
  name: 'projectsPage',
  title: 'Projects page',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page title',
      type: 'string',
      initialValue: 'Proyectos',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'filters',
      title: 'Project filters',
      type: 'array',
      of: [defineArrayMember({type: 'projectFilter'})],
      initialValue: [
        {value: 'all', label: 'Todos'},
        {value: 'residential', label: 'Residencial'},
        {value: 'commercial', label: 'Comercial'},
        {value: 'social', label: 'Social'},
        {value: 'interior', label: 'Diseño interno'},
      ],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'seoTitle',
      title: 'Projects page SEO title',
      type: 'string',
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Projects page SEO description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(160),
    }),
  ],
})
