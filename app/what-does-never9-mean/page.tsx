export const metadata = {
  title: 'What Does Never9 Mean | Never9',
  description:
    'The origin story behind Never9 — a way of thinking about progress, frameworks, and building companies differently.',
};

export default function WhatDoesNever9Mean() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-12 md:pt-16">
      <a href="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
        Back to home
      </a>

      <article className="mt-8 rounded-3xl border border-ink/12 bg-white/80 p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">
          Never9 Origin
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">
          What Does Never9 Mean?
        </h1>

        {/* Founder byline */}
        <div className="mt-10 flex flex-col items-center rounded-2xl border border-ink/12 bg-sand/60 px-6 py-8 text-center">
          <p className="text-xl font-semibold text-ink">Matt Johnson</p>
          <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-ink/50">
            Founder, Never9
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-ink/70">
            Matt has been building, scaling, and investing in venture funded startups since 2011.
          </p>
          <a
            href="https://www.linkedin.com/in/matt-johnson-1233695/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ember transition hover:text-ink"
          >
            Connect on LinkedIn &rarr;
          </a>
        </div>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-ink">
              Never 9 Was the Rule. The Wrong One.
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-ink/74">
              <p>
                Early in my running days, I had two problems I didn&apos;t know I had: I didn&apos;t know how
                to set good goals, and I didn&apos;t know how to actually get better. So I did what a lot
                of people do — I made up a standard that felt right. I told myself I&apos;d never let
                myself run slower than a 9-minute mile. Never 9. It felt like a bar. It felt like
                discipline.
              </p>
              <p>
                I wasn&apos;t getting faster. I wasn&apos;t improving. I just kept running at the same pace,
                hitting the same ceiling, wondering why nothing was changing.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-ink">
              Through Data I Found an Unlock — Same Rule, Different Perspective.
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-ink/74">
              <p>
                I consulted with an expert. After testing, conversation, and a lot of data, a
                running coach told me something I didn&apos;t expect: I needed to slow way down before I
                could speed up. Run slower than 9-minute miles — much slower — to build the aerobic
                base that would eventually let me run faster. Zone 2 training. It felt
                counterintuitive. It felt wrong. But it worked.
              </p>
              <p>
                The rule I&apos;d built my whole approach around wasn&apos;t wrong because I broke it. It was
                wrong because I didn&apos;t understand enough yet to know what the right rule was. Once I
                had better data, shared knowledge from someone who&apos;d seen it before, and a real plan
                — I finally made progress.
              </p>
              <p>I was accidentally right about Never 9. Just not in the way I thought.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-ink">Never9 is a way of thinking.</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-ink/74">
              <p>
                It&apos;s a constant reminder that the framework you&apos;re operating inside might be the
                thing holding you back — not your effort, not your work ethic, not your potential.
                The limit is often the assumption you haven&apos;t questioned yet.
              </p>
              <p>That applies to running. It applies to building companies.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-ink">The Expert Changes Everything.</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-ink/74">
              <p>
                Finding a running coach didn&apos;t make me a runner who needed hand-holding. It made me
                a faster, smarter runner who finally understood the system well enough to push it.
              </p>
              <p>That&apos;s the parallel I bring to Never9.</p>
              <p>
                I&apos;m a tech entrepreneur who has built, scaled, and sold companies — raising over
                $15M in venture capital across multiple ventures. I&apos;ve sat in the founder seat
                through the highs of early traction and the grind of trying to force scale that
                wasn&apos;t ready. I&apos;ve learned what the venture model gets right, what it gets
                catastrophically wrong, and where the real leverage is in building and exiting a
                company early.
              </p>
              <p>
                The unlock for the operators and founders I work with isn&apos;t a coach. It&apos;s a builder
                who has already been through the system — someone who can look at your workflow
                problem, your product idea, or your early company and say: here&apos;s what the data
                actually suggests, here&apos;s what I&apos;ve seen work, and here&apos;s the plan.
              </p>
              <p>
                Never9 is that unlock. Not a framework you follow. A perspective that changes
                what&apos;s possible.
              </p>
            </div>
          </section>
        </div>

        <p className="mt-14 text-xl font-medium text-ink/50">Never9 isn&apos;t a pace. It&apos;s a posture.</p>

        <a
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
        >
          Start a Conversation →
        </a>
      </article>
    </main>
  );
}
