import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Products — Allum Engineering",
  description: "Turntable systems, Compact Flotation Units, handling cranes, cable equipment and zero emission work boats.",
};

const products = [
  {
    title: "Turntable Systems",
    description: "Recognised supplier of onshore and offshore turntables for subsea cable storage, transport and installation. We serve as both engineering partner and turnkey supplier — handling engineering, procurement, construction and installation. Modular designs scale from small onshore units to large offshore carousel systems.",
    specs: ["Up to 7,000t capacity", "Modular design", "Onshore & offshore", "Full EPC delivery", "Tensioners & pull-in winches"],
    image: "/images/deliver2.png",
    isIllustration: true,
  },
  {
    title: "Compact Flotation Units (CFU)",
    description: "Proprietary produced water treatment technology developed since 2015. Delivers industry-leading oil removal with less than 0.1% reject rate. Two patents granted, additional patents pending. Tested at Equinor facilities, backed by Innovation Norway (5M NOK) and the Research Council of Norway. Now housed in sister company Allum Technology.",
    specs: ["< 0.1% reject rate", "2 patents granted", "Equinor tested", "Compact footprint", "Innovation Norway backed"],
    image: "/images/project.jpg",
    isIllustration: false,
  },
  {
    title: "Cable Handling Equipment",
    description: "Complete cable handling systems for marine and shore-based operations. Spooling lines, lockdown quadrants, A-frames, sheaves, overboard and pick-up chutes, foundations, and lifting tables. Designed for safe and efficient cable handling in demanding environments.",
    specs: ["Spooling lines", "A-frames & sheaves", "Overboard chutes", "Foundations", "Lifting tables"],
    image: "/images/thumb1.png",
    isIllustration: true,
  },
  {
    title: "Handling Cranes",
    description: "Complete knuckle-boom and service crane design for marine and industrial applications. Every crane is tailored to client requirements with full 3D FE structural analysis and delivered classification-ready.",
    specs: ["Up to 15t SWL", "3D FE analysis", "Classification ready", "Custom design"],
    image: "/images/thumb2.png",
    isIllustration: true,
  },
  {
    title: "Zero Emission Work Boat",
    description: "Next-generation 12-metre electric work boat designed for harbour and near-shore operations. Battery-electric propulsion for zero-emission operations with practical working capacity.",
    specs: ["12m length", "120 kWh battery", "8 knots service speed", "5 tonne deck capacity"],
    image: null,
    isIllustration: false,
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          overline="Products"
          title="Purpose-Built"
          titleAccent="Equipment"
        />

        <section className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-20">
            {products.map((p, i) => (
              <div key={p.title} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${i > 0 ? "pt-20 border-t border-gray-200" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-[#0f1a2e] text-[28px] lg:text-[32px] font-semibold leading-snug">
                    {p.title}
                  </h2>
                  <p className="mt-5 text-gray-500 text-[16px] leading-[1.75]">
                    {p.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2.5 text-[14px] text-gray-600">
                        <div className="w-1 h-1 rounded-full bg-[#0f1a2e]" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center mt-6 text-[#0f1a2e] text-[14px] font-semibold hover:text-gray-600 transition-colors cursor-pointer">
                    Request specification &rarr;
                  </Link>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  {p.image && (
                    <div className={`relative overflow-hidden ${p.isIllustration ? "aspect-[4/3] bg-gray-100 flex items-center justify-center" : "aspect-[4/3]"}`}>
                      {p.isIllustration ? (
                        <Image src={p.image} alt={p.title} width={500} height={350} className="object-contain max-h-[85%] max-w-[85%]" />
                      ) : (
                        <Image src={p.image} alt={p.title} fill className="object-cover" />
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
