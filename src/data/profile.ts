// Satu sumber data: dipakai untuk tampilan, JSON-LD (SEO) dan llms.txt (GEO).
export const person = {
  name: 'Rizky Ajie Kurniawan',
  shortName: 'Rizky AK',
  role: 'Fullstack Developer',
  specialty: 'Web GIS',
  location: 'Kabupaten Tangerang, Banten, Indonesia',
  locality: 'Tangerang',
  region: 'Banten',
  country: 'ID',
  email: 'rizkyak994@gmail.com',
  phoneDisplay: '0851-2111-0794',
  phoneIntl: '+6285121110794',
  whatsapp: 'https://wa.me/6285121110794',
  linkedin: 'https://www.linkedin.com/in/rizky-ajie-kurniawan-49b885193/',
  github: 'https://github.com/rizkybor',
  yearsExperience: '4+',
  summary:
    'Fullstack Developer dengan pengalaman lebih dari empat tahun membangun aplikasi web enterprise, SaaS multi-tenant, sistem billing dan pembayaran, platform e-learning, serta visualisasi geospasial. Memegang siklus penuh dari analisis kebutuhan, desain database, REST API, frontend SPA/SSR, hingga deployment.',
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  context: string;
  role: string;
  url?: string;
  stack: string[];
  points: string[];
  facts?: { value: string; label: string }[];
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'occa',
    name: 'OCCA',
    tagline: 'Orienteering Cakra CAD Application: peta orienteering digambar langsung di iPad dan Mac.',
    year: '2026',
    context: 'Produk sendiri, didukung PT Jendela Cakra Digital',
    role: 'Developer',
    stack: ['iPadOS 17+', 'macOS 14+', 'ISOM 2017-2', 'ISSprOM 2019-2', 'IOF XML', 'OCAD & OOM'],
    points: [
      'Simbol standar IOF untuk peta hutan (ISOM 2017-2) dan peta sprint (ISSprOM 2019-2).',
      'Menggambar di atas citra satelit resolusi tinggi dengan skala, dpi, dan proyeksi UTM.',
      'Kerja lapangan dengan GPS track, catatan, dan foto.',
      'Course planner dengan deskripsi kontrol dan export IOF XML.',
      'Import dan export OCAD 10, OCAD 12, dan OOM.',
    ],
    facts: [
      { value: '2', label: 'set simbol IOF' },
      { value: '3', label: 'format import' },
      { value: 'v1.0', label: 'segera rilis' },
    ],
    image: 'occa',
    featured: true,
  },
  {
    slug: 'jstock',
    name: 'jstock',
    tagline: 'SaaS manajemen inventory multi-tenant dengan stok LOT/Batch dan label QR.',
    year: '2026',
    context: 'PT Jendela Cakra Digital',
    role: 'Fullstack Developer',
    stack: ['Laravel 13', 'Sanctum', 'React 19', 'Tailwind CSS 4', 'PostgreSQL', 'Docker'],
    points: [
      'Isolasi data tenant di lapisan model dengan empat gerbang middleware.',
      'Stok hanya terpotong saat approval terakhir disetujui, di dalam satu transaksi database.',
      'Halaman pindai QR publik tanpa login dengan rate limit dan tanpa data harga.',
    ],
    facts: [
      { value: '119', label: 'endpoint API' },
      { value: '147', label: 'automated test' },
      { value: '56', label: 'permission' },
    ],
    image: 'jstock',
    featured: true,
  },
  {
    slug: 'kea',
    name: 'KEA',
    tagline: 'Platform e-learning berorientasi karier: bootcamp, video course, dan penyaluran kerja.',
    year: '2026',
    context: 'PT Jendela Cakra Digital',
    role: 'Fullstack Developer',
    stack: ['Laravel 13', 'Nuxt 4', 'TypeScript', 'Filament 5', 'PostgreSQL', 'Redis', 'Midtrans'],
    points: [
      'Kursi cohort dikunci saat checkout; status lunas hanya dari webhook Midtrans yang terverifikasi.',
      'Sertifikat PDF ber-QR dengan halaman verifikasi publik.',
      'Halaman publik dirender server dengan ISR, JSON-LD, dan sitemap dinamis.',
    ],
    facts: [
      { value: '57', label: 'endpoint REST' },
      { value: '34', label: 'feature test' },
      { value: '6', label: 'modul domain' },
    ],
    image: 'kea',
    featured: true,
  },
  {
    slug: 'fasttrack',
    name: 'FastTrack',
    tagline: 'E-catalogue legalitas bisnis dalam bahasa Indonesia, Inggris, dan Mandarin.',
    year: '2026',
    context: 'Klien: Fasttrack.legal',
    role: 'Fullstack Developer',
    url: 'https://fasttrack.legal',
    stack: ['Laravel 13', 'Inertia 2', 'Vue 3', 'vue-i18n', 'Tailwind CSS'],
    points: [
      'Satu sumber data tiga bahasa melayani tampilan, SEO, dan sitemap tanpa CMS.',
      'Sepuluh tipe schema JSON-LD dan sitemap otomatis untuk 134 URL.',
      'Formulir prospek anti-spam tanpa reCAPTCHA.',
    ],
    facts: [
      { value: '86', label: 'paket layanan' },
      { value: '134', label: 'URL sitemap' },
      { value: '3', label: 'bahasa' },
    ],
    image: 'fasttrack',
    featured: true,
  },
  {
    slug: 'prime-billing',
    name: 'Prime Billing & Karyapayment',
    tagline: 'Sistem invoice lintas divisi dan voucher pembayaran dengan tanda tangan digital.',
    year: '2024–2025',
    context: 'PT Karya Prima Usahatama',
    role: 'Project Leader, Fullstack Developer',
    url: 'https://primebilling.id',
    stack: ['Laravel 10', 'Livewire', 'Tailwind', 'PrivyID', 'Accurate', 'Dropbox'],
    points: [
      'Approval tujuh tahap dengan notifikasi real-time, dirilis v1.0 dalam 89 hari.',
      'Integrasi PrivyID, Accurate, dan Dropbox, serta Host-to-Host Bank Mandiri dan BNI.',
    ],
    image: 'billing',
  },
  {
    slug: 'cakracrm',
    name: 'CakraCRM',
    tagline: 'Sistem sales dan pipeline internal dengan Kanban dan dashboard analitik.',
    year: '2026',
    context: 'PT Jendela Cakra Digital',
    role: 'Fullstack Developer',
    stack: ['Express 5', 'TypeScript', 'Prisma', 'PostgreSQL', 'React 19'],
    points: ['JWT refresh-token rotation di cookie httpOnly, Argon2id, CSRF, dan rate limit.'],
    image: 'crm',
  },
  {
    slug: 'ism-csms',
    name: 'ISM CSMS',
    tagline: 'Alur kalibrasi lima tahap dari order sampai sertifikat untuk PT Indo Safety Marine.',
    year: '2023–2025',
    context: 'Freelance',
    role: 'Fullstack Developer',
    url: 'https://indosafetymarine.co.id',
    stack: ['Vue 2', 'Vuetify', 'Firebase', 'PWA', 'three.js'],
    points: ['35 permission yang dijaga sampai Firestore Security Rules, dengan arsip PDF ber-revisi.'],
    image: 'csms',
  },
  {
    slug: 'hcis-bumn',
    name: 'HCIS BUMN',
    tagline: 'Platform talent mobility BUMN dengan konsep seperti LinkedIn.',
    year: '2024',
    context: 'PT Icon Plus (PLN) untuk Kementerian BUMN',
    role: 'Frontend Engineer',
    url: 'https://hcis.bumn.go.id',
    stack: ['Vue.js', 'Vuetify', 'Vuex', 'Vite'],
    points: ['Pembuatan akun dengan captcha, CRUD bio, follow company, upload dan download file.'],
    image: 'hcis',
  },
  {
    slug: 'konsultrik',
    name: 'Konsultrik',
    tagline: 'Konsultasi antara pengguna dan engineer PLN.',
    year: '2023',
    context: 'PT Icon Plus (PLN) untuk PLN',
    role: 'Frontend Engineer',
    url: 'https://konsultrik.plne.co.id',
    stack: ['Vue.js', 'Bootstrap', 'Socket.IO', 'Firebase', 'Pinia'],
    points: ['Chat dan notifikasi realtime, serta login Google OAuth.'],
    image: 'konsultrik',
  },
  {
    slug: 'jsgs',
    name: 'Budi Luhur Journal of Strategic & Global Studies',
    tagline: 'Jurnal ilmiah open access Prodi Hubungan Internasional FISIP Universitas Budi Luhur.',
    year: '2024',
    context: 'Freelance',
    role: 'Frontend Engineer',
    url: 'https://jurnal.fisip.budiluhur.ac.id',
    stack: ['OJS', 'PKP'],
    points: ['Kustomisasi tema, navigasi, arsip edisi, dan call for papers.'],
    image: 'jurnal',
  },
  {
    slug: 'energi-surya-gas',
    name: 'Energi Surya Gas',
    tagline: 'Company profile dengan CMS untuk distributor gas spesial dan peralatan cryogenic.',
    year: '2024',
    context: 'Freelance',
    role: 'Frontend Engineer',
    url: 'https://energisuryagas.com',
    stack: ['Figma', 'WordPress'],
    points: ['Desain di Figma lalu diimplementasikan di WordPress.'],
    image: 'esg',
  },
];

