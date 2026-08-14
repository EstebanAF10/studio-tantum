import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'm6pk45vu',
    dataset: 'production',
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
  typegen: {
    // Keep Studio builds independent from the sibling Astro repository.
    // Run `npm run typegen` locally when both repositories are checked out.
    enabled: false,
    path: '../Tantum-web/src/**/*.{ts,tsx,astro}',
    schema: 'schema.json',
    generates: '../Tantum-web/src/sanity.types.ts',
    overloadClientMethods: true,
  },
})
