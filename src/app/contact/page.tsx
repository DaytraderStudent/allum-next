"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Send, Phone, Mail } from "lucide-react";

const team = [
  { name: "Tor Martin Roed", title: "Managing Director", company: "Allum Engineering AS", phone: "+47 905 49 439", email: "tmr@allum.no", photo: "/images/team/tor-martin.png" },
  { name: "Vegard Klavenes", title: "Technical Manager", company: "Allum Engineering AS", phone: "+47 958 59 798", email: "vkl@allum.no", photo: "/images/team/vegard.png" },
  { name: "Bjørn Håvard Brænden", title: "CEO", company: "Allum Industrier AS", phone: "+47 976 00 769", email: "bhb@allum.no", photo: "/images/team/bjorn-havard.png" },
  { name: "Jon Fischer", title: "Project Manager", discipline: "Head of EPC Projects", phone: "+47 905 86 897", email: "jon.fischer@allum.no", photo: "/images/team/jon.jpg" },
  { name: "Rune Overåsberget", title: "Principal Engineer", discipline: "Structure", phone: "+47 906 41 746", email: "rune.overaasberget@allum.no", photo: "/images/team/rune.png" },
  { name: "Odd Rønning", title: "Principal Engineer", discipline: "Process, Piping & Materials", phone: "+47 997 23 080", email: "odd.ronning@allum.no", photo: "/images/team/odd.png" },
  { name: "Rosana Bolivar", title: "Senior Engineer", discipline: "Mechanical & Structural", phone: "+47 468 85 796", email: "rosana.bolivar@allum.no", photo: "/images/team/rosana.jpg" },
  { name: "Sjur Klavenes", title: "Senior Engineer", discipline: "Structure", phone: "+47 413 01 087", email: "sjur@allum.no", photo: "/images/team/sjur.png" },
  { name: "Jørgen Aronsen", title: "Senior Engineer", discipline: "Mechanical & Structural", phone: "+47 477 67 677", email: "jorgen.aronsen@allum.no", photo: "/images/team/jorgen.jpg" },
  { name: "June Sjuve", title: "Senior Engineer", discipline: "Mechanical & Structural", phone: "+47 918 28 266", email: "june.sjuve@allum.no", photo: "/images/team/june.png" },
  { name: "Jorunn Fonstelien", title: "Senior Engineer", discipline: "Structural", phone: "+47 974 33 447", email: "jorunn.fonstelien@allum.no", photo: "/images/team/jorunn.jpg" },
  { name: "Morten Formoe", title: "Engineer", discipline: "Structure", phone: "+47 468 83 924", email: "morten.formoe@allum.no", photo: "/images/team/morten-f.jpg" },
  { name: "Nikolai Eidsor Viken", title: "Engineer", discipline: "Mechanical & Structural", phone: "+47 468 87 265", email: "nev@allum.no", photo: "/images/team/nikolai.png" },
  { name: "Phillip Bredal", title: "Engineer", discipline: "Mechanical & Structural", phone: "+47 477 14 137", email: "phillip.bredal@allum.no", photo: "/images/team/phillip.png" },
  { name: "Richelieu Dahn", title: "Engineer", discipline: "Mechanical & Structural", phone: "+47 468 82 895", email: "richelieu.dahn@allum.no", photo: "/images/team/richelieu.png" },
  { name: "Ida Bohne Krogseth", title: "Engineer", discipline: "Structure", phone: "+47 913 97 809", email: "ida.bohne.krogseth@allum.no", photo: null },
  { name: "Morten Allum", title: "Office Manager & Accountant", phone: "+47 986 19 667", email: "morten@allum.no", photo: "/images/team/morten-a.jpg" },
];

const board = [
  { name: "Øivind Allum", role: "Chairman", photo: "/images/team/oivind.jpg" },
  { name: "Frithjof Bettum", role: "Deputy Chairman", photo: null },
  { name: "Bjørn Håvard Brænden", role: "Board Member", photo: "/images/team/bjorn-havard.png" },
  { name: "Tor Martin Roed", role: "Board Member", photo: "/images/team/tor-martin.png" },
  { name: "Vegard Klavenes", role: "Board Member", photo: "/images/team/vegard.png" },
];

