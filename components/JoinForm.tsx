'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  contactNumber: string;
  branch: string;
  yearOfStudy: string;
  interest: string;
  skills: string;
  github: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  contactNumber: '',
  branch: '',
  yearOfStudy: '',
  interest: '',
  skills: '',
  github: '',
  message: '',
};

export function JoinForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? 'Submission failed.');
      }

      setForm(initialState);
      setSuccessOpen(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Submission failed.');
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  return (
    <>
      <form className="joinForm" onSubmit={handleSubmit}>
        <div className="formGrid">
          <label className="field">
            <span>Full Name</span>
            <input
              required
              type="text"
              value={form.name}
              onChange={(event) => updateField('name', event.target.value)}
              placeholder="Enter your full name"
            />
          </label>

          <label className="field">
            <span>Email Address</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => updateField('email', event.target.value)}
              placeholder="you@domain.com"
            />
          </label>

          <label className="field">
            <span>Contact Number</span>
            <input
              required
              type="tel"
              value={form.contactNumber}
              onChange={(event) => updateField('contactNumber', event.target.value)}
              placeholder="+91 98765 43210"
            />
          </label>

          <label className="field">
            <span>Branch</span>
            <input
              required
              type="text"
              value={form.branch}
              onChange={(event) => updateField('branch', event.target.value)}
              placeholder="CSE / AI / ECE"
            />
          </label>

          <label className="field">
            <span>Year of Study</span>
            <input
              required
              type="text"
              value={form.yearOfStudy}
              onChange={(event) => updateField('yearOfStudy', event.target.value)}
              placeholder="1st Year / 2nd Year"
            />
          </label>

          <label className="field">
            <span>Primary Interest</span>
            <select
              required
              value={form.interest}
              onChange={(event) => updateField('interest', event.target.value)}
            >
              <option value="">Select focus area</option>
              <option value="Competitive Programming">Competitive Programming</option>
              <option value="Full-Stack Development">Full-Stack Development</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Product Building">Product Building</option>
              <option value="Systems and Tooling">Systems and Tooling</option>
            </select>
          </label>
        </div>

        <label className="field">
          <span>Skills</span>
          <textarea
            required
            rows={4}
            value={form.skills}
            onChange={(event) => updateField('skills', event.target.value)}
            placeholder="List your current skills, tools, languages, and strengths."
          />
        </label>

        <div className="formGrid formGridCompact">
          <label className="field">
            <span>GitHub / Portfolio</span>
            <input
              type="url"
              value={form.github}
              onChange={(event) => updateField('github', event.target.value)}
              placeholder="https://github.com/username"
            />
          </label>

          <label className="field">
            <span>Why Deadlock Devs?</span>
            <input
              type="text"
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
              placeholder="What do you want to build or prove?"
            />
          </label>
        </div>

        {error ? <p className="formError">{error}</p> : null}

        <div className="formActions">
          <button className="button buttonPrimary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Join Now'}
          </button>
          <p className="formMeta">Submissions are routed directly to the Deadlock Devs intake inbox.</p>
        </div>
      </form>

      {successOpen ? (
        <div className="modalBackdrop" role="presentation" onClick={() => setSuccessOpen(false)}>
          <div
            className="modalCard"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="join-success-title"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="eyebrow">Submission Received</p>
            <h3 id="join-success-title">Thank you for showing your interest.</h3>
            <p>
              Your details are in the queue. We will review your profile and reach out soon with the next step.
            </p>
            <button className="button buttonPrimary" type="button" onClick={() => setSuccessOpen(false)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
