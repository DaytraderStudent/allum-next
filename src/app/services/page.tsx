import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import CTASection from "@/components/cta-section";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Services — Allum Engineering" };

const services = [
  { title: "Structural Analysis & Design", items: ["FEM analysis for marine and industrial structures", "Environmental load assessment (waves, wind, current)", "Design per NORSOK, DNV, Eurocode", "Classification society documentation"] },
  { title: "Mechanical Equipment Design", items: ["Cable turntables, tensioners, pull-in winches", "Custom loading systems and storage modules", "Process industry equipment", "Concept through fabrication support"] },
  { title: "Piping & Pressure Vessels", items: ["Piping system design and stress analysis", "Pressure vessel calculations per PED", "International standard compliance", "Material selection and welding engineering"] },
  { title: "Naval Architecture & Marine", items: ["Ship modifications and conversions", "Ballast systems and stability analysis", "FPSO experience (Petrojarl 1)", "Classification society interface"] },
  { title: "Lifting Equipment & Cranes", items: ["Purpose-built lifting appliances", "Knuckle-boom and service cranes", "DNV-certified lifting design", "Full 3D FE structural analysis"] },
  { title: "Cable Handling & Subsea", items: ["Production, handling, transport and storage", "Subsea and HV cable installation support", "End-to-end design to installation", "25+ projects for Nexans"] },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader overline="What We Do" title="Core engineering" titleBold="competencies" description="Six disciplines under one roof. ISO 9001 certified. From feasibility to commissioning." />

        <section className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                <h2 className="text-[#0f1a2e] text-[28px] font-light leading-[1.25]">
                  Integrated solutions from <span className="font-semibold">one team</span>
                </h2>
                <p className="mt-4 text-gray-500 text-[15px] leading-[1.7]">
                  Our multidisciplinary approach means fewer interfaces and faster delivery.
                </p>
                <div className="mt-8">
                  <Image src="/images/iso-9001.png" alt="ISO 9001" width={80} height={80} className="opacity-50" />
                </div>
              </div>
              <div className="lg:col-span-8 divide-y divide-gray-200">
                {services.map((s) => (
                  <div key={s.title} className="py-8 first:pt-0">
                    <h3 className="text-[#0f1a2e] text-[20px] font-semibold leading-snug">{s.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-500 leading-[1.6]">
                          <div className="w-1 h-1 rounded-full bg-[#0f1a2e] mt-2.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
