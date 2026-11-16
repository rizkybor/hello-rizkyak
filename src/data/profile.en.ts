// Terjemahan Inggris untuk data profil. Hanya field teks yang diterjemahkan;
// URL, stack, gambar, dan tanggal mesin diambil dari profile.ts.
import * as id from './profile';
import type { Project } from './profile';

export const person = {
  ...id.person,
  location: 'Tangerang Regency, Banten, Indonesia',
  summary:
    'Fullstack Developer with more than four years of experience building enterprise web applications, multi-tenant SaaS, billing and payment systems, e-learning platforms and geospatial visualisation. I own the full cycle from requirements analysis, database design and REST APIs to SPA/SSR frontends and deployment.',
};

const projectText: Record<string, Partial<Pick<Project, 'tagline' | 'context' | 'role' | 'points' | 'facts'>>> = {
  occa: {
    tagline: 'Orienteering Cakra CAD Application: orienteering maps drawn directly on iPad and Mac.',
    context: 'Own product, supported by PT Jendela Cakra Digital',
    points: [
      'IOF standard symbols for forest maps (ISOM 2017-2) and sprint maps (ISSprOM 2019-2).',
      'Draw over high-resolution satellite imagery with scale, dpi and UTM projection.',
      'Fieldwork with GPS tracks, notes and photos.',
      'Course planner with control descriptions and IOF XML export.',
      'Import and export of OCAD 10, OCAD 12 and OOM.',
    ],
    facts: [
      { value: '2', label: 'IOF symbol sets' },
      { value: '3', label: 'import formats' },
      { value: 'v1.0', label: 'coming soon' },
    ],
  },
  jstock: {
    tagline: 'Multi-tenant inventory SaaS with LOT/batch stock and QR labels.',
    points: [
      'Tenant data isolation at the model layer with four middleware gates.',
      'Stock is only deducted on final approval, inside a single database transaction.',
      'Public QR scan page without login, rate limited and without pricing data.',
    ],
    facts: [
      { value: '119', label: 'API endpoints' },
      { value: '147', label: 'automated tests' },
      { value: '56', label: 'permissions' },
    ],
  },
  kea: {
    tagline: 'Career-oriented e-learning platform: bootcamps, video courses and job placement.',
    points: [
      'Cohort seats are locked at checkout; paid status only comes from a verified Midtrans webhook.',
      'QR-coded PDF certificates with a public verification page.',
      'Public pages server-rendered with ISR, JSON-LD and a dynamic sitemap.',
    ],
    facts: [
      { value: '57', label: 'REST endpoints' },
      { value: '34', label: 'feature tests' },
      { value: '6', label: 'domain modules' },
    ],
  },
  fasttrack: {
    tagline: 'Business legal services e-catalogue in Indonesian, English and Mandarin.',
    context: 'Client: Fasttrack.legal',
    points: [
      'One trilingual data source serving the UI, SEO and sitemap without a CMS.',
      'Ten JSON-LD schema types and an automatic sitemap for 134 URLs.',
      'Anti-spam lead form without reCAPTCHA.',
    ],
    facts: [
      { value: '86', label: 'service packages' },
      { value: '134', label: 'sitemap URLs' },
      { value: '3', label: 'languages' },
    ],
  },
  'prime-billing': {
    tagline: 'Cross-division invoicing and payment vouchers with digital signatures.',
    points: [
      'Seven-stage approval with real-time notifications, v1.0 shipped in 89 days.',
      'PrivyID, Accurate and Dropbox integrations, plus Host-to-Host with Bank Mandiri and BNI.',
    ],
  },
  cakracrm: {
    tagline: 'Internal sales and pipeline system with Kanban and analytics dashboard.',
    points: ['JWT refresh-token rotation in httpOnly cookies, Argon2id, CSRF and rate limiting.'],
  },
  'ism-csms': {
    tagline: 'Five-stage calibration workflow from order to certificate for PT Indo Safety Marine.',
    points: ['35 permissions enforced down to Firestore Security Rules, with versioned PDF archives.'],
  },
  'hcis-bumn': {
    tagline: 'Talent mobility platform for state-owned enterprises, LinkedIn-style.',
    context: 'PT Icon Plus (PLN) for the Ministry of SOEs',
    points: ['Account creation with captcha, bio CRUD, company follow, file upload and download.'],
  },
  konsultrik: {
    tagline: 'Consultation between customers and PLN engineers.',
    context: 'PT Icon Plus (PLN) for PLN',
    points: ['Real-time chat and notifications, plus Google OAuth login.'],
  },
  jsgs: {
    tagline: 'Open-access academic journal of the International Relations programme, FISIP Universitas Budi Luhur.',
    points: ['Theme customisation, navigation, issue archive and call for papers.'],
  },
  'energi-surya-gas': {
    tagline: 'Company profile with CMS for a specialty gas and cryogenic equipment distributor.',
    points: ['Designed in Figma, then implemented in WordPress.'],
  },
};

export const projects: Project[] = id.projects.map((p) => ({ ...p, ...projectText[p.slug] }));

const expText = [
  { period: 'Sep 2025 – present', place: 'South Tangerang', note: 'jstock, KEA, FastTrack, CakraCRM and Landscape 360. System analysis, design system, through to Docker, Nginx and Supervisor deployment.' },
  { place: 'West Jakarta', note: 'Led Prime Billing and the e-Procurement workflow; RBAC, code review and PrivyID integration.' },
  { place: 'West Jakarta', note: 'Karya Payment, Host-to-Host with Bank Mandiri (MCM) and BNI (OGP), and automatic journaling to Accurate.' },
  { org: 'PT Prima Data Semesta, placed at PLN Icon Plus', place: 'South Jakarta', note: 'Vue 3 WebViews for Kotlin and Swift mobile apps, implemented from Figma designs.' },
  { org: 'PT Mega Giga Solusindo, placed at PLN Icon Plus', place: 'South Jakarta', note: 'ISSPD, PLN Mobile checkout, Konsultrik and HCIS BUMN.' },
];
export const experience = id.experience.map((e, i) => ({ ...e, ...expText[i] }));

const skillGroups: Record<string, string> = { Infrastruktur: 'Infrastructure', 'Peta & visual': 'Maps & visual', Integrasi: 'Integrations' };
export const skills = id.skills.map((s) => ({ ...s, group: skillGroups[s.group] ?? s.group }));

const month: Record<string, string> = { Des: 'Dec', Okt: 'Oct', Agu: 'Aug', Mei: 'May' };
const certName: Record<string, string> = {
  'Dart Programming untuk Persiapan Belajar Flutter': 'Dart Programming in Preparation for Flutter',
  'Sertifikat Kompetensi Junior Web Developer': 'Junior Web Developer Competency Certificate',
};
export const certificates = id.certificates.map((c) => ({
  ...c,
  name: certName[c.name] ?? c.name,
  date: c.date.replace(/^[A-Za-z]+/, (m) => month[m] ?? m),
}));

export const education = [
  { ...id.education[0], detail: 'Bachelor of Computer Science (S.Kom)' },
  { ...id.education[1], detail: 'Full Stack JavaScript programme, Preparation through Immersive 2' },
];

export const documents = [
  { ...id.documents[0], title: 'Portfolio and certificates', detail: '11 projects and 8 certificates, Indonesian and English in one file.' },
  { ...id.documents[1], title: 'CV (Bahasa Indonesia)', detail: 'Single-column ATS format.' },
  { ...id.documents[2], title: 'CV (English)', detail: 'ATS-friendly, single column.' },
];
