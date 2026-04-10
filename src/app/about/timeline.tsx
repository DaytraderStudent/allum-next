"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const milestones = [
  {
    year: "1973",
    title: "The beginning",
    text: "Founded by Øivind Allum in Sandefjord, serving the Norwegian shipyard industry in eastern Norway.",
  },
  {
    year: "1980s",
    title: "New horizons",
    text: "As the shipyard industry declined, Allum pivoted to maritime supply, shipping and offshore — opening entirely new markets.",
  },
  {
    year: "1990s",
    title: "World's first FPSO",
    text: "Participated in the construction of Petrojarl 1, the world's first Floating Production Storage and Offloading unit. Multidisciplinary division sold to Norsk Vekst AS; Allum Marine spun off.",
  },
  {
    year: "2012",
    title: "Relaunch",
    text: "Allum Engineering relaunched with a broader multidisciplinary scope — covering marine, energy and process industries under one roof.",
  },
  {
    year: "2015",
    title: "CFU development begins",
    text: "Started development of the patented Compact Flotation Unit water treatment technology, backed by Innovation Norway and the Research Council of Norway.",
  },
  {
    year: "2019",
    title: "Equinor validation",
    text: "CFU technology tested at Equinor facilities. Partnership with Austrian oil company OMV established for further system validation.",
  },
  {
    year: "Today",
    title: "Looking ahead",
    text: "Around 20 engineers across five departments. ISO 9001 certified. Two patents granted. Pursuing Miljøfyrtårn environmental certification.",
  },
];

