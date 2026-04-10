import Image from "next/image";

interface PageHeaderProps {
  overline: string;
  title: string;
  titleAccent?: string;
  description?: string;
}

export default function PageHeader({
  overline,
  title,
  titleAccent,
  description,
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 bg-[#0A0F1A] overflow-hidden">
      <Image
        src="/images/background.png"
        alt=""
        fill
        className="object-cover opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/70 to-[#0A0F1A]/90" />
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="ph-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ph-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <p className="text-[#E8A020] text-[12px] font-semibold uppercase tracking-[0.15em] mb-4">
          {overline}
        </p>
        <h1 className="font-heading text-white text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-[0.02em] uppercase">
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="text-[#E8A020]">{titleAccent}</span>
            </>
          )}
        </h1>
        {description && (
          <p className="mt-5 text-[#9CA3AF] text-[16px] max-w-[500px] leading-[1.65]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
