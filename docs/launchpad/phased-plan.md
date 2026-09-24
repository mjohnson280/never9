# Joist: phased plan

Status: v0.3, 2026-09-24. Companion to `concept.md` (brief v0.2). Section 9 of the brief is the canonical sequence; this file adds the starting inventory, the done-when line for each phase, the implementation choices behind the review layer, and the engagement prerequisites. When the two disagree, fix this file.

v0.3 folds in the 2026-09-24 pressure test: the two-account default, the plan-tier gate, the handoff surface, the handoff-readiness checklist, and conventions for CI-1 and CI-2.

## Where it starts

The Never9 launchpad already covers part of the brief:

| Brief item | Exists today |
|---|---|
| PROV-1 (one command: repo, hosting, domain) | `scripts/new-project.mjs`, minus Supabase and identity |
| CI-3 (secret and dependency scanning) | gitleaks in CI plus the pre-commit hook; no dependency audit yet |
| Agent instructions | Filled-in `CLAUDE.md` per project; no `AGENTS.md`, no skills |
| Template | `templates/incubated-project/`: Next.js 16, Tailwind 4, ESLint 9, noindex, env sync |

Everything below extends that. Nothing is built twice.

## Engagement prerequisites

These are gates, not details. They go in the proposal and the onboarding call, and nothing in Phase 2 or later works without them.

**Accounts the client creates, in the client's name, before Never9 builds anything.** Account creation cannot be scripted: each needs a billing contact, a plan choice, and admin rights. It is a 30 to 45 minute onboarding call with the person who holds the firm's card and its IT admin rights. Everything after the call is one command.

| Account | Plan required | Why that tier | Approximate cost |
|---|---|---|---|
| GitHub organization | Team | Environment protection and code-owner review are unavailable on private repos under Free | per seat, monthly |
| Vercel team | Pro | Preview environments, team seats, Marketplace integrations | per seat, monthly |
| Supabase | Pro (via Vercel Marketplace by default) | Daily backups, needed for REL-4; point-in-time recovery is an add-on | flat monthly plus compute |
| AI provider | API or enterprise terms with zero data retention | Development-time and CI-time context includes client code and data | usage |

Check current prices when writing a proposal; the total for a small firm is in the low hundreds per month before AI usage. State the number in the proposal so it never surprises anyone.

**Two accounts, not three, by default.** Supabase is provisioned through the Vercel Marketplace inside the client's Vercel team, so the client owns it, it lands on the Vercel invoice, and env vars are injected automatically. A direct Supabase organization is the option for firms whose IT requires a separate vendor relationship.

**Never9 builds as a member from day one.** The client owns the GitHub organization, the Vercel team, and the Supabase project before the first commit. Never9 engineers join with the minimum role that lets them ship. Handoff is then removing or downgrading seats, not transferring anything, and "you can leave with it" is true from the first week.

**A named person.** The client designates the person who will own the app after handoff: someone who lives in the workflow (a paralegal, practice-group manager, or finance ops lead), not IT. IT knows the machine; the designated person knows the work. The role and the name go in the engagement letter.

**AI terms in writing.** Confirmed before real client data enters any environment, including the developer's agent context and the CI job that generates change summaries (REL-2 sends the diff to a model).

## Phase 0: name and home

Target: this week.

- Name: Joist, chosen 2026-09-23. Joist vs Joist Kit is decided before anything client-facing uses it. Current lean: plain Joist for the system, "the Joist kit for legal" for a vertical layer.
- Create a private `Joist` repo and move `scripts/`, `templates/`, and the incubate skill into it. The Never9 repo stays the website.
- File `concept.md` and this plan in the Joist repo. Leave a pointer here.
- Create a throwaway test repo under Never9's GitHub with the production environment, required reviewers, and CODEOWNERS configured, to prove the review mechanics before any client account is involved.
- Confirm AI provider terms in writing for development-time use on client data (brief section 6). This gates Phase 4, so start it now.

Done when: the Joist repo runs the existing stand-up command end to end from its new home, and the test repo blocks a merge to a code-owned path without Never9 review.

