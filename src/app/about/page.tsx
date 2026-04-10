import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import Timeline from "./timeline";
import Image from "next/image";

export const metadata = {
  title: "About — Allum Engineering",
  description: "Five decades of multidisciplinary engineering since 1973.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader overline="About Us" title="Trusted partner" titleBold="since 1973" description="Multidisciplinary engineering, fabrication and turnkey solutions for the marine, energy and process industries." />

        <section className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <h2 className="text-[#0f1a2e] text-[28px] lg:text-[32px] font-light leading-[1.3]">
                  We&apos;re not just consultants — we&apos;re a <span className="font-semibold">systems integrator</span> that enables client technology.
                </h2>
              </div>
              <div className="space-y-5 text-gray-500 text-[16px] leading-[1.75]">
                <p>From the world&apos;s first FPSO (Petrojarl 1, NOK 110M contract) to 25+ cable handling projects for Nexans, our track record demonstrates consistent delivery across the most demanding projects.</p>
                <p>Headquartered in Sandefjord, Norway, our team of 18+ specialists brings deep expertise across structural analysis, naval architecture, mechanical design, piping engineering and process systems.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-[200px] bg-[#0f1a2e] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/images/about.png" alt="" width={900} height={300} className="object-contain invert opacity-[0.06] max-w-[80%]" aria-hidden="true" />
          </div>
        </section>

        <Timeline />

        {/* Team */}
        <section className="py-24 lg:py-32 bg-[#f7f7f7]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <p className="text-gray-400 text-[13px] font-medium tracking-[0.1em] uppercase mb-5">Leadership</p>
            <h2 className="text-[#0f1a2e] text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.2] mb-12">
              Our <span className="font-semibold">team</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-[700px]">
              {[
                { name: "Tor Martin Røed", role: "Managing Director", desc: "Leading Allum's operations and strategic growth across all five business areas." },
                { name: "Øivind Allum", role: "Chairman / Founder", desc: "Founded Allum Engineering in 1973. Over 50 years of engineering industry leadership." },
              ].map((p) => (
                <div key={p.name} className="bg-white border border-gray-200 p-6">
                  <h3 className="text-[#0f1a2e] text-[16px] font-semibold">{p.name}</h3>
                  <p className="text-gray-400 text-[12px] font-medium uppercase tracking-[0.06em] mt-1">{p.role}</p>
                  <p className="text-gray-500 text-[14px] leading-[1.65] mt-3">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-[#0f1a2e]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { val: "50+", label: "Years" },
                { val: "18+", label: "Specialists" },
                { val: "25+", label: "Nexans Projects" },
                { val: "36M", label: "NOK Revenue 2024" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-white text-[40px] font-light leading-none">{s.val}</div>
                  <div className="text-white/30 text-[12px] font-medium uppercase tracking-[0.08em] mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
