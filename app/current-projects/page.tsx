export const metadata = {
  title: 'Current Projects | Never9',
  description:
    'Never9 works on concurrent projects as standalone entities, collaborations, and investments.',
};

type ProjectType = 'Standalone' | 'Collaboration' | 'Investment';

const projects: {
  name: string;
  type: ProjectType;
  logo?: string; // future: path to logo image
}[] = [
  { name: 'Project One', type: 'Standalone' },
  { name: 'Project Two', type: 'Collaboration' },
  { name: 'Project Three', type: 'Investment' },
  { name: 'Project Four', type: 'Standalone' },
  { name: 'Project Five', type: 'Collaboration' },
  { name: 'Project Six', type: 'Investment' },
];

const typeBadgeClass: Record<ProjectType, string> = {
  Standalone: 'bg-ember/10 text-ember',
  Collaboration: 'bg-ink/8 text-ink/60',
  Investment: 'bg-sand text-ink/60',
};

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
          We work on concurrent projects as standalone entities, collaborations, and investments.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-ink/10 bg-white/78 p-10"
            style={{ minHeight: '180px' }}
          >
            {project.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={project.logo} alt={project.name} className="max-h-14 w-auto object-contain" />
            ) : (
              <div className="flex h-14 w-full items-center justify-center rounded-xl border border-dashed border-ink/20">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/30">
                  Logo
                </span>
              </div>
            )}
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-sm font-semibold text-ink">{project.name}</p>
              <span
                className={`rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-[0.14em] ${typeBadgeClass[project.type]}`}
              >
                {project.type}
              </span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
