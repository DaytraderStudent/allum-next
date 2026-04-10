"use client";

import { useState } from "react";
import { Search, ExternalLink, Calendar, MapPin, Building2, Filter } from "lucide-react";

interface Tender {
  id: string;
  title: string;
  buyer: string;
  location: string;
  deadline: string;
  value: string;
  source: string;
  url: string;
  relevance: "high" | "medium" | "low";
  category: string;
}

// Simulated tenders — in production this would hit Doffin/TED APIs
const sampleTenders: Tender[] = [
  {
    id: "1",
    title: "Cable Laying Equipment for Offshore Wind Farm — North Sea",
    buyer: "Equinor ASA",
    location: "Stavanger, Norway",
    deadline: "2026-05-15",
    value: "NOK 15-25M",
    source: "Doffin",
    url: "https://doffin.no",
    relevance: "high",
    category: "Cable Equipment",
  },
  {
    id: "2",
    title: "Structural Modifications — FPSO Vessel Conversion",
    buyer: "Aker BP ASA",
    location: "Fornebu, Norway",
    deadline: "2026-05-28",
    value: "NOK 8-12M",
    source: "Doffin",
    url: "https://doffin.no",
    relevance: "high",
    category: "Maritime",
  },
  {
    id: "3",
    title: "Produced Water Treatment System — Offshore Platform",
    buyer: "ConocoPhillips Norge",
    location: "Tananger, Norway",
    deadline: "2026-06-01",
    value: "NOK 5-8M",
    source: "TED",
    url: "https://ted.europa.eu",
    relevance: "high",
    category: "Water Treatment",
  },
  {
    id: "4",
    title: "Marine Crane Design & Classification — Research Vessel",
    buyer: "Havforskningsinstituttet",
    location: "Bergen, Norway",
    deadline: "2026-06-10",
    value: "NOK 3-5M",
    source: "Doffin",
    url: "https://doffin.no",
    relevance: "medium",
    category: "Lifting Equipment",
  },
  {
    id: "5",
    title: "Engineering Services Framework — Subsea Cable Installation",
    buyer: "Nexans Norway AS",
    location: "Halden, Norway",
    deadline: "2026-05-20",
    value: "NOK 10-20M",
    source: "Mercell",
    url: "https://mercell.com",
    relevance: "high",
    category: "Cable Equipment",
  },
  {
    id: "6",
    title: "Process Equipment Design — Gas Processing Facility",
    buyer: "Gassco AS",
    location: "Haugesund, Norway",
    deadline: "2026-06-15",
    value: "NOK 4-7M",
    source: "Doffin",
    url: "https://doffin.no",
    relevance: "medium",
    category: "Process Industry",
  },
  {
    id: "7",
    title: "Naval Architecture — Ferry Electrification Study",
    buyer: "Norled AS",
    location: "Stavanger, Norway",
    deadline: "2026-05-30",
    value: "NOK 2-4M",
    source: "TED",
    url: "https://ted.europa.eu",
    relevance: "medium",
    category: "Maritime",
  },
  {
    id: "8",
    title: "Turntable System — Cable Factory Expansion",
    buyer: "Prysmian Group",
    location: "Drammen, Norway",
    deadline: "2026-07-01",
    value: "NOK 20-30M",
    source: "Mercell",
    url: "https://mercell.com",
    relevance: "high",
    category: "Cable Equipment",
  },
];

const categories = [
  "All",
  "Cable Equipment",
  "Maritime",
  "Water Treatment",
  "Lifting Equipment",
  "Process Industry",
  "Energy",
];

export default function TenderFinder() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [relevanceFilter, setRelevanceFilter] = useState<string>("all");

  const filtered = sampleTenders.filter((t) => {
    const matchesSearch =
      !search ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.buyer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      category === "All" || t.category === category;
    const matchesRelevance =
      relevanceFilter === "all" || t.relevance === relevanceFilter;
    return matchesSearch && matchesCategory && matchesRelevance;
  });

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Search and filters */}
        <div className="bg-[#f7f7f7] p-6 lg:p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tenders by keyword or buyer..."
                className="w-full h-11 pl-11 pr-4 border border-gray-300 bg-white text-[14px] text-[#111827] focus:border-[#0f1a2e] focus:outline-none transition-colors"
              />
            </div>
            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-11 px-4 border border-gray-300 bg-white text-[14px] text-[#111827] focus:border-[#0f1a2e] focus:outline-none cursor-pointer appearance-none min-w-[180px]"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "All categories" : c}
                </option>
              ))}
            </select>
            {/* Relevance */}
            <select
              value={relevanceFilter}
              onChange={(e) => setRelevanceFilter(e.target.value)}
              className="h-11 px-4 border border-gray-300 bg-white text-[14px] text-[#111827] focus:border-[#0f1a2e] focus:outline-none cursor-pointer appearance-none min-w-[160px]"
            >
              <option value="all">All relevance</option>
              <option value="high">High relevance</option>
              <option value="medium">Medium relevance</option>
            </select>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[12px] text-gray-400">
            <Filter className="w-3 h-3" />
            {filtered.length} tender{filtered.length !== 1 ? "s" : ""} found
          </div>
        </div>

        {/* Results */}
        <div className="divide-y divide-gray-200">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="py-6 grid lg:grid-cols-[1fr_auto] gap-4 lg:gap-8 items-start group"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`inline-block text-[10px] font-semibold uppercase tracking-[0.06em] px-2 py-0.5 ${
                      t.relevance === "high"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {t.relevance} relevance
                  </span>
                  <span className="text-[11px] text-gray-400 uppercase tracking-[0.04em]">
                    {t.category}
                  </span>
                </div>
                <h3 className="text-[#0f1a2e] text-[18px] font-semibold leading-[1.35]">
                  {t.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-[13px] text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    {t.buyer}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {t.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Deadline: {t.deadline}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-[#0f1a2e] text-[15px] font-semibold">
                    {t.value}
                  </div>
                  <div className="text-gray-400 text-[11px] uppercase tracking-[0.04em]">
                    {t.source}
                  </div>
                </div>
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 h-9 px-4 bg-[#0f1a2e] text-white text-[12px] font-semibold hover:bg-[#1a2d4a] transition-colors cursor-pointer"
                >
                  View
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-[16px]">
              No tenders match your search criteria.
            </p>
          </div>
        )}

        {/* Info box */}
        <div className="mt-12 bg-[#f7f7f7] p-8 lg:p-10">
          <h3 className="text-[#0f1a2e] text-[18px] font-semibold mb-3">
            About this tool
          </h3>
          <p className="text-gray-500 text-[15px] leading-[1.7] max-w-[700px]">
            The Tender Finder aggregates contract opportunities from Doffin
            (Norwegian public procurement), TED (European tenders), and Mercell
            that match Allum Engineering&apos;s core competencies. Tenders are
            automatically scored for relevance based on keywords related to
            cable equipment, maritime modifications, structural engineering,
            water treatment, and process design.
          </p>
          <p className="mt-3 text-gray-400 text-[13px]">
            Data shown is for demonstration. In production, this connects to
            live procurement APIs with daily updates and email notifications.
          </p>
        </div>
      </div>
    </section>
  );
}
