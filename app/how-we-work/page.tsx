export const metadata = {
  title: 'How We Work | Never9',
  description:
    'Never9 embeds an engineer in your workflow, diagnoses the real problem, and builds the custom fix. Three ways to work with us: embedded engagements, incubated products, and spinouts.',
};

const steps = [
  {
    number: '01',
    title: 'Sit alongside the people doing the work',
    body: 'We embed in the function, with the executives who own the problem and the operators who live it every day. Not an intake form. Not a discovery phase measured in months. A working session where we hear what is slow, what is repetitive, and what everyone has stopped complaining about because they assume it cannot change.',
  },
  {
    number: '02',
    title: 'Diagnose the workflow, not the symptom',
    body: 'The stated problem is rarely the real one. We map how the work actually runs, look at the data, and name the step worth changing. Then we write requirements tight enough to build from: what the solution has to do, in what order, and what it can leave out.',
  },
  {
    number: '03',
    title: 'Build the custom fix',
    body: 'A small senior team builds around the real workflow and gets the solution into use fast, while it is still cheap to change. AI-assisted development means the first usable version arrives in weeks, and every week after that is informed by live usage instead of assumptions.',
  },
  {
    number: '04',
    title: 'Get to market, or perform better in it',
    body: 'The fix ships, and we stay with it until it is doing its job. For a new product, that means reaching customers. For an operation, that means running faster, with fewer workarounds and a number that actually moved.',
  },
];

const tracks = [
  {
    eyebrow: 'You own it',
    title: 'Embedded engagement',
    body: 'We join your team on contract. An embedded engineer, and a product leader when the scope calls for one, sits inside your function for the length of the build. We re-engineer the workflow, build the custom solution, and hand over the code, the infrastructure, and the accounts.',
    href: '/rapid-contract-development',
    cta: 'Rapid contract development',
  },
  {
    eyebrow: 'We own it, built with you',
    title: 'Incubated product',
    body: 'You have a workflow problem that others in your industry share. We build the product in lockstep with you. You get it first and shape it from real use. Never9 releases it as a company under its umbrella.',
    href: '#studio',
    cta: 'How incubation works',
  },
  {
    eyebrow: 'We share it',
    title: 'Spinout',
    body: 'You bring the domain and the daily use. We bring the build. The result can stay a proprietary edge inside your company, or spin out as a standalone company with shared ownership and an early exit in mind.',
    href: '#studio',
    cta: 'How spinouts work',
  },
];

const incubationSteps = [
  {
    title: 'A stakeholder names the problem',
    body: 'An operator inside a real business identifies a workflow problem that off-the-shelf software does not solve. It does not have to be expensive. It has to be persistent, and it has to be shared by others in the industry.',
  },
  {
    title: 'We build in lockstep',
    body: 'We embed with that stakeholder and build the product against their actual workflow. They are the first user and the loudest critic. Every release is shaped by what happens when they use it.',
  },
  {
    title: 'It becomes a Never9 company',
    body: 'Once the product works for the stakeholder who lived the problem, Never9 releases it to the rest of the industry as a standalone company. The stakeholder keeps a solution built for them. Never9 keeps the company.',
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
          Never9 is a rapid development studio. We sit inside an organization as an embedded
          engineer, find the workflow problem that off-the-shelf software cannot fix, and build the
          custom solution. Sometimes the client owns it. Sometimes it becomes a Never9 product built
          in lockstep with them. Either way, we help them get to market, or perform better within it.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-ink">
            Do not adapt the work to the tool. Redesign the work around what is now possible.
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-ink/74">
            <p>
              Most teams run on SaaS built for the average case. The gaps get filled with
              spreadsheets, manual handoffs, and workarounds nobody owns. Teams adapt their work to
              fit the software instead of the other way around.
            </p>
            <p>
              Layering AI or another tool onto an existing workflow captures a fraction of the value.
              The far larger return comes when the workflow itself is redesigned around what software
              can now do. That is a reason to build custom and collaboratively, not to buy off the
              shelf and adapt inside it. The open question inside most companies is who actually
              drives that change. The answer that works is an engineer embedded in the function,
              someone who can both diagnose the problem and build the fix.
            </p>
            <p>
              The cost, speed, and risk of doing that have collapsed. Traditional consultancies were
              designed when shipping software was slow and expensive, so they still bring large teams,
              long discovery, and decks before code. AI-assisted development makes a different model
              practical: a small senior team that sits inside the organization, redesigns the
              workflow, ships a custom solution in weeks, and stays with it until it is doing its job.
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
              The build is not the finish line. We stay with the solution until it is doing its job,
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
          <h2 className="text-2xl font-semibold text-ink">Three ways to work with Never9</h2>
          <p className="mt-3 text-sm leading-7 text-ink/60">
            Same team, same method. The difference is who owns what ships.
          </p>
          <div className="mt-6 space-y-4">
            {tracks.map((track) => (
              <div key={track.title} className="rounded-2xl border border-ink/12 bg-sand/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
                  {track.eyebrow}
                </p>
                <h3 className="mt-2 font-semibold text-ink">{track.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/74">{track.body}</p>
                <a
                  href={track.href}
                  className="mt-4 inline-block text-sm font-semibold text-ember transition hover:text-ink"
                >
                  {track.cta} &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="studio" className="mt-12">
          <h2 className="text-2xl font-semibold text-ink">
            Incubation: how a client workflow becomes a Never9 company
          </h2>
          <p className="mt-4 text-sm leading-8 text-ink/74">
            The products Never9 owns did not start as ideas. Each one started as a specific workflow
            problem inside a specific business, identified by the people who lived it.
          </p>
          <p className="mt-4 text-sm leading-8 text-ink/74">
            <a href="https://dockitflo.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-ember transition hover:text-ink">DockItFlo</a>{' '}
            is the example. A large litigation firm was processing PACER notices by hand: court
            emails read one at a time, deadlines keyed into calendars, errors caught late if at all.
            Rather than bolt a tool onto that process, we redesigned it with the firm and built
            DockItFlo against their real docket. It now reads the notice, extracts the dates, and
            writes them to the attorney&apos;s calendar with a human in the loop. The firm got the fix.
            Never9 got a company.
          </p>
          <div className="mt-8 space-y-8">
            {incubationSteps.map((step, index) => (
              <div key={step.title} className="flex gap-6">
                <span className="w-10 shrink-0 text-2xl font-light text-ink/25">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-8 text-ink/74">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-ink">Spinouts: two outcomes, both valuable</h2>
          <p className="mt-4 text-sm leading-8 text-ink/74">
            When the stakeholder wants a share of what gets built, we co-build it. The product proves
            itself in their business first. Once it works, the path splits.
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
          <h2 className="text-2xl font-semibold text-ink">Why build small and sell early?</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-ink/74">
            <p>
              The venture model rewards massive exits. Most companies never get there, and by the
              time they don&apos;t, the founders have been diluted, the runway is gone, and the window
              has closed.
            </p>
            <p>
              Never9&apos;s incubated products and spinouts run on a different thesis: build something
              real inside a business that needs it, prove it works, and sell it early for $1&ndash;3M
              instead of chasing a $50M outcome that may never come. We&apos;ve been on the other side
              of that equation. We&apos;re not doing it again.
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
