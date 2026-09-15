'use client';

import { usePathname } from 'next/navigation';

// The one site header. Rendered from app/layout.tsx so every page shares it.
const navItems = [
  { label: 'Consulting', href: '/rapid-contract-development' },
  { label: 'Current Projects', href: '/current-projects' },
  { label: 'About Never9', href: '/what-does-never9-mean' },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-4 px-6 pt-10 md:pt-16">
      <a
        href="/"
        aria-label="Never9 home"
        className="inline-flex rounded-full border border-ink/10 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/70 transition hover:border-ink/30 hover:text-ink"
      >
        Never9
      </a>
      <nav className="flex flex-wrap items-center gap-x-5 gap-y-3">
        {navItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={`text-xs font-semibold uppercase tracking-[0.2em] transition hover:text-ink ${
                active ? 'text-ink' : 'text-ink/60'
              }`}
            >
              {item.label}
            </a>
          );
        })}
        <a
          href="/contact"
          className="rounded-full border border-ink/20 bg-white/85 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-ink/40"
        >
          Start a Conversation
        </a>
      </nav>
    </header>
  );
}
