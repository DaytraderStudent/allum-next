"use client";

import { Marquee } from "@/components/ui/marquee";

const clients = [
  "Nexans",
  "Equinor",
  "OMV",
  "Innovation Norway",
  "Research Council",
];

export default function MarqueeBanner() {
  return (
    <div className="py-10 bg-white border-y border-[#d6d3cc]">
      <div className="max-w-[1200px] mx-auto px-6 mb-6">
        <p className="text-[12px] text-[#6b6b6b] uppercase tracking-[0.08em] text-center">
          Trusted by industry leaders
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:25s]">
        {clients.map((name) => (
          <div
            key={name}
            className="mx-8 flex items-center gap-2 text-[#6b6b6b]/60 hover:text-[#1a1a1a] transition-colors"
          >
            <span className="font-heading font-semibold text-[18px] tracking-[-0.01em] whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
