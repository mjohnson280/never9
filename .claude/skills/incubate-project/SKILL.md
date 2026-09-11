---
name: incubate-project
description: Stand up a new incubated Never9 project end to end (Next.js 16 scaffold with secrets hygiene, private GitHub repo, Vercel project in the Pro team, custom domain, Supabase). Use when Matt says to stand up, scaffold, or spin up a new project, product, or incubated company.
---

# Incubate a new Never9 project

One command does the scaffold, GitHub, Vercel, and domain. Supabase is a separate step because it needs a decision or a login from Matt.

## 1. Run the stand-up script (from the Never9 repo root)

```
node scripts/new-project.mjs --name "Project Name" --dir "C:/Users/mjohn/Desktop/Projects/Project Name" --domain projectname.com
```

Options: `--slug` (npm name, default: lowercase letters/digits of the name), `--repo` (GitHub repo, default: name without spaces), `--vercel-project` (default: kebab-case name), `--next-version` (create-next-app version, pinned to a known-good release), `--local-only` (skip GitHub, Vercel, domain; use for testing).

What it produces:
- Next.js 16 / Tailwind 4 / ESLint 9 app in `--dir`, with `templates/incubated-project/` overlaid: secrets pre-commit hook, `.env.example`, CI with gitleaks, `noindex` robots and metadata, Vercel env sync script, and a filled-in `CLAUDE.md`.
- Private repo `mjohnson280/<Repo>` with the first commit pushed to `main`.
- Vercel project `<vercel-project>` in team `mjohnson280-8919s-projects`, connected to the repo, first production deploy done, `<domain>` and `www.<domain>` attached.

Requirements: `gh auth status` logged in, `vercel whoami` logged in. Both were true on Matt's machine on 2026-09-11.

If the script fails partway, fix the cause and rerun; every step skips work that already exists (existing package.json, .git, origin remote, Vercel link).

## 2. DNS

Matt's domains are registered at GoDaddy (nameservers `domaincontrol.com`). The script attaches the domain to Vercel but cannot change DNS. Tell Matt to add at GoDaddy:

| Type | Name | Value |
|---|---|---|
| A | @ | 76.76.21.21 |
| A | www | 76.76.21.21 |

Vercel verifies and issues SSL automatically once the records resolve. `vercel domains inspect <domain> --scope mjohnson280-8919s-projects` shows status.

## 3. Supabase (pick one, ask Matt if not already decided)

**Option A: Matt's own Supabase organization** (the default; how DockItFlo and Fit Vaulted are set up; one org, one bill). Org `mjohnson280`, id `ozjswhayzunzstmdfbcr`. Region: `us-east-2` to match DockItFlo unless there is a reason otherwise; region is permanent.
1. Check auth with `npx supabase orgs list`. If it errors, Matt must run `npx supabase login` in a regular terminal window outside Claude Code (the CLI refuses the browser flow in a non-TTY session, and the `!` prefix in the prompt is also non-TTY). The token is stored on the machine; never paste it into chat.
2. From the project folder, with a generated password that never touches the chat:
   ```
   PW=$(node -e "console.log(require('crypto').randomBytes(24).toString('base64url'))")
   npx supabase projects create <slug> --org-id ozjswhayzunzstmdfbcr --region us-east-2 --db-password "$PW" | sed "s/$PW/<redacted>/g"
   printf 'SUPABASE_DB_PASSWORD=%s
' "$PW" > .env.local
   ```
3. `npx supabase projects api-keys --project-ref <ref> -o json` returns `anon` and `service_role`. Append `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_PROJECT_REF`, and `NEXT_PUBLIC_APP_URL` to `.env.local` with a node one-liner so no value is printed. Then `node scripts/vercel-env-sync.mjs --env production --scope mjohnson280-8919s-projects` and confirm names with `vercel env ls production`.
4. `npx supabase link --project-ref <ref>` creates `supabase/config.toml`; add `supabase/.temp` to `.gitignore` and create `supabase/migrations/`. New tables need explicit GRANTs (see the DockItFlo CLAUDE.md standard block).

**Option B: Vercel Marketplace** (billed through Vercel, provisioned in one command, env vars injected automatically). From the project folder: `vercel integration add supabase --yes --no-claim`, then `vercel env pull --yes`. Creates the project under a Vercel-managed Supabase org, separate from Matt's existing one.

Record which option was used in the project's `CLAUDE.md` with the project ref and region.

## 4. Finish

- Put Matt's concept build plan in `docs/` and reference it from the project `CLAUDE.md`.
- Add the project to the global `~/.claude/CLAUDE.md` Projects list.
- If the product is public, add it to the Never9 site's Current Projects page.
- The `prepare` script installs the secrets hook and is written to succeed in environments without git (Vercel's build). Do not replace it with a bare `git config` call; that failed the first Fit Vaulted deploy.
