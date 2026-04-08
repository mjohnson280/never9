'use client';

import { FormEvent, useMemo, useState } from 'react';

const MAX_MESSAGE_LENGTH = 1500;

export default function ContactPage() {
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  );
  const [errorText, setErrorText] = useState('');

  const remainingChars = MAX_MESSAGE_LENGTH - message.length;
  const isValid = useMemo(() => {
    return (
      name.trim().length > 0 &&
      industry.trim().length > 0 &&
      message.trim().length > 0 &&
      message.length <= MAX_MESSAGE_LENGTH &&
      email.trim().length > 0 &&
      phone.trim().length > 0
    );
  }, [name, industry, message, email, phone]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValid || status === 'submitting') {
      return;
    }

    setStatus('submitting');
    setErrorText('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          industry,
          message,
          email,
          phone,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? 'Unable to submit your request.');
      }

      setStatus('success');
      setName('');
      setIndustry('');
      setMessage('');
      setEmail('');
      setPhone('');
    } catch (error) {
      setStatus('error');
      setErrorText(
        error instanceof Error ? error.message : 'Unable to submit your request.'
      );
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-12 md:pt-16">
      <a href="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
        Never9
      </a>

      <section className="mt-8 rounded-3xl border border-ink/12 bg-white/80 p-8 shadow-glow">
        <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-ink md:text-4xl">
          We&apos;re excited to hear about how rapid software development could solve
          for a gap or labor inefficiency in your industry
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-ink">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-2 h-11 w-full rounded-xl border border-ink/15 bg-white px-4 text-sm text-ink outline-none transition focus:border-ink/40"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-semibold text-ink">
              Industry
            </label>
            <input
              id="industry"
              type="text"
              className="mt-2 h-11 w-full rounded-xl border border-ink/15 bg-white px-4 text-sm text-ink outline-none transition focus:border-ink/40"
              value={industry}
              onChange={(event) => setIndustry(event.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="pain-point" className="block text-sm font-semibold text-ink">
              Tell us how we can solve a pain point
            </label>
            <textarea
              id="pain-point"
              className="mt-2 min-h-40 w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink/40"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              maxLength={MAX_MESSAGE_LENGTH}
              required
            />
            <p className="mt-2 text-xs text-ink/60">{remainingChars} characters remaining</p>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-ink">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-2 h-11 w-full rounded-xl border border-ink/15 bg-white px-4 text-sm text-ink outline-none transition focus:border-ink/40"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-ink">
              Phone number
            </label>
            <input
              id="phone"
              type="tel"
              className="mt-2 h-11 w-full rounded-xl border border-ink/15 bg-white px-4 text-sm text-ink outline-none transition focus:border-ink/40"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>

          {status === 'success' && (
            <p className="text-sm font-medium text-emerald-700">
              Thank you. Your submission has been sent.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm font-medium text-red-700">{errorText}</p>
          )}

          <button
            type="submit"
            disabled={!isValid || status === 'submitting'}
            className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-ink/40"
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </section>
    </main>
  );
}
