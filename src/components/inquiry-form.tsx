"use client";

import { useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  "Other / General Inquiry",
];

export default function InquiryForm() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-navy-dark overflow-hidden"
    >
      <div className="absolute inset-0 hero-grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left — Info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-heading font-medium uppercase tracking-[0.2em]">
                Contact
              </span>
            </div>

            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight">
              Let&apos;s Build
              <br />
              <span className="text-gold">Together</span>
            </h2>

            <p className="mt-6 text-white/40 leading-relaxed">
              Whether you need engineering support for an ongoing project or
              want to explore how we can help — we&apos;d love to hear from you.
            </p>

            {/* Contact details */}
            <div className="mt-12 space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: "Hinderveien 5, 3223 Sandefjord, Norway",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+47 33 47 33 50",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "post@allum.no",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Mon–Fri: 08:00 – 16:00 CET",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-white/30 text-xs uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-white/70 text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {submitted ? (
              <div className="bg-white/[0.03] border border-gold/20 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  Inquiry Received
                </h3>
                <p className="text-white/40">
                  Thank you for reaching out. Our team will review your inquiry
                  and get back to you within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 md:p-10 space-y-6"
              >
                <h3 className="font-heading font-semibold text-xl text-white mb-2">
                  Project Inquiry
                </h3>
                <p className="text-white/30 text-sm mb-6">
                  Tell us about your project and we&apos;ll get back to you
                  promptly.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:border-gold/40 focus:outline-none transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:border-gold/40 focus:outline-none transition-colors duration-200"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:border-gold/40 focus:outline-none transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:border-gold/40 focus:outline-none transition-colors duration-200"
                      placeholder="+47 XXX XX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                    Service of Interest
                  </label>
                  <select className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm focus:border-gold/40 focus:outline-none transition-colors duration-200 cursor-pointer appearance-none">
                    <option value="" className="bg-navy-dark">
                      Select a service...
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-navy-dark">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                    Project Description *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:border-gold/40 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold text-navy-dark font-heading font-semibold py-6 rounded-lg hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Inquiry
                </Button>

                <p className="text-white/20 text-xs text-center">
                  We typically respond within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
