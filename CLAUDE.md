# Never9 — Claude Code Notes

## Before every push
Always run both checks and confirm they exit clean before committing and pushing:
1. `npx tsc --noEmit` — catches TypeScript errors
2. `npx next lint` — catches ESLint errors (e.g. unescaped apostrophes in JSX text)

`tsc` does not catch ESLint errors, so both are required. Apostrophes in JSX text content must be written as `&apos;` — contractions like "don't", "we've", "it's" will fail the build if written as literal characters inside JSX tags.

## Git workflow
**One branch, `main`, deploys straight to production.** Matt tests in production (see global notes). Do not create or commit to a `stage` branch. Handle all commits and pushes autonomously — Matt does not want to navigate to GitHub or Vercel. Every change goes to `main` and is pushed as soon as the two pre-push checks pass.

**Run git as plain, separate commands** (`git add`, `git commit`, `git push`, `git status`, `git log`, `git diff` are each allow-listed in `.claude/settings.local.json`). Do not chain them with `&&`, heredoc commit messages, `wc`, or `tail`: a compound command only skips review if every part matches a rule, and on 2026-09-23 the auto-mode classifier blocked a chained commit-and-push for the rest of the session. The classifier also refuses to let Claude edit its own permissions; Matt switches to accept-edits mode when settings need changing.

## Positioning and voice (set 2026-09-10, refined 2026-09-11 and 2026-09-14)
Never9 is a **rapid development studio and incubator** (Minneapolis) that solves workflow problems with custom digital solutions. Core line, used as the homepage H1, the How We Work H1, and the footer tagline: **"Get to market, or operate more efficiently within it."** (Matt simplified it from "Diagnose the real problem. Build the fix. Get to market, or perform better in it." on 2026-09-14; "operate more efficiently" replaces "perform better" everywhere.) The hero paragraph is Matt's own draft, tightened: studio and incubator; embedded engineer finds the workflow problem and builds the fix fast; build it for you and tie it to a full GTM plan, or incubate a shared problem under the Never9 umbrella; either way, get to market or operate more efficiently within it.

**The argument chain (2026-09-14), in the order the homepage makes it:**
1. **The build is not the expensive part anymore. Spinning your wheels is.** (Matt reframed this from "code is cheap" on 2026-09-14; do not lead with "code is cheap" as a bare claim.) The real cost is months bending an off-the-shelf tool to fit, only to find it harder to implement than building custom. A custom fix in weeks costs less than the workarounds. The value is in the problem solved, not the code. Paired with the **operator-reps** claim: Matt gets clients over the line quickly because he has taken companies from napkin to exit more than once and knows what a first version has to leave out ("Why an experienced operator gets you over the line faster" heads the homepage why-now section). OK to say "napkin to exit more than once"; do not attach a company count or dollar figure beyond what the origin page already states.
2. **Redesign the work around what is now possible** (the Levie argument: layering AI or a tool onto an existing workflow captures a fraction of the value; the far larger return comes from redesigning the workflow). Kept as a line inside the problem section, no longer the section title.
3. **We work together to solve it.** Embedded engineer; you know the work, we know what software can now do.
4. **Your workflow problem is probably shared.** A persistent gap in one company is a gap in what the market sells. This is why Never9 is an incubator as well as a studio. Dedicated homepage section (`shared`) between the how-we-work steps and the tracks; DockItFlo is the proof (fix for one firm became a company).
5. **Keep it, or launch it.** The tracks section title. Keep the fix as a competitive advantage, or partner to launch it as a product; the three ownership tracks below sort out who owns what.

**Hero H1 sizing (settled 2026-09-14):** `max-w-4xl text-balance text-5xl md:text-6xl`. Matt's screens (laptop + external monitor) orphaned "it." at 7xl in a 3xl column; 5xl left too much blank space above the fold. 6xl in a 4xl column with `text-balance` is the approved middle. If the orphan returns, widen the column before shrinking the type. The How We Work H1 also uses `text-balance`.

