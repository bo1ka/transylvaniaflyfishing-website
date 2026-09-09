# transylvaniaflyfishing.com

Static site for Transylvania Fly Fishing, built with Astro and hosted on Cloudflare Pages.

## Run it

```
npm install
npm run dev
```

Open http://localhost:4321.

`npm run build` writes the production site to `dist/`.

## Where things live

- `src/pages/` one file per URL. `index.astro` is the home page.
- `src/layouts/Base.astro` the shared shell: head, nav, footer.
- `src/styles/global.css` colours, type and the few shared classes.
- `src/content/trips/` one markdown file per guided trip; Sebi creates these through the CMS.
- `src/content.config.ts` the schema those files must follow.
- `public/` files copied as they are: photos, favicons, robots.txt.

## Deploy

Cloudflare Pages builds from the `main` branch: build command `npm run build`, output directory `dist`.
