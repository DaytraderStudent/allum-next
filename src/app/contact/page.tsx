"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Send } from "lucide-react";

const industries = ["Subsea Cable", "Offshore", "Marine", "Process Industry", "Other"];
const projectTypes = ["Structural Analysis", "Mechanical Design", "Piping", "Naval Architecture", "Lifting", "Cable Handling", "Other"];
const timelines = ["ASAP", "1–3 months", "3–6 months", "6–12 months", "Planning phase"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navigation />
      <main className="pt-20 pb-24">
        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-24">
              <div>
                <p className="text-gray-400 text-[13px] font-medium tracking-[0.1em] uppercase mb-5">Contact</p>
                <h1 className="text-[#0f1a2e] text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.1]">
                  Request a <span className="font-semibold">quote</span>
                </h1>
                <p className="mt-5 text-gray-500 text-[16px] leading-[1.7] max-w-[440px]">
                  Tell us about your project and we&apos;ll respond within one business day.
                </p>

                <div className="mt-12 space-y-6">
                  {[
                    { label: "Address", value: "Hinderveien 5, 3223 Sandefjord, Norway" },
                    { label: "Phone", value: "+47 33 42 71 70", href: "tel:+4733427170" },
                    { label: "Email", value: "post@allum.no", href: "mailto:post@allum.no" },
                  ].map((c) => (
                    <div key={c.label}>
                      <p className="text-[11px] text-gray-400 uppercase tracking-[0.1em] font-medium mb-1">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-[#0f1a2e] text-[15px] hover:text-gray-600 transition-colors cursor-pointer">{c.value}</a>
                      ) : (
                        <p className="text-[#0f1a2e] text-[15px]">{c.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {submitted ? (
                  <div className="bg-[#f7f7f7] border border-gray-200 p-10 text-center">
                    <Send className="w-6 h-6 text-[#0f1a2e] mx-auto mb-4" />
                    <h3 className="text-[#0f1a2e] text-[20px] font-semibold mb-2">Inquiry received</h3>
                    <p className="text-gray-500 text-[14px]">We&apos;ll respond within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-[#f7f7f7] border border-gray-200 p-6 lg:p-8 space-y-5">
                    <p className="text-[#0f1a2e] text-[18px] font-semibold mb-4">Project inquiry</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <InputField label="Full Name *" required />
                      <InputField label="Company *" required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <InputField label="Email *" type="email" required />
                      <InputField label="Phone" type="tel" />
                    </div>
                    <SelectField label="Industry" options={industries} />
                    <SelectField label="Project Type" options={projectTypes} />
                    <div>
                      <label className="block text-[11px] text-gray-400 uppercase tracking-[0.06em] mb-1.5 font-medium">Project Description *</label>
                      <textarea required rows={4} className="w-full border border-gray-300 bg-white px-4 py-3 text-[14px] text-[#111827] focus:border-[#0f1a2e] focus:outline-none transition-colors resize-none" placeholder="Describe your project..." />
                    </div>
                    <SelectField label="Estimated Timeline" options={timelines} />
                    <button type="submit" className="w-full h-12 bg-[#0f1a2e] text-white text-[14px] font-semibold hover:bg-[#1a2d4a] transition-colors cursor-pointer">Submit Request</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function InputField({ label, type = "text", required = false }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[11px] text-gray-400 uppercase tracking-[0.06em] mb-1.5 font-medium">{label}</label>
      <input type={type} required={required} className="w-full h-11 border border-gray-300 bg-white px-4 text-[14px] text-[#111827] focus:border-[#0f1a2e] focus:outline-none transition-colors" />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="block text-[11px] text-gray-400 uppercase tracking-[0.06em] mb-1.5 font-medium">{label}</label>
      <select className="w-full h-11 border border-gray-300 bg-white px-4 text-[14px] text-[#111827] focus:border-[#0f1a2e] focus:outline-none transition-colors cursor-pointer appearance-none">
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
