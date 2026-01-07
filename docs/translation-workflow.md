# Translation workflow

The Ogre Project ships in English first.

Other languages may be added progressively using RDS:
we only translate what is needed to unlock the next learner-facing experience.

## Principles

- **English is the source of truth.**
- **Other languages are a maintained mirror**, not a separate course.
- **Do not block shipping**: it is OK for other languages to lag behind, as long as the onboarding flow works.
- **No copy-paste drift**: avoid editing other languages and EN in different directions.

## What gets translated (RDS)

Translate when at least one of these is true:

1. It is part of the learner onboarding (first steps).
2. It is required by navigation (sidebar labels, critical buttons).
3. It is a “gateway” page that points to the next steps.
4. The community is actively using it and asking for another language support.

Everything else stays English until it becomes a bottleneck.

## Folder structure

- English (default): `site/src/content/docs/...`
- Other languages: `site/src/content/docs/<locale>/...` (for example, Portuguese: `site/src/content/docs/pt-br/...`)

Paths should mirror each other whenever possible.

Example:

- EN: `site/src/content/docs/start-here.mdx`
- PT-BR: `site/src/content/docs/pt-br/start-here.mdx`

## Slugs and URLs

- Keep `slug` values the **same** across languages.
- Do **not** include the locale in slugs.
- Stable URLs matter more than translated URLs.

This ensures:

- EN: `/start-here/`
- PT-BR: `/pt-br/start-here/`

## Sidebar and navigation labels

- Sidebar item entries should prefer `{ slug: '...' }` without labels.
  This lets Starlight use the page `title` for each locale.
- Sidebar group labels (e.g. “Getting Started”) are translated via
  `translations: { 'pt-BR': '...' }`.

**Note**: the locale folder is `pt-br/`, but sidebar translation keys use BCP-47 tags like `pt-BR`.

## Links inside MD/MDX

Use **relative links** whenever possible, especially in localized pages.

Good (respects base paths like GitHub Pages):

- `./start-here/`
- `../tracks/gm-101/`

Avoid absolute links:

- `/pt-br/start-here/`
- `/start-here/`

Absolute links may break when the site is deployed under a subpath.

## How to translate a page

1. Copy the EN page to the locale mirrored path.
2. Translate the content, keeping:
   - frontmatter keys
   - `slug`
   - component imports
   - headings structure (when possible)
3. Check local dev:
   - `pnpm -C site dev`
4. Run quality:
   - `pnpm -C site format`
   - `pnpm -C site lint`
   - `pnpm -C site build`

## Marking incomplete translations

If a translated page is only a stub, add a short banner at the top:

> LANG (work in progress) — this page may be incomplete.  
> Use the English version if anything is missing.

Keep stubs minimal and always provide the next link(s) the learner needs.

## Keeping parity over time

When an EN page changes significantly:

- update the locale **only if** that change affects the onboarding flow or navigation.
- otherwise, leave a note and translate later when it becomes relevant.

The goal is **usable**, not perfectly synchronized.
