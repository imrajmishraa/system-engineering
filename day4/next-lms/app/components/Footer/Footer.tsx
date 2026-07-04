"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full h-16 bg-white paper-texture flex items-center justify-between pl-16 pr-8 select-none border-t border-neutral-300/45 z-10">
      {/* Left footer note */}
      <div className="z-10 pl-5 flex flex-col pt-2 font-patrick">
        <span className="font-bold text-[14px] text-slate-800 leading-tight">
          Next.JS LMS
        </span>
        <span className="text-[11px] text-slate-500 italic">
          Written to learn Next.js & its LMS.
        </span>
      </div>

      {/* Right footer text */}
      <div className="z-10 flex items-center pt-2 font-patrick text-slate-600 text-[13px]">
        <span>© 2026 Next.js.</span>
      </div>
    </footer>
  );
}
