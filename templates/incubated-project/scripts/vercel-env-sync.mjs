#!/usr/bin/env node
/**
 * Push every variable named in .env.example to a Vercel project.
 *
 * Values are read from a local env file (default .env.local) and never from
 * the repo. Use this to stand up a fresh Vercel project, and again at handoff
 * when the project moves to the BDiB team and keys are rotated.
 *
 *   node scripts/vercel-env-sync.mjs --env production [--file .env.local] [--scope <team>] [--dry-run]
 *
 * Requires `vercel login` and a linked project (`vercel link`) in this folder.
 * Variables present in .env.example but empty in the env file are skipped
 * with a warning, so nothing gets set to an empty string by accident.
 */
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};
const target = opt("env", null);
const file = opt("file", ".env.local");
const scope = opt("scope", null);
const dryRun = args.includes("--dry-run");

if (!["production", "preview", "development"].includes(target)) {
  console.error("Usage: --env production|preview|development [--file .env.local] [--scope team] [--dry-run]");
  process.exit(1);
}

const parse = (path) =>
  Object.fromEntries(
    readFileSync(path, "utf8")
      .split(/\r?\n/)
      .filter((l) => l.trim() && !l.trim().startsWith("#"))
      .map((l) => {
        const eq = l.indexOf("=");
        return [l.slice(0, eq).trim(), l.slice(eq + 1).trim().replace(/^["']|["']$/g, "")];
      })
  );

const names = Object.keys(parse(".env.example"));
const values = parse(file);

let pushed = 0;
for (const name of names) {
  const value = values[name];
  if (!value) {
    console.warn(`skip  ${name} (empty in ${file})`);
    continue;
  }
  if (name.startsWith("NEXT_PUBLIC_") && /SERVICE_ROLE|SECRET|PRIVATE/i.test(name)) {
    console.error(`refuse ${name}: privileged names must never be NEXT_PUBLIC_`);
    process.exit(1);
  }
  const cmd = ["env", "add", name, target, "--force", ...(scope ? ["--scope", scope] : [])];
  if (dryRun) {
    console.log(`would  vercel ${cmd.join(" ")}`);
    pushed++;
    continue;
  }
  const r = spawnSync("vercel", cmd, { input: value, stdio: ["pipe", "inherit", "inherit"], shell: true });
  if (r.status !== 0) {
    console.error(`failed ${name}`);
    process.exit(r.status ?? 1);
  }
  pushed++;
}
console.log(`${dryRun ? "planned" : "pushed"} ${pushed} variable(s) to ${target}`);
