import {CogIcon} from '@sanity/icons/Cog'
import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'defaultSeoDescription',
      title: 'Default SEO description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({name: 'phone', title: 'Phone', type: 'string'}),
    defineField({name: 'address', title: 'Address', type: 'text', rows: 3}),
    defineField({name: 'instagramUrl', title: 'Instagram URL', type: 'url'}),
    defineField({name: 'facebookUrl', title: 'Facebook URL', type: 'url'}),
    defineField({name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url'}),
    defineField({name: 'footerText', title: 'Footer text', type: 'string'}),
    defineField({
      name: 'copyrightText',
      title: 'Copyright text',
      type: 'string',
      initialValue: '© 2025 Tantum Studio',
    }),
    defineField({
      name: 'footerContactHeading',
      title: 'Footer contact heading',
      type: 'string',
      initialValue: 'Contáctanos',
    }),
    defineField({
      name: 'footerSocialHeading',
      title: 'Footer social heading',
      type: 'string',
      initialValue: 'Social',
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation labels',
      type: 'object',
      fields: [
        defineField({
          name: 'about',
          title: 'About label',
          type: 'string',
          initialValue: 'Nosotros',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'projects',
          title: 'Projects label',
          type: 'string',
          initialValue: 'Proyectos',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'contact',
          title: 'Contact label',
          type: 'string',
          initialValue: 'Contáctanos',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
})
