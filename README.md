# Pluto Admin Template

A [Pluto](https://pluto.vulmix.dev) app with no public site. It has the Pluto admin at `/admin` and the public API. Use it as a headless CMS for a site in any stack.

The home page (`/`) redirects to `/admin`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fplutocms%2Fpluto-admin-template&project-name=my-cms&repository-name=my-cms)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/plutocms/pluto-admin-template)

A button copies this template to a new repository in your GitHub account, with the Git CMS, and
deploys it. Then open `/admin/login` on the new site and select **Create the GitHub App**.

## Backends

- **Git CMS (default):** no database. Content is Markdown files in this repository, and each save in the admin is a commit. The app extends [`@plutocms/core`](https://github.com/plutocms/pluto).
- **Supabase:** content in your Supabase database. Change the layer in `nuxt.config.ts` to `@plutocms/supabase` and add the package.

## Create a project

```bash
npm create pluto@latest my-cms -t admin --backend git
npm create pluto@latest my-cms -t admin --backend supabase --layers shop,3d
```

The CLI sets the backend and the layers you pick: the `extends` list in `nuxt.config.ts`, the packages and the `.env`.

## Run it

```bash
npm run dev
```

Then open `/admin` on the dev server. With the Git CMS, you are signed in as a local user in development. Each save is a commit in the local Git repository.

## Add content types

A new app has no content types. Add them with a [local layer](https://pluto.vulmix.dev/docs/extend/layers) or add a feature layer, for example `@plutocms/supabase-blog` or `@plutocms/supabase-shop`.

## Read the content from another site

Make a content type public with `api.public`. Then a site in any framework reads the published items from the public API:

```bash
curl "https://your-cms.example.com/api/pluto/v1/content/<type>?limit=5"
```

The routes are read-only and anonymous. They answer JSON. See [Public API](https://pluto.vulmix.dev/docs/build/public-api) and [Use Pluto headless](https://pluto.vulmix.dev/docs/build/use-pluto-headless).

## Deploy

Push the project to a GitHub repository. Deploy it to a host with a server runtime, for example Vercel. With the Git CMS, **Settings → Deploy** in the admin links to each host. Then:

- **Git CMS:** open `/admin/login` on the deployed site and select **Create the GitHub App**. The page guides you through the rest.
- **Supabase:** set `SUPABASE_URL`, `SUPABASE_KEY` and `DATABASE_URL` in the settings of your host. See `.env.example`.

Set `NUXT_PUBLIC_WEBSITE_NAME` to change the site name.

## License

MIT
