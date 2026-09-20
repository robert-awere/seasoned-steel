import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://seasonedsteel.com',
  integrations: [sitemap()],
});
