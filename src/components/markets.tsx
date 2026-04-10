"use client";

import Image from "next/image";
import Link from "next/link";

const markets = [
  {
    title: "Cable Equipment",
    text: "Turntables, carousels, cable laying spread and installation equipment for subsea cable projects.",
    image: "/images/thumb1.png",
    isModel: true,
  },
  {
    title: "Maritime",
    text: "Ship modifications, vessel conversions, classification surveys, and zero-emission vessel design.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    isModel: false,
  },
  {
    title: "Energy",
    text: "FPSO modifications, drilling rig upgrades, offshore structural engineering and mechanical integration.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
    isModel: false,
  },
  {
    title: "Process Industry",
    text: "Purpose-built equipment, process plant layout, and complete systems integration.",
    image: "/images/thumb4.png",
    isModel: true,
  },
  {
    title: "Water Treatment",
    text: "Patented CFU technology for produced water treatment. Under 0.1% reject rate, tested at Equinor.",
    image: "/images/project.jpg",
    isModel: false,
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
            <Link
              key={m.title}
              href="/contact"
              className="group grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-16 items-center py-10 border-t border-gray-200 last:border-b cursor-pointer block"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-[#0f1a2e] text-[28px] lg:text-[32px] font-light leading-snug group-hover:text-gray-600 transition-colors">
                  {m.title}
                </h3>
                <p className="mt-4 text-gray-500 text-[15px] leading-[1.7] max-w-[480px]">
                  {m.text}
                </p>
                <span className="inline-flex items-center mt-5 text-[#0f1a2e] text-[13px] font-semibold tracking-[0.02em] opacity-0 group-hover:opacity-100 transition-opacity">
                  Get in touch &rarr;
                </span>
              </div>
              <div
                className={`relative overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""} ${m.isModel ? "aspect-[16/10] bg-gray-100 flex items-center justify-center" : "aspect-[16/10]"}`}
              >
                {m.isModel ? (
                  <Image
                    src={m.image}
                    alt={m.title}
                    width={400}
                    height={250}
                    className="object-contain max-h-[85%] max-w-[85%] grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
