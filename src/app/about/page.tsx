import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import Timeline from "./timeline";
import Image from "next/image";

export const metadata = {
  title: "About — Allum Engineering",
  description: "Five decades of multidisciplinary engineering since 1973.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          overline="About Us"
          title="Trusted Partner"
          titleAccent="For 50 Years"
          description="Multidisciplinary engineering, fabrication and turnkey solutions for the marine, energy and process industries."
        />

        {/* Intro */}
        <section className="py-24 lg:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <h2 className="font-heading text-foreground text-[clamp(1.8rem,3.5vw,2.5rem)] leading-[0.95] tracking-[0.02em] uppercase">
                  We Are A
                  <br />
                  <span className="text-gold">Systems Integrator</span>
                </h2>
              </div>
              <div className="space-y-5 text-muted-foreground text-[15px] leading-[1.75]">
                <p>
                  Allum Engineering has served the marine, energy and process
                  industries for over five decades. We deliver multidisciplinary
                  engineering, fabrication support and turnkey solutions — keeping
                  our clients&apos; needs in focus.
                </p>
                <p>
                  From the world&apos;s first FPSO (Petrojarl 1, NOK 110M
                  contract) to 25+ cable handling projects for Nexans, our track
                  record demonstrates consistent delivery across the most
                  demanding projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blueprint band */}
        <section className="relative h-[200px] bg-[#0A0F1A] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/about.png"
              alt=""
              width={900}
              height={300}
              className="object-contain invert opacity-[0.06] max-w-[80%]"
              aria-hidden="true"
            />
          </div>
        </section>

        <Timeline />

        {/* Team */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-gold text-[12px] font-semibold uppercase tracking-[0.15em] mb-4">
              Leadership
            </p>
            <h2 className="font-heading text-foreground text-[clamp(1.8rem,3.5vw,2.5rem)] leading-[0.95] tracking-[0.02em] uppercase mb-12">
              Our Team
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-[700px]">
              {[
                { name: "Tor Martin Røed", role: "Managing Director", desc: "Leading Allum's operations and strategic growth across all five business areas." },
                { name: "Øivind Allum", role: "Chairman of the Board / Founder", desc: "Founded Allum Engineering in 1973. Over 50 years of engineering industry leadership." },
              ].map((p) => (
                <div key={p.name} className="bg-background border border-border p-6">
                  <h3 className="text-foreground text-[16px] font-semibold">{p.name}</h3>
                  <p className="text-gold text-[12px] font-medium uppercase tracking-[0.06em] mt-1">{p.role}</p>
                  <p className="text-muted-foreground text-[14px] leading-[1.65] mt-3">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 lg:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Technical Excellence", desc: "50 years of engineering precision. ISO 9001 certified quality management across all disciplines." },
                { title: "Trusted Partnerships", desc: "Long-term relationships built on delivery. 25+ projects with Nexans spanning over two decades." },
                { title: "Innovative Solutions", desc: "From the world's first FPSO to patented water treatment technology — pushing boundaries since day one." },
              ].map((v) => (
                <div key={v.title} className="p-6 bg-card border border-border">
                  <h3 className="font-heading text-gold text-[24px] tracking-wider uppercase">{v.title}</h3>
                  <p className="text-muted-foreground text-[14px] leading-[1.65] mt-3">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-[#0A0F1A]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { val: "50+", label: "Years" },
                { val: "18+", label: "Specialists" },
                { val: "25+", label: "Nexans Projects" },
                { val: "36M", label: "NOK Revenue 2024" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading text-white text-[48px] tracking-wider">{s.val}</div>
                  <div className="text-[#9CA3AF] text-[12px] font-medium uppercase tracking-[0.08em] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
