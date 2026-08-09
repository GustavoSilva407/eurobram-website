"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, CornerDownLeft } from "lucide-react";
import { searchIndex } from "@/lib/searchIndex";

export function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const openHandler = () => setOpen(true);
    const keyHandler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("eurobram:open-search", openHandler);
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("eurobram:open-search", openHandler);
      window.removeEventListener("keydown", keyHandler);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const results = useMemo(() => {
    if (!query.trim()) return searchIndex.slice(0, 7);
    const q = query.toLowerCase();
    return searchIndex
      .filter(
        (entry) =>
          entry.title.toLowerCase().includes(q) ||
          entry.description.toLowerCase().includes(q) ||
          entry.keywords?.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query]);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-start justify-center bg-navy-950/60 pt-24 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-2xl dark:border-ink-700 dark:bg-ink-800"
          >
            <div className="flex items-center gap-3 border-b border-mist-200 px-5 py-4 dark:border-ink-700">
              <Search size={18} className="shrink-0 text-charcoal-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive((a) => Math.min(a + 1, results.length - 1));
                  }
                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive((a) => Math.max(a - 1, 0));
                  }
                  if (e.key === "Enter" && results[active]) {
                    go(results[active].href);
                  }
                }}
                placeholder="Search services, industries, insights…"
                className="w-full text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none dark:text-white dark:placeholder:text-white/35"
              />
              <button onClick={() => setOpen(false)} aria-label="Close search" className="shrink-0 text-charcoal-400 hover:text-navy-800 dark:text-white/50 dark:hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-2">
              {results.length === 0 && (
                <div className="px-4 py-8 text-center text-sm text-charcoal-400 dark:text-white/45">No results for “{query}”.</div>
              )}
              {results.map((entry, i) => (
                <button
                  key={`${entry.group}-${entry.title}`}
                  onClick={() => go(entry.href)}
                  onMouseEnter={() => setActive(i)}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left transition-colors ${
                    i === active ? "bg-mist-100 dark:bg-white/5" : ""
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-navy-900 dark:text-white">{entry.title}</span>
                    <span className="block truncate text-xs text-charcoal-400 dark:text-white/45">{entry.description}</span>
                  </span>
                  <span className="shrink-0 rounded-full bg-navy-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-navy-700 dark:bg-ink-700 dark:text-white/70">
                    {entry.group}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 border-t border-mist-200 px-5 py-3 text-xs text-charcoal-400 dark:border-ink-700 dark:text-white/40">
              <CornerDownLeft size={12} /> to select · Esc to close
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
