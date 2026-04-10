"use client";

import Image from "next/image";

const articles = [
  {
    date: "2024",
    title: "Nexans turntable and loading system contract awarded",
    excerpt:
      "Allum Engineering has been awarded the contract for the Halden–Ballycastle ICJ storage modular turntable and loading system, including design, fabrication, transport and installation.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    featured: true,
  },
  {
    date: "2023",
    title: "Founder Øivind Allum honoured for 50 years in industry",
    excerpt:
      "Recognised for pioneering contributions to Norwegian marine and engineering since the company founding in 1973.",
    featured: false,
  },
  {
    date: "2023",
    title: "CFU technology partnership with OMV",
    excerpt:
      "Allum Technology enters testing partnership with Austrian oil company OMV for Compact Flotation Unit validation.",
    featured: false,
  },
  {
    date: "2024",
    title: "Pursuing Miljøfyrtårn environmental certification",
    excerpt:
      "Reflecting our commitment to sustainable engineering practices across all operations.",
    featured: false,
  },
];

export default function News() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <section id="news" className="py-24 lg:py-32 bg-[#0f1a2e]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-4">
          <div>
            <p className="text-white/30 text-[13px] font-medium tracking-[0.1em] uppercase mb-5">
              News & Updates
            </p>
            <h2 className="text-white text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.2]">
              Latest from <span className="font-semibold">Allum</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured */}
          <a href="#contact" className="group block cursor-pointer">
            <div className="relative aspect-[16/10] overflow-hidden mb-6">
              <Image
                src={featured.image!}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <p className="text-white/25 text-[13px] font-medium tracking-[0.06em] uppercase">
              {featured.date}
            </p>
            <h3 className="mt-2 text-white text-[24px] font-semibold leading-[1.3] group-hover:text-white/80 transition-colors">
              {featured.title}
            </h3>
            <p className="mt-3 text-white/40 text-[15px] leading-[1.65]">
              {featured.excerpt}
            </p>
          </a>

          {/* Other articles */}
          <div className="flex flex-col justify-between divide-y divide-white/10">
            {rest.map((a) => (
              <div key={a.title} className="group py-6 first:pt-0 last:pb-0">
                <p className="text-white/20 text-[13px] font-medium tracking-[0.06em] uppercase">
                  {a.date}
                </p>
                <h3 className="mt-2 text-white text-[18px] font-semibold leading-[1.35] group-hover:text-white/70 transition-colors cursor-pointer">
                  {a.title}
                </h3>
                <p className="mt-2 text-white/30 text-[14px] leading-[1.6]">
                  {a.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
