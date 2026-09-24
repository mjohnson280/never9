# Joist: brief for a non-technical deck

Purpose: everything Claude chat needs to build a deck that explains the Joist model to a non-technical audience. Written 2026-09-24 from the concept brief (v0.2) and the phased plan (v0.3) in this folder. Self-contained and secret-free; nothing here needs the repo.

Author of the model: Matt Johnson, Never9, LLC (Minneapolis). Never9 is a rapid development studio and incubator. Its line: "Get to market, or operate more efficiently within it."

---

## 1. Who the deck is for

Primary: partners and operations leaders at law firms and finance, accounting, and tax firms. They run high-value billable work with dense workflow rules, on aging vendor software, under strict confidentiality and supervision duties. They are not software companies and do not want to become one.

Secondary: people evaluating the business, such as a venture studio or a potential cofounder. The same story works for both; the secondary audience also wants section 8 (the business model) and section 12 (roadmap).

Assume the reader has never seen a code repository and does not want to. Every technical term in this brief has a plain-language version next to it. Use the plain version on the slides.

## 2. The story in one paragraph

Firms rent generic software and bend their work to fit it. When the software does not fit, staff build workarounds in email, spreadsheets, and memory, and those workarounds are where time and risk hide. The cost of building custom software has fallen far enough that a firm can now own a small application that does exactly its workflow. Joist is how Never9 builds that application with the firm, hands it to a person inside the firm who can keep improving it with an AI coding assistant, and stays on to make sure nothing unsafe ever reaches production. The firm owns everything. Never9 is the safety layer and the engineer on call.

## 3. The problem, in the order the deck should make it

1. **The build is not the expensive part anymore. Spinning your wheels is.** Months bending an off-the-shelf tool to fit, only to find it harder to implement than building custom. A custom fix in weeks costs less than the workarounds.
2. **Layering a tool on top of a broken workflow captures a fraction of the value.** The larger return comes from redesigning the work around what is now possible.
3. **The people who know the workflow are not engineers, and the engineers do not know the workflow.** Someone has to sit inside the function and bridge that gap. Never9 calls this embedded engineering.
4. **Custom software has historically had a hidden cost: who maintains it.** A firm that owns an application needs a way to change it safely after the builder leaves. That is the problem Joist exists to solve.

## 4. What Joist is

Plain version: **a system for building a firm's custom application in a way that a trained person inside the firm can keep changing it safely.**

It has five parts. On a slide, five boxes with the plain names.

| Part | Plain name | What it means |
|---|---|---|
| Template repository | The starter kit | Every application starts from the same proven foundation, so nothing is invented twice |
| Agent instructions and skills | The playbook | Written rules the AI coding assistant follows, so it builds to Never9's standard whoever is typing |
| Provisioning | One-command setup | A new client environment is created in one step, in the firm's own accounts |
| Guardrails | The referee | Automated checks run on every change and block anything that breaks a safety rule |
| Review layer | Two sets of eyes | Every change gets a plain-English summary and two approvals before it goes live |

The name: a joist is the beam under a floor. You never see it, but it is why the floor holds. Use the metaphor once if it helps; do not build the whole deck on it.

## 5. What Joist is not

Say this early, because the audience will assume one of these.

- Not a new software product the firm logs into. The firm's application is ordinary software on ordinary infrastructure.
- Not a platform the firm is locked into. The firm owns the code and the accounts from the first day and can leave with everything.
- Not an AI chatbot that builds apps from a conversation. There is a real codebase, real tests, and real review.
- Not a replacement for the firm's systems of record. Firms will keep their practice management, document management, and Outlook. Joist applications sit beside those systems and connect to them.

## 6. How it works for the firm: the journey

Present as a timeline. Four stages.

**Stage 1: Diagnose.** Never9 sits alongside the people doing the work, finds the workflow problem, and proposes the fix. One to two weeks.

**Stage 2: Build.** Never9 builds the application on the Joist foundation, in the firm's own accounts, with the firm's designated person watching and shaping it from real use. Weeks, not months. Fixed scope.

**Stage 3: Hand off.** The firm's designated person learns to make changes using an AI coding assistant. Every change they make goes through the plain-English summary and both approvals. Never9 watches the first several changes. Handoff is complete when a checklist is done, not when a date arrives.

