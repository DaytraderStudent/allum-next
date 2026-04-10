"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";

const projects = [
  { id: 1, title: "Malta–Italy IC2 Cable Storage System", client: "Nexans", year: 2023, category: "Subsea Cable", tags: ["245 kV HVAC", "Turntable", "Tensioner"], description: "Design, fabrication, transport and installation of modular storage turntable and loading system including tensioner and pull-in winch for the InterConnect Malta IC2 cable project.", image: "/images/thumb1.png", isModel: true },
  { id: 2, title: "Petrojarl 1 FPSO — Process Modules", client: "Confidential", year: 1987, category: "Offshore", tags: ["FPSO", "Process Modules", "NOK 110M"], description: "Contributed to the world's first FPSO vessel, delivering process module engineering with NOK 110M in contract value.", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80", isModel: false },
  { id: 3, title: "Subsea Cable Handling Equipment", client: "Nexans", year: 2022, category: "Subsea Cable", tags: ["Cable Laying", "HV Cable"], description: "Comprehensive engineering and supply of production, handling and storage equipment for high-voltage subsea cables.", image: "/images/thumb2.png", isModel: true },
  { id: 4, title: "Compact Flotation Unit (CFU)", client: "Allum Technology / Equinor", year: 2019, category: "Process Industry", tags: ["Water Treatment", "Patented"], description: "Proprietary produced water treatment technology. Two patents granted. Tested at Equinor, backed by Innovation Norway.", image: "/images/project.jpg", isModel: false },
  { id: 5, title: "Offshore Wind Cable Installation", client: "Solstad Offshore", year: 2024, category: "Subsea Cable", tags: ["Offshore Wind", "Cable Handling"], description: "Cable handling equipment design and delivery for offshore wind installation vessel operations in the North Sea.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80", isModel: false },
  { id: 6, title: "Process Plant 3D Modelling", client: "Confidential", year: 2023, category: "Process Industry", tags: ["3D Modelling", "Layout"], description: "Complete 3D modelling and layout design for industrial process plant facility.", image: "/images/thumb3.png", isModel: true },
  { id: 7, title: "Vessel Modification — Bulk Carrier", client: "Grieg Star", year: 2024, category: "Marine", tags: ["Ship Modification", "Structural"], description: "Structural modifications and classification society liaison for bulk carrier conversion.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80", isModel: false },
  { id: 8, title: "Knuckle-Boom Crane Design", client: "Havforskningsinstituttet", year: 2024, category: "Lifting", tags: ["Marine Crane", "3D FEA"], description: "Complete knuckle-boom service crane design for research vessel. Full 3D FE analysis, classification-ready.", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80", isModel: false },
];

const categories = ["All", "Subsea Cable", "Offshore", "Marine", "Process Industry", "Lifting"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Navigation />
      <main>
        <PageHeader overline="Portfolio" title="Our" titleBold="projects" description="Five decades of delivering engineering solutions across subsea cable, offshore, marine and process industries." />

        {/* Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`h-9 px-4 text-[13px] font-medium transition-colors cursor-pointer ${filter === cat ? "bg-[#0f1a2e] text-white" : "bg-gray-100 text-gray-500 hover:text-[#0f1a2e]"}`}>
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <div key={p.id} className="group bg-white border border-gray-200 hover:border-gray-300 transition-colors overflow-hidden">
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
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-semibold uppercase tracking-[0.04em] text-[#0f1a2e] bg-gray-100 px-2 py-0.5">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-[#0f1a2e] text-[16px] font-semibold leading-snug">{p.title}</h3>
                    <p className="mt-2 text-gray-500 text-[13px] leading-[1.6] line-clamp-2">{p.description}</p>
                    <p className="mt-3 text-[12px] text-gray-400">Client: <span className="text-[#0f1a2e] font-medium">{p.client}</span></p>
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