## Phase 1: template and guardrails

Target: weeks 1 to 3.

- Template additions: shadcn/ui, Supabase migrations folder, Resend, synthetic seed data with access-control edge cases (AGT-5). The seed script is the only way data enters a preview database.
- Reference app that exercises each pattern once: one table with row-level security, one list and detail view, one email, one background job, one external integration (AGT-4).
- `AGENTS.md` plus `CLAUDE.md`, one pointing at the other (AGT-1, AGT-2).
- Four skills: add table, add integration, add email, add background job (AGT-3).
- CI additions:
  - Dependency audit (CI-3).
  - Policy coverage (CI-1). Convention: every table in the public schema must have row-level security enabled and at least one policy. Exceptions live in one allow-list file that is code-owned. The check runs against the preview database after migrations and does not need to know which tables hold client data; the default is safe and an exception is a visible edit.
  - Auth convention (CI-2), in two halves. All app routes live under one authenticated layout group; a path test fails any page outside it. Every server action is created through one shared helper; the lint rule fails any file under the actions folder that exports a plain async function. Start with the wrapper convention; a full custom rule can follow.
  - Preview data (CI-6): preview env vars must not reference the production Supabase project, and the preview database is reset from seed on every deploy.
  - Approved services (CI-4), pulled forward from P1 because it is cheap: a dependency allow-list in the template and a lint rule on outbound fetch hostnames. This enforces "the stack list is closed" mechanically.

Done when: a fresh project from the template passes CI, and deliberately breaking each rule fails CI.

## Phase 2: review and release

Target: weeks 3 to 5. Ahead of provisioning on purpose; this is the retainer's deliverable.

- Two approval roles, enforced by two different GitHub mechanisms so they can relax independently (REL-1, REL-3):
  - **Technical review** is `CODEOWNERS` plus branch protection "require review from code owners." Never9 owns `supabase/migrations/`, the auth helper and layout group, `lib/integrations/`, the CI workflows, and the CI-1 allow-list. A change that touches none of those paths needs no Never9 review. Relaxing review for a client is editing that path list, which is itself a code-owned change.
  - **Business approval** is the production environment's required reviewer: the client's designated person.
- Generated plain-language change summary on every pull request (REL-2): what changed, data touched, what could break, what to click on the preview URL. It also states which review the change requires and why, from the paths touched. Runs under the zero-retention AI terms.
- Rollback (REL-4): one step for application code via Vercel. Migrations are forward-fix only, written expand-then-contract so the previous app version still runs against the new schema. Pre-migration backup in the release workflow; document the restore path.
- Migrations applied only through the release flow (REL-5).
- Emergency path: code rollback needs no review. A hotfix still needs technical review; the retainer sets the response time.

Done when: the client's designated person can approve or reject a change from the summary and preview alone, a change touching a code-owned path cannot merge without Never9, and nothing reaches production any other way.

## Phase 3: provisioning

Target: weeks 5 to 7.

- Script the Supabase steps the incubate skill currently describes in prose (PROV-1), with the Vercel Marketplace path as the default and the direct organization as the option.
- Separate preview and production databases (PROV-2).
- Join a client-owned GitHub organization, Vercel team, and Supabase project rather than creating them under Never9 (PROV-3, P0). The script takes the organization, team, and project identifiers from the onboarding call and does the rest.
- Configure the review layer as part of stand-up: production environment, required reviewers, CODEOWNERS, branch protection.
- Entra ID setup guide with a validation page that proves sign-in works (PROV-4).
- Idempotent and resumable (PROV-5) and add-an-app (PROV-6) wait for a second client.

Done when: a new client environment stands up in one command against accounts Never9 does not own, with the review layer already enforced.

## Phase 4: first client on Joist

Target: months 2 to 4.

