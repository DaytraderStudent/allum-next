import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import MarketsSection from "@/components/markets";

export const metadata = {
  title: "Markets — Allum Engineering",
  description: "Cable equipment, maritime, energy, process industry and water treatment engineering.",
};

export default function MarketsPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          overline="Our markets"
          title="Serving five industries"
          titleBold="across five decades"
        />
        <MarketsSection />
      </main>
      <Footer />
    </>
  );
}
