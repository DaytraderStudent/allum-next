"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px]">
      {/* Background — Allum's own ocean photo */}
      <Image
        src="/images/background.png"
        alt="Norwegian ocean waves"
        fill
        className="object-cover"
        priority
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1a2e]/90 via-[#0f1a2e]/70 to-[#0f1a2e]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e]/90 via-transparent to-[#0f1a2e]/40" />

      {/* Blueprint illustration subtle overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-screen">
        <Image
          src="/images/about.png"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end max-w-[1400px] mx-auto px-6 lg:px-12 pb-20 lg:pb-28">
        <div className="max-w-[640px]">
          <p className="text-white/40 text-[14px] font-medium tracking-[0.12em] uppercase mb-5">
            Engineering &middot; Fabrication &middot; Turnkey
          </p>
          <h1 className="text-white text-[clamp(2.5rem,5.5vw,4.2rem)] font-light leading-[1.1] tracking-[-0.015em]">
            Innovative engineering
            <br />
            <span className="font-semibold">done with passion</span>
          </h1>
          <p className="mt-6 text-white/50 text-[17px] font-light leading-[1.65] max-w-[480px]">
            Trusted partner in the marine, energy and process industries since
            1973. Based in Sandefjord, Norway.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center h-12 px-7 bg-white text-[#0f1a2e] text-[14px] font-semibold tracking-[0.01em] hover:bg-gray-100 transition-colors cursor-pointer"
            >
              What we do
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center h-12 px-7 border border-white/25 text-white text-[14px] font-medium tracking-[0.01em] hover:bg-white/10 transition-colors cursor-pointer"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom stats strip */}
      <div className="absolute bottom-0 right-0 hidden lg:flex bg-white">
        {[
          { val: "50+", label: "Years" },
          { val: "5", label: "Sectors" },
          { val: "ISO 9001", label: "Certified" },
        ].map((s, i) => (
          <div
            key={s.label}
            className={`px-10 py-6 ${i > 0 ? "border-l border-gray-200" : ""}`}
          >
            <div className="text-[#0f1a2e] text-[24px] font-semibold leading-none">
              {s.val}
            </div>
            <div className="text-gray-400 text-[12px] font-medium uppercase tracking-[0.08em] mt-1.5">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
