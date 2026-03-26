const content = {
  brand: 'Never9',
  navCta: 'Start a Conversation',
  heroTitle: 'Custom Software For The Work SaaS Was Never Built To Handle',
  heroBody:
    'Never9 is a rapid development house that partners directly with end users to design and launch workflow-specific applications, giving companies a practical alternative to off-the-shelf SaaS and the leverage of an embedded product team.',
  heroPrimaryCta: 'Start a Conversation',
  heroSecondaryCta: 'See How We Work',
  heroSupportLine:
    'Workflow-specific applications | built with end users | faster than traditional development',
  coreFocusTitle: 'Core Focus',
  problemTitle:
    'Most teams are still choosing between bad-fit software and slow custom builds.',
  approachTitle: 'Build in partnership with the people doing the work',
  outcomesTitle: 'The solution can stay proprietary or become a product',
  whyNowTitle: 'The build-versus-buy equation has changed',
  solutionTypesTitle: 'The right tool depends on the workflow',
  closingTitle: 'Bring the workflow problem, not a full spec',
  closingBody:
    'If your team is compensating for software that does not fit the work, Never9 can help turn that friction into a purpose-built system.',
};

const coreFocusItems = [
  { label: 'Buyer Profile', value: 'Operators and functional leaders' },
  { label: 'Pain Pattern', value: 'Manual workarounds around software gaps' },
  { label: 'Delivery Objective', value: 'Useful systems shipped quickly' },
];

const problemPoints = [
  'Generic software often forces awkward workarounds that make operations slower, less visible, and harder to improve.',
  'Spreadsheets and manual handoffs accumulate around system gaps, while traditional custom development has historically been too expensive or too slow for many teams.',
  'AI-assisted development changes that equation. Focused applications are now feasible at a speed and cost profile that was not practical even a few years ago.',
];

const approachSteps = [
  {
    title: 'Find the repeated pain point',
    body: 'Identify the workflow friction that is costing time, margin, or reliability.',
  },
  {
    title: 'Work with end users and stakeholders',
    body: 'Map the real process with the people who execute it every day.',
  },
  {
    title: 'Build around the actual workflow',
    body: 'Ship a focused application built for how the work is really done.',
  },
  {
    title: 'Iterate quickly from live usage',
    body: 'Improve fast based on real operations and deliver useful capability early.',
  },
];

const outcomes = [
  {
    title: 'Keep the Advantage',
    points: [
      'Maintain a custom internal edge',
      'Fit the tool tightly to your operation',
      'Acquire and own the solution',
    ],
  },
  {
    title: 'Scale the Solution',
    points: [
      'Release it to others with similar challenges',
      'Turn internal insight into a product opportunity',
      'maintain ownership and upside',
    ],
  },
];

const whyNowPoints = [
  'AI coding tools significantly increase development leverage for focused internal software.',
  'Custom applications are now feasible at a different speed and cost profile.',
  'Never9 gives clients the effect of an embedded product and engineering team without requiring one upfront.',
];

const solutionTypes = [
  'Internal workflow systems',
  'Reporting and visibility tools',
  'Field operations apps',
  'Quoting, estimating, and configuration tools',
  'Approvals and handoff systems',
  'Client portals',
  'Data intake and process orchestration tools',
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-10 md:pt-16">
      <header className="flex items-center justify-between">
        <p className="inline-flex rounded-full border border-ink/10 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/70">
          {content.brand}
        </p>
        <a
          href="#contact"
          className="rounded-full border border-ink/20 bg-white/85 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-ink/40"
        >
          {content.navCta}
        </a>
      </header>

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-6">
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-ink md:text-7xl">
            {content.heroTitle}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-ink/74">{content.heroBody}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              {content.heroPrimaryCta}
            </a>
            <a
              href="#approach"
              className="rounded-full border border-ink/15 bg-white/85 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/30"
            >
              {content.heroSecondaryCta}
            </a>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            {content.heroSupportLine}
          </p>
        </div>

        <aside className="rounded-[34px] border border-white/70 bg-white/75 p-8 shadow-glow backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ember">
            {content.coreFocusTitle}
          </p>
          <div className="mt-6 space-y-6">
            {coreFocusItems.map((item) => (
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
          {content.problemTitle}
        </h2>
        <div className="mt-6 grid gap-4 text-sm leading-7 text-ink/72 md:grid-cols-2">
          {problemPoints.map((point, index) => (
            <p key={point} className={index === 2 ? 'md:col-span-2' : undefined}>
              {point}
            </p>
          ))}
        </div>
      </section>

      <section id="approach" className="mt-20">
        <h2 className="max-w-3xl text-3xl font-semibold text-ink md:text-4xl">
          {content.approachTitle}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {approachSteps.map((step, index) => (
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

      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">{content.outcomesTitle}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {outcomes.map((outcome) => (
            <article key={outcome.title} className="rounded-3xl border border-ink/10 bg-white/78 p-7">
              <h3 className="text-2xl font-semibold text-ink">{outcome.title}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-ink/72">
                {outcome.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl border border-ink/12 bg-white/78 p-8 md:p-10">
        <h2 className="max-w-3xl text-3xl font-semibold text-ink md:text-4xl">
          {content.whyNowTitle}
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-7 text-ink/72">
          {whyNowPoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">
          {content.solutionTypesTitle}
        </h2>
        <div className="mt-8 grid gap-4 text-sm leading-7 text-ink/74 sm:grid-cols-2 lg:grid-cols-3">
          {solutionTypes.map((item) => (
            <p key={item} className="rounded-2xl border border-ink/10 bg-white/78 px-4 py-3">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-20 rounded-[36px] border border-ink/15 bg-ink p-10 text-white">
        <h2 className="text-3xl font-semibold md:text-4xl">{content.closingTitle}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85">{content.closingBody}</p>
        <a
          href="mailto:hello@never9.ai"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/90"
        >
          {content.navCta}
        </a>
      </section>
    </main>
  );
}
