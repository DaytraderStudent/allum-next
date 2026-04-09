"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { Shield, Award, Globe, Users } from "lucide-react";

const milestones = [
  { year: "1973", text: "Founded by Øivind Allum in Sandefjord" },
  { year: "1980s", text: "Pivoted to maritime supply & offshore" },
  { year: "1990s", text: "Participated in the world's first FPSO build" },
  { year: "2012", text: "Relaunched with broader multidisciplinary scope" },
  { year: "2015", text: "CFU water treatment technology development begins" },
  { year: "Today", text: "Leading partner in marine & energy engineering" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="about" className="relative py-32 bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <div
            className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-heading font-medium uppercase tracking-[0.2em]">
                Who We Are
              </span>
            </div>

            <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy-dark leading-tight">
              Trusted Partner
              <br />
              <span className="text-gold">Since 1973</span>
            </h2>

            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              For over five decades, Allum Engineering has served the marine,
              energy and process industries with multidisciplinary engineering,
              fabrication and turnkey solutions. We are a systems integrator,
              enabling client technology — keeping our clients&apos; needs in
              focus.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Headquartered in Sandefjord, Norway, our team of dedicated
              engineers brings deep expertise across structural analysis, naval
              architecture, mechanical design, and process engineering.
            </p>

            {/* Value props */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "ISO 9001",
                  desc: "Certified quality management",
                },
                {
                  icon: Award,
                  title: "50+ Years",
                  desc: "Industry experience",
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  desc: "International project delivery",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  desc: "Multidisciplinary engineers",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`flex gap-3 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-navy-dark text-sm">
                      {item.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Timeline */}
          <div
            className={`transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative bg-navy-dark rounded-2xl p-8 md:p-10">
              <h3 className="font-heading font-semibold text-xl text-white mb-8">
                Our Journey
              </h3>

              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-4 group">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-gold shrink-0 group-hover:scale-125 transition-transform duration-200" />
                      {i < milestones.length - 1 && (
                        <div className="w-px h-full bg-white/10 min-h-[40px]" />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="font-heading font-semibold text-gold text-sm">
                        {m.year}
                      </div>
                      <div className="text-white/60 text-sm mt-1">{m.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
