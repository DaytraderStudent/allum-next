"use client";

import Image from "next/image";
import Link from "next/link";

const featured = [
  {
    title: "Malta–Italy IC2 Cable Storage System",
    client: "Nexans",
    year: 2023,
    tags: ["245 kV HVAC", "Turntable"],
    image: "/images/thumb1.png",
    isModel: true,
  },
  {
    title: "Petrojarl 1 FPSO — Process Modules",
    client: "Confidential",
    year: 1987,
    tags: ["FPSO", "NOK 110M"],
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
    isModel: false,
  },
  {
    title: "Compact Flotation Unit (CFU)",
    client: "Allum Technology",
    year: 2019,
    tags: ["Patented", "<0.1% Reject"],
    image: "/images/project.jpg",
    isModel: false,
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-24 lg:py-32 bg-[#f7f7f7]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <p className="text-gray-400 text-[13px] font-medium tracking-[0.1em] uppercase mb-5">
              Selected Work
            </p>
            <h2 className="text-[#0f1a2e] text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.2]">
              Featured <span className="font-semibold">projects</span>
            </h2>
          </div>
          <Link href="/projects" className="text-[#0f1a2e] text-[14px] font-semibold hover:text-gray-600 transition-colors cursor-pointer">
            View all projects &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Link key={p.title} href="/projects" className="group block bg-white border border-gray-200 hover:border-gray-300 transition-colors overflow-hidden">
              <div className={`relative overflow-hidden ${p.isModel ? "aspect-[16/10] bg-gray-50 flex items-center justify-center" : "aspect-[16/10]"}`}>
                {p.isModel ? (
                  <Image src={p.image} alt={p.title} width={400} height={250} className="object-contain max-h-[80%] max-w-[80%] group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1">
                  <span className="text-[11px] font-semibold text-[#0f1a2e]">{p.year}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex gap-1.5 mb-3">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold uppercase tracking-[0.04em] text-[#0f1a2e] bg-gray-100 px-2 py-0.5">{tag}</span>
                  ))}
                </div>
                <h3 className="text-[#0f1a2e] text-[15px] font-semibold leading-snug group-hover:text-gray-600 transition-colors">{p.title}</h3>
                <p className="mt-2 text-[12px] text-gray-500">{p.client}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
