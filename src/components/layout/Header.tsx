"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { navigation } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const LOCALES = ["DE", "EN", "PT"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [locale, setLocale] = useState("EN");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 shadow-[0_1px_0_0_rgba(18,58,114,0.08)] backdrop-blur-md dark:bg-ink-900/90 dark:shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg font-display text-sm font-bold tracking-tight",
              scrolled ? "bg-navy-800 text-white dark:bg-white dark:text-navy-900" : "bg-white text-navy-800"
            )}
          >
            EB
          </span>
          <span
            className={cn(
              "font-display text-lg font-semibold tracking-tight",
              scrolled ? "text-navy-900 dark:text-white" : "text-white"
            )}
          >
            EUROBRAM
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpenMenu(null)}>
          {navigation.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.label)}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  scrolled ? "text-charcoal-700 hover:text-navy-800 dark:text-white/75 dark:hover:text-white" : "text-white/90 hover:text-white"
                )}
              >
                {item.label}
                {item.children && <ChevronDown size={14} className="opacity-60" />}
              </Link>

              <AnimatePresence>
                {item.children && openMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3"
                  >
                    <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white p-2 shadow-2xl shadow-navy-900/10 dark:border-ink-700 dark:bg-ink-800">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-3 transition-colors hover:bg-mist-100 dark:hover:bg-white/5"
                        >
                          <div className="text-sm font-semibold text-navy-900 dark:text-white">{child.label}</div>
                          {child.description && (
                            <div className="mt-0.5 text-xs text-charcoal-400 dark:text-white/45">{child.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            aria-label="Search"
            onClick={() => window.dispatchEvent(new CustomEvent("eurobram:open-search"))}
            className={cn(
              "rounded-full p-2 transition-colors",
              scrolled ? "text-charcoal-600 hover:bg-mist-100 dark:text-white/70 dark:hover:bg-white/10" : "text-white hover:bg-white/10"
            )}
          >
            <Search size={17} />
          </button>
          <ThemeToggle scrolled={scrolled} />
          <div
            className={cn(
              "flex items-center gap-1 rounded-full border px-1 py-1 text-xs font-semibold",
              scrolled ? "border-navy-100 dark:border-ink-700" : "border-white/25"
            )}
          >
            {LOCALES.map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={cn(
                  "rounded-full px-2 py-1 transition-colors",
                  locale === l
                    ? "bg-navy-800 text-white dark:bg-white dark:text-navy-900"
                    : scrolled
                    ? "text-charcoal-500 hover:text-navy-800 dark:text-white/60 dark:hover:text-white"
                    : "text-white/70 hover:text-white"
                )}
              >
                {l}
              </button>
            ))}
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(0,168,120,0.6)] transition-colors hover:bg-emerald-600"
          >
            Request an Inquiry
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle scrolled={scrolled} />
          <button
            className={cn("p-1", scrolled ? "text-navy-900 dark:text-white" : "text-white")}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-navy-100 bg-white lg:hidden dark:border-ink-700 dark:bg-ink-900"
          >
            <div className="max-h-[80vh] overflow-y-auto px-6 py-6">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("eurobram:open-search"))}
                className="mb-4 flex w-full items-center gap-2.5 rounded-full border border-mist-300 px-4 py-2.5 text-sm text-charcoal-500 dark:border-ink-700 dark:text-white/60"
              >
                <Search size={16} /> Search
              </button>
              {navigation.map((item) => (
                <div key={item.label} className="border-b border-mist-200 py-3 last:border-0 dark:border-ink-700">
                  <Link href={item.href} className="block text-base font-semibold text-navy-900 dark:text-white">
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mt-2 flex flex-col gap-2 pl-3">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="text-sm text-charcoal-600 dark:text-white/60">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="mt-6 block rounded-full bg-emerald-500 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Request an Inquiry
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
