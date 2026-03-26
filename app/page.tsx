export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-10 md:pt-16">
      <header className="flex items-center justify-between">
        <p className="inline-flex rounded-full border border-ink/10 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/70">
          Never9
        </p>
        <a
          href="#contact"
          className="rounded-full border border-ink/20 bg-white/85 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-ink/40"
        >
          Start a Conversation
        </a>
      </header>

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-6">
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-ink md:text-7xl">
            Custom Software For The Work SaaS Was Never Built To Handle
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-ink/74">
            Never9 is a rapid development house that partners directly with end users to design and launch
            workflow-specific applications, giving companies a practical alternative to off-the-shelf SaaS and the
            leverage of an embedded product team.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Start a Conversation
            </a>
            <a
              href="#approach"
              className="rounded-full border border-ink/15 bg-white/85 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/30"
            >
              See How We Work
            </a>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            Workflow-specific applications | built with end users | faster than traditional development
          </p>
        </div>

        <aside className="rounded-[34px] border border-white/70 bg-white/75 p-8 shadow-glow backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ember">Core Focus</p>
          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm font-semibold text-ink/60">Buyer Profile</p>
              <p className="mt-1 text-xl font-semibold text-ink">Operators and functional leaders</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink/60">Pain Pattern</p>
              <p className="mt-1 text-xl font-semibold text-ink">Manual workarounds around software gaps</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink/60">Delivery Objective</p>
              <p className="mt-1 text-xl font-semibold text-ink">Useful systems shipped quickly</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-20 rounded-3xl border border-ink/10 bg-white/75 p-8 md:p-10">
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-ink md:text-4xl">
          Most teams are still choosing between bad-fit software and slow custom builds.
        </h2>
        <div className="mt-6 grid gap-4 text-sm leading-7 text-ink/72 md:grid-cols-2">
          <p>
            Generic software often forces awkward workarounds that make operations slower, less visible, and harder to
            improve.
          </p>
          <p>
            Spreadsheets and manual handoffs accumulate around system gaps, while traditional custom development has
            historically been too expensive or too slow for many teams.
          </p>
          <p className="md:col-span-2">
            AI-assisted development changes that equation. Focused applications are now feasible at a speed and cost
            profile that was not practical even a few years ago.
          </p>
        </div>
      </section>

      <section id="approach" className="mt-20">
        <h2 className="max-w-3xl text-3xl font-semibold text-ink md:text-4xl">
          Build in partnership with the people doing the work.
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-3xl border border-ink/10 bg-white/78 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">Step 1</p>
            <h3 className="mt-2 text-lg font-semibold text-ink">Find the repeated pain point</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">Identify the workflow friction that is costing time, margin, or reliability.</p>
          </article>
          <article className="rounded-3xl border border-ink/10 bg-white/78 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">Step 2</p>
            <h3 className="mt-2 text-lg font-semibold text-ink">Work with end users and stakeholders</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">Map the real process with the people who execute it every day.</p>
          </article>
          <article className="rounded-3xl border border-ink/10 bg-white/78 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">Step 3</p>
            <h3 className="mt-2 text-lg font-semibold text-ink">Build around the actual workflow</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">Ship a focused application built for how the work is really done.</p>
          </article>
          <article className="rounded-3xl border border-ink/10 bg-white/78 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">Step 4</p>
            <h3 className="mt-2 text-lg font-semibold text-ink">Iterate quickly from live usage</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">Improve fast based on real operations and deliver useful capability early.</p>
          </article>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">
          The solution can stay proprietary or become a product.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-ink/10 bg-white/78 p-7">
            <h3 className="text-2xl font-semibold text-ink">Keep the Advantage</h3>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-ink/72">
              <li>- Maintain a custom internal edge</li>
              <li>- Fit the tool tightly to your operation</li>
            </ul>
          </article>
          <article className="rounded-3xl border border-ink/10 bg-white/78 p-7">
            <h3 className="text-2xl font-semibold text-ink">Scale the Solution</h3>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-ink/72">
              <li>- Release it to others with similar challenges</li>
              <li>- Turn internal insight into a product opportunity</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mt-20 rounded-3xl border border-ink/12 bg-white/78 p-8 md:p-10">
        <h2 className="max-w-3xl text-3xl font-semibold text-ink md:text-4xl">
          The build-versus-buy equation has changed.
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-7 text-ink/72">
          <p>AI coding tools significantly increase development leverage for focused internal software.</p>
          <p>Custom applications are now feasible at a different speed and cost profile.</p>
          <p>
            Never9 gives clients the effect of an embedded product and engineering team without requiring one upfront.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">The right tool depends on the workflow.</h2>
        <div className="mt-8 grid gap-4 text-sm leading-7 text-ink/74 sm:grid-cols-2 lg:grid-cols-3">
          <p className="rounded-2xl border border-ink/10 bg-white/78 px-4 py-3">Internal workflow systems</p>
          <p className="rounded-2xl border border-ink/10 bg-white/78 px-4 py-3">Reporting and visibility tools</p>
          <p className="rounded-2xl border border-ink/10 bg-white/78 px-4 py-3">Field operations apps</p>
          <p className="rounded-2xl border border-ink/10 bg-white/78 px-4 py-3">Quoting, estimating, and configuration tools</p>
          <p className="rounded-2xl border border-ink/10 bg-white/78 px-4 py-3">Approvals and handoff systems</p>
          <p className="rounded-2xl border border-ink/10 bg-white/78 px-4 py-3">Client portals</p>
          <p className="rounded-2xl border border-ink/10 bg-white/78 px-4 py-3">Data intake and process orchestration tools</p>
        </div>
      </section>

      <section id="contact" className="mt-20 rounded-[36px] border border-ink/15 bg-ink p-10 text-white">
        <h2 className="text-3xl font-semibold md:text-4xl">Bring the workflow problem, not a full spec.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85">
          If your team is compensating for software that does not fit the work, Never9 can help turn that friction
          into a purpose-built system.
        </p>
        <a
          href="mailto:hello@never9.ai"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/90"
        >
          Start a Conversation
        </a>
      </section>
    </main>
  );
}
