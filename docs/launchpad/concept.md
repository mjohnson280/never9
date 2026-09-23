# Workflow App Kit: Concept and Build Brief

Status: concept brief for handoff to Claude Code. Draft v0.2, September 2026.
Author: Matt Johnson (Never9, LLC).
Named **Joist** on 2026-09-23 (may become Joist Kit); "the Kit" below means Joist. Do not use "Cursor Lite" anywhere: it borrows a competitor's trademark and ties a deliberately portable system to one editor.

Changes in v0.2 respond to implementation feedback. See Section 11 for what changed and why.

---

## 1. One-Paragraph Summary

The Kit is an opinionated project system that a services firm installs for a client, builds the client's first workflow applications on, and then hands over. It is not a new IDE and not a chat-based app builder. It is a standard repository, a fixed stack, agent instructions, provisioning scripts, and safety checks that let a non-engineer make real changes to real software through a CLI-based coding agent, with a review layer that keeps those changes safe. The business around it sells workflow diagnosis and custom builds first, training and handoff second, and an ongoing "don't get stuck" retainer third.

---

## 2. Motivation

### The trigger

I was pitched a SaaS CRM whose differentiator is a bundled MCP server: connect the CRM to an assistant so it can learn your brand, then push that understanding into the tools you already pay for (Mailchimp was the example). The product is reasonable. The category assumption behind it is what I question.

That product assumes the long-term shape of software is: a vendor owns the application, and AI reaches into it through a connector. As the cost of building custom software falls, more organizations will stop renting a generic application and wiring assistants into it, and will instead own a small application that does exactly their workflow.

### The claim, stated precisely

MCP is not going away, and MCP and CLI agents are not opposites. CLI coding agents use MCP servers. The claim is narrower:

- Bundling an MCP server into a generic SaaS product is a thin, copyable differentiator that treats the vendor's data model as permanent.
- The durable position is owning the workflow application itself. A CLI coding agent working in a real repository is the most direct path there, because it can create, change, test, and deploy an application rather than operate someone else's.
- MCP remains useful inside this model: as how the agent reaches client systems during development, and as one of the ways the built app connects to services the client already runs.

Clients will keep running their systems of record. Law firms will still use Clio, iManage, NetDocuments, and Outlook years from now. The apps we build sit beside those systems and call them through Graph and vendor APIs. The pitch is "own the app, integrate through whatever the vendor exposes."

**Do not put market-timing predictions in client or investor materials.** No claims that SaaS or MCP will be obsolete by a given date. The narrow claim above is the defensible one and does not need a prophecy attached.

### Why a CLI is the right surface

- It builds rather than operates: files, migrations, tests, deploys.
- It leaves an artifact the client owns, running on standard infrastructure.
- It is portable across whichever agent the market settles on, because the repository and instruction files are the standard.
- It scales from one non-engineer to a real engineering team without changing the model.

---

## 3. Business Model

**Layer 1: Build (now).** Diagnose a workflow problem, build the application, put it in production. Fixed scope, bounded timeline.

**Layer 2: Handoff and training (now, partial).** Install the Kit in the client's environment, train their designated person, let them make small changes under review. Expect handoff to be slow and partial at first. What clients do once they see how fast a custom solution appears is come back with a longer list, so early growth comes from expanded build contracts rather than from handoff.

**Layer 3: Retainer (the long-term base).** As comfort grows, clients take over routine changes and pay a recurring fee to keep from getting stuck: technical review of production changes, an engineer on call, guardrails maintained, dependencies updated.

This adoption ramp is an internal planning assumption for sequencing revenue. It is not a market prediction and should not be presented as one.

### Target verticals

Law, finance, accounting, tax. They share the pattern: high-value billable work, dense workflow rules, reliance on aging vendor software, strict confidentiality and supervision obligations, and organizations that are not software companies and do not want to become one. Legal is first because I practice law.

### Status

Approached about launching this with a venture studio, and separately about a cofounder and CEO role at a legal-space FDE services company. In either structure, **the Kit should be owned by my entity and licensed in.** It is the asset that compounds across clients, and building it inside someone else's cap table gives that away.

---

## 4. What the Kit Is

1. **A template repository.** One fixed stack, a working reference application, seeded test data.
2. **Agent instructions.** `AGENTS.md` and `CLAUDE.md` at the repository root, plus skills, so any CLI coding agent builds to the standard.
3. **Provisioning.** One command from nothing to a working environment, against accounts the client owns.
4. **Guardrails.** Conventions paired with checks that run on every change and fail the build when rules are broken. These are the referee; agent instructions are only the coach.
5. **The review layer.** Plain-language change summaries, a business approver, and a technical reviewer before production. This is the part that makes handoff safe, and it is also a billable service.

### Explicit non-goals

- Not a new editor or IDE.
- Not a hosted builder that hides the code.
- Not a platform the client's app runs inside. Standard code, standard infrastructure, and the client can leave with it.
- Not a general-purpose framework. One way to do each thing.

---

