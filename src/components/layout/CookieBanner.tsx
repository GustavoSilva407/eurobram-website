"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem("eurobram-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const respond = (value: "accepted" | "essential-only") => {
    window.localStorage.setItem("eurobram-cookie-consent", value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-2xl border border-navy-100 bg-white/95 p-5 shadow-2xl shadow-navy-900/15 backdrop-blur sm:p-6 dark:border-ink-700 dark:bg-ink-800/95"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-charcoal-600 dark:text-white/65">
              We use cookies to operate this site and understand how it's used. Read our{" "}
              <Link href="/legal/cookies" className="font-medium text-navy-800 underline underline-offset-2 dark:text-white">
                Cookie Policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={() => respond("essential-only")}
                className="rounded-full border border-navy-200 px-4 py-2 text-xs font-semibold text-navy-800 transition-colors hover:bg-mist-100 dark:border-ink-600 dark:text-white dark:hover:bg-ink-700"
              >
                Essential only
              </button>
              <button
                onClick={() => respond("accepted")}
                className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-600"
              >
                Accept all
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
