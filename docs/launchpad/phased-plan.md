# Joist: phased plan

Status: v0.2, 2026-09-23. Companion to `concept.md` (brief v0.2). Section 9 of the brief is the canonical sequence; this file adds the starting inventory, the done-when line for each phase, and the implementation choices behind the review layer. When the two disagree, fix this file.

## Where it starts

The Never9 launchpad already covers part of the brief:

| Brief item | Exists today |
|---|---|
| PROV-1 (one command: repo, hosting, domain) | `scripts/new-project.mjs`, minus Supabase and identity |
| CI-3 (secret and dependency scanning) | gitleaks in CI plus the pre-commit hook; no dependency audit yet |
| Agent instructions | Filled-in `CLAUDE.md` per project; no `AGENTS.md`, no skills |
| Template | `templates/incubated-project/`: Next.js 16, Tailwind 4, ESLint 9, noindex, env sync |

Everything below extends that. Nothing is built twice.

## Phase 0: name and home

Target: this week.

- Name: Joist, chosen 2026-09-23. Joist vs Joist Kit is decided before anything client-facing uses it.
- Create a private `Joist` repo and move `scripts/`, `templates/`, and the incubate skill into it. The Never9 repo stays the website.
- File `concept.md` and this plan in the Joist repo. Leave a pointer here.
- Confirm AI provider terms in writing for development-time use on client data (brief section 6). This gates Phase 4, so start it now.

Done when: the Joist repo runs the existing stand-up command end to end from its new home.

## Phase 1: template and guardrails

Target: weeks 1 to 3.

- Template additions: shadcn/ui, Supabase migrations folder, Resend, synthetic seed data with access-control edge cases (AGT-5). The seed script is the only way data enters a preview database.
- Reference app that exercises each pattern once: one table with row-level security, one list and detail view, one email, one background job, one external integration (AGT-4).
- `AGENTS.md` plus `CLAUDE.md`, one pointing at the other (AGT-1, AGT-2).
- Four skills: add table, add integration, add email, add background job (AGT-3).
- CI additions: dependency audit (CI-3), policy coverage check against the preview database after migrations (CI-1), auth convention check with one authenticated layout group and a lint rule on server actions (CI-2), preview data check (CI-6: preview env vars must not reference the production Supabase project, and the preview database is reset from seed on every deploy).

Done when: a fresh project from the template passes CI, and deliberately breaking each rule fails CI.

## Phase 2: review and release

Target: weeks 3 to 5. Ahead of provisioning on purpose; this is the retainer's deliverable.

- Two approval roles, enforced by two different GitHub mechanisms so they can relax independently (REL-1, REL-3):
  - **Technical review** is `CODEOWNERS` plus branch protection "require review from code owners." Never9 owns `supabase/migrations/`, the auth helper and layout group, `lib/integrations/`, and the CI workflows. A change that touches none of those paths needs no Never9 review. Relaxing review for a client is editing that path list, which is itself a code-owned change.
  - **Business approval** is the production environment's required reviewer: the client's app owner.
- Generated plain-language change summary on every pull request (REL-2): what changed, data touched, what could break, what to click on the preview URL. It also states which review the change requires and why, from the paths touched.
- Rollback (REL-4): one step for application code via Vercel. Migrations are forward-fix only, written expand-then-contract so the previous app version still runs against the new schema. Pre-migration backup in the release workflow; document the restore path.
- Migrations applied only through the release flow (REL-5).
- Emergency path: code rollback needs no review. A hotfix still needs technical review; the retainer sets the response time.

Done when: the client's app owner can approve or reject a change from the summary and preview alone, a change touching a code-owned path cannot merge without Never9, and nothing reaches production any other way.

## Phase 3: provisioning

Target: weeks 5 to 7.

- Script the Supabase steps the incubate skill currently describes in prose (PROV-1).
- Separate preview and production databases (PROV-2).
- Join a client-owned Vercel team and Supabase org rather than creating them under Never9 (PROV-3, P0). The client holds the accounts; Never9 is a member.
- Entra ID setup guide with a validation page that proves sign-in works (PROV-4).
- Idempotent and resumable (PROV-5) and add-an-app (PROV-6) wait for a second client.

Done when: a new client environment stands up in one command against accounts Never9 does not own.

## Phase 4: first client on Joist

Target: months 2 to 4.

- Candidate: the stealth legal platform, or a small workflow for the DockItFlo firm. Not Spider Ag; their production environment and merge-based handoff do not fit the model. Harvest patterns from it instead.
- Build the real workflow app on the template. Let the friction rewrite the requirements in `concept.md`.
- Handoff assets as they become necessary: generated app overview (CONT-1), runbook, recorded owner, training recipes (AGT-6), ownership transfer (CONT-2).
- Start metering technical review time; it is the input to retainer pricing.

Done when: the client's designated person has shipped one change through both approvals without Never9 touching the code.

## Phase 5: legal kit and portfolio

Target: months 4 to 6.

- Extract the legal kit from live work: clients, matters, matter teams, ethical walls, audit log, Microsoft Graph. Add wall-crossing attempts to the access-control tests (CI-5).
- Automated dependency update pull requests that run the guardrails (CONT-3).
- Portfolio view (PORT-1) only after a second client is live.

Done when: a second legal client stands up on Joist with no template changes.

## Standing decisions

- Guardrails and the review layer before provisioning polish, and before a second client.
- Client holds infrastructure accounts.
- AI provider under commercial terms with zero data retention, for runtime and for development-time agent use. Confirm in writing before real client data is involved.
- Preview environments never hold real client data.
- Stack list is closed. A new library is a human decision.
- Joist is owned by Never9 and licensed into any studio or services company it launches with.
- Market-timing predictions stay out of client and investor material. The adoption ramp is an internal revenue-sequencing assumption only.

## Open questions

Carried from `concept.md` section 10. Joist vs Joist Kit and studio structure are Phase 0 decisions. Pricing, review metering, and the second vertical wait for Phase 4 evidence. The "which change types skip technical review" question is answered structurally above: by path, not by judgment, starting with everything code-owned and relaxing per client.
