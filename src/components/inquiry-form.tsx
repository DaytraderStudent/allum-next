"use client";

import { useState } from "react";
import Image from "next/image";

const serviceOptions = [
  "Structural Analysis & Design",
  "Mechanical Equipment Design",
  "Naval Architecture",
  "Cable Handling Equipment",
  "Turntable Systems",
  "CFU / Water Treatment",
  "Lifting & Crane Systems",
  "Vessel Modifications",
  "Other",
];

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative">
      <div className="grid lg:grid-cols-2 min-h-[700px]">
        {/* Left — image with contact info */}
        <div className="relative hidden lg:block">
          <Image
            src="/images/background.png"
            alt="Norwegian ocean"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0f1a2e]/80" />
          <div className="relative z-10 flex flex-col justify-end h-full p-12 pb-16">
            <h2 className="text-white text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.2] mb-8">
              Get in
              <br />
              <span className="font-semibold">touch</span>
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-white/30 text-[11px] font-medium uppercase tracking-[0.1em] mb-1">
                  Address
                </p>
                <p className="text-white/70 text-[15px]">
                  Hinderveien 5, 3223 Sandefjord, Norway
                </p>
              </div>
              <div>
                <p className="text-white/30 text-[11px] font-medium uppercase tracking-[0.1em] mb-1">
                  Email
                </p>
                <a
                  href="mailto:post@allum.no"
                  className="text-white/70 text-[15px] hover:text-white transition-colors cursor-pointer"
                >
                  post@allum.no
                </a>
              </div>
              <div>
                <p className="text-white/30 text-[11px] font-medium uppercase tracking-[0.1em] mb-1">
                  Phone
                </p>
                <a
                  href="tel:+4733473350"
                  className="text-white/70 text-[15px] hover:text-white transition-colors cursor-pointer"
                >
                  +47 33 47 33 50
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-[#f7f7f7] p-8 lg:p-16 flex items-center">
          <div className="w-full max-w-[520px] mx-auto">
            <div className="lg:hidden mb-10">
              <p className="text-gray-400 text-[13px] font-medium tracking-[0.1em] uppercase mb-4">
                Contact
              </p>
              <h2 className="text-[#0f1a2e] text-[28px] font-light leading-[1.2]">
                Get in <span className="font-semibold">touch</span>
              </h2>
            </div>

            {submitted ? (
              <div className="text-center py-16">
                <h3 className="text-[#0f1a2e] text-[24px] font-semibold mb-3">
                  Thank you
                </h3>
                <p className="text-gray-500 text-[15px]">
                  We&apos;ll review your inquiry and respond within one business
                  day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <p className="text-[#0f1a2e] text-[20px] font-semibold mb-6">
                  Project inquiry
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] text-gray-400 uppercase tracking-[0.06em] mb-1.5 font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full h-11 border border-gray-300 bg-white px-4 text-[14px] text-[#111827] focus:border-[#0f1a2e] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-gray-400 uppercase tracking-[0.06em] mb-1.5 font-medium">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full h-11 border border-gray-300 bg-white px-4 text-[14px] text-[#111827] focus:border-[#0f1a2e] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] text-gray-400 uppercase tracking-[0.06em] mb-1.5 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full h-11 border border-gray-300 bg-white px-4 text-[14px] text-[#111827] focus:border-[#0f1a2e] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-gray-400 uppercase tracking-[0.06em] mb-1.5 font-medium">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full h-11 border border-gray-300 bg-white px-4 text-[14px] text-[#111827] focus:border-[#0f1a2e] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] text-gray-400 uppercase tracking-[0.06em] mb-1.5 font-medium">
                    Service of interest
                  </label>
                  <select className="w-full h-11 border border-gray-300 bg-white px-4 text-[14px] text-[#111827] focus:border-[#0f1a2e] focus:outline-none transition-colors cursor-pointer appearance-none">
                    <option value="">Select...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] text-gray-400 uppercase tracking-[0.06em] mb-1.5 font-medium">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-[14px] text-[#111827] focus:border-[#0f1a2e] focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="h-12 px-8 bg-[#0f1a2e] text-white text-[14px] font-semibold hover:bg-[#1a2d4a] transition-colors cursor-pointer"
                >
                  Send inquiry
                </button>
              </form>
            )}

            <div className="lg:hidden mt-12 pt-8 border-t border-gray-300 space-y-3">
              <p className="text-gray-500 text-[14px]">
                Hinderveien 5, 3223 Sandefjord, Norway
              </p>
              <p className="text-gray-500 text-[14px]">post@allum.no</p>
              <p className="text-gray-500 text-[14px]">+47 33 47 33 50</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
