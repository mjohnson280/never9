export const metadata = {
  title: 'How We Work | Never9',
  description:
    "Never9 builds workflow-specific applications in partnership with operators. Here's the model.",
};

const steps = [
  {
    number: '01',
    title: 'Find the repeated pain point with stakeholders',
    body: 'We start by identifying recurring workflow friction with the people closest to execution. Not abstract requirements. A real, repeated operational bottleneck that is costing time, headcount, or visibility.',
  },
  {
    number: '02',
    title: 'Build around the actual workflow',
    body: 'We design and ship around the process as it actually runs today — not the idealized version. The first version is focused and practical so teams can use it quickly and give feedback from real work.',
  },
  {
    number: '03',
    title: 'Iterate quickly from live usage',
    body: 'After launch, we tighten the system based on operator behavior, handoff failures, and decision latency. Momentum stays high. Risk stays low.',
  },
  {
    number: '04',
    title: 'Scale or maintain an exclusive advantage',
    body: 'Once the system proves value, the path splits. Keep it proprietary as an internal operational edge — or open it to others with the same problem and turn it into a product. Either way, ownership stays consolidated and the exit comes early, not after years of dilution.',
  },
];

const outcomes = [
  {
    title: 'Keep the Advantage',
    items: [
      'Maintain a custom internal edge',
      'Fit the tool tightly to your operation',
      'Acquire and own the solution outright',
    ],
  },
  {
    title: 'Scale the Solution',
    items: [
      'Release to others with the same challenge',
      'Turn internal insight into a product opportunity',
      'Maintain ownership and upside as it grows',
    ],
  },
];

export default function HowWeWork() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-12 md:pt-16">
      <div className="flex flex-wrap items-center gap-3">
        <a href="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
          Back to home
        </a>
        <span className="text-ink/35">|</span>
        <a href="/contact" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
          Start a conversation
        </a>
      </div>

      <article className="mt-8 rounded-3xl border border-ink/12 bg-white/80 p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">
          Never9 Framework
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Build in partnership with the people doing the work
        </h1>
        <p className="mt-5 text-base leading-8 text-ink/74">
          Most software gets built around assumptions. We build around operators — the people closest
          to the friction, the workarounds, and the actual workflow.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-ink">
            The old model is broken for most companies.
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-ink/74">
            <p>
              Traditional software development required two things most teams couldn&apos;t afford: time
              and engineers. Venture-backed startups raised large rounds, hired expensive teams, and
              spent years building toward a massive exit — one that rarely came, or came too late.
              Off-the-shelf SaaS filled the gap, but it was never quite right. Teams adapted their
              work to fit the software instead of the other way around.
            </p>
            <p>
              AI-assisted development changes the equation. Focused, workflow-specific applications
              can now be built at a speed and cost profile that wasn&apos;t practical even two years ago.
              Never9 is built around that shift.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-ink">The Never9 model</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-ink/74">
            <p>
              We partner directly with the stakeholder who has the problem. They bring domain
              knowledge and operational context. We bring the build. Together we move fast, ship
              something useful early, and iterate from real usage — not from a requirements doc
              written six months before launch.
            </p>
            <p>
              The stakeholder contributes to the build. In return, they get a tool purpose-built for
              their operation — and upside if it scales.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-ink">How it works in practice</h2>
          <div className="mt-8 space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <span className="w-10 shrink-0 text-2xl font-light text-ink/25">{step.number}</span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-8 text-ink/74">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-ink">Two outcomes, both valuable</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {outcomes.map((col) => (
              <div key={col.title} className="rounded-2xl border border-ink/12 bg-sand/60 p-6">
                <h3 className="font-semibold text-ink">{col.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-ink/74">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 text-ink/40">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-ink">Why sell early?</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-ink/74">
            <p>
              The venture model rewards massive exits. Most companies never get there — and by the
              time they don&apos;t, the founders have been diluted, the runway is gone, and the window
              has closed.
            </p>
            <p>
              Never9 is built around a different thesis: build something real, prove it works, and
              sell it early for $1–3M instead of chasing a $50M outcome that may never come. We&apos;ve
              been on the other side of that equation. We&apos;re not doing it again.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            Start a Conversation →
          </a>
          <a
            href="https://stage.never9.ai/what-does-never9-mean"
            className="inline-flex rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ink/5"
          >
            What Does Never9 Mean →
          </a>
        </div>
      </article>
    </main>
  );
}
