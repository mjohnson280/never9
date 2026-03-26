import type { Metadata } from 'next';
import { getSiteUrl } from './lib/site';
import './globals.css';

const siteUrl = getSiteUrl();
const previewDescription = 'Reimagine your workflow with AI.';

export const metadata: Metadata = {
  title: 'Never9',
  description: previewDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Never9',
    description: previewDescription,
    url: siteUrl,
    siteName: 'Never9',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Never9',
    description: previewDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
