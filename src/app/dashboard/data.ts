export type TenderStatus =
  | "new"
  | "evaluating"
  | "writing"
  | "submitted"
  | "won"
  | "lost";

export interface Tender {
  id: string;
  title: string;
  buyer: string;
  location: string;
  deadline: string;
  value: string;
  valueLow: number;
  valueHigh: number;
  source: "Doffin" | "TED" | "Mercell";
  url: string;
  relevance: number; // 0-100
  category: string;
  status: TenderStatus;
  notes: string;
  addedAt: string;
  keywords: string[];
}

export const STATUS_LABELS: Record<TenderStatus, string> = {
  new: "Nye anbud",
  evaluating: "Vurderer",
  writing: "Skriver tilbud",
  submitted: "Sendt inn",
  won: "Vunnet",
  lost: "Tapt",
};

export const STATUS_COLORS: Record<TenderStatus, string> = {
  new: "#2563eb",
  evaluating: "#f59e0b",
  writing: "#8b5cf6",
  submitted: "#06b6d4",
  won: "#16a34a",
  lost: "#dc2626",
};

// Allum's competency keywords for relevance scoring
const COMPETENCY_KEYWORDS = [
  "cable", "kabel", "subsea", "turntable", "carousel",
  "marine", "marin", "maritime", "fartøy", "vessel", "ship", "skip",
  "offshore", "FPSO", "drilling", "bore", "plattform", "platform",
  "structural", "konstruksjon", "FEA", "structural analysis",
  "mechanical", "mekanisk", "equipment", "utstyr",
  "piping", "rør", "pressure vessel", "trykkbeholder",
  "naval", "architecture", "stabilitet", "stability",
  "crane", "kran", "lifting", "løft",
  "water treatment", "vannbehandling", "CFU", "flotation", "produced water",
  "process", "prosess", "engineering", "ingeniør",
  "fabrication", "fabrikasjon", "turnkey",
  "modification", "modifikasjon", "conversion", "ombygging",
];

function scoreRelevance(title: string, buyer: string): number {
  const text = `${title} ${buyer}`.toLowerCase();
  let hits = 0;
  for (const kw of COMPETENCY_KEYWORDS) {
    if (text.includes(kw.toLowerCase())) hits++;
  }
  return Math.min(100, Math.round((hits / 5) * 100));
}