export const experience = [
  {
    role: 'Fullstack Developer',
    org: 'PT Jendela Cakra Digital',
    place: 'Tangerang Selatan',
    start: '2025-09',
    period: 'Sep 2025 – sekarang',
    note: 'jstock, KEA, FastTrack, CakraCRM, dan Landscape 360. Analisis sistem, design system, sampai deployment Docker, Nginx, dan Supervisor.',
  },
  {
    role: 'Project Leader, Fullstack Developer',
    org: 'PT Karya Prima Usahatama',
    place: 'Jakarta Barat',
    start: '2025-02',
    end: '2025-09',
    period: 'Feb 2025 – Sep 2025',
    note: 'Memimpin Prime Billing dan workflow e-Procurement; RBAC, code review, dan integrasi PrivyID.',
  },
  {
    role: 'Software Engineer',
    org: 'PT Karya Prima Usahatama',
    place: 'Jakarta Barat',
    start: '2024-07',
    end: '2025-01',
    period: 'Jul 2024 – Jan 2025',
    note: 'Karya Payment, Host-to-Host Bank Mandiri (MCM) dan BNI (OGP), serta penjurnalan otomatis Accurate.',
  },
  {
    role: 'Web Software Engineer',
    org: 'PT Prima Data Semesta, penempatan PLN Icon Plus',
    place: 'Jakarta Selatan',
    start: '2023-07',
    end: '2024-07',
    period: 'Jul 2023 – Jul 2024',
    note: 'WebView Vue 3 untuk aplikasi mobile Kotlin dan Swift, diimplementasikan dari desain Figma.',
  },
  {
    role: 'Frontend Developer',
    org: 'PT Mega Giga Solusindo, penempatan PLN Icon Plus',
    place: 'Jakarta Selatan',
    start: '2022-02',
    end: '2023-07',
    period: 'Feb 2022 – Jul 2023',
    note: 'ISSPD, checkout PLN Mobile, Konsultrik, dan HCIS BUMN.',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Backend', items: ['PHP 8', 'Laravel 10–13', 'Livewire', 'Inertia', 'Filament', 'Node.js', 'Express', 'REST API', 'WebSockets'] },
  { group: 'Frontend', items: ['TypeScript', 'Vue 2/3', 'Nuxt 4', 'React 19', 'Next.js', 'Astro', 'Tailwind CSS', 'Pinia', 'TanStack Query'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore', 'Redis', 'Prisma', 'Eloquent'] },
  { group: 'Infrastruktur', items: ['Docker', 'Linux VPS', 'Nginx', 'PHP-FPM', 'Supervisor', 'PM2', 'Render', 'Vercel'] },
  { group: 'Peta & visual', items: ['Mapbox GL JS', 'GeoJSON', 'three.js', 'Chart.js', 'ISOM / IOF XML'] },
  { group: 'Integrasi', items: ['PrivyID', 'Accurate', 'Dropbox', 'Midtrans', 'Bunny Stream', 'Bank Mandiri MCM', 'BNI OGP'] },
];

export const certificates = [
  { name: 'Maju Bareng AI: LLM-Based Tools & Gemini API Integration', issuer: 'Hacktiv8', date: 'Jan 2026' },
  { name: 'Next.js From Scratch 2024', issuer: 'Udemy, Brad Traversy', date: 'Des 2024' },
  { name: 'JavaScript (Basic)', issuer: 'HackerRank', date: 'Des 2022' },
  { name: 'Dart Programming untuk Persiapan Belajar Flutter', issuer: 'BuildWith Angga', date: 'Okt 2022' },
  { name: 'Two Day Class: Fullstack Developer', issuer: 'BuildWith Angga', date: '2022' },
  { name: 'Sertifikat Kompetensi Junior Web Developer', issuer: 'BNSP, LSP Informatika', date: 'Des 2020' },
  { name: 'Basic Computer Algorithm Competency', issuer: 'FTI Universitas Budi Luhur', date: 'Sep 2020' },
  { name: 'Seminar Artificial Intelligence for Your Future', issuer: 'FTI Universitas Budi Luhur', date: 'Sep 2020' },
];

export const education = [
  { name: 'Universitas Budi Luhur', detail: 'Sarjana Ilmu Komputer (S.Kom)', period: '2018 – 2021' },
  { name: 'Hacktiv8 Indonesia', detail: 'Program Full Stack JavaScript, fase Persiapan sampai Immersive 2', period: '2021' },
];

export const documents = [
  {
    id: 'portofolio',
    title: 'Portofolio dan sertifikat',
    detail: '11 proyek dan 8 sertifikat, bahasa Indonesia dan Inggris dalam satu file.',
    href: '/docs/portofolio-rizky-ajie-kurniawan.pdf',
    pages: 24,
    primary: true,
  },
  {
    id: 'cv-id',
    title: 'CV (Bahasa Indonesia)',
    detail: 'Format ATS satu kolom.',
    href: '/docs/cv-rizky-ajie-kurniawan-id.pdf',
    pages: 3,
  },
  {
    id: 'cv-en',
    title: 'CV (English)',
    detail: 'ATS-friendly, single column.',
    href: '/docs/cv-rizky-ajie-kurniawan-en.pdf',
    pages: 3,
  },
];
