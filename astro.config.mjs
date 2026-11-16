import { defineConfig } from 'astro/config';

// The deploy workflow sets SITE_URL and SITE_BASE from GitHub Pages, so the same build serves
// both the preview at the repository's github.io address (under /concatena-labs-site/) and, once the
// custom domain is set, https://concatenalabs.com at the root.
export default defineConfig({
  site: process.env.SITE_URL || 'https://concatenalabs.com',
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'ignore',
});
