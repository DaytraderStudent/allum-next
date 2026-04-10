import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0F1A] relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="font-heading text-white text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-[0.02em] uppercase">
          Ready to Discuss
          <br />
          <span className="text-gold">Your Project?</span>
        </h2>
        <p className="mt-5 text-[#9CA3AF] text-[16px] max-w-[440px] mx-auto">
          Whether you need engineering support or a turnkey solution — let&apos;s talk.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center mt-8 h-13 px-8 bg-gold text-[#0A0F1A] text-[15px] font-semibold hover:bg-[#d4911c] transition-colors cursor-pointer"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
