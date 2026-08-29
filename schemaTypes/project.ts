import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'draft',
      options: {
        layout: 'radio',
        list: [
          {title: 'Published', value: 'published'},
          {title: 'In progress', value: 'in-progress'},
          {title: 'Draft', value: 'draft'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'year', title: 'Year', type: 'string'}),
    defineField({
      name: 'squareMeters',
      title: 'Area (m²)',
      type: 'number',
      description: 'Enter only the number. The website adds “m²” automatically.',
      validation: (rule) => rule.required().positive().precision(2),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'projectCategory'}],
        }),
      ],
      validation: (rule) => rule.required().min(1).unique(),
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'Architecture', value: 'Architecture'},
          {title: 'Interior Design', value: 'Interior Design'},
          {title: 'Both', value: 'Both'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortSummary',
      title: 'Short summary',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(240),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full description',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'projectImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'homepageImage',
      title: 'Homepage image',
      type: 'projectImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'detailImageTwo',
      title: 'Project page image 2',
      type: 'projectImage',
      description: 'Shown directly below the main cover image, on the left.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'detailImageThree',
      title: 'Project page image 3',
      type: 'projectImage',
      description: 'Shown directly below the main cover image, on the right.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [defineArrayMember({type: 'projectImage'})],
    }),
    defineField({
      name: 'homepageOrder',
      title: 'Homepage order',
      type: 'number',
      validation: (rule) => rule.integer().min(0),
    }),
    defineField({
      name: 'featured',
      title: 'Featured on homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(160),
    }),
  ],
  orderings: [
    {
      title: 'Homepage order',
      name: 'homepageOrder',
      by: [{field: 'homepageOrder', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'location', media: 'coverImage.image'},
  },
})
