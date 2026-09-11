@AGENTS.md

# __NAME__ — Claude Code Notes

## What this is
An incubated Never9 product (Never9 owns it, built in lockstep with a stakeholder). Domain: `__DOMAIN__`. Scaffolded __DATE__ from the Never9 `incubate-project` template. The concept build plan lives in `docs/` once Matt provides it; read it before building anything.

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + ESLint 9 (flat config)
- Supabase — auth + Postgres (`@supabase/ssr`, not the legacy auth-helpers package). Every migration that creates a new table includes explicit GRANTs (see the DockItFlo notes for the standard block).
- Claude API for AI features (`ANTHROPIC_API_KEY`), when needed
- Deployed to Vercel: project `__VERCEL_PROJECT__` in the Pro team `mjohnson280-8919s-projects`, connected to GitHub `mjohnson280/__REPO__`. Single branch: `main` deploys straight to production. The site is `noindex` (`app/robots.ts` and layout metadata) so it can be tested in production before launch.
- Next.js 16 differs from older versions. Read `node_modules/next/dist/docs/` before writing framework code (see AGENTS.md, which `next dev` regenerates).

## Before every push
Always run both checks and confirm they exit clean before committing and pushing:
1. `npx tsc --noEmit` — catches TypeScript errors
2. `npx eslint .` — catches ESLint errors (`next lint` was removed in Next.js 16)

`npm run check` runs typegen, tsc, and eslint together. Apostrophes in JSX text content must be written as `&apos;`.

## Git workflow
**One branch, `main`, deploys to production.** No `stage` branch, no preview promotion step. Matt tests in production on the non-indexed site. Every change is committed to `main` and pushed as soon as the checks pass. Handle pushes autonomously; Matt does not want to navigate to GitHub or Vercel.

## Secrets rule (non-negotiable)
No real key ever enters git history. `.gitignore` ignores every `.env*` variant except `.env.example`. `.githooks/pre-commit` (installed by `npm install` via the `prepare` script) blocks staged env files and credential-shaped strings. CI runs gitleaks over full history. Every new `process.env` read gets a line in `.env.example` in the same commit. Privileged keys (Supabase service role) are server-only and never under a `NEXT_PUBLIC_` name. Push env vars to Vercel with `node scripts/vercel-env-sync.mjs --env production` (reads `.env.local`, never the repo).

## Launch checklist (when Matt says go)
- Remove `robots: { index: false ... }` from `app/layout.tsx` and switch `app/robots.ts` to allow
- Confirm `__DOMAIN__` DNS points at Vercel and SSL is issued
- Set real metadata title/description and an OG image

## Session log
### __DATE__ — stood up
- Scaffolded from the Never9 `incubate-project` template (Next.js 16 / Tailwind 4 / ESLint 9).
