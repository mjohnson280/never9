# Never9 — Claude Code Notes

## Before every push
Always run both checks and confirm they exit clean before committing and pushing:
1. `npx tsc --noEmit` — catches TypeScript errors
2. `npx next lint` — catches ESLint errors (e.g. unescaped apostrophes in JSX text)

`tsc` does not catch ESLint errors, so both are required. Apostrophes in JSX text content must be written as `&apos;` — contractions like "don't", "we've", "it's" will fail the build if written as literal characters inside JSX tags.

## Git workflow
**One branch, `main`, deploys straight to production.** Matt tests in production (see global notes). Do not create or commit to a `stage` branch. Handle all commits and pushes autonomously — Matt does not want to navigate to GitHub or Vercel. Every change goes to `main` and is pushed as soon as the two pre-push checks pass.

## Positioning and voice (set 2026-09-10, refined 2026-09-11)
Never9 is a **rapid development studio** (Minneapolis) that solves workflow problems with custom digital solutions. Core line, used as the homepage H1 and footer tagline: **"Diagnose the real problem. Build the fix. Get to market, or perform better in it."**

Key argument (from the Levie post): layering AI or a tool onto an existing workflow captures a fraction of the value; the far larger return comes from redesigning the workflow around what is now possible. That is the case for building custom and collaboratively instead of buying off the shelf and adapting inside it, and the cost, speed, and risk of doing so have collapsed.

The connective tissue is **embedded engineering** (the forward-deployed engineer idea, from an Aaron Levie post Matt shared: the real gains come from re-engineering the workflow itself, not layering tools on top, and the open question is who drives that; the answer is an engineer embedded in the function). Matt sits inside the organization alongside the people doing the work, diagnoses the workflow, and builds the custom fix. The problem does not have to be expensive, only persistent. Do not lean on "AI agents" as the framing; it is custom development for workflow efficiency whether or not an agent is involved.

**One method, three ownership outcomes** ("same team, same method; the difference is who owns what ships"):
- **You own it: Embedded engagement** (`/rapid-contract-development`). Contract work; client keeps code, infra, accounts. Named shapes: Diagnosis (1 to 2 weeks), Build Sprint (fixed scope, weeks), Embedded Team (ongoing, part time, includes fractional product/GTM/finance).
- **We own it, built with you: Incubated product** (`/how-we-work#studio`). A stakeholder names a shared industry problem; Never9 builds in lockstep with them (first user, shapes it from real use); Never9 releases it as a company under its umbrella. Example: **DockItFlo** (dockitflo.com; repo `C:\Users\mjohn\Desktop\Projects\dockflow`), developed in concert with a large litigation firm to fix PACER notice calendaring for litigation attorneys. Public on the site as of 2026-09-11: named on Current Projects (with wordmark at `public/dockitflo-wordmark.png`), in the How We Work incubation section, and in the homepage incubated-product card. Do not name the law firm.
- **We share it: Spinout** (`/how-we-work#studio`). Co-built with an operator; keep as proprietary edge or spin out with shared ownership and an early ($1 to 3M) exit.

Reference point Matt named: Blank Metal (blankmetal.ai, Minneapolis, "anti-consultancy", small senior teams, 90-day production guarantee, outcomes-aligned pricing). Adapted the shape, not the copy. Voice: plain, declarative, anti-deliberation, no consultant jargon. Avoid claiming a specific day-count guarantee or any pricing/free-build terms unless Matt sets them. **Do not use the "engineer owns whether it works in production" framing**; Matt cut it on 2026-09-10 because it did not read clearly.

## Pages
- `/` — homepage (`app/page.tsx`); all copy lives in the `pageCopy` object at the top of the file
- `/rapid-contract-development` — consulting arm / rapid contract development page (added 2026-09-10; SEO target: "rapid contract development"). Linked from the homepage header nav ("Consulting"), a homepage section between "why now" and solution types, and the footer Work column.
- `/how-we-work`, `/what-does-never9-mean`, `/current-projects`, `/contact`
- `app/sitemap.ts` lists every page; add new routes there.

## Incubated projects (status board)
Each project's own `CLAUDE.md` session log is the source of truth. Each incubated project also keeps a `docs/ARCHITECTURE.md`: a self-contained, secret-free brief Matt pastes into a claude.ai Project so Claude chat knows what infrastructure and architecture already exist. Update it in the same commit as any architecture change. This board holds one line per project so a Never9 session knows the state of the portfolio without opening the other repos. When something material changes in a project (launch, pivot, blocked, new stakeholder), update its line here in the same session.

- **DockItFlo** (`C:\Users\mjohn\Desktop\Projects\dockflow`) — PACER notice calendaring for litigation firms, built with a large litigation firm. Public at dockitflo.com; named on the site. Status: live, active development.
- **Fit Vaulted** (`C:\Users\mjohn\Desktop\Projects\Fit Vaulted`) — incubated product, stood up 2026-09-11. Personal running-analytics system on Matt's Garmin data, with a coach access layer; build plan v0.1 filed 2026-09-11 (Phase 0 through Sep 30, coach stub by January, season-ready April 2027). Architecture decided: Python engine in `engine/` writes to Supabase, Next.js app is the dashboard (plan v0.2 section 6.3; `docs/ARCHITECTURE.md` is the shareable brief). Repo, Vercel, Supabase, and env vars done; DNS pending at GoDaddy; Phase 0 (engine) is next. Not on the site yet (add to Current Projects when Matt says it is public). Handoff: `docs/HANDOFF.md` in that repo.
- **Spider Ag** (`C:\Users\mjohn\Desktop\Projects\spiderag`) — consulting engagement, not an incubated product. Not named on the site.

## Standing up new projects
Never9 is the launchpad for every incubated project. `/incubate-project` (`.claude/skills/incubate-project/SKILL.md`) runs `scripts/new-project.mjs`, which scaffolds Next.js 16 with the hygiene files in `templates/incubated-project/`, creates the private GitHub repo, the Vercel project in the Pro team, the first production deploy, and attaches the domain. Supabase and DNS are the two follow-up steps in the skill. First used for Fit Vaulted on 2026-09-11. `templates/` is excluded from this site's tsconfig because it targets Next.js 16.

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
