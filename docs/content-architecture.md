# Content Architecture (Source of Truth)

This document defines **how content is organized** in The Ogre Project.
It is meant for contributors and maintainers.

## Goals

- Keep **public URLs stable** over time.
- Make the curriculum easy to navigate and scale.
- Make writing content **mechanical and consistent**.
- Avoid “where do I put this?” chaos.

## Two structures: internal folders vs public URLs

- **Internal folders** are numbered to reflect curriculum order.
- **Public URLs** are controlled via `slug:` in frontmatter.

Rule: **we may move files**, but we should **not break URLs**.

## Folder conventions (internal)

All learner-facing content lives in:

`site/src/content/docs/`

We organize modules as:

- `00-getting-started/`
- `01-player-foundations/`
- `02-gm-101/`
- `03-worldbuilding/`
- `04-campaign-ops/`

Each module folder must have an `index.mdx` (the module landing / “quest board”).

## Slugs (public URLs)

Every page that must keep a stable URL should set a `slug:`.

Examples:

- Start Here page:

  - file: `00-getting-started/start-here.mdx`
  - frontmatter: `slug: start-here`
  - URL: `/start-here/`

- Track landing page:
  - file: `02-gm-101/index.mdx`
  - frontmatter: `slug: tracks/gm-101`
  - URL: `/tracks/gm-101/`

## Internal links

Use the `DocLink` component for internal navigation so links:

- respect the `base` path (GitHub Pages)
- automatically add the locale prefix when you’re in `/pt-br/`

Example:

```mdx
import DocLink from '../_components/DocLink.astro';

<DocLink href="how-it-works">How This Course Works</DocLink>
```

Rule of thumb: if it points to another page inside the docs, use `DocLink` with a slug (no leading `/`).

For card links, use `DocLinkCard`:

```mdx
import DocLinkCard from '../_components/DocLinkCard.astro';

<DocLinkCard title="Start Here" href="start-here" />
```

## Page naming (when we start producing lessons)

Within a module folder, future pages follow a predictable pattern:

- `lesson-<topic>.mdx`
- `exercise-<topic>.mdx`
- `project-<topic>.mdx`

Keep filenames lowercase, hyphenated, and descriptive.

## Translations (i18n)

English is the source of truth. PT-BR is added progressively (RDS).

See: [`docs/translation-workflow.md`](translation-workflow.md).

Locale folders follow the `xx-yy` pattern (two letters + dash + two letters), with the last two in
lowercase (example: `pt-br`). `DocLink` and `DocLinkCard` detect locales from this folder pattern.

## New page checklist

Before opening a PR:

- [ ] File is in the correct numbered module folder.
- [ ] `title` and `description` are present.
- [ ] `slug` is set if URL stability matters.
- [ ] Internal links are relative (avoid `/...` links that can break under a base path).
- [ ] Build passes: `pnpm -C site build`
