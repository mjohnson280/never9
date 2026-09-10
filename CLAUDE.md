# Never9 — Claude Code Notes

## Before every push
Always run both checks and confirm they exit clean before committing and pushing:
1. `npx tsc --noEmit` — catches TypeScript errors
2. `npx next lint` — catches ESLint errors (e.g. unescaped apostrophes in JSX text)

`tsc` does not catch ESLint errors, so both are required. Apostrophes in JSX text content must be written as `&apos;` — contractions like "don't", "we've", "it's" will fail the build if written as literal characters inside JSX tags.

## Git workflow
**One branch, `main`, deploys straight to production.** Matt tests in production (see global notes). Do not create or commit to a `stage` branch. Handle all commits and pushes autonomously — Matt does not want to navigate to GitHub or Vercel. Every change goes to `main` and is pushed as soon as the two pre-push checks pass.

## Positioning and voice (set 2026-09-10)
Never9 is a **rapid development studio** (Minneapolis). Core line, used as the homepage H1 and footer tagline: **"Diagnose the real problem. Build the fix. Own it in production."** We sit with founders and executives as part of the team, diagnose what is actually costing them, build the digital product that fixes it, and the engineer who builds it is accountable for whether it works in production.

Two tracks, one method ("same team, same method; the difference is who owns the result"):
- **Engagements** (consulting arm, `/rapid-contract-development`): embedded with the client's team on contract. Named shapes: Diagnosis (1 to 2 weeks), Build Sprint (fixed scope, weeks), Embedded Team (ongoing, part time, includes fractional product/GTM/finance).
- **Studio** (`/how-we-work#studio`): custom builds and incubated spinouts co-built with operators; keep as proprietary edge or spin out with shared ownership and an early ($1 to 3M) exit.

Reference point Matt named: Blank Metal (blankmetal.ai, Minneapolis, "anti-consultancy", small senior teams, 90-day production guarantee, outcomes-aligned pricing). Adapted the shape, not the copy. Voice: plain, declarative, anti-deliberation, no consultant jargon. Avoid claiming a specific day-count guarantee unless Matt sets one.

## Pages
- `/` — homepage (`app/page.tsx`); all copy lives in the `pageCopy` object at the top of the file
- `/rapid-contract-development` — consulting arm / rapid contract development page (added 2026-09-10; SEO target: "rapid contract development"). Linked from the homepage header nav ("Consulting"), a homepage section between "why now" and solution types, and the footer Work column.
- `/how-we-work`, `/what-does-never9-mean`, `/current-projects`, `/contact`
- `app/sitemap.ts` lists every page; add new routes there.

## Contact form
- **Page:** `app/contact/page.tsx` — client-side form with fields: name, industry, pain point (1500 char max), email, phone
- **API route:** `app/api/contact/route.ts` — validates all fields, sends email via Resend
- **Delivery:** Resend API to mjohnson280@gmail.com, subject line "Never9 submission"
- **Sender:** Currently `onboarding@resend.dev` (Resend sandbox) — temporary, see TODOs below
- **Env vars:** `RESEND_API_KEY` in `.env.local` locally and in Vercel env vars for production (and preview, left over from the retired stage branch)
- **Dependencies:** `resend`

## Roadmap
- **Consulting / rapid contract development statement** — shipped 2026-09-10 as a dedicated page plus homepage section (see Pages). Copy is a first draft for Matt to review. The client (Spider Ag, `C:\Users\mjohn\Desktop\Projects\spiderag`) is deliberately not named on the site; add a case study only with the client's OK.

## TODOs — Remind Matt
- **Rotate Resend API key** — current key was exposed in chat (2026-04-09). Delete it in Resend, create a new one, update `.env.local` and Vercel env vars (production + preview)
- **Verify `never9.ai` domain in Resend** — requires upgrading from free plan (only 1 domain allowed). Once verified, update sender in `app/api/contact/route.ts` from `onboarding@resend.dev` to `contact@never9.ai`
- **Delete old SMTP\_\* env vars** from Vercel dashboard (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM) — no longer used
