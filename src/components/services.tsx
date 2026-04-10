"use client";

const services = [
  {
    num: "01",
    title: "Structural Analysis & Design",
    description:
      "Comprehensive FEA, design of load-bearing structures for marine and industrial applications. Classification society liaison.",
  },
  {
    num: "02",
    title: "Mechanical Equipment Design",
    description:
      "Bespoke mechanical equipment from concept through detailed design, including fabrication support and vendor follow-up.",
  },
  {
    num: "03",
    title: "Piping & Pressure Vessels",
    description:
      "Piping stress analysis, pressure vessel design and process equipment engineering to international codes.",
  },
  {
    num: "04",
    title: "Naval Architecture",
    description:
      "Stability analysis, vessel modifications, marine engineering and full classification society interface.",
  },
  {
    num: "05",
    title: "Lifting & Crane Systems",
    description:
      "Design of purpose-built lifting appliances and crane systems for marine, offshore and industrial operations.",
  },
  {
    num: "06",
    title: "Systems Integration",
    description:
      "End-to-end integration of mechanical, structural and control systems — from feasibility to commissioning.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0c1e3f]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left heading — sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <p className="text-[#b8953f] text-[13px] font-medium tracking-[0.08em] uppercase mb-4">
              What We Do
            </p>
            <h2 className="font-heading font-bold text-white text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
              Core engineering competencies
            </h2>
            <p className="mt-5 text-white/40 text-[15px] leading-[1.7]">
              Our multidisciplinary team delivers integrated solutions across the
              full project lifecycle. ISO 9001 certified.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center mt-8 text-[#b8953f] text-[14px] font-medium hover:text-[#caa854] transition-colors cursor-pointer"
            >
              Discuss your project &rarr;
            </a>
          </div>

          {/* Right — service list */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-white/[0.07]">
              {services.map((s) => (
                <div
                  key={s.num}
                  className="group py-7 first:pt-0 last:pb-0 grid sm:grid-cols-[48px_1fr] gap-4"
                >
                  <span className="font-heading font-semibold text-[#b8953f]/40 text-[13px] pt-0.5">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-[17px] group-hover:text-[#b8953f] transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-white/35 text-[14px] leading-[1.65] max-w-[480px]">
                      {s.description}
                    </p>
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
