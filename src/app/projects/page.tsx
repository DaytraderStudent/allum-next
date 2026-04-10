"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const projects = [
  {
    id: 1,
    title: "Malta–Italy IC2 Cable Storage System",
    client: "Nexans",
    year: 2023,
    category: "Subsea Cable",
    tags: ["245 kV HVAC", "Turntable", "Loading System", "Tensioner"],
    description:
      "Design, fabrication, transport and installation of modular storage turntable and loading system including tensioner and pull-in winch for the InterConnect Malta IC2 cable project.",
    image: "/images/thumb1.png",
    isModel: true,
  },
  {
    id: 2,
    title: "Petrojarl 1 FPSO — Process Modules",
    client: "Confidential",
    year: 1987,
    category: "Offshore",
    tags: ["FPSO", "Process Modules", "NOK 110M"],
    description:
      "Contributed to the world's first FPSO vessel, delivering process module engineering with NOK 110M in contract value.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
    isModel: false,
  },
  {
    id: 3,
    title: "Subsea Cable Handling Equipment",
    client: "Nexans",
    year: 2022,
    category: "Subsea Cable",
    tags: ["Cable Laying", "Handling Equipment", "HV Cable"],
    description:
      "Comprehensive engineering and supply of production, handling and storage equipment for high-voltage subsea cables.",
    image: "/images/thumb2.png",
    isModel: true,
  },
  {
    id: 4,
    title: "Compact Flotation Unit (CFU)",
    client: "Allum Technology / Equinor",
    year: 2019,
    category: "Process Industry",
    tags: ["Water Treatment", "Patented", "<0.1% Reject Rate"],
    description:
      "Proprietary produced water treatment technology. Two patents granted. Tested at Equinor, backed by Innovation Norway.",
    image: "/images/project.jpg",
    isModel: false,
  },
  {
    id: 5,
    title: "Offshore Wind Cable Installation Support",
    client: "Solstad Offshore",
    year: 2024,
    category: "Subsea Cable",
    tags: ["Offshore Wind", "Cable Handling", "Vessel Equipment"],
    description:
      "Cable handling equipment design and delivery for offshore wind installation vessel operations in the North Sea.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    isModel: false,
  },
  {
    id: 6,
    title: "Process Plant 3D Modelling",
    client: "Confidential",
    year: 2023,
    category: "Process Industry",
    tags: ["3D Modelling", "Process Design", "Layout"],
    description:
      "Complete 3D modelling and layout design for industrial process plant facility including structural analysis.",
    image: "/images/thumb3.png",
    isModel: true,
  },
  {
    id: 7,
    title: "Vessel Modification — Bulk Carrier",
    client: "Grieg Star",
    year: 2024,
    category: "Marine",
    tags: ["Ship Modification", "Classification", "Structural"],
    description:
      "Structural modifications and classification society liaison for bulk carrier conversion project.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    isModel: false,
  },
  {
    id: 8,
    title: "Knuckle-Boom Crane Design",
    client: "Havforskningsinstituttet",
    year: 2024,
    category: "Lifting",
    tags: ["Marine Crane", "3D FEA", "Classification Ready"],
    description:
      "Complete knuckle-boom service crane design for research vessel. Full 3D FE analysis, delivered classification-ready.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    isModel: false,
  },
];

const categories = ["All", "Subsea Cable", "Offshore", "Marine", "Process Industry", "Lifting"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 bg-background">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-gold text-[12px] font-semibold uppercase tracking-[0.15em] mb-4">
              Portfolio
            </p>
            <h1 className="font-heading text-foreground text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-[0.02em] uppercase">
              Our Projects
            </h1>
            <p className="mt-4 text-muted-foreground text-[16px] max-w-[500px]">
              Five decades of delivering engineering solutions across subsea cable, offshore, marine and process industries.
            </p>

            {/* Filter */}
            <div className="mt-10 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`h-9 px-4 text-[13px] font-medium transition-colors cursor-pointer ${
                    filter === cat
                      ? "bg-gold text-[#0A0F1A]"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-gold/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="pb-24 bg-background">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="group bg-card border border-border hover:border-gold/30 transition-all overflow-hidden"
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden ${p.isModel ? "aspect-[16/10] bg-surface flex items-center justify-center" : "aspect-[16/10]"}`}>
                    {p.isModel ? (
                      <Image src={p.image} alt={p.title} width={400} height={250} className="object-contain max-h-[80%] max-w-[80%] group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    )}
                    {/* Year badge */}
                    <div className="absolute top-3 right-3 bg-[#0A0F1A]/80 backdrop-blur-sm px-2 py-1">
                      <span className="font-mono text-[11px] text-white font-medium">{p.year}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] font-medium uppercase tracking-[0.04em] text-gold bg-gold/10 px-2 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-foreground text-[16px] font-semibold leading-snug group-hover:text-gold transition-colors">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-muted-foreground text-[13px] leading-[1.6] line-clamp-2">
                      {p.description}
                    </p>

                    {p.client && (
                      <p className="mt-3 text-[12px] text-muted-foreground">
                        Client: <span className="text-foreground font-medium">{p.client}</span>
                      </p>
                    )}

                    {/* Gold line on hover */}
                    <div className="mt-4 h-[2px] bg-gold/0 group-hover:bg-gold w-0 group-hover:w-12 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
