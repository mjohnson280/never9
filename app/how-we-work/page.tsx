const article = {
  eyebrow: 'Never9 Framework',
  title: 'Build in partnership with the people doing the work',
  intro:
    'Never9 focuses on workflow-specific applications built with operators, not around them. This page explains the practical execution model we use to move from workflow friction to useful software quickly.',
  sections: [
    {
      heading: '1) Find the repeated pain point with stakeholders',
      body: 'We start by identifying recurring workflow friction with the people closest to execution. The point is not to gather abstract requirements. The point is to isolate a repeated operational bottleneck.',
    },
    {
      heading: '2) Build around the actual workflow',
      body: 'We design and ship around the process as it really runs today. The first version is focused and practical, so teams can use it quickly and give feedback from real work.',
    },
    {
      heading: '3) Iterate quickly from live usage',
      body: 'After launch, we tighten the system based on operator behavior, handoff failures, and decision latency. This keeps momentum high and risk low.',
    },
    {
      heading: '4) Scale or maintain an exclusive advantage',
      body: 'Once the system proves value, the company can keep it as an internal operational edge or turn it into a product opportunity for adjacent users.',
    },
  ],
};

const workflowDiagram = [
  '[Workflow friction identified]',
  '      ->',
  '[Operator + stakeholder inputs]',
  '      ->',
  '[Focused application shipped]',
  '      ->',
  '[Live usage feedback loop]',
  '      ->',
  '[Operational edge or product path]',
];

const feedbackLoopDiagram = [
  '[Ship]',
  '  -> [Observe]',
  '  -> [Prioritize]',
  '  -> [Improve]',
  '  -> [Ship again]',
];

export default function HowWeWorkPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-20 pt-12 md:pt-16">
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="/"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60"
        >
          Back to home
        </a>
        <span className="text-ink/35">|</span>
        <a
          href="/contact"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60"
        >
          Start a conversation
        </a>
      </div>

      <article className="mt-8 rounded-3xl border border-ink/12 bg-white/80 p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">
          {article.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 text-base leading-8 text-ink/74">{article.intro}</p>

        <section className="mt-8 rounded-2xl border border-ink/10 bg-sand/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            Delivery map
          </p>
          <pre className="mt-4 overflow-x-auto whitespace-pre text-sm leading-7 text-ink/78">
            {workflowDiagram.join('\n')}
          </pre>
        </section>

        <div className="mt-10 space-y-9">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-ink">{section.heading}</h2>
              <p className="mt-3 text-sm leading-8 text-ink/74">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-ink/10 bg-sand/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            Iteration loop
          </p>
          <pre className="mt-4 overflow-x-auto whitespace-pre text-sm leading-7 text-ink/78">
            {feedbackLoopDiagram.join('\n')}
          </pre>
        </section>

        <a
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
        >
          Start a conversation
        </a>
      </article>
    </main>
  );
}
