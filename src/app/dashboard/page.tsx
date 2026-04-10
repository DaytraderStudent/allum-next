import Navigation from "@/components/navigation";
import Dashboard from "./dashboard-client";

export const metadata = {
  title: "Dashboard — Allum Engineering",
  description: "Anbud-overvåking, pipeline og dokumentanalyse.",
};

export default function DashboardPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-[#f5f5f5]">
        <Dashboard />
      </main>
    </>
  );
}
