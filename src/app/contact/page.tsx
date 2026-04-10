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
      <main className="pt-20">
        <section className="py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_440px] gap-16 lg:gap-24">
              {/* Left */}
              <div>
                <p className="text-gold text-[12px] font-semibold uppercase tracking-[0.15em] mb-4">
                  Contact
                </p>
                <h1 className="font-heading text-foreground text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-[0.02em] uppercase">
                  Request
                  <br />
                  <span className="text-gold">A Quote</span>
                </h1>
                <p className="mt-6 text-muted-foreground text-[16px] leading-[1.7] max-w-[440px]">
                  Tell us about your project and we&apos;ll respond within one
                  business day with a tailored proposal.
                </p>

                <div className="mt-12 space-y-6">
                  {[
                    { label: "Address", value: "Hinderveien 5, 3223 Sandefjord, Norway" },
                    { label: "Phone", value: "+47 33 42 71 70", href: "tel:+4733427170" },
                    { label: "Email", value: "post@allum.no", href: "mailto:post@allum.no" },
                  ].map((c) => (
                    <div key={c.label}>
                      <p className="text-[11px] text-muted-foreground uppercase tracking-[0.1em] font-medium mb-1">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-foreground text-[15px] hover:text-gold transition-colors cursor-pointer">{c.value}</a>
                      ) : (
                        <p className="text-foreground text-[15px]">{c.value}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-10 aspect-[16/9] bg-card border border-border overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2048.5!2d10.22!3d59.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDA3JzQ4LjAiTiAxMMKwMTMnMTIuMCJF!5e0!3m2!1sen!2sno!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(1) contrast(1.1) opacity(0.7)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Allum Engineering location"
                  />
                </div>
              </div>

              {/* Right — Form */}
              <div>
                {submitted ? (
                  <div className="bg-card border border-border p-10 text-center">
                    <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mx-auto mb-5">
                      <Send className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="text-foreground text-[20px] font-semibold mb-2">
                      Inquiry Received
                    </h3>
                    <p className="text-muted-foreground text-[14px]">
                      We&apos;ll respond within one business day.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="bg-card border border-border p-6 lg:p-8 space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Full Name *" required />
                      <Field label="Company *" required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Email *" type="email" required />
                      <Field label="Phone" type="tel" />
                    </div>
                    <SelectField label="Industry" options={industries} />
                    <SelectField label="Project Type" options={projectTypes} />
                    <div>
                      <label className="block text-[11px] text-muted-foreground uppercase tracking-[0.06em] mb-1.5 font-medium">
                        Project Description *
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="w-full border border-border bg-background px-4 py-3 text-[14px] text-foreground focus:border-gold focus:outline-none transition-colors resize-none"
                        placeholder="Describe your project, requirements and timeline..."
                      />
                    </div>
                    <SelectField label="Estimated Timeline" options={timelines} />
                    <button
                      type="submit"
                      className="w-full h-12 bg-gold text-[#0A0F1A] text-[14px] font-semibold hover:bg-[#d4911c] transition-colors cursor-pointer"
                    >
                      Submit Request
                    </button>
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

function Field({ label, type = "text", required = false }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[11px] text-muted-foreground uppercase tracking-[0.06em] mb-1.5 font-medium">
        {label}
      </label>
      <input
        type={type}
        required={required}
        className="w-full h-11 border border-border bg-background px-4 text-[14px] text-foreground focus:border-gold focus:outline-none transition-colors"
      />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="block text-[11px] text-muted-foreground uppercase tracking-[0.06em] mb-1.5 font-medium">
        {label}
      </label>
      <select className="w-full h-11 border border-border bg-background px-4 text-[14px] text-foreground focus:border-gold focus:outline-none transition-colors cursor-pointer appearance-none">
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