const industries = ["Subsea Cable", "Offshore", "Marine", "Process Industry", "Other"];
const projectTypes = ["Structural Analysis", "Mechanical Design", "Piping", "Naval Architecture", "Lifting", "Cable Handling", "Other"];
const timelines = ["ASAP", "1–3 months", "3–6 months", "6–12 months", "Planning phase"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Contact info + form */}
        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-24">
              {/* Left */}
              <div>
                <p className="text-gray-400 text-[13px] font-medium tracking-[0.1em] uppercase mb-5">
                  Contact
                </p>
                <h1 className="text-[#0f1a2e] text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.1]">
                  You can <span className="font-semibold">find us at</span>
                </h1>

                <div className="mt-10 space-y-5">
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-[0.1em] font-medium mb-1">Address</p>
                    <p className="text-[#0f1a2e] text-[15px]">Hinderveien 5, 3223 Sandefjord, Norway</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-[0.1em] font-medium mb-1">Email</p>
                    <a href="mailto:post@allum.no" className="text-[#0f1a2e] text-[15px] hover:text-gray-600 transition-colors cursor-pointer">post@allum.no</a>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-[0.1em] font-medium mb-1">Phone</p>
                    <a href="tel:+4733427170" className="text-[#0f1a2e] text-[15px] hover:text-gray-600 transition-colors cursor-pointer">+47 33 42 71 70</a>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-10 aspect-[16/9] bg-gray-100 border border-gray-200 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2048.5!2d10.22!3d59.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDA3JzQ4LjAiTiAxMMKwMTMnMTIuMCJF!5e0!3m2!1sen!2sno!4v1"
                    width="100%" height="100%"
                    style={{ border: 0, filter: "grayscale(0.3) opacity(0.8)" }}
                    allowFullScreen loading="lazy"
                    title="Allum Engineering location"
                  />
                </div>

                {/* Social */}
                <div className="mt-8 flex gap-4">
                  <a href="https://www.facebook.com/AllumGruppen/" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-[13px] hover:text-[#0f1a2e] transition-colors cursor-pointer">Facebook</a>
                  <a href="https://www.linkedin.com/company/3365602/" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-[13px] hover:text-[#0f1a2e] transition-colors cursor-pointer">LinkedIn</a>
                </div>
              </div>

              {/* Right — Form */}
              <div>
                {submitted ? (
                  <div className="bg-[#f7f7f7] border border-gray-200 p-10 text-center">
                    <Send className="w-6 h-6 text-[#0f1a2e] mx-auto mb-4" />
                    <h3 className="text-[#0f1a2e] text-[20px] font-semibold mb-2">Inquiry received</h3>
                    <p className="text-gray-500 text-[14px]">We&apos;ll respond within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-[#f7f7f7] border border-gray-200 p-6 lg:p-8 space-y-5">
                    <p className="text-[#0f1a2e] text-[18px] font-semibold mb-4">Request a Quote</p>
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
                      <textarea required rows={4} className="w-full border border-gray-300 bg-white px-4 py-3 text-[14px] text-[#111827] focus:border-[#0f1a2e] focus:outline-none transition-colors resize-none" placeholder="Describe your project, requirements and timeline..." />
                    </div>
                    <SelectField label="Estimated Timeline" options={timelines} />
                    <button type="submit" className="w-full h-12 bg-[#0f1a2e] text-white text-[14px] font-semibold hover:bg-[#1a2d4a] transition-colors cursor-pointer">Submit Request</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 lg:py-32 bg-[#f7f7f7]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <p className="text-gray-400 text-[13px] font-medium tracking-[0.1em] uppercase mb-5">
              Our Team
            </p>
            <h2 className="text-[#0f1a2e] text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.2] mb-12">
              Meet the <span className="font-semibold">people</span>
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {team.map((p) => (
                <div key={p.email} className="bg-white border border-gray-200 overflow-hidden group">
                  {/* Photo */}
                  <div className="relative aspect-[1/1] bg-gray-100 overflow-hidden">
                    {p.photo ? (
                      <Image src={p.photo} alt={p.name} fill className="object-cover object-top" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300 text-[40px] font-light">
                        {p.name.split(" ").map(n => n[0]).join("")}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#0f1a2e] text-[14px] font-semibold">{p.name}</h3>
                    <p className="text-gray-500 text-[12px] mt-0.5">{p.title}</p>
                    {(p as { discipline?: string }).discipline && (
                      <p className="text-gray-400 text-[11px] mt-0.5">{(p as { discipline?: string }).discipline}</p>
                    )}
                    <div className="mt-3 flex items-center gap-3">
                      <a href={`tel:${p.phone.replace(/\s/g, "")}`} className="text-gray-400 hover:text-[#0f1a2e] transition-colors cursor-pointer" title={p.phone}>
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                      <a href={`mailto:${p.email}`} className="text-gray-400 hover:text-[#0f1a2e] transition-colors cursor-pointer" title={p.email}>
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board */}
        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <p className="text-gray-400 text-[13px] font-medium tracking-[0.1em] uppercase mb-5">
              Board of Directors
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {board.map((b) => (
                <div key={b.name} className="flex items-center gap-3 bg-[#f7f7f7] border border-gray-200 p-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                    {b.photo ? (
                      <Image src={b.photo} alt={b.name} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-[14px] font-medium">
                        {b.name.split(" ").map(n => n[0]).join("")}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-[#0f1a2e] text-[13px] font-semibold">{b.name}</p>
                    <p className="text-gray-500 text-[11px]">{b.role}</p>
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
