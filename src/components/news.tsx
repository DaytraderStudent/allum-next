"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { ArrowRight, Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const newsItems = [
  {
    type: "Contract Award",
    date: "2024",
    title: "Nexans Turntable Contract",
    excerpt:
      "Allum Engineering has been awarded the contract for delivering the Halden/Bailycastle ICJ undersea spare turntable and loading system — including design, fabrication, transport and installation of a storage modular turntable with tensioner and pull-in winch.",
    featured: true,
  },
  {
    type: "Recognition",
    date: "2023",
    title: "Øivind Allum — Founder Award",
    excerpt:
      "Founder Øivind Allum recognized for over 50 years of pioneering contribution to Norwegian marine and engineering industries. His vision continues to drive innovation at Allum Engineering.",
    featured: false,
  },
  {
    type: "Technology",
    date: "2023",
    title: "CFU Technology Partnership with OMV",
    excerpt:
      "Allum Technology enters partnership with Austrian oil company OMV for testing and validation of the Compact Flotation Unit system — a major step toward commercial deployment.",
    featured: false,
  },
  {
    type: "Sustainability",
    date: "2024",
    title: "Environmental Certification",
    excerpt:
      "Allum Engineering pursuing Miljøfyrtårn (Eco-Lighthouse) certification, reflecting our commitment to sustainable engineering practices.",
    featured: false,
  },
];

export default function News() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="news" className="relative py-32 bg-white overflow-hidden">
      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div
              className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="w-12 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-heading font-medium uppercase tracking-[0.2em]">
                Latest News
              </span>
            </div>
            <h2
              className={`font-heading font-bold text-4xl md:text-5xl text-navy-dark transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              News &{" "}
              <span className="text-gold">Updates</span>
            </h2>
          </div>
        </div>

        {/* News grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured article */}
          <div
            className={`md:row-span-2 group relative bg-navy-dark rounded-2xl p-8 md:p-10 overflow-hidden transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-gold/20 text-gold border-0">
                  <Award className="w-3 h-3 mr-1" />
                  {newsItems[0].type}
                </Badge>
                <span className="text-white/30 text-sm flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {newsItems[0].date}
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4 leading-tight">
                {newsItems[0].title}
              </h3>

              <p className="text-white/40 leading-relaxed flex-1">
                {newsItems[0].excerpt}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-6 text-gold font-heading font-medium text-sm hover:gap-3 transition-all duration-300 cursor-pointer"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Other articles */}
          {newsItems.slice(1).map((item, i) => (
            <div
              key={item.title}
              className={`group relative bg-secondary/50 border border-border rounded-xl p-6 hover:border-gold/20 hover:shadow-lg transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Badge
                  variant="outline"
                  className="border-navy/20 text-navy text-xs"
                >
                  {item.type}
                </Badge>
                <span className="text-muted-foreground text-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-navy-dark mb-2 group-hover:text-gold transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