**Stage 4: Keep it safe.** Never9 stays on retainer: reviewing every change that touches something sensitive, keeping the guardrails and dependencies current, and answering the phone when the person gets stuck.

Emphasize that handoff is offered, not forced. Some firms will want Never9 to keep building. Early on, most will. That is fine and expected.

## 7. The review layer, in plain language

This is the slide that earns trust. The risk in letting a non-engineer change real software is not the AI. It is that the person cannot tell a safe change from an unsafe one, and will approve whatever looks right in a demo. Three things carry the weight:

**Automated checks say no.** Rules that matter are enforced by software, not written in a manual. Examples in plain terms: every table of client data must have access controls; no page can be reached without signing in; no secret can be committed; no unapproved outside service can be called. Break a rule and the change cannot proceed.

**Every change gets a plain-English summary.** Before anyone approves, they read: what changed, what data it touches, what could break, and what to click to check it. This is what the firm's person actually reviews. Not code.

**Two approvals, two questions.**

| Approval | Who | The question they answer |
|---|---|---|
| Business approval | The firm's owner of the application | Does this do what I asked? |
| Technical review | Never9 engineer, under the retainer | Is this safe to run on client data? |

Both are enforced by the hosting platform, not by policy. Nothing reaches production without both. As the firm's person gains experience, technical review can step back for low-risk changes (wording, layout, a new field on a form they own) while staying required for anything touching data structure, access controls, sign-in, or outside connections. The rule for what needs Never9's review is written down by file location, not decided case by case.

Do not present technical review as training wheels that come off. It is the ongoing service, and it is the reason the firm keeps a relationship with Never9 after handoff.

## 8. The business model

Three layers, in the order revenue arrives.

**Build.** Diagnose a workflow problem, build the application, put it in production. Fixed scope, bounded timeline.

**Handoff and training.** Install Joist in the firm's environment, train the designated person, let them make small changes under review. Expect this to be gradual. What firms do once they see how fast a custom solution appears is come back with a longer list, so early growth comes from more build work.

**Retainer.** As comfort grows, the firm takes over routine changes and pays a recurring fee to keep from getting stuck: technical review of production changes, an engineer on call, guardrails maintained, dependencies updated.

For the secondary audience: Joist is owned by Never9 and licensed into any studio or services company it launches with. It is the asset that compounds across clients.

Target verticals, in order: law, finance, accounting, tax. Legal first because Matt is a practicing attorney and the legal kit (clients, matters, matter teams, ethical walls, audit log, Microsoft 365 integration) is extracted from live legal work.

## 9. Ownership: the firm holds the keys

Say this plainly and often. The firm owns:

- The code, in the firm's own GitHub organization.
- The hosting, in the firm's own Vercel team.
- The database, in the firm's own account, billed through the same invoice.

Never9 joins as a member and can be removed at any time. Handoff means removing seats, not transferring anything. This also keeps Never9 out of the position of holding client data on the firm's behalf, which matters to law firms.

Two accounts to create, not three, with the database provisioned inside the hosting account. Account creation happens in a 30 to 45 minute onboarding call with the person who holds the firm's card and its IT administrator. Everything after that is one command.

## 10. The designated person

The model works when the firm names a person who lives in the workflow and has some appetite for tools: a paralegal, a practice-group manager, a finance operations lead. It does not work if the firm assigns it to IT, because IT knows the machine and not the work.

That person needs a place to work with the AI coding assistant. Default: a web-based assistant that works directly against the firm's code with nothing installed on a firm computer, so IT approves one web tool rather than a toolchain. Options: a setup script IT runs on a firm-issued laptop, or a laptop Never9 sets up and hands over with the application (a good handoff moment for small firms without an IT function; larger firms' IT will usually not allow an outside device).

## 11. Honest risks, framed as safeguards

Non-technical audiences trust a pitch that names its own weak points.

- **The person, not the software, is the weak link.** Guardrails make failure safe; they do not make success automatic. The person will get stuck on things no check catches. The playbook, the task recipes, and the retainer exist for exactly that.
- **Firm IT.** Locked-down machines and tenant policies can slow a handoff. The web-first approach is the answer.
- **Account tiers.** The review layer depends on paid tiers of the hosting and code platforms. Never9 states the monthly cost in the proposal so it never surprises anyone. (Do not put a dollar figure in the deck; Matt fills it in per proposal.)

