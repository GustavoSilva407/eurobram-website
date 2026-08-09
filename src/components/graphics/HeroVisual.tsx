"use client";

import { motion } from "framer-motion";
import { CheckCircle2, PackageSearch } from "lucide-react";
import { DotGrid } from "./GridBackdrop";

export function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-lg">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 shadow-[0_40px_100px_-30px_rgba(6,20,42,0.7)]" />
      <DotGrid className="absolute inset-0 rounded-[2rem] text-white/[0.06]" />

      {/* route arc */}
      <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="routeLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00A878" />
            <stop offset="100%" stopColor="#7ea6d4" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 90 130 C 180 210, 180 300, 300 380"
          stroke="url(#routeLine)"
          strokeWidth="1.5"
          strokeDasharray="6 7"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
        />
        <circle cx="90" cy="130" r="5" fill="#ffffff" />
        <circle cx="90" cy="130" r="10" fill="none" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1" />
        <circle cx="300" cy="380" r="5" fill="#00A878" />
        <circle cx="300" cy="380" r="10" fill="none" stroke="#00A878" strokeOpacity="0.4" strokeWidth="1" />
        <text x="104" y="120" fill="#ffffff" fontSize="12" fontFamily="var(--font-sans)" letterSpacing="1.5" opacity="0.85">
          GERMANY
        </text>
        <text x="222" y="405" fill="#ffffff" fontSize="12" fontFamily="var(--font-sans)" letterSpacing="1.5" opacity="0.85">
          BRAZIL
        </text>
      </svg>

      {/* floating card: certificate */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{ opacity: { duration: 0.8, delay: 0.6 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute left-6 top-8 w-44 rounded-xl border border-white/10 bg-white/95 p-4 shadow-xl backdrop-blur"
      >
        <div className="flex items-center gap-2 text-navy-800">
          <CheckCircle2 size={16} className="text-emerald-500" />
          <span className="text-[11px] font-semibold tracking-wide">CERTIFICATE OF ANALYSIS</span>
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-mist-300" />
          <div className="h-1.5 w-3/4 rounded-full bg-mist-300" />
          <div className="h-1.5 w-5/6 rounded-full bg-mist-300" />
        </div>
        <div className="mt-3 text-[10px] font-medium text-emerald-600">Verified &amp; Compliant</div>
      </motion.div>

      {/* floating card: analytical standard */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { duration: 0.8, delay: 0.9 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
        className="absolute bottom-10 right-4 w-40 rounded-xl border border-white/10 bg-white/95 p-4 shadow-xl backdrop-blur"
      >
        <div className="flex items-center gap-2 text-navy-800">
          <PackageSearch size={16} className="text-navy-700" />
          <span className="text-[11px] font-semibold tracking-wide">HPLC COLUMN</span>
        </div>
        <div className="mt-3 flex items-end gap-1">
          {[40, 65, 50, 80, 60].map((h, i) => (
            <div key={i} className="w-2.5 rounded-sm bg-navy-200" style={{ height: `${h * 0.4}px` }} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
