"use client";

import { useState } from "react";

export function NewsletterForm({
  placeholder,
  signUpLabel,
  signedUpLabel,
}: {
  placeholder: string;
  signUpLabel: string;
  signedUpLabel: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <p className="mt-4 text-sm font-medium text-emerald-400">{signedUpLabel}</p>;
  }

  return (
    <form
      className="mt-4 flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="email"
        required
        placeholder={placeholder}
        className="w-full min-w-0 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-emerald-400 focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
      >
        {signUpLabel}
      </button>
    </form>
  );
}
