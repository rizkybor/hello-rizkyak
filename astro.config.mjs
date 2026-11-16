// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Ganti dengan domain produksi kamu (dipakai untuk canonical, Open Graph, sitemap).
const SITE = process.env.SITE_URL ?? 'https://rizkyajiekurniawan.my.id';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  compressHTML: true,
  prefetch: false,
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'id', locales: { id: 'id-ID', en: 'en-US' } },
    }),
  ],
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
