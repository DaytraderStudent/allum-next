import Navigation from "@/components/navigation";
import AuthGate from "./auth-gate";
import Dashboard from "./dashboard-client";

export const metadata = {
  title: "Dashboard — Allum Engineering",
  description: "Internt dashboard for anbud-overvåking og pipeline-styring.",
};

export default function DashboardPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-[#f5f5f5]">
        <AuthGate>
          <Dashboard />
        </AuthGate>
      </main>
    </>
  );
}
