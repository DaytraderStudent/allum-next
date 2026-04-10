import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import CTASection from "@/components/cta-section";
import Image from "next/image";
import { Ruler, Cog, Wind, Anchor, Construction, Cable } from "lucide-react";

export const metadata = {
  title: "Services — Allum Engineering",
  description: "Structural analysis, mechanical design, naval architecture, cable handling and more.",
};

const services = [
  { icon: Ruler, title: "Structural Analysis & Design", items: ["FEM analysis for marine and industrial structures", "Environmental load assessment (waves, wind, current)", "Design per NORSOK, DNV, Eurocode standards", "Classification society documentation and liaison"] },
  { icon: Cog, title: "Mechanical Equipment Design", items: ["Cable turntables, tensioners, pull-in winches", "Custom loading systems and storage modules", "Specialised process industry equipment", "Concept through detailed design to fabrication support"] },
  { icon: Wind, title: "Piping & Pressure Vessel Analysis", items: ["Piping system design and stress analysis", "Pressure vessel calculations per PED", "International standard compliance", "Material selection and welding engineering"] },
  { icon: Anchor, title: "Naval Architecture & Marine Engineering", items: ["Ship modifications and vessel conversions", "Ballast systems and stability analysis", "FPSO experience (Petrojarl 1)", "Classification society interface"] },
  { icon: Construction, title: "Lifting Equipment & Crane Systems", items: ["Purpose-built lifting appliances", "Knuckle-boom and service cranes", "DNV-certified lifting design", "Full 3D FE structural analysis"] },
  { icon: Cable, title: "Cable Handling & Subsea Systems", items: ["Production, handling, transport and storage equipment", "Subsea and HV cable installation support", "End-to-end solutions from design to installation", "25+ projects delivered for Nexans"] },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          overline="What We Do"
          title="Core"
          titleAccent="Disciplines"
          description="Six engineering disciplines under one roof. ISO 9001 certified. From feasibility to commissioning."
        />

        <section className="py-24 lg:py-32">
          <div className="max-w-[1200px] mx-auto px-6 space-y-6">
            {services.map((s, i) => (
              <div key={s.title} className="grid lg:grid-cols-[300px_1fr] bg-card border border-border overflow-hidden group hover:border-gold/20 transition-colors">
                {/* Left */}
                <div className="p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border bg-background relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                  <s.icon className="w-7 h-7 text-gold mb-3" />
                  <h3 className="font-heading text-foreground text-[24px] tracking-wider uppercase leading-[1.1]">
                    {s.title}
                  </h3>
                </div>
                {/* Right */}
                <div className="p-8">
                  <ul className="space-y-3">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] text-muted-foreground leading-[1.6]">
                        <div className="w-1 h-1 rounded-full bg-gold mt-2.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ISO */}
        <section className="py-16 bg-card border-y border-border">
          <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-center gap-6">
            <Image src="/images/iso-9001.png" alt="ISO 9001" width={60} height={60} className="opacity-60" />
            <div>
              <p className="text-foreground text-[15px] font-semibold">ISO 9001 Certified</p>
              <p className="text-muted-foreground text-[13px]">Quality management across all disciplines</p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
