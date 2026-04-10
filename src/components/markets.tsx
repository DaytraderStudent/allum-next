"use client";

import { Cable, Ship, Factory, Zap, Droplets } from "lucide-react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

const markets = [
  {
    Icon: Cable,
    name: "Cable Equipment",
    description:
      "Turntables, carousels, cable laying spread & installation equipment for subsea cable projects worldwide.",
    href: "#contact",
    cta: "Learn more",
    className: "lg:col-span-2 lg:row-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1e3f]/5 to-transparent" />
    ),
  },
  {
    Icon: Ship,
    name: "Maritime",
    description:
      "Ship modifications, vessel conversions, and zero-emission work boat design.",
    href: "#contact",
    cta: "Learn more",
    className: "lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-[#b8953f]/5 to-transparent" />
    ),
  },
  {
    Icon: Factory,
    name: "Process Industry",
    description:
      "Purpose-built equipment, process plant layout, and systems integration.",
    href: "#contact",
    cta: "Learn more",
    className: "lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1e3f]/5 to-transparent" />
    ),
  },
  {
    Icon: Zap,
    name: "Energy",
    description:
      "FPSO modifications, drilling rig upgrades, and offshore structural engineering.",
    href: "#contact",
    cta: "Learn more",
    className: "lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-[#b8953f]/5 to-transparent" />
    ),
  },
  {
    Icon: Droplets,
    name: "Water Treatment",
    description:
      "Patented Compact Flotation Unit technology — under 0.1% reject rate, tested at Equinor.",
    href: "#contact",
    cta: "Learn more",
    className: "lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1e3f]/5 to-transparent" />
    ),
  },
];

export default function Markets() {
  return (
    <section id="markets" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[520px] mb-14">
          <p className="text-[#b8953f] text-[13px] font-medium tracking-[0.08em] uppercase mb-4">
            Our Markets
          </p>
          <h2 className="font-heading font-bold text-[#0c1e3f] text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
            Five decades across five industries
          </h2>
        </div>

        <BentoGrid className="auto-rows-[180px] md:auto-rows-[200px]">
          {markets.map((m) => (
            <BentoCard key={m.name} {...m} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
