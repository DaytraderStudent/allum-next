"use client";

const items = [
  "Marine Engineering",
  "Cable Handling",
  "Turntable Systems",
  "Naval Architecture",
  "Process Design",
  "Water Treatment",
  "Structural Analysis",
  "CFU Technology",
  "Offshore Modifications",
  "Zero Emission",
];

export default function MarqueeBanner() {
  return (
    <div className="relative py-6 bg-navy overflow-hidden border-y border-white/[0.06]">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-6 mx-6"
          >
            <span className="font-heading font-medium text-sm text-white/20 uppercase tracking-[0.15em]">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/30" />
          </span>
        ))}
      </div>
    </div>
  );
}
