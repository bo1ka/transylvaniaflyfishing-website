import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.transylvaniaflyfishing.com',
  integrations: [sitemap()],
});
