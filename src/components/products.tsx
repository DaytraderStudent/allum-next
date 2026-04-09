"use client";

import { useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    title: "Marine Cable Handling Equipment",
    category: "Cable Systems",
    description:
      "Complete turntable and carousel systems for subsea cable production, storage, transport and installation. Recognized supplier of onshore and offshore turntables — acting as both engineering partner and turnkey supplier.",
    features: [
      "Turntables & carousels",
      "Drive systems",
      "Transport frames",
      "Overboard & pick-up chutes",
      "Tensioners & pull-in winches",
    ],
    highlight: "Turnkey Supplier",
    color: "from-blue-500/20 to-navy/40",
  },
  {
    title: "Shore & Deck Cable Handling",
    category: "Cable Systems",
    description:
      "Specialized equipment for cable operations on shore facilities and vessel decks. Designed for safe and efficient cable handling in demanding marine environments.",
    features: [
      "Spooling lines",
      "Lockdown quadrants",
      "A-frames & sheaves",
      "Foundations",
      "Lifting tables",
    ],
    highlight: "Custom Design",
    color: "from-emerald-500/20 to-navy/40",
  },
  {
    title: "Compact Flotation Units (CFU)",
    category: "Water Treatment",
    description:
      "Proprietary produced water treatment technology delivering industry-leading performance. Low reject rate of less than 0.1%, high efficiency at low oil concentrations. Two patents granted with more pending.",
    features: [
      "Under 0.1% reject rate",
      "Compact footprint",
      "Patented technology",
      "Tested at Equinor",
      "Innovation Norway backed",
    ],
    highlight: "Patented Tech",
    color: "from-cyan-500/20 to-navy/40",
  },
  {
    title: "Handling Crane",
    category: "Lifting Equipment",
    description:
      "Complete knuckle-boom and service crane design for marine and industrial applications. Tailored to client specifications with full structural analysis.",
    features: [
      "Up to 15t at 15-25m at 4g",
      "3D FE analysis",
      "Classification ready",
    ],
    highlight: "Bespoke Design",
    color: "from-amber-500/20 to-navy/40",
  },
  {
    title: "Zero Emission Work Boat",
    category: "Maritime",
    description:
      "Next-generation electric work boat designed for harbour and near-shore operations. 12m length with battery-electric propulsion for zero-emission operations.",
    features: [
      "12m length",
      "8 knots service speed",
      "120 kWh battery",
      "5 tonne deck capacity",
    ],
    highlight: "Zero Emission",
    color: "from-green-500/20 to-navy/40",
  },
];

export default function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.05 });
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section
      id="products"
      className="relative py-32 bg-navy-dark overflow-hidden"
    >
      <div className="absolute inset-0 hero-grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-gold text-sm font-heading font-medium uppercase tracking-[0.2em]">
              Products
            </span>
            <div className="w-12 h-[2px] bg-gold" />
          </div>

          <h2
            className={`font-heading font-bold text-4xl md:text-5xl text-white transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Engineered
            <br />
            <span className="text-gold">Solutions</span>
          </h2>
        </div>

        {/* Product selector — desktop */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          {/* Left — tabs */}
          <div className="col-span-4 space-y-2">
            {products.map((product, i) => (
              <button
                key={product.title}
                onClick={() => setActiveProduct(i)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  activeProduct === i
                    ? "bg-white/[0.06] border-gold/30"
                    : "bg-transparent border-white/[0.06] hover:bg-white/[0.03]"
                } ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-heading font-semibold text-white text-sm">
                      {product.title}
                    </div>
                    <div className="text-white/30 text-xs mt-1">
                      {product.category}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-all duration-300 ${activeProduct === i ? "text-gold translate-x-0" : "text-white/20 -translate-x-1"}`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Right — active product detail */}
          <div className="col-span-8">
            <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-10 overflow-hidden">
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${products[activeProduct].color} opacity-30`}
              />

              <div className="relative">
                <Badge
                  variant="outline"
                  className="border-gold/30 text-gold mb-4"
                >
                  {products[activeProduct].highlight}
                </Badge>

                <h3 className="font-heading font-bold text-2xl text-white mb-4">
                  {products[activeProduct].title}
                </h3>

                <p className="text-white/50 leading-relaxed mb-8 max-w-lg">
                  {products[activeProduct].description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {products[activeProduct].features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-white/60"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-8 text-gold font-heading font-medium text-sm hover:gap-3 transition-all duration-300 cursor-pointer"
                >
                  Inquire About This Product
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile — stacked cards */}
        <div className="lg:hidden space-y-6">
          {products.map((product, i) => (
            <div
              key={product.title}
              className={`relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 overflow-hidden transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`}
              />
              <div className="relative">
                <Badge
                  variant="outline"
                  className="border-gold/30 text-gold mb-3"
                >
                  {product.highlight}
                </Badge>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-white/50 bg-white/[0.05] px-2 py-1 rounded"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
