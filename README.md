# Tantum Sanity Studio

Standalone Sanity Studio for project `m6pk45vu`, dataset `production`.

The repository is intentionally separate from the Astro frontend:

```text
/Dev/tantum/
├── Tantum-web/      # Astro site → Netlify
└── studio-tantum/   # Sanity Studio → Sanity hosting
```

The Studio never gets embedded into the public Astro bundle. Its build and
deployment are independent, which keeps Netlify builds focused on the website
and allows Sanity Studio updates without changing the site deployment.

## Local development

```bash
npm ci
npm run dev
```

The Astro app runs separately from `../Tantum-web`.

## Safe deployment

Run the checks and publish the schema before deploying the Studio bundle:

```bash
npm ci
npm run verify
npm run schemas:deploy
npm run deploy
```

`schemas:deploy` updates the Sanity content model. `deploy` publishes the
standalone Studio to Sanity hosting and may ask for the Studio hostname on its
first run. No Sanity write token belongs in this repository.

## TypeGen workflow

The committed generated types live in the Astro repository at
`../Tantum-web/src/sanity.types.ts`. When both sibling repositories are
checked out, run this after changing a schema or GROQ query:

```bash
npm run typegen
npx prettier --write ../Tantum-web/src/sanity.types.ts
```

Studio builds do not run TypeGen automatically, so a standalone Studio clone
can be built and deployed without the Astro repository being present.
