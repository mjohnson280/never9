const DEFAULT_PRODUCTION_URL = 'https://never9.ai';
const DEFAULT_STAGE_URL = 'https://stage.never9.ai';

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.VERCEL_GIT_COMMIT_REF === 'stage') {
    return DEFAULT_STAGE_URL;
  }

  return DEFAULT_PRODUCTION_URL;
}

export function isProductionEnvironment(): boolean {
  if (process.env.VERCEL_ENV) {
    return process.env.VERCEL_ENV === 'production';
  }

  return process.env.NODE_ENV === 'production';
}
