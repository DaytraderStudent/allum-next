import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";

export const metadata = {
  title: "News — Allum Engineering",
  description: "Latest news, contract awards and updates from Allum Engineering.",
};

const allNews = [
  { date: "2024", title: "Nexans turntable and loading system contract awarded", text: "Allum Engineering has been awarded the contract for the Halden–Ballycastle ICJ storage modular turntable and loading system — including design, fabrication, transport and installation of a storage modular turntable with tensioner and pull-in winch." },
  { date: "2024", title: "Pursuing Miljøfyrtårn environmental certification", text: "Reflecting our commitment to sustainable engineering practices. The certification process covers our operations in Sandefjord and aligns with our broader environmental responsibility goals." },
  { date: "2023", title: "Founder Øivind Allum honoured for 50 years in industry", text: "Recognised for pioneering contributions to Norwegian marine and engineering industries since the company's founding in 1973. Øivind's vision continues to drive innovation at the company he built." },
  { date: "2023", title: "CFU technology partnership with OMV", text: "Allum Technology enters testing partnership with Austrian oil company OMV for validation of the Compact Flotation Unit system — a key step toward commercial deployment of the patented water treatment technology." },
  { date: "2022", title: "Strong year for Allum Engineering", text: "A year of growth and successful project delivery across cable equipment, maritime modifications and process engineering. The team expanded to meet demand across all five market sectors." },
];

export default function NewsPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          overline="News & Updates"
          title="Latest from"
          titleBold="Allum Engineering"
        />
        <section className="py-24 lg:py-32">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            <div className="divide-y divide-gray-200">
              {allNews.map((a) => (
                <article key={a.title} className="py-10 first:pt-0">
                  <p className="text-gray-400 text-[13px] font-medium tracking-[0.06em] uppercase mb-3">
                    {a.date}
                  </p>
                  <h2 className="text-[#0f1a2e] text-[24px] font-semibold leading-[1.3]">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-gray-500 text-[16px] leading-[1.7]">
                    {a.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
