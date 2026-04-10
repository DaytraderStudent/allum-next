"use client";

import { useRef, useEffect, useState } from "react";
import {
  Ship,
  Anchor,
  Factory,
  Wrench,
  Droplets,
  FlaskConical,
  Award,
} from "lucide-react";

const milestones = [
  {
    year: "1973",
    title: "The beginning",
    text: "Founded by Øivind Allum in Sandefjord, serving the Norwegian shipyard industry in eastern Norway.",
    icon: Anchor,
    accent: "#1e3a5f",
  },
  {
    year: "1980s",
    title: "New horizons",
    text: "As the shipyard industry declined, Allum pivoted to maritime supply, shipping and offshore — opening entirely new markets.",
    icon: Ship,
    accent: "#1e4d5f",
  },
  {
    year: "1990s",
    title: "World's first FPSO",
    text: "Participated in the construction of Petrojarl 1, the world's first Floating Production Storage and Offloading unit. Multidisciplinary division sold to Norsk Vekst AS; Allum Marine spun off.",
    icon: Factory,
    accent: "#1e5f4d",
  },
  {
    year: "2012",
    title: "Relaunch",
    text: "Allum Engineering relaunched with a broader multidisciplinary scope — covering marine, energy and process industries under one roof.",
    icon: Wrench,
    accent: "#3a1e5f",
  },
  {
    year: "2015",
    title: "CFU development begins",
    text: "Started development of the patented Compact Flotation Unit water treatment technology, backed by Innovation Norway and the Research Council of Norway.",
    icon: Droplets,
    accent: "#1e3a5f",
  },
  {
    year: "2019",
    title: "Equinor validation",
    text: "CFU technology tested at Equinor facilities. Partnership with Austrian oil company OMV established for further system validation.",
    icon: FlaskConical,
    accent: "#1e4d5f",
  },
  {
    year: "Today",
    title: "Looking ahead",
    text: "Around 20 engineers across five departments. ISO 9001 certified. Two patents granted. Pursuing Miljøfyrtårn environmental certification.",
    icon: Award,
    accent: "#0f1a2e",
  },
];

function TimelineItem({
  m,
  index,
  isLast,
}: {
  m: (typeof milestones)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const Icon = m.icon;
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[1fr_56px_1fr] md:grid-cols-[1fr_72px_1fr] items-start"
    >
      {/* Left content */}
      <div className={`py-10 md:py-14 ${isLeft ? "pr-6 md:pr-12" : ""}`}>
        {isLeft && (
          <div
            className={`text-right transition-all duration-700 ease-out ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span
              className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 mb-3"
              style={{ backgroundColor: `${m.accent}10`, color: m.accent }}
            >
              {m.year}
            </span>
            <h3 className="text-[#0f1a2e] text-[20px] md:text-[22px] font-semibold leading-snug">
              {m.title}
            </h3>
            <p className="mt-2.5 text-gray-500 text-[14px] leading-[1.7]">
              {m.text}
            </p>
          </div>
        )}
      </div>

      {/* Center spine */}
      <div className="relative flex flex-col items-center">
        {/* Line segment — grows on scroll */}
        {index > 0 && (
          <div
            className={`w-px transition-all duration-700 ease-out ${
              visible ? "h-full bg-gray-200" : "h-0 bg-transparent"
            }`}
            style={{ minHeight: visible ? "100%" : 0 }}
          />
        )}

        {/* The node */}
        <div
          className={`relative z-10 shrink-0 transition-all duration-500 ease-out ${
            visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          {/* Pulse ring */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-1000 ${
              visible ? "animate-[ping_1.5s_ease-out_1]" : ""
            }`}
            style={{ backgroundColor: `${m.accent}15` }}
          />
          {/* Outer ring */}
          <div
            className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${m.accent}, ${m.accent}cc)`,
              boxShadow: `0 0 0 4px white, 0 0 0 5px #e5e7eb, 0 4px 12px ${m.accent}25`,
            }}
          >
            <Icon className="w-5 h-5 md:w-[22px] md:h-[22px] text-white" />
          </div>
        </div>

        {/* Line below node */}
        {!isLast && (
          <div
            className={`w-px flex-1 transition-all duration-700 ease-out ${
              visible ? "bg-gray-200" : "bg-transparent"
            }`}
            style={{ transitionDelay: "400ms" }}
          />
        )}
      </div>

      {/* Right content */}
      <div className={`py-10 md:py-14 ${!isLeft ? "pl-6 md:pl-12" : ""}`}>
        {!isLeft && (
          <div
            className={`transition-all duration-700 ease-out ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span
              className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 mb-3"
              style={{ backgroundColor: `${m.accent}10`, color: m.accent }}
            >
              {m.year}
            </span>
            <h3 className="text-[#0f1a2e] text-[20px] md:text-[22px] font-semibold leading-snug">
              {m.title}
            </h3>
            <p className="mt-2.5 text-gray-500 text-[14px] leading-[1.7]">
              {m.text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden bg-[#fafafa]">
      <div className="max-w-[880px] mx-auto px-6">
        <p className="text-gray-400 text-[13px] font-medium tracking-[0.1em] uppercase mb-4 text-center">
          Our journey
        </p>
        <h2 className="text-[#0f1a2e] text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.2] text-center mb-20">
          Five decades of <span className="font-semibold">engineering</span>
        </h2>

        <div className="relative">
          {milestones.map((m, i) => (
            <TimelineItem
              key={m.year}
              m={m}
              index={i}
              isLast={i === milestones.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
