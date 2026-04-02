const story = {
  eyebrow: 'Never9 Origin',
  title: 'What Does Never9 Mean?',
  subtitle:
    'This page is prepared as a long-form story draft so you can document how the name was chosen and what it represents.',
  sections: [
    {
      heading: 'Where the name started',
      paragraphs: [
        '[Draft your opening context here: industry background, personal perspective, and the moment the idea began.]',
      ],
    },
    {
      heading: 'Why this name, specifically',
      paragraphs: [
        '[Describe the options you considered and why Never9 was the strongest fit for your thesis.]',
      ],
    },
    {
      heading: 'What Never9 signals to clients',
      paragraphs: [
        '[Explain what the name communicates about execution, speed, product quality, and ownership.]',
      ],
    },
    {
      heading: 'How the story connects to the build model',
      paragraphs: [
        '[Tie the name to your commercial model and why this approach now matters for operators and buyers.]',
      ],
    },
  ],
};

export default function Never9NameStoryPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-12 md:pt-16">
      <a
        href="/"
        className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60"
      >
        Back to home
      </a>

      <article className="mt-8 rounded-3xl border border-ink/12 bg-white/80 p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">
          {story.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">
          {story.title}
        </h1>
        <p className="mt-5 text-base leading-8 text-ink/74">{story.subtitle}</p>

        <div className="mt-10 space-y-10">
          {story.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-ink">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-sm leading-8 text-ink/74">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
