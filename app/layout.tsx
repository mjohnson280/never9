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
      <body>
        {children}

        <footer className="mx-auto max-w-6xl border-t border-ink/10 px-6 pb-10 pt-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <p className="text-sm font-semibold text-ink">Never9</p>
              <p className="mt-2 text-xs leading-6 text-ink/50">
                Custom software where SaaS falls short.
              </p>
            </div>

            {/* Company */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/40">
                Company
              </p>
              <nav className="mt-3 flex flex-col gap-2">
                <a href="/what-does-never9-mean" className="text-[13px] text-ink/60 transition hover:text-ink">About Never9</a>
                <a href="/how-we-work" className="text-[13px] text-ink/60 transition hover:text-ink">How We Work</a>
                <a href="/contact" className="text-[13px] text-ink/60 transition hover:text-ink">Contact</a>
              </nav>
            </div>

            {/* Work */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/40">
                Work
              </p>
              <nav className="mt-3 flex flex-col gap-2">
                <a href="/current-projects" className="text-[13px] text-ink/60 transition hover:text-ink">Current Projects</a>
              </nav>
            </div>

            {/* Connect */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/40">
                Connect
              </p>
              <nav className="mt-3 flex flex-col gap-2">
                <a href="https://www.linkedin.com/in/matt-johnson-1233695/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-ink/60 transition hover:text-ink">LinkedIn</a>
              </nav>
            </div>
          </div>

          <div className="mt-10 border-t border-ink/8 pt-6">
            <p className="text-[11px] text-ink/35">&copy; {new Date().getFullYear()} Never9. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
