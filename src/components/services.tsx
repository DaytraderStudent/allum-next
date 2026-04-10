"use client";

import Image from "next/image";

const services = [
  {
    title: "Structural Analysis & Design",
    text: "Comprehensive FEA and design of load-bearing structures for marine and industrial applications. Full classification society liaison.",
  },
  {
    title: "Mechanical Equipment Design",
    text: "Bespoke mechanical equipment engineering from concept through detailed design, including fabrication support.",
  },
  {
    title: "Naval Architecture & Marine",
    text: "Stability analysis, vessel modifications, marine engineering and classification interface for maritime projects.",
  },
  {
    title: "Piping & Pressure Vessels",
    text: "Stress analysis, pressure vessel design and process equipment engineering to international standards.",
  },
  {
    title: "Lifting Appliances & Cranes",
    text: "Purpose-built lifting appliances and crane systems. Full 3D FE analysis, classification-ready designs.",
  },
  {
    title: "Systems Integration",
    text: "End-to-end integration of mechanical, structural and control systems — from feasibility studies to commissioning.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative">
      {/* Full-width image band */}
      <div className="relative h-[400px] lg:h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=1800&q=80"
          alt="Engineering and fabrication workshop"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1a2e]/70" />
        <div className="relative z-10 h-full flex items-center max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-[600px]">
            <p className="text-white/40 text-[13px] font-medium tracking-[0.1em] uppercase mb-5">
              What we do
            </p>
            <h2 className="text-white text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.15]">
              Multidisciplinary engineering
              <br />
              <span className="font-semibold">across the full lifecycle</span>
            </h2>
            <p className="mt-5 text-white/40 text-[16px] font-light leading-[1.7] max-w-[440px]">
              ISO 9001 certified management system. From feasibility studies and
              concept development to detailed engineering and commissioning.
            </p>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {services.map((s) => (
            <div key={s.title} className="group">
              <h3 className="text-[#0f1a2e] text-[17px] font-semibold leading-snug">
                {s.title}
              </h3>
              <p className="mt-3 text-gray-500 text-[15px] leading-[1.7]">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
