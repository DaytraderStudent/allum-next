"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { Cable, Ship, Factory, Zap, Droplets } from "lucide-react";

const markets = [
  {
    icon: Cable,
    title: "Cable Equipment",
    description:
      "Production, transport, handling and storage equipment for subsea cables. Planning of cable laying and installation operations.",
    items: [
      "Turntables & carousels",
      "Cable laying spread",
      "Cable hang-off modifications",
    ],
  },
  {
    icon: Ship,
    title: "Maritime",
    description:
      "Ship modifications, conversions, and marine operations support. Zero-emission vessel design and naval architecture.",
    items: [
      "Vessel modifications",
      "Classification surveys",
      "Marine operations support",
    ],
  },
  {
    icon: Factory,
    title: "Process Industry",
    description:
      "Design of purpose-built models, equipment and process plant layouts. Systems integration and project management.",
    items: [
      "Process plant layout",
      "Equipment design",
      "Systems integration",
    ],
  },
  {
    icon: Zap,
    title: "Energy",
    description:
      "Modifications and upgrades for FPSOs, drilling rigs, and offshore facilities. Structural and mechanical integration.",
    items: [
      "FPSO modifications",
      "Drilling rig upgrades",
      "Offshore structural work",
    ],
  },
  {
    icon: Droplets,
    title: "Water Treatment",
    description:
      "Proprietary Compact Flotation Unit (CFU) technology for produced water treatment with industry-leading performance.",
    items: [
      "CFU technology",
      "Low reject rate (<0.1%)",
      "Patented solutions",
    ],
  },
];

export default function Markets() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.05 });

  return (
    <section id="markets" className="relative py-32 bg-navy-dark overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-gold text-sm font-heading font-medium uppercase tracking-[0.2em]">
              Our Markets
            </span>
            <div className="w-12 h-[2px] bg-gold" />
          </div>

          <h2
            className={`font-heading font-bold text-4xl md:text-5xl text-white transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Five Decades Across
            <br />
            <span className="text-gold">Five Industries</span>
          </h2>
        </div>

        {/* Market cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, i) => (
            <div
              key={market.title}
              className={`group relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-8 hover:bg-white/[0.06] hover:border-gold/20 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <market.icon className="w-7 h-7 text-gold" />
              </div>

              <h3 className="font-heading font-semibold text-xl text-white mb-3">
                {market.title}
              </h3>

              <p className="text-white/40 text-sm leading-relaxed mb-6">
                {market.description}
              </p>

              {/* Items list */}
              <ul className="space-y-2">
                {market.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-white/50"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/40 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
