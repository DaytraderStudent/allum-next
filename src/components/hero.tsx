"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Anchor, Cog, Waves } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-dark"
      style={
        { "--mouse-x": "0px", "--mouse-y": "0px" } as React.CSSProperties
      }
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy/80 to-navy-dark" />

      {/* Floating geometric accents */}
      <div
        className="absolute top-20 right-[15%] w-64 h-64 border border-gold/10 rounded-full animate-float"
        style={{
          transform:
            "translate(calc(var(--mouse-x) * 0.5), calc(var(--mouse-y) * 0.5))",
        }}
      />
      <div
        className="absolute bottom-32 left-[10%] w-40 h-40 border border-gold/5 rotate-45"
        style={{
          transform:
            "rotate(45deg) translate(calc(var(--mouse-x) * -0.3), calc(var(--mouse-y) * -0.3))",
        }}
      />
      <div className="absolute top-1/3 right-[8%] w-3 h-3 bg-gold/30 rounded-full animate-float delay-200" />
      <div className="absolute bottom-1/4 right-[20%] w-2 h-2 bg-gold/20 rounded-full animate-float delay-400" />

      {/* Decorative icons */}
      <Anchor className="absolute top-[25%] left-[8%] w-8 h-8 text-white/[0.04]" />
      <Cog className="absolute bottom-[30%] right-[12%] w-12 h-12 text-white/[0.04] animate-[spin_20s_linear_infinite]" />
      <Waves className="absolute top-[60%] left-[15%] w-10 h-10 text-white/[0.04]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Overline */}
          <div className="animate-fade-in-up opacity-0 flex items-center gap-3 mb-8">
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-gold text-sm font-heading font-medium uppercase tracking-[0.2em]">
              Since 1973
            </span>
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-in-up opacity-0 delay-100 font-heading font-bold text-white leading-[1.05]">
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Innovative
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Engineering
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-white/50 mt-2 font-medium">
              — done with passion
            </span>
          </h1>

          {/* Description */}
          <p className="animate-fade-in-up opacity-0 delay-300 mt-8 text-lg md:text-xl text-white/50 max-w-xl leading-relaxed">
            Multidisciplinary engineering, fabrication and turnkey solutions for
            the marine, energy and process industries.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up opacity-0 delay-400 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 bg-gold text-navy-dark font-heading font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
            >
              Explore Our Services
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-heading font-medium rounded-lg hover:border-gold/50 hover:text-gold transition-all duration-300 cursor-pointer"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-in-up opacity-0 delay-500 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          {[
            { number: "50+", label: "Years of Experience" },
            { number: "5", label: "Industry Sectors" },
            { number: "ISO", label: "9001 Certified" },
            { number: "24/7", label: "Global Support" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-heading font-bold text-3xl md:text-4xl text-gold">
                {stat.number}
              </div>
              <div className="text-sm text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-white/30 uppercase tracking-widest">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 text-white/30" />
      </div>
    </section>
  );
}
