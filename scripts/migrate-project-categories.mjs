/* global console */
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-08-27'})

const legacyCategories = [
  {title: 'Residencial', slug: 'residential', order: 10},
  {title: 'Comercial', slug: 'commercial', order: 20},
  {title: 'Social', slug: 'social', order: 30},
  {title: 'Diseño Interno', slug: 'interior-design', order: 40},
]

const categoryIds = new Map()

for (const category of legacyCategories) {
  const existing = await client.fetch(
    `*[_type == "projectCategory" && slug.current == $slug && !(_id in path("drafts.**"))][0]._id`,
    {slug: category.slug},
  )

  const document = existing
    ? null
    : await client.create({
        _type: 'projectCategory',
        title: category.title,
        slug: {_type: 'slug', current: category.slug},
        order: category.order,
      })

  categoryIds.set(category.slug, existing ?? document._id)
}

const projects = await client.fetch(
  `*[_type == "project"]{
  _id,
  categories,
  detailImageTwo,
  detailImageThree,
  gallery
}`,
)

let patchedProjects = 0

for (const project of projects) {
  const categories = (project.categories ?? []).map((category) => {
    if (typeof category !== 'string') return category

    const referenceId = categoryIds.get(category)
    if (!referenceId) return category

    return {
      _key: `legacy-${category}`,
      _type: 'reference',
      _ref: referenceId,
    }
  })

  const patch = {}
  const categoriesChanged = (project.categories ?? []).some(
    (category) => typeof category === 'string',
  )

  if (categoriesChanged) patch.categories = categories
  if (!project.detailImageTwo && project.gallery?.[0]) patch.detailImageTwo = project.gallery[0]
  if (!project.detailImageThree && project.gallery?.[1]) patch.detailImageThree = project.gallery[1]

  if (Object.keys(patch).length > 0) {
    await client.patch(project._id).set(patch).commit()
    patchedProjects += 1
  }
}

console.log(
  `Patched ${patchedProjects} project document(s) and ensured ${legacyCategories.length} category documents exist.`,
)
