export function DotGrid({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden width="100%" height="100%">
      <defs>
        <pattern id="dot-grid" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-grid)" />
    </svg>
  );
}

export function GradientBlobs({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className={
          variant === "light"
            ? "absolute -top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-navy-100/70 blur-3xl"
            : "absolute -top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-navy-700/40 blur-3xl"
        }
      />
      <div
        className={
          variant === "light"
            ? "absolute -bottom-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-emerald-50 blur-3xl"
            : "absolute -bottom-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-emerald-500/10 blur-3xl"
        }
      />
    </div>
  );
}
