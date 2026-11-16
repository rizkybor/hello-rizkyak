import type { APIRoute } from 'astro';
import { llms } from '../../i18n/llms';

export const GET: APIRoute = ({ site }) => llms('en', site);
