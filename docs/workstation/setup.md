# Workstation setup and moving between machines

Covers every project on Matt's machine, not only Never9. Written 2026-11-09, when Matt moved to a new computer.

## The short answer
No project needs a particular computer. Every repo is on GitHub. Production is Vercel and Supabase. Fit Vaulted's nightly sync and imports run on GitHub Actions (`sync.yml`, `import.yml`). A fresh clone on any machine works the same, and you can switch between machines as often as you like.

Only two kinds of things live outside git:
1. **Per-project files git ignores on purpose:** `.env.local`, and Fit Vaulted's `data/`. They change rarely, so copy them once.
2. **Claude Code's own files:** the global `CLAUDE.md`, settings, skills, and each project's memory, all under `C:\Users\mjohn\.claude\`. They change almost every session, so sync them with the git setup in section 3.

## 1. Copy once (the files that exist only on the old PC)
Use a USB drive or a private cloud folder. Never commit these.

| What | Where |
|---|---|
| `.env.local` | Fit Vaulted, Never9, dockflow, spiderag, Endopheno (Vercel holds the production copies) |
| Fit Vaulted `data\` | Garmin export zip, FIT files, lab workbook, terrain, and the `data\tmp` screenshot scripts. The engine can rebuild most of it from the `vault` bucket and intervals.icu; the lab workbook and the scratch scripts exist only here |
| Claude chat Project exports | `Desktop\Claude Projects Folder from Chat\` |
| SSH keys, if used | `C:\Users\mjohn\.ssh\` (Never9 and Omnia clone over SSH; switching them to HTTPS removes the need) |
| `Projects\taskflow test\` | The old Omnia path, not a git repo at the top level. Confirm the repo inside it is pushed; `Projects\Omnia Fishing` is the one with a remote |
| Downloads | Any planning-chat specs not yet filed |

Checked 2026-11-09: every repo was clean and pushed **except DockFlow**, which had 49 untracked files and 1 modified (scripts, `scripts/backups/`, `docs/dockitflo_crm_integration_scope_v1.md`). Commit or copy them before retiring the old PC.

## 2. Set up a machine
1. Install Git for Windows, Node and Python (the same major versions as the other machine; check with `node -v` and `python --version`), and Claude Code. Run `claude` once and sign in.
2. Sign in to GitHub (`gh auth login`, or the browser prompt on the first push) and set `git config --global user.name` and `user.email`.
3. **Keep the same Windows username and the same `C:\Users\mjohn\Desktop\Projects\...` paths.** Claude names each project's memory folder after its path (`C--Users-mjohn-Desktop-Projects-Fit-Vaulted`). The same path means memory loads with no work; if the path changes, rename the folder under `.claude\projects\` to match.
4. Clone each repo into `Projects\`: FitVaulted (as `Fit Vaulted`), never9 (as `Never9`), dockflow, SpiderAG (as `spiderag`), endopheno (as `Endopheno`), new-omnia-fishing-homepage (as `Omnia Fishing`).
5. Put the section 1 files in place, then set up the Claude config sync in section 3.
6. In each repo run `npm install`. In Fit Vaulted this also installs the pre-commit secrets hook.
7. Fit Vaulted engine: in `engine\`, run `python -m venv .venv`, install the package as the engine README says, then `.venv\Scripts\python -m pytest` (236 tests on 2026-11-09). For visual checks, `npx playwright install firefox`.
8. Smoke test: `npm run check` in Fit Vaulted, then start Claude there and ask where things stand. It should read HANDOFF and give the resume point.

Nothing changes in the cloud. Vercel, Supabase, Resend, DNS and the GitHub Actions secrets don't care which machine pushed.

## 3. Using two machines at once
Project files sync through git already. **Pull before you start, push when you finish.** Claude pushes at the end of every session, so the main habit is `git pull` (or telling Claude to pull) when you sit down at the other machine.

Claude's own files don't sync by themselves. Without the step below, each machine builds its own memory and the two drift apart. The repo docs (CLAUDE.md, HANDOFF) stay identical because they're in git, and they carry the real project state. So drift costs remembered preferences, not project knowledge.

**Recommended fix: a private GitHub repo for Claude's config.** Make the folder `C:\Users\mjohn\.claude\` itself a git repo, using a `.gitignore` that tracks only:
- `CLAUDE.md` (global notes)
- `settings.json` (leave out `settings.local.json` if it differs per machine)
- `skills\`
- `projects\*\memory\` (about 1.3 MB in all on 2026-11-09)

Ignore everything else: `.credentials.json`, session transcripts (`projects\*\*.jsonl`), `cache`, `history.jsonl`, `file-history`, `telemetry`, `shell-snapshots`, `session-env`, `paste-cache`, `plugins`, `state`, `backups`, `ide`, `sessions`, and the device-ID files.

The routine is the same as for the projects: pull `.claude` before a session, push after. Don't run sessions on both machines at the same time, or the two memories will conflict. Avoid OneDrive or Dropbox for the live `.claude` folder; they sync mid-write and lock files.

Fallback if you don't want a repo: treat one machine as primary, and copy `.claude\projects\*\memory\` and `CLAUDE.md` across whenever you switch for more than a day.

## 4. Before retiring a machine
- [ ] DockFlow (and any other repo) committed and pushed: run `git status` in each repo
- [ ] `.claude` config repo pushed, or memory copied
- [ ] `.env.local` files copied, and `npm run dev` works on the new machine
- [ ] Claude on the new machine remembers the project
- [ ] Downloads checked for unfiled specs
- [ ] Signed out of GitHub, Claude and browser sessions on the old machine
