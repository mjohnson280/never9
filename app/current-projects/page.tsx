export const metadata = {
  title: 'Current Projects | Never9',
  description:
    'Products incubated or built by Never9, each one started as a workflow problem inside a real business. DockItFlo, Fit Vaulted, and two projects in stealth.',
};

type Project = {
  name: string;
  model: string;
  summary: string;
  detail: string;
  href?: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  stealth?: boolean;
};

const projects: Project[] = [
  {
    name: 'DockItFlo',
    model: 'Incubated product',
    summary: 'PACER notice calendaring for litigation attorneys.',
    detail:
      'Developed in concert with a large litigation firm to fix an inefficient workflow. The result is fully automated, AI-driven date extraction and calendaring from court notices arriving by email, with human-in-the-loop confirmation. Built against the firm’s real docket, with a release to the industry coming as partners.',
    href: 'https://dockitflo.com',
    logo: '/dockitflo-wordmark.png',
    logoWidth: 1024,
    logoHeight: 150,
  },
  {
    name: 'Fit Vaulted',
    model: 'Incubated product',
    summary: 'A normalized fitness measure for runners and their coaches.',
    detail:
      'Developed in concert with a running coach to fix a fitness measurement problem. The result is a normalized fitness measure that adjusts every run for route, terrain, weather, pace, and distance. Athlete and coach see the same transparent picture of what actually changed, or did not, to help maximize the training plan for each runner.',
    href: 'https://fitvaulted.com',
  },
  {
    name: 'Stealth consulting build',
    model: 'Embedded engagement',
    summary: 'Built on contract for a founding team with a launch date.',
    detail:
      'An embedded engagement, currently in stealth. Never9 is building the platform and shaping the go-to-market plan alongside the founders. The product, the code, and the company remain the property of the founders.',
    stealth: true,
  },
  {
    name: 'Stealth legal platform',
    model: 'Incubated product',
    summary: 'A second legal platform, in stealth.',
    detail:
      'Another workflow problem shared across law firms, being built in lockstep with the people who live it every day. Details when it ships.',
    stealth: true,
  },
];

export default function CurrentProjects() {
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

      <div className="mt-10">
        <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Current Never9 Projects
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-ink/70">
          Products incubated or built by Never9. Each one started as a workflow problem inside a
          real business, shared by the rest of that industry, and built in lockstep with the
          stakeholder who lived it. Some are ours. Some are shared. Some belong to the founders we
          built them with. All of them exist to get someone to market, or to help them operate
          more efficiently within it.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-3xl border border-ink/10 bg-white/78 p-8"
          >
            <div className="flex h-14 items-center justify-center">
              {project.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.logo}
                  alt={project.name}
                  width={project.logoWidth}
                  height={project.logoHeight}
                  className="h-9 w-auto object-contain"
                />
              ) : (
                <div className="flex h-12 w-full max-w-xs items-center justify-center rounded-xl border border-ink/15 bg-ink/4">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/40">
                    {project.stealth ? 'In Stealth Mode' : project.name}
                  </span>
                </div>
              )}
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-ember">
              {project.model}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-ink">{project.summary}</h2>
            <p className="mt-3 flex-1 text-sm leading-7 text-ink/72">{project.detail}</p>
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit rounded-full border border-ink/20 bg-white/85 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink/40"
              >
                Visit {project.name} &rarr;
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </main>
  );
}
