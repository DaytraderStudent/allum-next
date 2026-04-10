"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Turntable Systems",
    desc: "Onshore and offshore turntables for subsea cable storage and handling. Modular designs, full EPC delivery.",
    specs: "Up to 7,000t capacity",
    image: "/images/deliver2.png",
    bgClass: "bg-[#0f1a2e]",
    isIllustration: true,
  },
  {
    title: "Compact Flotation Units",
    desc: "Patented produced water treatment. Less than 0.1% reject rate. Tested at Equinor, backed by Innovation Norway.",
    specs: "< 0.1% reject rate",
    image: "/images/project.jpg",
    bgClass: "bg-gray-100",
    isIllustration: false,
  },
  {
    title: "Cable Handling Equipment",
    desc: "Complete cable handling systems for marine operations — spooling lines, chutes, A-frames, tensioners and winches.",
    specs: "Turnkey delivery",
    image: "/images/thumb1.png",
    bgClass: "bg-gray-50",
    isIllustration: true,
  },
  {
    title: "Process Equipment",
    desc: "Purpose-built process plant equipment. 3D modelling, structural analysis, and fabrication support.",
    specs: "Custom design",
    image: "/images/thumb3.png",
    bgClass: "bg-gray-50",
    isIllustration: true,
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
            <div key={p.title} className="group">
              {/* Image */}
              <div
                className={`relative aspect-[16/10] overflow-hidden ${p.bgClass} flex items-center justify-center`}
              >
                {p.isIllustration ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={500}
                    height={300}
                    className={`object-contain max-h-[85%] max-w-[85%] group-hover:scale-105 transition-transform duration-700 ${p.bgClass === "bg-[#0f1a2e]" ? "invert brightness-200" : ""}`}
                  />
                ) : (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                {/* Spec badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5">
                  <span className="text-[#0f1a2e] text-[11px] font-semibold uppercase tracking-[0.05em]">
                    {p.specs}
                  </span>
                </div>
              </div>
              {/* Text below image */}
              <div className="mt-4">
                <h3 className="text-[#0f1a2e] text-[20px] font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-gray-500 text-[14px] leading-[1.6]">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center h-12 px-8 border border-gray-300 text-[#0f1a2e] text-[14px] font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
          >
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
}
