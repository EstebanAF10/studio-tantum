import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {HomeIcon} from '@sanity/icons/Home'
import {TagIcon} from '@sanity/icons/Tag'
import {UsersIcon} from '@sanity/icons/Users'
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Tantum content')
    .items([
      S.listItem()
        .title('Homepage hero')
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType('homepageSettings')
            .documentId('homepageSettings')
            .title('Homepage hero'),
        ),
      S.listItem()
        .title('Studio')
        .icon(UsersIcon)
        .child(S.document().schemaType('aboutPage').documentId('aboutPage').title('Studio')),
      S.listItem()
        .title('Galería de contacto')
        .icon(DocumentTextIcon)
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
            .title('Galería de contacto'),
        ),
      S.divider(),
      S.listItem()
        .title('Project categories')
        .icon(TagIcon)
        .child(S.documentTypeList('projectCategory').title('Project categories')),
      S.listItem().title('Projects').child(S.documentTypeList('project').title('Projects')),
    ])
