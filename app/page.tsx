// Edit copy in this object. Layout/styles are kept below.
const pageCopy = {
  header: {
    brand: 'Never9',
    cta: 'Start a Conversation',
  },
  hero: {
    title: 'Diagnose the real problem. Build the fix. Get to market, or perform better in it.',
    body: 'Never9 is a rapid development studio. We sit inside your organization as an embedded engineer, find the workflow problem that off-the-shelf software cannot fix, and build the custom solution. Sometimes you own it. Sometimes it becomes a Never9 product built in lockstep with you. Either way, we will help you get to market, or perform better within it.',
    primaryCta: 'Start a Conversation',
    secondaryCta: 'See How We Work',
    supportLine:
      'Embedded in your workflow | Small senior teams | Built to ship',
  },
  model: {
    title: 'The Never9 Model',
    items: [
      { label: 'Who we work with', value: 'Founders, executives, and the teams doing the work' },
      { label: 'What we build', value: 'Custom digital solutions for the workflow problems SaaS cannot fix' },
      { label: 'What you get', value: 'A way to market, or a better way to perform in it' },
    ],
  },
  problem: {
    title: 'Off-the-shelf software makes you change the work. We change the software.',
    points: [
      'Most teams run on SaaS built for the average case. The gaps get filled with spreadsheets, manual handoffs, and workarounds nobody owns. The problem does not have to be expensive to be worth fixing. It has to be persistent.',
      'The real gains come from re-engineering the workflow itself, not from layering another tool on top of it. That is process engineering, and it needs someone embedded in the function who can both diagnose the problem and build the fix.',
      'AI-assisted development makes that practical. A small senior team can now sit inside an organization, build a custom solution in weeks, and stay with it until it is doing its job. Never9 is built around that shift.',
    ],
  },
  nameStory: {
    badge: 'What Does Never9 Mean?',
    cta: 'Read the origin story',
    href: '/what-does-never9-mean',
  },
  approach: {
    title: 'How we work',
    steps: [
      {
        title: 'Sit alongside the people doing the work',
        body: 'We embed in the function, with the executives who own the problem and the operators who live it every day. No intake form. No discovery phase measured in months.',
      },
      {
        title: 'Diagnose the workflow, not the symptom',
        body: 'The stated problem is rarely the real one. We map how the work actually runs, look at the data, and name the step worth changing.',
      },
      {
        title: 'Build the custom fix',
        body: 'A small senior team builds a focused solution around the real workflow and gets it into use fast, while it is still cheap to change.',
      },
      {
        title: 'Get to market, or perform better in it',
        body: 'The fix ships, and we stay with it until it is doing its job: a product that reaches customers, or an operation that runs faster, with fewer workarounds and a number that moved.',
      },
    ],
  },
  tracks: {
    title: 'Three ways to work with Never9',
    intro: 'Same team, same method. The difference is who owns what ships.',
    items: [
      {
        eyebrow: 'You own it',
        title: 'Embedded engagement',
        body: 'We join your team on contract as an embedded engineer, re-engineer the workflow, build the custom solution, and hand it over. Fractional product, go-to-market, and finance leadership when it helps. You own the code, the accounts, and the result.',
        cta: 'Rapid contract development',
        href: '/rapid-contract-development',
      },
      {
        eyebrow: 'We own it, built with you',
        title: 'Incubated product',
        body: 'You have a workflow problem that others in your industry share. We build the product in lockstep with you: you get it first and shape it from real use, and Never9 releases it as a company under its umbrella.',
        cta: 'How incubation works',
        href: '/how-we-work#studio',
      },
      {
        eyebrow: 'We share it',
        title: 'Spinout',
        body: 'You bring the domain and the daily use. We bring the build. Keep the result as a proprietary edge inside your company, or spin it out as a standalone company with shared ownership and an early exit in mind.',
        cta: 'How spinouts work',
        href: '/how-we-work#studio',
      },
    ],
  },
  whyNow: {
    title: 'Why an embedded engineer beats another tool',
    points: [
      'The biggest gains from AI come from changing the workflow itself, not from adding tools to the existing one. The open question inside most companies is who actually drives that change. The answer that works is an engineer embedded in the function.',
      'AI coding tools give that engineer the leverage a whole team used to need. The constraint is no longer hands on keyboards. It is knowing which step to change and having someone in the room who can change it.',
      'Never9 gives organizations the effect of an embedded product and engineering team without hiring one first, and without the overhead a traditional consultancy bills for.',
    ],
  },
  solutionTypes: {
    title: 'What we build',
    items: [
      'Internal workflow systems',
      'Process re-engineering for a single function',
      'Customer and client portals',
      'Field operations apps',
      'Quoting, estimating, and configuration tools',
      'Reporting and visibility tools',
      'Data intake and process orchestration',
      'AI agents that do one specific job',
      'Products incubated from a client workflow',
    ],
  },
  contact: {
    title: 'Bring the problem, not a spec',
    body: 'Our team includes founders who built companies on large venture rounds and multi-year timelines. We have seen what deliberation costs. If your team is working around software that does not fit, or you have a workflow problem that others in your industry share, we will sit down, diagnose it, and tell you what we would build.',
    cta: 'Start a Conversation',
  },
};

