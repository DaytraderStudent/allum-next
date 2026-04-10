"use client";

import Image from "next/image";
import Link from "next/link";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-[#0A0F1A] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/team.jpg"
        alt="Allum Engineering team"
        fill
        className="object-cover opacity-30"
        priority
      />
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/60 to-[#0A0F1A]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-12 md:pb-20 w-full">
        <div className="max-w-[700px]">
          <h1 className="font-heading text-[clamp(3rem,8vw,6.5rem)] text-white leading-[0.95] tracking-[0.02em] uppercase">
            Engineering
            <br />
            Solutions
            <br />
            <span className="text-gold">Since 1973</span>
          </h1>
          <p className="mt-6 text-[#9CA3AF] text-[17px] leading-[1.65] max-w-[480px]">
            Subsea cables. Offshore structures. Process equipment.
            Multidisciplinary engineering for the world&apos;s most demanding
            industries.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="h-12 px-7 bg-gold text-[#0A0F1A] text-[14px] font-semibold inline-flex items-center hover:bg-[#d4911c] transition-colors cursor-pointer"
            >
              View Our Projects
            </Link>
            <Link
              href="/contact"
              className="h-12 px-7 border border-white/20 text-white text-[14px] font-medium inline-flex items-center hover:border-gold/50 hover:text-gold transition-all cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 50, suffix: "+", label: "Years of Experience" },
            { value: 18, suffix: "+", label: "Engineering Specialists" },
            { value: 5, suffix: "", label: "Core Disciplines" },
            { value: 25, suffix: "+", label: "Nexans Projects" },
          ].map((s) => (
            <div key={s.label}>
              <div className="flex items-baseline font-heading text-[3rem] text-white tracking-wider">
                <NumberTicker value={s.value} className="text-white" />
                {s.suffix && <span className="text-gold">{s.suffix}</span>}
              </div>
              <p className="text-[#9CA3AF] text-[12px] font-medium uppercase tracking-[0.08em] mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown className="w-4 h-4 text-white/20" />
      </div>
    </section>
  );
}
