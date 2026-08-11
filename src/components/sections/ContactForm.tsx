"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [submitted, setSubmitted] = useState(false);
  const f = dict.contact.form;

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-500/25 dark:bg-emerald-500/10">
        <div className="font-display text-lg font-semibold text-navy-900 dark:text-white">{f.receivedTitle}</div>
        <p className="mt-2 text-sm text-charcoal-600 dark:text-white/65">{f.receivedText}</p>
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
        <Field label={f.fullName} name="name" required requiredLabel={f.required} />
        <Field label={f.company} name="company" required requiredLabel={f.required} />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label={f.email} name="email" type="email" required requiredLabel={f.required} />
        <Field label={f.phone} name="phone" type="tel" />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">{f.topic}</label>
        <select
          name="topic"
          className="w-full rounded-xl border border-mist-400 bg-white px-4 py-3 text-sm text-charcoal-800 focus:border-navy-500 focus:outline-none dark:border-ink-600 dark:bg-ink-900 dark:text-white"
          defaultValue={f.topics[0]}
        >
          {f.topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
          {f.messageLabel} <span className="text-charcoal-400 dark:text-white/40">{f.required}</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={f.messagePlaceholder}
          className="w-full rounded-xl border border-mist-400 bg-white px-4 py-3 text-sm text-charcoal-800 focus:border-navy-500 focus:outline-none dark:border-ink-600 dark:bg-ink-900 dark:text-white dark:placeholder:text-white/30"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(0,168,120,0.55)] transition-colors hover:bg-emerald-600"
      >
        {f.submit} <Send size={15} />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  requiredLabel,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  requiredLabel?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
        {label} {required && <span className="text-charcoal-400 dark:text-white/40">{requiredLabel}</span>}
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
