import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-[#0f1a2e]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-white text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.15]">
          Ready to discuss
          <br />
          <span className="font-semibold">your project?</span>
        </h2>
        <p className="mt-5 text-white/40 text-[16px] max-w-[440px] mx-auto">
          Whether you need engineering support or a turnkey solution — let&apos;s talk.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center mt-8 h-12 px-8 bg-white text-[#0f1a2e] text-[14px] font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
