import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  showArrow?: boolean;
};

const variants = {
  primary:
    "bg-emerald-500 text-white hover:bg-emerald-600 shadow-[0_8px_30px_-8px_rgba(0,168,120,0.55)]",
  secondary:
    "bg-white text-navy-800 border border-navy-200 hover:border-navy-400 hover:bg-navy-50 dark:bg-ink-800 dark:text-white dark:border-ink-600 dark:hover:bg-ink-700",
  ghost: "bg-transparent text-white border border-white/30 hover:bg-white/10",
};

export function Button({ href, children, variant = "primary", className, showArrow = true }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out",
        variants[variant],
        className
      )}
    >
      {children}
      {showArrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
