"use client";

import { Marquee } from "@/components/ui/marquee";

const clients = ["Nexans", "Equinor", "OMV", "Solstad Offshore", "Prysmian", "Gassco", "Innovation Norway"];

export default function ClientsStrip() {
  return (
    <div className="py-10 border-y border-gray-200 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-6">
        <p className="text-[12px] text-gray-400 uppercase tracking-[0.08em] text-center font-medium">
          Trusted by industry leaders
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:30s]">
        {clients.map((name) => (
          <span key={name} className="mx-10 text-[18px] font-semibold text-gray-300 hover:text-[#0f1a2e] transition-colors tracking-[-0.01em] whitespace-nowrap">
            {name}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
