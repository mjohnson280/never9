export const metadata = {
  title: 'How We Work | Never9',
  description:
    'Never9 sits with founders and executives, diagnoses the real problem, builds the fix, and helps you get to market or perform better within it. Two ways to work with us: embedded engagements and studio spinouts.',
};

const steps = [
  {
    number: '01',
    title: 'Sit with the executives',
    body: 'We start in the room with the people who own the problem and the people who live it every day. Not an intake form. Not a discovery phase measured in months. A working session where we hear what is slow, what is expensive, and what everyone has stopped complaining about because they assume it cannot change.',
  },
  {
    number: '02',
    title: 'Diagnose the real problem',
    body: 'The stated problem is rarely the expensive one. We map the workflow as it actually runs, look at the data, and name the thing that is worth fixing. Then we write requirements tight enough to build from: what the product has to do, in what order, and what it can leave out.',
  },
  {
    number: '03',
    title: 'Build the fix',
    body: 'A small senior team builds against those requirements and gets the product into real use fast, while it is still cheap to change. AI-assisted development means the first usable version arrives in weeks, and every week after that is informed by live usage instead of assumptions.',
  },
  {
    number: '04',
    title: 'Get to market, or perform better in it',
    body: 'The fix ships, and we stay with it until it is doing its job. For a new product, that means reaching customers. For an operation, that means running faster, with fewer workarounds and a number that actually moved.',
  },
];

const tracks = [
  {
    eyebrow: 'Engagements',
    title: 'Embedded with your team',
    body: 'We join founders and executive teams on contract. You get a product leader and one or two senior engineers who sit inside your company for the length of the build, plus fractional go-to-market and finance leadership when it helps. You own the code, the infrastructure, and the outcome.',
    href: '/rapid-contract-development',
    cta: 'Rapid contract development',
  },
  {
    eyebrow: 'Studio',
    title: 'Custom builds and incubated spinouts',
    body: 'We co-build with operators who have a problem worth productizing. The operator brings the domain and the daily use. We bring the build. The result can stay a proprietary edge inside the company, or spin out as a standalone company with shared ownership.',
    href: '#studio',
    cta: 'How spinouts work',
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
    title: 'Spin It Out',
    items: [
      'Release to others with the same problem',
      'Turn internal insight into a standalone company',
      'Share ownership and upside as it grows',
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
          How We Work
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Diagnose the real problem. Build the fix. Get to market, or perform better in it.
        </h1>
        <p className="mt-5 text-base leading-8 text-ink/74">
          Never9 is a rapid development studio. We sit with founders and executives as part of the
          team, find the problem that is actually costing them, and build the digital product that
          fixes it. Then we help you get to market, or perform better within it.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-ink">
            The old model was built for a different era.
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-ink/74">
            <p>
              Traditional consultancies were designed when shipping software was slow and expensive.
              That made large teams, long discovery phases, and decks before code a reasonable way to
              manage risk. Venture-backed startups ran the same play from the other side: raise a big
              round, hire an expensive team, spend years building toward an exit that rarely came.
            </p>
            <p>
              Off-the-shelf SaaS filled the gap, but it was never quite right. Teams adapted their
              work to fit the software instead of the other way around.
            </p>
            <p>
              AI-assisted development changes the equation. A small senior team can now diagnose,
              build, and launch a focused product at a speed and cost that was not practical even two
              years ago. The overhead the old model carried is now the slowest part of the project.
              Never9 is built around that shift.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-ink">The Never9 model</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-ink/74">
            <p>
              We work as part of the team, not as a vendor. The stakeholder brings the domain
              knowledge and the daily operational context. We bring the diagnosis and the build.
              Together we ship something useful early and iterate from real usage, not from a
              requirements document written six months before launch.
            </p>
            <p>
              The build is not the finish line. We stay with the product until it is doing its job,
              whether that is getting a new company to market or making an existing operation perform
              better. That changes how we scope, how we build, and what we are willing to promise.
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
          <h2 className="text-2xl font-semibold text-ink">Two ways to work with Never9</h2>
          <p className="mt-3 text-sm leading-7 text-ink/60">
            Same team, same method. The difference is who owns the result.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {tracks.map((track) => (
              <div key={track.title} className="flex flex-col rounded-2xl border border-ink/12 bg-sand/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
                  {track.eyebrow}
                </p>
                <h3 className="mt-2 font-semibold text-ink">{track.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-ink/74">{track.body}</p>
                <a
                  href={track.href}
                  className="mt-4 text-sm font-semibold text-ember transition hover:text-ink"
                >
                  {track.cta} &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="studio" className="mt-12">
          <h2 className="text-2xl font-semibold text-ink">Studio builds: two outcomes, both valuable</h2>
          <p className="mt-4 text-sm leading-8 text-ink/74">
            When we co-build with an operator, the product proves itself in their business first.
            Once it works, the path splits.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {outcomes.map((col) => (
              <div key={col.title} className="rounded-2xl border border-ink/12 bg-sand/60 p-6">
                <h3 className="font-semibold text-ink">{col.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-ink/74">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 text-ink/40">&mdash;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-ink">Why spin out and sell early?</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-ink/74">
            <p>
              The venture model rewards massive exits. Most companies never get there, and by the
              time they don&apos;t, the founders have been diluted, the runway is gone, and the window
              has closed.
            </p>
            <p>
              Never9&apos;s studio is built around a different thesis: build something real inside a
              business that needs it, prove it works, and sell it early for $1&ndash;3M instead of
              chasing a $50M outcome that may never come. We&apos;ve been on the other side of that
              equation. We&apos;re not doing it again.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            Start a Conversation &rarr;
          </a>
          <a
            href="/what-does-never9-mean"
            className="inline-flex rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ink/5"
          >
            What Does Never9 Mean &rarr;
          </a>
        </div>
      </article>
    </main>
  );
}
