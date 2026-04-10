"use client";

const articles = [
  {
    date: "2024",
    tag: "Contract",
    title: "Nexans turntable and loading system contract awarded",
    excerpt:
      "Allum Engineering has been awarded the contract for delivering the Halden–Ballycastle ICJ storage modular turntable and loading system — including tensioner and pull-in winch.",
  },
  {
    date: "2023",
    tag: "Recognition",
    title: "Founder Øivind Allum honoured for 50 years of industry leadership",
    excerpt:
      "Recognised for pioneering contributions to Norwegian marine and engineering industries since the company's founding in 1973.",
  },
  {
    date: "2023",
    tag: "Technology",
    title: "CFU partnership with OMV for system validation",
    excerpt:
      "Allum Technology enters testing partnership with Austrian oil company OMV — a key step toward commercial deployment of the Compact Flotation Unit.",
  },
];

export default function News() {
  return (
    <section id="news" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className="text-[#b8953f] text-[13px] font-medium tracking-[0.08em] uppercase mb-4">
              News
            </p>
            <h2 className="font-heading font-bold text-[#0c1e3f] text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
              Latest updates
            </h2>
          </div>
        </div>

        <div className="divide-y divide-[#d6d3cc]">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group py-8 first:pt-0 grid md:grid-cols-[120px_1fr] gap-4 md:gap-8"
            >
              <div className="flex items-start gap-3 md:flex-col md:gap-2">
                <span className="text-[13px] text-[#6b6b6b]">{a.date}</span>
                <span className="text-[11px] uppercase tracking-[0.06em] text-[#b8953f] font-medium bg-[#b8953f]/10 px-2 py-0.5 rounded-sm">
                  {a.tag}
                </span>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-[#0c1e3f] text-[18px] md:text-[20px] leading-[1.3] group-hover:text-[#b8953f] transition-colors cursor-pointer">
                  {a.title}
                </h3>
                <p className="mt-2 text-[#6b6b6b] text-[14px] leading-[1.65] max-w-[600px]">
                  {a.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
