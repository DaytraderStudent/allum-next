"use client";

import Image from "next/image";

interface PageHeaderProps {
  overline: string;
  title: string;
  titleBold: string;
  description?: string;
}

export default function PageHeader({ overline, title, titleBold, description }: PageHeaderProps) {
  return (
    <section className="relative h-[400px] lg:h-[450px] bg-[#0f1a2e] overflow-hidden">
      <Image src="/images/background.png" alt="" fill className="object-cover opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e] via-transparent to-[#0f1a2e]/60" />
      <div className="relative z-10 h-full flex items-end max-w-[1400px] mx-auto px-6 lg:px-12 pb-16">
        <div className="max-w-[640px]">
          <p className="text-white/40 text-[13px] font-medium tracking-[0.1em] uppercase mb-5">{overline}</p>
          <h1 className="text-white text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.1] tracking-[-0.015em]">
            {title}<br /><span className="font-semibold">{titleBold}</span>
          </h1>
          {description && <p className="mt-5 text-white/40 text-[17px] font-light leading-[1.65] max-w-[480px]">{description}</p>}
        </div>
      </div>
    </section>
  );
}
