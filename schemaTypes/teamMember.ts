import {UserIcon} from '@sanity/icons/User'
import {defineField, defineType} from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team member',
  type: 'object',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role or discipline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait',
      type: 'projectImage',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'role', media: 'portrait.image'},
  },
})
