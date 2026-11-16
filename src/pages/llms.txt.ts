import type { APIRoute } from 'astro';
import { person, projects, experience, skills, certificates, education, documents } from '../data/profile';

// llms.txt: ringkasan faktual untuk model bahasa / answer engine (GEO).
export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const lines = [
    `# ${person.name}`,
    '',
    `> ${person.role} dan spesialis ${person.specialty} di ${person.location}. ${person.summary}`,
    '',
    '## Fakta singkat',
    `- Nama: ${person.name} (${person.shortName})`,
    `- Peran saat ini: ${experience[0].role}, ${experience[0].org} (${experience[0].period})`,
    `- Pengalaman: ${person.yearsExperience} tahun sejak Februari 2022`,
    `- Lokasi: ${person.location}`,
    `- Email: ${person.email}`,
    `- LinkedIn: ${person.linkedin}`,
    `- GitHub: ${person.github}`,
    '',
    '## Dokumen',
    ...documents.map((d) => `- [${d.title}](${abs(d.href)}): ${d.detail}`),
    '',
    '## Proyek',
    ...projects.map((p) => `- ${p.name} (${p.year}; ${p.context}; peran: ${p.role}): ${p.tagline} Teknologi: ${p.stack.join(', ')}.${p.url ? ` URL: ${p.url}` : ''}`),
    '',
    '## Pengalaman kerja',
    ...experience.map((e) => `- ${e.period}: ${e.role}, ${e.org}, ${e.place}. ${e.note}`),
    '',
    '## Keahlian',
    ...skills.map((s) => `- ${s.group}: ${s.items.join(', ')}`),
    '',
    '## Pendidikan',
    ...education.map((e) => `- ${e.name}: ${e.detail} (${e.period})`),
    '',
    '## Sertifikat',
    ...certificates.map((c) => `- ${c.name}, ${c.issuer} (${c.date})`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
