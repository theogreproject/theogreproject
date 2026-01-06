# Contributing

The Ogre Project is an open learning platform for TTRPG players and Game Masters.
We welcome contributions — especially lessons, exercises, projects, fixes, and improved resources.

## TL;DR

1. Pick a template:
   - `docs/templates/lesson.mdx`
   - `docs/templates/exercise.mdx`
   - `docs/templates/project.mdx`
2. Put the new file in the right module folder under `site/src/content/docs/`.
3. Set `title`, `description`, and **stable `slug`**.
4. Add resources and attribution when needed.
5. Run:
   - `pnpm -C site format`
   - `pnpm -C site lint`
   - `pnpm -C site build`
6. Open a PR.

## Where content lives

Learner-facing content:

- `site/src/content/docs/` (MDX pages)

Repo documentation for maintainers:

- `docs/` (architecture, templates, internal docs)

### Content architecture (source of truth)

[This document](docs/content-architecture.md) explains our numbered folders and how `slug:` keeps URLs stable. Please read it before contributing.

## Writing standards (lightweight)

We write **prose-first**, friendly, and table-minded.

- Prefer clear paragraphs and concrete examples.
- Bullets are welcome when they clarify structure, but not as a substitute for writing.
- Keep the scope small. “Runnable tonight” beats “perfect someday”.

### Lesson vs Exercise vs Project

- **Lesson:** teaches (text with topic headings) and ends with an **Assignment** and **Knowledge check**.
- **Exercise:** practice with constraints and ships a **deliverable**.
- **Project:** combines multiple lessons/exercises into a **table-ready artifact**.

Use the templates.

## Resources, licenses, and attribution

If you add external links, quotes, images, or references:

- Follow `ATTRIBUTION.md`
- Prefer linking to sources instead of copying.
- If a license requires attribution, include it clearly.

## File checklist

Before you open a PR, confirm:

- [ ] File is in the correct module folder (`site/src/content/docs/...`)
- [ ] Frontmatter includes `title` and `description`
- [ ] Frontmatter includes a stable `slug` when URL stability matters
- [ ] Internal links are root-relative when possible (`/start-here/`, not `./start-here`)
- [ ] Resources/attribution are correct (see `ATTRIBUTION.md`)
- [ ] `pnpm -C site build` passes

## Local development

From repo root:

```sh
pnpm -C site install
pnpm -C site dev
```

Quality commands:

```sh
pnpm -C site format
pnpm -C site lint
pnpm -C site build
```

## Pull request scope (RDS)

Small PRs win.

- Prefer 1-2 pages per PR (or one focused fix).
- Avoid "drive-by refactors" unless requested.

## Code of Conduct (short version)

Be kind. Be constructive. No gatekeeping. We want the site to feel welcoming to newcomers.
