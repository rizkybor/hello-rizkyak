// Teks antarmuka per bahasa. Data profil (proyek, pengalaman, dll.) ada di src/data.
export const LANGS = ['id', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'id';

export const langMeta: Record<Lang, { name: string; short: string; path: string; locale: string; ogLocale: string }> = {
  id: { name: 'Bahasa Indonesia', short: 'ID', path: '/', locale: 'id-ID', ogLocale: 'id_ID' },
  en: { name: 'English', short: 'EN', path: '/en/', locale: 'en-US', ogLocale: 'en_US' },
};

export const ui = {
  id: {
    meta: {
      title: 'Rizky Ajie Kurniawan, Fullstack Developer dan Web GIS di Tangerang',
      description:
        'Portofolio Rizky Ajie Kurniawan, Fullstack Developer dengan pengalaman 4+ tahun di Laravel, Vue/Nuxt, React, dan PostgreSQL, serta pengembang OCCA untuk peta orienteering. Unduh CV dan portofolio PDF.',
      siteName: 'Portofolio',
      ogAlt: (name: string, role: string, specialty: string) => `${name}, ${role} dan ${specialty}`,
      projectsList: 'Proyek pilihan',
    },
    a11y: {
      skip: 'Langsung ke konten',
      brand: 'Rizky Ajie Kurniawan, ke atas halaman',
      nav: 'Navigasi utama',
      theme: 'Tema tampilan',
      themeLight: 'Tema terang',
      themeSystem: 'Ikuti tema sistem',
      themeDark: 'Tema gelap',
      lang: 'Bahasa',
      legend: 'Legenda warna halaman',
      focus: 'Fokus utama',
      control: (n: number) => `Control ${n}`,
      finish: 'Finish',
      tech: 'Teknologi',
      projectsCaption: 'Daftar proyek lain beserta tahun, teknologi, dan tautan',
      downloadPdf: (title: string, size: string) => `Unduh PDF: ${title}, ${size}`,
      view: (name: string) => `Tampilan ${name}`,
    },
    theme: { light: 'Terang', system: 'Sistem', dark: 'Gelap' },
    header: { cta: 'Unduh dokumen', nav: ['Tentang', 'Proyek', 'Pengalaman', 'Keahlian'] },
    hero: {
      title: 'Sistem web dan peta digital, dibangun dari database sampai layar.',
      lede:
        'Saya bekerja di Tangerang. Empat tahun terakhir saya membangun SaaS multi-tenant, sistem billing dan pembayaran, platform e-learning, dan sekarang OCCA, aplikasi untuk menggambar peta orienteering di iPad dan Mac.',
      download: 'Unduh portofolio',
      projects: 'Lihat proyek',
      status: ['Laravel, Vue dan Nuxt', 'React, Node.js dan TypeScript', 'Web GIS, Mapbox dan three.js'],
      scale: 'Skala 1:4000, kontur 2,5 m',
    },
    about: {
      title: 'Tentang saya',
      p2: 'Saya terbiasa bekerja dari dokumen analisis dan ERD, lalu menurunkannya menjadi API, antarmuka, dan konfigurasi server. Di setiap proyek saya menjaga relasi data tetap rapi, hak akses berlapis, dan halaman publik ramah mesin pencari.',
      p3: 'Di luar pekerjaan klien, saya membangun OCCA: alat untuk menggambar peta orienteering dengan simbol standar IOF di iPad dan Mac. Proyek ini menyatukan dua hal yang saya sukai, rekayasa perangkat lunak dan peta.',
      facts: [
        ['Peran saat ini', 'Fullstack Developer, PT Jendela Cakra Digital'],
        ['Spesialisasi', 'Sistem bisnis web, SaaS, dan Web GIS'],
        ['Pengalaman', '{years} tahun, sejak 2022'],
        ['Lokasi', '{location}'],
        ['Bahasa', 'Indonesia, Inggris'],
        ['Pendidikan', 'S.Kom, Universitas Budi Luhur'],
      ],
    },
    projects: {
      title: 'Proyek',
      intro: 'Empat proyek di bawah ini saya tulis lengkap. Detail teknis, arsitektur, dan sertifikat ada di portofolio PDF.',
      role: 'Peran',
      visit: 'Kunjungi',
      more: 'Proyek lain',
      cols: ['Proyek', 'Tahun', 'Yang dikerjakan'],
    },
    experience: { title: 'Pengalaman kerja' },
    skills: { title: 'Keahlian dan sertifikat', certs: 'Sertifikat' },
    downloads: {
      title: 'Unduh dokumen',
      intro: 'Semua file berupa PDF yang ringan dan bisa dibaca sistem ATS.',
      meta: (pages: number, size: string) => `PDF, ${pages} halaman, ${size}.`,
      button: 'Unduh PDF',
    },
    contact: {
      title: 'Butuh Fullstack Developer untuk tim kamu? Mari bicara.',
      email: 'Email',
      whatsapp: 'WhatsApp',
    },
    footer: {
      legend: ['Kontur', 'Lahan terbuka', 'Air dan tautan', 'Course'],
    },
  },
  en: {
    meta: {
      title: 'Rizky Ajie Kurniawan, Fullstack Developer and Web GIS in Tangerang',
      description:
        'Portfolio of Rizky Ajie Kurniawan, a Fullstack Developer with 4+ years of experience in Laravel, Vue/Nuxt, React and PostgreSQL, and the developer of OCCA for orienteering maps. Download the CV and portfolio PDF.',
      siteName: 'Portfolio',
      ogAlt: (name: string, role: string, specialty: string) => `${name}, ${role} and ${specialty}`,
      projectsList: 'Selected projects',
    },
    a11y: {
      skip: 'Skip to content',
      brand: 'Rizky Ajie Kurniawan, back to top',
      nav: 'Main navigation',
      theme: 'Colour theme',
      themeLight: 'Light theme',
      themeSystem: 'Follow system theme',
      themeDark: 'Dark theme',
      lang: 'Language',
      legend: 'Page colour legend',
      focus: 'Main focus',
      control: (n: number) => `Control ${n}`,
      finish: 'Finish',
      tech: 'Technologies',
      projectsCaption: 'Other projects with year, technologies and links',
      downloadPdf: (title: string, size: string) => `Download PDF: ${title}, ${size}`,
      view: (name: string) => `Screenshot of ${name}`,
    },
    theme: { light: 'Light', system: 'System', dark: 'Dark' },
    header: { cta: 'Download documents', nav: ['About', 'Projects', 'Experience', 'Skills'] },
    hero: {
      title: 'Web systems and digital maps, built from the database to the screen.',
      lede:
        'I work in Tangerang, Indonesia. Over the last four years I have built multi-tenant SaaS, billing and payment systems, an e-learning platform, and now OCCA, an app for drawing orienteering maps on iPad and Mac.',
      download: 'Download portfolio',
      projects: 'See projects',
      status: ['Laravel, Vue and Nuxt', 'React, Node.js and TypeScript', 'Web GIS, Mapbox and three.js'],
      scale: 'Scale 1:4000, 2.5 m contours',
    },
    about: {
      title: 'About me',
      p2: 'I usually start from analysis documents and ERDs, then turn them into APIs, interfaces and server configuration. In every project I keep data relations clean, access control layered, and public pages friendly to search engines.',
      p3: 'Outside client work I am building OCCA: a tool for drawing orienteering maps with IOF standard symbols on iPad and Mac. It brings together two things I love, software engineering and maps.',
      facts: [
        ['Current role', 'Fullstack Developer, PT Jendela Cakra Digital'],
        ['Specialty', 'Web business systems, SaaS and Web GIS'],
        ['Experience', '{years} years, since 2022'],
        ['Location', '{location}'],
        ['Languages', 'Indonesian, English'],
        ['Education', 'B.Comp.Sc., Universitas Budi Luhur'],
      ],
    },
    projects: {
      title: 'Projects',
      intro: 'The four projects below are written up in full. Technical details, architecture and certificates are in the portfolio PDF.',
      role: 'Role',
      visit: 'Visit',
      more: 'Other projects',
      cols: ['Project', 'Year', 'What I did'],
    },
    experience: { title: 'Work experience' },
    skills: { title: 'Skills and certificates', certs: 'Certificates' },
    downloads: {
      title: 'Download documents',
      intro: 'All files are lightweight PDFs that ATS systems can read.',
      meta: (pages: number, size: string) => `PDF, ${pages} pages, ${size}.`,
      button: 'Download PDF',
    },
    contact: {
      title: 'Need a Fullstack Developer on your team? Let’s talk.',
      email: 'Email',
      whatsapp: 'WhatsApp',
    },
    footer: {
      legend: ['Contours', 'Open land', 'Water and links', 'Course'],
    },
  },
} satisfies Record<Lang, unknown>;

export type UI = (typeof ui)['id'];

export function getLang(current: string | undefined): Lang {
  return current === 'en' ? 'en' : 'id';
}
export function t(lang: Lang): UI {
  return ui[lang] as UI;
}
