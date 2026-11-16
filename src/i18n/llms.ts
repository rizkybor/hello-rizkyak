import { getProfile } from '../data';
import { langMeta, type Lang } from './ui';

// llms.txt: ringkasan faktual untuk model bahasa / answer engine (GEO), per bahasa.
export function llms(lang: Lang, site: URL | undefined): Response {
  const { person, projects, experience, skills, certificates, education, documents } = getProfile(lang);
  const abs = (p: string) => new URL(p, site).href;
  const en = lang === 'en';
  const h = en
    ? { facts: 'Quick facts', name: 'Name', role: 'Current role', exp: 'Experience', years: 'years since February 2022', loc: 'Location', docs: 'Documents', projects: 'Projects', roleWord: 'role', tech: 'Technologies', work: 'Work experience', skills: 'Skills', edu: 'Education', certs: 'Certificates', and: 'and', specialist: 'specialist in', at: 'in', other: 'Indonesian version' }
    : { facts: 'Fakta singkat', name: 'Nama', role: 'Peran saat ini', exp: 'Pengalaman', years: 'tahun sejak Februari 2022', loc: 'Lokasi', docs: 'Dokumen', projects: 'Proyek', roleWord: 'peran', tech: 'Teknologi', work: 'Pengalaman kerja', skills: 'Keahlian', edu: 'Pendidikan', certs: 'Sertifikat', and: 'dan', specialist: 'spesialis', at: 'di', other: 'English version' };
  const otherLang: Lang = en ? 'id' : 'en';
  const lines = [
    `# ${person.name}`,
    '',
    `> ${person.role} ${h.and} ${h.specialist} ${person.specialty} ${h.at} ${person.location}. ${person.summary}`,
    '',
    `## ${h.facts}`,
    `- ${h.name}: ${person.name} (${person.shortName})`,
    `- ${h.role}: ${experience[0].role}, ${experience[0].org} (${experience[0].period})`,
    `- ${h.exp}: ${person.yearsExperience} ${h.years}`,
    `- ${h.loc}: ${person.location}`,
    `- Email: ${person.email}`,
    `- LinkedIn: ${person.linkedin}`,
    `- GitHub: ${person.github}`,
    `- ${h.other}: ${abs(langMeta[otherLang].path)}`,
    '',
    `## ${h.docs}`,
    ...documents.filter((d) => !d.hidden).map((d) => `- [${d.title}](${abs(d.href)}): ${d.detail}`),
    '',
    `## ${h.projects}`,
    ...projects.map((p) => `- ${p.name} (${p.year}; ${p.context}; ${h.roleWord}: ${p.role}): ${p.tagline} ${h.tech}: ${p.stack.join(', ')}.${p.url ? ` URL: ${p.url}` : ''}`),
    '',
    `## ${h.work}`,
    ...experience.map((e) => `- ${e.period}: ${e.role}, ${e.org}, ${e.place}. ${e.note}`),
    '',
    `## ${h.skills}`,
    ...skills.map((s) => `- ${s.group}: ${s.items.join(', ')}`),
    '',
    `## ${h.edu}`,
    ...education.map((e) => `- ${e.name}: ${e.detail} (${e.period})`),
    '',
    `## ${h.certs}`,
    ...certificates.map((c) => `- ${c.name}, ${c.issuer} (${c.date})`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
