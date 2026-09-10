import type { MetadataRoute } from 'next';
import { getSiteUrl } from './lib/site';

const siteUrl = getSiteUrl();

const pages: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/rapid-contract-development', priority: 0.9 },
  { path: '/how-we-work', priority: 0.8 },
  { path: '/what-does-never9-mean', priority: 0.6 },
  { path: '/current-projects', priority: 0.5 },
  { path: '/contact', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map(({ path, priority }) => ({
    url: path === '/' ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority,
  }));
}
