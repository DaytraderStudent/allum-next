"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import {
  Ruler,
  Wrench,
  Wind,
  Anchor,
  Construction,
  Cog,
  FileCheck,
} from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Structural Analysis & Design",
    description:
      "Comprehensive structural analysis using FEA, design of load-bearing structures for marine and industrial applications.",
  },
  {
    icon: Wrench,
    title: "Mechanical Equipment Design",
    description:
      "Design and engineering of bespoke mechanical equipment, from concept through detailed design to fabrication support.",
  },
  {
    icon: Wind,
    title: "Piping & Pressure Vessels",
    description:
      "Piping stress analysis, pressure vessel design, and process equipment engineering to international codes and standards.",
  },
  {
    icon: Anchor,
    title: "Naval Architecture",
    description:
      "Marine engineering, stability analysis, vessel modifications, and classification society liaison for maritime projects.",
  },
  {
    icon: Construction,
    title: "Lifting & Crane Systems",
    description:
      "Design of lifting appliances and purpose-built crane systems for marine, offshore and industrial operations.",
  },
  {
    icon: Cog,
    title: "Systems Integration",
    description:
      "End-to-end integration of mechanical, structural and control systems — enabling client technology from concept to commissioning.",
  },
  {
    icon: FileCheck,
    title: "Material & Inspection",
    description:
      "Material selection, welding engineering, NDT planning and quality assurance in accordance with ISO 9001.",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.05 });

  return (
    <section id="services" className="relative py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-20">
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-gold text-sm font-heading font-medium uppercase tracking-[0.2em]">
              What We Do
            </span>
          </div>

          <h2
            className={`font-heading font-bold text-4xl md:text-5xl text-navy-dark leading-tight transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Core Engineering
            <br />
            <span className="text-gold">Competencies</span>
          </h2>

          <p
            className={`mt-6 text-lg text-muted-foreground transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Our multidisciplinary team delivers integrated solutions across the
            full project lifecycle — from feasibility studies to commissioning
            and beyond.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              {/* Number + Icon */}
              <div className="flex items-center gap-4 mb-4">
                <span className="font-heading text-5xl font-bold text-navy/[0.06] select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-xl bg-navy/[0.04] flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-navy-light group-hover:text-gold transition-colors duration-300" />
                </div>
              </div>

              <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Underline accent */}
              <div className="mt-4 w-0 h-[2px] bg-gold group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* ISO badge */}
        <div
          className={`mt-20 flex items-center justify-center transition-all duration-700 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-navy-dark rounded-xl">
            <FileCheck className="w-6 h-6 text-gold" />
            <div>
              <div className="text-white font-heading font-semibold text-sm">
                ISO 9001 Certified
              </div>
              <div className="text-white/40 text-xs">
                Management system according to ISO 9001
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
