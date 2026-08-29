import {TagIcon} from '@sanity/icons/Tag'
import {defineField, defineType} from 'sanity'

export const projectCategory = defineType({
  name: 'projectCategory',
  title: 'Project category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Filter value',
      type: 'slug',
      description: 'Used in the website filter URL. Generate it from the category name.',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Filter order',
      type: 'number',
      description: 'Lower numbers appear first. “Todos” is always shown before the categories.',
      initialValue: 100,
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Filter order',
      name: 'filterOrder',
      by: [
        {field: 'order', direction: 'asc'},
        {field: 'title', direction: 'asc'},
      ],
    },
  ],
  preview: {
    select: {title: 'title', slug: 'slug.current'},
    prepare: ({title, slug}) => ({title, subtitle: slug}),
  },
})
