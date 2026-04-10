import AuthGate from "./auth-gate";
import Dashboard from "./dashboard-client";

export const metadata = {
  title: "Dashboard — Allum Engineering",
  description: "Internt dashboard for anbud-overvåking og pipeline-styring.",
};

export default function DashboardPage() {
  return (
    <AuthGate>
      <Dashboard />
    </AuthGate>
  );
}
