"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image — Allum's blueprint illustration with ocean underneath */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#0f1a2e]">
              <Image
                src="/images/background.png"
                alt="Norwegian ocean"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <Image
                  src="/images/about.png"
                  alt="Allum Engineering blueprint illustration"
                  width={600}
                  height={260}
                  className="w-full max-w-[500px] object-contain invert opacity-60"
                />
              </div>
              {/* Year badge */}
              <div className="absolute bottom-0 left-0 bg-white px-8 py-5">
                <div className="text-[#0f1a2e] text-[32px] font-light leading-none">
                  1973
                </div>
                <div className="text-gray-400 text-[11px] font-medium uppercase tracking-[0.1em] mt-1">
                  Established
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-gray-400 text-[13px] font-medium tracking-[0.1em] uppercase mb-6">
              About Allum Engineering
            </p>
            <h2 className="text-[#0f1a2e] text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.2] tracking-[-0.01em]">
              Five decades of solving
              <br />
              <span className="font-semibold">complex challenges</span>
            </h2>
            <div className="mt-8 space-y-4 text-gray-500 text-[16px] leading-[1.75]">
              <p>
                Founded by Øivind Allum in Sandefjord, we started serving the
                Norwegian shipyard industry. When that industry declined in the
                1980s, we pivoted to maritime supply, shipping and offshore —
                participating in the construction of the world&apos;s first
                FPSO, Petrojarl 1.
              </p>
              <p>
                Today, around 20 engineers work across five departments covering
                structural analysis, naval architecture, mechanical design, and
                process engineering. We operate as a systems integrator —
                enabling our clients&apos; technology from concept through
                commissioning.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center mt-8 text-[#0f1a2e] text-[14px] font-semibold hover:text-gray-600 transition-colors cursor-pointer"
            >
              Read more about us &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
