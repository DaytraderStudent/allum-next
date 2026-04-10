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
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-gold text-[12px] font-semibold uppercase tracking-[0.15em] mb-4">
              Selected Work
            </p>
            <h2 className="font-heading text-foreground text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-[0.02em] uppercase">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-gold text-[14px] font-semibold hover:text-[#d4911c] transition-colors cursor-pointer"
          >
            View all projects &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {featured.map((p) => (
            <Link
              key={p.title}
              href="/projects"
              className="group bg-card border border-border hover:border-gold/30 transition-all overflow-hidden block"
            >
              <div
                className={`relative overflow-hidden ${p.isModel ? "aspect-[16/10] bg-surface flex items-center justify-center" : "aspect-[16/10]"}`}
              >
                {p.isModel ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={400}
                    height={250}
                    className="object-contain max-h-[80%] max-w-[80%] group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute top-3 right-3 bg-[#0A0F1A]/80 backdrop-blur-sm px-2 py-1">
                  <span className="font-mono text-[11px] text-white font-medium">
                    {p.year}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex gap-1.5 mb-3">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium uppercase tracking-[0.04em] text-gold bg-gold/10 px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-foreground text-[15px] font-semibold leading-snug group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-[12px] text-muted-foreground">
                  {p.client}
                </p>
                <div className="mt-4 h-[2px] w-0 group-hover:w-12 bg-gold transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
