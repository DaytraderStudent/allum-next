import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import TenderFinder from "./tender-finder";

export const metadata = {
  title: "Tender Finder — Allum Engineering",
  description:
    "Find relevant engineering tenders and contract opportunities from Doffin, TED and industry sources.",
};

export default function TendersPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          overline="Tender Finder"
          title="Find contract"
          titleBold="opportunities"
          description="Search public procurement databases for engineering, maritime and offshore tenders relevant to Allum's capabilities."
        />
        <TenderFinder />
      </main>
      <Footer />
    </>
  );
}
