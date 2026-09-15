import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rapid Contract Development | Never9',
  description:
    'Rapid contract development from Never9, a rapid development studio and incubator. An embedded engineer sits inside your organization, finds the workflow problem, and builds the custom fix in weeks. You own it.',
  alternates: {
    canonical: '/rapid-contract-development',
  },
  openGraph: {
    title: 'Rapid Contract Development | Never9',
    description:
      'Rapid contract development with an embedded engineer who sits alongside your team, re-engineers the workflow, and builds the custom fix.',
    url: '/rapid-contract-development',
    type: 'website',
  },
};

// Edit copy in these objects. Layout/styles are kept below.
const pillars = [
  {
    title: 'We embed in the function',
    body: 'The engagement starts in the room with the executives who own the problem and the operators who live it, not with an intake form. Their understanding of the industry, the regulation, and the daily friction is the starting point.',
  },
  {
    title: 'We re-engineer the workflow, not the tool',
    body: 'Months spent bending an off-the-shelf tool to fit is where the real cost hides. We redesign the workflow around what software can now do, name the step worth changing, and write requirements tight enough to build from. The problem does not have to be expensive. It has to be persistent.',
  },
  {
    title: 'We help you get to market, or operate more efficiently within it',
    body: 'The build is not the finish line. For founders, we tie it to a full go-to-market plan. For operators, we stay with it until the operation runs with fewer hands and fewer workarounds. Either way, you own what we build.',
  },
];

const engagements = [
  {
    name: 'Diagnosis',
    length: '1 to 2 weeks',
    body: 'A working session with the executive team and the operators, then a written diagnosis: the workflow as it runs today, the step worth changing, and requirements for the fix. Useful on its own, and the basis for a fixed-scope build.',
  },
  {
    name: 'Build Sprint',
    length: 'Fixed scope, measured in weeks',
    body: 'A small senior team builds the custom solution against the diagnosis and gets it into real use on a date the business actually needs. Deployed early so the people doing the work are using the real thing while it is still cheap to change.',
  },
  {
    name: 'Embedded Team',
    length: 'Ongoing, part time',
    body: 'An engineer, and a product leader when the scope calls for one, who sit inside your function on an ongoing basis. Workflow after workflow, plus product management, go-to-market, and financial modeling for founders who need a fractional executive team as much as they need code.',
  },
];

const services = [
  'Workflow diagnosis and requirements',
  'Process re-engineering for a single function',
  'Application design and build',
  'Launch, deployment, and go-to-market',
  'Go-to-market plan and positioning',
  'Financial model and pricing',
  'Fractional product, GTM, and finance leadership',
];

const fits = [
  'An operations team working around SaaS that does not fit, with a persistent workflow problem nobody has had time to fix',
  'A founding team with deep industry expertise and a launch date, but no engineering team yet',
  'An executive team that knows the workflow needs to change and needs someone in the room who can both diagnose it and build the fix',
  'A startup that has shipped a first version and needs the next phase built, and the business case modeled',
];

export default function RapidContractDevelopment() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24">

      <section className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">
            Never9 Engagements
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight text-ink md:text-6xl">
            Rapid contract development, embedded in your workflow
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-ink/74">
            Never9 is a rapid development studio and incubator. This is the contract side. We embed
            an engineer inside your organization, sit alongside the people doing the work, find the
            workflow problem, and build the custom fix in weeks. For founders, we tie the build to a
            full go-to-market plan. You own the code, the accounts, and the advantage. We help you
            get to market, or operate more efficiently within it.
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
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">Three ways to engage</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/60">
          Most engagements start with a diagnosis and move into a build. Some stay embedded.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {engagements.map((engagement) => (
            <article key={engagement.name} className="rounded-2xl border border-ink/12 bg-sand/60 p-6">
              <h3 className="text-xl font-semibold text-ink">{engagement.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
                {engagement.length}
              </p>
              <p className="mt-4 text-sm leading-7 text-ink/74">{engagement.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Who this is for</h2>
          <p className="mt-4 text-sm leading-7 text-ink/72">
            Rapid contract development works when the client knows their industry cold and has a
            workflow that needs to change. We supply the diagnosis, the build, and the launch. The
            client supplies the domain. And because a persistent workflow problem is rarely unique
            to one company, there is often a second conversation to have: keep the fix as your
            competitive edge, or partner with us to launch it as a product.
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
          Why an experienced operator gets you over the line faster
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-7 text-ink/72">
          <p>
            The build is not the expensive part anymore. Spinning your wheels is: months bending an
            off-the-shelf tool to fit, only to find it harder to implement than building the right
            thing would have been. Today a custom fix built around your actual workflow costs less
            than the workarounds it replaces, and the biggest gains come from redesigning the
            workflow around what software can now do, not from adding tools to the existing one.
            The open question inside most companies is who drives that change. The answer that works is an engineer embedded in the function.
            AI-assisted development gives that engineer the leverage a whole team used to need.
          </p>
          <p>
            Never9 is run by an operator who has taken companies from napkin to exit more than
            once, including the old way, on large venture rounds and multi-year timelines. That is
            what gets you over the line quickly: knowing which problems are worth solving and what
            a first version has to leave out. Never9 engagements are structured around it: a diagnosis first,
            a fixed-scope build, a real launch date, and ownership that stays with the client.
          </p>
        </div>
      </section>

      <section className="mt-20 rounded-[36px] border border-ink/15 bg-ink p-10 text-white">
        <h2 className="text-3xl font-semibold md:text-4xl">Bring the problem and the deadline</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85">
          If your team is working around software that does not fit, we can diagnose the workflow in
          a single working session and tell you what we would build. It does not have to be an
          expensive problem. No full spec required. And if the fix turns out to be one your whole
          industry needs, we will say so, and talk about whether it should stay yours or become a
          company.
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
