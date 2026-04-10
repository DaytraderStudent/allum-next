"use client";

import { NumberTicker } from "@/components/ui/number-ticker";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end bg-[#0c1e3f] overflow-hidden">
      {/* Background image overlay — using a CSS gradient as sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(184,149,63,0.12),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0c1e3f] to-transparent" />
        {/* Subtle blueprint grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-16 pt-32 md:pb-24 md:pt-40 w-full">
        <div className="max-w-[720px]">
          {/* Overline — understated */}
          <p className="text-[#b8953f] text-[13px] font-medium tracking-[0.08em] uppercase mb-6">
            Est. 1973 &middot; Sandefjord, Norway
          </p>

          {/* Heading — large, confident, not over-animated */}
          <h1 className="font-heading font-bold text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.025em]">
            Engineering that
            <br />
            moves industries
            <span className="text-[#b8953f]">.</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-white/50 text-lg md:text-xl leading-relaxed max-w-[540px]">
            Multidisciplinary engineering for the marine, energy and process
            industries. From concept to commissioning.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center h-12 px-7 bg-[#b8953f] text-[#0c1e3f] text-[14px] font-semibold rounded-sm hover:bg-[#caa854] transition-colors cursor-pointer"
            >
              What we do
            </a>
            <a
              href="#contact"
              className="inline-flex items-center h-12 px-7 border border-white/20 text-white/80 text-[14px] font-medium rounded-sm hover:border-white/40 hover:text-white transition-all cursor-pointer"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="font-heading font-bold text-[2rem] text-white flex items-baseline">
              <NumberTicker value={50} className="text-white" />
              <span className="text-[#b8953f] ml-0.5">+</span>
            </div>
            <p className="text-white/35 text-[13px] mt-1">Years in business</p>
          </div>
          <div>
            <div className="font-heading font-bold text-[2rem] text-white flex items-baseline">
              <NumberTicker value={5} className="text-white" />
            </div>
            <p className="text-white/35 text-[13px] mt-1">Industry sectors</p>
          </div>
          <div>
            <div className="font-heading font-bold text-[2rem] text-white">
              ISO 9001
            </div>
            <p className="text-white/35 text-[13px] mt-1">Certified quality</p>
          </div>
          <div>
            <div className="font-heading font-bold text-[2rem] text-white flex items-baseline">
              <NumberTicker value={2} className="text-white" />
            </div>
            <p className="text-white/35 text-[13px] mt-1">Patents granted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
