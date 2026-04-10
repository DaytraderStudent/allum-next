"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const milestones = [
  { year: "1973", title: "Founded", text: "Allum Engineering established in Sandefjord by Øivind Allum, serving the Norwegian shipyard industry." },
  { year: "1980s", title: "New Markets", text: "Pivoted from shipyard to maritime supply, shipping and offshore as the industry transformed." },
  { year: "1987", title: "World's First FPSO", text: "Petrojarl 1 — contributed to the world's first FPSO vessel. NOK 110M contract value." },
  { year: "2000s", title: "Subsea Cable Entry", text: "Entered the subsea cable industry through partnership with Nexans." },
  { year: "2012", title: "Relaunch", text: "Renewed focus on cable, energy and process markets with expanded multidisciplinary capability." },
  { year: "2023", title: "50 Years & IC2", text: "50-year anniversary. Malta–Italy IC2 cable storage system contract awarded by Nexans." },
  { year: "2024", title: "Growth", text: "Revenue NOK 36M. Miljøfyrtårn certified. Continued growth in offshore wind sector." },
];

function getColor(pct: number): string {
  const r = Math.round(10 + (232 - 10) * pct);
  const g = Math.round(15 + (160 - 15) * pct);
  const b = Math.round(46 + (32 - 46) * pct);
  return `rgb(${r},${g},${b})`;
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = useCallback(() => {
    const c = containerRef.current;
    if (!c) return;
    const rect = c.getBoundingClientRect();
    const wh = window.innerHeight;
    const raw = -(rect.top - wh * 0.6) / (rect.bottom - wh * 0.4 - (rect.top - wh * 0.6));
    setProgress(Math.max(0, Math.min(1, raw)));

    let best = -1;
    nodeRefs.current.forEach((el, i) => {
      if (el && el.getBoundingClientRect().top < wh * 0.55) best = i;
    });
    setActiveIndex(best);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const lineColor = getColor(progress);

  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[880px] mx-auto px-6">
        <p className="text-gold text-[12px] font-semibold uppercase tracking-[0.15em] mb-4 text-center">
          Our Journey
        </p>
        <h2 className="font-heading text-foreground text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-[0.02em] uppercase text-center mb-20">
          Five Decades Of
          <br />
          <span className="text-gold">Engineering</span>
        </h2>

        <div ref={containerRef} className="relative">
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-border" />
          <div
            className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 w-[2px] transition-colors duration-300"
            style={{ height: `${progress * 100}%`, backgroundColor: lineColor }}
          />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            const reached = i <= activeIndex;
            const dotColor = reached ? getColor(i / (milestones.length - 1)) : "var(--border)";

            return (
              <div key={m.year} className="relative grid grid-cols-[56px_1fr] md:grid-cols-[1fr_56px_1fr] items-start">
                <div className={`hidden md:block py-10 ${isLeft ? "pr-10" : ""}`}>
                  {isLeft && (
                    <div className={`text-right transition-all duration-700 ${reached ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`} style={{ transitionDelay: "150ms" }}>
                      <span className="font-mono text-[12px] font-medium transition-colors duration-500" style={{ color: reached ? dotColor : "var(--muted-foreground)" }}>{m.year}</span>
                      <h3 className={`text-[18px] font-semibold mt-1 transition-colors duration-500 ${reached ? "text-foreground" : "text-muted-foreground/30"}`}>{m.title}</h3>
                      <p className={`text-[14px] leading-[1.7] mt-1.5 transition-colors duration-500 ${reached ? "text-muted-foreground" : "text-muted-foreground/20"}`}>{m.text}</p>
                    </div>
                  )}
                </div>

                <div className="relative flex flex-col items-center" ref={(el) => { nodeRefs.current[i] = el; }}>
                  <div className="py-10 relative z-10">
                    <div
                      className={`rounded-full transition-all duration-500 ${activeIndex === i ? "w-4 h-4" : reached ? "w-3 h-3" : "w-2.5 h-2.5"}`}
                      style={{
                        backgroundColor: dotColor,
                        boxShadow: activeIndex === i ? `0 0 0 4px var(--background), 0 0 0 6px ${dotColor}40, 0 0 12px ${dotColor}30` : reached ? `0 0 0 3px var(--background), 0 0 0 4px ${dotColor}30` : "0 0 0 3px var(--background), 0 0 0 4px var(--border)",
                      }}
                    />
                  </div>
                </div>

                <div className={`hidden md:block py-10 ${!isLeft ? "pl-10" : ""}`}>
                  {!isLeft && (
                    <div className={`transition-all duration-700 ${reached ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`} style={{ transitionDelay: "150ms" }}>
                      <span className="font-mono text-[12px] font-medium transition-colors duration-500" style={{ color: reached ? dotColor : "var(--muted-foreground)" }}>{m.year}</span>
                      <h3 className={`text-[18px] font-semibold mt-1 transition-colors duration-500 ${reached ? "text-foreground" : "text-muted-foreground/30"}`}>{m.title}</h3>
                      <p className={`text-[14px] leading-[1.7] mt-1.5 transition-colors duration-500 ${reached ? "text-muted-foreground" : "text-muted-foreground/20"}`}>{m.text}</p>
                    </div>
                  )}
                </div>

                {/* Mobile */}
                <div className="md:hidden py-10 pl-4">
                  <div className={`transition-all duration-700 ${reached ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
                    <span className="font-mono text-[11px] font-medium" style={{ color: reached ? dotColor : "var(--muted-foreground)" }}>{m.year}</span>
                    <h3 className={`text-[16px] font-semibold mt-1 transition-colors duration-500 ${reached ? "text-foreground" : "text-muted-foreground/30"}`}>{m.title}</h3>
                    <p className={`text-[13px] leading-[1.65] mt-1 transition-colors duration-500 ${reached ? "text-muted-foreground" : "text-muted-foreground/20"}`}>{m.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
