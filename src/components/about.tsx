"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80"
              alt="Engineering fabrication work"
              fill
              className="object-cover"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-0 left-0 bg-[#0f1a2e] px-8 py-5">
              <div className="text-white text-[32px] font-light leading-none">
                1973
              </div>
              <div className="text-white/40 text-[11px] font-medium uppercase tracking-[0.1em] mt-1">
                Established
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-gray-400 text-[13px] font-medium tracking-[0.1em] uppercase mb-6">
              About Allum Engineering
            </p>
            <h2 className="text-[#0f1a2e] text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.2] tracking-[-0.01em]">
              Five decades of solving
              <br />
              <span className="font-semibold">complex challenges</span>
            </h2>
            <div className="mt-8 space-y-4 text-gray-500 text-[16px] leading-[1.75]">
              <p>
                Founded by Øivind Allum in Sandefjord, we started serving the
                Norwegian shipyard industry. When that industry declined in the
                1980s, we pivoted to maritime supply, shipping and offshore —
                participating in the construction of the world&apos;s first
                FPSO, Petrojarl 1.
              </p>
              <p>
                Today, around 20 engineers work across five departments covering
                structural analysis, naval architecture, mechanical design, and
                process engineering. We operate as a systems integrator —
                enabling our clients&apos; technology from concept through
                commissioning.
              </p>
            </div>
            {/* Key facts */}
            <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {[
                { val: "~20", label: "Engineers" },
                { val: "5", label: "Departments" },
                { val: "2", label: "Patents" },
              ].map((f) => (
                <div key={f.label}>
                  <div className="text-[#0f1a2e] text-[28px] font-semibold leading-none">
                    {f.val}
                  </div>
                  <div className="text-gray-400 text-[12px] font-medium uppercase tracking-[0.06em] mt-1.5">
                    {f.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