Matt's raw notes for this pass, so the intent survives rewording: "Your workflow problem is probably shared. We work together to solve it. You keep it as a competitive advantage or we partner to launch it as a new incubated application. Code is cheap, maximize your value by solving issues with custom tech solutions." Keep the noun as **problem**, not **idea** (the site's thesis is that products start as workflow problems; founders with an idea are covered by the "founding team with a launch date" fit on the consulting page).

The connective tissue is **embedded engineering** (the forward-deployed engineer idea, from an Aaron Levie post Matt shared: the real gains come from re-engineering the workflow itself, not layering tools on top, and the open question is who drives that; the answer is an engineer embedded in the function). Matt sits inside the organization alongside the people doing the work, diagnoses the workflow, and builds the custom fix. The problem does not have to be expensive, only persistent. Do not lean on "AI agents" as the framing; it is custom development for workflow efficiency whether or not an agent is involved.

**One method, three ownership outcomes** ("same team, same method; the difference is who owns what ships"):
- **You own it: Embedded engagement** (`/rapid-contract-development`). Contract work; client keeps code, infra, accounts. Named shapes: Diagnosis (1 to 2 weeks), Build Sprint (fixed scope, weeks), Embedded Team (ongoing, part time, includes fractional product/GTM/finance).
- **We own it, built with you: Incubated product** (`/how-we-work#studio`). A stakeholder names a shared industry problem; Never9 builds in lockstep with them (first user, shapes it from real use); Never9 releases it as a company under its umbrella. Example: **DockItFlo** (dockitflo.com; repo `C:\Users\mjohn\Desktop\Projects\dockflow`), developed in concert with a large litigation firm to fix PACER notice calendaring for litigation attorneys. Public on the site as of 2026-09-11: named on Current Projects (with wordmark at `public/dockitflo-wordmark.png`), in the How We Work incubation section, and in the homepage incubated-product card. Current Projects copy shortened 2026-09-15 to Matt's wording (automated AI-driven date extraction and calendaring, human-in-the-loop confirmation, release to the industry coming as partners). Do not name the law firm.
- **We share it: Spinout** (`/how-we-work#studio`). Co-built with an operator; keep as proprietary edge or spin out with shared ownership and an early ($1 to 3M) exit.

Reference point Matt named: Blank Metal (blankmetal.ai, Minneapolis, "anti-consultancy", small senior teams, 90-day production guarantee, outcomes-aligned pricing). Adapted the shape, not the copy. Voice: plain, declarative, anti-deliberation, no consultant jargon. Avoid claiming a specific day-count guarantee or any pricing/free-build terms unless Matt sets them. **Do not use the "engineer owns whether it works in production" framing**; Matt cut it on 2026-09-10 because it did not read clearly.

## Pages
- **Site header** is one shared component, `app/components/SiteHeader.tsx`, rendered from `app/layout.tsx` above every page (added 2026-09-15). Left: the Never9 pill, links home. Right: Consulting (`/rapid-contract-development`), Current Projects, About Never9 (`/what-does-never9-mean`), and the Start a Conversation button (`/contact`); the current page is highlighted via `usePathname`. Pages carry no top padding or back links of their own; the header owns the top spacing. Add nav items there, not on individual pages.
- `/` — homepage (`app/page.tsx`); all copy lives in the `pageCopy` object at the top of the file
- `/rapid-contract-development` — consulting arm / rapid contract development page (added 2026-09-10; SEO target: "rapid contract development"). Linked from the homepage header nav ("Consulting"), a homepage section between "why now" and solution types, and the footer Work column.
- `/how-we-work`, `/what-does-never9-mean`, `/current-projects`, `/contact`
- Homepage cost section ("The build is not the expensive part anymore") renders its three paragraphs stacked, each with an inline SVG icon (`problemIcons` in `app/page.tsx`, ember tint) to break up the text; added 2026-09-15 at Matt's request. Icons are hand-drawn inline SVG, no icon library.
- `app/sitemap.ts` lists every page; add new routes there.

## Docs
`docs/` has one subfolder per thing this repo owns (`site/` for the website, `launchpad/` for the incubation toolkit); conventions are in `docs/README.md`. No project prefixes on file names inside a subfolder, type-first kebab-case names, dated records start with the date. Incubated products keep their docs in their own repos.

