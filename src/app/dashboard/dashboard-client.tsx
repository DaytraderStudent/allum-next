"use client";

import { useState, useMemo } from "react";
import {
  Search,
  Clock,
  ArrowUpRight,
  TrendingUp,
  CheckCircle2,
  Bell,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  CalendarDays,
} from "lucide-react";
import {
  INITIAL_TENDERS,
  STATUS_LABELS,
  STATUS_COLORS,
  type Tender,
  type TenderStatus,
} from "./data";
import Sidebar, { type View } from "./sidebar";
import PipelineBoard from "./pipeline-board";
import DocAnalyzer from "./doc-analyzer";

export default function Dashboard() {
  const [tenders, setTenders] = useState<Tender[]>(INITIAL_TENDERS);
  const [view, setView] = useState<View>("overview");
  const [collapsed, setCollapsed] = useState(false);
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
    const winRate = decided > 0 ? Math.round((won.length / decided) * 100) : 0;
    const pipelineValue = active.reduce((s, t) => s + (t.valueLow + t.valueHigh) / 2, 0);
    const wonValue = won.reduce((s, t) => s + (t.valueLow + t.valueHigh) / 2, 0);
    const newCount = tenders.filter((t) => t.status === "new").length;
    const deadlineSoon = active.filter((t) => {
      const d = (new Date(t.deadline).getTime() - Date.now()) / 86400000;
      return d <= 14 && d >= 0;
    }).length;
    return { active: active.length, won: won.length, lost: lost.length, winRate, pipelineValue, wonValue, newCount, deadlineSoon };
  }, [tenders]);

  const categories = useMemo(() => ["All", ...new Set(tenders.map((t) => t.category))], [tenders]);

  const filteredFeed = useMemo(() => {
    return tenders
      .filter((t) => {
        const ms = !search || t.title.toLowerCase().includes(search.toLowerCase()) || t.buyer.toLowerCase().includes(search.toLowerCase());
        const mc = categoryFilter === "All" || t.category === categoryFilter;
        return ms && mc;
      })
      .sort((a, b) => b.relevance - a.relevance);
  }, [tenders, search, categoryFilter]);

  const urgentTenders = useMemo(() => {
    return tenders
      .filter((t) => {
        if (["won", "lost"].includes(t.status)) return false;
        const d = (new Date(t.deadline).getTime() - Date.now()) / 86400000;
        return d <= 14 && d >= 0;
      })
      .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
  }, [tenders]);

  const recentWins = tenders.filter((t) => t.status === "won");

  return (
    <div className="flex min-h-screen bg-[#f8f8f8]">
      <Sidebar
        active={view}
        onNavigate={setView}
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />

      {/* Main content */}
      <div
        className={`flex-1 transition-all duration-300 ${collapsed ? "ml-[64px]" : "ml-[240px]"}`}
      >
        {/* Top bar */}
        <div className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-30">
          <div>
            <h1 className="text-[#0f1a2e] text-[16px] font-semibold">
              {view === "overview" && "Oversikt"}
              {view === "feed" && "Anbud-feed"}
              {view === "pipeline" && "Pipeline"}
              {view === "analyzer" && "Dokumentanalyse"}
              {view === "stats" && "Statistikk"}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[12px] text-gray-400">Pipeline</p>
              <p className="text-[14px] font-semibold text-[#0f1a2e]">
                {(stats.pipelineValue / 1_000_000).toFixed(0)}M NOK
              </p>
            </div>
            <div className="w-px h-8 bg-gray-100" />
            <div className="w-8 h-8 bg-[#0f1a2e] rounded-full flex items-center justify-center">
              <span className="text-white text-[11px] font-bold">AE</span>
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-8">
          {/* OVERVIEW */}
          {view === "overview" && (
            <div className="space-y-6">
              {/* Stat row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Nye anbud", val: stats.newCount, color: "#2563eb", icon: Bell },
                  { label: "Aktiv pipeline", val: `${(stats.pipelineValue / 1_000_000).toFixed(0)}M`, color: "#8b5cf6", icon: TrendingUp },
                  { label: "Win rate", val: `${stats.winRate}%`, color: "#16a34a", icon: CheckCircle2 },
                  { label: "Nær frist", val: stats.deadlineSoon, color: "#f59e0b", icon: Clock },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-lg p-5 border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">{s.label}</p>
                      <s.icon className="w-4 h-4" style={{ color: s.color }} />
                    </div>
                    <p className="text-[#0f1a2e] text-[28px] font-semibold leading-none">{String(s.val)}</p>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-3 gap-4">
                {/* Urgent deadlines */}
                <div className="lg:col-span-2 bg-white rounded-lg border border-gray-100">
                  <div className="flex items-center justify-between p-5 pb-3">
                    <h2 className="text-[14px] font-semibold text-[#0f1a2e]">Kommende frister</h2>
                    <button onClick={() => setView("feed")} className="text-[12px] text-gray-400 hover:text-[#0f1a2e] cursor-pointer flex items-center gap-1">
                      Se alle <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {urgentTenders.length === 0 && (
                      <p className="px-5 py-8 text-[13px] text-gray-400 text-center">Ingen frister innen 14 dager</p>
                    )}
                    {urgentTenders.slice(0, 5).map((t) => {
                      const daysLeft = Math.ceil((new Date(t.deadline).getTime() - Date.now()) / 86400000);
                      return (
                        <div key={t.id} className="px-5 py-3.5 flex items-center gap-4 hover:bg-gray-50/50 transition-colors">
                          <div className={`shrink-0 w-9 h-9 rounded-md flex items-center justify-center text-[11px] font-bold ${daysLeft <= 5 ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"}`}>
                            {daysLeft}d
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[13px] font-medium text-[#0f1a2e] truncate">{t.title}</p>
                            <p className="text-[11px] text-gray-400">{t.buyer} · {t.value}</p>
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-sm" style={{ color: STATUS_COLORS[t.status], backgroundColor: `${STATUS_COLORS[t.status]}10` }}>
                            {STATUS_LABELS[t.status]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick actions + wins */}
                <div className="space-y-4">
                  {/* Quick nav */}
                  <div className="bg-white rounded-lg border border-gray-100 p-5">
                    <h2 className="text-[14px] font-semibold text-[#0f1a2e] mb-3">Hurtighandlinger</h2>
                    <div className="space-y-2">
                      {[
                        { label: "Se nye anbud", view: "feed" as View, count: stats.newCount },
                        { label: "Pipeline-board", view: "pipeline" as View, count: stats.active },
                        { label: "Analyser dokument", view: "analyzer" as View, count: null },
                      ].map((a) => (
                        <button
                          key={a.label}
                          onClick={() => setView(a.view)}
                          className="w-full flex items-center justify-between p-3 bg-[#f8f8f8] rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                          <span className="text-[13px] text-[#0f1a2e] font-medium">{a.label}</span>
                          <div className="flex items-center gap-2">
                            {a.count !== null && (
                              <span className="text-[11px] font-semibold text-gray-400">{a.count}</span>
                            )}
                            <ArrowRight className="w-3.5 h-3.5 text-gray-300" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recent wins */}
                  <div className="bg-white rounded-lg border border-gray-100 p-5">
                    <h2 className="text-[14px] font-semibold text-[#0f1a2e] mb-3">Siste seiere</h2>
                    {recentWins.length === 0 ? (
                      <p className="text-[13px] text-gray-400">Ingen ennå</p>
                    ) : (
                      <div className="space-y-3">
                        {recentWins.map((w) => (
                          <div key={w.id} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-[12px] font-medium text-[#0f1a2e] leading-snug">{w.title}</p>
                              <p className="text-[11px] text-gray-400 mt-0.5">{w.buyer} · {w.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FEED */}
          {view === "feed" && (
            <div>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Søk etter anbud, oppdragsgiver..."
                    className="w-full h-10 pl-10 pr-4 bg-white border border-gray-100 rounded-lg text-[14px] focus:border-[#0f1a2e] focus:outline-none"
                  />
                </div>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="h-10 px-4 bg-white border border-gray-100 rounded-lg text-[13px] focus:border-[#0f1a2e] focus:outline-none cursor-pointer appearance-none min-w-[160px]"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c === "All" ? "Alle kategorier" : c}</option>
                  ))}
                </select>
              </div>

              <p className="text-[11px] text-gray-400 mb-3">{filteredFeed.length} anbud</p>

              <div className="space-y-2">
                {filteredFeed.map((t) => {
                  const daysLeft = Math.ceil((new Date(t.deadline).getTime() - Date.now()) / 86400000);
                  const urgent = daysLeft <= 14 && daysLeft >= 0;
                  return (
                    <div key={t.id} className="bg-white border border-gray-100 rounded-lg hover:border-gray-200 transition-colors">
                      <div className="p-4 lg:p-5 flex flex-col lg:flex-row lg:items-start gap-4">
                        {/* Relevance indicator */}
                        <div className="shrink-0 hidden lg:flex flex-col items-center w-12">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-[13px] font-bold text-white"
                            style={{
                              backgroundColor: t.relevance >= 70 ? "#16a34a" : t.relevance >= 40 ? "#f59e0b" : "#dc2626",
                            }}
                          >
                            {t.relevance}
                          </div>
                          <span className="text-[9px] text-gray-400 mt-1">match</span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            <span className="text-[11px] font-medium text-gray-400">{t.category}</span>
                            <span className="text-gray-200">·</span>
                            <span className="text-[11px] text-gray-400">{t.source}</span>
                            {urgent && (
                              <span className="text-[10px] font-semibold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">{daysLeft}d igjen</span>
                            )}
                          </div>
                          <h3 className="text-[#0f1a2e] text-[15px] font-semibold leading-snug">{t.title}</h3>
                          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-gray-400">
                            <span className="font-medium text-gray-500">{t.buyer}</span>
                            <span>{t.location}</span>
                            <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" />{t.deadline}</span>
                          </div>
                          {t.notes && (
                            <p className="mt-2 text-[12px] text-gray-400 italic bg-[#f8f8f8] px-3 py-2 rounded-md">{t.notes}</p>
                          )}
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <div className="text-right">
                            <p className="text-[14px] font-semibold text-[#0f1a2e]">{t.value}</p>
                          </div>
                          <select
                            value={t.status}
                            onChange={(e) => updateTenderStatus(t.id, e.target.value as TenderStatus)}
                            className="h-8 px-2.5 text-[11px] font-semibold border rounded-md cursor-pointer appearance-none"
                            style={{
                              borderColor: `${STATUS_COLORS[t.status]}40`,
                              color: STATUS_COLORS[t.status],
                              backgroundColor: `${STATUS_COLORS[t.status]}08`,
                            }}
                          >
                            {Object.entries(STATUS_LABELS).map(([v, l]) => (
                              <option key={v} value={v}>{l}</option>
                            ))}
                          </select>
                          <a href={t.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 h-8 px-3 bg-[#0f1a2e] text-white text-[11px] font-semibold rounded-md hover:bg-[#1a2d4a] transition-colors cursor-pointer">
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* PIPELINE */}
          {view === "pipeline" && (
            <PipelineBoard tenders={tenders} onStatusChange={updateTenderStatus} onNotesChange={updateTenderNotes} />
          )}

          {/* ANALYZER */}
          {view === "analyzer" && <DocAnalyzer />}

          {/* STATS */}
          {view === "stats" && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg border border-gray-100 p-6">
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-medium mb-2">Aktiv pipeline</p>
                  <p className="text-[36px] font-semibold text-[#0f1a2e] leading-none">{(stats.pipelineValue / 1_000_000).toFixed(1)}M</p>
                  <p className="text-[13px] text-gray-400 mt-2">{stats.active} anbud i arbeid</p>
                </div>
                <div className="bg-white rounded-lg border border-gray-100 p-6">
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-medium mb-2">Vunnet totalt</p>
                  <p className="text-[36px] font-semibold text-green-600 leading-none">{(stats.wonValue / 1_000_000).toFixed(1)}M</p>
                  <p className="text-[13px] text-gray-400 mt-2">{stats.won} kontrakter</p>
                </div>
                <div className="bg-white rounded-lg border border-gray-100 p-6">
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-medium mb-2">Win rate</p>
                  <p className="text-[36px] font-semibold text-[#0f1a2e] leading-none">{stats.winRate}%</p>
                  <div className="mt-3 flex h-2.5 rounded-full overflow-hidden bg-gray-100">
                    <div className="bg-green-500 rounded-l-full" style={{ width: `${stats.winRate}%` }} />
                    <div className="bg-red-400 rounded-r-full flex-1" />
                  </div>
                  <div className="flex justify-between mt-1.5 text-[10px] text-gray-400">
                    <span>{stats.won} vunnet</span>
                    <span>{stats.lost} tapt</span>
                  </div>
                </div>
              </div>

              {/* Pipeline stage breakdown */}
              <div className="bg-white rounded-lg border border-gray-100 p-6">
                <h3 className="text-[14px] font-semibold text-[#0f1a2e] mb-5">Pipeline per fase</h3>
                <div className="space-y-3">
                  {(["new", "evaluating", "writing", "submitted"] as TenderStatus[]).map((stage) => {
                    const count = tenders.filter((t) => t.status === stage).length;
                    const value = tenders.filter((t) => t.status === stage).reduce((s, t) => s + (t.valueLow + t.valueHigh) / 2, 0);
                    const pct = stats.pipelineValue > 0 ? (value / stats.pipelineValue) * 100 : 0;
                    return (
                      <div key={stage} className="flex items-center gap-4">
                        <div className="w-24 flex items-center gap-2 shrink-0">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: STATUS_COLORS[stage] }} />
                          <span className="text-[13px] text-gray-500">{STATUS_LABELS[stage]}</span>
                        </div>
                        <div className="flex-1 h-7 bg-gray-50 rounded-md overflow-hidden relative">
                          <div className="h-full rounded-md transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: `${STATUS_COLORS[stage]}20` }} />
                          <div className="h-full rounded-md absolute top-0 left-0 transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: STATUS_COLORS[stage], opacity: 0.6 }} />
                        </div>
                        <div className="text-right shrink-0 w-24">
                          <span className="text-[13px] font-semibold text-[#0f1a2e]">{(value / 1_000_000).toFixed(1)}M</span>
                          <span className="text-[11px] text-gray-400 ml-1">({count})</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Category */}
              <div className="bg-white rounded-lg border border-gray-100 p-6">
                <h3 className="text-[14px] font-semibold text-[#0f1a2e] mb-4">Per kategori</h3>
                <div className="divide-y divide-gray-50">
                  {[...new Set(tenders.map((t) => t.category))].map((cat) => {
                    const ct = tenders.filter((t) => t.category === cat);
                    const cWon = ct.filter((t) => t.status === "won").length;
                    const cActive = ct.filter((t) => !["won", "lost"].includes(t.status)).length;
                    const cVal = ct.filter((t) => !["won", "lost"].includes(t.status)).reduce((s, t) => s + (t.valueLow + t.valueHigh) / 2, 0);
                    return (
                      <div key={cat} className="flex items-center justify-between py-3">
                        <span className="text-[14px] font-medium text-[#0f1a2e]">{cat}</span>
                        <div className="flex items-center gap-5 text-[12px] text-gray-400">
                          <span>{cActive} aktive</span>
                          <span className="text-green-600">{cWon} vunnet</span>
                          <span className="font-semibold text-[#0f1a2e] w-16 text-right">{(cVal / 1_000_000).toFixed(1)}M</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
