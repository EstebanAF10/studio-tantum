import {TagIcon} from '@sanity/icons/Tag'
import {defineField, defineType} from 'sanity'

export const contactInquiryOption = defineType({
  name: 'contactInquiryOption',
  title: 'Contact inquiry option',
  type: 'object',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'value',
      title: 'Form value',
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