## Incubated projects (status board)
Each project's own `CLAUDE.md` session log is the source of truth. Each incubated project also keeps a `docs/ARCHITECTURE.md`: a self-contained, secret-free brief Matt pastes into a claude.ai Project so Claude chat knows what infrastructure and architecture already exist. Update it in the same commit as any architecture change. This board holds one line per project so a Never9 session knows the state of the portfolio without opening the other repos. When something material changes in a project (launch, pivot, blocked, new stakeholder), update its line here in the same session.

- **DockItFlo** (`C:\Users\mjohn\Desktop\Projects\dockflow`) — PACER notice calendaring for litigation firms, built with a large litigation firm. Public at dockitflo.com; named on the site. Status: live, active development.
- **Fit Vaulted** (`C:\Users\mjohn\Desktop\Projects\Fit Vaulted`) — incubated product, stood up 2026-09-11. Personal running-analytics system on Matt's Garmin data, with a coach access layer; build plan v0.1 filed 2026-09-11 (Phase 0 through Sep 30, coach stub by January, season-ready April 2027). Architecture decided: Python engine in `engine/` writes to Supabase, Next.js app is the dashboard (plan v0.2 section 6.3; `docs/ARCHITECTURE.md` is the shareable brief). Repo, Vercel, Supabase, and env vars done; DNS pending at GoDaddy; Phase 0 (engine) is next. Public on Current Projects since 2026-09-15 with Matt's own description (normalized fitness measure adjusting each run for route, terrain, weather, pace, distance; built with a running coach) and a link to fitvaulted.com. No logo yet; the card shows a name badge. Handoff: `docs/HANDOFF.md` in that repo.
- **Spider Ag** (`C:\Users\mjohn\Desktop\Projects\spiderag`) — consulting engagement, not an incubated product. Listed on Current Projects since 2026-09-15 as an unnamed "Stealth consulting build" (Embedded engagement; summary says "a founding team in the ag space", per Matt 2026-09-15; the product and company stay the founders' property). Do not name the client.
- **Joist** (named 2026-09-23, may become Joist Kit; `docs/launchpad/`) — Matt's brief (`concept.md`, v0.2 filed 2026-09-23 with a two-role review layer; written under the working title Cursor Lite) for productizing the launchpad: per-client template repo, agent instructions, provisioning, CI guardrails, approval-gated handoff, for a law/finance FDE services model. Not a company yet and not on the site. Deck brief for Claude chat (non-technical deck, secret-free, with a do-not-say list) is `docs/launchpad/deck-brief.md` (2026-09-24). Plan: `docs/launchpad/phased-plan.md` (v0.3, 2026-09-24: engagement prerequisites, two-account default via Vercel Marketplace Supabase, Claude Code on the web as default handoff surface, checklist-driven handoff). Phase 0 (move the toolkit to its own Joist repo, plus a test repo proving the review mechanics) is next. Never call it Cursor Lite in client material.
- **Second legal platform** — in stealth, listed unnamed on Current Projects since 2026-09-15 ("Stealth legal platform", Incubated product). No repo in this workspace yet; ask Matt before adding detail.

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
- **Consulting / rapid contract development statement** — shipped 2026-09-10 as a dedicated page plus homepage section (see Pages). Copy aligned to the studio-and-incubator positioning and approved by Matt 2026-09-14. The client (Spider Ag, `C:\Users\mjohn\Desktop\Projects\spiderag`) is deliberately not named on the site; add a case study only with the client's OK.

## TODOs — Remind Matt
- **Rotate Resend API key** — current key was exposed in chat (2026-04-09). Delete it in Resend, create a new one, update `.env.local` and Vercel env vars (production + preview)
- **Verify `never9.ai` domain in Resend** — requires upgrading from free plan (only 1 domain allowed). Once verified, update sender in `app/api/contact/route.ts` from `onboarding@resend.dev` to `contact@never9.ai`
- **Delete old SMTP\_\* env vars** from Vercel dashboard (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM) — no longer used
