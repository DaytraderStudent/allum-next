"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const serviceOptions = [
  "Structural Analysis & Design",
  "Mechanical Equipment Design",
  "Piping & Pressure Vessels",
  "Naval Architecture",
  "Cable Handling Equipment",
  "Turntable Systems",
  "CFU / Water Treatment",
  "Lifting & Crane Systems",
  "Vessel Modifications",
  "General Inquiry",
];

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#f8f7f4]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-5">
            <p className="text-[#b8953f] text-[13px] font-medium tracking-[0.08em] uppercase mb-4">
              Contact
            </p>
            <h2 className="font-heading font-bold text-[#0c1e3f] text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
              Start a conversation
            </h2>
            <p className="mt-5 text-[#6b6b6b] text-[15px] leading-[1.7]">
              Whether you need engineering support for an ongoing project or want
              to explore how we can help — reach out and we&apos;ll get back to
              you within one business day.
            </p>

            <div className="mt-10 space-y-5">
              <div>
                <p className="text-[12px] text-[#6b6b6b] uppercase tracking-[0.06em] mb-1">
                  Address
                </p>
                <p className="text-[#1a1a1a] text-[15px]">
                  Hinderveien 5, 3223 Sandefjord
                </p>
              </div>
              <div>
                <p className="text-[12px] text-[#6b6b6b] uppercase tracking-[0.06em] mb-1">
                  Email
                </p>
                <a
                  href="mailto:post@allum.no"
                  className="text-[#0c1e3f] text-[15px] hover:text-[#b8953f] transition-colors cursor-pointer"
                >
                  post@allum.no
                </a>
              </div>
              <div>
                <p className="text-[12px] text-[#6b6b6b] uppercase tracking-[0.06em] mb-1">
                  Phone
                </p>
                <a
                  href="tel:+4733473350"
                  className="text-[#0c1e3f] text-[15px] hover:text-[#b8953f] transition-colors cursor-pointer"
                >
                  +47 33 47 33 50
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-white border border-[#d6d3cc] rounded-sm p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-[#b8953f]/10 flex items-center justify-center mx-auto mb-5">
                  <Send className="w-5 h-5 text-[#b8953f]" />
                </div>
                <h3 className="font-heading font-bold text-[#0c1e3f] text-xl mb-2">
                  Inquiry received
                </h3>
                <p className="text-[#6b6b6b] text-[15px]">
                  We&apos;ll review your message and respond within one business
                  day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-[#d6d3cc] rounded-sm p-8 md:p-10"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] text-[#6b6b6b] uppercase tracking-[0.06em] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full h-11 border border-[#d6d3cc] rounded-sm px-4 text-[14px] text-[#1a1a1a] bg-transparent placeholder-[#6b6b6b]/50 focus:border-[#0c1e3f] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-[#6b6b6b] uppercase tracking-[0.06em] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full h-11 border border-[#d6d3cc] rounded-sm px-4 text-[14px] text-[#1a1a1a] bg-transparent placeholder-[#6b6b6b]/50 focus:border-[#0c1e3f] focus:outline-none transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mt-5">
                  <div>
                    <label className="block text-[12px] text-[#6b6b6b] uppercase tracking-[0.06em] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full h-11 border border-[#d6d3cc] rounded-sm px-4 text-[14px] text-[#1a1a1a] bg-transparent placeholder-[#6b6b6b]/50 focus:border-[#0c1e3f] focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-[#6b6b6b] uppercase tracking-[0.06em] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full h-11 border border-[#d6d3cc] rounded-sm px-4 text-[14px] text-[#1a1a1a] bg-transparent placeholder-[#6b6b6b]/50 focus:border-[#0c1e3f] focus:outline-none transition-colors"
                      placeholder="+47 XXX XX XXX"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-[12px] text-[#6b6b6b] uppercase tracking-[0.06em] mb-2">
                    Service of interest
                  </label>
                  <select className="w-full h-11 border border-[#d6d3cc] rounded-sm px-4 text-[14px] text-[#1a1a1a] bg-white focus:border-[#0c1e3f] focus:outline-none transition-colors cursor-pointer appearance-none">
                    <option value="">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label className="block text-[12px] text-[#6b6b6b] uppercase tracking-[0.06em] mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border border-[#d6d3cc] rounded-sm px-4 py-3 text-[14px] text-[#1a1a1a] bg-transparent placeholder-[#6b6b6b]/50 focus:border-[#0c1e3f] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex items-center h-11 px-7 bg-[#0c1e3f] text-white text-[13px] font-medium rounded-sm hover:bg-[#162d54] transition-colors cursor-pointer"
                >
                  Send inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
