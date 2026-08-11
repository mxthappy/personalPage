// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE.site,
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()]
});
