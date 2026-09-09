import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const githubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: githubPages ? 'https://bo1ka.github.io' : 'https://www.transylvaniaflyfishing.com',
  base: githubPages ? '/transylvaniaflyfishing-website' : '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
