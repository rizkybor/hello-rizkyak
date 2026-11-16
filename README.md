# hello-rizkyak

Landing page portofolio **Rizky Ajie Kurniawan**, Fullstack Developer dan Web GIS.
Dibangun dengan [Astro 5](https://astro.build), tanpa framework UI, dengan satu momen 3D (Three.js) yang dimuat secara malas.

## Menjalankan

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # hasil statis di ./dist
npm run preview
```

Node 22 (lihat `.nvmrc`).

## Sebelum deploy: atur domain

Canonical URL, Open Graph, sitemap, `robots.txt`, dan `llms.txt` memakai `site` di `astro.config.mjs`.
Set environment variable `SITE_URL` di hosting (contoh `https://rizkyak.dev`), atau ubah nilai default
`https://rizkyak.vercel.app` di `astro.config.mjs`.

## Deploy

- **Vercel**: import repo, framework preset *Astro*. Header cache dan `Content-Disposition` sudah ada di `vercel.json`.
- **Netlify / Cloudflare Pages**: build `npm run build`, output `dist`. Header ada di `public/_headers`.

## Push ke GitHub

```bash
git init -b main
git add .
git commit -m "feat: landing page portofolio Astro"
git remote add origin https://github.com/rizkybor/hello-rizkyak.git
git push -u origin main
```

## Mengubah konten

Semua teks ada di **`src/data/profile.ts`**: profil, proyek, pengalaman, keahlian, sertifikat, dan daftar dokumen.
Satu sumber ini dipakai untuk tampilan, JSON-LD, dan `llms.txt`, jadi cukup ubah di satu tempat.

- Dokumen unduhan: taruh PDF di `public/docs/` lalu daftarkan di `documents` pada `profile.ts`.
  Ukuran file dihitung otomatis saat build.
- Gambar proyek: `src/assets/projects/<nama>.png|jpg`, dipanggil lewat field `image`.
  Astro mengubahnya ke WebP responsif saat build.

## Struktur

```
src/
  data/profile.ts          satu sumber konten
  layouts/Base.astro       <head>: SEO, Open Graph, JSON-LD @graph, preload font
  components/              Header, Hero, Leg (section + control course), Projects, Downloads, Control
  scripts/terrain.ts       terrain kontur Three.js (lazy)
  scripts/terrain-field.js fungsi medan yang sama dengan peta SVG fallback
  assets/contours.svg      peta kontur statis (fallback + animasi gambar garis)
  pages/index.astro        halaman
  pages/robots.txt.ts      robots + izin crawler AI
  pages/llms.txt.ts        ringkasan faktual untuk answer engine (GEO)
public/
  docs/                    PDF portofolio dan CV
  og.png, favicon.svg, apple-touch-icon.png, site.webmanifest, _headers
```

## Desain

Bahasa visual diambil dari peta orienteering standar IOF (ISOM): putih kertas peta, cokelat kontur,
kuning lahan terbuka, biru air, dan ungu overprint course sebagai satu-satunya warna aksi.
Hero adalah segitiga *start*, setiap section adalah *control* bernomor, dan bagian unduh adalah *finish*.
Tipografi: Bricolage Grotesque (judul) dan Public Sans (isi), self-hosted.

## Performa

- HTML ±22 KB gzip (CSS dan peta SVG di-inline), JS awal ±3 KB.
- Three.js (±130 KB gzip) hanya diunduh di layar ≥ 900px, setelah interaksi pertama,
  bila WebGL2 hardware tersedia, tidak *reduced motion* dan tidak *Save-Data*. Render dibatasi 30 fps
  dan berhenti saat hero tidak terlihat.
- Lighthouse (lokal): desktop 100/100/100/100, mobile 99/100/100/100, CLS 0.

## SEO dan GEO

- Satu `<h1>`, heading berurutan, landmark, skip link, fokus keyboard terlihat.
- `title`, `description`, canonical, Open Graph (`profile`), Twitter card, `og.png` 1200×630.
- JSON-LD `@graph`: `WebSite`, `ProfilePage`, `Person` (dengan `knowsAbout`, `hasCredential`, `sameAs`),
  `ItemList` proyek, dan `DigitalDocument` untuk setiap PDF.
- `sitemap-index.xml`, `robots.txt` yang mengizinkan GPTBot, ClaudeBot, PerplexityBot, Google-Extended, dll.
- `llms.txt` berisi fakta ringkas (peran, pengalaman, proyek, keahlian) yang digenerate dari data yang sama.
