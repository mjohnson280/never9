#!/usr/bin/env node
/**
 * Stand up a new incubated Never9 project: scaffold, hygiene, GitHub, Vercel, domain.
 *
 *   node scripts/new-project.mjs --name "Fit Vaulted" --dir "C:/Users/mjohn/Desktop/Projects/Fit Vaulted" [--domain fitvaulted.com] [--slug fitvaulted] [--repo FitVaulted] [--local-only]
 *
 * What it does, in order (each step is idempotent enough to re-run):
 *   1. create-next-app (Next.js 16 / Tailwind 4 / ESLint 9, app router, no src dir) into --dir
 *   2. Overlay templates/incubated-project (secrets hook, CI, env template, noindex, CLAUDE.md)
 *   3. package.json scripts: check + prepare (hook install, tolerant of no-git environments)
 *   4. git init on main, npm install, npm run check, first commit
 *   5. gh repo create mjohnson280/<repo> --private, push            (skipped with --local-only)
 *   6. vercel link (creates project in the Pro team), git connect,
 *      vercel deploy --prod, add <domain> and www.<domain>            (skipped with --local-only)
 *
 * Supabase is NOT created here. See .claude/skills/incubate-project/SKILL.md for the two options.
 * Requires: node 24, gh (logged in), vercel CLI (logged in). Run from the Never9 repo root.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync, cpSync, readdirSync, statSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { tmpdir } from "node:os";

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf(`--${n}`); return i === -1 ? d : args[i + 1]; };
const flag = (n) => args.includes(`--${n}`);

const name = opt("name");
const dir = opt("dir") && resolve(opt("dir"));
if (!name || !dir) {
  console.error('Usage: --name "Project Name" --dir <path> [--domain x.com] [--slug x] [--repo X] [--local-only]');
  process.exit(1);
}
const slug = opt("slug", name.toLowerCase().replace(/[^a-z0-9]+/g, "").replace(/^-|-$/g, ""));
const vercelProject = opt("vercel-project", name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""));
const repo = opt("repo", name.replace(/[^A-Za-z0-9]+/g, ""));
const domain = opt("domain", `${slug}.com`);
const team = "mjohnson280-8919s-projects";
const owner = "mjohnson280";
const localOnly = flag("local-only");
// Pinned so a fresh publish of create-next-app cannot point at a Next.js version npm cannot resolve yet.
const cnaVersion = opt("next-version", "16.3.4");
const date = new Date().toISOString().slice(0, 10);

const here = dirname(fileURLToPath(import.meta.url));
const template = resolve(here, "..", "templates", "incubated-project");
if (!existsSync(template)) { console.error(`template missing: ${template}`); process.exit(1); }

const useShell = process.platform === "win32";
// With a shell, arguments containing whitespace must be quoted or they split apart.
const q = (a) => (useShell && /\s/.test(a) ? `"${a.replaceAll('"', '\\"')}"` : a);
const run = (cmd, cmdArgs, cwd, { allowFail = false } = {}) => {
  console.log(`\n$ ${cmd} ${cmdArgs.join(" ")}   (in ${cwd})`);
  const r = spawnSync(cmd, cmdArgs.map(q), { cwd, stdio: "inherit", shell: useShell });
  if (r.status !== 0 && !allowFail) { console.error(`failed: ${cmd} ${cmdArgs.join(" ")}`); process.exit(r.status ?? 1); }
  return r.status;
};
const sub = (s) => s
  .replaceAll("__NAME__", name).replaceAll("__DOMAIN__", domain).replaceAll("__DATE__", date)
  .replaceAll("__VERCEL_PROJECT__", vercelProject).replaceAll("__REPO__", repo);

// 1. scaffold (into a temp dir so the npm package name is valid, then copy over)
mkdirSync(dir, { recursive: true });
if (!existsSync(join(dir, "package.json"))) {
  const tmp = join(tmpdir(), `never9-scaffold-${Date.now()}`);
  mkdirSync(tmp, { recursive: true });
  run("npx", ["--yes", `create-next-app@${cnaVersion}`, slug, "--ts", "--tailwind", "--eslint", "--app", "--no-src-dir",
    "--import-alias", "@/*", "--use-npm", "--turbopack", "--skip-install", "--disable-git", "--yes"], tmp);
  cpSync(join(tmp, slug), dir, { recursive: true });
} else {
  console.log("package.json exists; skipping create-next-app");
}

// 2. overlay template (dotfile names are stored without the leading dot where git would otherwise ignore them)
const rename = { gitignore: ".gitignore", "env.example": ".env.example" };
const walk = (src, dst) => {
  for (const entry of readdirSync(src)) {
    const s = join(src, entry);
    const d = join(dst, rename[entry] ?? entry);
    if (statSync(s).isDirectory()) { mkdirSync(d, { recursive: true }); walk(s, d); continue; }
    if (entry === ".gitkeep") { mkdirSync(dst, { recursive: true }); writeFileSync(d, ""); continue; }
    const isText = /\.(md|ts|tsx|mjs|yml|yaml|json|css|example)$|^(gitignore|pre-commit)$/.test(entry);
    writeFileSync(d, isText ? sub(readFileSync(s, "utf8")) : readFileSync(s));
  }
};
walk(template, dir);

// 3. package.json scripts
const pkgPath = join(dir, "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
pkg.name = slug;
pkg.scripts = {
  dev: "next dev", build: "next build", start: "next start", lint: "eslint",
  check: "next typegen && tsc --noEmit && eslint .",
  prepare: "node -e \"try{require('child_process').execSync('git config core.hooksPath .githooks',{stdio:'ignore'})}catch{}\"",
};
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

// 4. git + install + check + commit
if (!existsSync(join(dir, ".git"))) run("git", ["init", "-q", "-b", "main"], dir);
run("git", ["config", "user.name", owner], dir);
run("git", ["config", "user.email", `${owner}@gmail.com`], dir);
run("npm", ["install"], dir);
run("npm", ["run", "check"], dir);
run("git", ["add", "-A"], dir);
run("git", ["commit", "-q", "-m", `Scaffold ${name} from the Never9 project template`], dir, { allowFail: true });

if (localOnly) { console.log("\n--local-only: skipping GitHub, Vercel, and domain."); process.exit(0); }

// 5. GitHub
const hasRemote = spawnSync("git", ["remote", "get-url", "origin"], { cwd: dir, shell: true }).status === 0;
if (!hasRemote) {
  run("gh", ["repo", "create", `${owner}/${repo}`, "--private", "--source", ".", "--remote", "origin", "--push",
    "--description", `${name} — an incubated Never9 product`], dir);
} else {
  run("git", ["push", "-u", "origin", "main"], dir);
}

// 6. Vercel
run("vercel", ["link", "--yes", "--project", vercelProject, "--scope", team], dir);
run("vercel", ["git", "connect", "--yes"], dir, { allowFail: true });
run("vercel", ["deploy", "--prod", "--yes"], dir);
run("vercel", ["domains", "add", domain, "--scope", team], dir, { allowFail: true });
run("vercel", ["domains", "add", `www.${domain}`, "--scope", team], dir, { allowFail: true });

console.log(`
Done.
  Folder    ${dir}
  GitHub    https://github.com/${owner}/${repo}
  Vercel    project ${vercelProject} in ${team} (https://${vercelProject}.vercel.app)
  Domain    ${domain} attached. If DNS is elsewhere, add: A @ 76.76.21.21 and A www 76.76.21.21
  Supabase  not created. Follow .claude/skills/incubate-project/SKILL.md.
`);