function getDeploymentStamp(): string {
  const env = process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? 'unknown';
  const branch = process.env.VERCEL_GIT_COMMIT_REF ?? 'local';
  const sha = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? 'dev';
  return `${env} | ${branch} | ${sha}`;
}

export default function Page() {
  const deploymentStamp = getDeploymentStamp();

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-10 md:pt-16">
      <header className="flex items-center justify-between">
        <p className="inline-flex rounded-full border border-ink/10 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/70">
          {pageCopy.header.brand}
        </p>
        <nav className="flex items-center gap-5">
          <a
            href="/rapid-contract-development"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60 transition hover:text-ink"
          >
            Consulting
          </a>
          <a
            href="/current-projects"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60 transition hover:text-ink"
          >
            Current Projects
          </a>
          <a
            href="/what-does-never9-mean"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60 transition hover:text-ink"
          >
            About Never9
          </a>
          <a
            href="/contact"
            className="rounded-full border border-ink/20 bg-white/85 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-ink/40"
          >
            {pageCopy.header.cta}
          </a>
        </nav>
      </header>

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-6">
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-ink md:text-7xl">
            {pageCopy.hero.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-ink/74">{pageCopy.hero.body}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              {pageCopy.hero.primaryCta}
            </a>
            <a
              href="/how-we-work"
              className="rounded-full border border-ink/15 bg-white/85 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/30"
            >
              {pageCopy.hero.secondaryCta}
            </a>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            {pageCopy.hero.supportLine}
          </p>
        </div>

        <aside className="rounded-[34px] border border-white/70 bg-white/75 p-8 shadow-glow backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ember">
            {pageCopy.model.title}
          </p>
          <div className="mt-6 space-y-6">
            {pageCopy.model.items.map((item) => (
              <div key={item.label}>
                <p className="text-sm font-semibold text-ink/60">{item.label}</p>
                <p className="mt-1 text-xl font-semibold text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-20 rounded-3xl border border-ink/10 bg-white/75 p-8 md:p-10">
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-ink md:text-4xl">
          {pageCopy.problem.title}
        </h2>
        <div className="mt-6 grid gap-4 text-sm leading-7 text-ink/72 md:grid-cols-2">
          {pageCopy.problem.points.map((point, index) => (
            <p key={point} className={index === 2 ? 'md:col-span-2' : undefined}>
              {point}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-10 flex justify-center">
        <a
          href={pageCopy.nameStory.href}
          className="inline-flex items-center gap-3 rounded-full border border-ink/15 bg-white/85 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/35"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-ink/60">
            {pageCopy.nameStory.badge}
          </span>
          <span className="text-ember">{pageCopy.nameStory.cta}</span>
        </a>
      </section>

      <section id="approach" className="mt-20">
        <h2 className="max-w-3xl text-3xl font-semibold text-ink md:text-4xl">
          {pageCopy.approach.title}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pageCopy.approach.steps.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-ink/10 bg-white/78 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tracks" className="mt-20">
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">{pageCopy.tracks.title}</h2>
        <p className="mt-3 text-sm leading-7 text-ink/60">{pageCopy.tracks.intro}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pageCopy.tracks.items.map((track) => (
            <article
              key={track.title}
              className="flex flex-col rounded-3xl border border-ink/10 bg-white/78 p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">
                {track.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">{track.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-ink/72">{track.body}</p>
              <a
                href={track.href}
                className="mt-6 inline-flex w-fit rounded-full border border-ink/20 bg-white/85 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink/40"
              >
                {track.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl border border-ink/12 bg-white/78 p-8 md:p-10">
        <h2 className="max-w-3xl text-3xl font-semibold text-ink md:text-4xl">
          {pageCopy.whyNow.title}
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-7 text-ink/72">
          {pageCopy.whyNow.points.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">
          {pageCopy.solutionTypes.title}
        </h2>
        <div className="mt-8 grid gap-4 text-sm leading-7 text-ink/74 sm:grid-cols-2 lg:grid-cols-3">
          {pageCopy.solutionTypes.items.map((item) => (
            <p key={item} className="rounded-2xl border border-ink/10 bg-white/78 px-4 py-3">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-20 rounded-[36px] border border-ink/15 bg-ink p-10 text-white">
        <h2 className="text-3xl font-semibold md:text-4xl">{pageCopy.contact.title}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85">{pageCopy.contact.body}</p>
        <a
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/90"
        >
          {pageCopy.contact.cta}
        </a>
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.12em] text-white/55">
          Deployment stamp: {deploymentStamp}
        </p>
      </section>
    </main>
  );
}