## 12. Roadmap, non-technical version

For the secondary audience or a closing slide. Dates are relative to late September 2026.

| When | What | Plain meaning |
|---|---|---|
| Now | Name and home | Joist named; toolkit moves into its own repository |
| Weeks 1 to 3 | Foundation and guardrails | The starter kit, the playbook, and the automated checks |
| Weeks 3 to 5 | Review and release | The two-approval flow, plain-English summaries, one-step rollback |
| Weeks 5 to 7 | Setup automation | One command stands up a client environment in the client's accounts |
| Months 2 to 4 | First firm on Joist | A real workflow application, built and handed off; real friction rewrites the plan |
| Months 4 to 6 | Legal kit | The legal data model and integrations, extracted from live work; a second firm stands up with no changes |

## 13. Proof points Never9 can cite

- **DockItFlo** (dockitflo.com): a fix for one large litigation firm's court-notice calendaring problem that became a company under the Never9 umbrella. Built with the firm as first user. Do not name the firm.
- **Never9's operator background:** Matt has taken companies from napkin to exit more than once and knows what a first version has to leave out. Do not attach a company count or dollar figure.
- **Never9's existing launchpad:** the one-command stand-up already exists and has been used for Never9's own incubated projects. Joist is the client-facing version of it.

## 14. Voice and rules for the deck

Voice: plain, declarative, anti-deliberation. Short sentences. No consultant jargon. State things; do not hedge.

Say:
- "Own the application, integrate through whatever your vendors expose."
- "The build is not the expensive part anymore. Spinning your wheels is."
- "You keep the keys. We keep it safe."
- "Handoff when a checklist is done, not when a date arrives."
- "Two approvals, two questions: does it do what I asked, and is it safe."

Do not say:
- **Any market-timing prediction.** No claims that SaaS or any technology will be obsolete by a date. The narrow claim is enough: owning the workflow application is the durable position.
- **"Cursor Lite."** Never, in any material.
- **"Code is cheap"** as a bare claim. Lead with the cost of spinning wheels instead.
- **A day-count guarantee, a price, or free-build terms.** Matt sets these per engagement.
- **The name of the litigation firm behind DockItFlo,** or the name of any consulting client.
- **"Training wheels"** for technical review. It is the ongoing service.
- **"AI agents"** as the frame. This is custom software for workflow efficiency; an AI coding assistant is how changes get made, not what the product is.
- Anything implying Never9 holds or hosts client data. The firm holds the accounts.

Plain-language glossary, for Claude chat's use when translating:

| Technical term | Say instead |
|---|---|
| Repository | The code, or the codebase |
| CI, checks, pipeline | Automated checks |
| Row-level security, access policies | Access controls on client data |
| Migration | A change to how data is stored |
| Preview environment | A test copy the firm can click through before approving |
| Production | The live application |
| Rollback | Undo in one step |
| Environment protection, required reviewers | The approval gate before anything goes live |
| CODEOWNERS | The written list of what needs Never9's review |
| Forward-deployed engineer (FDE) | An engineer embedded in the firm alongside the people doing the work |
| Zero data retention | The AI provider keeps nothing the firm sends it |

## 15. Suggested slide order

1. Title: Joist. One line: your workflow, your application, kept safe.
2. The problem: spinning your wheels on software that does not fit.
3. What changed: building custom is now the cheaper path; the hard part is keeping it safe after the builder leaves.
4. What Joist is: five parts, plain names.
5. What Joist is not.
6. The journey: diagnose, build, hand off, keep it safe.
7. Two approvals, two questions.
8. Automated checks say no (three or four plain examples).
9. You hold the keys: ownership and accounts.
10. The designated person and how they work.
11. Honest risks and how each is handled.
12. Proof: DockItFlo and the operator background.
13. The relationship: build, handoff, retainer.
14. Roadmap (secondary audience) or next step (primary audience: a diagnosis conversation).

## 16. Decisions Matt makes before this goes external

- Joist vs Joist Kit as the name. Current lean: Joist for the system, "the Joist kit for legal" for the vertical layer.
- Whether the deck version for firms includes the roadmap slide or ends on a call to a diagnosis conversation.
- The monthly account-tier cost line, per proposal.
- Whether to show the Never9-provisioned laptop as an offer or leave it out until a firm asks.
