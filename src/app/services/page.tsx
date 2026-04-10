import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Services — Allum Engineering",
  description: "Core engineering competencies across structural analysis, mechanical design, naval architecture and more.",
};

const services = [
  { title: "Structural Analysis & Design", text: "Comprehensive FEA, design of load-bearing structures for marine and industrial applications. Classification society liaison and approval documentation." },
  { title: "Mechanical Equipment Design", text: "Bespoke mechanical equipment engineering from concept through detailed design. Fabrication support, vendor follow-up, and commissioning assistance." },
  { title: "Piping & Pressure Vessels", text: "Piping stress analysis, pressure vessel design and process equipment engineering to international codes and standards (ASME, PED, DNV)." },
  { title: "Naval Architecture & Marine Engineering", text: "Stability analysis, vessel modifications, marine operations support, and full classification society interface. Hull structural design." },
  { title: "Lifting Appliances & Crane Systems", text: "Design of purpose-built lifting appliances and crane systems for marine, offshore and industrial operations. Full 3D FE analysis." },
  { title: "Systems Integration", text: "End-to-end integration of mechanical, structural and control systems. From feasibility studies through detailed engineering to commissioning." },
  { title: "Material & Welding Engineering", text: "Material selection, welding procedures, NDT planning and quality assurance in accordance with project specifications and ISO 9001." },
  { title: "Project Management", text: "Full project lifecycle management. Engineering, procurement, construction and installation coordination. Schedule and cost control." },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          overline="What we do"
          title="Multidisciplinary engineering"
          titleBold="across the full lifecycle"
          description="From feasibility studies and concept development to detailed engineering and commissioning."
        />

        {/* Services detail */}
        <section className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                <p className="text-gray-400 text-[13px] font-medium tracking-[0.1em] uppercase mb-5">
                  Core competencies
                </p>
                <h2 className="text-[#0f1a2e] text-[28px] font-light leading-[1.25]">
                  Integrated solutions from{" "}
                  <span className="font-semibold">one team</span>
                </h2>
                <p className="mt-4 text-gray-500 text-[15px] leading-[1.7]">
                  Our multidisciplinary approach means fewer interfaces and faster delivery. One team handles structural, mechanical, piping and electrical — coordinated from concept to handover.
                </p>
                <div className="mt-8">
                  <Image src="/images/iso-9001.png" alt="ISO 9001" width={80} height={80} className="opacity-50" />
                </div>
              </div>
              <div className="lg:col-span-8 divide-y divide-gray-200">
                {services.map((s) => (
                  <div key={s.title} className="py-8 first:pt-0">
                    <h3 className="text-[#0f1a2e] text-[20px] font-semibold leading-snug">{s.title}</h3>
                    <p className="mt-3 text-gray-500 text-[15px] leading-[1.7] max-w-[560px]">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0f1a2e]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-white text-[28px] font-light">
              Have a project in mind?
            </h2>
            <Link href="/contact" className="inline-flex items-center mt-6 h-12 px-8 bg-white text-[#0f1a2e] text-[14px] font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
              Get in touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
