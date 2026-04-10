"use client";

import Link from "next/link";
import { Ruler, Cog, Wind, Anchor, Construction, Cable } from "lucide-react";

const services = [
  { icon: Ruler, title: "Structural Analysis & Design", desc: "FEM analysis, structures subjected to environmental loads. Design per NORSOK, DNV, Eurocode." },
  { icon: Cog, title: "Mechanical Equipment Design", desc: "Cable turntables, tensioners, pull-in winches, loading systems. Custom modules for process industry." },
  { icon: Wind, title: "Piping & Pressure Vessels", desc: "Piping system design, pressure vessel calculations. PED and international standard compliance." },
  { icon: Anchor, title: "Naval Architecture & Marine", desc: "Ship modifications, ballast systems, stability. FPSO experience from Petrojarl 1." },
  { icon: Construction, title: "Lifting & Crane Systems", desc: "Custom lifting appliances and cranes. DNV-certified lifting design." },
  { icon: Cable, title: "Cable Handling & Subsea", desc: "Production, handling, transport and storage equipment for subsea and HV cables. End-to-end solutions." },
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-[12px] font-semibold uppercase tracking-[0.15em] mb-4">
            What We Do
          </p>
          <h2 className="font-heading text-foreground text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-[0.02em] uppercase">
            Core Disciplines
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-6 bg-background border border-border hover:border-gold/30 transition-all cursor-pointer relative overflow-hidden"
            >
              {/* Gold left bar on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />

              <s.icon className="w-6 h-6 text-gold mb-4" />
              <h3 className="text-foreground text-[16px] font-semibold mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-[14px] leading-[1.65]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="text-gold text-[14px] font-semibold hover:text-[#d4911c] transition-colors cursor-pointer"
          >
            View all services &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
