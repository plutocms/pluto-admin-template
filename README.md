# Pluto Admin Template

A [Pluto](https://pluto.vulmix.dev) app with no public site. It has the Pluto admin at `/admin` and the public API. Use it as a headless CMS for a site in any stack.

The home page (`/`) redirects to `/admin`.

## Backends

- **GitHub CMS (default):** no database. Content is Markdown files in this repository, and each save in the admin is a commit. The app extends [`@plutocms/core`](https://github.com/plutocms/pluto).
- **Supabase:** content in your Supabase database. Change the layer in `nuxt.config.ts` to `@plutocms/supabase` and add the package.

## Create a project

```bash
npm create pluto@latest my-cms -t admin --backend github
npm create pluto@latest my-cms -t admin --backend supabase --layers shop,3d
```

The CLI sets the backend and the layers you pick: the `extends` list in `nuxt.config.ts`, the packages and the `.env`.

## Run it

```bash
npm run dev
```

Then open `/admin` on the dev server. With the GitHub CMS, you are signed in as a local user in development. Each save is a commit in the local Git repository.

## Add content types

A new app has no content types. Add them with a [local layer](https://pluto.vulmix.dev/docs/core/layers) or add a feature layer, for example `@plutocms/supabase-blog` or `@plutocms/supabase-shop`.

## Read the content from another site

Make a content type public with `api.public`. Then a site in any framework reads the published items from the public API:

```bash
curl "https://your-cms.example.com/api/pluto/v1/content/<type>?limit=5"
```

The routes are read-only and anonymous. They answer JSON. See [Public API](https://pluto.vulmix.dev/docs/core/public-api) and [Use Pluto headless](https://pluto.vulmix.dev/docs/guides/use-pluto-headless).

## Deploy

Push the project to a GitHub repository. Deploy it to a host with a server runtime, for example Vercel. Then:

- **GitHub CMS:** open `/admin/login` on the deployed site and select **Create the GitHub App**. The page guides you through the rest.
- **Supabase:** set `SUPABASE_URL`, `SUPABASE_KEY` and `DATABASE_URL` in the settings of your host. See `.env.example`.

Set `NUXT_PUBLIC_WEBSITE_NAME` to change the site name.

## License

MIT
