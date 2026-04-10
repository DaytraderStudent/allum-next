import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import Timeline from "./timeline";
import Image from "next/image";

export const metadata = {
  title: "About — Allum Engineering",
  description:
    "Five decades of multidisciplinary engineering. Learn about Allum Engineering's history, team and values.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          overline="About us"
          title="Trusted partner"
          titleBold="since 1973"
          description="Multidisciplinary engineering, fabrication and turnkey solutions for the marine, energy and process industries."
        />

        {/* Intro */}
        <section className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <h2 className="text-[#0f1a2e] text-[28px] lg:text-[32px] font-light leading-[1.3]">
                  We&apos;re not just consultants — we&apos;re a{" "}
                  <span className="font-semibold">systems integrator</span> that
                  enables client technology.
                </h2>
              </div>
              <div className="space-y-5 text-gray-500 text-[16px] leading-[1.75]">
                <p>
                  Allum Engineering has served the marine, energy and process
                  industries for over five decades. We deliver multidisciplinary
                  engineering, fabrication support and turnkey solutions — keeping
                  our clients&apos; needs in focus.
                </p>
                <p>
                  Headquartered in Sandefjord, Norway, our team brings deep
                  expertise across structural analysis, naval architecture,
                  mechanical design, piping engineering and process systems.
                </p>
                <p>
                  We operate to ISO 9001 certified quality management standards
                  and are currently pursuing Miljøfyrtårn environmental
                  certification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blueprint illustration band */}
        <section className="relative h-[250px] bg-[#0f1a2e] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/about.png"
              alt="Allum Engineering blueprint"
              width={900}
              height={300}
              className="object-contain invert opacity-10 max-w-[80%]"
            />
          </div>
        </section>

        {/* Timeline */}
        <Timeline />

        {/* Key figures */}
        <section className="py-20 bg-[#f7f7f7]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { val: "50+", label: "Years in business" },
                { val: "~20", label: "Engineers" },
                { val: "5", label: "Departments" },
                { val: "2", label: "Patents granted" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[#0f1a2e] text-[40px] font-light leading-none">
                    {s.val}
                  </div>
                  <div className="text-gray-400 text-[13px] font-medium uppercase tracking-[0.06em] mt-2">
                    {s.label}
                  </div>
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
