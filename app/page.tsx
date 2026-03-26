export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-20 pt-10 md:pb-24 md:pt-16">
      <header className="flex items-center justify-between">
        <p className="inline-flex rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink/70">
          Never9
        </p>
        <a
          href="#contact"
          className="rounded-full border border-ink/20 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-ink/40"
        >
          Start a Project
        </a>
      </header>

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-6">
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-ink md:text-7xl">
            Ship the sharp first version, then scale with discipline.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-ink/72">
            Never9 helps teams launch high-leverage product experiences in
            weeks, not quarters. We pair focused strategy with practical
            execution so momentum never gets lost.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Explore Services
            </a>
            <a
              href="#process"
              className="rounded-full border border-ink/15 bg-white/80 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/30"
            >
              How We Work
            </a>
          </div>
        </div>

        <aside className="rounded-[36px] border border-white/70 bg-white/70 p-8 shadow-glow backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ember">
            At a Glance
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm font-semibold text-ink/60">Typical MVP Timeline</p>
              <p className="mt-1 text-2xl font-semibold text-ink">4-8 weeks</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink/60">Delivery Model</p>
              <p className="mt-1 text-2xl font-semibold text-ink">Small, senior team</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink/60">Engagement Focus</p>
              <p className="mt-1 text-2xl font-semibold text-ink">Speed + quality</p>
            </div>
          </div>
        </aside>
      </section>

      <section id="services" className="mt-20">
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">What Never9 delivers</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-3xl border border-ink/10 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-ink">Positioning and Product Strategy</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              Clarify the problem, the audience, and the first wedge so your launch has a real market narrative.
            </p>
          </article>
          <article className="rounded-3xl border border-ink/10 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-ink">Design and Frontend Systems</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              Build a clean interface and reusable design patterns that can grow without visual or technical drift.
            </p>
          </article>
          <article className="rounded-3xl border border-ink/10 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-ink">Launch and Iteration Cadence</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              Instrument feedback loops and ship in tight increments so each release improves product confidence.
            </p>
          </article>
        </div>
      </section>

      <section id="process" className="mt-20 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-ink/10 bg-white/75 p-7">
          <h2 className="text-3xl font-semibold text-ink">A practical build process</h2>
          <ol className="mt-6 space-y-5 text-sm leading-7 text-ink/72">
            <li>
              <span className="font-semibold text-ink">1. Direction:</span> define scope, success metrics, and non-negotiables.
            </li>
            <li>
              <span className="font-semibold text-ink">2. Execution:</span> design and ship the smallest complete version fast.
            </li>
            <li>
              <span className="font-semibold text-ink">3. Evolution:</span> iterate from real user signals, not assumptions.
            </li>
          </ol>
        </div>

        <div className="rounded-3xl border border-ink/10 bg-white/75 p-7">
          <h2 className="text-3xl font-semibold text-ink">Branch-based delivery model</h2>
          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-ink/55">Production</p>
              <p className="mt-1 text-xl font-semibold text-ink">main -&gt; never9.ai</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-ink/55">Staging</p>
              <p className="mt-1 text-xl font-semibold text-ink">stage -&gt; stage.never9.ai</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-ink/55">Development</p>
              <p className="mt-1 text-xl font-semibold text-ink">feature/* -&gt; preview URLs</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-20 rounded-[36px] border border-ink/15 bg-ink p-10 text-white">
        <h2 className="text-3xl font-semibold md:text-4xl">Ready to build what matters?</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85">
          Bring the target outcome, timeline, and constraints. Never9 can shape the roadmap, build the first version,
          and set up a repeatable release process for your team.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:hello@never9.ai"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/90"
          >
            hello@never9.ai
          </a>
          <a
            href="#"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
          >
            Book a discovery call
          </a>
        </div>
      </section>
    </main>
  );
}
