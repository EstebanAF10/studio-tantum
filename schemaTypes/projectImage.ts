import {ImageIcon} from '@sanity/icons/Image'
import {defineField, defineType} from 'sanity'

export const projectImage = defineType({
  name: 'projectImage',
  title: 'Project image',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description: 'Describe the visible content and purpose of the image.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'focalPoint',
      title: 'Focal point',
      type: 'object',
      description: 'Optional normalized x/y coordinates from 0 to 1.',
      fields: [
        defineField({
          name: 'x',
          type: 'number',
          validation: (rule) => rule.min(0).max(1),
        }),
        defineField({
          name: 'y',
          type: 'number',
          validation: (rule) => rule.min(0).max(1),
        }),
      ],
    }),
    defineField({
      name: 'orientation',
      title: 'Orientation',
      type: 'string',
      initialValue: 'landscape',
      options: {
        layout: 'radio',
        list: [
          {title: 'Landscape', value: 'landscape'},
          {title: 'Portrait', value: 'portrait'},
          {title: 'Square', value: 'square'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'alt', media: 'image'},
  },
})
