"use client";

import { useState } from "react";
import { BorderBeam } from "@/components/ui/border-beam";

const products = [
  {
    id: "turntables",
    title: "Turntable Systems",
    tag: "Cable Equipment",
    description:
      "Recognized supplier of onshore and offshore turntables. We serve as both engineering partner and turnkey supplier — handling engineering, procurement, construction, and installation. Our modular designs scale from small onshore units to large offshore carousel systems.",
    specs: [
      "Up to 7,000t capacity",
      "Modular design",
      "Onshore & offshore",
      "Full EPC delivery",
    ],
  },
  {
    id: "cfu",
    title: "Compact Flotation Units",
    tag: "Water Treatment",
    description:
      "Proprietary produced water treatment technology developed since 2015. Delivers industry-leading oil removal with less than 0.1% reject rate. Two patents granted, tested at Equinor facilities, backed by Innovation Norway and the Research Council of Norway.",
    specs: [
      "< 0.1% reject rate",
      "2 patents granted",
      "Equinor tested",
      "Compact footprint",
    ],
  },
  {
    id: "crane",
    title: "Handling Cranes",
    tag: "Lifting Equipment",
    description:
      "Complete knuckle-boom and service crane design for marine and industrial applications. Every crane is tailored to client requirements with full 3D FE analysis and delivered classification-ready.",
    specs: [
      "Up to 15t SWL",
      "3D FE analysis",
      "Classification ready",
      "Custom design",
    ],
  },
  {
    id: "workboat",
    title: "Zero Emission Work Boat",
    tag: "Maritime",
    description:
      "Next-generation 12m electric work boat for harbour and near-shore operations. Battery-electric propulsion for zero-emission operations with practical working capacity.",
    specs: [
      "12m length",
      "120 kWh battery",
      "8 knots service",
      "5t deck capacity",
    ],
  },
];

export default function Products() {
  const [active, setActive] = useState(0);
  const p = products[active];

  return (
    <section id="products" className="py-24 md:py-32 bg-[#f8f7f4]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[520px] mb-14">
          <p className="text-[#b8953f] text-[13px] font-medium tracking-[0.08em] uppercase mb-4">
            Products
          </p>
          <h2 className="font-heading font-bold text-[#0c1e3f] text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
            Engineered for performance
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Tabs */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2">
            {products.map((prod, i) => (
              <button
                key={prod.id}
                onClick={() => setActive(i)}
                className={`text-left px-5 py-4 rounded-sm border transition-all cursor-pointer ${
                  active === i
                    ? "bg-white border-[#d6d3cc] shadow-sm"
                    : "bg-transparent border-transparent hover:bg-white/60"
                }`}
              >
                <span
                  className={`block text-[11px] uppercase tracking-[0.06em] mb-1 ${active === i ? "text-[#b8953f]" : "text-[#6b6b6b]"}`}
                >
                  {prod.tag}
                </span>
                <span
                  className={`block font-heading font-semibold text-[15px] ${active === i ? "text-[#0c1e3f]" : "text-[#6b6b6b]"}`}
                >
                  {prod.title}
                </span>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="lg:col-span-8">
            <div className="relative bg-white border border-[#d6d3cc] rounded-sm p-8 md:p-10 overflow-hidden">
              <BorderBeam
                size={120}
                duration={8}
                colorFrom="#b8953f"
                colorTo="#0c1e3f"
                borderWidth={1}
              />

              <span className="inline-block text-[11px] uppercase tracking-[0.06em] text-[#b8953f] font-medium bg-[#b8953f]/10 px-2.5 py-1 rounded-sm mb-5">
                {p.tag}
              </span>

              <h3 className="font-heading font-bold text-[#0c1e3f] text-2xl md:text-[28px] tracking-[-0.01em]">
                {p.title}
              </h3>

              <p className="mt-4 text-[#6b6b6b] text-[15px] leading-[1.7] max-w-[560px]">
                {p.description}
              </p>

              {/* Specs */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {p.specs.map((spec) => (
                  <div
                    key={spec}
                    className="flex items-center gap-2.5 text-[14px] text-[#1a1a1a]"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#b8953f]" />
                    {spec}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center mt-8 h-11 px-6 bg-[#0c1e3f] text-white text-[13px] font-medium rounded-sm hover:bg-[#162d54] transition-colors cursor-pointer"
              >
                Request specification
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
