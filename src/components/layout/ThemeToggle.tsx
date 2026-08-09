"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("eurobram-theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export function ThemeToggle({ scrolled }: { scrolled: boolean }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("eurobram-theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={cn(
        "rounded-full p-2 transition-colors",
        scrolled ? "text-charcoal-600 hover:bg-mist-100 dark:text-white/70 dark:hover:bg-white/10" : "text-white hover:bg-white/10"
      )}
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
