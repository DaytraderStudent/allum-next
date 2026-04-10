"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Structural Analysis & Design",
    text: "Comprehensive FEA and design of load-bearing structures for marine and industrial applications.",
  },
  {
    title: "Mechanical Equipment Design",
    text: "Bespoke mechanical equipment engineering from concept through detailed design.",
  },
  {
    title: "Naval Architecture & Marine",
    text: "Stability analysis, vessel modifications, marine engineering and classification.",
  },
  {
    title: "Piping & Pressure Vessels",
    text: "Stress analysis, pressure vessel design and process equipment to international standards.",
  },
  {
    title: "Lifting Appliances & Cranes",
    text: "Purpose-built lifting appliances and crane systems, 3D FE analysis, classification-ready.",
  },
  {
    title: "Systems Integration",
    text: "End-to-end integration of mechanical, structural and control systems.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative">
      {/* Full-width image band — using Allum's own CAD rendering */}
      <div className="relative h-[400px] lg:h-[500px] bg-[#0f1a2e] overflow-hidden">
        {/* Background ocean */}
        <Image
          src="/images/background.png"
          alt=""
          fill
          className="object-cover opacity-30"
          aria-hidden="true"
        />
        {/* CAD overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center opacity-20">
          <Image
            src="/images/thumb2.png"
            alt=""
            width={500}
            height={300}
            className="object-contain max-w-[80%] invert"
            aria-hidden="true"
          />
        </div>

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
              ISO 9001 certified. From feasibility studies and concept
              development to detailed engineering and commissioning.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Image
                src="/images/iso-9001.png"
                alt="ISO 9001 Certified"
                width={60}
                height={60}
                className="opacity-60"
              />
            </div>
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
        <div className="mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-[#0f1a2e] text-[14px] font-semibold hover:text-gray-600 transition-colors cursor-pointer"
          >
            View all services &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
