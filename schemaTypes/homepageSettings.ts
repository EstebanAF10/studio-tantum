import {HomeIcon} from '@sanity/icons/Home'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const homepageSettings = defineType({
  name: 'homepageSettings',
  title: 'Homepage hero',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'projectImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero eyebrow',
      type: 'string',
      initialValue: 'Tantum Studio',
      hidden: true,
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero title',
      type: 'string',
      initialValue: 'Arquitectura e interiorismo',
      validation: (rule) => rule.required(),
      hidden: true,
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured projects',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'project'}]})],
      hidden: true,
    }),
    defineField({
      name: 'projectOrder',
      title: 'Project order',
      type: 'array',
      description: 'Explicit editorial order; keep in sync with featured projects.',
      of: [defineArrayMember({type: 'reference', to: [{type: 'project'}]})],
      hidden: true,
    }),
    defineField({
      name: 'introductionText',
      title: 'Introduction text',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
      hidden: true,
    }),
    defineField({
      name: 'seoTitle',
      title: 'Homepage SEO title',
      type: 'string',
      validation: (rule) => rule.max(60),
      hidden: true,
    }),
    defineField({
      name: 'seoDescription',
      title: 'Homepage SEO description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(160),
      hidden: true,
    }),
  ],
})
