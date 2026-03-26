import type { MetadataRoute } from 'next';
import { getSiteUrl, isProductionEnvironment } from './lib/site';

const siteUrl = getSiteUrl();
const isProduction = isProductionEnvironment();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: isProduction ? '/' : undefined,
      disallow: isProduction ? undefined : '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
