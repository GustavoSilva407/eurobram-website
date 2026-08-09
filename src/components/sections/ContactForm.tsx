"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const topics = [
  "HPLC Columns",
  "Laboratory Consumables",
  "Specialty Laboratory Equipment",
  "Difficult-to-Source Products",
  "Brochure Request",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-500/25 dark:bg-emerald-500/10">
        <div className="font-display text-lg font-semibold text-navy-900 dark:text-white">Inquiry received.</div>
        <p className="mt-2 text-sm text-charcoal-600 dark:text-white/65">
          Thank you — a member of our team will respond directly, usually within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" required />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">Topic</label>
        <select
          name="topic"
          className="w-full rounded-xl border border-mist-400 bg-white px-4 py-3 text-sm text-charcoal-800 focus:border-navy-500 focus:outline-none dark:border-ink-600 dark:bg-ink-900 dark:text-white"
          defaultValue={topics[0]}
        >
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
          What do you need? <span className="text-charcoal-400 dark:text-white/40">(required)</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Product, quantity, timeline, destination — as much detail as you have."
          className="w-full rounded-xl border border-mist-400 bg-white px-4 py-3 text-sm text-charcoal-800 focus:border-navy-500 focus:outline-none dark:border-ink-600 dark:bg-ink-900 dark:text-white dark:placeholder:text-white/30"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(0,168,120,0.55)] transition-colors hover:bg-emerald-600"
      >
        Send Inquiry <Send size={15} />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
        {label} {required && <span className="text-charcoal-400 dark:text-white/40">(required)</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-mist-400 bg-white px-4 py-3 text-sm text-charcoal-800 focus:border-navy-500 focus:outline-none dark:border-ink-600 dark:bg-ink-900 dark:text-white"
      />
    </div>
  );
}
