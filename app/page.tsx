export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-24">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink/70">
            Never9
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-ink md:text-7xl">
            Build the first sharp version fast, then evolve it with intent.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-ink/72">
            This repository is the launchpad for Never9. Production will live on
            never9.ai, stage will carry approvals, and feature branches will
            stay experimental.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://never9.ai"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Future Production Domain
            </a>
            <a
              href="#workflow"
              className="rounded-full border border-ink/15 bg-white/80 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/30"
            >
              Branch Workflow
            </a>
          </div>
        </div>
        <div className="rounded-[36px] border border-white/70 bg-white/70 p-8 shadow-glow backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ember">
            Environments
          </p>
          <div id="workflow" className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-semibold text-ink/60">Production</p>
              <p className="mt-1 text-2xl font-semibold text-ink">main</p>
              <p className="mt-1 text-sm text-ink/65">www.never9.ai</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink/60">Stage</p>
              <p className="mt-1 text-2xl font-semibold text-ink">stage</p>
              <p className="mt-1 text-sm text-ink/65">stage.never9.ai</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink/60">Feature Work</p>
              <p className="mt-1 text-2xl font-semibold text-ink">feature/*</p>
              <p className="mt-1 text-sm text-ink/65">Vercel preview URLs</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
