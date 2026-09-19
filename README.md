# Astro i18n recipe demo

This is a runnable companion project for [withastro/docs PR #14304](https://github.com/withastro/docs/pull/14304). It demonstrates:

- prefixed English and French routes;
- a root redirect to `/en/`;
- translated static slugs (`/en/about/` and `/fr/a-propos/`);
- localized navigation and `<html lang>` values;
- a language picker that links equivalent pages;
- loader-backed English and French content entries.

## Run locally

Use Node.js 22.19.0 or newer.

```sh
npm ci
npm run dev
```

Then visit:

- `http://localhost:4321/`
- `http://localhost:4321/en/about/`
- `http://localhost:4321/fr/a-propos/`
- `http://localhost:4321/en/blog/post-1/`
- `http://localhost:4321/fr/blog/post-1/`

## Validate

```sh
npm run check
npm run build
```

The project is pinned to Astro 7.3.3.
