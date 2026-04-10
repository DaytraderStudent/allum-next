"use client";

import Image from "next/image";

const products = [
  {
    title: "Turntable Systems",
    desc: "Onshore and offshore turntables for subsea cable storage and handling. Modular designs, full EPC delivery. Recognized supplier for the global cable industry.",
    specs: "Up to 7,000t capacity",
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
  },
  {
    title: "Compact Flotation Units",
    desc: "Patented produced water treatment technology. Less than 0.1% reject rate. Two patents granted, tested at Equinor, backed by Innovation Norway and the Research Council.",
    specs: "< 0.1% reject rate",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
  {
    title: "Handling Cranes",
    desc: "Knuckle-boom and service cranes tailored to client specifications. Full 3D FE analysis, delivered classification-ready for marine and industrial operations.",
    specs: "Up to 15t SWL",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    title: "Zero Emission Work Boat",
    desc: "12-metre electric work boat for harbour and near-shore operations. Battery-electric propulsion, 8 knots service speed, 5 tonne deck capacity.",
    specs: "120 kWh battery",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-[560px] mb-16">
          <p className="text-gray-400 text-[13px] font-medium tracking-[0.1em] uppercase mb-5">
            Products
          </p>
          <h2 className="text-[#0f1a2e] text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.2]">
            Purpose-built equipment
            <br />
            <span className="font-semibold">engineered to perform</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div key={p.title} className="group relative overflow-hidden">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e]/90 via-[#0f1a2e]/30 to-transparent" />
                {/* Spec badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5">
                  <span className="text-[#0f1a2e] text-[11px] font-semibold uppercase tracking-[0.05em]">
                    {p.specs}
                  </span>
                </div>
              </div>
              {/* Text overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-white text-[22px] font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-white/50 text-[14px] leading-[1.6] max-w-[360px]">
                  {p.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center mt-4 text-white text-[13px] font-semibold tracking-[0.02em] opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  Request specification &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
