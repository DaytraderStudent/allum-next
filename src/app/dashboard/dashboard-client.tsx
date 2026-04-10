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
  LogOut,
  ChevronRight,
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

function StatCard({
  icon: Icon,
  label,
  value,
  color,
  sub,
}: {
  icon: typeof TrendingUp;
  label: string;
  value: string;
  color: string;
  sub: string;
}) {
  return (
    <div className="bg-white border border-gray-100 p-5 rounded-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] text-gray-400 uppercase tracking-[0.08em] font-medium">
          {label}
        </span>
        <div
          className="w-8 h-8 rounded-sm flex items-center justify-center"
          style={{ backgroundColor: `${color}10` }}
        >
          <Icon className="w-4 h-4" style={{ color }} />
        </div>
      </div>
      <div className="text-[28px] font-semibold text-[#0f1a2e] leading-none">
        {value}
      </div>
      <p className="text-[12px] text-gray-400 mt-1.5">{sub}</p>
    </div>
  );
}

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

  const stats = useMemo(() => {
    const active = tenders.filter((t) => !["won", "lost"].includes(t.status));
    const won = tenders.filter((t) => t.status === "won");
    const lost = tenders.filter((t) => t.status === "lost");
    const decided = won.length + lost.length;
    const winRate =
      decided > 0 ? Math.round((won.length / decided) * 100) : 0;
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
    return {
      active: active.length,
      won: won.length,
      lost: lost.length,
      winRate,
      pipelineValue,
      wonValue,
      newCount,
      deadlineSoon,
    };
  }, [tenders]);

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
    { id: "feed", label: "Anbud", icon: Bell },
    { id: "pipeline", label: "Pipeline", icon: Kanban },
    { id: "analyzer", label: "Analyse", icon: FileSearch },
    { id: "stats", label: "Statistikk", icon: BarChart3 },
  ];

  const handleLogout = () => {
    localStorage.removeItem("allum-dash-auth");
    window.location.reload();
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[#0f1a2e] text-[24px] font-semibold">
            Anbud &amp; Pipeline
          </h1>
          <p className="text-gray-400 text-[13px] mt-0.5">
            Sist oppdatert: i dag kl. 08:00
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-[12px] text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          Logg ut
        </button>
      </div>

      {/* Top stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <StatCard
          icon={Bell}
          label="Nye anbud"
          value={String(stats.newCount)}
          color="#2563eb"
          sub="Automatisk filtrert"
        />
        <StatCard
          icon={TrendingUp}
          label="Pipeline"
          value={`${(stats.pipelineValue / 1_000_000).toFixed(0)}M`}
          color="#8b5cf6"
          sub={`${stats.active} aktive anbud`}
        />
        <StatCard
          icon={CheckCircle2}
          label="Win rate"
          value={`${stats.winRate}%`}
          color="#16a34a"
          sub={`${stats.won} vunnet / ${stats.lost} tapt`}
        />
        <StatCard
          icon={Clock}
          label="Nær frist"
          value={String(stats.deadlineSoon)}
          color="#f59e0b"
          sub="Innen 14 dager"
        />
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 bg-white border border-gray-100 p-1 rounded-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium rounded-sm transition-colors cursor-pointer flex-1 justify-center ${
              activeTab === tab.id
                ? "bg-[#0f1a2e] text-white"
                : "text-gray-400 hover:text-[#0f1a2e] hover:bg-gray-50"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Feed */}
      {activeTab === "feed" && (
        <div>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Søk etter anbud, oppdragsgiver..."
                className="w-full h-10 pl-10 pr-4 bg-white border border-gray-100 text-[14px] focus:border-[#0f1a2e] focus:outline-none rounded-sm"
              />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="h-10 px-4 bg-white border border-gray-100 text-[13px] focus:border-[#0f1a2e] focus:outline-none cursor-pointer appearance-none rounded-sm min-w-[160px]"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "Alle kategorier" : c}
                </option>
              ))}
            </select>
          </div>

          <p className="text-[11px] text-gray-400 mb-3">
            {filteredFeed.length} anbud — sortert etter relevans
          </p>

          <div className="space-y-2">
            {filteredFeed.map((t) => {
              const daysLeft = Math.ceil(
                (new Date(t.deadline).getTime() - Date.now()) /
                  (1000 * 60 * 60 * 24)
              );
              const urgent = daysLeft <= 14 && daysLeft >= 0;

              return (
                <div
                  key={t.id}
                  className="bg-white border border-gray-100 rounded-sm hover:border-gray-200 transition-colors"
                >
                  <div className="p-4 lg:p-5">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      <div className="flex-1 min-w-0">
                        {/* Top row: relevance + category + source */}
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-[0.04em]"
                            style={{
                              backgroundColor:
                                t.relevance >= 70
                                  ? "#dcfce7"
                                  : t.relevance >= 40
                                    ? "#fef9c3"
                                    : "#fee2e2",
                              color:
                                t.relevance >= 70
                                  ? "#15803d"
                                  : t.relevance >= 40
                                    ? "#a16207"
                                    : "#dc2626",
                            }}
                          >
                            {t.relevance}% match
                          </div>
                          <span className="text-[11px] text-gray-400">
                            {t.category}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 bg-gray-50 text-gray-400 rounded-sm">
                            {t.source}
                          </span>
                          {urgent && (
                            <span className="text-[10px] px-1.5 py-0.5 bg-red-50 text-red-500 font-semibold rounded-sm">
                              {daysLeft}d igjen
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-[#0f1a2e] text-[15px] font-semibold leading-snug">
                          {t.title}
                        </h3>

                        {/* Meta */}
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-gray-400">
                          <span className="font-medium text-gray-500">
                            {t.buyer}
                          </span>
                          <span>{t.location}</span>
                          <span>Frist: {t.deadline}</span>
                        </div>

                        {t.notes && (
                          <p className="mt-2 text-[12px] text-gray-400 italic bg-gray-50 px-2.5 py-1.5 rounded-sm">
                            {t.notes}
                          </p>
                        )}
                      </div>

                      {/* Right: value + actions */}
                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right mr-2">
                          <div className="text-[#0f1a2e] text-[15px] font-semibold">
                            {t.value}
                          </div>
                        </div>
                        <select
                          value={t.status}
                          onChange={(e) =>
                            updateTenderStatus(
                              t.id,
                              e.target.value as TenderStatus
                            )
                          }
                          className="h-8 px-2.5 text-[11px] font-semibold border rounded-sm cursor-pointer appearance-none"
                          style={{
                            borderColor: `${STATUS_COLORS[t.status]}40`,
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
                          className="flex items-center gap-1 h-8 px-3 bg-[#0f1a2e] text-white text-[11px] font-semibold rounded-sm hover:bg-[#1a2d4a] transition-colors cursor-pointer"
                        >
                          Åpne
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
        <div className="space-y-4">
          {/* Main stats */}
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-white border border-gray-100 p-6 rounded-sm">
              <p className="text-[11px] text-gray-400 uppercase tracking-[0.06em] font-medium mb-2">
                Aktiv pipeline-verdi
              </p>
              <div className="text-[#0f1a2e] text-[36px] font-semibold leading-none">
                {(stats.pipelineValue / 1_000_000).toFixed(1)}M
              </div>
              <p className="text-[13px] text-gray-400 mt-2">
                {stats.active} anbud i arbeid
              </p>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded-sm">
              <p className="text-[11px] text-gray-400 uppercase tracking-[0.06em] font-medium mb-2">
                Vunnet totalt
              </p>
              <div className="text-green-600 text-[36px] font-semibold leading-none">
                {(stats.wonValue / 1_000_000).toFixed(1)}M
              </div>
              <p className="text-[13px] text-gray-400 mt-2">
                {stats.won} kontrakter vunnet
              </p>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded-sm">
              <p className="text-[11px] text-gray-400 uppercase tracking-[0.06em] font-medium mb-2">
                Win rate
              </p>
              <div className="flex items-end gap-3">
                <span className="text-[#0f1a2e] text-[36px] font-semibold leading-none">
                  {stats.winRate}%
                </span>
              </div>
              {/* Visual bar */}
              <div className="mt-3 flex h-3 rounded-sm overflow-hidden">
                <div
                  className="bg-green-500 transition-all"
                  style={{
                    width: `${stats.winRate}%`,
                  }}
                />
                <div className="bg-red-400 flex-1" />
              </div>
              <div className="flex justify-between mt-1 text-[10px] text-gray-400">
                <span>{stats.won} vunnet</span>
                <span>{stats.lost} tapt</span>
              </div>
            </div>
          </div>

          {/* Pipeline breakdown */}
          <div className="bg-white border border-gray-100 p-6 rounded-sm">
            <h3 className="text-[15px] font-semibold text-[#0f1a2e] mb-4">
              Pipeline-fordeling
            </h3>
            <div className="space-y-3">
              {(
                ["new", "evaluating", "writing", "submitted"] as TenderStatus[]
              ).map((stage) => {
                const count = tenders.filter(
                  (t) => t.status === stage
                ).length;
                const value = tenders
                  .filter((t) => t.status === stage)
                  .reduce(
                    (sum, t) => sum + (t.valueLow + t.valueHigh) / 2,
                    0
                  );
                const pct =
                  stats.pipelineValue > 0
                    ? (value / stats.pipelineValue) * 100
                    : 0;

                return (
                  <div key={stage} className="flex items-center gap-4">
                    <div className="w-24 text-[13px] text-gray-500 shrink-0">
                      {STATUS_LABELS[stage]}
                    </div>
                    <div className="flex-1 h-6 bg-gray-50 rounded-sm overflow-hidden relative">
                      <div
                        className="h-full rounded-sm transition-all duration-500"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: STATUS_COLORS[stage],
                          minWidth: count > 0 ? "2px" : 0,
                        }}
                      />
                    </div>
                    <div className="text-right shrink-0 w-20">
                      <span className="text-[13px] font-semibold text-[#0f1a2e]">
                        {(value / 1_000_000).toFixed(1)}M
                      </span>
                      <span className="text-[11px] text-gray-400 ml-1">
                        ({count})
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Category breakdown */}
          <div className="bg-white border border-gray-100 p-6 rounded-sm">
            <h3 className="text-[15px] font-semibold text-[#0f1a2e] mb-4">
              Per kategori
            </h3>
            <div className="divide-y divide-gray-50">
              {[...new Set(tenders.map((t) => t.category))].map((cat) => {
                const catTenders = tenders.filter((t) => t.category === cat);
                const catWon = catTenders.filter(
                  (t) => t.status === "won"
                ).length;
                const catActive = catTenders.filter(
                  (t) => !["won", "lost"].includes(t.status)
                ).length;
                const catValue = catTenders
                  .filter((t) => !["won", "lost"].includes(t.status))
                  .reduce(
                    (sum, t) => sum + (t.valueLow + t.valueHigh) / 2,
                    0
                  );

                return (
                  <div
                    key={cat}
                    className="flex items-center justify-between py-3"
                  >
                    <div className="flex items-center gap-3">
                      <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
                      <span className="text-[14px] font-medium text-[#0f1a2e]">
                        {cat}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-[12px] text-gray-500">
                      <span>{catActive} aktive</span>
                      <span className="text-green-600">{catWon} vunnet</span>
                      <span className="font-semibold text-[#0f1a2e]">
                        {(catValue / 1_000_000).toFixed(1)}M
                      </span>
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
