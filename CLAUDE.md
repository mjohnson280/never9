# Never9 — Claude Code Notes

## Before every push
Always run both checks and confirm they exit clean before committing and pushing:
1. `npx tsc --noEmit` — catches TypeScript errors
2. `npx next lint` — catches ESLint errors (e.g. unescaped apostrophes in JSX text)

`tsc` does not catch ESLint errors, so both are required. Apostrophes in JSX text content must be written as `&apos;` — contractions like "don't", "we've", "it's" will fail the build if written as literal characters inside JSX tags.

## Git workflow
Handle all pushes, PRs, and merges autonomously — Matt does not want to navigate to GitHub or Vercel. When promoting stage to production:
1. Run both pre-push checks (tsc + lint) and confirm clean
2. Create the PR (`stage` → `main`) via `gh pr create`
3. Merge it via `gh pr merge` immediately after
4. Confirm merge status and let Matt know Vercel is deploying

## Contact form
- **Page:** `app/contact/page.tsx` — client-side form with fields: name, industry, pain point (1500 char max), email, phone
- **API route:** `app/api/contact/route.ts` — validates all fields, sends email via Resend
- **Delivery:** Resend API to mjohnson280@gmail.com, from `contact@never9.ai`, subject line "Never9 submission"
- **Env vars:** `RESEND_API_KEY` in `.env.local` locally and in Vercel env vars for both production and preview (stage branch)
- **Dependencies:** `resend`
