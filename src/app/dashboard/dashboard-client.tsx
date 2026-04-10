"use client";

import { useState, useMemo } from "react";
import {
  Search,
  BarChart3,
  Kanban,
  FileSearch,
  Bell,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  Filter,
} from "lucide-react";
import {
  INITIAL_TENDERS,
  STATUS_LABELS,
  STATUS_COLORS,
  type Tender,
  type TenderStatus,
} from "./data";
import PipelineBoard from "./pipeline-board";
import DocAnalyzer from "./doc-analyzer";

type Tab = "feed" | "pipeline" | "analyzer" | "stats";

export default function Dashboard() {
  const [tenders, setTenders] = useState<Tender[]>(INITIAL_TENDERS);
  const [activeTab, setActiveTab] = useState<Tab>("feed");
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const updateTenderStatus = (id: string, status: TenderStatus) => {
    setTenders((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status } : t))
    );
  };

  const updateTenderNotes = (id: string, notes: string) => {
    setTenders((prev) =>
      prev.map((t) => (t.id === id ? { ...t, notes } : t))
    );
  };

  // Stats
  const stats = useMemo(() => {
    const active = tenders.filter(
      (t) => !["won", "lost"].includes(t.status)
    );
    const won = tenders.filter((t) => t.status === "won");
    const lost = tenders.filter((t) => t.status === "lost");
    const decided = won.length + lost.length;
    const winRate = decided > 0 ? Math.round((won.length / decided) * 100) : 0;
    const pipelineValue = active.reduce(
      (sum, t) => sum + (t.valueLow + t.valueHigh) / 2,
      0
    );
    const wonValue = won.reduce(
      (sum, t) => sum + (t.valueLow + t.valueHigh) / 2,
      0
    );
    const newCount = tenders.filter((t) => t.status === "new").length;
    const deadlineSoon = active.filter((t) => {
      const days =
        (new Date(t.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24);
      return days <= 14 && days >= 0;
    }).length;

    return { active: active.length, won: won.length, lost: lost.length, winRate, pipelineValue, wonValue, newCount, deadlineSoon };
  }, [tenders]);

  // Filtered feed
  const categories = useMemo(
    () => ["All", ...new Set(tenders.map((t) => t.category))],
    [tenders]
  );

  const filteredFeed = useMemo(() => {
    return tenders
      .filter((t) => {
        const matchSearch =
          !search ||
          t.title.toLowerCase().includes(search.toLowerCase()) ||
          t.buyer.toLowerCase().includes(search.toLowerCase());
        const matchCat =
          categoryFilter === "All" || t.category === categoryFilter;
        return matchSearch && matchCat;
      })
      .sort((a, b) => b.relevance - a.relevance);
  }, [tenders, search, categoryFilter]);

  const tabs: { id: Tab; label: string; icon: typeof BarChart3 }[] = [
    { id: "feed", label: "Anbud-feed", icon: Bell },
    { id: "pipeline", label: "Pipeline", icon: Kanban },
    { id: "analyzer", label: "Dokumentanalyse", icon: FileSearch },
    { id: "stats", label: "Statistikk", icon: BarChart3 },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[#0f1a2e] text-[28px] font-semibold">
            Dashboard
          </h1>
          <p className="text-gray-500 text-[14px] mt-1">
            Anbud-overvåking og pipeline-styring
          </p>
        </div>
        {/* Quick stats */}
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-[#0f1a2e] text-[22px] font-semibold leading-none">
              {stats.newCount}
            </div>
            <div className="text-gray-400 text-[11px] uppercase tracking-[0.06em] mt-1">
              Nye anbud
            </div>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div className="text-right">
            <div className="text-[#0f1a2e] text-[22px] font-semibold leading-none">
              {(stats.pipelineValue / 1_000_000).toFixed(0)}M
            </div>
            <div className="text-gray-400 text-[11px] uppercase tracking-[0.06em] mt-1">
              Pipeline
            </div>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div className="text-right">
            <div className="text-green-600 text-[22px] font-semibold leading-none">
              {stats.winRate}%
            </div>
            <div className="text-gray-400 text-[11px] uppercase tracking-[0.06em] mt-1">
              Win rate
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 text-[13px] font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === tab.id
                ? "border-[#0f1a2e] text-[#0f1a2e]"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === "feed" && (
        <div>
          {/* Search and filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Søk i anbud..."
                className="w-full h-10 pl-10 pr-4 border border-gray-200 bg-white text-[14px] focus:border-[#0f1a2e] focus:outline-none"
              />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="h-10 px-4 border border-gray-200 bg-white text-[13px] focus:border-[#0f1a2e] focus:outline-none cursor-pointer appearance-none min-w-[160px]"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "Alle kategorier" : c}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 mb-4 text-[12px] text-gray-400">
            <Filter className="w-3 h-3" />
            {filteredFeed.length} anbud — sortert etter relevans
          </div>

          {/* Tender cards */}
          <div className="space-y-3">
            {filteredFeed.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-gray-200 p-5 hover:border-gray-300 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      {/* Relevance bar */}
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${t.relevance}%`,
                              backgroundColor:
                                t.relevance >= 70
                                  ? "#16a34a"
                                  : t.relevance >= 40
                                    ? "#f59e0b"
                                    : "#dc2626",
                            }}
                          />
                        </div>
                        <span className="text-[11px] font-semibold text-gray-500">
                          {t.relevance}%
                        </span>
                      </div>
                      <span className="text-[11px] text-gray-400">
                        {t.category}
                      </span>
                      <span className="text-[10px] text-gray-300">
                        {t.source}
                      </span>
                    </div>

                    <h3 className="text-[#0f1a2e] text-[16px] font-semibold leading-snug">
                      {t.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-gray-500">
                      <span>{t.buyer}</span>
                      <span>{t.location}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Frist: {t.deadline}
                      </span>
                      <span className="font-semibold text-[#0f1a2e]">
                        {t.value}
                      </span>
                    </div>

                    {t.notes && (
                      <p className="mt-2 text-[12px] text-gray-400 italic">
                        {t.notes}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <select
                      value={t.status}
                      onChange={(e) =>
                        updateTenderStatus(
                          t.id,
                          e.target.value as TenderStatus
                        )
                      }
                      className="h-8 px-3 text-[11px] font-semibold border rounded-sm cursor-pointer appearance-none"
                      style={{
                        borderColor: STATUS_COLORS[t.status],
                        color: STATUS_COLORS[t.status],
                        backgroundColor: `${STATUS_COLORS[t.status]}08`,
                      }}
                    >
                      {Object.entries(STATUS_LABELS).map(([val, label]) => (
                        <option key={val} value={val}>
                          {label}
                        </option>
                      ))}
                    </select>
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 h-8 px-3 bg-[#0f1a2e] text-white text-[11px] font-semibold hover:bg-[#1a2d4a] transition-colors cursor-pointer"
                    >
                      Åpne
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "pipeline" && (
        <PipelineBoard
          tenders={tenders}
          onStatusChange={updateTenderStatus}
          onNotesChange={updateTenderNotes}
        />
      )}

      {activeTab === "analyzer" && <DocAnalyzer />}

      {activeTab === "stats" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Stat cards */}
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-50 flex items-center justify-center rounded-sm">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-[11px] text-gray-400 uppercase tracking-[0.06em]">
                  Aktiv pipeline
                </div>
                <div className="text-[#0f1a2e] text-[24px] font-semibold leading-none mt-1">
                  {(stats.pipelineValue / 1_000_000).toFixed(1)}M
                </div>
              </div>
            </div>
            <div className="text-[13px] text-gray-500">
              {stats.active} aktive anbud i pipeline
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-50 flex items-center justify-center rounded-sm">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-[11px] text-gray-400 uppercase tracking-[0.06em]">
                  Win rate
                </div>
                <div className="text-green-600 text-[24px] font-semibold leading-none mt-1">
                  {stats.winRate}%
                </div>
              </div>
            </div>
            <div className="text-[13px] text-gray-500">
              {stats.won} vunnet, {stats.lost} tapt
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-50 flex items-center justify-center rounded-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-[11px] text-gray-400 uppercase tracking-[0.06em]">
                  Vunnet verdi
                </div>
                <div className="text-[#0f1a2e] text-[24px] font-semibold leading-none mt-1">
                  {(stats.wonValue / 1_000_000).toFixed(1)}M
                </div>
              </div>
            </div>
            <div className="text-[13px] text-gray-500">
              Totalt kontraktverdi vunnet
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-50 flex items-center justify-center rounded-sm">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <div className="text-[11px] text-gray-400 uppercase tracking-[0.06em]">
                  Frist innen 14 dager
                </div>
                <div className="text-amber-600 text-[24px] font-semibold leading-none mt-1">
                  {stats.deadlineSoon}
                </div>
              </div>
            </div>
            <div className="text-[13px] text-gray-500">
              Anbud med frist som nærmer seg
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-50 flex items-center justify-center rounded-sm">
                <XCircle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="text-[11px] text-gray-400 uppercase tracking-[0.06em]">
                  Tapte
                </div>
                <div className="text-red-600 text-[24px] font-semibold leading-none mt-1">
                  {stats.lost}
                </div>
              </div>
            </div>
            <div className="text-[13px] text-gray-500">
              Analyser hvorfor for å forbedre fremtidige tilbud
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-50 flex items-center justify-center rounded-sm">
                <Bell className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-[11px] text-gray-400 uppercase tracking-[0.06em]">
                  Nye denne uken
                </div>
                <div className="text-[#0f1a2e] text-[24px] font-semibold leading-none mt-1">
                  {stats.newCount}
                </div>
              </div>
            </div>
            <div className="text-[13px] text-gray-500">
              Automatisk filtrert fra Doffin, TED og Mercell
            </div>
          </div>

          {/* Category breakdown */}
          <div className="bg-white border border-gray-200 p-6 md:col-span-2 lg:col-span-3">
            <h3 className="text-[#0f1a2e] text-[16px] font-semibold mb-4">
              Per kategori
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[...new Set(tenders.map((t) => t.category))].map((cat) => {
                const catTenders = tenders.filter((t) => t.category === cat);
                const catWon = catTenders.filter(
                  (t) => t.status === "won"
                ).length;
                const catActive = catTenders.filter(
                  (t) => !["won", "lost"].includes(t.status)
                ).length;
                return (
                  <div key={cat} className="text-center p-3 bg-[#f7f7f7]">
                    <div className="text-[13px] font-semibold text-[#0f1a2e]">
                      {cat}
                    </div>
                    <div className="text-[11px] text-gray-500 mt-1">
                      {catActive} aktive · {catWon} vunnet
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
