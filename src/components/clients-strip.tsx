"use client";

import { Marquee } from "@/components/ui/marquee";

const clients = ["Nexans", "Equinor", "OMV", "Solstad Offshore", "Prysmian", "Gassco", "Innovation Norway"];

export default function ClientsStrip() {
  return (
    <section className="py-12 border-y border-border bg-card">
      <div className="max-w-[1200px] mx-auto px-6 mb-6">
        <p className="text-[11px] text-muted-foreground uppercase tracking-[0.15em] text-center font-medium">
          Trusted by global industry leaders
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:30s]">
        {clients.map((name) => (
          <span
            key={name}
            className="mx-10 font-heading text-[22px] text-muted-foreground/40 hover:text-gold transition-colors tracking-wider uppercase whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
