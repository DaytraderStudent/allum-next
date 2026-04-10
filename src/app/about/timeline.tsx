"use client";

import { useRef } from "react";
import { Ship, Anchor, Factory, Wrench, Droplets, FlaskConical, Award } from "lucide-react";

const milestones = [
  {
    year: "1973",
    title: "The beginning",
    text: "Founded by Øivind Allum in Sandefjord, serving the Norwegian shipyard industry in eastern Norway.",
    icon: Anchor,
    side: "left" as const,
  },
  {
    year: "1980s",
    title: "New horizons",
    text: "As the shipyard industry declined, Allum pivoted to maritime supply, shipping and offshore — opening entirely new markets.",
    icon: Ship,
    side: "right" as const,
  },
  {
    year: "1990s",
    title: "World's first FPSO",
    text: "Participated in the construction of Petrojarl 1, the world's first Floating Production Storage and Offloading unit. Multidisciplinary division sold to Norsk Vekst AS; Allum Marine spun off.",
    icon: Factory,
    side: "left" as const,
  },
  {
    year: "2012",
    title: "Relaunch",
    text: "Allum Engineering relaunched with a broader multidisciplinary scope — covering marine, energy and process industries under one roof.",
    icon: Wrench,
    side: "right" as const,
  },
  {
    year: "2015",
    title: "CFU development begins",
    text: "Started development of the patented Compact Flotation Unit water treatment technology, backed by Innovation Norway and the Research Council of Norway.",
    icon: Droplets,
    side: "left" as const,
  },
  {
    year: "2019",
    title: "Equinor validation",
    text: "CFU technology tested at Equinor facilities. Partnership with Austrian oil company OMV established for further system validation.",
    icon: FlaskConical,
    side: "right" as const,
  },
  {
    year: "Today",
    title: "Looking ahead",
    text: "Around 20 engineers across five departments. ISO 9001 certified. Two patents granted. Pursuing Miljøfyrtårn environmental certification.",
    icon: Award,
    side: "left" as const,
  },
];

function TimelineItem({
  m,
  index,
}: {
  m: (typeof milestones)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = m.icon;
  const isLeft = m.side === "left";

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[1fr_48px_1fr] md:grid-cols-[1fr_64px_1fr] items-start gap-0"
    >
      {/* Left content */}
      <div
        className={`py-8 md:py-12 ${isLeft ? "pr-6 md:pr-10 text-right" : ""}`}
      >
        {isLeft && (
          <>
            <span className="text-[#0f1a2e] text-[13px] font-semibold tracking-[0.06em] uppercase">
              {m.year}
            </span>
            <h3 className="mt-1 text-[#0f1a2e] text-[20px] md:text-[24px] font-semibold leading-snug">
              {m.title}
            </h3>
            <p className="mt-3 text-gray-500 text-[15px] leading-[1.7]">
              {m.text}
            </p>
          </>
        )}
      </div>

      {/* Center line + dot */}
      <div className="relative flex flex-col items-center">
        {/* Vertical line — full height */}
        <div
          className={`absolute top-0 bottom-0 w-px bg-gray-200 ${index === 0 ? "top-[50%]" : ""} ${index === milestones.length - 1 ? "bottom-[50%] h-[50%]" : ""}`}
        />
        {/* Node */}
        <div className="relative z-10 mt-8 md:mt-12 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0f1a2e] flex items-center justify-center shadow-[0_0_0_4px_white,0_0_0_5px_#e5e7eb]">
          <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
      </div>

      {/* Right content */}
      <div
        className={`py-8 md:py-12 ${!isLeft ? "pl-6 md:pl-10" : ""}`}
      >
        {!isLeft && (
          <>
            <span className="text-[#0f1a2e] text-[13px] font-semibold tracking-[0.06em] uppercase">
              {m.year}
            </span>
            <h3 className="mt-1 text-[#0f1a2e] text-[20px] md:text-[24px] font-semibold leading-snug">
              {m.title}
            </h3>
            <p className="mt-3 text-gray-500 text-[15px] leading-[1.7]">
              {m.text}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[900px] mx-auto px-6">
        <p className="text-gray-400 text-[13px] font-medium tracking-[0.1em] uppercase mb-4 text-center">
          Our journey
        </p>
        <h2 className="text-[#0f1a2e] text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.2] text-center mb-16">
          Five decades of <span className="font-semibold">engineering</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {milestones.map((m, i) => (
            <TimelineItem key={m.year} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
