"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-mist-300 border-y border-mist-300 dark:divide-ink-700 dark:border-ink-700">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-6 py-6 text-left"
          >
            <span className="font-display text-base font-semibold text-navy-900 sm:text-lg dark:text-white">{item.q}</span>
            <Plus
              size={20}
              className={`shrink-0 text-emerald-600 transition-transform duration-300 dark:text-emerald-400 ${open === i ? "rotate-45" : ""}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-6 pr-10 text-sm leading-relaxed text-charcoal-600 dark:text-white/65">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
