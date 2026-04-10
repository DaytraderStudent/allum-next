"use client";

import Image from "next/image";

const markets = [
  {
    title: "Cable Equipment",
    text: "Turntables, carousels, cable laying spread and installation equipment for subsea cable production worldwide. Acting as both engineering partner and turnkey supplier.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
  {
    title: "Maritime",
    text: "Ship modifications, vessel conversions, classification surveys, and zero-emission vessel design. Naval architecture and marine operations support.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
  },
  {
    title: "Energy",
    text: "FPSO modifications, drilling rig upgrades, offshore structural engineering and mechanical integration for the oil, gas and renewable sectors.",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80",
  },
  {
    title: "Process Industry",
    text: "Design of purpose-built equipment, process plant layout, and complete systems integration for industrial clients.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
  },
  {
    title: "Water Treatment",
    text: "Patented Compact Flotation Unit (CFU) technology for produced water treatment. Under 0.1% reject rate, tested at Equinor, backed by Innovation Norway.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
];

export default function Markets() {
  return (
    <section id="markets" className="py-24 lg:py-32 bg-[#f7f7f7]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-[560px] mb-16">
          <p className="text-gray-400 text-[13px] font-medium tracking-[0.1em] uppercase mb-5">
            Our markets
          </p>
          <h2 className="text-[#0f1a2e] text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.2]">
            Serving five industries
            <br />
            <span className="font-semibold">across five decades</span>
          </h2>
        </div>

        <div className="space-y-1">
          {markets.map((m, i) => (
            <div
              key={m.title}
              className="group grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-16 items-center py-10 border-t border-gray-200 last:border-b cursor-pointer"
            >
              {/* Text — swap order on even rows for visual variety */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-[#0f1a2e] text-[28px] lg:text-[32px] font-light leading-snug group-hover:text-gray-600 transition-colors">
                  {m.title}
                </h3>
                <p className="mt-4 text-gray-500 text-[15px] leading-[1.7] max-w-[480px]">
                  {m.text}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center mt-5 text-[#0f1a2e] text-[13px] font-semibold tracking-[0.02em] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  Learn more &rarr;
                </a>
              </div>
              {/* Image */}
              <div
                className={`relative aspect-[16/10] overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
