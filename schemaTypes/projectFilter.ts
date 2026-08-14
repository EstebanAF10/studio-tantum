import {TagIcon} from '@sanity/icons/Tag'
import {defineField, defineType} from 'sanity'

export const projectFilter = defineType({
  name: 'projectFilter',
  title: 'Project filter',
  type: 'object',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'value',
      title: 'Filter value',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'value'},
  },
})
