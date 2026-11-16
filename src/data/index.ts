import type { Lang } from '../i18n/ui';
import * as id from './profile';
import * as en from './profile.en';

export type Profile = typeof id;
export function getProfile(lang: Lang): Profile {
  return lang === 'en' ? (en as unknown as Profile) : id;
}