## 5. The Review Layer (the load-bearing part)

The risk in this model is not the agent. It is review. A non-engineer cannot evaluate a diff, and will approve whatever demos well on a preview URL. Three mechanisms carry the handoff:

**1. Automated checks say no.** Anything that matters is a check, not a sentence in a document. Convention plus check is the pattern: the convention makes the rule checkable, the check enforces it.

**2. Every change gets a plain-language summary.** Generated on each pull request: what changed, what data it touches, what could break, and what to click on the preview URL to verify. This is what the client's person actually reviews.

**3. Two approvals, two questions.** Splitting the roles is what makes this honest:

| Approval | Who | Question answered |
|---|---|---|
| Business approval | The client's owner of the app | Does this do what I asked? |
| Technical review | Never9 engineer, under the retainer | Is this safe to run on client data? |

Enforce both through GitHub environment protection on the production environment, not through policy. As a client's person matures, the technical review can relax for low-risk change types (copy, layout, adding a field to a form they own) while staying required for migrations, access-control changes, new integrations, and anything touching authentication.

Do not present the technical review as training wheels. It is the retainer's deliverable and the reason the account keeps paying after handoff.

---

## 6. Default Stack

Fixed, because optionality is the enemy of both speed and safety.

- Next.js (App Router, TypeScript)
- Tailwind CSS with shadcn/ui
- Supabase Postgres with Row-Level Security
- Supabase Auth, with Microsoft Entra ID as the identity provider for professional-services clients
- Vercel hosting, with separate preview and production environments
- GitHub, with CI checks and environment protection
- Resend for transactional email
- An AI provider under commercial terms with zero data retention, for both in-app features and development-time agent use
- MCP servers as needed for development-time access to client systems

Vertical kits add a data model and integrations on top. The legal kit adds clients, matters, matter teams, ethical walls, audit logging, and Microsoft Graph.

### AI terms are a compliance item, not a cost item

Client matter data passes through the agent's context during development, not only through the app at runtime. Consumer subscriptions are the wrong contract for client work. Use API or enterprise agreements with zero data retention, and confirm current terms in writing before the first engagement on real client data. Record the answer in the client's engagement terms.

---

## 7. Requirements

Priority: **P0** for the first client engagement, **P1** once a second builder or client is involved, **P2** for scale.

### Guardrails (CI, not editor hooks)

| ID | Requirement | Priority |
|---|---|---|
| CI-1 | Fail if any table holding client data lacks row-level access policies. Implementation: after migrations run against the preview database, query the policy catalog and fail on any client-data table without a policy | P0 |
| CI-2 | Fail if any route or server action is reachable without authentication. Convention: all app routes live under one authenticated layout group; a lint rule fails any server action that does not call the shared auth helper | P0 |
| CI-3 | Secret scanning and dependency vulnerability scanning | P0 |
| CI-4 | Fail if code calls an external service not on the approved list | P1 |
| CI-5 | Automated access-control tests against seeded data, including cross-tenant and wall-crossing attempts | P1 |
| CI-6 | Fail if a preview or seed dataset contains real client data | P1 |

### Review and release

| ID | Requirement | Priority |
|---|---|---|
| REL-1 | Production deploys require recorded approval, enforced by GitHub environment protection | P0 |
| REL-2 | Generated plain-language change summary on every pull request: what changed, data touched, risks, what to verify | P0 |
| REL-3 | Two approval roles, business and technical, with the technical reviewer required by default and relaxable by change type | P0 |
| REL-4 | Rollback: one step for application code. Database migrations are forward-fix only, with an automatic pre-migration backup and a documented restore path | P1 |
| REL-5 | Migrations applied only through the release flow, never by hand | P1 |

### Agent experience

| ID | Requirement | Priority |
|---|---|---|
| AGT-1 | `AGENTS.md` encoding stack, patterns, data model rules, and forbidden alternatives | P0 |
| AGT-2 | `CLAUDE.md` shipped alongside it, one file pointing at the other so the standard holds whichever agent the client installs | P0 |
| AGT-3 | Skills for recurring tasks: add a table with access policies, add an integration, add an email, add a background job | P0 |
| AGT-4 | Reference application exercising every pattern end to end | P0 |
| AGT-5 | Seeded synthetic data covering access-control edge cases | P0 |
| AGT-6 | Plain-language task recipes for the client's person after handoff | P1 |
| AGT-7 | Optional MCP server exposing provisioning and catalog operations to the agent | P2 |

### Provisioning

| ID | Requirement | Priority |
|---|---|---|
| PROV-1 | One command creates repository, database, hosting project, environments, and secrets | P0 |
| PROV-2 | Separate preview and production environments with isolated databases | P0 |
| PROV-3 | Works against client-owned accounts: join an existing Vercel team and Supabase organization rather than creating them under Never9 | P0 |
| PROV-4 | Guided Entra ID setup with a validation page proving sign-in works | P1 |
| PROV-5 | Idempotent and resumable after partial failure | P2 |
| PROV-6 | Add a new app to an existing client workspace in one step | P2 |

