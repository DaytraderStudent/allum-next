"use client";

import {
  LayoutDashboard,
  Bell,
  Kanban,
  FileSearch,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  Home,
} from "lucide-react";
import Link from "next/link";

export type View = "overview" | "feed" | "pipeline" | "analyzer" | "stats";

const navItems: { id: View; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "overview", label: "Oversikt", icon: LayoutDashboard },
  { id: "feed", label: "Anbud", icon: Bell },
  { id: "pipeline", label: "Pipeline", icon: Kanban },
  { id: "analyzer", label: "Dokumentanalyse", icon: FileSearch },
  { id: "stats", label: "Statistikk", icon: BarChart3 },
];

interface Props {
  active: View;
  onNavigate: (view: View) => void;
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({
  active,
  onNavigate,
  collapsed,
  onToggle,
}: Props) {
  const handleLogout = () => {
    localStorage.removeItem("allum-dash-auth");
    window.location.href = "/";
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-[#0f1a2e] flex flex-col z-40 transition-all duration-300 ${
        collapsed ? "w-[64px]" : "w-[240px]"
      }`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-white/[0.06]">
        {!collapsed && (
          <span className="text-white text-[18px] font-light tracking-[0.04em]">
            allum
          </span>
        )}
        <button
          onClick={onToggle}
          className={`p-1.5 text-white/30 hover:text-white/60 cursor-pointer transition-colors ${collapsed ? "mx-auto" : "ml-auto"}`}
        >
          <ChevronLeft
            className={`w-4 h-4 transition-transform ${collapsed ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 h-10 rounded-md transition-colors cursor-pointer ${
                collapsed ? "justify-center px-0" : "px-3"
              } ${
                isActive
                  ? "bg-white/[0.08] text-white"
                  : "text-white/40 hover:text-white/70 hover:bg-white/[0.04]"
              }`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="w-[18px] h-[18px] shrink-0" />
              {!collapsed && (
                <span className="text-[13px] font-medium">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-white/[0.06] space-y-1">
        <Link
          href="/"
          className={`flex items-center gap-3 h-10 rounded-md text-white/30 hover:text-white/60 hover:bg-white/[0.04] transition-colors cursor-pointer ${
            collapsed ? "justify-center px-0" : "px-3"
          }`}
          title={collapsed ? "Tilbake til nettside" : undefined}
        >
          <Home className="w-[18px] h-[18px] shrink-0" />
          {!collapsed && (
            <span className="text-[13px] font-medium">Nettside</span>
          )}
        </Link>
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 h-10 rounded-md text-white/30 hover:text-red-400 hover:bg-white/[0.04] transition-colors cursor-pointer ${
            collapsed ? "justify-center px-0" : "px-3"
          }`}
          title={collapsed ? "Logg ut" : undefined}
        >
          <LogOut className="w-[18px] h-[18px] shrink-0" />
          {!collapsed && (
            <span className="text-[13px] font-medium">Logg ut</span>
          )}
        </button>
      </div>
    </aside>
  );
}
