import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rapid Contract Development | Never9',
  description:
    'Never9 provides rapid contract development for teams that know their industry and need a solution built and launched. Tight requirements, first-principles builds, fast launches.',
  alternates: {
    canonical: '/rapid-contract-development',
  },
  openGraph: {
    title: 'Rapid Contract Development | Never9',
    description:
      'Rapid contract development with stakeholders who understand their industry. We design tight requirements and get solutions built and launched using first principles.',
    url: '/rapid-contract-development',
    type: 'website',
  },
};

// Edit copy in these objects. Layout/styles are kept below.
const pillars = [
  {
    title: 'Stakeholders who know the industry',
    body: 'We work directly with the people who understand the market, the regulation, and the daily friction. Their domain knowledge is the starting point, not something we reverse-engineer from a brief.',
  },
  {
    title: 'Requirements tight enough to build from',
    body: 'Before anything is built, we write down exactly what the solution has to do, in what order, and what it can leave out. Tight requirements are what make rapid development possible.',
  },
  {
    title: 'First-principles builds',
    body: 'We start from the actual problem, not from a template or a stack preference. AI-assisted development lets a small team ship a focused solution in weeks instead of quarters.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Whiteboard the problem with the operators',
    body: 'A working session with the people who own the problem. We map the workflow as it runs today, the deadline that matters, and what a usable first version has to include.',
  },
  {
    number: '02',
    title: 'Write the requirements',
    body: 'A short, ordered requirements document: modules, data model, dependencies, and governing dates. It is the contract for the build and the thing everyone can point to when scope drifts.',
  },
  {
    number: '03',
    title: 'Build and launch',
    body: 'We build against the requirements and deploy to a test site early so stakeholders are using the real thing while it is still cheap to change. Launch happens on the date the business needs, not when the backlog runs out.',
  },
  {
    number: '04',
    title: 'Hand off or keep going',
    body: 'Code, infrastructure, and accounts transfer cleanly to the client. From there we can step out, stay on part time, or keep building the next phase.',
  },
];

const services = [
  'Product requirements and roadmap',
  'Go-to-market plan and positioning',
  'Financial model and pricing',
  'Application design and build',
  'Launch, deployment, and handoff',
  'Fractional product, GTM, and finance leadership',
];

const fits = [
  'A founding team with deep industry expertise and a launch date, but no engineering team yet',
  'An operating company that needs a purpose-built system faster than a traditional custom build allows',
  'A startup that has shipped a first version and needs the next phase built and the business case modeled',
];

export default function RapidContractDevelopment() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:pt-16">
      <div className="flex flex-wrap items-center gap-3">
        <a href="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
          Back to home
        </a>
        <span className="text-ink/35">|</span>
        <a href="/contact" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
          Start a conversation
        </a>
      </div>

      <section className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">
            Never9 Consulting
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-ink md:text-6xl">
            Rapid contract development, built with the people who know the problem
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-ink/74">
            Never9&apos;s consulting arm partners with stakeholders who understand their industry and
            its problems. We design tight requirements and get solutions built and launched using
            first principles, on the timeline the business actually has.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Start a Conversation
            </a>
            <a
              href="/how-we-work"
              className="rounded-full border border-ink/15 bg-white/85 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/30"
            >
              See How We Work
            </a>
          </div>
        </div>

        <aside className="rounded-[34px] border border-white/70 bg-white/75 p-8 shadow-glow backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ember">
            What we take on
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-ink/74">
            {services.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                {service}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mt-20">
        <h2 className="max-w-3xl text-3xl font-semibold text-ink md:text-4xl">
          What rapid contract development means at Never9
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-3xl border border-ink/10 bg-white/78 p-6">
              <h3 className="text-lg font-semibold text-ink">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl border border-ink/12 bg-white/80 p-8 md:p-10">
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">How an engagement runs</h2>
        <div className="mt-10 space-y-10">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <span className="w-10 shrink-0 text-2xl font-light text-ink/25">{step.number}</span>
              <div>
                <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-8 text-ink/74">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Who this is for</h2>
          <p className="mt-4 text-sm leading-7 text-ink/72">
            Rapid contract development works when the client already knows the problem cold. We
            supply the requirements discipline, the build, and the launch. The client supplies the
            industry.
          </p>
        </div>
        <div className="space-y-4">
          {fits.map((fit) => (
            <p
              key={fit}
              className="rounded-2xl border border-ink/10 bg-white/78 px-5 py-4 text-sm leading-7 text-ink/74"
            >
              {fit}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl border border-ink/12 bg-white/78 p-8 md:p-10">
        <h2 className="max-w-3xl text-3xl font-semibold text-ink md:text-4xl">
          Why contract development is fast now
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-7 text-ink/72">
          <p>
            Traditional custom development was slow because requirements were written far from the
            work and engineering capacity was expensive. Both constraints have loosened. Stakeholders
            can sit in the build, and AI-assisted development lets a small team deliver a focused
            application at a speed and cost that was not practical a few years ago.
          </p>
          <p>
            Our team includes founders who built companies the old way, on large venture rounds and
            multi-year timelines. Never9&apos;s consulting engagements are structured to avoid that:
            short cycles, a clear launch date, and ownership that stays with the client.
          </p>
        </div>
      </section>

      <section className="mt-20 rounded-[36px] border border-ink/15 bg-ink p-10 text-white">
        <h2 className="text-3xl font-semibold md:text-4xl">Bring the problem and the deadline</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85">
          If you know your industry and need a solution built and launched on a real timeline, we
          can scope it in a single working session. No full spec required.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/90"
        >
          Start a Conversation
        </a>
      </section>
    </main>
  );
}
