// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Ganti dengan domain produksi kamu (dipakai untuk canonical, Open Graph, sitemap).
const SITE = process.env.SITE_URL ?? 'https://rizkyak.vercel.app';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  compressHTML: true,
  prefetch: false,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always', // satu halaman: CSS di-inline, tanpa request render-blocking
    assets: '_assets',
  },
  image: {
    responsiveStyles: true,
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