// Gradient stops: deep navy → teal → blue as you scroll down
function getProgressColor(pct: number): string {
  const stops = [
    { at: 0, r: 15, g: 26, b: 46 },     // #0f1a2e — dark navy
    { at: 0.25, r: 20, g: 60, b: 90 },   // steel blue
    { at: 0.5, r: 14, g: 95, b: 120 },   // teal
    { at: 0.75, r: 30, g: 110, b: 140 }, // lighter teal
    { at: 1, r: 37, g: 99, b: 235 },     // #2563eb — blue
  ];

  let lo = stops[0], hi = stops[stops.length - 1];
  for (let i = 0; i < stops.length - 1; i++) {
    if (pct >= stops[i].at && pct <= stops[i + 1].at) {
      lo = stops[i];
      hi = stops[i + 1];
      break;
    }
  }

  const t = (pct - lo.at) / (hi.at - lo.at || 1);
  const r = Math.round(lo.r + (hi.r - lo.r) * t);
  const g = Math.round(lo.g + (hi.g - lo.g) * t);
  const b = Math.round(lo.b + (hi.b - lo.b) * t);
  return `rgb(${r},${g},${b})`;
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const windowH = window.innerHeight;

    // How far into the timeline section we've scrolled (0 → 1)
    const start = rect.top - windowH * 0.6;
    const end = rect.bottom - windowH * 0.4;
    const raw = -start / (end - start);
    const clamped = Math.max(0, Math.min(1, raw));
    setProgress(clamped);

    // Which node is currently "active" (closest to viewport center)
    const triggerY = windowH * 0.55;
    let best = -1;
    nodeRefs.current.forEach((el, i) => {
      if (!el) return;
      const nr = el.getBoundingClientRect();
      if (nr.top < triggerY) best = i;
    });
    setActiveIndex(best);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const lineColor = getProgressColor(progress);

  return (
    <section className="py-24 lg:py-32 overflow-hidden bg-[#fafafa]">
      <div className="max-w-[880px] mx-auto px-6">
        <p className="text-gray-400 text-[13px] font-medium tracking-[0.1em] uppercase mb-4 text-center">
          Our journey
        </p>
        <h2 className="text-[#0f1a2e] text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.2] text-center mb-20">
          Five decades of <span className="font-semibold">engineering</span>
        </h2>

        <div ref={containerRef} className="relative">
          {/* Background track (full height, gray) */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gray-200" />

          {/* Filled progress line */}
          <div
            className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 w-[2px] transition-colors duration-300 ease-out"
            style={{
              height: `${progress * 100}%`,
              backgroundColor: lineColor,
            }}
          />

          {/* Glowing tip */}
          {progress > 0 && progress < 1 && (
            <div
              className="absolute left-[27px] md:left-1/2 md:-translate-x-[5px] w-[10px] h-[10px] rounded-full -translate-x-[4px] pointer-events-none transition-colors duration-300"
              style={{
                top: `${progress * 100}%`,
                backgroundColor: lineColor,
                boxShadow: `0 0 12px 4px ${lineColor}50`,
                transform: `translate(-4px, -5px)`,
              }}
            />
          )}

          {/* Items */}
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            const reached = i <= activeIndex;
            const isActive = i === activeIndex;
            const dotColor = reached ? getProgressColor(i / (milestones.length - 1)) : "#d1d5db";

            return (
              <div
                key={m.year}
                className="relative grid grid-cols-[56px_1fr] md:grid-cols-[1fr_56px_1fr] items-start"
              >
                {/* Left content (desktop) */}
                <div
                  className={`hidden md:block py-12 ${isLeft ? "pr-12" : ""}`}
                >
                  {isLeft && (
                    <div
                      className={`text-right transition-all duration-700 ease-out ${
                        reached
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-6"
                      }`}
                      style={{ transitionDelay: "150ms" }}
                    >
                      <span
                        className="inline-block text-[12px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm mb-3 transition-colors duration-500"
                        style={{
                          backgroundColor: reached ? `${dotColor}15` : "#f3f4f6",
                          color: reached ? dotColor : "#9ca3af",
                        }}
                      >
                        {m.year}
                      </span>
                      <h3
                        className={`text-[21px] font-semibold leading-snug transition-colors duration-500 ${
                          isActive ? "text-[#0f1a2e]" : reached ? "text-[#0f1a2e]" : "text-gray-300"
                        }`}
                      >
                        {m.title}
                      </h3>
                      <p
                        className={`mt-2.5 text-[14px] leading-[1.7] transition-colors duration-500 ${
                          reached ? "text-gray-500" : "text-gray-300"
                        }`}
                      >
                        {m.text}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center node */}
                <div
                  className="relative flex flex-col items-center"
                  ref={(el) => { nodeRefs.current[i] = el; }}
                >
                  <div className="py-12 relative z-10">
                    {/* Outer ring — grows on active */}
                    <div
                      className={`absolute inset-0 m-auto rounded-full transition-all duration-500 ${
                        isActive ? "w-10 h-10 opacity-100" : "w-0 h-0 opacity-0"
                      }`}
                      style={{
                        backgroundColor: `${dotColor}12`,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                    {/* Dot */}
                    <div
                      className={`relative rounded-full transition-all duration-500 ease-out ${
                        isActive
                          ? "w-[18px] h-[18px]"
                          : reached
                            ? "w-[14px] h-[14px]"
                            : "w-[10px] h-[10px]"
                      }`}
                      style={{
                        backgroundColor: dotColor,
                        boxShadow: isActive
                          ? `0 0 0 4px white, 0 0 0 6px ${dotColor}40, 0 0 16px ${dotColor}30`
                          : reached
                            ? `0 0 0 3px white, 0 0 0 4px ${dotColor}30`
                            : "0 0 0 3px white, 0 0 0 4px #e5e7eb",
                      }}
                    />
                  </div>
                </div>

                {/* Right content (desktop) */}
                <div
                  className={`hidden md:block py-12 ${!isLeft ? "pl-12" : ""}`}
                >
                  {!isLeft && (
                    <div
                      className={`transition-all duration-700 ease-out ${
                        reached
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-6"
                      }`}
                      style={{ transitionDelay: "150ms" }}
                    >
                      <span
                        className="inline-block text-[12px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm mb-3 transition-colors duration-500"
                        style={{
                          backgroundColor: reached ? `${dotColor}15` : "#f3f4f6",
                          color: reached ? dotColor : "#9ca3af",
                        }}
                      >
                        {m.year}
                      </span>
                      <h3
                        className={`text-[21px] font-semibold leading-snug transition-colors duration-500 ${
                          isActive ? "text-[#0f1a2e]" : reached ? "text-[#0f1a2e]" : "text-gray-300"
                        }`}
                      >
                        {m.title}
                      </h3>
                      <p
                        className={`mt-2.5 text-[14px] leading-[1.7] transition-colors duration-500 ${
                          reached ? "text-gray-500" : "text-gray-300"
                        }`}
                      >
                        {m.text}
                      </p>
                    </div>
                  )}
                </div>

                {/* Mobile content (always right of dot) */}
                <div className="md:hidden py-12 pl-4">
                  <div
                    className={`transition-all duration-700 ease-out ${
                      reached
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    }`}
                  >
                    <span
                      className="inline-block text-[11px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-sm mb-2 transition-colors duration-500"
                      style={{
                        backgroundColor: reached ? `${dotColor}15` : "#f3f4f6",
                        color: reached ? dotColor : "#9ca3af",
                      }}
                    >
                      {m.year}
                    </span>
                    <h3
                      className={`text-[18px] font-semibold leading-snug transition-colors duration-500 ${
                        reached ? "text-[#0f1a2e]" : "text-gray-300"
                      }`}
                    >
                      {m.title}
                    </h3>
                    <p
                      className={`mt-2 text-[14px] leading-[1.65] transition-colors duration-500 ${
                        reached ? "text-gray-500" : "text-gray-300"
                      }`}
                    >
                      {m.text}
                    </p>
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
