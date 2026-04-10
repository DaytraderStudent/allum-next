"use client";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#f8f7f4]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — intro text */}
          <div className="lg:col-span-5">
            <p className="text-[#b8953f] text-[13px] font-medium tracking-[0.08em] uppercase mb-4">
              About Allum
            </p>
            <h2 className="font-heading font-bold text-[#0c1e3f] text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
              Trusted partner since 1973
            </h2>
            <p className="mt-6 text-[#6b6b6b] text-[16px] leading-[1.7]">
              Founded by Øivind Allum in Sandefjord, we&apos;ve spent five
              decades solving complex engineering challenges across maritime,
              offshore, and process industries. We&apos;re not just consultants
              — we&apos;re a systems integrator that enables client technology.
            </p>
            <p className="mt-4 text-[#6b6b6b] text-[16px] leading-[1.7]">
              From participating in the construction of the world&apos;s first
              FPSO to developing patented water treatment technology, our track
              record speaks for itself.
            </p>
          </div>

          {/* Right — timeline */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
              {[
                {
                  year: "1973",
                  text: "Founded in Sandefjord, serving Norwegian shipyard industry",
                },
                {
                  year: "1980s",
                  text: "Pivoted to maritime supply, shipping and offshore sectors",
                },
                {
                  year: "1990s",
                  text: "Contributed to world's first FPSO, Petrojarl 1",
                },
                {
                  year: "2012",
                  text: "Relaunched with expanded multidisciplinary capability",
                },
                {
                  year: "2015",
                  text: "Began development of patented CFU water treatment",
                },
                {
                  year: "Today",
                  text: "~20 engineers across 5 departments, ISO 9001 certified",
                },
              ].map((m) => (
                <div
                  key={m.year}
                  className="group border-l-2 border-[#d6d3cc] pl-5 hover:border-[#b8953f] transition-colors"
                >
                  <span className="font-heading font-semibold text-[#b8953f] text-[13px]">
                    {m.year}
                  </span>
                  <p className="mt-1 text-[#1a1a1a] text-[15px] leading-[1.6]">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
