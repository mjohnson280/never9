# Never9

Separate product repository for the Never9 brand site.

## Branch Model

- `main` -> production
- `stage` -> stable review / approval
- `feature/*` -> active work branches

## Vercel First-Time Setup

This repo is set up to deploy via Vercel’s Git integration. The key is mapping branch -> domain:

- `main` should point to `never9.ai`
- `stage` should point to `stage.never9.ai`

1. Create a GitHub repo named `never9`
2. Add the Git remote
3. Push `main` and `stage` (so Vercel can detect both branches)
4. Import the repo into Vercel
5. In the Vercel project settings:
   1. Ensure framework/build preset is detected as **Next.js**
   2. Configure the **Production Branch** as `main`
   3. Add `never9.ai` as the production alias for the `main` branch
   4. Add `stage.never9.ai` as a preview/stage alias that targets the `stage` branch

## Deploy Notes

After the branches are connected, Vercel will automatically create:

- Production deployment for commits to `main`
- Preview/stage deployments for commits to `stage`

You typically do not need a `vercel.json` file for this starter unless you want custom rewrites/headers.
Set `NEXT_PUBLIC_SITE_URL` in Vercel per environment if you want canonical sitemap/robots URLs to match each domain.

## Contact Form Email Configuration

The `/contact` form submits to `app/api/contact/route.ts` and sends emails with:

- To: `mjohnson280@gmail.com`
- Subject: `Never9 submission`

Configure these environment variables in Vercel (and locally if testing):

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`

## Codex Agent Workflow

Use this flow for all work done by your Codex agent:

1. Start from `stage` and create `feature/<short-name>`
2. Implement changes and run `npm run check`
3. Open PR into `stage` for review/approval
4. Merge `stage` into `main` when ready for production

### Guardrails

- CI runs on pushes and PRs for `stage` and `main` (`.github/workflows/ci.yml`)
- `robots.txt` is automatically no-index for non-production environments
- `sitemap.xml` and metadata base URL follow `NEXT_PUBLIC_SITE_URL` (or Vercel URL fallback)