- Candidate: the stealth legal platform, or a small workflow for the DockItFlo firm. Not Spider Ag; their production environment and merge-based handoff do not fit the model. Harvest patterns from it instead.
- Build the real workflow app on the template. Let the friction rewrite the requirements in `concept.md`.
- Handoff assets as they become necessary: generated app overview (CONT-1), runbook, recorded owner, training recipes (AGT-6), ownership transfer (CONT-2).
- Start metering technical review time; it is the input to retainer pricing.

### Handoff surface

The designated person needs a place to run the coding agent. Three options, in order of preference:

1. **Claude Code on the web, default.** Works against the client's GitHub repo with Vercel previews for verification. Nothing is installed on a firm machine, so firm IT approves one SaaS tool rather than a toolchain. This is the path unless the client rules it out.
2. **Bootstrap script on a firm-issued machine.** One script (PowerShell for Windows, shell for macOS) installs Node, git, the GitHub CLI, the Supabase CLI, and Claude Code, and signs into each. IT runs it on hardware they already manage. For firms that will not allow a browser-based agent.
3. **Never9-provisioned laptop.** A machine set up by Never9 with the bootstrap script already run, handed over with the app. Strong as a handoff moment and worth offering. The catch is that firm IT will usually not let an unmanaged device onto the network or into the Microsoft 365 tenant, so treat it as a courtesy for small firms without an IT function, not the default. Ownership of the device and its accounts transfers with the handoff.

Whichever surface is used, the person also gets the task recipes (AGT-6) and the change-summary flow; the surface is where they type, the review layer is what keeps them safe.

### Handoff readiness

Handoff is offered in the engagement letter, not promised as a date. It happens when the checklist is done:

- All accounts are in the client's name and Never9 holds only member seats.
- The designated person is named and has a working handoff surface.
- That person has shipped at least three changes through both approvals with Never9 watching, at least one of which touched a code-owned path and went through technical review.
- The app overview, runbook, and recovery path are in the repo and the person has read them.
- The retainer terms, including technical review response time, are signed.

Done when: the checklist is complete and the client's designated person has shipped one change through both approvals without Never9 touching the code.

## Phase 5: legal kit and portfolio

Target: months 4 to 6.

- Extract the legal kit from live work: clients, matters, matter teams, ethical walls, audit log, Microsoft Graph. Add wall-crossing attempts to the access-control tests (CI-5).
- Automated dependency update pull requests that run the guardrails (CONT-3).
- Portfolio view (PORT-1) only after a second client is live.

Done when: a second legal client stands up on Joist with no template changes.

## Standing decisions

- Guardrails and the review layer before provisioning polish, and before a second client.
- Client holds infrastructure accounts from day one; Never9 builds as a member.
- Two accounts by default: GitHub and Vercel, with Supabase through the Vercel Marketplace.
- Claude Code on the web is the default handoff surface; local toolchains and provisioned laptops are options.
- Handoff is checklist-driven, not date-driven.
- AI provider under commercial terms with zero data retention, for runtime, development-time agent use, and CI-time summaries. Confirm in writing before real client data is involved.
- Preview environments never hold real client data.
- Stack list is closed. A new library is a human decision, and CI-4 enforces it.
- Joist is owned by Never9 and licensed into any studio or services company it launches with.
- Market-timing predictions stay out of client and investor material. The adoption ramp is an internal revenue-sequencing assumption only.

## Honest risks

- **The designated person is the weak link, not the CI.** Guardrails make failure safe; they do not make success likely. The person will get stuck on things no check catches: a valid but wrong migration, an agent that loops, a merge conflict. The skills, recipes, and retainer exist for exactly that, and the sales pitch should say so.
- **Firm IT.** Locked-down machines and tenant policies can eat a week per client. The web-first handoff surface is the mitigation.
- **Plan tiers.** A client on the wrong GitHub or Supabase tier cannot run the review layer or the backup path. The onboarding call fixes this before it costs anything.

## Open questions

Carried from `concept.md` section 10. Joist vs Joist Kit and studio structure are Phase 0 decisions. Pricing, review metering, and the second vertical wait for Phase 4 evidence. The "which change types skip technical review" question is answered structurally above: by path, not by judgment, starting with everything code-owned and relaxing per client.
