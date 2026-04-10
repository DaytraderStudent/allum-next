"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] bg-card overflow-hidden">
            <Image
              src="/images/project.jpg"
              alt="Allum Engineering CFU unit"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-gold px-6 py-4">
              <span className="font-heading text-[#0A0F1A] text-[28px] tracking-wider">
                EST. 1973
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-gold text-[12px] font-semibold uppercase tracking-[0.15em] mb-4">
              About Allum
            </p>
            <h2 className="font-heading text-foreground text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-[0.02em] uppercase">
              Trusted Partner
              <br />
              For 50 Years
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-[15px] leading-[1.75]">
              <p>
                Allum Engineering has served the marine, energy and process
                industries for over five decades. We are a systems integrator —
                enabling our clients&apos; technology from concept through
                commissioning.
              </p>
              <p>
                From contributing to the world&apos;s first FPSO to delivering
                25+ cable handling projects for Nexans, our track record
                speaks for itself.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center mt-6 text-gold text-[14px] font-semibold hover:text-[#d4911c] transition-colors cursor-pointer"
            >
              Our full story &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
