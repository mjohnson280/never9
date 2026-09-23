# Never9 docs

One subfolder per thing this repo owns. The folder names the role, not the brand, so a rename of the product does not move files.

| Folder | What lives here |
|---|---|
| `site/` | The never9.ai website: positioning, copy decisions, page notes. |
| `launchpad/` | The incubation toolkit (`scripts/new-project.mjs`, `templates/`, the `/incubate-project` skill) and its productized successor, **Joist** (working name; may become Joist Kit). |

Conventions:
- Inside a folder, no project prefix on file names. The folder carries it. `launchpad/concept.md`, not `launchpad/cursor-lite-concept.md`.
- Type-first names in kebab-case: `concept.md`, `phased-plan.md`, `requirements.md`, `decisions.md`, `handoff.md`.
- Dated records (session notes, reviews, status updates) start with the date: `2026-09-23-studio-call.md`.
- Incubated products keep their docs in their own repo. The status board in `CLAUDE.md` holds one line per product; this folder holds nothing about them.