// Demo tenders
export const INITIAL_TENDERS: Tender[] = [
  {
    id: "t1",
    title: "Rammeavtale engineering subsea kabelinstallasjon",
    buyer: "Nexans Norway AS",
    location: "Halden",
    deadline: "2026-05-20",
    value: "10–20M NOK",
    valueLow: 10_000_000,
    valueHigh: 20_000_000,
    source: "Doffin",
    url: "https://doffin.no",
    relevance: scoreRelevance("Rammeavtale engineering subsea kabelinstallasjon", "Nexans Norway AS"),
    category: "Cable Equipment",
    status: "writing",
    notes: "Har levert turntable til Nexans før. God match.",
    addedAt: "2026-04-02",
    keywords: ["subsea", "cable", "engineering", "kabel"],
  },
  {
    id: "t2",
    title: "Strukturelle modifikasjoner — FPSO Vessel Conversion",
    buyer: "Aker BP ASA",
    location: "Fornebu",
    deadline: "2026-05-28",
    value: "8–12M NOK",
    valueLow: 8_000_000,
    valueHigh: 12_000_000,
    source: "Doffin",
    url: "https://doffin.no",
    relevance: scoreRelevance("Strukturelle modifikasjoner FPSO Vessel Conversion", "Aker BP ASA"),
    category: "Energy",
    status: "evaluating",
    notes: "",
    addedAt: "2026-04-05",
    keywords: ["FPSO", "structural", "offshore", "modification"],
  },
  {
    id: "t3",
    title: "Produced Water Treatment System — Offshore Platform",
    buyer: "ConocoPhillips Norge",
    location: "Tananger",
    deadline: "2026-06-01",
    value: "5–8M NOK",
    valueLow: 5_000_000,
    valueHigh: 8_000_000,
    source: "TED",
    url: "https://ted.europa.eu",
    relevance: scoreRelevance("Produced Water Treatment System Offshore Platform", "ConocoPhillips"),
    category: "Water Treatment",
    status: "new",
    notes: "",
    addedAt: "2026-04-08",
    keywords: ["water treatment", "produced water", "offshore"],
  },
  {
    id: "t4",
    title: "Krandesign og klassifisering — forskningsfartøy",
    buyer: "Havforskningsinstituttet",
    location: "Bergen",
    deadline: "2026-06-10",
    value: "3–5M NOK",
    valueLow: 3_000_000,
    valueHigh: 5_000_000,
    source: "Doffin",
    url: "https://doffin.no",
    relevance: scoreRelevance("Krandesign klassifisering forskningsfartøy", "Havforskningsinstituttet"),
    category: "Lifting Equipment",
    status: "new",
    notes: "",
    addedAt: "2026-04-09",
    keywords: ["crane", "kran", "vessel", "classification"],
  },
  {
    id: "t5",
    title: "Turntable System — Cable Factory Expansion",
    buyer: "Prysmian Group",
    location: "Drammen",
    deadline: "2026-07-01",
    value: "20–30M NOK",
    valueLow: 20_000_000,
    valueHigh: 30_000_000,
    source: "Mercell",
    url: "https://mercell.com",
    relevance: scoreRelevance("Turntable System Cable Factory Expansion", "Prysmian Group"),
    category: "Cable Equipment",
    status: "evaluating",
    notes: "Stort prosjekt. Trenger partnere for fabrikasjon.",
    addedAt: "2026-04-01",
    keywords: ["turntable", "cable", "fabrication"],
  },
  {
    id: "t6",
    title: "Prosessutstyr design — gassproseseringsanlegg",
    buyer: "Gassco AS",
    location: "Haugesund",
    deadline: "2026-06-15",
    value: "4–7M NOK",
    valueLow: 4_000_000,
    valueHigh: 7_000_000,
    source: "Doffin",
    url: "https://doffin.no",
    relevance: scoreRelevance("Prosessutstyr design gassproseseringsanlegg", "Gassco AS"),
    category: "Process Industry",
    status: "new",
    notes: "",
    addedAt: "2026-04-07",
    keywords: ["process", "equipment", "design", "gas"],
  },
  {
    id: "t7",
    title: "Naval Architecture — ferge-elektrifiseringsstudie",
    buyer: "Norled AS",
    location: "Stavanger",
    deadline: "2026-05-30",
    value: "2–4M NOK",
    valueLow: 2_000_000,
    valueHigh: 4_000_000,
    source: "TED",
    url: "https://ted.europa.eu",
    relevance: scoreRelevance("Naval Architecture ferge elektrifisering", "Norled AS"),
    category: "Maritime",
    status: "submitted",
    notes: "Tilbud sendt 3. april. Venter på svar.",
    addedAt: "2026-03-20",
    keywords: ["naval", "architecture", "vessel", "maritime"],
  },
  {
    id: "t8",
    title: "Cable Handling Equipment — Offshore Wind Installation Vessel",
    buyer: "Solstad Offshore",
    location: "Skudeneshavn",
    deadline: "2026-04-25",
    value: "6–10M NOK",
    valueLow: 6_000_000,
    valueHigh: 10_000_000,
    source: "Mercell",
    url: "https://mercell.com",
    relevance: scoreRelevance("Cable Handling Equipment Offshore Wind Installation Vessel", "Solstad Offshore"),
    category: "Cable Equipment",
    status: "won",
    notes: "Vunnet! Kontraktsverdi 8.2M NOK.",
    addedAt: "2026-02-15",
    keywords: ["cable", "handling", "offshore", "wind", "vessel"],
  },
  {
    id: "t9",
    title: "Røranalyse og trykkbeholderdesign — kjemisk anlegg",
    buyer: "Yara International",
    location: "Porsgrunn",
    deadline: "2026-04-10",
    value: "3–6M NOK",
    valueLow: 3_000_000,
    valueHigh: 6_000_000,
    source: "Doffin",
    url: "https://doffin.no",
    relevance: scoreRelevance("Røranalyse trykkbeholderdesign kjemisk anlegg", "Yara International"),
    category: "Process Industry",
    status: "lost",
    notes: "Tapt til Aker Solutions. Vår pris var 15% høyere.",
    addedAt: "2026-02-01",
    keywords: ["piping", "pressure vessel", "process"],
  },
  {
    id: "t10",
    title: "Skipsmodifikasjon — bulkskip konvertering",
    buyer: "Grieg Star",
    location: "Bergen",
    deadline: "2026-05-15",
    value: "5–9M NOK",
    valueLow: 5_000_000,
    valueHigh: 9_000_000,
    source: "Mercell",
    url: "https://mercell.com",
    relevance: scoreRelevance("Skipsmodifikasjon bulkskip konvertering", "Grieg Star"),
    category: "Maritime",
    status: "submitted",
    notes: "Sendt 7. april. Sterk konkurrent fra Bergen.",
    addedAt: "2026-03-10",
    keywords: ["vessel", "modification", "ship", "maritime"],
  },
];
