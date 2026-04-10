"use client";

import { useState } from "react";
import { Upload, FileText, CheckCircle2, AlertTriangle, Sparkles } from "lucide-react";

interface AnalysisResult {
  relevance: number;
  summary: string;
  keyRequirements: string[];
  allumStrengths: string[];
  risks: string[];
  recommendation: string;
}

// Simulated AI analysis
function analyzeDocument(filename: string): AnalysisResult {
  // In production, this would call an AI API with the document content
  const isRelevant = filename.toLowerCase().includes("cable") ||
    filename.toLowerCase().includes("marine") ||
    filename.toLowerCase().includes("offshore") ||
    filename.toLowerCase().includes("engineering");

  if (isRelevant) {
    return {
      relevance: 82,
      summary:
        "Anbudet gjelder engineering-tjenester for kabelinstallasjonsprosjekt i Nordsjøen. Oppdragsgiver søker erfaren partner med kompetanse innen strukturell analyse, kabelhåndteringsutstyr og marin engineering. Kontraktsperiode 18 måneder med opsjon på 12 måneder forlengelse.",
      keyRequirements: [
        "ISO 9001 sertifisering (Allum har dette ✓)",
        "Minimum 5 års erfaring med subsea kabelprosjekter",
        "Kompetanse innen strukturell analyse og FEA",
        "Kapasitet til å levere innen Q3 2026",
        "Referanser fra minimum 3 tilsvarende prosjekter",
        "Norsk/skandinavisk tilstedeværelse",
      ],
      allumStrengths: [
        "Direkte erfaring med turntable-levering til Nexans",
        "ISO 9001 sertifisert — oppfyller kvalitetskrav",
        "50+ års erfaring i kabelindustrien",
        "Lokalt i Norge med kort responstid",
        "Patentert CFU-teknologi kan være differensiator",
      ],
      risks: [
        "Kapasitetsbegrensning med ~20 ansatte — vurder partner",
        "Mangler muligens spesifikk offshore vinderfaring",
        "Priskonkurranse fra større aktører (Aker, DNV)",
      ],
      recommendation:
        "Sterkt anbefalt å levere tilbud. God match med Allums kjernekompetanse. Fremhev Nexans-referansen og ISO 9001. Vurder samarbeid med partner for kapasitet.",
    };
  }

  return {
    relevance: 25,
    summary:
      "Anbudet gjelder tjenester utenfor Allums primære kompetanseområder. Begrenset match med eksisterende erfaring og kapasitet.",
    keyRequirements: [
      "Kompetanse innen IT-infrastruktur",
      "Sertifisering innen cybersikkerhet",
      "24/7 support-kapasitet",
    ],
    allumStrengths: [
      "Generell engineering-kompetanse kan delvis overføres",
    ],
    risks: [
      "Utenfor kjernekompetanse",
      "Ingen relevante referanser",
      "Høy risiko for å tape mot spesialiserte aktører",
    ],
    recommendation:
      "Ikke anbefalt. Anbudet ligger utenfor Allums kjerneområder. Bruk ressursene på mer relevante muligheter i pipeline.",
  };
}

