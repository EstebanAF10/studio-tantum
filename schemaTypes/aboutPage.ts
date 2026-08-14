import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Studio page',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero image (legacy)',
      type: 'object',
      description:
        'Deprecated. The Studio page uses the About Us image; this field is retained only for legacy data.',
      deprecated: {
        reason: 'The Studio page no longer uses a separate hero image.',
      },
      readOnly: true,
      hidden: true,
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        }),
        defineField({
          name: 'focalPoint',
          title: 'Focal point',
          type: 'object',
          fields: [
            defineField({name: 'x', type: 'number'}),
            defineField({name: 'y', type: 'number'}),
          ],
        }),
        defineField({
          name: 'orientation',
          title: 'Orientation',
          type: 'string',
          options: {
            list: [
              {title: 'Landscape', value: 'landscape'},
              {title: 'Portrait', value: 'portrait'},
              {title: 'Square', value: 'square'},
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero eyebrow',
      type: 'string',
      initialValue: 'Tantum Studio',
      hidden: true,
    }),
    defineField({
      name: 'title',
      title: 'Hero title',
      type: 'string',
      initialValue: 'OUR STUDIO',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'statement',
      title: 'Studio statement',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introductionEyebrow',
      title: 'Introduction eyebrow',
      type: 'string',
      initialValue: 'Estudio',
      hidden: true,
    }),
    defineField({
      name: 'practiceLabels',
      title: 'Practice labels',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      initialValue: ['Arquitectura', 'Diseño interior', 'Costa Rica'],
      hidden: true,
    }),
    defineField({
      name: 'storyImage',
      title: 'About Us image',
      type: 'projectImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'storyEyebrow',
      title: 'Story eyebrow',
      type: 'string',
      initialValue: 'Origen y práctica',
      hidden: true,
    }),
    defineField({
      name: 'storyTitle',
      title: 'Story title',
      type: 'string',
      initialValue: 'Nuestra historia',
      hidden: true,
    }),
    defineField({
      name: 'story',
      title: 'About Us text',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'teamEyebrow',
      title: 'Team eyebrow',
      type: 'string',
      initialValue: 'Personas',
      hidden: true,
    }),
    defineField({
      name: 'teamTitle',
      title: 'Team section title',
      type: 'string',
      initialValue: 'MEET THE TEAM',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'teamIntroduction',
      title: 'Team introduction',
      type: 'text',
      rows: 3,
      hidden: true,
    }),
    defineField({
      name: 'team',
      title: 'El equipo',
      type: 'array',
      of: [defineArrayMember({type: 'teamMember'})],
    }),
    defineField({
      name: 'contactEyebrow',
      title: 'Contact eyebrow',
      type: 'string',
      initialValue: 'Trabajemos juntos',
      hidden: true,
    }),
    defineField({
      name: 'contactTitle',
      title: 'Contact title',
      type: 'string',
      initialValue: 'Hablemos',
      hidden: true,
    }),
    defineField({
      name: 'seoTitle',
      title: 'About page SEO title',
      type: 'string',
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'About page SEO description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(160),
    }),
  ],
})