### Continuity and portfolio

| ID | Requirement | Priority |
|---|---|---|
| CONT-1 | Generated app overview: purpose, data touched, integrations, owner, runbook | P1 |
| CONT-2 | Ownership transfer workflow when the client's builder changes | P1 |
| CONT-3 | Automated dependency update pull requests that run the guardrails | P2 |
| PORT-1 | Inventory across all client apps: owner, status, last deploy, failing checks | P1 |
| PORT-2 | Client-facing admin view: their apps, pending approvals, audit history | P2 |
| PORT-3 | Versioned integration catalog modules reused across clients | P2 |

---

## 8. Account Ownership

The client owns the Vercel team and the Supabase organization; Never9 joins as a member. This keeps Never9 out of data custodian territory and makes "you can leave with it" literally true. Revenue comes from partner and agency programs plus the platform and retainer fees, not from reselling infrastructure.

---

## 9. Build Sequence

**Phase 0 (this week): name and home.** Choose a name Never9 owns. Create a private toolkit repository, separate from the Never9 website repository, and move the existing project-creation script, templates, and skill into it. File this brief in its docs folder.

**Phase 1 (weeks 1 to 3): template and guardrails.** Add shadcn, Supabase migrations, Resend, and a reference app that exercises each pattern once: one table with access policies, one list and detail view, one email, one background job, seeded data with access-control edge cases. Write `AGENTS.md` and `CLAUDE.md` plus the four skills. Extend CI with dependency audit, the policy coverage check, and the auth convention check.

**Phase 2 (weeks 3 to 5): review and release.** Environment protection with required reviewers on production. Generated change summaries on every pull request. Application rollback. Migrations only through the release flow. Pre-migration backups.

**Phase 3 (weeks 5 to 7): provisioning.** Script the Supabase steps the existing skill describes. Separate preview and production databases. Entra ID setup with validation. Support joining client-owned accounts.

**Phase 4 (months 2 to 4): first client on the Kit.** Let real friction rewrite this requirements list. Add handoff assets as they become necessary.

**Phase 5 (months 4 to 6): legal kit.** Extract clients, matters, matter teams, ethical walls, audit log, and Graph integration from live legal work rather than designing them fresh. Portfolio view only after a second client is live.

Existing client work that does not fit the Kit should not be retrofitted. Harvest patterns from it as they prove out.

---

## 10. Open Questions

- Joist vs Joist Kit, and the name's relationship to the Never9 brand.
- How much belongs in a Cursor plugin versus a plain repository plus CI. Current lean: the repository and CI are the product, the plugin is convenience.
- Which vertical kit follows legal, and whether finance, accounting, and tax can share one.
- Pricing for all three layers, especially the retainer, and how technical review time is metered.
- Structure if this launches with a venture studio: what is contributed, what is licensed, who owns the Kit.
- What change types can safely skip technical review, and after how long.

---

## 11. What Changed in v0.2

Accepted from implementation feedback:

- Drop the "Cursor Lite" name and any market-timing prediction from external materials. Section 2 keeps only the narrow, defensible claim.
- Ship `CLAUDE.md` alongside `AGENTS.md`.
- Treat AI provider terms as a compliance item covering development-time context, not only runtime.
- Pair every guardrail with a convention that makes it checkable. Specific implementations recorded in CI-1 and CI-2.
- Client owns the infrastructure accounts, so provisioning must join existing accounts (PROV-3, raised to P0).
- Demote PROV-5 and PROV-6 to P2.
- Extract the legal kit from live legal work rather than designing it fresh; do not retrofit existing client projects.
- The Kit is owned by Never9 and licensed into any studio or cofounder structure.
- Build guardrails and the review layer before provisioning automation, and before a second client.

Corrections and additions:

- REL-1 was already P0 in v0.1; the substantive change is enforcement through environment protection rather than policy.
- **Two approval roles, not one.** A non-engineer approving a diff is theater. Business approval answers "is this what I asked for" and technical review answers "is this safe." Technical review is the retainer's deliverable, which turns the weakest point of the handoff model into its recurring revenue.
- **One-step rollback does not apply to databases.** Application rollback is one step; migrations are forward-fix with pre-migration backups (REL-4).
- **Preview environments must not contain real client data** (CI-6). Seeded synthetic data only.
- The two-year adoption ramp stays in internal planning as a revenue sequencing assumption. It is not a market prediction and does not appear in client or investor materials.

---

## 12. Notes for the Implementing Agent

- Build the template, guardrails, and review layer before provisioning automation. A working repository with enforced rules beats one-click setup on a shaky foundation.
- Treat the reference application as documentation. Every pattern a future app needs appears there once, correctly.
- Prefer failing the build over writing a rule in prose. If a rule is not checkable, change the convention until it is.
- Keep the stack list closed. A new library is a human decision, not a default.
- Assume the eventual reader is a non-engineer with a coding agent. Optimize file layout, naming, and generated summaries for that reader.