export default function DocAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    if (dropped) processFile(dropped);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) processFile(selected);
  };

  const processFile = (f: File) => {
    setFile(f);
    setAnalyzing(true);
    setResult(null);

    // Simulate analysis delay
    setTimeout(() => {
      setResult(analyzeDocument(f.name));
      setAnalyzing(false);
    }, 2000);
  };

  const reset = () => {
    setFile(null);
    setResult(null);
    setAnalyzing(false);
  };

  return (
    <div className="max-w-[800px]">
      {/* Upload area */}
      {!file && (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-gray-200 bg-white p-12 text-center hover:border-gray-300 transition-colors"
        >
          <Upload className="w-8 h-8 text-gray-300 mx-auto mb-4" />
          <h3 className="text-[#0f1a2e] text-[18px] font-semibold mb-2">
            Last opp anbudsdokument
          </h3>
          <p className="text-gray-500 text-[14px] mb-6">
            Dra og slipp PDF eller klikk for å velge fil
          </p>
          <label className="inline-flex items-center h-10 px-6 bg-[#0f1a2e] text-white text-[13px] font-semibold hover:bg-[#1a2d4a] transition-colors cursor-pointer">
            Velg fil
            <input
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleFileInput}
              className="hidden"
            />
          </label>
          <p className="mt-4 text-[12px] text-gray-400">
            PDF, DOC eller TXT — maks 10MB
          </p>
        </div>
      )}

      {/* Analyzing state */}
      {analyzing && (
        <div className="bg-white border border-gray-200 p-12 text-center">
          <div className="w-8 h-8 border-2 border-[#0f1a2e] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <h3 className="text-[#0f1a2e] text-[16px] font-semibold mb-1">
            Analyserer dokument...
          </h3>
          <p className="text-gray-500 text-[13px]">
            {file?.name}
          </p>
        </div>
      )}

      {/* Result */}
      {result && file && (
        <div className="space-y-4">
          {/* Header */}
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-gray-400" />
                <div>
                  <h3 className="text-[#0f1a2e] text-[15px] font-semibold">
                    {file.name}
                  </h3>
                  <p className="text-[12px] text-gray-400 mt-0.5">
                    Analysert akkurat nå
                  </p>
                </div>
              </div>
              <button
                onClick={reset}
                className="text-[12px] text-gray-400 hover:text-[#0f1a2e] cursor-pointer"
              >
                Analyser ny fil
              </button>
            </div>

            {/* Relevance score */}
            <div className="mt-6 flex items-center gap-4">
              <div
                className={`text-[48px] font-semibold leading-none ${
                  result.relevance >= 60
                    ? "text-green-600"
                    : result.relevance >= 35
                      ? "text-amber-500"
                      : "text-red-500"
                }`}
              >
                {result.relevance}%
              </div>
              <div>
                <div className="text-[13px] font-semibold text-[#0f1a2e]">
                  Relevans for Allum
                </div>
                <div className="text-[12px] text-gray-500">
                  {result.relevance >= 60
                    ? "God match med kjernekompetanse"
                    : result.relevance >= 35
                      ? "Delvis relevant"
                      : "Lav relevans"}
                </div>
              </div>
            </div>

            {/* Relevance bar */}
            <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${result.relevance}%`,
                  backgroundColor:
                    result.relevance >= 60
                      ? "#16a34a"
                      : result.relevance >= 35
                        ? "#f59e0b"
                        : "#dc2626",
                }}
              />
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <h4 className="text-[14px] font-semibold text-[#0f1a2e]">
                Oppsummering
              </h4>
            </div>
            <p className="text-gray-600 text-[14px] leading-[1.7]">
              {result.summary}
            </p>
          </div>

          {/* Key requirements */}
          <div className="bg-white border border-gray-200 p-6">
            <h4 className="text-[14px] font-semibold text-[#0f1a2e] mb-3">
              Nøkkelkrav
            </h4>
            <ul className="space-y-2">
              {result.keyRequirements.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-2 text-[13px] text-gray-600"
                >
                  <div className="w-1 h-1 rounded-full bg-[#0f1a2e] mt-2 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Allum strengths */}
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <h4 className="text-[14px] font-semibold text-[#0f1a2e]">
                Allums styrker
              </h4>
            </div>
            <ul className="space-y-2">
              {result.allumStrengths.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2 text-[13px] text-green-700"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Risks */}
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <h4 className="text-[14px] font-semibold text-[#0f1a2e]">
                Risikoer
              </h4>
            </div>
            <ul className="space-y-2">
              {result.risks.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-2 text-[13px] text-amber-700"
                >
                  <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Recommendation */}
          <div
            className={`border p-6 ${
              result.relevance >= 60
                ? "bg-green-50 border-green-200"
                : result.relevance >= 35
                  ? "bg-amber-50 border-amber-200"
                  : "bg-red-50 border-red-200"
            }`}
          >
            <h4 className="text-[14px] font-semibold text-[#0f1a2e] mb-2">
              Anbefaling
            </h4>
            <p className="text-[14px] text-gray-700 leading-[1.65]">
              {result.recommendation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
